/*
 * Economics · Module 1 – The Firm and Market Structures (free module)
 * Original teaching text, examples and questions. The CFA Program curriculum is used only as a private
 * benchmark of topics and level; none of its text, exhibits or practice problems is reproduced.
 *
 * Question format: { q, opts:[A,B,C], ans:0|1|2, hint, why, lesson? }
 */
CFA.registerModule("econ", {
  num: 1,
  title: "The Firm and Market Structures",
  intro: "Why does one coffee shop keep its doors open while losing money, while another closes the same week? Why do airlines match each other's fare cuts within hours, but a small bakery can raise prices a little without losing every customer? This module builds the toolkit to answer both: <b>revenue and cost curves</b>, the <b>breakeven and shutdown</b> rules, <b>economies of scale</b>, and the four <b>market structures</b> (perfect competition, monopolistic competition, oligopoly and monopoly), plus how analysts measure how concentrated a market is.",
  los: [
    "Work out and explain the breakeven and shutdown points of a firm, and how economies and diseconomies of scale change its costs",
    "Describe the main features of perfect competition, monopolistic competition, oligopoly and monopoly",
    "Explain how a firm in monopolistic competition chooses its price and output, and how its demand and profits change over time",
    "Explain how firms in an oligopoly set price and output, and the main oligopoly pricing models",
    "Identify which market structure a firm operates in, and explain how concentration ratios and the HHI are used and where they fall short"
  ],
  lessons: [

    /* ===================================================== LESSON 1 */
    {
      id: "l1",
      title: "Profit, revenue and cost: the economist's toolkit",
      summary: "Accounting vs economic profit, normal profit, total/average/marginal revenue, and fixed, variable, average and marginal cost.",
      los: [0],
      sections: [
        {
          title: "Two kinds of profit",
          html: `
<p>An accountant and an economist look at the same business and can disagree about whether it made money. The difference is <b>opportunity cost</b>: the value of the best alternative you gave up.</p>
<div class="tiles">
  <div class="tile"><h4>Accounting profit</h4><p>Total revenue − <b>explicit</b> costs (the bills actually paid: wages, rent, materials, interest).</p></div>
  <div class="tile c2"><h4>Economic profit</h4><p>Total revenue − explicit costs − <b>implicit</b> opportunity costs (the owner's time and money that could have earned something elsewhere).</p></div>
  <div class="tile c3"><h4>Normal profit</h4><p>The accounting profit that just covers the implicit opportunity costs. When accounting profit = normal profit, <b>economic profit is zero</b>.</p></div>
</div>
<p><i>Example:</i> Meera runs <b>Saffron Lane Bakery</b> (made up). Last year revenue was ₹90 lakh and the bills came to ₹60 lakh, so accounting profit = <b>₹30 lakh</b>. But Meera could earn ₹18 lakh a year as a manager elsewhere, and the ₹100 lakh she has tied up in the bakery could earn 8% (₹8 lakh) in a deposit. Implicit costs = 18 + 8 = ₹26 lakh.</p>
<p>Economic profit = 30 − 26 = <b>₹4 lakh</b>. Normal profit for Meera is ₹26 lakh: anything below that, and she would be better off closing the bakery and taking the job.</p>
<div class="callout key"><span class="label">Key idea</span>Zero economic profit is <b>not</b> a disaster. It means the owner earns exactly what the resources could earn in their next best use: a <b>normal</b> return.</div>`
        },
        {
          title: "Revenue: total, average and marginal",
          html: `
<div class="table-wrap"><table>
<tr><th>Term</th><th>Definition</th><th>Formula</th></tr>
<tr><td>Total revenue (TR)</td><td>Everything received from sales</td><td>P × Q</td></tr>
<tr><td>Average revenue (AR)</td><td>Revenue per unit sold</td><td>TR ÷ Q (= price)</td></tr>
<tr><td>Marginal revenue (MR)</td><td>Extra revenue from selling one more unit</td><td>ΔTR ÷ ΔQ</td></tr>
</table></div>
<p>The shape of demand decides how MR behaves:</p>
<ul>
<li><b>Price taker</b> (perfect competition): the firm can sell any amount at the market price. Every extra unit brings in that price, so <b>P = AR = MR</b>.</li>
<li><b>Price searcher</b> (every other structure): to sell one more unit, the firm must cut the price on <b>all</b> units. So the extra revenue is less than the price: <b>MR &lt; P</b>.</li>
</ul>
<p><i>Example:</i> A pottery studio sells 10 mugs at ₹500 (TR ₹5,000). To sell 11 it must charge ₹480 on all of them (TR ₹5,280). MR of the 11th mug = 5,280 − 5,000 = <b>₹280</b>, well below its ₹480 price, because the first 10 mugs each lost ₹20.</p>`
        },
        {
          title: "Cost: fixed, variable, average and marginal",
          html: `
<p>In the <b>short run</b> at least one input (usually the plant or equipment) is fixed. Costs split in two:</p>
<ul>
<li><b>Total fixed cost (TFC)</b>: does not change with output (rent, insurance, plant). Paid even at zero output.</li>
<li><b>Total variable cost (TVC)</b>: rises with output (materials, hourly labour, energy).</li>
<li><b>Total cost (TC)</b> = TFC + TVC.</li>
</ul>
<p>Small example, <b>Ridgeway Printing</b> (made up), fixed cost $400 a day:</p>
<div class="table-wrap"><table>
<tr><th class="num">Q (jobs)</th><th class="num">TFC</th><th class="num">TVC</th><th class="num">TC</th><th class="num">AFC = TFC/Q</th><th class="num">AVC = TVC/Q</th><th class="num">ATC = TC/Q</th><th class="num">MC = ΔTC/ΔQ</th></tr>
<tr><td class="num">10</td><td class="num">400</td><td class="num">300</td><td class="num">700</td><td class="num">40.0</td><td class="num">30.0</td><td class="num">70.0</td><td class="num">–</td></tr>
<tr><td class="num">20</td><td class="num">400</td><td class="num">500</td><td class="num">900</td><td class="num">20.0</td><td class="num">25.0</td><td class="num">45.0</td><td class="num">20</td></tr>
<tr><td class="num">30</td><td class="num">400</td><td class="num">800</td><td class="num">1,200</td><td class="num">13.3</td><td class="num">26.7</td><td class="num">40.0</td><td class="num">30</td></tr>
<tr><td class="num">40</td><td class="num">400</td><td class="num">1,300</td><td class="num">1,700</td><td class="num">10.0</td><td class="num">32.5</td><td class="num">42.5</td><td class="num">50</td></tr>
</table></div>
<p>Notice the pattern: <b>AFC always falls</b> (the same $400 is spread over more jobs). AVC and ATC are <b>U-shaped</b>. MC is the extra cost of each extra block of output; when MC is <b>below</b> an average, it pulls the average down, and when it is <b>above</b>, it pulls the average up. So <b>MC cuts AVC and ATC at their minimum points</b>.</p>
<div class="callout analogy"><span class="label">Analogy</span>Your class average is 70. A new student scores 60 (a "marginal" score below the average): the average falls. A student who scores 90 pulls it up. Marginal cost does the same to average cost.</div>`
        }
      ],
      traps: [
        "<b>Economic profit &lt; accounting profit</b> whenever there are implicit costs. Economic profit = accounting profit − implicit opportunity costs.",
        "<b>Zero economic profit = normal profit</b>, not a loss.",
        "<b>MR = P only for a price taker.</b> A firm facing downward-sloping demand has MR below price.",
        "<b>AFC falls forever</b>; AVC and ATC are U-shaped; the gap between ATC and AVC is AFC.",
        "<b>MC crosses AVC and ATC at their lowest points.</b>"
      ],
      quiz: [
        { q: "Kalpana's design studio earns revenue of $250,000 and pays explicit costs of $170,000. Kalpana could earn $65,000 working for an agency, and her $100,000 of capital in the studio could earn 5% elsewhere. Her economic profit is closest to:", opts: ["$80,000", "$15,000", "$10,000"], ans: 2, hint: "Subtract both implicit costs from accounting profit.", why: "Accounting profit = 250 − 170 = $80,000. Implicit costs = 65,000 + 5,000 = $70,000. Economic profit = <b>$10,000</b>. $80,000 is accounting profit; $15,000 forgets the return on capital." },
        { q: "A firm earns exactly normal profit. Its economic profit is:", opts: ["zero", "positive and equal to accounting profit", "negative"], ans: 0, hint: "Normal profit covers all opportunity costs.", why: "Normal profit just covers implicit opportunity costs, so economic profit is <b>zero</b>. Accounting profit is still positive." },
        { q: "For a firm that is a price taker, which statement is most accurate?", opts: ["Marginal revenue is below price", "Price, average revenue and marginal revenue are equal", "Average revenue falls as output rises"], ans: 1, hint: "Every extra unit sells at the same market price.", why: "A price taker sells every unit at the market price, so <b>P = AR = MR</b>. MR below price and falling AR describe a firm facing downward-sloping demand." },
        { q: "A furniture maker sells 40 tables a month at $300 each. To sell 41 it must cut the price to $295 on all tables. The marginal revenue of the 41st table is closest to:", opts: ["$295", "$100", "$95"], ans: 2, hint: "TR at 41 minus TR at 40.", why: "TR(40) = 12,000; TR(41) = 41 × 295 = 12,095. MR = <b>$95</b> (= 295 − 40 × $5). $295 is the price, not MR; $100 uses the old price ($300) minus the $200 lost on the first 40 tables." },
        { q: "A bottling plant pays monthly rent of $6,000 and spends $2 of materials and power per bottle. At 4,000 bottles, average total cost per bottle is:", opts: ["$3.50", "$2.00", "$1.50"], ans: 0, hint: "(Fixed + variable) ÷ quantity.", why: "TC = 6,000 + 2 × 4,000 = 14,000. ATC = 14,000 ÷ 4,000 = <b>$3.50</b>. $2.00 is AVC only; $1.50 is AFC only." },
        { q: "As a firm's output rises in the short run, average fixed cost most likely:", opts: ["falls continuously", "is U-shaped", "stays constant"], ans: 0, hint: "The same fixed amount is spread over more units.", why: "TFC is constant, so TFC ÷ Q <b>falls continuously</b>. Total fixed cost is constant, not average fixed cost." },
        { q: "Total cost is $5,600 at 70 units and $5,750 at 75 units. Marginal cost per unit over this range is:", opts: ["$80", "$76.67", "$30"], ans: 2, hint: "Change in total cost ÷ change in quantity.", why: "ΔTC ÷ ΔQ = 150 ÷ 5 = <b>$30</b>. $80 and $76.67 are average total costs at 70 and 75 units." },
        { q: "When marginal cost is below average variable cost, average variable cost is most likely:", opts: ["rising", "at its minimum", "falling"], ans: 2, hint: "A low marginal score pulls the average down.", why: "Any unit that costs less than the current average pulls the average <b>down</b>. AVC is at its minimum only where MC = AVC." },
        { q: "Which statement about economic and accounting profit is most accurate?", opts: ["Economic profit is never greater than accounting profit", "Economic profit includes only explicit costs", "Accounting profit subtracts the owner's forgone salary"], ans: 0, hint: "Which one subtracts more costs?", why: "Economic profit subtracts explicit <b>and</b> implicit costs, so it is <b>never greater</b> than accounting profit. Accounting profit ignores the owner's forgone salary." },
        { q: "At its current output a firm's average total cost is $50 and its average variable cost is $38. If output is 1,000 units, total fixed cost is:", opts: ["$38,000", "$50,000", "$12,000"], ans: 2, hint: "ATC − AVC = AFC.", why: "AFC = 50 − 38 = $12 per unit; × 1,000 = <b>$12,000</b>. $38,000 is TVC and $50,000 is TC." }
      ]
    },

    /* ===================================================== LESSON 2 */
    {
      id: "l2",
      title: "Profit maximisation, breakeven and shutdown",
      summary: "Produce where MR = MC; breakeven at price = minimum ATC; keep operating in the short run while price covers AVC; exit in the long run if price stays below ATC.",
      los: [0],
      sections: [
        {
          title: "Where profit is largest: MR = MC",
          html: `
<p>Keep producing while one more unit adds more to revenue than to cost (MR &gt; MC). Stop where the next unit would add more to cost than to revenue. The best output is where <b>MR = MC</b>, with MC rising at that point (if MC is still falling, producing more would add even more profit).</p>
<div class="callout key"><span class="label">Rule</span>Maximum economic profit: <b>MR = MC</b> and MC not falling. For a price taker MR = P, so the rule becomes <b>P = MC</b>.</div>`
        },
        {
          title: "Breakeven and shutdown: the three-zone picture",
          html: `
<figure class="diagram">
<svg viewBox="0 0 360 230" width="100%" style="max-width:480px" role="img" aria-label="Cost curves with breakeven and shutdown prices">
  <line x1="30" y1="200" x2="340" y2="200" stroke="currentColor"/><line x1="30" y1="200" x2="30" y2="10" stroke="currentColor"/>
  <text x="335" y="215" font-size="11" fill="currentColor" text-anchor="end">Quantity</text><text x="34" y="18" font-size="11" fill="currentColor">Price, cost</text>
  <path d="M60,40 Q190,180 320,40" fill="none" style="stroke:var(--accent)" stroke-width="2.5"/>
  <path d="M40,95 Q150,205 260,95" fill="none" style="stroke:var(--good)" stroke-width="2.5"/>
  <path d="M45,160 C95,200 125,175 150,150 S 230,70 280,15" fill="none" style="stroke:var(--bad)" stroke-width="2.5"/>
  <line x1="30" y1="110" x2="330" y2="110" stroke="currentColor" stroke-dasharray="5 4"/>
  <line x1="30" y1="150" x2="330" y2="150" stroke="currentColor" stroke-dasharray="5 4"/>
  <text x="318" y="38" font-size="11" style="fill:var(--accent)">ATC</text><text x="262" y="92" font-size="11" style="fill:var(--good)">AVC</text><text x="284" y="18" font-size="11" style="fill:var(--bad)">MC</text>
  <text x="34" y="105" font-size="10" fill="currentColor">Breakeven price = min ATC</text>
  <text x="34" y="145" font-size="10" fill="currentColor">Shutdown price = min AVC</text>
</svg>
<figcaption>MC cuts AVC and ATC at their lowest points. Above min ATC: economic profit. Between min AVC and min ATC: a loss, but keep operating in the short run. Below min AVC: shut down.</figcaption>
</figure>
<div class="table-wrap"><table>
<tr><th>Revenue compared with costs</th><th>Short run</th><th>Long run</th></tr>
<tr><td>TR ≥ TC (P ≥ ATC)</td><td>Operate (profit or breakeven)</td><td>Stay</td></tr>
<tr><td>TVC ≤ TR &lt; TC (AVC ≤ P &lt; ATC)</td><td><b>Keep operating</b>: revenue covers variable cost and part of fixed cost</td><td>Exit</td></tr>
<tr><td>TR &lt; TVC (P &lt; AVC)</td><td><b>Shut down</b>: operating loses more than the fixed cost</td><td>Exit</td></tr>
</table></div>
<div class="callout analogy"><span class="label">Analogy</span>You have paid a year's rent on a food stall (fixed, already sunk). Each day the stall costs ₹2,000 in ingredients and staff, and brings in ₹2,500. You lose money overall because of the rent, but opening still beats closing: each day earns ₹500 towards the rent. If daily takings fell to ₹1,800, every day open would add ₹200 to the loss, so you would stay closed.</div>`
        },
        {
          title: "Worked example: the ferry company",
          html: `
<p><b>Lakeview Ferries</b> (made up) has fixed costs of $60,000 a month (boat lease, licences) and variable costs of $90,000 a month at its normal schedule.</p>
<div class="table-wrap"><table>
<tr><th>Monthly revenue</th><th>Compared with costs</th><th>Short-run decision</th><th>Monthly result</th></tr>
<tr><td class="num">$170,000</td><td>Above TC $150,000</td><td>Operate</td><td>Profit $20,000</td></tr>
<tr><td class="num">$120,000</td><td>Above TVC, below TC</td><td>Operate</td><td>Loss $30,000 (shutting would lose $60,000)</td></tr>
<tr><td class="num">$80,000</td><td>Below TVC $90,000</td><td>Shut down</td><td>Loss $60,000 if closed vs $70,000 if open</td></tr>
</table></div>
<p>In the long run, every cost is variable: Lakeview stays in business only if revenue is at least <b>$150,000</b> (total cost).</p>`
        },
        {
          title: "Firms that face downward-sloping demand",
          html: `
<p>Under imperfect competition the same rules hold: produce where MR = MC; breakeven means TR = TC; shut down in the short run if TR &lt; TVC. The difference is that price falls as output rises, so TR first rises then falls. There can be <b>two</b> breakeven quantities (one low, one high), with a profit zone in between. The profit-maximising output lies between them, where MR = MC.</p>
<p>One more point: costs that are <b>sunk</b> (already spent and unrecoverable) do not affect the shutdown decision. Only costs that can still be avoided matter.</p>`
        }
      ],
      traps: [
        "<b>Shutdown is about AVC, breakeven is about ATC.</b> Shutdown price = minimum AVC; breakeven price = minimum ATC.",
        "<b>A loss does not mean shut down.</b> If revenue covers variable cost, operating loses less than closing.",
        "<b>Long run: all costs are variable.</b> To stay in the market, revenue must cover total cost.",
        "<b>Profit maximum: MR = MC</b>, with MC rising. For price takers that is P = MC.",
        "<b>Sunk costs are ignored</b> in the decision to operate or shut down."
      ],
      quiz: [
        { q: "A firm in a perfectly competitive market should shut down in the short run when the market price falls below:", opts: ["minimum average total cost", "marginal revenue", "minimum average variable cost"], ans: 2, hint: "Can revenue still cover the costs it can avoid?", why: "Below minimum <b>AVC</b>, each unit sold loses more than its variable cost, so operating loses more than the fixed cost. Below minimum ATC the firm makes a loss but should keep operating." },
        { q: "A price-taking firm breaks even when the market price equals:", opts: ["minimum average variable cost", "average fixed cost", "minimum average total cost"], ans: 2, hint: "Breakeven means TR = TC.", why: "TR = TC means P = ATC; the lowest price at which that is possible is <b>minimum ATC</b>. Minimum AVC is the shutdown point." },
        { q: "A laundry earns monthly revenue of $42,000. Its variable costs are $35,000 and fixed costs are $12,000. In the short run the laundry should most likely:", opts: ["shut down, because it makes a loss", "raise output until price equals average fixed cost", "keep operating, because revenue covers variable cost"], ans: 2, hint: "Compare the loss from operating with the loss from closing.", why: "Operating loses 42 − 47 = −$5,000; closing loses the $12,000 fixed cost. <b>Keep operating</b>: revenue covers variable cost and $7,000 of fixed cost." },
        { q: "Same laundry (variable costs $35,000, fixed costs $12,000 a month). If nothing changes, the minimum monthly revenue needed to stay in the market in the long run is:", opts: ["$35,000", "$12,000", "$47,000"], ans: 2, hint: "In the long run all costs must be covered.", why: "Long run: revenue must cover total cost = 35,000 + 12,000 = <b>$47,000</b>. $35,000 is the short-run shutdown threshold." },
        { q: "Copperleaf Studios' revenue covers all its wages and materials but only half of its lease payments, which run for two more years. For now, the best course is most likely to:", opts: ["keep producing, and decide at the end of the lease whether to leave the market", "stop production at once to avoid further losses", "cut its price until revenue equals the lease payments"], ans: 0, hint: "Does operating add to or reduce the loss?", why: "Revenue covers variable cost and part of the fixed lease, so operating loses less than closing; <b>keep producing</b> and decide on exit when the lease (a long-run choice) can be avoided." },
        { q: "A price taker sells at $24. At its current output, marginal cost is $19 and rising. To increase profit, the firm should:", opts: ["increase output", "reduce output", "keep output unchanged"], ans: 0, hint: "Does the next unit add more to revenue or to cost?", why: "MR ($24) &gt; MC ($19): one more unit adds $5 to profit, so <b>increase output</b> until MC rises to $24." },
        { q: "A cinema has paid a non-refundable annual licence of $50,000. When deciding whether to open on weekday afternoons, the licence fee should:", opts: ["be spread over the afternoon screenings", "be compared with afternoon ticket revenue", "be ignored, because it is a sunk cost"], ans: 2, hint: "Can it still be avoided?", why: "The fee is already paid and cannot be recovered, so it is <b>sunk</b> and irrelevant. Only the extra costs of opening (staff, power) matter." },
        { q: "The table shows a firm's costs per unit at its best output: ATC $62, AVC $48, MC $55. The market price is $52. In the short run, the firm will most likely:", opts: ["shut down, because price is below ATC", "earn an economic profit", "keep operating at a loss"], ans: 2, hint: "Compare price with AVC and with ATC.", why: "Price ($52) is above AVC ($48) but below ATC ($62): a loss, but each unit covers its variable cost plus $4 towards fixed cost, so it <b>keeps operating</b>." },
        { q: "For a firm facing a downward-sloping demand curve, which statement is most accurate?", opts: ["It has one breakeven output, where price equals marginal cost", "It maximises profit where total revenue is largest", "It may have two breakeven outputs, with maximum profit between them where MR = MC"], ans: 2, hint: "TR first rises then falls as price is cut.", why: "TR can cross TC twice, giving <b>two breakeven</b> points; profit is largest between them where MR = MC. Maximum TR (MR = 0) ignores costs." },
        { q: "At a market price of $30, a firm's minimum AVC is $26 and minimum ATC is $34. If price falls to $25, the firm should:", opts: ["keep operating, because fixed costs must be paid anyway", "keep operating, because price is above average fixed cost", "shut down in the short run"], ans: 2, hint: "Which threshold has price crossed?", why: "At $25 price is below minimum AVC ($26): every unit adds to the loss, so <b>shut down</b> and lose only the fixed cost." }
      ]
    },

    /* ===================================================== LESSON 3 */
    {
      id: "l3",
      title: "Economies and diseconomies of scale",
      summary: "Long-run average cost, why it falls then rises, minimum efficient scale, and what a firm should do on each side of it.",
      los: [0],
      sections: [
        {
          title: "Short run vs long run",
          html: `
<p>In the <b>short run</b> the plant is fixed, so the firm moves along one short-run ATC curve. In the <b>long run</b> it can choose any plant size. The <b>long-run average cost (LRAC)</b> curve shows the lowest cost per unit for each output when the firm can pick the best plant. It wraps around the bottom of all the short-run ATC curves (an "envelope").</p>
<figure class="diagram">
<svg viewBox="0 0 360 200" width="100%" style="max-width:480px" role="img" aria-label="Long-run average cost curve">
  <line x1="30" y1="175" x2="340" y2="175" stroke="currentColor"/><line x1="30" y1="175" x2="30" y2="10" stroke="currentColor"/>
  <text x="335" y="190" font-size="11" fill="currentColor" text-anchor="end">Output</text><text x="34" y="18" font-size="11" fill="currentColor">Cost per unit</text>
  <path d="M45,40 C110,150 230,150 320,45" fill="none" style="stroke:var(--accent)" stroke-width="3"/>
  <line x1="182" y1="132" x2="182" y2="175" stroke="currentColor" stroke-dasharray="4 3"/>
  <text x="182" y="188" font-size="10" fill="currentColor" text-anchor="middle">Minimum efficient scale</text>
  <text x="70" y="128" font-size="11" style="fill:var(--good)">Economies of scale</text><text x="70" y="141" font-size="10" style="fill:var(--good)">(LRAC falling)</text>
  <text x="228" y="100" font-size="11" style="fill:var(--bad)">Diseconomies</text><text x="228" y="113" font-size="10" style="fill:var(--bad)">(LRAC rising)</text>
</svg>
<figcaption>Left of the minimum: bigger is cheaper per unit. Right of the minimum: bigger is dearer per unit.</figcaption>
</figure>`
        },
        {
          title: "Why costs per unit fall, then rise",
          html: `
<div class="tiles">
  <div class="tile"><h4>Economies of scale (LRAC slopes down)</h4><p>Specialised workers and machines; bulk-buying discounts; better, larger-scale technology; fixed costs such as R&amp;D and advertising spread over more units; learning by doing.</p></div>
  <div class="tile c3"><h4>Diseconomies of scale (LRAC slopes up)</h4><p>Bureaucracy and slower decisions; <b>overlapping or duplicated</b> functions and product lines; hard-to-coordinate teams; a large firm bidding up the price of scarce inputs.</p></div>
</div>
<p><b>Constant returns to scale</b>: output rises in the same proportion as inputs, so cost per unit does not change (a flat stretch of LRAC).</p>
<p>The lowest point of LRAC is the <b>minimum efficient scale</b>. In a perfectly competitive industry, long-run competition pushes firms to produce there: a firm left of it should <b>grow</b>; a firm right of it should <b>shrink</b>.</p>`
        },
        {
          title: "Worked example: choosing a plant size",
          html: `
<p><b>Northwind Solar</b> (made up) can build one of four plants. Total long-run cost for each:</p>
<div class="table-wrap"><table>
<tr><th>Plant</th><th class="num">Panels a year</th><th class="num">Total cost ($m)</th><th class="num">Cost per panel ($)</th><th>Zone</th></tr>
<tr><td>Small</td><td class="num">20,000</td><td class="num">6.0</td><td class="num">300</td><td>Economies</td></tr>
<tr><td>Medium</td><td class="num">50,000</td><td class="num">11.0</td><td class="num">220</td><td>Economies</td></tr>
<tr><td>Large</td><td class="num">100,000</td><td class="num">18.0</td><td class="num">180</td><td><b>Minimum (MES)</b></td></tr>
<tr><td>Giant</td><td class="num">200,000</td><td class="num">42.0</td><td class="num">210</td><td>Diseconomies</td></tr>
</table></div>
<p>Cost per panel falls from $300 to $180, then rises to $210. The large plant is the minimum efficient scale.</p>`
        }
      ],
      traps: [
        "<b>Economies of scale = LRAC sloping down</b> (cost per unit falls as output grows). Not \"cost rises with output\".",
        "<b>Constant returns</b> = no change in cost per unit as output grows.",
        "<b>Duplication and overlap</b> of functions cause <b>dis</b>economies; specialisation and bulk discounts cause economies.",
        "<b>Beyond minimum efficient scale → shrink</b>, below it → grow.",
        "<b>Short-run ATC</b> (fixed plant) vs <b>LRAC</b> (best plant for each output)."
      ],
      quiz: [
        { q: "A firm doubles all its inputs and its output also exactly doubles, with no change in cost per unit. The firm is experiencing:", opts: ["economies of scale", "diseconomies of scale", "constant returns to scale"], ans: 2, hint: "Cost per unit is unchanged.", why: "Output rising in the same proportion as inputs means <b>constant returns to scale</b>: LRAC is flat." },
        { q: "A firm operating on the downward-sloping part of its long-run average cost curve is experiencing:", opts: ["economies of scale", "diseconomies of scale", "constant returns to scale"], ans: 0, hint: "Bigger means cheaper per unit.", why: "A falling LRAC means cost per unit drops as output grows: <b>economies of scale</b>." },
        { q: "Which of the following is most likely a source of diseconomies of scale?", opts: ["Volume discounts from suppliers", "Spreading R&amp;D cost over more units", "Two divisions running separate, overlapping marketing teams"], ans: 2, hint: "What makes a big firm less efficient per unit?", why: "<b>Duplicated, overlapping functions</b> raise cost per unit as a firm grows. Volume discounts and spreading R&amp;D are economies of scale." },
        { q: "A furniture maker produces where long-run average cost is rising. To lower its cost per unit, it should most likely:", opts: ["expand output to gain economies of scale", "keep output unchanged", "reduce output towards the minimum of LRAC"], ans: 2, hint: "Which side of the minimum is it on?", why: "Rising LRAC means it is past <b>minimum efficient scale</b>; reducing output moves it back towards the lowest cost per unit." },
        { q: "Using Northwind Solar's plants (20,000 panels for $6.0m; 50,000 for $11.0m; 100,000 for $18.0m; 200,000 for $42.0m), moving from the 100,000 plant to the 200,000 plant shows:", opts: ["economies of scale", "constant returns to scale", "diseconomies of scale"], ans: 2, hint: "Compare cost per panel.", why: "Cost per panel rises from $180 to $210: <b>diseconomies of scale</b>." },
        { q: "The minimum efficient scale of a firm is best described as the output at which:", opts: ["long-run average cost is lowest", "short-run marginal cost is lowest", "total cost is lowest"], ans: 0, hint: "The bottom of the long-run curve.", why: "Minimum efficient scale is the <b>lowest point of LRAC</b>. Total cost is lowest at zero output, which is meaningless here." },
        { q: "The long-run average cost curve is best described as showing:", opts: ["the lowest cost per unit for each output when plant size can be chosen freely", "the cost per unit of the current plant at different outputs", "how fixed costs change as output grows"], ans: 0, hint: "In the long run, nothing is fixed.", why: "LRAC gives the <b>lowest achievable cost per unit</b> for each output with the best plant. The current plant's curve is a short-run ATC." },
        { q: "In a perfectly competitive industry in long-run equilibrium, firms most likely produce at:", opts: ["the minimum point of long-run average cost", "an output where LRAC is still falling", "an output where LRAC is rising"], ans: 0, hint: "Competition squeezes out higher-cost producers.", why: "Entry drives price down to the <b>minimum LRAC</b>; firms not producing there make losses and must adjust." },
        { q: "A cement company's cost per tonne falls from $80 to $65 as it doubles output, then rises to $70 when it doubles again. The first doubling most likely reflects:", opts: ["diseconomies of scale", "constant returns to scale", "economies of scale"], ans: 2, hint: "Direction of cost per unit in the first step.", why: "Falling cost per tonne ($80 → $65) = <b>economies of scale</b>; the second doubling ($65 → $70) shows diseconomies." }
      ]
    },

    /* ===================================================== LESSON 4 */
    {
      id: "l4",
      title: "Market structures and perfect competition",
      summary: "The five features that define a market structure; how a perfectly competitive firm sets output, its supply curve, and why long-run economic profit is zero.",
      los: [1],
      sections: [
        {
          title: "Five questions that classify any market",
          html: `
<div class="table-wrap"><table>
<tr><th>Feature</th><th>Perfect competition</th><th>Monopolistic competition</th><th>Oligopoly</th><th>Monopoly</th></tr>
<tr><td>Number of sellers</td><td>Many</td><td>Many</td><td>Few</td><td>One</td></tr>
<tr><td>Product</td><td>Identical</td><td>Differentiated</td><td>Identical or differentiated</td><td>Unique, no close substitute</td></tr>
<tr><td>Barriers to entry</td><td>Very low</td><td>Low</td><td>High</td><td>Very high</td></tr>
<tr><td>Pricing power</td><td>None</td><td>Some</td><td>Some or considerable (depends on rivals)</td><td>Considerable</td></tr>
<tr><td>Non-price competition</td><td>None</td><td>Advertising, product differentiation</td><td>Advertising, product differentiation</td><td>Advertising (mostly to defend position)</td></tr>
</table></div>
<p>Examples: wheat or standard steel bars (close to perfect competition); restaurants, hair salons, toothpaste brands (monopolistic competition); airlines, mobile networks, aircraft makers (oligopoly); a local water utility (monopoly).</p>`
        },
        {
          title: "Perfect competition: the firm is a price taker",
          html: `
<p>The <b>market</b> demand curve slopes down, and market supply and demand set the price. But each firm is tiny, so it faces a <b>horizontal (perfectly elastic) demand curve</b> at that price: charge a cent more and it sells nothing; it can sell all it wants at the market price.</p>
<div class="flow">
  <div class="step"><b>Market</b><span>Supply and demand set P</span><small>e.g. $5 a bushel</small></div>
  <div class="step"><b>Firm</b><span>Demand = MR = P</span><small>horizontal at $5</small></div>
  <div class="step"><b>Output</b><span>Produce where P = MC</span><small>MC rising</small></div>
</div>
<p>Because the firm always produces where P = MC, its <b>supply curve is its MC curve above minimum AVC</b>. This is why perfectly competitive firms have a well-defined supply function, and firms in other structures do not.</p>
<p><b>Elasticity</b> tells how strongly quantity demanded reacts to price: own-price elasticity = %ΔQ ÷ %ΔP. A firm in perfect competition faces infinitely elastic demand; a monopolist faces the whole market's downward-sloping demand.</p>`
        },
        {
          title: "Short run vs long run",
          html: `
<div class="timeline">
  <div class="ev"><b>Short run.</b> Demand for quinoa jumps; price rises to $8 while ATC is $6. Existing farms earn economic profit.</div>
  <div class="ev"><b>Entry.</b> Low barriers: new farms join. Market supply shifts right, price falls.</div>
  <div class="ev"><b>Long run.</b> Entry stops when price = minimum ATC = MC. Economic profit = 0 (normal profit only).</div>
</div>
<p>The reverse happens after a fall in demand: losses lead some firms to exit until price rises back to minimum ATC.</p>`
        }
      ],
      traps: [
        "<b>Firm demand vs market demand:</b> the perfectly competitive firm's demand is horizontal; the market's slopes down.",
        "<b>Long-run perfect competition = normal profit</b> (zero economic profit), not positive economic profit.",
        "<b>Supply curve = MC above minimum AVC</b>, only in perfect competition.",
        "<b>Oligopoly products</b> can be identical (cement) or differentiated (cars).",
        "<b>Barriers to entry</b> decide whether profits can last."
      ],
      quiz: [
        { q: "For which firm is the marginal cost curve above minimum average variable cost also its supply curve?", opts: ["A regional cement maker competing with two rivals", "An independent café with a loyal local following", "A small grower selling a standard crop at the market price"], ans: 2, hint: "Who simply produces where price = MC?", why: "Only a <b>price taker</b> (perfect competition) sets P = MC, so its MC curve above minimum AVC is its supply curve. The cement maker (oligopoly) and café (monopolistic competition) set output from their own demand and rivals." },
        { q: "Organic egg farming is a perfectly competitive industry. Five years after a permanent jump in demand, a typical farm's economic profit is most likely:", opts: ["zero", "still positive, because demand is higher", "negative, because of overcapacity"], ans: 0, hint: "What did the profit attract?", why: "Entry continues until price is back at minimum ATC: economic profit <b>zero</b> (normal profit). Higher demand alone does not protect profits when entry is free." },
        { q: "The demand curve faced by an individual firm in perfect competition is:", opts: ["downward sloping, like the market demand", "horizontal at the market price", "vertical at the firm's output"], ans: 1, hint: "What happens if it charges slightly more than the market?", why: "It sells nothing above the market price and all it wants at that price: <b>horizontal</b> (perfectly elastic). The market curve slopes down." },
        { q: "A market has a few large sellers, high barriers to entry and products that are close substitutes. It is best described as:", opts: ["monopolistic competition", "perfect competition", "oligopoly"], ans: 2, hint: "Count the sellers and look at the barriers.", why: "<b>Few sellers + high barriers</b> = oligopoly. Monopolistic competition has many sellers and low barriers." },
        { q: "Hair salons in a large city most likely operate in:", opts: ["monopolistic competition", "oligopoly", "perfect competition"], ans: 0, hint: "Many sellers, each slightly different.", why: "Many salons, low barriers, differentiated service (style, location, reputation): <b>monopolistic competition</b>." },
        { q: "A wheat farm in a competitive market sells at $6 per bushel. Its marginal cost at current output is $7.50. To maximise profit, it should:", opts: ["raise its price to $7.50", "reduce output", "increase output"], ans: 1, hint: "A price taker cannot change price.", why: "MC &gt; P, so the last bushels cost more than they earn: <b>reduce output</b> until MC = $6. A price taker cannot raise its price." },
        { q: "Demand for a product sold in a perfectly competitive market rises permanently. Over the long run, the most likely result is:", opts: ["new firms enter until economic profit returns to zero", "price stays higher and firms keep economic profits", "existing firms merge to keep prices high"], ans: 0, hint: "Low barriers to entry.", why: "Short-run profits attract <b>entry</b>; supply rises until price returns to minimum ATC and economic profit is zero." },
        { q: "The price of a good rises by 4% and quantity demanded falls by 10%. The own-price elasticity of demand (in absolute value) is:", opts: ["2.5", "0.4", "1.4"], ans: 0, hint: "%ΔQ ÷ %ΔP.", why: "10% ÷ 4% = <b>2.5</b>: demand is elastic. 0.4 inverts the ratio." },
        { q: "Which pair of features is most likely shared by perfect competition and monopolistic competition?", opts: ["Many sellers and low barriers to entry", "Identical products and no pricing power", "Few sellers and advertising"], ans: 0, hint: "What differs is the product.", why: "Both have <b>many sellers and low barriers</b>; they differ in product differentiation and pricing power." }
      ]
    },

    /* ===================================================== LESSON 5 */
    {
      id: "l5",
      title: "Monopolistic competition",
      summary: "Differentiated products and some pricing power; MR = MC with price read from demand; short-run profits are competed away in the long run, leaving excess capacity.",
      los: [1, 2],
      sections: [
        {
          title: "A little bit of monopoly, a lot of competition",
          html: `
<p>Think of the coffee shops on one street. Each is a little different (beans, music, location, loyalty card), so each has a few customers who would pay slightly more: a <b>downward-sloping demand curve</b> and some pricing power. But there are many rivals and it is easy to open a new shop, so that power is limited and fragile.</p>
<ul>
<li>Many firms, each with a small share.</li>
<li><b>Differentiated</b> products: real or perceived differences, created by <b>advertising</b>, branding and features.</li>
<li><b>Low</b> barriers to entry and exit.</li>
</ul>`
        },
        {
          title: "Choosing price and output",
          html: `
<p>The firm uses the same rule as any firm: produce where <b>MR = MC</b>, then charge the highest price the demand curve allows for that quantity.</p>
<p><i>Example:</i> <b>Brewhouse Lane</b> (made up) faces demand P = 50 − 2Q (Q in hundreds of cups a day), so MR = 50 − 4Q. Marginal cost is a constant $10.</p>
<div class="timeline">
  <div class="ev"><b>Step 1.</b> MR = MC: 50 − 4Q = 10 → Q = 10 (1,000 cups).</div>
  <div class="ev"><b>Step 2.</b> Price from demand: P = 50 − 2 × 10 = <b>$30</b>.</div>
  <div class="ev"><b>Step 3.</b> Price ($30) &gt; MC ($10): the firm has pricing power, unlike a perfect competitor.</div>
</div>
<div class="callout key"><span class="label">Shortcut</span>For a straight-line demand curve P = a − bQ, MR = a − 2bQ: same intercept, twice the slope.</div>`
        },
        {
          title: "Short run vs long run",
          html: `
<div class="vflow">
  <div class="node">Short run: a popular new café earns economic profit (P &gt; ATC)</div><div class="arrow">⬇</div>
  <div class="node">Low barriers: new cafés open nearby with similar products</div><div class="arrow">⬇</div>
  <div class="node">Each café's demand shifts left and becomes more elastic</div><div class="arrow">⬇</div>
  <div class="node good">Long run: P = ATC, economic profit = 0, but P &gt; MC and output is below minimum ATC (excess capacity)</div>
</div>
<p>So the long-run outcome looks like perfect competition on <b>profit</b> (zero economic profit) but not on <b>efficiency</b>: the firm does not produce at minimum ATC, and price exceeds MC. The trade-off is that consumers get <b>variety</b>.</p>
<p>Because output depends on the firm's own demand curve (and how advertising shifts it), there is <b>no well-defined supply curve</b> in monopolistic competition.</p>`
        }
      ],
      traps: [
        "<b>Price is read from the demand curve</b> at the MR = MC quantity, not where MC meets demand.",
        "<b>Long run: zero economic profit</b>, but price &gt; MC and output below minimum ATC (unlike perfect competition).",
        "<b>Advertising and differentiation</b> are the main weapons; price cuts are just one option.",
        "<b>MR has twice the slope</b> of a straight-line demand curve.",
        "<b>No well-defined supply curve</b> outside perfect competition."
      ],
      quiz: [
        { q: "A firm in monopolistic competition faces demand P = 80 − 4Q and has constant marginal cost of $20. Its profit-maximising price is closest to:", opts: ["$20", "$50", "$40"], ans: 1, hint: "MR = 80 − 8Q; set it equal to MC, then use demand.", why: "80 − 8Q = 20 → Q = 7.5. P = 80 − 4 × 7.5 = <b>$50</b>. $20 is MC; $40 is the revenue-maximising price (MR = 0 at Q = 10), which ignores cost." },
        { q: "In long-run equilibrium, a firm in monopolistic competition most likely:", opts: ["earns positive economic profit protected by brand loyalty", "earns zero economic profit and charges a price above marginal cost", "produces at the minimum of average total cost"], ans: 1, hint: "Entry erodes profit, but demand still slopes down.", why: "Entry pushes P down to ATC (zero economic profit), but because demand slopes down, <b>P &gt; MC</b> and output is short of minimum ATC." },
        { q: "Which feature most distinguishes monopolistic competition from perfect competition?", opts: ["Number of firms", "Barriers to entry", "Product differentiation"], ans: 2, hint: "Both have many firms and low barriers.", why: "The key difference is <b>differentiated products</b>, which give each firm a downward-sloping demand curve." },
        { q: "A popular bakery chain is earning economic profit. In a monopolistically competitive market, over time its demand curve will most likely:", opts: ["shift left as new rivals enter", "shift right as customers become loyal", "become perfectly inelastic"], ans: 0, hint: "Low barriers to entry.", why: "Profit attracts entry; customers spread across more bakeries, so its demand <b>shifts left</b> (and becomes more elastic)." },
        { q: "The main forms of non-price competition in monopolistic competition are:", opts: ["advertising and product differentiation", "legal patents and licences", "output quotas agreed with rivals"], ans: 0, hint: "How do coffee brands win customers?", why: "Firms compete through <b>advertising and differentiation</b>. Patents are entry barriers (monopoly); quotas suggest collusion (oligopoly)." },
        { q: "A café faces demand P = 12 − 0.5Q, so MR = 12 − Q. Its marginal cost is $4. If it mistakenly produces where demand meets marginal cost, compared with the profit-maximising choice it will:", opts: ["produce less and charge more", "produce more and charge less", "produce the same quantity"], ans: 1, hint: "Find both quantities.", why: "MR = MC: 12 − Q = 4 → Q = 8, P = $8. Demand = MC: 12 − 0.5Q = 4 → Q = 16, P = $4. It would <b>produce more and charge less</b>." },
        { q: "Why does a firm in monopolistic competition not have a well-defined supply curve?", opts: ["Because its marginal cost is constant", "Because its output decision depends on its own demand curve, which changes with rivals and advertising", "Because it always produces at minimum average cost"], ans: 1, hint: "What else, besides cost, decides its output?", why: "Its output comes from MR = MC, and MR depends on its <b>own demand</b>, which shifts with rivals' actions and advertising; there is no single price-quantity schedule." },
        { q: "Compared with perfect competition, the long-run outcome of monopolistic competition gives consumers:", opts: ["more product variety but prices above marginal cost", "lower prices and identical products", "higher economic profits for firms"], ans: 0, hint: "What is the trade-off?", why: "Consumers get <b>variety</b> but pay a price above MC (with excess capacity). Long-run economic profit is still zero." },
        { q: "A gym chain in monopolistic competition sells memberships where MR = MC = $30 a month; at that quantity the demand curve shows a price of $45 and ATC is $45. The chain is most likely:", opts: ["earning economic profit that will attract entry", "in long-run equilibrium", "making losses that will lead to exit"], ans: 1, hint: "Compare price and ATC.", why: "P = ATC ($45) means zero economic profit, with P &gt; MC: the <b>long-run equilibrium</b> of monopolistic competition." }
      ]
    },

    /* ===================================================== LESSON 6 */
    {
      id: "l6",
      title: "Oligopoly: a few rivals watching each other",
      summary: "Interdependence; the kinked demand curve, Cournot, Nash equilibrium (and why cartels break down), Stackelberg, and the dominant-firm model.",
      los: [1, 3],
      sections: [
        {
          title: "Interdependence is the whole story",
          html: `
<p>In an oligopoly a handful of firms (airlines on a route, mobile networks, cement makers in a region) control the market behind high barriers to entry: huge set-up costs, licences, economies of scale, brands. Each firm's best price or output <b>depends on what its rivals do</b>. That is why there is no single model, and no well-defined supply curve: the answer depends on how firms expect rivals to react.</p>`
        },
        {
          title: "Four pricing models",
          html: `
<div class="tiles">
  <div class="tile"><h4>Kinked demand curve</h4><p>Rivals <b>match a price cut</b> (to protect share) but <b>ignore a price rise</b> (to win customers). Demand is elastic above the current price and inelastic below it, so it has a kink and MR has a gap. Prices are sticky: small cost changes do not move price. Weakness: it does not explain how the starting price was set.</p></div>
  <div class="tile c2"><h4>Cournot</h4><p>Each firm picks its <b>output</b> assuming the rival's output stays fixed. Result: total output and price lie <b>between</b> the monopoly and perfect competition outcomes. As the number of firms grows, the result approaches perfect competition.</p></div>
  <div class="tile c3"><h4>Stackelberg (leader–follower)</h4><p>A leader chooses output <b>first</b>; followers react. The leader gains a <b>larger share</b> and profit by moving first.</p></div>
  <div class="tile"><h4>Dominant firm</h4><p>One firm with, say, 50–80% of the market and the lowest costs sets the price; small firms follow. If a small rival undercuts, the leader cuts too; high-cost rivals leave and the <b>leader's share rises</b>. Over the long run, though, its profits attract entrants and its share tends to <b>fall</b>.</p></div>
</div>`
        },
        {
          title: "Nash equilibrium and why cartels are fragile",
          html: `
<p>A <b>Nash equilibrium</b> is reached when each firm is doing the best it can, <b>given</b> what the others are doing; nobody gains by changing alone.</p>
<p>Two airlines, <b>SkyArc</b> and <b>BlueJet</b> (made up), choose a high or low fare. Profits ($m, SkyArc first):</p>
<div class="table-wrap"><table>
<tr><th></th><th>BlueJet high fare</th><th>BlueJet low fare</th></tr>
<tr><td><b>SkyArc high fare</b></td><td class="num">60, 60</td><td class="num">20, 80</td></tr>
<tr><td><b>SkyArc low fare</b></td><td class="num">80, 20</td><td class="num"><b>35, 35</b></td></tr>
</table></div>
<p>Whatever BlueJet does, SkyArc earns more with a low fare (80 &gt; 60; 35 &gt; 20), and the same holds for BlueJet. Both choose low: <b>(35, 35) is the Nash equilibrium</b>, even though both charging high (60, 60) would give the highest joint profit.</p>
<div class="callout key"><span class="label">Collusion</span>A cartel tries to reach the high-joint-profit outcome by agreement. It is unstable because each member gains by secretly cheating (cutting price or raising output). Collusion is more likely to hold with few firms, similar costs, identical products, little growth in demand, and weak competition law. It is illegal in most countries.</div>`
        },
        {
          title: "Optimal output under oligopoly",
          html: `
<p>Each firm still produces where its own <b>MR = MC</b>, but its MR depends on the rivals' assumed reaction. When firms collude perfectly, the industry behaves like a <b>monopoly</b> (highest price, lowest output). When they compete hard on price with identical products, the outcome moves towards <b>perfect competition</b>. Cournot sits in between.</p>`
        }
      ],
      traps: [
        "<b>Kinked demand:</b> rivals match <b>cuts</b>, ignore <b>rises</b>. The model explains sticky prices, not how the price was first set.",
        "<b>Nash equilibrium ≠ highest joint profit.</b> It is the outcome where no one gains by changing alone.",
        "<b>Dominant firm and an undercutting rival:</b> short run, the leader's share <b>rises</b> as weak rivals exit; long run, its share tends to <b>fall</b> as profits attract entry.",
        "<b>Cournot outcome</b> lies between monopoly and perfect competition.",
        "<b>Stackelberg leader</b> moves first and gets the larger share."
      ],
      quiz: [
        { q: "Harlow Steel is the lowest-cost firm and sets the price in its market. A small rival with higher costs cuts its price below Harlow's, and Harlow matches the cut. Which short-run outcome is most likely?", opts: ["Harlow loses share to the cheaper rival", "Harlow's share rises as higher-cost rivals leave the market", "Prices return to the old level with no change in shares"], ans: 1, hint: "Who can survive at the lower price?", why: "Higher-cost rivals cannot sell below cost for long and leave, so the leader's share <b>rises</b>." },
        { q: "Arcadia Glass has held 70% of a profitable market for ten years, with no patents or licences protecting it. Over the next decade its share is most likely to:", opts: ["fall, as its profits attract new entrants", "rise, as its scale advantage grows", "stay fixed, because it sets the price"], ans: 0, hint: "What do high profits attract when nothing blocks entry?", why: "Persistent profits draw entrants, so a dominant firm's share tends to <b>fall</b> over time." },
        { q: "Under the kinked demand curve model, an oligopolist assumes that rivals will:", opts: ["match price increases but not price cuts", "match price cuts but not price increases", "match all price changes"], ans: 1, hint: "Rivals protect their share.", why: "Rivals <b>follow cuts</b> (or they lose customers) but <b>ignore rises</b> (to win customers). This makes demand elastic above the kink and inelastic below it." },
        { q: "A key weakness of the kinked demand curve model is that it:", opts: ["does not explain how the original price was set", "cannot explain why prices are sticky", "assumes firms collude openly"], ans: 0, hint: "It starts from an existing price.", why: "The model explains price stickiness around the kink but <b>not how the kink price was reached</b>." },
        { q: "Using the airline payoffs (both high fare: 60, 60; one low, one high: 80 for the low-fare firm, 20 for the other; both low: 35, 35), the Nash equilibrium is:", opts: ["both charge the high fare", "both charge the low fare", "one charges high and one charges low"], ans: 1, hint: "Check each airline's best reply to each choice by the other.", why: "Low is each airline's best reply whatever the other does (80 &gt; 60, 35 &gt; 20), so <b>both low</b> is the Nash equilibrium, even though both high pays more jointly." },
        { q: "In the Cournot model, the market price is most likely:", opts: ["equal to the monopoly price", "between the monopoly price and the perfectly competitive price", "equal to marginal cost"], ans: 1, hint: "Firms take each other's output as given.", why: "Cournot output is above monopoly output but below the competitive output, so the price lies <b>in between</b>." },
        { q: "A cartel is most likely to break down when:", opts: ["there are only two members with identical costs", "each member can gain by secretly expanding output", "the product is identical across members"], ans: 1, hint: "What is every member tempted to do?", why: "Each member's incentive to <b>cheat</b> (more output or lower price) undermines the agreement. Few members, similar costs and identical products make collusion easier." },
        { q: "In the Stackelberg model, compared with the follower, the leader most likely:", opts: ["produces less and earns less", "produces more and earns more", "produces the same, because both have equal costs"], ans: 1, hint: "First-mover advantage.", why: "By choosing first, the leader takes a <b>larger share and higher profit</b>; the follower adjusts to what is left." },
        { q: "Which feature most explains why oligopoly firms lack a well-defined supply curve?", opts: ["They face horizontal demand curves", "Their best output depends on how rivals react", "They produce identical products"], ans: 1, hint: "Interdependence.", why: "Each firm's best output depends on <b>rivals' expected reactions</b>, so there is no single price-quantity schedule." },
        { q: "If all firms in an oligopoly collude perfectly, the industry's price and output will most closely resemble those of:", opts: ["perfect competition", "a monopoly", "monopolistic competition"], ans: 1, hint: "They act as one firm.", why: "Perfect collusion means acting as a single seller, which gives the <b>monopoly</b> price and output." }
      ]
    },

    /* ===================================================== LESSON 7 */
    {
      id: "l7",
      title: "Monopoly, and measuring market structure",
      summary: "How a monopolist sets price, price discrimination and regulation; identifying market structure with elasticity, concentration ratios and the HHI, and their limits.",
      los: [1, 4],
      sections: [
        {
          title: "Monopoly: one seller, high walls",
          html: `
<p>A monopolist is the only seller of a product with no close substitute, protected by <b>very high barriers</b>: patents and licences, control of a key resource, network effects, or economies of scale so large that one firm can serve the market most cheaply (a <b>natural monopoly</b>, such as a water network).</p>
<p>It faces the whole market's downward-sloping demand, so MR &lt; P. It produces where <b>MR = MC</b> and reads the price off the demand curve.</p>
<p><i>Example:</i> <b>Aqualine</b> (made up) faces demand P = 100 − Q, so MR = 100 − 2Q, and MC = $20. MR = MC → Q = 40, P = $60. A competitive industry with the same costs would produce where P = MC: Q = 80 at P = $20. The monopolist produces <b>less</b>, charges <b>more</b>, and the lost trades are a <b>deadweight loss</b>. Because of the barriers, economic profit can <b>last into the long run</b>.</p>`
        },
        {
          title: "Price discrimination and regulation",
          html: `
<ul>
<li><b>Price discrimination</b>: charging different prices for the same product when the difference is not explained by cost. It needs (1) some pricing power, (2) groups with different elasticities, and (3) no easy resale between groups. First degree: each buyer pays their maximum. Second degree: price depends on quantity (bulk discounts). Third degree: different prices for different groups (student or senior fares).</li>
<li><b>Regulating a natural monopoly</b>: marginal-cost pricing (P = MC) maximises output but may leave the firm with a loss, because ATC is still falling; average-cost pricing (P = ATC) lets the firm earn a normal profit. Governments may also own the monopoly or license it to a private operator.</li>
</ul>`
        },
        {
          title: "Which structure is it? Measuring concentration",
          html: `
<p>In theory you would estimate the <b>elasticity of demand</b>: very elastic demand suggests near-perfect competition; inelastic demand suggests pricing power. In practice this is hard: observed prices and quantities are equilibrium points where supply and demand meet (the "endogeneity" problem), so you need models of both; time series may span periods when the market changed; cross-section data are costly to collect and sensitive to model choices. So analysts use simpler measures:</p>
<div class="tiles">
  <div class="tile"><h4>N-firm concentration ratio</h4><p>Sum of the market shares of the largest N firms. Ranges from 0 (perfect competition) to 100% (monopoly). Simple, but it barely moves when two of the top firms <b>merge</b>, and it ignores entry.</p></div>
  <div class="tile c2"><h4>Herfindahl–Hirschman index (HHI)</h4><p>Sum of the <b>squared</b> market shares of the top N firms. Monopoly = 1 (or 10,000 if shares are in %). With M equal firms, HHI = 1/M. It reacts strongly to mergers.</p></div>
</div>
<p><i>Example:</i> six firms with shares 30%, 25%, 20%, 15%, 5%, 5%.</p>
<div class="table-wrap"><table>
<tr><th>Measure</th><th>Before merger</th><th>If the top two merge</th></tr>
<tr><td>3-firm concentration ratio</td><td class="num">30 + 25 + 20 = 75%</td><td class="num">55 + 20 + 15 = 90%</td></tr>
<tr><td>3-firm HHI</td><td class="num">0.09 + 0.0625 + 0.04 = 0.1925</td><td class="num">0.3025 + 0.04 + 0.0225 = 0.365</td></tr>
</table></div>
<p>The HHI almost doubles, a much clearer signal of the new firm's power than the concentration ratio. An HHI of 0.25 is like four equal firms; 0.10 like ten.</p>
<div class="callout trap"><span class="label">Limits</span>Neither measure considers <b>barriers to entry</b> or the <b>elasticity of demand</b>. A lone supplier facing easy potential entry may have to price as if the market were competitive. So high concentration does not prove pricing power.</div>`
        }
      ],
      traps: [
        "<b>Monopolist sets MR = MC</b> and reads price off demand; it does not charge \"the highest possible price\".",
        "<b>HHI squares the shares</b>; the concentration ratio just adds them. Equal shares: HHI = 1/M.",
        "<b>Mergers among top firms</b> barely change the concentration ratio but raise the HHI sharply.",
        "<b>Both measures ignore entry and elasticity.</b> High concentration ≠ guaranteed pricing power.",
        "<b>Price discrimination needs</b> pricing power, different elasticities and no resale."
      ],
      quiz: [
        { q: "A market has 8 firms, each with a 12.5% share. The 4-firm concentration ratio and the 4-firm HHI are closest to:", opts: ["50% and 0.5", "50% and 0.0625", "12.5% and 0.0156"], ans: 1, hint: "Add four shares; then add four squared shares.", why: "CR4 = 4 × 12.5% = 50%. HHI = 4 × 0.125² = 4 × 0.015625 = <b>0.0625</b>. 0.5 forgets to square." },
        { q: "The two largest firms in an industry merge. Compared with the HHI, the concentration ratio of the top firms most likely:", opts: ["rises by more", "rises by less, or hardly changes", "falls"], ans: 1, hint: "Adding shares vs squaring them.", why: "The concentration ratio just re-adds the same shares, so it <b>barely changes</b>; the HHI jumps because the combined share is squared." },
        { q: "A monopolist faces demand P = 120 − 2Q and has constant marginal cost of $40. Its profit-maximising price is:", opts: ["$40", "$80", "$100"], ans: 1, hint: "MR = 120 − 4Q.", why: "120 − 4Q = 40 → Q = 20; P = 120 − 40 = <b>$80</b>. $40 is MC; $100 uses Q = 10." },
        { q: "Compared with a perfectly competitive industry with the same costs, a monopoly most likely produces:", opts: ["less output at a higher price", "more output at a lower price", "the same output at a higher price"], ans: 0, hint: "MR lies below demand.", why: "Producing where MR = MC (below the demand curve) gives <b>less output and a higher price</b>, creating a deadweight loss." },
        { q: "A single sugar importer serves a country, but large food wholesalers could easily start importing sugar if it raised prices. The importer most likely:", opts: ["sets the monopoly price, because its concentration ratio is 100%", "prices close to the competitive level, because of potential entry", "earns large long-run economic profits"], ans: 1, hint: "What do concentration measures leave out?", why: "Easy potential entry disciplines the incumbent, so it <b>prices close to competitive levels</b>. This is why high concentration does not prove pricing power." },
        { q: "Which condition is NOT required for a firm to practise price discrimination?", opts: ["Customer groups with different price elasticities", "Customers who cannot easily resell the product", "Identical marginal cost across all customer groups"], ans: 2, hint: "Two of these are standard conditions.", why: "Price discrimination needs pricing power, <b>different elasticities</b> and <b>no resale</b>. Identical costs are not a requirement." },
        { q: "Regulators set the price of a natural monopoly equal to its average total cost. The most likely result is that the firm:", opts: ["makes a loss and needs a subsidy", "earns a normal profit", "earns monopoly profit"], ans: 1, hint: "Price = ATC.", why: "P = ATC means TR = TC: zero economic profit, i.e. a <b>normal profit</b>. Marginal-cost pricing is the one that can leave a loss." },
        { q: "Why is estimating demand elasticity from observed market prices and quantities difficult?", opts: ["Because elasticity cannot be calculated from regression", "Because observed points reflect both supply and demand together", "Because prices never change in concentrated markets"], ans: 1, hint: "Each data point is an equilibrium.", why: "Each observed price-quantity pair is where <b>supply meets demand</b> (endogeneity), so a model of both curves is needed." },
        { q: "An industry's 3-firm HHI is 0.20. The concentration is most comparable to a market shared equally by:", opts: ["three firms", "five firms", "twenty firms"], ans: 1, hint: "HHI = 1/M for M equal firms.", why: "1 ÷ 0.20 = <b>5</b> equal firms." },
        { q: "Shares in a market are 40%, 30%, 20% and 10%. The 3-firm HHI is:", opts: ["0.29", "0.90", "0.30"], ans: 0, hint: "Square the top three shares.", why: "0.16 + 0.09 + 0.04 = <b>0.29</b>. 0.90 is the 3-firm concentration ratio; 0.30 includes the fourth firm (0.01)." }
      ]
    }
  ],

  /* ===================================================== MODULE QUIZ */
  moduleQuiz: [
    { lesson: 1, q: "Tomás runs a bike-repair shop with revenue of $180,000 and explicit costs of $120,000. He could earn $48,000 a year as a mechanic elsewhere, and his $50,000 of equipment money could earn 6%. His economic profit is closest to:", opts: ["$12,000", "$60,000", "$9,000"], ans: 2, hint: "Subtract both implicit costs.", why: "60,000 − 48,000 − 3,000 = <b>$9,000</b>. $60,000 is accounting profit; $12,000 forgets the return on capital." },
    { lesson: 1, q: "A firm sells 200 units at $50. To sell 201 units it must cut the price to $49.80 on all units. Marginal revenue of the 201st unit is closest to:", opts: ["$49.80", "$10.00", "$9.80"], ans: 2, hint: "New TR minus old TR.", why: "TR(201) = 10,009.80; TR(200) = 10,000. MR = <b>$9.80</b>: the price minus the $0.20 lost on 200 units ($40)." },
    { lesson: 1, q: "At 500 units, a firm's total cost is $20,000 and its total variable cost is $14,000. Average fixed cost is:", opts: ["$40", "$28", "$12"], ans: 2, hint: "Fixed cost ÷ quantity.", why: "TFC = 6,000; ÷ 500 = <b>$12</b>. $28 is AVC; $40 is ATC." },
    { lesson: 1, q: "Accounting profit exceeds economic profit by the amount of:", opts: ["explicit costs", "fixed costs", "implicit opportunity costs"], ans: 2, hint: "What does economic profit subtract that accounting profit does not?", why: "Economic profit = accounting profit − <b>implicit opportunity costs</b>." },
    { lesson: 1, q: "When marginal cost is above average total cost, average total cost is most likely:", opts: ["falling", "at its minimum", "rising"], ans: 2, hint: "High marginal values pull the average up.", why: "Each extra unit costs more than the average, so ATC is <b>rising</b>." },
    { lesson: 2, q: "A firm's revenue is $2.4m, total variable cost $2.6m and total fixed cost $0.9m. To minimise losses in the short run, the firm should:", opts: ["keep operating, because it covers part of its fixed cost", "keep operating until fixed costs are recovered", "shut down, because revenue is below variable cost"], ans: 2, hint: "Compare revenue with variable cost.", why: "Operating loses 2.4 − 3.5 = $1.1m; closing loses $0.9m. Revenue &lt; TVC, so <b>shut down</b>." },
    { lesson: 2, q: "Westbrook Mills expects annual revenue of $7.4m, variable costs of $6.0m and fixed costs of $2.0m for the foreseeable future. Its best long-run decision is most likely to:", opts: ["stay, because revenue covers variable costs", "stay, because fixed costs are sunk", "exit, because revenue does not cover total cost"], ans: 2, hint: "In the long run, every cost can be avoided.", why: "Long run: revenue must cover total cost of $8.0m. At $7.4m it falls short, so <b>exit</b>. Covering variable costs is only the short-run test." },
    { lesson: 2, q: "A price taker's average variable cost is lowest at $11 and its average total cost is lowest at $15. It will stop producing in the short run if the market price falls below:", opts: ["$15", "$11", "$4"], ans: 1, hint: "Shutdown is about variable cost.", why: "Below minimum AVC (<b>$11</b>) each unit loses more than its variable cost. $15 is the breakeven price; $4 is the gap between the two minimums." },
    { lesson: 2, q: "In the off-season a hotel's revenue covers staff, food and utilities but not depreciation or loan interest. Which statement is most accurate?", opts: ["Depreciation should be the deciding factor", "The hotel should close, because it makes a loss in the off-season", "Staying open in the off-season reduces the hotel's total loss for that period"], ans: 2, hint: "Compare open vs closed.", why: "Revenue above variable cost contributes to fixed costs, so <b>staying open</b> loses less than closing. Depreciation and interest are incurred either way." },
    { lesson: 2, q: "A price taker's minimum AVC is $14 and minimum ATC is $19. At a market price of $17, the firm will most likely:", opts: ["make an economic profit", "shut down immediately", "operate at a loss in the short run"], ans: 2, hint: "Where is $17 relative to the two thresholds?", why: "$17 is between min AVC ($14) and min ATC ($19): a loss, but <b>keep operating</b> in the short run." },
    { lesson: 2, q: "A price taker sells at $40; at its current output, marginal cost is $46 and rising. To maximise profit it should:", opts: ["increase output", "decrease output", "raise its price"], ans: 1, hint: "MC vs MR.", why: "MC &gt; MR (= price): the last units lose money, so <b>decrease output</b>. A price taker cannot raise price." },
    { lesson: 3, q: "A firm's output rises from 10,000 to 15,000 units, and its total long-run cost rises from $400,000 to $600,000. Over this range it shows:", opts: ["economies of scale", "constant returns to scale", "diseconomies of scale"], ans: 1, hint: "Cost per unit before and after.", why: "$40 per unit both times: <b>constant returns to scale</b>." },
    { lesson: 3, q: "Which development most likely signals that a fast-growing retailer has moved into diseconomies of scale?", opts: ["Its three regional head offices now run separate, overlapping buying teams", "It wins lower prices from suppliers on larger orders", "Its larger warehouses can use more automation"], ans: 0, hint: "Which one makes size a burden?", why: "<b>Overlapping, duplicated functions</b> raise cost per unit. Supplier discounts and automation are economies of scale." },
    { lesson: 3, q: "In a competitive industry, LRAC reaches its minimum of $8.10 at 80,000 units, and rivals produce there. Fenwick Tools produces 120,000 units at $9.40 each. To stay viable, Fenwick should most likely:", opts: ["expand to 150,000 units to gain economies of scale", "keep output at 120,000 units", "reduce output towards 80,000 units"], ans: 2, hint: "Which side of the minimum is it on?", why: "At 120,000 it is past minimum efficient scale (diseconomies). Rivals at $8.10 can undercut it, so it should <b>reduce output</b> towards 80,000." },
    { lesson: 3, q: "Which statement best describes a firm whose long-run average cost is still falling?", opts: ["It could lower its cost per unit by growing", "It has passed its minimum efficient scale", "Its short-run marginal cost must be falling"], ans: 0, hint: "Falling LRAC = economies of scale.", why: "Falling LRAC means economies of scale: <b>growing lowers cost per unit</b>. Passing MES would mean LRAC is rising." },
    { lesson: 3, q: "A brewery's cost per litre is $1.20 at 1m litres, $0.95 at 2m litres and $0.95 at 3m litres. Between 2m and 3m litres it shows:", opts: ["constant returns to scale", "economies of scale", "diseconomies of scale"], ans: 0, hint: "Cost per litre unchanged.", why: "Cost per litre stays at $0.95: <b>constant returns to scale</b>." },
    { lesson: 4, q: "A market with many sellers of an identical product, very low barriers to entry and no pricing power is:", opts: ["monopolistic competition", "oligopoly", "perfect competition"], ans: 2, hint: "Identical product is the giveaway.", why: "Many sellers + identical product + no pricing power = <b>perfect competition</b>." },
    { lesson: 4, q: "In a perfectly competitive market in long-run equilibrium, the price equals:", opts: ["minimum average total cost, which also equals marginal cost", "average total cost, but above marginal cost", "minimum average variable cost"], ans: 0, hint: "Zero economic profit and P = MC together.", why: "Entry and exit push P to <b>minimum ATC</b>, where MC = ATC. P above MC describes monopolistic competition." },
    { lesson: 4, q: "The supply curve of a perfectly competitive firm is its:", opts: ["average total cost curve above the breakeven point", "marginal cost curve above minimum average variable cost", "average variable cost curve"], ans: 1, hint: "It produces where P = MC, unless it shuts down.", why: "It sets P = MC as long as P ≥ min AVC, so supply = <b>MC above min AVC</b>." },
    { lesson: 4, q: "Which market structure most likely has the highest barriers to entry?", opts: ["Oligopoly", "Monopoly", "Monopolistic competition"], ans: 1, hint: "Barriers keep out every rival.", why: "<b>Monopoly</b> has very high barriers (one seller); oligopoly has high barriers; monopolistic competition low." },
    { lesson: 4, q: "A 6% fall in price raises quantity demanded by 3%. Demand is:", opts: ["elastic, with elasticity 2.0", "inelastic, with elasticity 0.5", "unit elastic"], ans: 1, hint: "%ΔQ ÷ %ΔP.", why: "3 ÷ 6 = 0.5 &lt; 1: <b>inelastic</b>." },
    { lesson: 5, q: "A firm in monopolistic competition faces demand P = 60 − 3Q and marginal cost of $12. Its profit-maximising output and price are:", opts: ["Q = 8, P = $36", "Q = 16, P = $12", "Q = 8, P = $12"], ans: 0, hint: "MR = 60 − 6Q.", why: "60 − 6Q = 12 → Q = 8; P = 60 − 24 = <b>$36</b>. Q = 16 sets demand = MC; P = $12 confuses price with MC." },
    { lesson: 5, q: "In long-run equilibrium under monopolistic competition, which statement is most accurate?", opts: ["Price equals marginal cost", "Price equals average total cost, but output is below the minimum-ATC level", "Firms earn economic profit because of brand loyalty"], ans: 1, hint: "Zero profit, but demand still slopes down.", why: "Entry drives <b>P = ATC</b> (zero profit) at an output short of minimum ATC (excess capacity), with P &gt; MC." },
    { lesson: 5, q: "Firms in monopolistic competition rely most on:", opts: ["advertising and product differentiation", "output agreements with rivals", "government licences"], ans: 0, hint: "Non-price competition.", why: "<b>Advertising and differentiation</b> create the brand differences that give them some pricing power." },
    { lesson: 5, q: "A new juice bar earns economic profit. Under monopolistic competition, which change is most likely over time?", opts: ["Its demand becomes less elastic as rivals copy it", "Its demand shifts left as similar bars open", "Its price rises as profits grow"], ans: 1, hint: "Entry.", why: "Low barriers bring entry; its demand <b>shifts left</b> (and becomes more elastic) until economic profit is zero." },
    { lesson: 6, q: "Under the kinked demand curve model, a small rise in an oligopolist's marginal cost will most likely:", opts: ["leave its price unchanged", "raise its price by the full cost increase", "push it to cut its price"], ans: 0, hint: "The MR curve has a gap at the kink.", why: "If MC moves within the gap in MR, the MR = MC output and the price <b>stay the same</b>: prices are sticky." },
    { lesson: 6, q: "A low-cost price leader matches a smaller rival's price cut, and over the following year its market share rises. The main reason is most likely that:", opts: ["higher-cost rivals cannot cover their costs at the lower price and leave", "customers always prefer the leader's brand", "regulators cap the rivals' output"], ans: 0, hint: "Think about costs at the new price.", why: "At the lower price, <b>higher-cost rivals</b> make losses and exit, so the leader picks up their share." },
    { lesson: 6, q: "Two firms each choose high or low output. If each firm's best choice is high output whatever the other does, the Nash equilibrium is:", opts: ["both choose high output", "both choose low output", "there is no equilibrium"], ans: 0, hint: "Each plays its best reply.", why: "When high output is each firm's best reply to anything, <b>both high</b> is the Nash equilibrium, even if both low would earn more together." },
    { lesson: 6, q: "Collusion among oligopolists is most likely to succeed when:", opts: ["there are many firms with very different costs", "there are few firms selling a similar product with similar costs", "demand is growing rapidly and new firms are entering"], ans: 1, hint: "What makes cheating easy to spot and agreement easy to reach?", why: "<b>Few firms, similar products, similar costs</b> make agreement easier and cheating easier to detect." },
    { lesson: 6, q: "In the Cournot model, as the number of firms increases, market output and price most likely approach:", opts: ["the monopoly outcome", "the perfectly competitive outcome", "the Stackelberg leader's outcome"], ans: 1, hint: "More rivals, less power each.", why: "With many firms each has little influence, so the outcome tends to <b>perfect competition</b>." },
    { lesson: 6, q: "Which force most likely erodes a dominant firm's market share over the long run?", opts: ["Its lower costs", "Its habit of matching rivals' price cuts", "Entry by new firms attracted by its profits"], ans: 2, hint: "Long-run threat.", why: "Persistent profits attract <b>entry</b>, which wears down the leader's share over time." },
    { lesson: 7, q: "Shares in a market are 40%, 20%, 15%, 15% and 10%. If the two largest firms merge, the 3-firm HHI rises from about:", opts: ["0.2225 to 0.405", "0.75 to 0.90", "0.2225 to 0.3825"], ans: 0, hint: "Before: 0.40² + 0.20² + 0.15². After: 0.60² + 0.15² + 0.15².", why: "Before 0.16 + 0.04 + 0.0225 = 0.2225; after 0.36 + 0.0225 + 0.0225 = <b>0.405</b>. 0.75 → 0.90 is the concentration ratio; 0.3825 leaves out one of the 15% firms after the merger." },
    { lesson: 7, q: "A monopolist faces demand P = 90 − 1.5Q and marginal cost of $30. Its profit-maximising output is:", opts: ["20", "40", "30"], ans: 0, hint: "MR = 90 − 3Q.", why: "90 − 3Q = 30 → Q = <b>20</b> (price $60). Q = 40 sets demand = MC." },
    { lesson: 7, q: "A main limitation of both the concentration ratio and the HHI is that they:", opts: ["cannot be calculated from market shares", "ignore barriers to entry and the elasticity of demand", "always rise when small firms merge"], ans: 1, hint: "What makes a lone seller behave competitively?", why: "Both measures <b>ignore entry and elasticity</b>, so high concentration does not prove pricing power." },
    { lesson: 7, q: "A cinema charges lower prices to students and seniors than to other adults for the same seat. This is an example of:", opts: ["first-degree price discrimination", "third-degree price discrimination", "average-cost pricing"], ans: 1, hint: "Different groups, different prices.", why: "Different prices for different <b>groups</b> = third-degree price discrimination." },
    { lesson: 7, q: "Which statement about monopoly is most accurate?", opts: ["A monopolist can earn economic profit in the long run because of barriers to entry", "A monopolist produces where price equals marginal cost", "A monopolist always charges the highest price any buyer would pay"], ans: 0, hint: "What stops profits being competed away?", why: "<b>Barriers to entry</b> protect long-run profit. It produces where MR = MC (not P = MC), and price comes from the demand curve." }
  ]
});
