/*
 * Economics · Module 2 – Understanding Business Cycles (free module)
 * Original teaching text, examples and questions. The CFA Program curriculum is used only as a private
 * benchmark of topics and level; none of its text, exhibits or practice problems is reproduced.
 *
 * Question format: { q, opts:[A,B,C], ans:0|1|2, hint, why, lesson? }
 */
CFA.registerModule("econ", {
  num: 2,
  title: "Understanding Business Cycles",
  intro: "Economies do not grow in a straight line. They speed up, overheat, slow down, shrink and recover, and every phase changes what happens to jobs, inventories, investment, inflation and asset prices. This module explains the <b>phases of the business cycle</b>, how <b>credit cycles</b> amplify them, how firms, households, housing and trade behave in each phase, and how analysts read <b>leading, coincident and lagging indicators</b> to tell where the economy is now and where it is heading.",
  los: [
    "Describe what a business cycle is, the different ways of measuring it, and its four phases",
    "Describe credit cycles and how they interact with business cycles",
    "Explain how the use of labour, capital and inventories, consumer spending, housing and external trade change over the cycle",
    "Explain how leading, coincident and lagging indicators, composite and diffusion indexes, surveys and nowcasting are used to judge the phase of the cycle"
  ],
  lessons: [

    /* ===================================================== LESSON 1 */
    {
      id: "l1",
      title: "What a business cycle is, and three ways to measure it",
      summary: "Recurrent but not periodic swings in broad economic activity; classical, growth and growth-rate cycles and how their turning points differ.",
      los: [0],
      sections: [
        {
          title: "The idea",
          html: `
<p>A <b>business cycle</b> is a repeated pattern of expansion and contraction in economic activity that shows up across <b>many sectors at about the same time</b> (output, jobs, income, sales). Four points to remember:</p>
<ul>
<li>It is typical of economies where most work is organised in <b>business enterprises</b> (not farming-based or centrally planned economies).</li>
<li>Phases follow an expected <b>sequence</b>: expansion, then slowdown and contraction, then recovery.</li>
<li>It is <b>recurrent but not periodic</b>: cycles repeat, but they differ in length (from about a year to over a decade) and in strength.</li>
<li>Upswings usually last longer than downswings.</li>
</ul>
<div class="callout analogy"><span class="label">Analogy</span>Think of the seasons in a city with unpredictable weather: you know summer follows spring, but you cannot say on which date it will start or how hot it will get.</div>`
        },
        {
          title: "Three ways to define the cycle",
          html: `
<div class="tiles">
  <div class="tile"><h4>Classical cycle</h4><p>Swings in the <b>level</b> of activity (e.g. real GDP). A peak is the highest level; a trough is where the level stops falling. Needs an absolute fall in output, which is rare, so it is not used much.</p></div>
  <div class="tile c2"><h4>Growth cycle</h4><p>Swings of actual output <b>around its trend (potential) level</b>: the output gap. Peak = largest positive gap; trough = largest negative gap. The view most economists use.</p></div>
  <div class="tile c3"><h4>Growth-rate cycle</h4><p>Swings in the <b>growth rate</b> of activity. Turning points are spotted <b>earliest</b>, and no trend has to be estimated.</p></div>
</div>
<p><i>Example</i> (made-up economy, potential output grows 2% a year):</p>
<div class="table-wrap"><table>
<tr><th>Year</th><th class="num">Real GDP growth</th><th class="num">Output gap (actual vs potential)</th><th>What each view sees</th></tr>
<tr><td>1</td><td class="num">4.0%</td><td class="num">+1.0%</td><td>Growth fast</td></tr>
<tr><td>2</td><td class="num">3.0%</td><td class="num">+2.0%</td><td><b>Growth-rate</b> peak already passed (4% → 3%)</td></tr>
<tr><td>3</td><td class="num">2.0%</td><td class="num">+2.0%</td><td><b>Growth cycle</b> peak (gap stops widening)</td></tr>
<tr><td>4</td><td class="num">0.5%</td><td class="num">+0.5%</td><td>Level still rising: no classical peak yet</td></tr>
<tr><td>5</td><td class="num">−1.0%</td><td class="num">−2.5%</td><td><b>Classical</b> peak was at the end of year 4</td></tr>
</table></div>
<p>The order of turning points is the lesson: <b>growth-rate cycle first, then growth cycle, then classical cycle</b>.</p>`
        }
      ],
      traps: [
        "<b>Recurrent but not periodic:</b> cycles repeat, but not at fixed intervals or with the same strength.",
        "<b>Growth cycle</b> = output gap (actual vs potential); <b>growth-rate cycle</b> = growth rate itself; <b>classical</b> = level.",
        "<b>Growth-rate cycle turns first</b>; the classical cycle peaks last and needs an actual fall in output.",
        "<b>Business cycles</b> are features of market economies run mainly by businesses."
      ],
      quiz: [
        { q: "Which statement best describes business cycles?", opts: ["They repeat at regular, predictable intervals", "They affect only a few sectors at a time", "They recur, but vary in length and intensity"], ans: 2, hint: "Recurrent, but…", why: "Cycles are <b>recurrent but not periodic</b>: they vary in duration and strength, and they move many sectors together." },
        { q: "An analyst measures the cycle by the gap between actual GDP and its long-run potential. She is using the:", opts: ["classical cycle", "growth-rate cycle", "growth cycle"], ans: 2, hint: "Deviation from trend.", why: "Fluctuations <b>around trend/potential</b> output define the growth cycle." },
        { q: "Which cycle definition usually identifies turning points earliest?", opts: ["Classical cycle", "Growth cycle", "Growth-rate cycle"], ans: 2, hint: "Growth slows before the gap stops widening.", why: "The <b>growth-rate cycle</b> turns when growth peaks, which happens before the output gap or the level peaks." },
        { q: "The classical cycle is rarely used in practice mainly because:", opts: ["it requires estimating potential output", "absolute declines in output are infrequent and it mixes trend with short-term swings", "it turns too early to be useful"], ans: 1, hint: "What must happen to the level for a classical peak?", why: "A classical contraction needs an <b>actual fall</b> in output, which is uncommon, and it does not separate trend from short-run swings." },
        { q: "In the growth cycle, a peak occurs when:", opts: ["real GDP reaches its highest level", "the growth rate of GDP is highest", "the positive gap between actual and potential output is largest"], ans: 2, hint: "Growth cycle = gap.", why: "Growth-cycle peak = <b>largest positive output gap</b>. Highest level is the classical peak; highest growth rate is the growth-rate peak." },
        { q: "Potential GDP grows 2.5% a year. Actual growth slows from 4.0% to 3.0%. Over the year, the positive output gap most likely:", opts: ["narrowed", "stayed the same", "widened"], ans: 2, hint: "Is actual growth still above potential growth?", why: "Actual growth (3.0%) is still above potential (2.5%), so the gap <b>widens</b>, by about 0.5 point, even though growth is slowing." },
        { q: "Business cycles are most characteristic of economies that:", opts: ["are centrally planned", "rely mainly on subsistence farming", "organise most production in business enterprises"], ans: 2, hint: "The name is a clue.", why: "Business cycles are typical of market economies where most work happens in <b>business enterprises</b>." },
        { q: "Compared with the classical cycle, the growth cycle's peaks most likely occur:", opts: ["at the same time", "later", "earlier"], ans: 2, hint: "The gap stops widening while the level still rises.", why: "Output can keep rising after it stops outpacing potential, so the growth-cycle peak comes <b>earlier</b> than the classical peak." },
        { q: "Which statement about the length of cycle phases is most accurate?", opts: ["Contractions usually last longer than expansions", "Expansions and contractions are always equal in length", "Expansions usually last longer than contractions"], ans: 2, hint: "Think of how long downturns typically last.", why: "Upswings are usually <b>longer</b>; contractions are often shorter (and sharper)." }
      ]
    },

    /* ===================================================== LESSON 2 */
    {
      id: "l2",
      title: "The four phases: recovery, expansion, slowdown, contraction",
      summary: "What happens to activity, jobs and inflation in each phase, and how asset markets tend to behave.",
      los: [0],
      sections: [
        {
          title: "The phases around the output gap",
          html: `
<figure class="diagram">
<svg viewBox="0 0 380 190" width="100%" style="max-width:520px" role="img" aria-label="Output gap over the four phases">
  <line x1="20" y1="95" x2="370" y2="95" stroke="currentColor" stroke-dasharray="5 4"/>
  <text x="368" y="88" font-size="10" fill="currentColor" text-anchor="end">Potential output (gap = 0)</text>
  <path d="M20,150 C70,150 90,95 110,95 S 170,40 200,40 S 250,60 280,95 S 330,150 360,150" fill="none" style="stroke:var(--accent)" stroke-width="3"/>
  <text x="200" y="32" font-size="11" fill="currentColor" text-anchor="middle">Peak</text>
  <text x="25" y="168" font-size="11" fill="currentColor">Trough</text><text x="330" y="168" font-size="11" fill="currentColor">Trough</text>
  <text x="65" y="185" font-size="10" style="fill:var(--good)">Recovery</text>
  <text x="130" y="185" font-size="10" style="fill:var(--good)">Expansion</text>
  <text x="215" y="185" font-size="10" style="fill:var(--warn)">Slowdown</text>
  <text x="290" y="185" font-size="10" style="fill:var(--bad)">Contraction</text>
</svg>
<figcaption>Recovery closes a negative gap; expansion opens a positive gap; slowdown narrows it from its largest point; contraction opens a negative gap.</figcaption>
</figure>
<div class="table-wrap"><table>
<tr><th></th><th>Recovery</th><th>Expansion</th><th>Slowdown</th><th>Contraction</th></tr>
<tr><td>Output gap</td><td>Negative, starting to close</td><td>Turns positive and widens</td><td>Largest positive, starts to narrow</td><td>Turns negative</td></tr>
<tr><td>Activity</td><td>Below potential, picking up</td><td>Above-average growth</td><td>Above average but slowing</td><td>Below potential, weak</td></tr>
<tr><td>Jobs</td><td>Layoffs slow; overtime first, hiring later; unemployment still high</td><td>Hiring; unemployment falls</td><td>Hiring slows; unemployment falls more slowly</td><td>Hours and overtime cut, hiring frozen, then layoffs; unemployment rises</td></tr>
<tr><td>Inflation</td><td>Moderate</td><td>Picks up</td><td>Accelerates further</td><td>Slows, with a lag</td></tr>
</table></div>
<p>Late in an expansion, shortages appear (skilled workers, materials, capacity), firms borrow heavily to expand, and inflation speeds up. That combination is the signature of a cycle near its <b>peak</b>.</p>`
        },
        {
          title: "Markets over the cycle",
          html: `
<div class="timeline">
  <div class="ev"><b>Late contraction / recovery.</b> Markets look ahead: once investors expect the recession to end, <b>risky assets</b> (equities, high-yield bonds) are repriced upward, often while the economic news is still bad. Short-term interest rates are low; government bond yields may already start to rise.</div>
  <div class="ev"><b>Expansion.</b> Equities do well; credit spreads narrow; central banks begin raising rates as inflation picks up.</div>
  <div class="ev"><b>Slowdown.</b> Short-term rates are high; equities become volatile; investors move towards defensive sectors; the yield curve flattens or inverts.</div>
  <div class="ev"><b>Contraction.</b> Equities fall, high-quality government bonds rally (yields fall), credit spreads widen, and investors seek safety.</div>
</div>
<div class="callout key"><span class="label">Key idea</span>Asset prices <b>lead</b> the economy: markets react to what they expect, not to today's data.</div>`
        }
      ],
      traps: [
        "<b>Accelerating inflation + heavy borrowing for capacity</b> → near the <b>peak</b> (late expansion / slowdown), not early recovery.",
        "<b>Recovery</b> = negative gap closing; <b>slowdown</b> = positive gap narrowing. Both have \"gap shrinking\"; the sign differs.",
        "<b>Employment lags:</b> firms use overtime before hiring and cut hours before firing.",
        "<b>Markets lead:</b> equities often rise before the recession officially ends."
      ],
      quiz: [
        { q: "A report describes an economy with a large positive output gap that has started to narrow, firms hiring at a slower pace, and inflation still rising. The economy is most likely in:", opts: ["expansion", "slowdown", "recovery"], ans: 1, hint: "Largest positive gap, now narrowing.", why: "A positive gap past its widest point, slower hiring and still-rising inflation describe the <b>slowdown</b> phase." },
        { q: "During the recovery phase, businesses most likely:", opts: ["hire aggressively before using overtime", "cut hours and freeze hiring", "use overtime before hiring new workers"], ans: 2, hint: "They want proof the upturn is real.", why: "Early on firms <b>use overtime first</b> and hire only once they are confident; cutting hours is a contraction pattern." },
        { q: "An economist observes accelerating inflation and companies borrowing heavily to finance new factories. The economy is most likely near:", opts: ["the start of a recovery", "the trough of the cycle", "the peak of the cycle"], ans: 2, hint: "Shortages, borrowing for capacity, rising prices.", why: "Heavy capital spending financed by debt plus <b>accelerating inflation</b> is typical near the <b>peak</b>." },
        { q: "In which phase does the unemployment rate most likely start to rise?", opts: ["Slowdown", "Recovery", "Contraction"], ans: 2, hint: "When do layoffs begin?", why: "In <b>contraction</b> firms move from cutting hours to layoffs, so unemployment starts rising. In slowdown it is still falling, but more slowly." },
        { q: "Equity prices often rise while economic data are still weak at the end of a recession because:", opts: ["companies report record profits in recessions", "central banks buy equities directly", "investors price in the expected recovery"], ans: 2, hint: "Markets are forward looking.", why: "Asset prices reflect <b>expectations</b>; once a recovery is expected, risky assets are repriced upward." },
        { q: "Inflation in the contraction phase most likely:", opts: ["accelerates sharply", "is unaffected", "slows, but with a lag"], ans: 2, hint: "Price-setting reacts slowly.", why: "Weak demand eventually lowers inflation, but it <b>decelerates with a lag</b>." },
        { q: "A negative output gap that is beginning to close best describes:", opts: ["contraction", "slowdown", "recovery"], ans: 2, hint: "Below potential, but moving up.", why: "<b>Recovery</b>: output is below potential but rising faster than potential, closing the negative gap." },
        { q: "During a contraction, high-quality government bond prices most likely:", opts: ["fall, as yields rise", "stay unchanged", "rise, as yields fall"], ans: 2, hint: "Flight to safety and rate cuts.", why: "Investors seek safety and rates are cut, so yields fall and <b>prices rise</b>." },
        { q: "Which pairing of phase and characteristic is most accurate?", opts: ["Expansion: unemployment rate starts rising", "Recovery: inflation accelerates rapidly", "Slowdown: businesses continue hiring, but more slowly"], ans: 2, hint: "Check each pair against the phase table.", why: "In the <b>slowdown</b> firms still hire, just more slowly. Unemployment rises in contraction; inflation in recovery stays moderate." },
        { q: "Late in an expansion, firms most likely report:", opts: ["large inventories of unsold goods", "falling capacity utilisation", "difficulty finding qualified workers"], ans: 2, hint: "What becomes scarce when demand is strong for a long time?", why: "Strong, lasting demand creates <b>shortages</b>, especially of skilled labour. Falling utilisation and unsold inventory are contraction signs." }
      ]
    },

    /* ===================================================== LESSON 3 */
    {
      id: "l3",
      title: "Credit cycles",
      summary: "The changing availability and price of credit, why credit booms feed property and asset bubbles, and why credit cycles make recessions deeper.",
      los: [1],
      sections: [
        {
          title: "Credit loosens and tightens",
          html: `
<p>A <b>credit cycle</b> describes how easy (and how cheap) it is to borrow. It is measured with financial variables such as the amount of private credit, the credit-to-GDP ratio and real house prices, while the business cycle is measured by GDP.</p>
<div class="vflow">
  <div class="node">Good times: lenders are confident, collateral values rise, credit spreads narrow</div><div class="arrow">⬇</div>
  <div class="node">Credit expands faster than the economy: more mortgages, more construction, rising house and asset prices</div><div class="arrow">⬇</div>
  <div class="node">Rising prices make collateral look even safer → more lending (a feedback loop)</div><div class="arrow">⬇</div>
  <div class="node">Shock or tightening: defaults rise, lenders pull back, collateral values fall</div><div class="arrow">⬇</div>
  <div class="node">Credit contracts: spending and construction drop sharply</div>
</div>
<p>Credit matters most for sectors that run on borrowing: <b>construction and property purchases</b>.</p>`
        },
        {
          title: "How credit cycles shape business cycles",
          html: `
<ul>
<li>Credit cycles tend to be <b>longer, deeper and sharper</b> than business cycles.</li>
<li>When a business-cycle contraction coincides with a <b>credit contraction</b> (e.g. after a house-price bust), the recession tends to be <b>deeper and longer</b>; expansions that coincide with credit booms tend to be stronger.</li>
<li>Strong peaks in credit cycles are often followed by <b>banking crises</b>.</li>
</ul>
<p>Why analysts watch credit: it helps (1) read housing and construction, (2) judge how strong an expansion or how severe a recession may be, and (3) anticipate policy: besides monetary and fiscal policy, regulators now use <b>macroprudential</b> tools (e.g. limits on loan-to-value ratios, extra bank capital in booms) to dampen credit booms.</p>`
        }
      ],
      traps: [
        "<b>Business cycle</b> measured with GDP; <b>credit cycle</b> with credit volumes, credit-to-GDP and house prices.",
        "<b>Loose credit feeds bubbles</b>, it does not prevent them.",
        "Credit cycles are <b>longer and deeper</b>, not the same length as business cycles.",
        "The two cycles are <b>linked</b>: a recession plus a credit bust is usually worse."
      ],
      quiz: [
        { q: "Credit cycles are best described as cycles in:", opts: ["the availability and cost of credit", "the level of real GDP", "government budget balances"], ans: 0, hint: "What does credit mean?", why: "A credit cycle tracks how <b>available and how cheap</b> borrowing is." },
        { q: "Which sector is most closely linked to the credit cycle?", opts: ["Food retail", "Public administration", "Construction and property"], ans: 2, hint: "Which purchases rely most on borrowing?", why: "<b>Construction and property</b> purchases rely heavily on credit." },
        { q: "Compared with business cycles, credit cycles tend to be:", opts: ["shorter and milder", "identical in length", "longer and deeper"], ans: 2, hint: "Think of property booms and busts.", why: "Credit cycles tend to be <b>longer, deeper and sharper</b>." },
        { q: "A recession that coincides with a sharp contraction in credit will most likely be:", opts: ["milder than usual", "deeper and longer than usual", "unaffected by credit conditions"], ans: 1, hint: "Credit amplifies.", why: "Credit contraction cuts spending and investment further: <b>deeper, longer</b> recessions." },
        { q: "Analysts track credit conditions mainly because loose private credit:", opts: ["reduces the risk of asset bubbles", "can inflate asset and property bubbles that end in crises", "has no effect on the business cycle"], ans: 1, hint: "What happens when borrowing is very easy?", why: "Easy credit can fuel <b>asset and property bubbles</b>, often followed by crises." },
        { q: "A junior analyst says: \"Credit conditions only matter for banks; they have nothing to do with how deep a recession gets.\" The best response is that:", opts: ["recessions that coincide with credit contractions tend to be deeper and longer", "credit only affects inflation, not output", "credit cycles and business cycles always have the same length"], ans: 0, hint: "Are the two cycles linked?", why: "Credit and business cycles are <b>linked</b>: a credit contraction amplifies a downturn. Credit cycles are typically longer than business cycles." },
        { q: "Rising house prices during a credit boom most likely lead to more lending because:", opts: ["borrowers' collateral looks more valuable", "central banks require it", "interest rates must rise"], ans: 0, hint: "What secures a mortgage?", why: "Higher prices raise <b>collateral values</b>, making lenders more willing to lend: a feedback loop." },
        { q: "A regulator caps mortgage loan-to-value ratios during a property boom. This is best described as a:", opts: ["fiscal policy measure", "macroprudential policy measure", "trade policy measure"], ans: 1, hint: "Aimed at the stability of the financial system.", why: "Tools that dampen credit booms to protect financial stability are <b>macroprudential</b>." },
        { q: "Strong peaks in credit cycles have most often been followed by:", opts: ["banking crises", "periods of very high productivity", "falling unemployment"], ans: 0, hint: "What happens after a credit bubble bursts?", why: "Research links strong credit peaks with subsequent <b>systemic banking crises</b>." }
      ]
    },

    /* ===================================================== LESSON 4 */
    {
      id: "l4",
      title: "Jobs, capital spending and inventories over the cycle",
      summary: "Why employment lags, why productivity jumps late in recessions, the order in which capital spending is cut and restored, and the inventory–sales ratio.",
      los: [2],
      sections: [
        {
          title: "Workers and productivity",
          html: `
<p>Hiring and firing are <b>expensive</b> (search, training, severance, lost know-how), so firms adjust slowly:</p>
<ul>
<li>Going into a downturn they first cut <b>overtime and hours</b>, then freeze hiring, then lay off.</li>
<li>Coming out, they first add <b>hours</b>, then hire. So employment and the unemployment rate <b>lag</b> the cycle.</li>
<li>Late in a contraction, firms run <b>lean</b>: maximum output with the fewest workers. Output per hour (productivity) is therefore <b>high at the bottom</b> of a recession and early recovery.</li>
<li>Early in a recovery, discouraged workers <b>return to the labour force</b> to look for work; since they do not find jobs at once, the unemployment rate can even rise briefly.</li>
</ul>
<p><i>Example:</i> <b>Calder Components</b> (made up) produces 1,000 units with 50 workers (20 units each). In the recession it lets 10 go but squeezes out 900 units: 22.5 units per worker. Productivity rose even though output fell.</p>`
        },
        {
          title: "Capital spending: what is cut first and restored first",
          html: `
<div class="table-wrap"><table>
<tr><th>Phase</th><th>Capital spending</th></tr>
<tr><td>Recovery</td><td>Low but rising; focus on efficiency, not capacity. First orders: <b>software, technology and light equipment</b> (short lives, quick to order).</td></tr>
<tr><td>Expansion</td><td>Capacity utilisation rises, so firms add <b>capacity</b>: heavy equipment, warehouses, factories. New orders lead actual spending.</td></tr>
<tr><td>Slowdown</td><td>Firms near full capacity keep ordering; orders for new capacity late in the cycle can signal overinvestment.</td></tr>
<tr><td>Contraction</td><td>New orders stop and some are cancelled. <b>Technology and light equipment are cut first</b> (easy to cancel), then construction and heavy equipment; maintenance is deferred.</td></tr>
</table></div>
<p>Investment is one of the most <b>volatile and procyclical</b> parts of GDP. Besides utilisation, firms also look at whether their current capacity <b>fits</b> the pattern of demand (new types of equipment may be needed).</p>`
        },
        {
          title: "Inventories and the inventory–sales ratio",
          html: `
<p>Inventories are small relative to GDP but swing <b>sharply</b>, so they move growth figures a lot. The key gauge is the <b>inventory–sales ratio</b> = inventories ÷ sales.</p>
<div class="table-wrap"><table>
<tr><th>Phase</th><th>What happens</th><th>Inventory–sales ratio</th></tr>
<tr><td>Recovery</td><td>Sales recover faster than production (firms want proof first)</td><td><b>Falls</b></td></tr>
<tr><td>Expansion</td><td>Production rises to meet sales and rebuild stock (restocking)</td><td>Stable</td></tr>
<tr><td>Slowdown / near peak</td><td>Sales slow faster than production; unsold goods pile up</td><td><b>Rises</b></td></tr>
<tr><td>Contraction</td><td>Production cut below sales to clear unwanted stock</td><td>Falls back towards normal</td></tr>
</table></div>
<p><i>Example:</i> a distributor holds $60m of stock against $40m monthly sales (ratio 1.5). Sales slip to $32m while stock grows to $64m: the ratio jumps to 2.0, a sign the cycle has turned.</p>`
        }
      ],
      traps: [
        "<b>Productivity peaks near the trough</b> (lean production), not at the boom's peak.",
        "<b>Unemployment lags</b> because hiring and firing are costly; it can rise early in recovery as job seekers return.",
        "<b>Inventory–sales ratio rises near the peak</b>, falls in early recovery.",
        "<b>Light equipment and technology</b> are cut first and ordered first; heavy construction follows."
      ],
      quiz: [
        { q: "A car-parts maker produces 18 units per worker-hour at the height of a boom, 16 in mid-expansion, and an unusually high 21 at one point in the cycle. That point is most likely:", opts: ["the late stage of a recession, when the firm runs with minimum staff", "the very peak of the boom, when overtime is highest", "early expansion, when new hires are being trained"], ans: 0, hint: "When does a firm squeeze the most output from the fewest workers?", why: "Near the <b>bottom of a recession</b> firms run lean, so output per hour is highest. At the peak, tired staff and new, untrained hires drag productivity down." },
        { q: "Calder Components cuts its workforce from 80 to 60 while output falls from 1,600 to 1,380 units. Output per worker:", opts: ["rose from 20 to 23", "fell from 20 to 17.25", "was unchanged"], ans: 0, hint: "Units ÷ workers, before and after.", why: "1,600 ÷ 80 = 20; 1,380 ÷ 60 = <b>23</b>. Productivity rose although output fell." },
        { q: "Halden Logistics saw demand recover six months ago but has only just started hiring. The most likely reason for the delay is that:", opts: ["recruiting, training and later firing staff is costly, so firms wait to be sure the upturn will last", "unemployment statistics are published late", "workers refuse to change jobs during a recovery"], ans: 0, hint: "Why would a firm wait?", why: "Hiring and firing carry <b>real costs</b>, so firms use overtime first and add staff only when the upturn looks durable. This is why unemployment lags the cycle." },
        { q: "In the first quarter of a recovery, payroll jobs rise by 200,000 but the unemployment rate edges up from 7.1% to 7.2%. The most likely explanation is that:", opts: ["firms laid off more workers", "people who had stopped looking for work have started searching again", "productivity fell sharply"], ans: 1, hint: "What happened to the size of the labour force?", why: "Better prospects bring discouraged workers <b>back into the labour force</b>; until they find jobs they count as unemployed, so the rate can rise even as jobs grow." },
        { q: "In a contraction, which capital spending is most likely cut first?", opts: ["Large construction projects already under way", "Technology and light equipment orders", "Maintenance of heavy machinery already deferred"], ans: 1, hint: "What is easiest to cancel?", why: "<b>Technology and light equipment</b> have short lead times and are easy to cancel; big projects take longer to stop." },
        { q: "As a recovery begins, the inventory–sales ratio most likely:", opts: ["falls, as sales outpace production", "rises, as production outpaces sales", "is unchanged"], ans: 0, hint: "Firms are slow to ramp up production.", why: "Sales recover first while production lags, so stock falls relative to sales: the ratio <b>falls</b>." },
        { q: "A wholesaler's inventories rise from $90m to $99m while monthly sales fall from $60m to $55m. The inventory–sales ratio moved from 1.5 to:", opts: ["1.8, signalling weakening demand", "1.65, signalling a recovery", "1.4, signalling restocking"], ans: 0, hint: "99 ÷ 55.", why: "99 ÷ 55 = <b>1.8</b>. A rising ratio means unsold goods are piling up: a weakening economy." },
        { q: "During the expansion phase, capital spending most likely shifts towards:", opts: ["software upgrades only", "adding capacity with heavy equipment and new facilities", "cancelling existing orders"], ans: 1, hint: "Utilisation is rising.", why: "As utilisation rises, firms invest in <b>capacity</b>: heavy equipment, warehouses, factories." },
        { q: "During a two-year recession, a mining company's fleet of trucks shrinks in effective size although it sells none of them. The most likely reason is that the company:", opts: ["let the trucks age and postponed maintenance", "leased extra trucks", "accelerated replacement purchases"], ans: 0, hint: "The quiet way capital shrinks.", why: "In downturns the capital stock shrinks mainly through <b>ageing and deferred maintenance</b>, not fire sales." },
        { q: "Why do changes in inventories have a large effect on GDP growth despite being small relative to the economy?", opts: ["Because they swing up and down sharply", "Because they are measured at market prices", "Because they include all fixed investment"], ans: 0, hint: "Size vs volatility.", why: "Inventory accumulation and run-downs are <b>large and fast swings</b>, which move growth figures." }
      ]
    },

    /* ===================================================== LESSON 5 */
    {
      id: "l5",
      title: "Consumers, housing and external trade over the cycle",
      summary: "Durables vs non-durables vs services, what drives housing activity, and how the trade balance moves with the cycle.",
      los: [2],
      sections: [
        {
          title: "Consumers",
          html: `
<p>Household spending is the largest part of GDP in most economies. Its parts react differently:</p>
<div class="table-wrap"><table>
<tr><th>Type</th><th>Examples</th><th>Cyclical?</th></tr>
<tr><td><b>Durable goods</b></td><td>Cars, appliances, furniture</td><td><b>Most cyclical</b>: purchases can be postponed in bad times and bunch up in good times</td></tr>
<tr><td>Non-durable goods</td><td>Food, toiletries, clothing</td><td>Less cyclical</td></tr>
<tr><td>Services</td><td>Healthcare, utilities, haircuts</td><td>Least cyclical (some, like travel and dining out, are more sensitive)</td></tr>
</table></div>
<p>Spending follows <b>income</b> (especially income expected to last), consumer confidence and the cost and availability of credit. Analysts watch retail sales, real personal income and confidence surveys. Households tend to smooth spending, so the <b>saving rate</b> often rises in uncertain times.</p>`
        },
        {
          title: "Housing",
          html: `
<p>Housing is a small share of GDP but very <b>cyclical</b>, because purchases are big and financed with credit. Key drivers:</p>
<ul>
<li><b>Mortgage rates</b>: lower rates raise affordability and demand.</li>
<li><b>House prices relative to income</b>: when prices run far ahead of incomes, demand eventually weakens.</li>
<li><b>Credit availability</b> (the credit cycle) and <b>demographics</b> (household formation).</li>
</ul>
<p>Indicators: building permits (leading), housing starts, mortgage applications.</p>`
        },
        {
          title: "External trade",
          html: `
<p>Exports depend mainly on <b>foreign</b> GDP; imports depend mainly on <b>domestic</b> GDP. Exchange rates matter too: a weaker currency makes exports cheaper abroad and imports dearer at home, though the effect builds over time.</p>
<p>So in a domestic expansion that is stronger than abroad, imports rise faster than exports and the trade balance tends to <b>worsen</b>; in a domestic recession imports fall and the trade balance tends to improve.</p>
<p><i>Example:</i> Country A grows 4% while its partners grow 1%. A's imports grow faster than its exports, so its trade deficit widens, even if nothing has changed in its competitiveness.</p>`
        }
      ],
      traps: [
        "<b>Durables</b> are the most cyclical consumer spending; services the least.",
        "<b>Exports follow foreign GDP; imports follow domestic GDP.</b>",
        "<b>Strong domestic growth worsens the trade balance</b> (imports rise).",
        "<b>Housing</b> is driven by mortgage rates, prices vs income, credit and demographics."
      ],
      quiz: [
        { q: "Which type of consumer spending is most likely to fall the most in a recession?", opts: ["Spending on groceries", "Spending on new cars", "Spending on electricity"], ans: 1, hint: "Which purchase can wait?", why: "<b>Durables</b> such as cars can be postponed, so they swing most with the cycle." },
        { q: "Country Rayan grows 5% while its main trading partners grow 1%. With no change in exchange rates, Rayan's trade balance will most likely:", opts: ["improve", "worsen", "stay the same"], ans: 1, hint: "Imports follow domestic income.", why: "Fast domestic growth pulls in imports faster than exports grow: the trade balance <b>worsens</b>." },
        { q: "A country's exports depend mainly on:", opts: ["domestic GDP growth", "foreign GDP growth", "the domestic saving rate"], ans: 1, hint: "Who buys exports?", why: "Exports are bought by foreigners, so they depend on <b>foreign income</b>." },
        { q: "Which development would most likely boost housing demand?", opts: ["A fall in mortgage rates", "House prices rising much faster than incomes", "Tighter lending standards"], ans: 0, hint: "Affordability.", why: "<b>Lower mortgage rates</b> raise affordability. Prices outpacing income and tighter credit reduce demand." },
        { q: "Consumer spending on healthcare services over the cycle is most likely:", opts: ["highly cyclical", "relatively stable", "more volatile than car purchases"], ans: 1, hint: "Necessities.", why: "Essential services are <b>least cyclical</b>." },
        { q: "During times of high uncertainty, households most likely:", opts: ["raise their saving rate", "increase purchases of durables", "borrow more to consume"], ans: 0, hint: "Precaution.", why: "Uncertainty leads households to save more and delay big purchases: the <b>saving rate rises</b>." },
        { q: "A domestic recession, with partner economies still growing, most likely causes the trade balance to:", opts: ["improve, as imports fall", "worsen, as exports fall", "be unaffected"], ans: 0, hint: "Domestic income drops.", why: "Imports fall with domestic income while exports hold up: the balance <b>improves</b>." },
        { q: "Why is housing more cyclical than its share of GDP would suggest?", opts: ["Because purchases are large and heavily dependent on credit", "Because house prices never fall", "Because housing is a service"], ans: 0, hint: "How are houses bought?", why: "Big purchases financed with <b>credit</b> respond strongly to rates and credit conditions." },
        { q: "A currency depreciates sharply. The effect on the trade balance is most likely:", opts: ["immediate and complete", "to improve it gradually as trade volumes adjust", "to worsen it permanently"], ans: 1, hint: "Contracts and habits take time to change.", why: "Cheaper exports and dearer imports help, but volumes adjust <b>over time</b>." }
      ]
    },

    /* ===================================================== LESSON 6 */
    {
      id: "l6",
      title: "Economic indicators: leading, coincident and lagging",
      summary: "The three types of indicators with examples, composite indexes, diffusion indexes, surveys, big data and nowcasting.",
      los: [3],
      sections: [
        {
          title: "Three families of indicators",
          html: `
<div class="tiles">
  <div class="tile"><h4>Leading (turn before the economy)</h4><p>Average weekly hours in manufacturing; weekly initial jobless claims; new orders for consumer goods and for core capital goods; purchasing-manager (ISM/PMI) new-order indexes; building permits; stock prices; a leading credit index; the spread between long-term bond yields and the short-term policy rate; consumer expectations.</p></div>
  <div class="tile c2"><h4>Coincident (turn with the economy)</h4><p>Employees on non-farm payrolls; aggregate real personal income (excluding transfers); industrial production; manufacturing and trade sales.</p></div>
  <div class="tile c3"><h4>Lagging (turn after the economy)</h4><p>Average duration of unemployment; inventory–sales ratio; change in unit labour costs; average bank prime lending rate; commercial and industrial loans outstanding; consumer instalment credit relative to income; change in services consumer prices.</p></div>
</div>
<div class="callout analogy"><span class="label">Analogy</span>Driving at night: leading indicators are your headlights (the road ahead), coincident indicators the speedometer (where you are now), lagging indicators the rear-view mirror (confirming where you have been).</div>`
        },
        {
          title: "Why the logic works",
          html: `
<ul>
<li><b>Hours worked</b> lead because firms change overtime before headcount.</li>
<li><b>Building permits</b> lead because they come before construction starts.</li>
<li><b>Stock prices</b> lead because markets price in expected profits.</li>
<li><b>Yield spread</b>: long-term yields reflect expected future short rates. A wide spread (long rates well above the policy rate) anticipates growth; a <b>narrowing spread or inversion</b> (short rates above long rates) signals expected rate cuts and weaker activity.</li>
<li><b>Prime rate and business loans</b> lag because banks adjust rates and borrowers repay only after the turn.</li>
<li><b>Consumer instalment debt to income</b> lags because households borrow more only after incomes have been rising for a while.</li>
</ul>`
        },
        {
          title: "Composite indexes, diffusion indexes, surveys and nowcasting",
          html: `
<ul>
<li><b>Composite indexes</b> combine several indicators (e.g. a 10-part leading index for one country, or an OECD composite leading indicator built the same way across countries for easy comparison). Their components and formulas are <b>revised over time</b> as experience accumulates, and no single index is foolproof.</li>
<li><b>Diffusion index</b>: the share of an index's components that are moving in the same direction (e.g. 7 of 10 rising = 70%). It shows how <b>broad</b> a move is.</li>
<li><b>Surveys</b> (purchasing managers, business climate, consumer confidence) are timely and capture expectations, but are mostly qualitative.</li>
<li><b>Big data</b>: statistical techniques (such as principal components) distil the common trend from dozens or hundreds of series.</li>
<li><b>Nowcasting</b>: estimating the <b>current</b> state of the economy in real time (GDP is published with a long delay) using timely data such as payments, internet searches and market prices. It estimates the present; it is not a forecast of the future.</li>
</ul>`
        }
      ],
      traps: [
        "<b>Industrial production</b> is coincident; <b>average weekly hours</b> leading; <b>prime rate</b> lagging.",
        "<b>Narrowing spread</b> (long yields minus policy rate) → expected decline; wide spread → expected growth.",
        "<b>Nowcasting estimates the present</b>, not the future.",
        "<b>Composite indexes change composition over time</b> and are not perfectly reliable.",
        "<b>Diffusion index</b> = breadth of a move, not its size."
      ],
      quiz: [
        { q: "An analyst wants one indicator that tends to change direction before the economy does. Which is the best choice?", opts: ["Manufacturing and trade sales", "Weekly initial claims for unemployment insurance", "Change in services consumer prices"], ans: 1, hint: "Which one turns first?", why: "<b>Initial jobless claims</b> are leading. Manufacturing and trade sales are coincident; services inflation is lagging." },
        { q: "Nowcasting is best described as:", opts: ["forecasting GDP several years ahead from historical trends", "estimating the current state of the economy in real time from timely data", "studying past relationships between variables"], ans: 1, hint: "Now.", why: "Nowcasting estimates the <b>present</b> because official data arrive late." },
        { q: "The gap between 10-year government bond yields and the short-term policy rate narrows sharply. This most likely signals:", opts: ["stronger growth ahead", "weaker activity ahead", "no change in the outlook"], ans: 1, hint: "What does a flatter curve say about expected short rates?", why: "A narrowing spread means markets expect lower short rates, i.e. <b>weaker activity</b>." },
        { q: "Of 10 components in a leading index, 3 rose, 2 were unchanged and 5 fell this month. A diffusion index measuring the share of rising components is:", opts: ["30%", "50%", "−20%"], ans: 0, hint: "Rising components ÷ total.", why: "3 ÷ 10 = <b>30%</b>, showing the move is not broad-based." },
        { q: "Which of the following is a coincident indicator?", opts: ["Building permits for new homes", "Employees on non-farm payrolls", "Commercial and industrial loans outstanding"], ans: 1, hint: "Moves with current activity.", why: "<b>Payroll employment</b> is coincident. Permits lead; business loans lag." },
        { q: "A research body revises its composite leading index, dropping one component and adding a credit measure. This is best described as:", opts: ["a sign the index is unreliable and should be ignored", "normal: composite indexes are updated as evidence on what works accumulates", "required, because composite indexes may contain only leading indicators"], ans: 1, hint: "Are these indexes fixed forever?", why: "Composite indexes are <b>revised over time</b> as experience grows. They are useful but not foolproof, and some mix several indicator types." },
        { q: "Why are building permits a leading indicator?", opts: ["Permits must be obtained before construction can begin", "Banks issue them after loans are repaid", "They measure current construction spending"], ans: 0, hint: "Order of events.", why: "A permit comes <b>before</b> building starts, so it signals future activity." },
        { q: "The ratio of consumer instalment debt to income is classified as:", opts: ["leading", "coincident", "lagging"], ans: 2, hint: "Households borrow after incomes have been rising.", why: "It rises after incomes have improved for a while: <b>lagging</b>." },
        { q: "A key advantage of business and consumer surveys as indicators is that they:", opts: ["are precise, quantitative measures of output", "are timely and capture expectations", "never need to be combined with other data"], ans: 1, hint: "What do they ask about?", why: "Surveys are <b>timely</b> and capture confidence and expectations, though they are mostly qualitative." },
        { q: "The average bank prime lending rate is most likely a:", opts: ["leading indicator", "coincident indicator", "lagging indicator"], ans: 2, hint: "Banks react after the turn.", why: "Banks change the prime rate after policy and conditions have changed: <b>lagging</b>." }
      ]
    },

    /* ===================================================== LESSON 7 */
    {
      id: "l7",
      title: "Reading the signals: putting indicators together",
      summary: "Using combinations of leading, coincident and lagging indicators to say whether a turn has happened, is happening or is expected.",
      los: [3],
      sections: [
        {
          title: "A simple decision rule",
          html: `
<div class="tree">
  <div class="q">Which type of indicator moved?</div>
  <div class="branches">
    <div class="branch"><div class="if">Leading indicators turn</div><div class="then">A turn is <b>expected</b></div></div>
    <div class="branch"><div class="if">Coincident indicators turn</div><div class="then">A turn is <b>happening now</b></div></div>
    <div class="branch"><div class="if">Lagging indicators turn</div><div class="then">A turn <b>has already happened</b> (confirmation)</div></div>
  </div>
</div>
<p>No single indicator is reliable on its own. The strongest signal comes from <b>several indicators of different types pointing the same way</b>. A lagging indicator that is "flat" says little either way.</p>`
        },
        {
          title: "Worked examples",
          html: `
<div class="timeline">
  <div class="ev"><b>Case 1.</b> Jobless claims fall (leading, good), real personal income rises (coincident, good), stock prices rise (leading, good). → An upturn is <b>under way</b> and expected to continue.</div>
  <div class="ev"><b>Case 2.</b> The inventory–sales ratio has jumped (lagging, bad), unit labour costs have stopped rising (lagging), industrial production is falling (coincident, bad). → A peak <b>has already occurred</b>; the economy is contracting.</div>
  <div class="ev"><b>Case 3.</b> New orders for capital goods are rising (leading, good), average duration of unemployment is rising (lagging, bad), services inflation is unchanged (lagging, neutral). → The lagging data describe the past downturn; the leading data point to a <b>coming upturn</b>.</div>
  <div class="ev"><b>Case 4.</b> Industrial production is flat (coincident, neutral) while the stock market rises (leading). → Not enough to say a recovery is under way: the coincident data do not confirm it.</div>
</div>
<div class="callout key"><span class="label">Method</span>1) Label each indicator: leading, coincident or lagging. 2) Note its direction. 3) Leading = future, coincident = present, lagging = past. 4) Conclude only what the combination supports.</div>`
        }
      ],
      traps: [
        "<b>Do not read a lagging indicator as a forecast.</b> Rising unemployment duration describes the past.",
        "<b>Coincident + leading both up</b> → upturn occurring (and expected to continue).",
        "<b>Lagging indicators turning down</b> after a coincident fall → the peak has already happened.",
        "<b>A neutral (flat) indicator</b> adds little; do not over-read it.",
        "<b>Combinations beat single indicators.</b>"
      ],
      quiz: [
        { q: "Payroll employment and manufacturing and trade sales both rise, and the leading credit index improves. The most accurate conclusion is that an upturn is:", opts: ["happening now and likely to continue", "about to end", "expected, but not yet under way"], ans: 0, hint: "Two coincident indicators plus one leading.", why: "Coincident indicators rising = expansion <b>happening now</b>; the improving leading index suggests it will continue." },
        { q: "This month's data: manufacturers' new orders for core capital goods are rising, commercial and industrial loans outstanding are still falling, and the inventory–sales ratio is unchanged. These data are best read as:", opts: ["evidence of a coming upturn", "evidence of a coming downturn", "contradictory evidence with no conclusion"], ans: 0, hint: "Which of these looks ahead?", why: "Core capital-goods orders (leading) point up. Falling business loans (lagging) describe the past downturn; a flat inventory–sales ratio (lagging) is neutral. Conclusion: an <b>upturn is expected</b>." },
        { q: "Industrial production has fallen for two months, the average duration of unemployment has started to lengthen, and the prime rate is unchanged. Relative to the cycle's peak, it is most likely that the peak:", opts: ["has already occurred", "is about to occur", "will occur some time in the future"], ans: 0, hint: "A coincident indicator has already fallen.", why: "Falling industrial production (coincident) shows activity is weakening now; lengthening unemployment duration (lagging) confirms it: the peak <b>has occurred</b>." },
        { q: "Which combination is most consistent with a recovery from recession?", opts: ["Weekly hours in manufacturing rising and industrial production rising", "Stock prices rising and the average prime rate rising after a long fall", "Building permits falling and payrolls flat"], ans: 0, hint: "You need an improving leading AND an improving coincident indicator.", why: "Rising hours (leading) plus rising production (coincident) = <b>recovery</b>. A rising prime rate is a lagging signal of an upturn that started much earlier; falling permits point down." },
        { q: "Which statement about using economic indicators is most accurate?", opts: ["Leading indicators alone track the whole economy", "Lagging indicators never need revision", "Combining leading and coincident indicators gives better forecasts than any single one"], ans: 2, hint: "No indicator is definitive.", why: "A <b>mix</b> of indicators gives the strongest signal; all data can be revised." },
        { q: "Commercial and industrial loans outstanding begin to fall. On its own, this most likely tells an analyst that:", opts: ["a downturn will start soon", "a downturn has probably already started", "an upturn is beginning"], ans: 1, hint: "What type of indicator is it?", why: "Business loans are <b>lagging</b>: their fall confirms a downturn that has already begun." },
        { q: "An analyst sees new orders for consumer goods falling and the ISM new orders index dropping below its neutral level, while industrial production is still rising. The best conclusion is:", opts: ["the economy is contracting now", "the expansion is continuing now, but a slowdown is likely ahead", "a recovery is beginning"], ans: 1, hint: "Present vs future.", why: "Coincident data (production) say the economy is still growing <b>now</b>; leading data warn of <b>weakness ahead</b>." },
        { q: "Which observation would best confirm that a recovery has taken hold?", opts: ["A rise in the ratio of consumer instalment debt to income after income has been growing", "A narrowing yield spread", "A jump in initial jobless claims"], ans: 0, hint: "Lagging indicators confirm.", why: "The debt-to-income ratio is <b>lagging</b>; its rise after income growth confirms an upturn has been under way." },
        { q: "Equity prices have been rising for three months, but industrial production and payrolls are flat. An analyst should most likely conclude that:", opts: ["a recovery is confirmed", "there is not yet enough evidence that a recovery is under way", "a recession has begun"], ans: 1, hint: "Do coincident data confirm?", why: "Leading signals alone are not confirmation; with flat coincident data, <b>no firm conclusion</b> about a recovery yet." }
      ]
    }
  ],

  /* ===================================================== MODULE QUIZ */
  moduleQuiz: [
    { lesson: 1, q: "A strategist says: \"Business cycles repeat every seven years, so the next recession is due in 2031.\" The main flaw is that business cycles are:", opts: ["only found in planned economies", "limited to single sectors", "recurrent but not periodic"], ans: 2, hint: "Do they repeat at fixed intervals?", why: "Cycles <b>repeat but vary in length</b>, so timing cannot be read from a fixed period." },
    { lesson: 1, q: "Real GDP growth slows from 3.5% to 2.8%, while potential growth is 2.0%. In growth-rate-cycle terms the economy has passed a peak; in growth-cycle terms the output gap is:", opts: ["negative", "narrowing", "still widening"], ans: 2, hint: "Actual vs potential growth.", why: "Actual growth (2.8%) still exceeds potential (2.0%), so the positive gap is <b>still widening</b>." },
    { lesson: 1, q: "Which cycle concept requires an estimate of potential output?", opts: ["Classical cycle", "Growth cycle", "Growth-rate cycle"], ans: 1, hint: "Deviation from what?", why: "The <b>growth cycle</b> measures the gap from trend, so potential must be estimated. The growth-rate cycle does not need it." },
    { lesson: 1, q: "In a classical cycle, a trough occurs when:", opts: ["the growth rate is lowest", "the output gap is largest and negative", "the level of real GDP stops falling and starts rising"], ans: 2, hint: "Classical = level.", why: "The classical trough is the <b>lowest level</b> of output." },
    { lesson: 2, q: "An economy shows activity below potential but rising, slowing layoffs, firms using overtime instead of hiring, and moderate inflation. It is most likely in:", opts: ["slowdown", "expansion", "recovery"], ans: 2, hint: "Negative gap closing.", why: "These are the marks of <b>recovery</b>." },
    { lesson: 2, q: "Which set of conditions most likely describes the peak of a business cycle?", opts: ["Low inflation, firms using overtime before hiring, high unemployment", "Inflation falling, layoffs rising, inventories being cut", "Inflation speeding up, firms borrowing to add capacity, unemployment low"], ans: 2, hint: "Overheating.", why: "Accelerating inflation, debt-financed capacity and tight labour mark the <b>peak</b>. The others describe contraction and recovery." },
    { lesson: 2, q: "A survey of firms in a long expansion finds most reporting unfilled vacancies, rising overtime and delayed projects because of staff shortages. The economy is most likely in the:", opts: ["late expansion", "early recovery", "contraction"], ans: 0, hint: "When are skilled workers scarce?", why: "A long, strong expansion tightens the labour market until <b>qualified workers are hard to find</b>: a late-expansion sign." },
    { lesson: 2, q: "In which phase does the unemployment rate typically continue to fall but at a slower pace?", opts: ["Recovery", "Slowdown", "Contraction"], ans: 1, hint: "Hiring slows.", why: "In the <b>slowdown</b> firms still hire, but more slowly." },
    { lesson: 2, q: "Investors who expect a recession to end soon are most likely to:", opts: ["buy only short-term deposits", "sell all equities", "buy risky assets such as equities and high-yield bonds"], ans: 2, hint: "Markets price expectations.", why: "Expected recovery leads to <b>repricing of risky assets upward</b>." },
    { lesson: 3, q: "Which variable is least likely used to measure the credit cycle?", opts: ["Credit-to-GDP ratio", "Real house prices", "The unemployment rate"], ans: 2, hint: "Two are financial variables.", why: "Credit cycles use financial measures like credit-to-GDP and house prices; <b>unemployment</b> is a labour market measure." },
    { lesson: 3, q: "An economy enters recession just as a house-price boom ends and banks tighten lending. Compared with a typical recession, this one will most likely be:", opts: ["shorter and milder", "longer and deeper", "unaffected by credit"], ans: 1, hint: "Credit amplifies.", why: "A recession coinciding with a <b>credit contraction</b> tends to be deeper and longer." },
    { lesson: 3, q: "During a credit boom, lending tends to increase further because:", opts: ["banks are required to lend more", "interest rates must rise", "rising asset prices raise collateral values"], ans: 2, hint: "Feedback loop.", why: "Higher asset prices raise <b>collateral values</b>, encouraging more lending." },
    { lesson: 3, q: "Policies such as higher capital requirements for banks during a credit boom are mainly aimed at:", opts: ["raising tax revenue", "dampening financial booms to protect financial stability", "weakening the currency"], ans: 1, hint: "Macroprudential.", why: "Macroprudential tools aim to <b>dampen credit booms</b> and prevent crises." },
    { lesson: 4, q: "Productivity (output per hour) is most likely to rise when:", opts: ["hiring is strongest in mid-expansion", "the economy is at the peak of a boom", "a recession is ending and firms run with minimum staff"], ans: 2, hint: "Lean production.", why: "Near the <b>end of a recession</b>, firms maximise output with the fewest workers." },
    { lesson: 4, q: "Which pattern best describes employment over the cycle?", opts: ["Employment turns before the economy does", "Firms hire as soon as demand rises and fire as soon as it falls", "Firms cut hours before cutting jobs, and add hours before adding jobs"], ans: 2, hint: "Adjustment costs.", why: "Because hiring and firing are costly, firms adjust <b>hours first</b>, so headcount and unemployment lag." },
    { lesson: 4, q: "Near the top of a cycle, the inventory–sales ratio most likely:", opts: ["remains stable", "falls, as sales outpace production", "rises, as sales slow before production is cut"], ans: 2, hint: "Unsold goods.", why: "Sales slow first; inventories pile up: the ratio <b>rises</b>." },
    { lesson: 4, q: "A downturn begins. Which item in a manufacturer's capital budget is most likely to be cut first?", opts: ["A new factory already half built", "Laptops and software upgrades", "A warehouse with a signed construction contract"], ans: 1, hint: "Short lead times, easy to cancel.", why: "<b>Technology and light equipment</b> orders are easiest to cancel; large construction projects take longer to stop." },
    { lesson: 4, q: "In early recovery, a manufacturer's sales rise 8% while production rises 3%. Its inventories most likely:", opts: ["fall", "rise", "stay constant"], ans: 0, hint: "Sales outpace production.", why: "Selling faster than producing draws stock <b>down</b>; restocking comes later." },
    { lesson: 4, q: "A printing firm runs at 90% capacity, but its presses suit long print runs while customers now order short, customised runs. Its capital spending is most likely to:", opts: ["rise, because its capacity no longer matches demand", "fall, because utilisation is high", "stay unchanged until utilisation reaches 100%"], ans: 0, hint: "Right kind of capacity.", why: "Besides utilisation, firms invest when existing capacity <b>does not fit</b> the pattern of demand." },
    { lesson: 5, q: "Which spending category is most sensitive to the business cycle?", opts: ["Durable goods", "Non-durable goods", "Essential services"], ans: 0, hint: "Postponable purchases.", why: "<b>Durables</b> can be delayed in bad times and bunch up in good times." },
    { lesson: 5, q: "Country Teva expands quickly while its trade partners are in recession. Teva's trade balance will most likely:", opts: ["improve, because exports rise", "worsen, because imports rise faster than exports", "be unaffected"], ans: 1, hint: "Imports follow domestic income; exports follow foreign income.", why: "Teva's imports rise with its strong income while weak partners buy less: the balance <b>worsens</b>." },
    { lesson: 5, q: "Which change would most likely reduce housing activity?", opts: ["Lower mortgage rates", "Faster household formation", "House prices rising far faster than incomes"], ans: 2, hint: "Affordability.", why: "Prices far above incomes cut <b>affordability</b>; the others boost demand." },
    { lesson: 5, q: "Retail sales and confidence surveys are mainly used to monitor:", opts: ["consumer spending", "capital spending", "government spending"], ans: 0, hint: "Who shops?", why: "They track <b>household</b> spending and sentiment." },
    { lesson: 6, q: "Which is a lagging indicator?", opts: ["Average duration of unemployment", "Manufacturers' new orders for consumer goods", "Industrial production"], ans: 0, hint: "Unemployment lasts longer after the downturn has started.", why: "<b>Duration of unemployment</b> lags; new orders lead; industrial production is coincident." },
    { lesson: 6, q: "A long-term bond yield of 4.5% and a policy rate of 5.0% means the yield curve is:", opts: ["steep, signalling growth", "inverted, signalling expected weakness", "flat, signalling no information"], ans: 1, hint: "Short rate above long rate.", why: "Short rates above long rates = <b>inversion</b>, a warning of weaker activity ahead." },
    { lesson: 6, q: "Which of the following is a leading indicator?", opts: ["Aggregate real personal income", "Stock market index", "Average bank prime lending rate"], ans: 1, hint: "Forward-looking prices.", why: "<b>Stock prices</b> anticipate turning points; income is coincident, prime rate lagging." },
    { lesson: 6, q: "A central bank combines daily card-payment data, web searches and financial prices to estimate this quarter's GDP before official data appear. This is:", opts: ["nowcasting", "a lagging indicator", "a diffusion index"], ans: 0, hint: "Estimating the present.", why: "Real-time estimation of current GDP is <b>nowcasting</b>." },
    { lesson: 6, q: "A diffusion index of a 10-component leading index reads 80%. This most likely means:", opts: ["the index rose 80%", "8 of the 10 components moved in the same direction", "the economy is 80% of potential"], ans: 1, hint: "Breadth, not size.", why: "A diffusion index shows the <b>share of components</b> moving together." },
    { lesson: 6, q: "Why is the OECD composite leading indicator useful for comparing countries?", opts: ["It uses only stock prices", "It applies a consistent method across countries", "It is never revised"], ans: 1, hint: "Same method everywhere.", why: "Its <b>consistent methodology</b> across countries makes comparisons easier." },
    { lesson: 6, q: "Which indicator is coincident?", opts: ["Industrial production index", "Building permits", "Change in unit labour costs"], ans: 0, hint: "Measures current output.", why: "<b>Industrial production</b> moves with the economy; permits lead; unit labour costs lag." },
    { lesson: 7, q: "Initial jobless claims fall, real personal income rises and the leading credit index improves. The best conclusion is that:", opts: ["a recovery is under way and expected to continue", "a peak has occurred", "the evidence is contradictory"], ans: 0, hint: "Coincident plus leading, same direction.", why: "Improving coincident and leading indicators point to a recovery <b>under way and continuing</b>." },
    { lesson: 7, q: "Industrial production falls for three months, then the average prime rate and business loans also start to fall. These lagging moves most likely:", opts: ["confirm the downturn", "signal an upturn ahead", "contradict the industrial production data"], ans: 0, hint: "Lagging = confirmation.", why: "Lagging indicators turning after the coincident one <b>confirm</b> the downturn." },
    { lesson: 7, q: "Rising equity prices with unit labour costs turning from rising to falling is most likely:", opts: ["clear evidence of recovery", "mixed evidence, with the lagging signal pointing to a downturn that has already happened", "evidence of a peak about to occur"], ans: 1, hint: "Which is lagging?", why: "Equities (leading) look up, but falling unit labour costs (lagging) reflect a downturn already in place: <b>mixed</b> evidence, not a clear recovery signal." },
    { lesson: 7, q: "An analyst sees the ratio of consumer instalment debt to income rising after a period of income growth. This most likely:", opts: ["predicts a recession", "confirms that an upturn has been under way", "indicates the economy is at a trough"], ans: 1, hint: "Lagging.", why: "This lagging indicator rises after incomes improve: <b>confirmation</b> of an upturn." },
    { lesson: 7, q: "Which series most likely turns up only after the coincident indicators have been rising for several months?", opts: ["Commercial and industrial loans outstanding", "Average weekly hours in manufacturing", "Building permits"], ans: 0, hint: "Lagging.", why: "Business loans are <b>lagging</b>; weekly hours and building permits lead." },
    { lesson: 7, q: "Weekly hours in manufacturing start rising, building permits rise, and payrolls are still falling. The economy is most likely:", opts: ["near a trough, with an upturn expected", "at a peak", "in mid-expansion"], ans: 0, hint: "Leading up, coincident still down.", why: "Leading indicators turning up while coincident data are still weak suggests a <b>trough and upturn ahead</b>." }
  ]
});
