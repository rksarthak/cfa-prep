/*
 * Corporate Issuers · Module 2 – Investors and Other Stakeholders (free module)
 * Original teaching text, examples and questions. The CFA Program curriculum is used only as a private
 * benchmark of topics and level; none of its text, exhibits or practice problems is reproduced.
 *
 * Question format: { q, opts:[A,B,C], ans:0|1|2, hint, why, lesson? }
 */
CFA.registerModule("corp", {
  num: 2,
  title: "Investors and Other Stakeholders",
  intro: "A company is a meeting point for many groups: shareholders and lenders who supply money, managers and employees who do the work, customers and suppliers who trade with it, and governments that tax and regulate it. This module shows how debt and equity holders are paid, why leverage raises both returns and risk, where the interests of each group clash, and how environmental, social and governance (ESG) factors feed into investment decisions.",
  los: [
    "Compare what lenders and shareholders are owed and what each wants, including how leverage changes the returns and risks of each",
    "Describe a company's stakeholder groups, what each one wants from the company, and how their interests can conflict",
    "Describe environmental, social and governance factors and how analysts use them when assessing debt and equity investments"
  ],
  lessons: [

    /* ===================================================== LESSON 1 */
    {
      id: "l1",
      title: "Debt and equity: two very different claims",
      summary: "What lenders and shareholders are promised, how each is paid in good and bad outcomes, and why their attitudes to risk differ.",
      los: [0],
      sections: [
        {
          title: "The idea in plain words",
          html: `
<p>Imagine a food truck worth ₹10 lakh. Ravi lends ₹6 lakh and is promised ₹6.6 lakh back in a year. Sana puts in ₹4 lakh and owns the truck's business. At the end of the year Ravi is paid <b>first</b>, and only the fixed amount he was promised. Sana gets <b>whatever is left</b>.</p>
<p>That one sentence holds the whole difference between debt and equity:</p>
<div class="tiles">
  <div class="tile"><h4>Debt (lender)</h4><ul><li><b>Contractual</b> claim: interest and principal on set dates</li><li><b>Paid first</b>; has priority in liquidation</li><li>Upside is <b>capped</b> at the promised amount</li><li>Usually <b>no vote</b>; protected by the contract (covenants)</li><li>Fixed <b>maturity</b></li></ul></div>
  <div class="tile c3"><h4>Equity (shareholder)</h4><ul><li><b>Residual</b> claim: what is left after everyone else is paid</li><li><b>Paid last</b></li><li>Upside is <b>unlimited</b>; loss limited to the investment</li><li><b>Votes</b> (elects the board)</li><li><b>No maturity</b>: the claim lasts as long as the company</li></ul></div>
</div>
<div class="callout key"><span class="label">Key idea</span>Lenders want to be <b>sure of getting their money back</b>. Shareholders want the company to be <b>worth as much as possible</b>. These are not the same goal, and many conflicts in this subject start here.</div>`
        },
        {
          title: "Worked example: who gets what at the end of the year",
          html: `
<p>Brennan Tools owes lenders <b>$80m</b> (principal plus interest) in one year. What the company is worth then is uncertain. Lenders receive the smaller of $80m and the company's value; shareholders receive anything above $80m.</p>
<div class="table-wrap"><table>
<tr><th>Company value at year end</th><th>Paid to lenders</th><th>Left for shareholders</th></tr>
<tr><td>$150m</td><td>$80m</td><td>$70m</td></tr>
<tr><td>$100m</td><td>$80m</td><td>$20m</td></tr>
<tr><td>$80m</td><td>$80m</td><td>$0</td></tr>
<tr><td>$50m</td><td>$50m (a $30m loss)</td><td>$0 (cannot go below zero)</td></tr>
</table></div>
<figure class="diagram"><div class="bars">
  <div class="bar"><span>Lenders if value = 150</span><span class="track"><span class="fill" style="width:53%"></span></span><span class="val">80</span></div>
  <div class="bar"><span>Shareholders if value = 150</span><span class="track"><span class="fill pass" style="width:47%"></span></span><span class="val">70</span></div>
  <div class="bar"><span>Lenders if value = 50</span><span class="track"><span class="fill" style="width:33%"></span></span><span class="val">50</span></div>
  <div class="bar"><span>Shareholders if value = 50</span><span class="track"><span class="fill pass" style="width:0%"></span></span><span class="val">0</span></div>
</div><figcaption>Lenders are paid first and only up to the promised $80m. Shareholders take everything above it, and lose no more than their stake below it.</figcaption></figure>
<p>Read the pattern:</p>
<ul>
<li><b>Lender payoff</b> = the smaller of (amount promised, company value). Above $80m, extra value does nothing for lenders. Below $80m, they absorb the losses.</li>
<li><b>Shareholder payoff</b> = the larger of (zero, company value − debt). Every extra dollar above $80m goes to them. Below $80m, limited liability means they simply get nothing.</li>
</ul>
<div class="callout analogy"><span class="label">Analogy</span>Shareholders hold something like a <b>lottery ticket on the company</b>: they keep all the upside, and the most they can lose is the ticket price. Lenders are more like a <b>landlord</b>: the rent is fixed, and a bad tenant is their only real worry.</div>`
        },
        {
          title: "Why the two groups see risk differently",
          html: `
<div class="vflow">
  <div class="node">Company takes on a <b>riskier</b> strategy (wider range of outcomes)</div><div class="arrow">⬇</div>
  <div class="node good"><b>Shareholders</b>: bigger upside belongs to them; downside is floored at zero → riskier can be <b>attractive</b></div><div class="arrow">⬇</div>
  <div class="node warn"><b>Lenders</b>: no extra upside (payment is capped), but a higher chance of default → riskier is <b>unattractive</b></div>
</div>
<p>So, all else equal:</p>
<ul>
<li>Shareholders tend to favour <b>growth and risk</b>; lenders favour <b>stability, cash flow and liquidity</b>.</li>
<li>Because lenders carry less risk (paid first, fixed claim), the <b>cost of debt is lower than the cost of equity</b>. Interest is also usually tax-deductible, which makes debt cheaper still.</li>
<li>Lenders care about the company's <b>ability to pay</b> (cash flow, interest coverage, collateral). Shareholders care about <b>growth in value</b> (earnings growth, return on equity, share price).</li>
</ul>
<div class="callout trap"><span class="label">Exam trap</span>“Equity is riskier for the investor” does <b>not</b> mean shareholders can lose more than they invested. Limited liability caps the loss at the investment. Equity is riskier because its payoff is <b>more variable</b> and comes <b>last</b>.</div>`
        }
      ],
      traps: [
        "<b>Lender upside is capped</b> at interest plus principal, however well the company does.",
        "<b>Shareholder downside is floored at zero</b> (limited liability), but upside is unlimited.",
        "<b>Debt has priority and a maturity; equity is residual and has no maturity.</b>",
        "<b>Cost of debt &lt; cost of equity</b>: lenders carry less risk, and interest is usually tax-deductible.",
        "Lenders usually have <b>no vote</b>; their protection is the contract (covenants, collateral)."
      ],
      quiz: [
        { q: "Compared with a shareholder, a lender to the same company most likely has:", opts: ["a capped upside and priority in liquidation", "an unlimited upside and a residual claim", "voting rights and no maturity date"], ans: 0, hint: "What is the lender promised?", why: "A lender receives <b>only the promised interest and principal</b> and is paid <b>before</b> shareholders. Unlimited upside, a residual claim, votes and no maturity describe equity." },
        { q: "Halden Freight owes $120m due in one year. If Halden is worth $90m at that date, the payoffs to lenders and shareholders are closest to:", opts: ["Lenders $90m; shareholders $0", "Lenders $120m; shareholders −$30m", "Lenders $60m; shareholders $30m"], ans: 0, hint: "Lenders get the smaller of the promise and the company's value.", why: "Lenders take the whole <b>$90m</b> and lose $30m. Shareholders get <b>$0</b>: limited liability means they cannot owe the shortfall. Splitting the value equally has no basis." },
        { q: "Using the same company (debt of $120m due), if Halden is worth $200m at year end, the shareholders receive:", opts: ["$200m", "$120m", "$80m"], ans: 2, hint: "Residual claim.", why: "Shareholders receive value minus debt: 200 − 120 = <b>$80m</b>. Lenders get exactly $120m and nothing more, however high the value goes." },
        { q: "Which investor benefits most if a company's profits turn out far higher than expected?", opts: ["A bank that has lent at a fixed rate", "A bondholder holding a 10-year bond", "A shareholder"], ans: 2, hint: "Whose payoff is capped?", why: "Only the <b>shareholder</b> has an uncapped claim. The bank and the bondholder get the contractual interest and principal no matter how high profits are." },
        { q: "Why is the cost of debt usually lower than the cost of equity for the same company?", opts: ["Lenders are paid first and have a fixed claim, and interest is usually tax-deductible", "Lenders have voting rights that protect them", "Debt has no maturity, so lenders have more time to be repaid"], ans: 0, hint: "Think priority and tax.", why: "Lenders face <b>less risk</b> (priority, fixed claim) and interest is usually <b>deductible</b>. Lenders usually have no votes, and debt does have a maturity." },
        { q: "A company's board is choosing between a safe expansion and a risky new technology with a higher chance of both big gains and big losses. Which group is most likely to prefer the risky option?", opts: ["Shareholders", "Lenders", "Both groups equally"], ans: 0, hint: "Who keeps the upside?", why: "<b>Shareholders</b> keep all the extra upside, while their downside is floored at zero. Lenders gain nothing extra from success but suffer if the company fails." },
        { q: "Which financial measure is a lender most likely to focus on when assessing a borrower?", opts: ["Growth in earnings per share", "The price-to-earnings ratio", "Interest coverage and cash flow stability"], ans: 2, hint: "Lenders want to be repaid.", why: "Lenders care about the <b>ability to pay</b>: cash flow, interest coverage, liquidity and collateral. EPS growth and the P/E ratio matter to shareholders." },
        { q: "Which statement about a shareholder's maximum loss is most accurate?", opts: ["It is unlimited if the company goes bankrupt", "It equals the shareholder's share of the company's debts", "It is limited to the amount invested in the shares"], ans: 2, hint: "Limited liability.", why: "With <b>limited liability</b>, shares can fall to zero but shareholders do not have to pay the company's debts. Their loss is limited to what they invested." },
        { q: "Ostrava Energy's debt of €50m is due. Its value could be €40m, €60m or €100m. In how many of these outcomes do lenders lose money?", opts: ["None", "Two", "One"], ans: 2, hint: "Lenders lose only when value is below what they are owed.", why: "Lenders lose only when value &lt; €50m, which happens in <b>one</b> case (€40m, a €10m loss). At €60m and €100m they receive the full €50m." }
      ]
    },

    /* ===================================================== LESSON 2 */
    {
      id: "l2",
      title: "Leverage, returns and financing choices",
      summary: "How borrowing magnifies return on equity in both directions, and how issuing shares, borrowing or using cash affect existing owners.",
      los: [0],
      sections: [
        {
          title: "Leverage magnifies returns, both ways",
          html: `
<p><b>Financial leverage</b> means funding assets partly with debt. Debt costs a fixed amount of interest. If the assets earn <b>more</b> than the interest rate, the surplus goes to shareholders and their return rises. If the assets earn <b>less</b>, shareholders must cover the gap and their return falls.</p>
<p><b>Example.</b> Tamsin Retail has assets of $400m. Its operating profit (before interest) depends on the economy. Debt costs 6%. Taxes are ignored to keep the arithmetic clean.</p>
<div class="table-wrap"><table>
<tr><th></th><th>All equity<br>(D 0, E 400)</th><th>Half debt<br>(D 200, E 200)</th><th>Mostly debt<br>(D 300, E 100)</th></tr>
<tr><td>Interest at 6%</td><td>0</td><td>12</td><td>18</td></tr>
<tr><td><b>Good year</b>: operating profit 100 (ROA 25%)</td><td>100/400 = <b>25%</b></td><td>88/200 = <b>44%</b></td><td>82/100 = <b>82%</b></td></tr>
<tr><td><b>Normal year</b>: operating profit 60 (ROA 15%)</td><td>60/400 = <b>15%</b></td><td>48/200 = <b>24%</b></td><td>42/100 = <b>42%</b></td></tr>
<tr><td><b>Bad year</b>: operating profit 20 (ROA 5%)</td><td>20/400 = <b>5%</b></td><td>8/200 = <b>4%</b></td><td>2/100 = <b>2%</b></td></tr>
</table></div>
<p>The figures are <b>return on equity (ROE)</b> = (operating profit − interest) ÷ equity.</p>
<div class="callout key"><span class="label">Shortcut formula (no taxes)</span>ROE = ROA + (ROA − interest rate) × D/E. Normal year, half debt: 15% + (15% − 6%) × 1 = 24%. Bad year, mostly debt: 5% + (5% − 6%) × 3 = 2%.</div>
<ul>
<li>When ROA &gt; interest rate, leverage <b>raises</b> ROE. When ROA &lt; interest rate, it <b>lowers</b> ROE.</li>
<li>Either way, leverage makes ROE <b>swing more</b>: from 5–25% with no debt to 2–82% with mostly debt. More swing = more risk for shareholders.</li>
<li>More debt also means a <b>higher chance of default</b>, which is why lenders demand a higher rate as leverage rises.</li>
</ul>`
        },
        {
          title: "Three ways to fund a new project",
          html: `
<p>Arlo Foods has <b>10m shares</b> at $20 each and net income of <b>$30m</b> (EPS $3.00). Its founder owns 5.1m shares (51%). It needs <b>$40m</b> for a new plant that will add <b>$6m</b> a year of profit before financing costs. Ignore taxes.</p>
<div class="tree">
  <div class="q">How should Arlo raise $40m?</div>
  <div class="branches">
    <div class="branch"><div class="if">Issue new shares</div><div class="then">2m new shares at $20. Net income 36, shares 12m → EPS <b>$3.00</b>. Founder falls to 5.1/12 = <b>42.5%</b> and loses control</div></div>
    <div class="branch"><div class="if">Borrow at 7%</div><div class="then">Interest 2.8. Net income 33.2, shares 10m → EPS <b>$3.32</b>. Founder keeps 51%, but leverage and default risk rise</div></div>
    <div class="branch"><div class="if">Use cash earning 3%</div><div class="then">Lost interest income 1.2. Net income 34.8 → EPS <b>$3.48</b>. No dilution, no new debt, but the cash cushion (liquidity) is gone</div></div>
  </div>
</div>
<div class="table-wrap"><table>
<tr><th>Choice</th><th>Effect on existing owners</th><th>Effect on lenders</th></tr>
<tr><td>New shares</td><td><b>Dilutes</b> ownership and votes; EPS may fall if the project earns less than the cost of equity</td><td>Good: more equity cushion</td></tr>
<tr><td>New debt</td><td>No dilution; higher expected EPS but more variable</td><td>Bad for existing lenders: more claims ahead of or alongside theirs, higher default risk</td></tr>
<tr><td>Existing cash</td><td>No dilution; cheapest if cash earns little</td><td>Less liquidity to meet payments</td></tr>
</table></div>
<div class="callout trap"><span class="label">Exam trap</span>Higher EPS from debt does <b>not</b> automatically mean shareholders are better off. The extra EPS comes with extra risk, so the return they <i>require</i> also rises.</div>`
        }
      ],
      traps: [
        "<b>ROE = ROA + (ROA − r) × D/E</b> (no taxes). Leverage helps only when ROA beats the interest rate.",
        "<b>Leverage widens the range of ROE</b> in both directions; that wider range is financial risk.",
        "<b>Issuing shares dilutes</b> existing owners' percentage and votes; debt and cash do not.",
        "<b>New debt hurts existing lenders</b>: more claims on the same assets and a higher default risk.",
        "Use <b>operating profit before interest</b> for ROA and <b>profit after interest ÷ equity</b> for ROE."
      ],
      quiz: [
        { q: "A company has assets of $500m funded with $250m of debt at 8% and $250m of equity. Operating profit is $60m. Ignoring taxes, its ROE is closest to:", opts: ["12.0%", "24.0%", "16.0%"], ans: 2, hint: "(Operating profit − interest) ÷ equity.", why: "Interest = 0.08 × 250 = 20. ROE = (60 − 20) ÷ 250 = <b>16.0%</b>. 12% is ROA (60/500); 24% ignores interest (60/250)." },
        { q: "Using the formula ROE = ROA + (ROA − r) × D/E, a company with ROA 10%, cost of debt 4% and D/E of 2 has an ROE of:", opts: ["22%", "16%", "14%"], ans: 0, hint: "10% + 6% × 2.", why: "ROE = 10% + (10% − 4%) × 2 = <b>22%</b>. 16% uses D/E of 1; 14% just adds the cost of debt to ROA." },
        { q: "A company's ROA falls from 12% to 3%, while its cost of debt stays at 5%. Compared with an identical unlevered company, its ROE in the bad year will most likely be:", opts: ["higher", "the same", "lower"], ans: 2, hint: "Compare ROA with the interest rate.", why: "When ROA (3%) is <b>below</b> the cost of debt (5%), each unit of debt drags ROE down. The levered company's ROE is <b>lower</b> than 3%." },
        { q: "Kiran Textiles has assets of ₹800 crore, half funded by debt at 9%. If operating profit rises from ₹80 crore to ₹120 crore, ROE (ignoring tax) changes from:", opts: ["10% to 15%", "20% to 30%", "11% to 21%"], ans: 2, hint: "Interest is ₹36 crore; equity is ₹400 crore.", why: "Interest = 0.09 × 400 = 36. ROE goes from (80 − 36)/400 = 11% to (120 − 36)/400 = <b>21%</b>. 10% to 15% is ROA; 20% to 30% ignores interest." },
        { q: "Which statement about financial leverage is most accurate?", opts: ["It increases ROE in every year", "It reduces the variability of ROE", "It increases the variability of ROE"], ans: 2, hint: "Look at the range of outcomes.", why: "Leverage <b>magnifies</b> ROE in both directions, so the range of outcomes widens. It raises ROE only when ROA exceeds the interest rate." },
        { q: "A company with 20m shares issues 5m new shares to fund a project. A shareholder who owned 4m shares now owns:", opts: ["20% of the company", "25% of the company", "16% of the company"], ans: 2, hint: "4 ÷ 25.", why: "4 ÷ (20 + 5) = <b>16%</b>, down from 20%. That fall is <b>dilution</b>. 25% wrongly divides by the new shares only." },
        { q: "A company with $80m of existing bonds borrows another $60m to buy back shares. The group most likely harmed is:", opts: ["the existing bondholders", "the remaining shareholders", "the company's customers"], ans: 0, hint: "Who now shares the assets with more claims?", why: "More debt with no new assets means more claims on the same assets and a higher default risk. <b>Existing bondholders</b> lose value; remaining shareholders get more leverage and possibly higher expected returns." },
        { q: "Pallas Media (12m shares, net income $24m) needs $30m. It can borrow at 6% or issue shares at $25. The project adds $4m of pre-financing profit. Ignoring tax, which option gives the higher EPS?", opts: ["Borrowing: about $2.18", "Issuing shares: about $2.33", "Both give $2.00"], ans: 0, hint: "Borrow: (24 + 4 − 1.8)/12. Shares: 28/13.2.", why: "Borrowing: (24 + 4 − 1.8) ÷ 12 = <b>$2.18</b>. Shares: 1.2m new shares, 28 ÷ 13.2 = $2.12. $2.33 forgets the new shares (28/12); $2.00 is the EPS before the project." },
        { q: "A founder holds 55% of a company and does not want to lose control. Which way of funding a large project fits that wish best?", opts: ["Issue new voting shares to the public", "Offer shares to a new strategic investor", "Borrow or use existing cash"], ans: 2, hint: "Which choices create new votes?", why: "Debt and cash create <b>no new shares</b>, so the founder's 55% stays intact. Both share issues dilute the founder's voting stake." },
        { q: "Why does a lender usually charge a higher interest rate to a company that already has a lot of debt?", opts: ["The probability of default is higher", "Interest is not tax-deductible above a certain level", "Lenders have voting rights that become weaker"], ans: 0, hint: "What changes for the lender?", why: "More debt means a higher <b>chance of default</b>, so lenders demand compensation. Lenders usually do not vote; tax limits are not the main reason." }
      ]
    },

    /* ===================================================== LESSON 3 */
    {
      id: "l3",
      title: "When lenders and shareholders disagree",
      summary: "Risk-shifting, payouts and new borrowing as sources of conflict; covenants as the fix; shareholder versus stakeholder theory.",
      los: [0, 1],
      sections: [
        {
          title: "Worked example: a gamble that helps owners and hurts lenders",
          html: `
<p>Corvid Labs owes lenders <b>$90m</b>, due next year. Its managers, acting for shareholders, must pick one project for all its money:</p>
<div class="table-wrap"><table>
<tr><th></th><th>Safe project</th><th>Risky project (50/50)</th></tr>
<tr><td>Company value next year</td><td>$100m for sure</td><td>$160m or $20m (expected $90m)</td></tr>
<tr><td>Lenders receive</td><td>$90m</td><td>$90m or $20m → expected <b>$55m</b></td></tr>
<tr><td>Shareholders receive</td><td><b>$10m</b></td><td>$70m or $0 → expected <b>$35m</b></td></tr>
</table></div>
<p>The risky project <b>destroys</b> $10m of expected value ($100m → $90m), yet shareholders prefer it ($35m vs $10m). The gain comes straight out of the lenders' pockets ($90m → $55m). This is called <b>risk-shifting</b> (or asset substitution).</p>
<div class="callout key"><span class="label">Why it happens</span>Shareholders keep the upside and limited liability floors their downside, so near financial distress they have little to lose from a gamble. The closer a company is to default, the <b>stronger</b> this temptation.</div>`
        },
        {
          title: "Three common conflicts and how lenders protect themselves",
          html: `
<div class="tiles">
  <div class="tile c4"><h4>1 · Taking more risk</h4><p>Riskier projects or strategies than lenders priced for (as in the Corvid example).</p></div>
  <div class="tile c4"><h4>2 · Paying cash out</h4><p>Large dividends or share buybacks move cash from the company, where lenders can claim it, to shareholders, where they cannot.</p></div>
  <div class="tile c4"><h4>3 · Borrowing more</h4><p>New debt, especially if secured or senior, waters down existing lenders' claim on the assets.</p></div>
</div>
<p>Lenders respond in two ways:</p>
<ul>
<li><b>Price</b>: they charge a higher interest rate when they expect this behaviour.</li>
<li><b>Contract</b>: the loan agreement or bond <b>indenture</b> contains <b>covenants</b>. <i>Affirmative</i> covenants say what the borrower must do (keep insurance, report regularly, maintain a minimum interest coverage). <i>Negative</i> covenants say what it must not do (pay dividends above a limit, sell key assets, take on more senior debt).</li>
</ul>
<div class="callout trap"><span class="label">Exam trap</span>A large special dividend can be <b>good news for shareholders and bad news for bondholders</b> at the same time. Always ask which group a decision helps.</div>`
        },
        {
          title: "Whose company is it? Shareholder vs stakeholder theory",
          html: `
<div class="tiles">
  <div class="tile"><h4>Shareholder theory</h4><p>The main job of managers is to <b>maximise value for shareholders</b>, within the law. Other groups are protected by their own contracts (wages, loan terms, supply deals) and by regulation.</p></div>
  <div class="tile c3"><h4>Stakeholder theory</h4><p>Managers should <b>balance the interests of all stakeholders</b>: shareholders, lenders, employees, customers, suppliers, communities and governments. Long-term value depends on keeping all of them on side.</p></div>
</div>
<p><b>Example.</b> A cement maker could raise this year's profit by cutting its spending on dust controls near a village. Under a strict shareholder view, the question is whether fines, lawsuits and lost licences would cost more than the saving. Under a stakeholder view, the harm to the village counts in its own right.</p>
<p>In practice the two views often lead to similar answers over the long run, because treating employees, customers and communities badly tends to hurt the share price eventually. ESG investing (lesson 5) grew out of this broader view.</p>`
        }
      ],
      traps: [
        "<b>Risk-shifting</b>: shareholders can gain from a project that lowers total company value, because lenders bear the downside.",
        "The temptation to gamble is <b>strongest near financial distress</b>, when equity has little left to lose.",
        "<b>Dividends, buybacks and new senior debt</b> move value from lenders to shareholders.",
        "<b>Affirmative covenants</b> = must do; <b>negative covenants</b> = must not do.",
        "<b>Shareholder theory</b> = maximise shareholder value; <b>stakeholder theory</b> = balance all groups' interests."
      ],
      quiz: [
        { q: "Delmar Steel owes $50m. A safe plan leaves it worth $60m for sure. A risky plan leaves it worth $110m or $10m with equal chance. The expected value to shareholders under the risky plan is:", opts: ["$10m", "$60m", "$30m"], ans: 2, hint: "Shareholders get value minus $50m, but not less than zero.", why: "Risky: 0.5 × (110 − 50) + 0.5 × 0 = <b>$30m</b>, versus $10m under the safe plan. $10m is the safe-plan payoff; $60m is the good outcome without weighting it by its 50% chance." },
        { q: "Using the Delmar Steel figures, the expected value to lenders under the risky plan is:", opts: ["$30m", "$50m", "$10m"], ans: 0, hint: "Lenders get $50m or $10m.", why: "Lenders: 0.5 × 50 + 0.5 × 10 = <b>$30m</b>, down from $50m under the safe plan. Expected company value is $60m under both plans (0.5 × 110 + 0.5 × 10 = 60), so the $20m the lenders lose is exactly what shareholders gain. $10m is the bad outcome only." },
        { q: "Which action by a company is most likely to transfer value from bondholders to shareholders?", opts: ["Issuing new shares to repay debt", "Paying a large special dividend funded by asset sales", "Building up cash reserves"], ans: 1, hint: "Where does the cash go?", why: "A large <b>special dividend</b> moves assets that back the bonds into shareholders' hands. Issuing shares to repay debt and holding more cash both help bondholders." },
        { q: "A bond covenant that forbids the issuer from selling its main factory without bondholder consent is best described as:", opts: ["an affirmative covenant", "a voting right", "a negative covenant"], ans: 2, hint: "Must do, or must not do?", why: "It <b>forbids</b> an action, so it is a <b>negative covenant</b>. Affirmative covenants require actions, such as providing audited accounts." },
        { q: "When is the conflict between lenders and shareholders over risky projects most likely to be strongest?", opts: ["When the company is close to financial distress", "When the company has almost no debt", "When the company has large cash reserves"], ans: 0, hint: "When does equity have little left to lose?", why: "Near <b>financial distress</b>, shareholders' claim is nearly worthless, so a gamble costs them little and gives them a chance of recovery, while lenders bear most of the downside." },
        { q: "A manager says: “My only duty is to maximise the value of our shares, as long as we obey the law.” This view is best described as:", opts: ["stakeholder theory", "ESG integration", "shareholder theory"], ans: 2, hint: "Whose value?", why: "That is <b>shareholder theory</b>. Stakeholder theory would ask the manager to balance the interests of employees, customers, communities and others too." },
        { q: "How do lenders most likely protect themselves against conflicts with shareholders?", opts: ["By buying a majority of the company's shares", "By including covenants in loan agreements and charging a higher rate", "By electing the board of directors"], ans: 1, hint: "Lenders rely on contracts and pricing.", why: "Lenders use <b>covenants</b> and <b>price</b> the risk into the interest rate. They usually do not vote or elect directors." },
        { q: "Under stakeholder theory, a decision to close a profitable local factory to move production abroad would most likely be judged by:", opts: ["its effect on shareholder value alone", "its effects on employees, the community, customers and shareholders together", "whether bondholders consent"], ans: 1, hint: "Stakeholder means more than one group.", why: "Stakeholder theory weighs the decision's effects on <b>all affected groups</b>, not shareholder value alone. Bondholder consent is a covenant issue, not the theory." },
        { q: "A company with heavy debt approves a share buyback funded by a new senior secured loan. Existing unsecured bondholders are most likely to see:", opts: ["higher bond prices", "lower bond prices", "no change, because the loan is separate"], ans: 1, hint: "Who now ranks ahead of them?", why: "The new <b>senior secured</b> lender ranks ahead of them and the buyback removes equity cushion, so default risk rises and bond prices <b>fall</b>." }
      ]
    },

    /* ===================================================== LESSON 4 */
    {
      id: "l4",
      title: "The stakeholder map",
      summary: "Shareholders, lenders, the board, managers, employees, customers, suppliers and governments: what each wants and how boards are organised.",
      los: [1],
      sections: [
        {
          title: "Who has a stake, and what do they want?",
          html: `
<div class="hub">
  <div class="side">
    <div class="spoke"><b>Shareholders</b><br>Growth in company value; dividends; a say through votes</div>
    <div class="spoke"><b>Lenders</b><br>Interest and principal paid on time; stable cash flow</div>
    <div class="spoke"><b>Board of directors</b><br>Oversees managers on behalf of shareholders</div>
    <div class="spoke"><b>Managers</b><br>Pay, job security, reputation, power</div>
  </div>
  <div class="centre">The<br>company</div>
  <div class="side">
    <div class="spoke"><b>Employees</b><br>Fair pay, safe work, job security, skills</div>
    <div class="spoke"><b>Customers</b><br>Good products at fair prices; safety; support</div>
    <div class="spoke"><b>Suppliers</b><br>Being paid on time; a lasting relationship</div>
    <div class="spoke"><b>Governments</b><br>Taxes, jobs, compliance with law, a stable economy</div>
  </div>
</div>
<p>Notice the split: some groups <b>supply capital</b> (shareholders, lenders), some <b>run</b> the company (board, managers, employees), and some <b>trade with or regulate</b> it (customers, suppliers, governments). Their claims are paid in different ways and at different times.</p>`
        },
        {
          title: "Shareholders and lenders in more detail",
          html: `
<p><b>Shareholders are not all alike.</b></p>
<ul>
<li><b>Controlling shareholders</b> (a founding family, a parent company, a government) can elect most of the board. Their interests may differ from those of <b>minority shareholders</b>, who have little influence.</li>
<li><b>Institutional investors</b> (pension funds, insurers, mutual funds) hold large blocks and can push for change. <b>Retail investors</b> hold small stakes and rarely vote.</li>
<li><b>Activist investors</b> (often hedge funds) buy stakes specifically to push for change: new directors, a sale, bigger payouts.</li>
</ul>
<p><b>Lenders also differ.</b></p>
<div class="table-wrap"><table>
<tr><th></th><th>Private debt (bank loans, private credit)</th><th>Public debt (bonds)</th></tr>
<tr><td>Information</td><td>Can ask for <b>private, detailed</b> information</td><td>Rely on <b>public</b> filings and credit ratings</td></tr>
<tr><td>Monitoring</td><td>Close, ongoing relationship</td><td>Arm's length; a trustee watches the covenants</td></tr>
<tr><td>Renegotiating</td><td>Easy: one or a few lenders</td><td>Hard: many scattered holders</td></tr>
</table></div>
<p>Because banks see inside the company, a new or renewed bank loan can act as a <b>positive signal</b> to other investors.</p>`
        },
        {
          title: "How boards are organised",
          html: `
<p>Shareholders elect a <b>board of directors</b> to oversee management. Board design varies:</p>
<div class="tiles">
  <div class="tile"><h4>One-tier board</h4><p>A <b>single board</b> with both <b>executive</b> (inside) directors, who are managers, and <b>non-executive</b> directors. Common in the US, UK and India.</p></div>
  <div class="tile c3"><h4>Two-tier board</h4><p>A <b>supervisory board</b> of non-executives oversees a separate <b>management board</b> of executives. Common in Germany and parts of continental Europe; employee representatives may sit on the supervisory board.</p></div>
</div>
<ul>
<li><b>Independent directors</b> have no material links to the company (not employees, not major suppliers, not close relatives of managers). They are better placed to challenge management.</li>
<li><b>Inside directors</b> are usually senior managers. They know the business well but are monitoring themselves.</li>
<li>A <b>staggered (classified) board</b> elects only part of the board each year, for example a third. It gives continuity but makes it <b>harder for shareholders to replace the whole board quickly</b>, which can shield poor managers from takeovers.</li>
<li>Many codes say the <b>chair and CEO roles should be separate</b>, or that a lead independent director should be named, so that the person being monitored is not running the monitoring.</li>
</ul>`
        },
        {
          title: "Managers, employees, customers, suppliers and governments",
          html: `
<div class="table-wrap"><table>
<tr><th>Group</th><th>What they want</th><th>How their interests can clash</th></tr>
<tr><td><b>Managers</b></td><td>Pay, bonuses, power, job security</td><td>May chase size over profit, avoid good but risky projects, or protect their jobs</td></tr>
<tr><td><b>Employees</b></td><td>Wages, safety, training, stable jobs</td><td>Cost cuts or automation help shareholders but cost jobs; skilled staff are a key asset</td></tr>
<tr><td><b>Customers</b></td><td>Quality, safety, fair prices, after-sales support</td><td>Cutting quality boosts short-term profit but hurts trust; customers care about financial health when products need long-term support</td></tr>
<tr><td><b>Suppliers</b></td><td>Timely payment, long-term orders</td><td>Stretching payment terms helps the company's cash but strains suppliers; suppliers are short-term creditors, so they worry about leverage</td></tr>
<tr><td><b>Governments</b></td><td>Taxes, jobs, legal compliance, economic stability</td><td>Aggressive tax planning or lobbying; in key industries (banks, utilities) governments regulate closely</td></tr>
</table></div>
<div class="callout key"><span class="label">Key idea</span>A <b>supplier</b> is a kind of lender: it delivers goods now and is paid later. Anything that raises the buyer's default risk, such as more borrowing, worries suppliers for the same reason it worries banks.</div>`
        }
      ],
      traps: [
        "<b>Private lenders</b> get inside information and can renegotiate easily; <b>bondholders</b> rely on public data and a trustee.",
        "<b>Two-tier board</b> = supervisory board + management board; <b>one-tier</b> = single board with executives and non-executives.",
        "<b>Staggered boards</b> slow down changes of control and can entrench managers.",
        "<b>Suppliers act like short-term creditors</b>, so they dislike higher leverage at their customers.",
        "<b>Controlling vs minority shareholders</b> is a separate conflict from managers vs shareholders."
      ],
      quiz: [
        { q: "Compared with bondholders, a bank lending to a company most likely:", opts: ["relies only on credit ratings and public filings", "has access to private information and can renegotiate more easily", "has voting rights at the shareholder meeting"], ans: 1, hint: "Private vs public debt.", why: "A bank has a <b>close relationship</b>, can ask for private information and can renegotiate with few parties. Bondholders rely on public data; neither group usually votes." },
        { q: "In a two-tier board structure, the board that oversees management is the:", opts: ["supervisory board", "management board", "audit committee"], ans: 0, hint: "Which board supervises?", why: "The <b>supervisory board</b> (non-executives) oversees the <b>management board</b> (executives). The audit committee is a committee, not a tier." },
        { q: "A shareholder group wants to replace all nine directors at once. Under a staggered board where three directors are elected each year, the minimum time needed is:", opts: ["one annual meeting", "two annual meetings", "three annual meetings"], ans: 2, hint: "Three seats per year.", why: "Only three of nine seats come up each year, so replacing all nine takes <b>three</b> annual meetings. A majority (five seats) would take two." },
        { q: "A supplier sells to a customer on 60-day credit terms. The customer then doubles its borrowing. The supplier is most likely to:", opts: ["welcome the change because the customer has more cash", "be concerned because the customer's default risk has risen", "be unaffected because suppliers are not creditors"], ans: 1, hint: "What is the supplier owed?", why: "Unpaid invoices make the supplier a <b>short-term creditor</b>. More leverage raises the risk it will not be paid, so it is <b>concerned</b>." },
        { q: "Which director is most likely to be considered independent?", opts: ["The company's chief financial officer", "A retired engineer with no business or family ties to the company", "A partner at the law firm that earns large fees from the company"], ans: 1, hint: "No material links.", why: "Independence means <b>no material ties</b>. The CFO is an insider, and a law firm earning large fees has a business relationship." },
        { q: "A founding family owns 60% of a listed company's votes. The conflict most likely to concern outside investors is between:", opts: ["managers and the board", "controlling and minority shareholders", "lenders and suppliers"], ans: 1, hint: "Who controls the board?", why: "A 60% holder can elect the board, so the main risk is decisions that favour the <b>controlling</b> family over <b>minority</b> shareholders, such as related-party deals." },
        { q: "Why might a new bank loan be seen as good news by a company's shareholders and bondholders?", opts: ["Banks guarantee the company's bonds", "The bank has studied private information and judged the company creditworthy", "Bank loans carry no interest"], ans: 1, hint: "What does the bank know?", why: "The bank had access to <b>inside information</b> and still lent, which <b>signals</b> creditworthiness. Banks do not guarantee bonds, and loans carry interest." },
        { q: "A company cuts the quality of a medical device to raise margins. The stakeholder group whose interests are most directly harmed is:", opts: ["customers", "lenders", "governments"], ans: 0, hint: "Who uses the device?", why: "<b>Customers</b> want safe, reliable products. Regulators may react later, but the direct harm falls on customers (and in time on the company's reputation)." },
        { q: "Which stakeholder pair most directly supplies the company's capital?", opts: ["Customers and suppliers", "Employees and managers", "Shareholders and lenders"], ans: 2, hint: "Who invests money?", why: "<b>Shareholders</b> (equity) and <b>lenders</b> (debt) supply capital. The other groups work for, trade with or regulate the company." },
        { q: "A manager turns down a project with a positive expected value because a failure might cost the manager's job. This conflict is between:", opts: ["managers and shareholders", "lenders and shareholders", "suppliers and customers"], ans: 0, hint: "Whose interests differ here?", why: "The manager is protecting personal job security at the cost of shareholder value, a <b>manager–shareholder</b> (agency) conflict, covered further in Module 3." }
      ]
    },

    /* ===================================================== LESSON 5 */
    {
      id: "l5",
      title: "ESG factors in investment analysis",
      summary: "Environmental, social and governance factors; materiality; physical and transition risk; stranded assets; how ESG affects lenders and shareholders differently.",
      los: [2],
      sections: [
        {
          title: "What E, S and G mean",
          html: `
<div class="tiles">
  <div class="tile c2"><h4>Environmental</h4><ul><li>Climate change and carbon emissions</li><li>Pollution and waste</li><li>Water use and scarcity</li><li>Biodiversity, land use</li><li>Energy efficiency</li></ul></div>
  <div class="tile c3"><h4>Social</h4><ul><li>Employee health and safety</li><li>Labour standards in the supply chain</li><li>Product safety and data privacy</li><li>Diversity and inclusion</li><li>Community relations</li></ul></div>
  <div class="tile"><h4>Governance</h4><ul><li>Board independence and skills</li><li>Executive pay</li><li>Shareholder rights</li><li>Accounting quality, audit</li><li>Bribery and corruption controls</li></ul></div>
</div>
<p><b>ESG investing</b> (also called sustainable or responsible investing) means considering these factors alongside financial ones. <b>ESG integration</b> is the most common form: the analyst simply builds ESG risks and opportunities into forecasts, risk assessments and valuations.</p>
<div class="callout key"><span class="label">Materiality</span>An ESG factor is <b>material</b> if it could reasonably affect the company's value or credit risk. Materiality <b>differs by industry</b>: water use matters a lot for a beverage maker or a chip fab, much less for a software firm, where data privacy matters more.</div>`
        },
        {
          title: "Climate risk: physical, transition and stranded assets",
          html: `
<div class="tiles">
  <div class="tile c4"><h4>Physical risk</h4><p>Direct damage from the climate itself: floods, storms, heatwaves, droughts, rising seas. Example: a coastal port's warehouses flooded more often.</p></div>
  <div class="tile c4"><h4>Transition risk</h4><p>Losses from the move to a low-carbon economy: carbon taxes, stricter rules, new technology, changing customer tastes. Example: a coal-power producer facing a carbon price.</p></div>
</div>
<p><b>Stranded assets</b> are assets that lose their value early because of transition risk. A gas field that can no longer be developed profitably once a carbon tax applies is a classic example. On the balance sheet it may still be carried at cost until it is written down.</p>
<p><b>Externalities</b> are costs (or benefits) a company creates for others but does not pay for, such as pollution. When governments make companies pay for them (taxes, fines, clean-up rules), an externality becomes a real cost to the company. Analysts try to judge how likely and how soon that is.</p>`
        },
        {
          title: "Why ESG matters differently to lenders and shareholders",
          html: `
<p>Go back to lesson 1: lenders have a capped upside and full exposure to the downside. So:</p>
<div class="vflow">
  <div class="node"><b>Shareholders</b> look at ESG <b>risks and opportunities</b>: a company leading the shift to clean energy may gain market share and value</div><div class="arrow">⬇</div>
  <div class="node warn"><b>Lenders</b> focus on ESG <b>downside risks</b>: anything that could cut cash flow or asset values and cause default. Upside does not raise what they are paid</div><div class="arrow">⬇</div>
  <div class="node"><b>Longer maturity</b> = more exposure. A 30-year bond is far more exposed to slow-moving risks such as climate rules than a 1-year loan</div>
</div>
<p><b>Example.</b> Two bonds from the same coal-heavy utility: a 2-year note and a 25-year bond. A carbon tax expected in ten years barely touches the 2-year note, which will be repaid long before; it could badly hurt the 25-year bond. Lenders also look at <b>use of proceeds</b> (for example, “green” bonds that fund only eligible projects).</p>
<div class="callout trap"><span class="label">Exam trap</span>ESG risk is <b>not only</b> a “values” question. Analysts include it because it can change <b>cash flows, the cost of capital and credit risk</b>. Watch out too for <b>greenwashing</b>: claims of environmental benefit that the facts do not support.</div>`
        }
      ],
      traps: [
        "<b>Physical risk</b> = damage from the climate; <b>transition risk</b> = losses from the policy, technology and market shift to low carbon.",
        "<b>Stranded asset</b> = an asset whose value is cut early, usually by transition risk.",
        "<b>Materiality differs by industry</b>; the same factor can be critical for one company and minor for another.",
        "<b>Lenders focus on ESG downside; shareholders weigh risks and opportunities.</b>",
        "<b>Longer-maturity debt is more exposed</b> to slow-moving ESG risks."
      ],
      quiz: [
        { q: "A beach resort's buildings are damaged more often by storms as sea levels rise. This is best described as:", opts: ["transition risk", "physical risk", "governance risk"], ans: 1, hint: "Is the damage from the climate itself or from policy?", why: "Direct damage from weather and rising seas is <b>physical risk</b>. Transition risk comes from policy, technology and market changes." },
        { q: "A government introduces a steep tax on carbon emissions, cutting the profit of a cement maker. This is an example of:", opts: ["physical risk", "transition risk", "social risk"], ans: 1, hint: "Policy shift.", why: "A carbon tax is part of the move to a low-carbon economy, so it is <b>transition risk</b>." },
        { q: "An oil reserve that can no longer be extracted profitably after new climate rules is best described as:", opts: ["a stranded asset", "an externality", "a material governance weakness"], ans: 0, hint: "Value lost early because of the transition.", why: "An asset that loses its value early because of transition risk is a <b>stranded asset</b>." },
        { q: "Which ESG factor is most likely to be material for a bottled-water company?", opts: ["Water scarcity near its sources", "Data privacy of website visitors", "Carbon emissions from office lighting"], ans: 0, hint: "What does the business depend on?", why: "<b>Water scarcity</b> directly threatens its core input. Website data privacy and office lighting are minor for this business." },
        { q: "Which of the following is a governance factor?", opts: ["Workplace accident rates", "Independence of the board's audit committee", "Greenhouse gas emissions"], ans: 1, hint: "G is about how the company is run and controlled.", why: "Board and committee <b>independence</b> is a governance factor. Accident rates are social; emissions are environmental." },
        { q: "Compared with a shareholder, a bondholder analysing ESG factors is most likely to focus on:", opts: ["opportunities that could raise the company's growth", "downside risks that could cause default", "the company's dividend policy"], ans: 1, hint: "Recall the bondholder's payoff.", why: "A bondholder's payoff is capped, so ESG <b>upside</b> adds little. The focus is on <b>downside</b> risks that could stop the company paying." },
        { q: "A utility has a 3-year note and a 30-year bond outstanding. Strict emission limits are expected in about 15 years. Which is most exposed to this risk?", opts: ["The 3-year note", "The 30-year bond", "Both equally"], ans: 1, hint: "Which one is still outstanding in 15 years?", why: "The 3-year note will be repaid long before the rules bite. The <b>30-year bond</b> will still be outstanding, so it carries the risk." },
        { q: "A factory releases waste into a river and pays nothing for the harm to farmers downstream. Economists would call this harm:", opts: ["a stranded asset", "a negative externality", "a governance factor"], ans: 1, hint: "A cost borne by others.", why: "A cost imposed on others and not paid by the company is a <b>negative externality</b>. It can become a real cost if regulators impose fines or clean-up rules." },
        { q: "Which statement about ESG integration is most accurate?", opts: ["It means excluding all companies in certain industries", "It means building material ESG factors into forecasts, risk and valuation", "It applies only to equity investors"], ans: 1, hint: "Integration, not exclusion.", why: "<b>ESG integration</b> adds material ESG factors to normal analysis. Excluding industries is a different approach (screening), and lenders use ESG analysis too." },
        { q: "A company advertises itself as “carbon neutral” but has no credible plan or measured reductions. An analyst would most likely call this:", opts: ["greenwashing", "transition risk", "materiality"], ans: 0, hint: "Claims vs facts.", why: "Environmental claims not backed by evidence are <b>greenwashing</b>, which can itself become a reputational and legal risk." }
      ]
    }
  ],

  moduleQuiz: [
    { lesson: 1, q: "Fenwick Marine owes $70m due in one year. If its value at that date is $55m, lenders and shareholders receive:", opts: ["$35m and $20m", "$70m and −$15m", "$55m and $0"], ans: 2, hint: "Lenders take everything up to what they are owed.", why: "Lenders receive the whole <b>$55m</b> (a $15m loss) and shareholders <b>$0</b>. Limited liability stops shareholders owing the shortfall." },
    { lesson: 1, q: "Fenwick Marine's value rises to $130m instead. The shareholders' payoff increases by how much compared with a value of $100m?", opts: ["$0", "$60m", "$30m"], ans: 2, hint: "Above $70m, every extra dollar goes to shareholders.", why: "At $100m shareholders get 30; at $130m they get 60, an increase of <b>$30m</b>. Lenders get $70m in both cases." },
    { lesson: 1, q: "Which feature belongs to equity but not to debt?", opts: ["A fixed maturity date", "A residual claim on profits and assets", "Priority over other claims in liquidation"], ans: 1, hint: "Paid last, takes what is left.", why: "Equity is the <b>residual claim</b>. A maturity date and priority are features of debt." },
    { lesson: 1, q: "A company's assets could end the year worth $30m, $90m or $150m. It owes lenders $60m. In which outcome(s) do shareholders receive more than lenders?", opts: ["None of them", "$90m and $150m", "$150m only"], ans: 2, hint: "Work out both payoffs in each case.", why: "At $30m: lenders 30, shareholders 0. At $90m: lenders 60, shareholders 30. At $150m: lenders 60, shareholders <b>90</b>. Only the <b>$150m</b> outcome gives shareholders more." },
    { lesson: 1, q: "Which statement best explains why lenders dislike an increase in the riskiness of a company's assets?", opts: ["Their interest payments are cut automatically", "Their voting power is reduced", "Their maximum payoff is fixed, while the chance of a shortfall rises"], ans: 2, hint: "Capped upside, exposed downside.", why: "Lenders cannot share in the extra upside but bear more <b>default risk</b>. Votes and automatic interest cuts are not the reason." },
    { lesson: 1, q: "Investors in the same company require 6% on its bonds and 12% on its shares. The most likely explanation is that:", opts: ["shareholders are paid first", "bonds have no maturity", "shareholders' claims are residual and more variable"], ans: 2, hint: "Higher risk, higher required return.", why: "Shareholders are paid <b>last</b> and their payoff <b>varies more</b>, so they require a higher return. Bonds are paid first and do have a maturity." },
    { lesson: 2, q: "Kestrel Logistics has assets of $600m, financed with $360m of debt at 5% and the rest with equity. Operating profit is $54m. Ignoring taxes, ROE is closest to:", opts: ["9.0%", "22.5%", "15.0%"], ans: 2, hint: "Interest 18; equity 240.", why: "Interest = 0.05 × 360 = 18. ROE = (54 − 18) ÷ 240 = <b>15.0%</b>. 9% is ROA (54/600); 22.5% ignores interest (54/240)." },
    { lesson: 2, q: "Using the Kestrel Logistics figures, if operating profit fell to $24m, ROE would be closest to:", opts: ["10.0%", "4.0%", "2.5%"], ans: 2, hint: "(24 − 18) ÷ 240.", why: "(24 − 18) ÷ 240 = <b>2.5%</b>, below the 4% ROA. When ROA (4%) is under the 5% cost of debt, leverage drags ROE down." },
    { lesson: 2, q: "A company has ROA of 9% and pays 6% on its debt. Ignoring taxes, increasing D/E from 0.5 to 1.5 changes ROE from:", opts: ["10.5% to 13.5%", "9.0% to 13.5%", "10.5% to 18.0%"], ans: 0, hint: "ROE = ROA + (ROA − r) × D/E.", why: "At 0.5: 9% + 3% × 0.5 = 10.5%. At 1.5: 9% + 3% × 1.5 = <b>13.5%</b>. 18% uses a D/E of 3; 9% ignores the starting leverage." },
    { lesson: 2, q: "Two otherwise identical companies differ only in leverage. In a year when ROA equals the cost of debt, their ROEs will be:", opts: ["higher for the levered company", "lower for the levered company", "equal"], ans: 2, hint: "What is (ROA − r) when they are equal?", why: "If ROA = r, the spread is zero, so ROE = ROA for both: <b>equal</b>. Leverage helps only when ROA &gt; r and hurts when ROA &lt; r." },
    { lesson: 2, q: "Juniper Health has 40m shares and net income of $80m. It needs $50m and can borrow at 8% or issue shares at $25. The project adds $9m of pre-financing profit. Ignoring tax, EPS after borrowing and after issuing shares is closest to:", opts: ["$2.13 and $2.12", "$2.23 and $2.12", "$2.13 and $2.23"], ans: 0, hint: "Borrow: (80 + 9 − 4)/40. Shares: 89/42.", why: "Borrowing: (89 − 4) ÷ 40 = <b>$2.13</b>. Shares: 2m new shares, 89 ÷ 42 = <b>$2.12</b>. $2.23 ignores either the interest or the new shares." },
    { lesson: 2, q: "Which way of funding a project dilutes existing shareholders' voting control?", opts: ["Using retained cash", "Borrowing from a bank", "Selling new shares to outside investors"], ans: 2, hint: "Which creates new votes?", why: "Only <b>new shares</b> add votes and reduce existing holders' percentage. Cash and debt leave ownership unchanged." },
    { lesson: 2, q: "Lark Systems' ROE is 18% with no debt in a strong year and 4% in a weak year. If it adds debt costing 7%, the most likely effect is that:", opts: ["ROE rises in both years", "ROE falls in both years", "ROE rises in the strong year and falls in the weak year"], ans: 2, hint: "Compare each year's ROA with 7%.", why: "With no debt, ROE = ROA. Strong year: 18% &gt; 7%, so leverage <b>raises</b> ROE. Weak year: 4% &lt; 7%, so it <b>lowers</b> ROE." },
    { lesson: 2, q: "A company funds a buyback entirely with new debt. Which group most likely benefits, and which is most likely harmed?", opts: ["Shareholders benefit; existing lenders are harmed", "Lenders benefit; shareholders are harmed", "Both benefit equally"], ans: 0, hint: "Leverage up, equity cushion down.", why: "Remaining <b>shareholders</b> gain higher expected ROE; <b>existing lenders</b> face more claims and less equity cushion, so their default risk rises." },
    { lesson: 3, q: "Hollis Mining owes $40m. Plan X leaves it worth $45m for sure. Plan Y leaves it worth $85m or $5m with equal chance. Which plan do shareholders prefer, and what is the expected value of the whole company under each?", opts: ["Plan Y; $45m under both", "Plan X; $45m under both", "Plan Y; $45m under X and $50m under Y"], ans: 0, hint: "Shareholders: X gives 5; Y gives 0.5 × 45.", why: "Plan X gives shareholders $5m; Plan Y gives 0.5 × 45 = $22.5m, so they prefer <b>Plan Y</b>. Company value is $45m either way (0.5 × 85 + 0.5 × 5 = 45). The gain to shareholders is a pure transfer from lenders." },
    { lesson: 3, q: "Using the Hollis Mining figures, the expected payoff to lenders under Plan Y is:", opts: ["$40.0m", "$20.0m", "$22.5m"], ans: 2, hint: "Lenders get 40 or 5.", why: "0.5 × 40 + 0.5 × 5 = <b>$22.5m</b>, versus $40m under Plan X. Their loss of $17.5m equals the shareholders' gain." },
    { lesson: 3, q: "Which covenant is affirmative?", opts: ["The borrower may not pay dividends above 40% of net income", "The borrower may not pledge its assets to other lenders", "The borrower must keep interest coverage above 3 times"], ans: 2, hint: "Must do, not must not do.", why: "Keeping coverage above a level is something the borrower <b>must do</b>: affirmative. The other two forbid actions, so they are negative covenants." },
    { lesson: 3, q: "A bond indenture limits the issuer's dividends. The conflict this mainly addresses is:", opts: ["shareholders moving cash out of the company ahead of lenders", "managers paying themselves too much", "customers demanding lower prices"], ans: 0, hint: "Who receives dividends?", why: "Dividends move cash to <b>shareholders</b>, leaving less to repay lenders. Limiting them protects bondholders." },
    { lesson: 3, q: "A company near default can either invest in a low-risk upgrade or bet its cash on an unproven product. Which statement is most accurate?", opts: ["Shareholders and lenders will both prefer the upgrade", "Shareholders may prefer the gamble even if it lowers total company value", "Lenders will prefer the gamble because it could repay them in full"], ans: 1, hint: "Risk-shifting.", why: "Near default, equity has little to lose, so <b>shareholders may prefer the gamble</b>. Lenders gain nothing from the upside and lose from the downside." },
    { lesson: 3, q: "Which statement about shareholder and stakeholder theory is most accurate?", opts: ["Shareholder theory ignores the law", "Stakeholder theory asks managers to balance the interests of several groups", "Both theories say lenders should elect the board"], ans: 1, hint: "Balance versus maximise.", why: "<b>Stakeholder theory</b> balances all groups' interests. Shareholder theory maximises shareholder value <i>within</i> the law. Neither gives lenders board elections." },
    { lesson: 3, q: "Lenders who expect a borrower to take on more risk after the loan is made are most likely to:", opts: ["charge a higher interest rate or add covenants", "lend more to share in the upside", "ask for voting shares instead of interest"], ans: 0, hint: "Price and contract.", why: "Lenders protect themselves through <b>pricing</b> (a higher rate) and <b>covenants</b>. Their upside stays capped whatever they lend." },
    { lesson: 4, q: "Which comparison of private and public debt is most accurate?", opts: ["Bondholders usually receive more private information than banks", "Bank loans are usually easier to renegotiate than widely held bonds", "Banks rely only on credit ratings"], ans: 1, hint: "How many lenders sit at the table?", why: "With one or a few banks, <b>renegotiation is easier</b> than with thousands of bondholders. Banks get more private information, not less." },
    { lesson: 4, q: "In which board structure do employee representatives most commonly sit on the board that oversees managers?", opts: ["A one-tier board in the US", "A two-tier board with a supervisory board", "A staggered board"], ans: 1, hint: "Think continental Europe.", why: "Employee representation is common on the <b>supervisory board</b> of a two-tier system. Staggered describes election timing, not structure." },
    { lesson: 4, q: "A board of 12 directors is staggered into four classes of three, one class elected each year. An activist needs 7 seats to control the board. The minimum number of annual elections needed is:", opts: ["two", "three", "four"], ans: 1, hint: "Three seats per election.", why: "After two elections the activist has at most 6 seats; after <b>three</b>, 9. Seven seats needs three elections." },
    { lesson: 4, q: "Which stakeholder is most likely to oppose a company's plan to lengthen its payment terms from 30 to 90 days?", opts: ["Its suppliers", "Its customers", "Its shareholders"], ans: 0, hint: "Who waits longer to be paid?", why: "<b>Suppliers</b> would wait three times as long for their money and carry more credit risk. Shareholders may welcome the extra cash." },
    { lesson: 4, q: "Which situation most clearly shows a conflict between controlling and minority shareholders?", opts: ["The company buys raw materials at above-market prices from a firm owned by its majority owner", "The board cuts the dividend to fund research", "A bank adds a covenant to a loan"], ans: 0, hint: "Who gains at whose expense?", why: "Buying above market from the <b>majority owner's</b> firm moves value from all shareholders to the controller: a related-party transaction that harms <b>minority</b> holders." },
    { lesson: 4, q: "Governments are most likely to take a close interest in a company's affairs when the company:", opts: ["is a small private firm", "is a large bank whose failure could harm the wider economy", "pays no dividends"], ans: 1, hint: "Systemic importance.", why: "Governments regulate closely where failure would hurt the <b>wider economy</b>, as with large banks and utilities." },
    { lesson: 4, q: "Which statement about the board of directors is most accurate?", opts: ["Directors are elected by lenders", "Independent directors have no material ties to the company", "Inside directors are usually outside the management team"], ans: 1, hint: "Definitions.", why: "<b>Independent</b> directors have no material ties. Shareholders elect directors, and inside directors are usually managers." },
    { lesson: 5, q: "A low-lying semiconductor plant faces more frequent floods, and a power producer faces new emission limits. These are, respectively:", opts: ["physical risk and transition risk", "transition risk and physical risk", "physical risk in both cases"], ans: 0, hint: "Weather damage vs policy change.", why: "Floods are <b>physical risk</b>; emission limits are <b>transition risk</b>." },
    { lesson: 5, q: "Which ESG factor is most likely to be material for a social media company?", opts: ["User data privacy and security", "Water use in manufacturing", "Methane leaks from pipelines"], ans: 0, hint: "Materiality differs by industry.", why: "A social media company's key ESG risk is <b>data privacy and security</b>. Water use and methane are material for manufacturers and energy firms." },
    { lesson: 5, q: "A utility owns a new coal plant designed to run for 40 years. A credible government plan bans coal power within 15 years. The plant is best described as at risk of becoming:", opts: ["a stranded asset", "an externality", "a governance failure"], ans: 0, hint: "Value lost early because of the transition.", why: "The plant will lose its value well before the end of its design life because of policy: a <b>stranded asset</b>." },
    { lesson: 5, q: "Which investor is most likely to put the most weight on long-run climate transition risk?", opts: ["A buyer of the company's 6-month commercial paper", "A buyer of the company's 30-year bonds", "A trade supplier paid within 30 days"], ans: 1, hint: "Who is exposed the longest?", why: "The <b>30-year bondholder</b> is exposed until the risk materialises. Short-term lenders and suppliers will be repaid long before." },
    { lesson: 5, q: "Compared with a shareholder, why might a lender pay less attention to a company's ESG opportunities?", opts: ["Lenders are not allowed to consider ESG factors", "The lender's payoff is capped, so extra upside adds little", "ESG opportunities affect only bond prices"], ans: 1, hint: "Lender payoff.", why: "Lenders' payoff is <b>capped</b>, so new opportunities add little; ESG <b>downside</b> risk matters more because it threatens repayment." },
    { lesson: 5, q: "A chemical company dumps waste cheaply; regulators then announce clean-up charges based on past dumping. From the analyst's view, the externality has:", opts: ["become a real cost to the company", "stayed a cost borne only by others", "turned into an ESG opportunity"], ans: 0, hint: "Who now pays?", why: "Once regulators make the company pay, the externality is <b>internalised</b> and becomes a real cost that lowers cash flow and value." },
    { lesson: 5, q: "Which item is a social factor?", opts: ["Board independence", "Labour standards at overseas suppliers", "Greenhouse gas emissions"], ans: 1, hint: "S is about people.", why: "<b>Labour standards</b> in the supply chain are social. Board independence is governance; emissions are environmental." },
    { lesson: 5, q: "Which approach best describes ESG integration?", opts: ["Refusing to buy shares of any tobacco company", "Adjusting cash flow forecasts and discount rates for material ESG risks", "Buying only bonds labelled green"], ans: 1, hint: "Built into the analysis.", why: "<b>Integration</b> builds material ESG factors into normal forecasts and valuation. Excluding an industry is screening; buying only green bonds is a thematic approach." }
  ]
});
