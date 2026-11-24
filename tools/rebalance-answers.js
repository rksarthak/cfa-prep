#!/usr/bin/env node
// Rebalances correct-answer positions (A/B/C) by permuting options of questions whose "why" has no standalone A/B/C letter.
// usage: node rebalance.js file.js
const fs=require("fs"); const f=process.argv[2]; let s=fs.readFileSync(f,"utf8");
const re=/opts: (\[(?:"(?:[^"\\]|\\.)*"\s*,?\s*){3}\]),(\s*)ans: ([012]),(\s*)hint: ("(?:[^"\\]|\\.)*"),(\s*)why: ("(?:[^"\\]|\\.)*")/g;
const mqStart=s.indexOf("moduleQuiz:"); const testStart=s.indexOf("questions:");
const items=[]; let m;
while((m=re.exec(s))){ items.push({idx:m.index,len:m[0].length,m}); }
const groups={}; for(const it of items){ const g = (mqStart>0&&it.idx>mqStart)?"mq":"lq"; (groups[g]=groups[g]||[]).push(it);}
const out=[];
for(const g in groups){
  const arr=groups[g]; const cnt=[0,0,0]; arr.forEach(it=>cnt[+it.m[3]]++);
  const target=arr.length/3;
  for(const it of arr){
    const ans=+it.m[3]; const why=JSON.parse(it.m[7]);
    const movable=!/(^|[^A-Za-z&;])[ABC]($|[^A-Za-z])/.test(why.replace(/<[^>]+>/g," "));
    if(!movable) continue;
    if(cnt[ans]<=target) continue;
    const to=[0,1,2].sort((a,b)=>cnt[a]-cnt[b])[0];
    if(cnt[to]>=target) continue;
    const opts=JSON.parse(it.m[1]); const tmp=opts[ans]; opts[ans]=opts[to]; opts[to]=tmp;
    cnt[ans]--; cnt[to]++;
    it.rep=`opts: ${JSON.stringify(opts).replace(/","/g,'", "')},${it.m[2]}ans: ${to},${it.m[4]}hint: ${it.m[5]},${it.m[6]}why: ${it.m[7]}`;
  }
  out.push(g+": A"+cnt[0]+" B"+cnt[1]+" C"+cnt[2]);
}
items.sort((a,b)=>b.idx-a.idx).forEach(it=>{ if(it.rep) s=s.slice(0,it.idx)+it.rep+s.slice(it.idx+it.len); });
fs.writeFileSync(f,s); console.log(out.join(" | "), "matched", items.length);
