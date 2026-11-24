-- ============================================================
-- Visitor counter (cookie-free). Safe to run again.
-- Run once in Supabase: SQL Editor → New query → paste → Run.
--
-- Every page opened on the site adds one row here, for guests and signed-in students alike.
-- No cookies and nothing stored in the visitor's browser. A visitor is recognised only within
-- one day, by a one-way fingerprint of (IP address + browser + date + a secret). The IP address
-- itself is never saved, and the fingerprint changes every day, so nobody can be tracked across days.
-- Only admins can see the totals (through visitor_stats()); nobody can read the raw rows.
-- ============================================================
create table if not exists public.page_views (
  id         bigint generated always as identity primary key,
  day        date        not null default (now() at time zone 'Asia/Kolkata')::date,
  path       text        not null,                  -- e.g. "/s/fsa/m/1/l/3"
  visitor    text        not null,                  -- daily fingerprint (md5), never the IP itself
  signed_in  boolean     not null default false,
  created_at timestamptz not null default now()
);
create index if not exists page_views_day on public.page_views (day);
alter table public.page_views enable row level security;
-- No policies on purpose: the browser can't read or write this table directly; it only goes through the two functions below.

-- The secret mixed into the fingerprint (made once, never shown to anyone).
create table if not exists public.visit_secret (id int primary key default 1 check (id = 1), salt text not null);
alter table public.visit_secret enable row level security;
insert into public.visit_secret (salt) values (md5(random()::text || clock_timestamp()::text)) on conflict (id) do nothing;

create or replace function public.log_visit(p_path text) returns void
  language plpgsql security definer set search_path = public
  as $$
declare
  h     json := coalesce(nullif(current_setting('request.headers', true), ''), '{}')::json;
  ip    text := coalesce(h->>'cf-connecting-ip', split_part(coalesce(h->>'x-forwarded-for', ''), ',', 1), '');
  ua    text := coalesce(h->>'user-agent', '');
  today date := (now() at time zone 'Asia/Kolkata')::date;
begin
  if public.is_admin() then return; end if;                       -- your own visits don't count
  if ua ~* '(bot|crawl|spider|slurp|preview|headless|lighthouse)' then return; end if;
  insert into public.page_views (day, path, visitor, signed_in)
  values (today,
          left(coalesce(nullif(p_path, ''), '/'), 120),
          md5(trim(ip) || '|' || ua || '|' || today::text || '|' || (select salt from public.visit_secret where id = 1)),
          auth.uid() is not null);
end $$;
grant execute on function public.log_visit(text) to anon, authenticated;

-- Totals for the admin page. Returns nothing useful to anyone who isn't an admin.
create or replace function public.visitor_stats() returns json
  language plpgsql stable security definer set search_path = public
  as $$
declare
  today date := (now() at time zone 'Asia/Kolkata')::date;
  result json;
begin
  if not public.is_admin() then raise exception 'Only admins can see visitor numbers'; end if;
  with per_day as (
    select day,
           count(distinct visitor)                                   as visitors,
           count(distinct visitor) filter (where not signed_in)      as guests,
           count(*)                                                  as views
    from public.page_views group by day
  ),
  sums as (
    select label, coalesce(sum(visitors), 0) as visitors, coalesce(sum(guests), 0) as guests, coalesce(sum(views), 0) as views
    from (values ('today', 0), ('last7', 6), ('last30', 29), ('all', 100000)) as r(label, back)
    left join per_day on per_day.day >= today - r.back
    group by label
  ),
  top as (
    select path, count(*) as views, count(distinct visitor || day::text) as visitors
    from public.page_views where day >= today - 29
    group by path order by views desc limit 15
  )
  select json_build_object(
    'since',   (select min(day) from public.page_views),
    'signups', json_build_object(
                 'all',    (select count(*) from auth.users),
                 'last7',  (select count(*) from auth.users where (created_at at time zone 'Asia/Kolkata')::date >= today - 6),
                 'last30', (select count(*) from auth.users where (created_at at time zone 'Asia/Kolkata')::date >= today - 29)),
    'totals',  (select json_object_agg(label, json_build_object('visitors', visitors, 'guests', guests, 'views', views)) from sums),
    'days',    (select coalesce(json_agg(d order by d.day desc), '[]'::json) from (
                  select g::date as day, coalesce(p.visitors, 0) as visitors, coalesce(p.guests, 0) as guests, coalesce(p.views, 0) as views
                  from generate_series(today - 13, today, interval '1 day') g left join per_day p on p.day = g::date) d),
    'pages',   (select coalesce(json_agg(t), '[]'::json) from top t)
  ) into result;
  return result;
end $$;
revoke execute on function public.visitor_stats() from anon;
grant execute on function public.visitor_stats() to authenticated;
