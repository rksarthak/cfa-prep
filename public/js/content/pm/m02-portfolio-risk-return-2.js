/*
 * Portfolio Management · Module 2 – Portfolio Risk and Return: Part II (free module)
 * Original teaching text, examples and questions. The CFA Program curriculum is used only as a private
 * benchmark of topics and level; none of its text, exhibits or practice problems is reproduced.
 *
 * Question format: { q, opts:[A,B,C], ans:0|1|2, hint, why, lesson? }
 */
CFA.registerModule("pm", {
  num: 2,
  title: "Portfolio Risk and Return: Part II",
  intro: "Module 1 ended with every investor holding the same risky portfolio plus some lending or borrowing. This module asks: <b>which</b> risky portfolio, and what return should each asset earn? You will meet the <b>market portfolio</b> and the <b>capital market line</b>, split risk into the part diversification removes and the part it can't, measure the second part with <b>beta</b>, and price it with the <b>CAPM</b>. The module ends with the four classic performance measures (Sharpe, Treynor, M² and Jensen's alpha) and how the CAPM is used to pick securities and judge projects.",
  los: [
    "Describe what happens when a risk-free asset is combined with a portfolio of risky assets",
    "Explain the capital allocation line (CAL) and the capital market line (CML)",
    "Explain systematic and nonsystematic risk, and why investors should not expect extra return for nonsystematic risk",
    "Explain return-generating models, including the market model, and what they are used for",
    "Calculate and interpret beta",
    "Explain the CAPM, its assumptions and the security market line (SML)",
    "Calculate and interpret an asset's expected return with the CAPM",
    "Describe and use the CAPM and SML in practice: valuing securities, building portfolios and judging projects",
    "Calculate and interpret the Sharpe ratio, Treynor ratio, M² and Jensen's alpha"
  ],
  lessons: [

    /* ===================================================== LESSON 1 */
    {
      id: "l1",
      title: "Adding a risk-free asset: lending, borrowing and leverage",
      summary: "Why a risk-free asset improves the trade-off (zero correlation, zero variance); lending vs borrowing portfolios; different borrowing and lending rates; how the investor picks the point.",
      los: [0, 1],
      sections: [
        {
          title: "Why the risk-free asset helps",
          html: `
<p>A risk-free asset (for example a short-term government bill) has <b>zero standard deviation</b> and therefore <b>zero correlation</b> with every risky asset. Combine it with a risky portfolio and the cross term in the variance formula disappears:</p>
<div class="callout key"><span class="label">Mixing r<sub>f</sub> with risky portfolio i</span>E(R<sub>p</sub>) = w<sub>f</sub>r<sub>f</sub> + (1 − w<sub>f</sub>)E(R<sub>i</sub>) &nbsp;&nbsp; σ<sub>p</sub> = (1 − w<sub>f</sub>)σ<sub>i</sub></div>
<p>Return and risk both move in a straight line as the mix changes. That line is the <b>capital allocation line (CAL)</b>: the expected return and <b>total risk</b> of every mix of the risk-free asset and one risky portfolio. Investors gain a smoother menu of choices than holding only risky assets or only the risk-free asset.</p>
<p><i>Example:</i> Aarav can buy treasury bills at 5% or the Nilgiri Equity Fund (E = 13%, σ = 20%).</p>
<div class="table-wrap"><table>
<tr><th>Weight in Nilgiri</th><th>Position</th><th class="num">E(R<sub>p</sub>)</th><th class="num">σ<sub>p</sub></th></tr>
<tr><td class="num">0%</td><td>All bills</td><td class="num">5.0%</td><td class="num">0%</td></tr>
<tr><td class="num">50%</td><td>Lending half</td><td class="num">9.0%</td><td class="num">10%</td></tr>
<tr><td class="num">100%</td><td>All in the fund</td><td class="num">13.0%</td><td class="num">20%</td></tr>
<tr><td class="num">150%</td><td>Borrowing 50% of wealth at 5%</td><td class="num">17.0%</td><td class="num">30%</td></tr>
</table></div>
<p>The 150% row: 1.5 × 13% − 0.5 × 5% = 19.5% − 2.5% = 17%. Leverage raises expected return <b>and</b> risk in the same proportion.</p>`
        },
        {
          title: "Who chooses what",
          html: `
<ul>
<li>The CAL is the same for every investor with the same assets. Each investor picks the point where the CAL touches their <b>highest indifference curve</b> (Module 1).</li>
<li><b>Highly risk-averse</b> investors put most of their wealth in the risk-free asset. Less risk-averse investors put everything in the risky portfolio, or borrow to buy more.</li>
<li>The best investors can do is the CAL with the steepest slope: the one through the optimal risky portfolio.</li>
</ul>
<div class="callout key"><span class="label">When borrowing costs more than lending</span>In practice investors usually borrow at a rate above the lending rate. The CAL then has a <b>kink</b> at the risky portfolio: to the right of it the line is flatter (slope uses the higher borrowing rate), so leverage is less attractive.</div>`
        }
      ],
      traps: [
        "Risk-free asset: σ = 0 and <b>correlation 0</b> with risky assets; that's why the CAL is straight.",
        "CAL uses <b>total risk</b> (σ), not beta.",
        "Leverage: E(R<sub>p</sub>) = w × E(R<sub>i</sub>) − (w − 1) × r<sub>f</sub>; don't forget to subtract the borrowing cost.",
        "Highly risk-averse investors hold <b>mostly the risk-free asset</b>, not the risky portfolio.",
        "Borrowing rate &gt; lending rate → the CAL bends (flatter) beyond the risky portfolio."
      ],
      quiz: [
        { q: "The line showing the expected return and total risk of all combinations of a risk-free asset and a risky portfolio is the:", opts: ["security market line", "security characteristic line", "capital allocation line"], ans: 2, hint: "Total risk on the x-axis.", why: "That is the <b>capital allocation line</b>. The SML uses beta; the security characteristic line plots an asset's excess returns against the market's." },
        { q: "Combining a risk-free asset with a risky portfolio gives a straight-line trade-off mainly because the correlation between them is:", opts: ["−1", "+1", "0"], ans: 2, hint: "What is the correlation of a constant with anything?", why: "The risk-free asset doesn't vary, so its correlation with any risky asset is <b>0</b> and the cross term vanishes." },
        { q: "Treasury bills yield 4%; an equity fund has E = 12%, σ = 18%. An investor puts 70% in the fund. The portfolio's expected return and standard deviation are:", opts: ["9.6% and 18.0%", "8.4% and 18.0%", "9.6% and 12.6%"], ans: 2, hint: "Return: 0.3 × 4 + 0.7 × 12. Risk: 0.7 × 18.", why: "1.2 + 8.4 = <b>9.6%</b>; 0.7 × 18 = <b>12.6%</b>. The bills add no risk." },
        { q: "Same market: bills 4%, fund E = 12%, σ = 18%. An investor borrows 40% of her wealth at 4% and invests 140% in the fund. Her expected return is:", opts: ["16.8%", "12.0%", "15.2%"], ans: 2, hint: "1.4 × 12 − 0.4 × 4.", why: "16.8 − 1.6 = <b>15.2%</b>. 16.8% forgets the cost of borrowing." },
        { q: "Same position (140% in the fund with σ = 18%, financed by borrowing at the risk-free rate). The portfolio's standard deviation is:", opts: ["18.0%", "10.8%", "25.2%"], ans: 2, hint: "σ<sub>p</sub> = w × σ<sub>i</sub>.", why: "1.4 × 18 = <b>25.2%</b>. Leverage scales risk up." },
        { q: "Highly risk-averse investors facing a capital allocation line will most likely invest the majority of their wealth in:", opts: ["the optimal risky portfolio", "a leveraged risky position", "the risk-free asset"], ans: 2, hint: "Steep indifference curves.", why: "Their curves touch the line close to r<sub>f</sub>: mostly <b>the risk-free asset</b>." },
        { q: "An investor's optimal portfolio is the combination of the risk-free asset and the risky portfolio that gives the highest:", opts: ["expected return", "standard deviation", "indifference curve reached"], ans: 2, hint: "Utility is what's maximised.", why: "The best point is where the CAL touches the <b>highest indifference curve</b>, not simply the highest return." },
        { q: "If investors can borrow only at a rate higher than the risk-free lending rate, the part of the CAL to the right of the risky portfolio:", opts: ["disappears completely", "is steeper than the part to the left", "is flatter than the part to the left"], ans: 2, hint: "Higher cost of leverage.", why: "Borrowing costs more, so each extra unit of risk earns less: the line is <b>flatter</b> beyond the risky portfolio." },
        { q: "Bills yield 5%; a fund has E = 11%, σ = 15%. What weight in the fund produces a portfolio with a standard deviation of 6%?", opts: ["60%", "54.5%", "40%"], ans: 2, hint: "σ<sub>p</sub> = w × 15.", why: "6 ÷ 15 = <b>40%</b>. The expected return would be 5 + 0.4 × 6 = 7.4%." }
      ]
    },

    /* ===================================================== LESSON 2 */
    {
      id: "l2",
      title: "The market portfolio and the capital market line",
      summary: "Homogeneous expectations make everyone's optimal risky portfolio the market portfolio; the CML as a special CAL; lending and borrowing portfolios; passive vs active investing.",
      los: [1],
      sections: [
        {
          title: "Why everyone ends up with the market",
          html: `
<p>Suppose every investor uses the same information, the same forecasts and the same model: <b>homogeneous expectations</b>. Then they all draw the same efficient frontier, the same best CAL and find the same optimal risky portfolio. If everyone wants to hold the same risky portfolio, that portfolio must contain <b>every risky asset in proportion to its market value</b>: it is the <b>market portfolio</b>.</p>
<ul>
<li>In theory the market portfolio includes <b>all risky assets</b>: shares, bonds, property, even human capital. Not all of them are tradable, and not all tradable assets are investable (some markets restrict foreign buyers).</li>
<li>In practice a broad share index (such as a large-cap index) is used as a <b>proxy</b> for the market.</li>
<li>If investors had <b>different</b> expectations (heterogeneous beliefs), they would value assets differently and there would be no single optimal risky portfolio.</li>
</ul>`
        },
        {
          title: "The capital market line",
          html: `
<div class="callout key"><span class="label">CML</span>The CML is the CAL whose risky portfolio is the <b>market portfolio</b> (M):<br>E(R<sub>p</sub>) = r<sub>f</sub> + [(E(R<sub>m</sub>) − r<sub>f</sub>) ÷ σ<sub>m</sub>] × σ<sub>p</sub><br>Intercept r<sub>f</sub>; slope = market price of risk (the market's Sharpe ratio).</div>
<figure class="diagram">
<svg viewBox="0 0 360 220" role="img" aria-label="Capital market line" style="width:100%;max-width:460px;font-size:11px">
  <line x1="40" y1="190" x2="345" y2="190" style="stroke:var(--ink)"/><line x1="40" y1="190" x2="40" y2="12" style="stroke:var(--ink)"/>
  <text x="300" y="208" style="fill:var(--muted)">Risk σ</text><text x="6" y="18" style="fill:var(--muted)">E(R)</text>
  <line x1="40" y1="150" x2="330" y2="40" style="stroke:var(--accent);stroke-width:2.5"/>
  <circle cx="170" cy="101" r="5" style="fill:var(--accent)"/><text x="172" y="120" style="fill:var(--accent)">M (market)</text>
  <text x="70" y="125" style="fill:var(--good)">lending</text><text x="240" y="62" style="fill:var(--bad)">borrowing</text>
  <text x="90" y="55" style="fill:var(--muted)">above the line: unachievable</text>
  <text x="200" y="160" style="fill:var(--muted)">below: inferior</text>
  <text x="44" y="145" style="fill:var(--muted)">r<tspan dy="3" font-size="8">f</tspan></text>
</svg>
<figcaption>Our own sketch of the CML.</figcaption></figure>
<ul>
<li>Points between r<sub>f</sub> and M: <b>lending portfolios</b> (part of the money in the risk-free asset). Their returns are below the market's.</li>
<li>Points beyond M: <b>borrowing (leveraged) portfolios</b>, with a negative weight in the risk-free asset. Returns and risk above the market's.</li>
<li>Points <b>above</b> the CML can't be reached; points below it are <b>inferior</b> (dominated by a point on the line).</li>
</ul>
<p><i>Example:</i> r<sub>f</sub> = 3%, E(R<sub>m</sub>) = 9%, σ<sub>m</sub> = 15%. Slope = 6 ÷ 15 = 0.40. A CML portfolio with σ = 21% expects 3 + 0.40 × 21 = <b>11.4%</b>; it holds 21 ÷ 15 = 140% in the market, funded by borrowing 40%.</p>`
        },
        {
          title: "Passive and active investing",
          html: `
<ul>
<li><b>Passive</b>: hold the market (through an index fund) and choose your point on the CML by lending or borrowing. Cheap, and consistent with the theory if markets price assets correctly.</li>
<li><b>Active</b>: if you believe you have better information or analysis, your own optimal risky portfolio differs from the market. You then need a different expected return and risk forecast from everyone else, and the costs of research and trading.</li>
</ul>`
        }
      ],
      traps: [
        "CML = CAL with the <b>market portfolio</b> as the risky portfolio.",
        "Market portfolio = <b>all risky assets</b> (theory), proxied by a broad index in practice.",
        "Homogeneous expectations → one optimal risky portfolio for everyone (the market).",
        "Left of M: lending; right of M: borrowing; above the CML: unachievable.",
        "CML uses <b>σ</b> (total risk) and only efficient portfolios plot on it."
      ],
      quiz: [
        { q: "The capital market line is the graph of combinations of the risk-free asset and:", opts: ["any risky portfolio", "a leveraged portfolio of the investor's choice", "the market portfolio"], ans: 2, hint: "Special case of the CAL.", why: "The CML uses <b>the market portfolio</b>; a CAL can use any risky portfolio." },
        { q: "In capital market theory, the market portfolio consists of:", opts: ["all investable assets", "all tradable assets", "all risky assets"], ans: 2, hint: "The theoretical definition is the widest.", why: "In theory it is <b>all risky assets</b>. Not everything is tradable, and not everything tradable is investable." },
        { q: "Under capital market theory, the optimal risky portfolio is:", opts: ["the portfolio with the highest expected return", "the portfolio with the lowest variance", "the market portfolio"], ans: 2, hint: "What does everyone hold?", why: "With homogeneous expectations, everyone's optimal risky portfolio is <b>the market portfolio</b>." },
        { q: "A portfolio plots above the CML. It is best described as:", opts: ["inferior", "inefficient", "unachievable"], ans: 2, hint: "The CML is the best possible.", why: "Points above the CML <b>can't be reached</b>; points below it are inferior." },
        { q: "A portfolio on the CML has an expected return greater than the market's. It is a:", opts: ["borrowing portfolio", "lending portfolio", "portfolio that can't exist"], ans: 0, hint: "How do you get more than the market on the line?", why: "Beyond M the investor borrows at r<sub>f</sub>: a <b>borrowing</b> (leveraged) portfolio." },
        { q: "A portfolio on the CML has an expected return below the market's. It is a:", opts: ["borrowing portfolio", "dominated portfolio", "lending portfolio"], ans: 2, hint: "Part of the money is in the risk-free asset.", why: "Between r<sub>f</sub> and M the investor holds some risk-free asset: a <b>lending</b> portfolio." },
        { q: "r<sub>f</sub> = 2%, E(R<sub>m</sub>) = 10%, σ<sub>m</sub> = 16%. The expected return of a CML portfolio with σ = 12% is:", opts: ["8.0%", "9.5%", "7.5%"], ans: 0, hint: "Slope = 8 ÷ 16.", why: "2 + 0.5 × 12 = <b>8.0%</b>. 9.5% uses 10 ÷ 16 as the slope (forgets r<sub>f</sub>); 7.5% is 10 × 12 ÷ 16." },
        { q: "Same CML: r<sub>f</sub> = 2%, E(R<sub>m</sub>) = 10%, σ<sub>m</sub> = 16%. An investor wants an expected return of 14%. The weight in the market portfolio is:", opts: ["140%", "120%", "150%"], ans: 2, hint: "w = (14 − 2) ÷ (10 − 2).", why: "12 ÷ 8 = <b>150%</b>: borrow 50% of wealth. 140% is 14 ÷ 10." },
        { q: "The assumption that lets capital market theory say all investors hold the same risky portfolio is that investors:", opts: ["are price takers", "pay no taxes", "have homogeneous expectations"], ans: 2, hint: "Same forecasts → same frontier.", why: "<b>Homogeneous expectations</b> give everyone the same frontier and the same optimal risky portfolio." },
        { q: "An investor who simply buys a broad index fund and adjusts risk by holding more or less cash is following:", opts: ["an active strategy", "a strategy that ignores risk", "a passive strategy based on the CML"], ans: 2, hint: "Market portfolio + lending/borrowing.", why: "Holding the market and moving along the CML is a <b>passive</b> strategy." }
      ]
    },

    /* ===================================================== LESSON 3 */
    {
      id: "l3",
      title: "Systematic and nonsystematic risk",
      summary: "Splitting total risk into market (systematic) and firm-specific (nonsystematic) risk; why only systematic risk earns a return; total variance = systematic + nonsystematic variance.",
      los: [2],
      sections: [
        {
          title: "Two kinds of risk",
          html: `
<div class="tiles">
  <div class="tile"><h4>Systematic risk</h4><p>Also called market or non-diversifiable risk. Comes from events that hit the <b>whole economy</b>: interest rates, inflation, recessions, exchange rates, war. Holding more shares can't remove it.</p></div>
  <div class="tile c2"><h4>Nonsystematic risk</h4><p>Also called unique, firm-specific or diversifiable risk. Comes from events at <b>one company or industry</b>: a CEO resigns, a factory fire, a lost lawsuit, a failed drug trial. In a diversified portfolio these surprises cancel out.</p></div>
</div>
<div class="callout key"><span class="label">Splitting variance</span>Total variance = systematic variance + nonsystematic variance.<br>Variances add; standard deviations do <b>not</b> (the "total risk" sum is a sum of variances).</div>`
        },
        {
          title: "Why only systematic risk is paid",
          html: `
<p>Imagine a market that paid extra return for nonsystematic risk. Investors could collect that premium and then diversify the risk away for free. Everyone would buy, prices would rise, and the extra return would disappear. So in equilibrium:</p>
<div class="callout key"><span class="label">Rule</span>Only <b>systematic risk is priced</b>. Investors should not expect extra return for risk they could have removed by diversifying.</div>
<div class="callout analogy"><span class="label">Analogy</span>An insurer that writes one house policy faces the risk that this house burns. With a million policies, individual fires average out; what remains is risk that hits everyone at once, such as a huge storm. Customers can't be charged more for the individual-fire risk because a competitor with many policies doesn't bear it.</div>
<p>A well-diversified portfolio has almost no nonsystematic risk, so its total risk ≈ its systematic risk. A single share's total risk can be much larger than its systematic risk.</p>`
        }
      ],
      traps: [
        "Nonsystematic risk is <b>avoided by diversification</b>; systematic is not.",
        "Firm events (CEO resigns, lawsuit) = nonsystematic; economy-wide events (rates, currency) = systematic.",
        "<b>Only systematic risk is priced</b> (earns a premium).",
        "Systematic + nonsystematic <b>variance</b> = total variance (not total σ, not beta).",
        "Two assets with the same total risk can have very different expected returns if their systematic risk differs."
      ],
      quiz: [
        { q: "Forming a well-diversified portfolio most likely removes:", opts: ["total risk", "systematic risk", "nonsystematic risk"], ans: 2, hint: "Which risk is firm-specific?", why: "Diversification removes <b>nonsystematic</b> (firm-specific) risk; systematic risk remains." },
        { q: "Which event is most likely a source of nonsystematic risk for a company?", opts: ["A rise in central bank interest rates", "The surprise resignation of its chief executive", "A strengthening of the domestic currency"], ans: 1, hint: "Which affects one firm?", why: "A <b>CEO's resignation</b> affects that firm; rates and currency affect the whole market." },
        { q: "In capital market theory, which risk is priced?", opts: ["All risk", "Nonsystematic risk only", "Systematic risk only"], ans: 2, hint: "Risk you can't diversify away.", why: "Only <b>systematic</b> risk earns a premium." },
        { q: "The sum of an asset's systematic variance and its nonsystematic variance equals its:", opts: ["beta", "standard deviation", "total variance"], ans: 2, hint: "Variances add.", why: "They add to <b>total variance</b>. Standard deviations do not add." },
        { q: "Why should investors not expect to be paid for bearing nonsystematic risk?", opts: ["Because it can be removed at almost no cost by diversifying", "Because it is too small to matter", "Because regulators forbid it"], ans: 0, hint: "Free removal.", why: "Anyone could eliminate it by <b>diversifying</b>, so competition removes any premium for it." },
        { q: "A share has total variance of 0.0900 and systematic variance of 0.0400. Its nonsystematic standard deviation is closest to:", opts: ["5.0%", "22.4%", "10.0%"], ans: 1, hint: "Subtract variances, then take the root.", why: "0.09 − 0.04 = 0.05; √0.05 = <b>22.4%</b>. 10.0% subtracts σs (30 − 20); 5.0% reads the variance as a percentage." },
        { q: "Two shares have the same standard deviation of returns. Share X has much more systematic risk than share Y. According to capital market theory:", opts: ["X should have the higher expected return", "both should have the same expected return", "Y should have the higher expected return"], ans: 0, hint: "What is priced?", why: "Only systematic risk is rewarded, so <b>X</b> should earn more." },
        { q: "For a well-diversified portfolio, total risk is approximately equal to:", opts: ["nonsystematic risk", "systematic risk", "zero"], ans: 1, hint: "What's left after diversifying?", why: "Diversification removes almost all nonsystematic risk, so total ≈ <b>systematic</b> risk." },
        { q: "Which is most likely a systematic risk factor?", opts: ["A change in expected inflation", "A product recall at one carmaker", "A failed clinical trial at one drug company"], ans: 0, hint: "Economy-wide.", why: "<b>Inflation</b> affects all companies; the other two are firm-specific." }
      ]
    },

    /* ===================================================== LESSON 4 */
    {
      id: "l4",
      title: "Return-generating models and the market model",
      summary: "Multifactor models (macroeconomic, fundamental, statistical factors); the single-index market model R = α + βR<sub>m</sub> + e; what the intercept, slope and error mean.",
      los: [3],
      sections: [
        {
          title: "What a return-generating model does",
          html: `
<p>A <b>return-generating model</b> is a formula that explains or forecasts an asset's return using one or more <b>factors</b>. Its main use is to <b>estimate expected returns</b> of securities.</p>
<div class="callout key"><span class="label">General form</span>E(R<sub>i</sub>) − r<sub>f</sub> = β<sub>i1</sub>E(F<sub>1</sub>) + β<sub>i2</sub>E(F<sub>2</sub>) + … (each β is the asset's sensitivity to that factor)</div>
<div class="table-wrap"><table>
<tr><th>Type of factor</th><th>Examples</th></tr>
<tr><td><b>Macroeconomic</b></td><td>GDP growth, inflation, interest rates, consumer confidence</td></tr>
<tr><td><b>Fundamental</b></td><td>Earnings, earnings growth, company size, book-to-market value, research spending</td></tr>
<tr><td><b>Statistical</b></td><td>Factors found by analysing past data, which may have no economic story</td></tr>
</table></div>
<p>Well-known examples: a three-factor model using the market, company <b>size</b> and <b>book-to-market (value)</b>; and a four-factor version that adds <b>momentum</b> (recent winners keep winning for a while).</p>`
        },
        {
          title: "The market model: one factor",
          html: `
<p>The simplest model uses only the market:</p>
<div class="callout key"><span class="label">Market model</span>R<sub>i</sub> = α<sub>i</sub> + β<sub>i</sub>R<sub>m</sub> + e<sub>i</sub></div>
<div class="table-wrap"><table>
<tr><th>Part</th><th>Name</th><th>Meaning</th></tr>
<tr><td>α<sub>i</sub></td><td><b>Intercept (alpha)</b></td><td>The return expected when the market return is zero</td></tr>
<tr><td>β<sub>i</sub></td><td><b>Slope (beta)</b></td><td>Sensitivity to the market: the asset's <b>systematic</b> risk</td></tr>
<tr><td>e<sub>i</sub></td><td><b>Error term</b></td><td>Firm-specific surprises: <b>nonsystematic</b> risk, averaging zero</td></tr>
</table></div>
<p>α and β are estimated by regressing the asset's past returns on the market's past returns. The estimates are then used to forecast the asset's return for a given market forecast.</p>
<p><i>Example:</i> a share has α = 1% and β = 1.3. If the market is expected to return 8%, the model forecasts 1 + 1.3 × 8 = <b>11.4%</b>.</p>
<p>Because the error is firm-specific, the market model splits variance neatly: σ<sub>i</sub><sup>2</sup> = β<sub>i</sub><sup>2</sup>σ<sub>m</sub><sup>2</sup> + σ<sub>e</sub><sup>2</sup> (systematic + nonsystematic). It also makes covariances easy: Cov(i, j) = β<sub>i</sub>β<sub>j</sub>σ<sub>m</sub><sup>2</sup>.</p>`
        }
      ],
      traps: [
        "Market model: <b>intercept = alpha</b>, <b>slope = beta</b> (systematic risk), error = nonsystematic.",
        "Return-generating models are used to <b>estimate expected returns</b>, not portfolio weights or the CML.",
        "Size, value and momentum are fundamental-style factors in multifactor models.",
        "σ<sub>i</sub><sup>2</sup> = β<sup>2</sup>σ<sub>m</sub><sup>2</sup> + σ<sub>e</sub><sup>2</sup>: square the beta.",
        "Cov(i, j) = β<sub>i</sub>β<sub>j</sub>σ<sub>m</sub><sup>2</sup> under the market model."
      ],
      quiz: [
        { q: "In the market model R<sub>i</sub> = α<sub>i</sub> + β<sub>i</sub>R<sub>m</sub> + e<sub>i</sub>, the intercept is the asset's estimated:", opts: ["beta", "alpha", "variance"], ans: 1, hint: "The constant term.", why: "The intercept is <b>alpha</b>; the slope is beta." },
        { q: "In the market model, the slope coefficient estimates the asset's:", opts: ["total risk", "systematic risk", "nonsystematic risk"], ans: 1, hint: "Sensitivity to the market.", why: "β measures sensitivity to the market: <b>systematic risk</b>. The error term carries nonsystematic risk." },
        { q: "Return-generating models are used mainly to estimate:", opts: ["the weights of securities in a portfolio", "the expected return of a security", "the slope of the capital market line"], ans: 1, hint: "What does the model output?", why: "They produce estimates of a security's <b>expected return</b> from its factor sensitivities." },
        { q: "A share has α = 0.5% and β = 1.4 in the market model. If the market return is 10%, the model predicts a return of:", opts: ["14.5%", "14.0%", "15.4%"], ans: 0, hint: "0.5 + 1.4 × 10.", why: "0.5 + 14 = <b>14.5%</b>. 14.0% leaves out alpha." },
        { q: "Under the market model, a share has β = 0.8, σ<sub>m</sub> = 20% and firm-specific (error) standard deviation of 12%. Its total standard deviation is:", opts: ["20.0%", "28.0%", "16.0%"], ans: 0, hint: "0.64 × 0.04 + 0.0144.", why: "0.0256 + 0.0144 = 0.04; √ = <b>20.0%</b>. 28% adds the two σs (16 + 12); 16% is only the systematic part." },
        { q: "Two shares have betas of 1.2 and 0.5, and the market's standard deviation is 15%. Under the market model, their covariance is:", opts: ["0.0900", "0.0135", "0.0225"], ans: 1, hint: "β<sub>i</sub>β<sub>j</sub>σ<sub>m</sub><sup>2</sup>.", why: "1.2 × 0.5 × 0.0225 = <b>0.0135</b>. 0.0225 is just the market variance." },
        { q: "Which is a macroeconomic factor in a multifactor model?", opts: ["Unexpected change in inflation", "Book-to-market ratio", "Company size"], ans: 0, hint: "Economy-wide variable.", why: "<b>Inflation</b> is macroeconomic; book-to-market and size are fundamental factors." },
        { q: "A four-factor model adds which factor to market, size and value?", opts: ["Liquidity of the currency", "Momentum", "Dividend yield of the risk-free asset"], ans: 1, hint: "Recent winners keep winning.", why: "The fourth factor is <b>momentum</b>." },
        { q: "In the market model, the error term e<sub>i</sub> represents:", opts: ["firm-specific surprises with an average of zero", "the market's influence on the share", "the risk-free rate"], ans: 0, hint: "What the market doesn't explain.", why: "The error is the <b>firm-specific</b> part of the return, averaging zero." }
      ]
    },

    /* ===================================================== LESSON 5 */
    {
      id: "l5",
      title: "Beta: measuring systematic risk",
      summary: "β = Cov(i, m) ÷ σ<sub>m</sub><sup>2</sup> = ρσ<sub>i</sub> ÷ σ<sub>m</sub>; the market's beta is 1; negative betas; the security characteristic line; splitting variance with beta.",
      los: [4],
      sections: [
        {
          title: "Two ways to calculate beta",
          html: `
<div class="callout key"><span class="label">Beta</span>β<sub>i</sub> = Cov(R<sub>i</sub>, R<sub>m</sub>) ÷ σ<sub>m</sub><sup>2</sup> = ρ<sub>i,m</sub> × σ<sub>i</sub> ÷ σ<sub>m</sub></div>
<p><i>Example 1:</i> covariance with the market 0.024, market σ = 20%. β = 0.024 ÷ 0.04 = <b>0.60</b>.</p>
<p><i>Example 2:</i> Deccan Steel has σ = 30% and correlation 0.6 with the market, whose σ = 20%. β = 0.6 × 30 ÷ 20 = <b>0.90</b>.</p>
<p>Notice: Deccan Steel's <b>total</b> risk (30%) is higher than the market's, yet its <b>beta</b> is below 1, because much of its volatility is firm-specific (low correlation). Beta measures how much the share moves <b>with the market</b>, not how volatile it is overall.</p>`
        },
        {
          title: "Reading beta",
          html: `
<div class="table-wrap"><table>
<tr><th>Beta</th><th>Meaning</th><th>Typical example</th></tr>
<tr><td class="num">β &gt; 1</td><td>Amplifies market moves</td><td>Airlines, luxury goods</td></tr>
<tr><td class="num">β = 1</td><td>Moves one-for-one with the market</td><td>The market portfolio itself</td></tr>
<tr><td class="num">0 &lt; β &lt; 1</td><td>Moves with the market, less strongly</td><td>Utilities, food</td></tr>
<tr><td class="num">β = 0</td><td>No systematic risk</td><td>The risk-free asset</td></tr>
<tr><td class="num">β &lt; 0</td><td>Tends to rise when the market falls</td><td>Insurance-like assets, some gold or put positions</td></tr>
</table></div>
<ul>
<li>The <b>market's beta is 1</b> (its covariance with itself is its variance). The value-weighted average beta of all assets is therefore <b>1</b>.</li>
<li>Portfolio beta is the weighted average of the assets' betas: β<sub>p</sub> = Σw<sub>i</sub>β<sub>i</sub>.</li>
</ul>
<h3>The security characteristic line (SCL)</h3>
<p>Plot an asset's <b>excess returns</b> (R<sub>i</sub> − r<sub>f</sub>) against the market's excess returns (R<sub>m</sub> − r<sub>f</sub>) and fit a line. The <b>slope is beta</b>; the <b>intercept is Jensen's alpha</b> (lesson 7).</p>
<h3>Splitting risk with beta</h3>
<p>Total variance = β<sup>2</sup>σ<sub>m</sub><sup>2</sup> (systematic) + σ<sub>e</sub><sup>2</sup> (nonsystematic). A share with β = 1.2, σ = 30%, market σ = 18%: systematic variance = 1.44 × 0.0324 = 0.0467, total = 0.09, so nonsystematic = 0.0433. About 52% of its variance is systematic.</p>`
        }
      ],
      traps: [
        "β = Cov ÷ σ<sub>m</sub><sup>2</sup> (variance, not σ) = ρσ<sub>i</sub> ÷ σ<sub>m</sub>.",
        "Highest <b>total</b> risk (σ) ≠ highest <b>beta</b>; correlation matters.",
        "Market beta = 1; the average beta of all assets = 1.",
        "SCL: slope = beta, intercept = alpha (excess returns on both axes).",
        "Portfolio beta = weighted average of betas (unlike σ)."
      ],
      quiz: [
        { q: "Data: Security 1 σ = 28%, correlation with market 0.5; Security 2 σ = 22%, correlation 0.75; Security 3 σ = 18%, correlation 0.85. Market σ = 16%. Which has the highest beta?", opts: ["Security 1", "Security 2", "Security 3"], ans: 1, hint: "ρσ<sub>i</sub> ÷ σ<sub>m</sub> for each.", why: "β<sub>1</sub> = 0.5 × 28 ÷ 16 = 0.875; β<sub>2</sub> = 0.75 × 22 ÷ 16 = 1.031; β<sub>3</sub> = 0.85 × 18 ÷ 16 = 0.956. <b>Security 2</b>." },
        { q: "Same data: Security 1 σ = 28%, ρ = 0.5; Security 2 σ = 22%, ρ = 0.75; Security 3 σ = 18%, ρ = 0.85; market σ = 16%. Which security has the highest total risk?", opts: ["Security 2", "Security 1", "Security 3"], ans: 1, hint: "Total risk = σ.", why: "<b>Security 1</b> has the highest σ (28%), even though its beta is the lowest." },
        { q: "Same data: Security 1 (β = 0.875), Security 2 (β = 1.031), Security 3 (β = 0.956). Which has the least market risk?", opts: ["Security 1", "Security 2", "Security 3"], ans: 0, hint: "Market risk = beta.", why: "Lowest beta = least market (systematic) risk: <b>Security 1</b>." },
        { q: "A share's covariance with the market is 0.0180 and the market's standard deviation is 15%. Its beta is:", opts: ["0.80", "0.12", "1.25"], ans: 0, hint: "0.018 ÷ 0.0225.", why: "0.018 ÷ 0.0225 = <b>0.80</b>. 0.12 divides by σ<sub>m</sub> instead of σ<sub>m</sub><sup>2</sup>; 1.25 inverts the ratio." },
        { q: "The average beta of all assets in the market, weighted by market value, is:", opts: ["equal to 1.0", "less than 1.0", "greater than 1.0"], ans: 0, hint: "The market's own beta.", why: "By definition the market has β = <b>1.0</b>." },
        { q: "The slope of the security characteristic line is the asset's:", opts: ["excess return", "beta", "alpha"], ans: 1, hint: "Excess return of asset vs excess return of market.", why: "The SCL's slope is <b>beta</b>; its intercept is alpha." },
        { q: "A portfolio is 60% in a share with β = 1.5 and 40% in a share with β = 0.5. The portfolio beta is:", opts: ["1.10", "1.00", "0.90"], ans: 0, hint: "Weighted average.", why: "0.6 × 1.5 + 0.4 × 0.5 = 0.9 + 0.2 = <b>1.10</b>." },
        { q: "A share has β = 0.9, total σ = 25% and the market's σ = 20%. Its nonsystematic variance is closest to:", opts: ["0.0225", "0.0301", "0.0324"], ans: 1, hint: "0.0625 − 0.81 × 0.04.", why: "Systematic variance = 0.81 × 0.04 = 0.0324; 0.0625 − 0.0324 = <b>0.0301</b>. 0.0324 is the systematic part; 0.0225 forgets to square beta into the calculation (0.0625 − 0.04)." },
        { q: "An asset tends to rise in value when the market falls. Its beta is most likely:", opts: ["above 1", "between 0 and 1", "negative"], ans: 2, hint: "Opposite moves.", why: "Moving against the market means a <b>negative</b> beta." },
        { q: "Which statement about beta is most accurate?", opts: ["A share with a higher standard deviation always has a higher beta", "Beta measures how sensitive a share's return is to market moves", "Beta measures firm-specific risk"], ans: 1, hint: "Sensitivity, not volatility.", why: "Beta measures <b>sensitivity to the market</b> (systematic risk). A volatile share can have a low beta if its correlation is low." }
      ]
    },

    /* ===================================================== LESSON 6 */
    {
      id: "l6",
      title: "The CAPM and the security market line",
      summary: "CAPM: E(R<sub>i</sub>) = r<sub>f</sub> + β<sub>i</sub>[E(R<sub>m</sub>) − r<sub>f</sub>]; its assumptions; the SML vs the CML; negative-beta assets; solving for missing inputs.",
      los: [5, 6],
      sections: [
        {
          title: "The formula",
          html: `
<div class="callout key"><span class="label">Capital asset pricing model</span>E(R<sub>i</sub>) = r<sub>f</sub> + β<sub>i</sub> × [E(R<sub>m</sub>) − r<sub>f</sub>]<br>[E(R<sub>m</sub>) − r<sub>f</sub>] is the <b>market risk premium</b>: the market's expected return in excess of the risk-free rate.</div>
<p>In words: the expected return of any asset = the reward for waiting (r<sub>f</sub>) + the reward for its <b>systematic risk</b> (beta × market risk premium). Beta is the main driver of an individual asset's expected return.</p>
<p><i>Example:</i> r<sub>f</sub> = 4%, market risk premium = 6%.</p>
<div class="table-wrap"><table>
<tr><th>Share</th><th class="num">Beta</th><th>Calculation</th><th class="num">E(R)</th></tr>
<tr><td>Konkan Power</td><td class="num">0.6</td><td>4 + 0.6 × 6</td><td class="num">7.6%</td></tr>
<tr><td>Market index</td><td class="num">1.0</td><td>4 + 1.0 × 6</td><td class="num">10.0%</td></tr>
<tr><td>Sahyadri Airlines</td><td class="num">1.5</td><td>4 + 1.5 × 6</td><td class="num">13.0%</td></tr>
<tr><td>A gold miner</td><td class="num">−0.3</td><td>4 − 0.3 × 6</td><td class="num">2.2%</td></tr>
</table></div>
<p>The negative-beta asset is expected to earn <b>less than the risk-free rate</b>. That is rational: it rises when everything else falls, so it works like insurance, and investors pay for insurance.</p>
<p><b>Working backwards:</b> a share with β = 1.25 is expected to return 13% when r<sub>f</sub> = 3%. Market risk premium = (13 − 3) ÷ 1.25 = 8%, so E(R<sub>m</sub>) = 3 + 8 = <b>11%</b>.</p>`
        },
        {
          title: "Assumptions behind the CAPM",
          html: `
<div class="table-wrap"><table>
<tr><th>Assumption</th><th>What it means</th></tr>
<tr><td>Investors are <b>risk averse</b>, utility-maximising and rational</td><td>They need a reward for risk and choose by mean and variance</td></tr>
<tr><td><b>Frictionless markets</b></td><td>No taxes, no trading costs, unlimited borrowing and lending at r<sub>f</sub>, short selling allowed</td></tr>
<tr><td><b>One-period horizon</b></td><td>Everyone plans for the same single period</td></tr>
<tr><td><b>Homogeneous expectations</b></td><td>Everyone has the same forecasts → the same optimal risky portfolio (the market)</td></tr>
<tr><td>All assets are <b>infinitely divisible</b> and <b>tradable</b></td><td>Any fraction of any asset can be held, including human capital</td></tr>
<tr><td>Investors are <b>price takers</b></td><td>No one is big enough to move prices</td></tr>
</table></div>`
        },
        {
          title: "The security market line vs the capital market line",
          html: `
<p>Draw the CAPM with <b>beta</b> on the x-axis and expected return on the y-axis: that straight line is the <b>security market line (SML)</b>. Intercept r<sub>f</sub>, slope = market risk premium, and the market sits at β = 1.</p>
<div class="table-wrap"><table>
<tr><th></th><th>CML</th><th>SML</th></tr>
<tr><td>x-axis</td><td>Total risk σ</td><td>Systematic risk β</td></tr>
<tr><td>Which assets plot on it</td><td>Only efficient portfolios (r<sub>f</sub> + market)</td><td><b>Every correctly priced asset or portfolio</b>, efficient or not</td></tr>
<tr><td>Slope</td><td>(E(R<sub>m</sub>) − r<sub>f</sub>) ÷ σ<sub>m</sub></td><td>E(R<sub>m</sub>) − r<sub>f</sub></td></tr>
</table></div>
<p>A single share usually plots <b>below</b> the CML (it carries unpriced nonsystematic risk) but <b>on</b> the SML if it is fairly priced.</p>`
        }
      ],
      traps: [
        "CAPM uses the <b>market risk premium</b> [E(R<sub>m</sub>) − r<sub>f</sub>], not E(R<sub>m</sub>), times beta.",
        "If you're given E(R<sub>m</sub>), subtract r<sub>f</sub> first; if given the premium, don't subtract again.",
        "Negative beta → expected return <b>below r<sub>f</sub></b>.",
        "SML: beta on the x-axis, all fairly priced assets plot on it. CML: σ on the x-axis, only efficient portfolios.",
        "Highest beta = highest expected return and most sensitive to changes in the market return."
      ],
      quiz: [
        { q: "r<sub>f</sub> = 3%, market risk premium = 7%. The CAPM expected return of a share with β = 1.2 is:", opts: ["11.4%", "8.4%", "12.0%"], ans: 0, hint: "3 + 1.2 × 7.", why: "3 + 8.4 = <b>11.4%</b>. 8.4% forgets r<sub>f</sub>; 12.0% uses 1.2 × (7 + 3)." },
        { q: "r<sub>f</sub> = 3%, E(R<sub>m</sub>) = 10%. The CAPM expected return of a share with β = 0.8 is:", opts: ["8.6%", "8.0%", "11.0%"], ans: 0, hint: "Premium = 10 − 3.", why: "3 + 0.8 × 7 = <b>8.6%</b>. 8.0% is 0.8 × 10; 11.0% adds r<sub>f</sub> to 0.8 × 10." },
        { q: "A share with β = 1.5 has a CAPM expected return of 14% when r<sub>f</sub> = 2%. The expected market return is:", opts: ["8.0%", "10.0%", "11.3%"], ans: 1, hint: "Premium = (14 − 2) ÷ 1.5.", why: "Premium = 8%, so E(R<sub>m</sub>) = 2 + 8 = <b>10.0%</b>. 8.0% is the premium only." },
        { q: "Which beta gives an expected return below the risk-free rate under the CAPM (with a positive market risk premium)?", opts: ["−0.4", "0.0", "0.4"], ans: 0, hint: "β × premium &lt; 0.", why: "Only a <b>negative beta</b> makes the risk term negative. β = 0 earns exactly r<sub>f</sub>." },
        { q: "The graph of the CAPM is the:", opts: ["security market line", "capital market line", "capital allocation line"], ans: 0, hint: "Beta on the x-axis.", why: "Expected return against beta is the <b>security market line</b>." },
        { q: "Correctly priced individual securities plot on the:", opts: ["capital market line", "security market line", "efficient frontier"], ans: 1, hint: "Which line uses priced (systematic) risk?", why: "All fairly priced assets plot on the <b>SML</b>. Single shares usually lie below the CML because of unpriced firm-specific risk." },
        { q: "Securities: X (σ 30%, β 1.1), Y (σ 18%, β 1.4), Z (σ 24%, β 0.9). With a positive market risk premium, which has the highest CAPM expected return?", opts: ["X", "Y", "Z"], ans: 1, hint: "Only beta counts.", why: "<b>Y</b> has the highest beta. Total risk (σ) does not enter the CAPM." },
        { q: "Same securities: X (β 1.1), Y (β 1.4), Z (β 0.9). A fall in the expected market return would change whose expected return the most?", opts: ["X", "Z", "Y"], ans: 2, hint: "Sensitivity = beta.", why: "The change is β × Δ(premium): biggest for <b>Y</b>." },
        { q: "In the CAPM, the market risk premium is:", opts: ["less than the expected excess return of the market", "equal to the expected excess return of the market", "the expected market return including the risk-free rate"], ans: 1, hint: "E(R<sub>m</sub>) − r<sub>f</sub>.", why: "The premium <b>is</b> the expected excess return of the market over r<sub>f</sub>." },
        { q: "Which is an assumption of the CAPM?", opts: ["Investors have different forecasts of returns", "Markets have no taxes or trading costs", "Investors plan over many different horizons"], ans: 1, hint: "Frictionless markets.", why: "The CAPM assumes <b>frictionless markets</b>, homogeneous expectations and a single common horizon." }
      ]
    },

    /* ===================================================== LESSON 7 */
    {
      id: "l7",
      title: "Judging performance: Sharpe, Treynor, M² and Jensen's alpha",
      summary: "Four risk-adjusted performance measures: which risk each uses (total vs systematic), how to calculate and interpret each, and when to use which.",
      los: [8],
      sections: [
        {
          title: "The four measures",
          html: `
<div class="table-wrap"><table>
<tr><th>Measure</th><th>Formula</th><th>Risk used</th><th>Read it as</th></tr>
<tr><td><b>Sharpe ratio</b></td><td>(R<sub>p</sub> − r<sub>f</sub>) ÷ σ<sub>p</sub></td><td>Total (σ)</td><td>Excess return per unit of total risk; the slope of the portfolio's CAL</td></tr>
<tr><td><b>M²</b></td><td>(R<sub>p</sub> − r<sub>f</sub>) × σ<sub>m</sub> ÷ σ<sub>p</sub> + r<sub>f</sub></td><td>Total (σ)</td><td>The return the portfolio would have earned if levered or de-levered to the <b>market's</b> σ; compare with R<sub>m</sub> (M² − R<sub>m</sub> = "M² alpha")</td></tr>
<tr><td><b>Treynor ratio</b></td><td>(R<sub>p</sub> − r<sub>f</sub>) ÷ β<sub>p</sub></td><td>Systematic (β)</td><td>Excess return per unit of beta</td></tr>
<tr><td><b>Jensen's alpha</b></td><td>R<sub>p</sub> − [r<sub>f</sub> + β<sub>p</sub>(R<sub>m</sub> − r<sub>f</sub>)]</td><td>Systematic (β)</td><td>Return above (or below) what the CAPM required; positive = outperformed</td></tr>
</table></div>
<ul>
<li>Sharpe and M² always <b>rank portfolios the same way</b>: M² is just the Sharpe ratio rescaled into a percentage return (M² = SR × σ<sub>m</sub> + r<sub>f</sub>).</li>
<li>Sharpe and Treynor are ratios: a single number like 0.45 means little on its own; you compare it with the market's or other managers'. <b>Jensen's alpha</b> tells you the answer by its <b>sign</b> alone.</li>
<li>Jensen's alpha is the <b>intercept</b> of the security characteristic line (excess returns of the portfolio on excess returns of the market).</li>
</ul>`
        },
        {
          title: "Worked example: three funds",
          html: `
<p>r<sub>f</sub> = 3%; market return 10%, market σ = 16% (market Sharpe = 7 ÷ 16 = 0.4375).</p>
<div class="table-wrap"><table>
<tr><th>Fund</th><th class="num">Return</th><th class="num">σ</th><th class="num">β</th><th class="num">Sharpe</th><th class="num">M²</th><th class="num">Treynor</th><th class="num">Jensen's α</th></tr>
<tr><td>Ashoka</td><td class="num">13%</td><td class="num">20%</td><td class="num">1.2</td><td class="num">0.500</td><td class="num">11.00%</td><td class="num">8.33%</td><td class="num">+1.6%</td></tr>
<tr><td>Banyan</td><td class="num">11%</td><td class="num">12%</td><td class="num">0.9</td><td class="num">0.667</td><td class="num">13.67%</td><td class="num">8.89%</td><td class="num">+1.7%</td></tr>
<tr><td>Cedar</td><td class="num">15%</td><td class="num">28%</td><td class="num">1.5</td><td class="num">0.429</td><td class="num">9.86%</td><td class="num">8.00%</td><td class="num">+1.5%</td></tr>
</table></div>
<p>Check Cedar: Sharpe = 12 ÷ 28 = 0.429; M² = 0.429 × 16 + 3 = 9.86% (below the market's 10%, so it underperformed on a total-risk basis); Treynor = 12 ÷ 1.5 = 8.0% (above the market's 7.0%); alpha = 15 − (3 + 1.5 × 7) = +1.5%.</p>
<p>Cedar beats the market on beta-based measures but not on total-risk measures: much of its risk is <b>firm-specific</b>. That shows why the right measure depends on the investor.</p>`
        },
        {
          title: "Which measure when?",
          html: `
<div class="tiles">
  <div class="tile"><h4>Total risk: Sharpe, M²</h4><p>Use when the portfolio is the investor's <b>whole wealth</b> or the investor is <b>not fully diversified</b>: firm-specific risk really hurts them.</p></div>
  <div class="tile c2"><h4>Systematic risk: Treynor, Jensen's alpha</h4><p>Use when the portfolio is one part of a <b>well-diversified</b> whole: firm-specific risk will be diversified away elsewhere. These two are consistent with the <b>CAPM</b>.</p></div>
</div>`
        }
      ],
      traps: [
        "Sharpe and M² use <b>σ</b>; Treynor and Jensen's alpha use <b>β</b>.",
        "Not fully diversified → use <b>Sharpe or M²</b>.",
        "Jensen's alpha needs no comparison: <b>positive = outperformed</b>.",
        "M² = SR × σ<sub>m</sub> + r<sub>f</sub>; compare with R<sub>m</sub>. Sharpe and M² give identical rankings.",
        "Jensen's alpha = SCL intercept; beta = SCL slope."
      ],
      quiz: [
        { q: "r<sub>f</sub> = 2.5%. Manager 1: return 12.0%, σ 9.5%. Manager 2: return 8.5%, σ 5.0%. Manager 3: return 14.0%, σ 12.5%. Which manager has the best Sharpe ratio?", opts: ["Manager 1", "Manager 2", "Manager 3"], ans: 1, hint: "(R − 2.5) ÷ σ.", why: "M1: 9.5 ÷ 9.5 = 1.00; M2: 6.0 ÷ 5.0 = <b>1.20</b>; M3: 11.5 ÷ 12.5 = 0.92. Manager 2." },
        { q: "Which performance measure is consistent with the CAPM?", opts: ["M²", "Sharpe ratio", "Jensen's alpha"], ans: 2, hint: "Uses beta and the SML.", why: "<b>Jensen's alpha</b> measures return relative to the CAPM's required return. Sharpe and M² use total risk." },
        { q: "Which measure can be interpreted on its own, without comparing it with another value?", opts: ["Sharpe ratio", "Treynor ratio", "Jensen's alpha"], ans: 2, hint: "Its sign tells the story.", why: "A positive <b>Jensen's alpha</b> means outperformance; the ratios must be compared with a benchmark's ratio." },
        { q: "Which measure is most appropriate for an investor whose portfolio is not fully diversified?", opts: ["Treynor ratio", "M²", "Jensen's alpha"], ans: 1, hint: "Firm-specific risk matters to them.", why: "<b>M²</b> (like Sharpe) uses total risk. Treynor and alpha ignore firm-specific risk." },
        { q: "r<sub>f</sub> = 4%; a portfolio returned 13% with σ = 18%; the market's σ is 15% and its return 11%. The portfolio's M² is:", opts: ["11.5%", "14.8%", "7.5%"], ans: 0, hint: "(9 ÷ 18) × 15 + 4.", why: "0.5 × 15 + 4 = <b>11.5%</b>: 0.5 percentage points above the market (M² alpha = +0.5%). 14.8% scales by σ<sub>p</sub> ÷ σ<sub>m</sub> instead of σ<sub>m</sub> ÷ σ<sub>p</sub>; 7.5% forgets to add back r<sub>f</sub>." },
        { q: "r<sub>f</sub> = 4%; market return 11%. A portfolio with β = 1.3 returned 13%. Its Jensen's alpha is:", opts: ["−0.1%", "+2.0%", "+9.0%"], ans: 0, hint: "13 − (4 + 1.3 × 7).", why: "Required = 4 + 9.1 = 13.1%; alpha = 13 − 13.1 = <b>−0.1%</b>. +2.0% just compares with the market return; +9.0% is the excess return over r<sub>f</sub>, with no risk adjustment." },
        { q: "Same portfolio: r<sub>f</sub> = 4%, return 13%, β = 1.3. Its Treynor ratio is:", opts: ["6.9%", "10.0%", "9.0%"], ans: 0, hint: "(13 − 4) ÷ 1.3.", why: "9 ÷ 1.3 = <b>6.9%</b>. 10.0% divides the total return (13 ÷ 1.3); 9.0% is the excess return before dividing by beta." },
        { q: "The intercept of a regression of a manager's portfolio excess returns on the market's excess returns is the portfolio's:", opts: ["Jensen's alpha", "beta", "Treynor ratio"], ans: 0, hint: "SCL intercept.", why: "Intercept = <b>Jensen's alpha</b>; slope = beta." },
        { q: "A fund has a higher Treynor ratio than the market but a lower Sharpe ratio. The most likely explanation is that the fund:", opts: ["has a negative beta", "has a large amount of firm-specific risk", "holds the market portfolio"], ans: 1, hint: "Beta-based looks good, σ-based looks bad.", why: "Beta-based measures ignore firm-specific risk; the fund's total σ is inflated by <b>unsystematic risk</b>." },
        { q: "Why do the Sharpe ratio and M² always give the same ranking of portfolios?", opts: ["M² is the Sharpe ratio multiplied by the market's σ plus r<sub>f</sub>, which are the same for all portfolios", "Both use beta", "M² ignores risk"], ans: 0, hint: "Look at the formula.", why: "M² = SR × σ<sub>m</sub> + r<sub>f</sub>; σ<sub>m</sub> and r<sub>f</sub> are constants, so <b>only the Sharpe ratio drives the ranking</b>." }
      ]
    },

    /* ===================================================== LESSON 8 */
    {
      id: "l8",
      title: "Using the CAPM: projects, security selection and portfolio building",
      summary: "Required return for capital budgeting; over- and undervalued securities on the SML; weighting by alpha and nonsystematic risk (information ratio); CAPM limitations and multifactor alternatives.",
      los: [7],
      sections: [
        {
          title: "Capital budgeting: the project's hurdle rate",
          html: `
<p>A company should use the CAPM required return that matches the <b>project's own beta</b>, not the company's. <i>Example:</i> Tapti Foods (β = 0.8) plans a cinema chain whose comparable listed companies have β = 1.4. With r<sub>f</sub> = 4% and a market risk premium of 6%, the project's required return is 4 + 1.4 × 6 = <b>12.4%</b> (not 8.8%). Accept the project if its NPV at 12.4% is positive.</p>`
        },
        {
          title: "Security selection: above or below the SML?",
          html: `
<p>Compare <b>your</b> forecast of a share's return with the CAPM's required return:</p>
<div class="tiles">
  <div class="tile"><h4>Forecast &gt; required (plots above the SML)</h4><p>Positive alpha: the price is too <b>low</b> for its risk → <b>undervalued</b> → buy or overweight.</p></div>
  <div class="tile c3"><h4>Forecast &lt; required (plots below the SML)</h4><p>Negative alpha: price too <b>high</b> → <b>overvalued</b> → sell, underweight or short.</p></div>
</div>
<p><i>Example:</i> r<sub>f</sub> = 3%, E(R<sub>m</sub>) = 9%. Godavari Pharma: β = 1.2, analyst forecast 12%. Required = 3 + 1.2 × 6 = 10.2%. Forecast alpha = +1.8%: undervalued.</p>`
        },
        {
          title: "Building a portfolio around the market",
          html: `
<p>An investor who holds the market can add a few securities with positive alpha. How much of each?</p>
<ul>
<li>More weight for a <b>higher alpha</b>.</li>
<li>Less weight for more <b>nonsystematic risk</b> (σ<sub>e</sub><sup>2</sup>), because that risk isn't diversified away in a concentrated tilt.</li>
<li>Weights proportional to α<sub>i</sub> ÷ σ<sub>e,i</sub><sup>2</sup>. The <b>information ratio</b> α<sub>i</sub> ÷ σ<sub>e,i</sub> measures abnormal return per unit of risk the security adds: the larger it is, the more valuable the security.</li>
</ul>
<p><i>Example:</i> share P has α = 2% and σ<sub>e</sub> = 20%; share Q has α = 3% and σ<sub>e</sub> = 40%. Information ratios: P = 0.10, Q = 0.075. P adds more abnormal return per unit of added risk, even though Q's alpha is higher.</p>`
        },
        {
          title: "Limits of the CAPM and what goes beyond it",
          html: `
<ul>
<li><b>Theoretical limits:</b> the true market portfolio (all risky assets, including human capital) can't be observed; it assumes a single period.</li>
<li><b>Practical limits:</b> any index is only a proxy; betas estimated from the past change over time and depend on the period and frequency used; the CAPM is a poor predictor of returns in tests; investors don't really share the same expectations.</li>
<li><b>Extensions:</b> the <b>arbitrage pricing theory (APT)</b> allows several risk factors with few assumptions (the factors are not named by the theory); empirical <b>multifactor models</b> add size, value and momentum factors to the market.</li>
</ul>`
        }
      ],
      traps: [
        "Use the <b>project's</b> beta for its hurdle rate, not the firm's.",
        "Forecast return <b>above</b> the CAPM (above SML) → <b>undervalued</b>.",
        "Weight ∝ α ÷ nonsystematic variance: more alpha → more weight; more firm-specific risk → less.",
        "Information ratio = α ÷ σ<sub>e</sub> (nonsystematic σ, not total σ).",
        "APT: multiple factors, few assumptions; the factors are not specified by the theory."
      ],
      quiz: [
        { q: "An analyst's forecast return for a share is above its CAPM required return. The share should be considered:", opts: ["overvalued", "undervalued", "properly valued"], ans: 1, hint: "Above the SML.", why: "More expected return than its risk requires means the price is too low: <b>undervalued</b>." },
        { q: "Portfolio managers maximising risk-adjusted returns will invest more in securities with:", opts: ["lower Jensen's alpha", "Jensen's alpha equal to zero", "higher Jensen's alpha"], ans: 2, hint: "Weight ∝ alpha.", why: "Weights rise with <b>higher alpha</b>." },
        { q: "Portfolio managers maximising risk-adjusted returns will invest less in securities with:", opts: ["lower nonsystematic variance", "higher nonsystematic variance", "zero nonsystematic variance"], ans: 1, hint: "Weight ∝ α ÷ σ<sub>e</sub><sup>2</sup>.", why: "Higher <b>nonsystematic variance</b> lowers the weight." },
        { q: "r<sub>f</sub> = 4%, E(R<sub>m</sub>) = 10%. A share with β = 0.8 is forecast to return 8%. The share:", opts: ["plots below the SML and is overvalued", "plots above the SML and is undervalued", "plots on the SML"], ans: 0, hint: "Required = 4 + 0.8 × 6.", why: "Required 8.8% &gt; forecast 8%: alpha −0.8%, <b>below the SML, overvalued</b>." },
        { q: "A company with β = 0.9 evaluates a project in an industry whose companies have β = 1.6. r<sub>f</sub> = 3%, market risk premium 5%. The project's required return is:", opts: ["11.0%", "7.5%", "8.0%"], ans: 0, hint: "Use the project's beta.", why: "3 + 1.6 × 5 = <b>11.0%</b>. 7.5% uses the company's beta." },
        { q: "Share M has α = 1.5% and nonsystematic σ = 10%. Share N has α = 4% and nonsystematic σ = 32%. Which statement is correct?", opts: ["N is more valuable because its alpha is higher", "M has the higher information ratio", "Both have the same information ratio"], ans: 1, hint: "α ÷ σ<sub>e</sub>.", why: "M: 0.15; N: 0.125. <b>M</b> adds more abnormal return per unit of added risk." },
        { q: "Which is a practical limitation of the CAPM?", opts: ["It uses too many factors", "Betas estimated from past data vary with the period and frequency used", "It ignores systematic risk"], ans: 1, hint: "Estimation problems.", why: "<b>Beta estimates are unstable</b>; the true market portfolio is also unobservable." },
        { q: "Compared with the CAPM, the arbitrage pricing theory:", opts: ["allows several risk factors and needs fewer assumptions", "uses only the market factor", "assumes everyone holds the same single-period portfolio"], ans: 0, hint: "Multiple factors.", why: "The APT allows <b>multiple factors</b> with fewer assumptions; it does not name the factors." },
        { q: "r<sub>f</sub> = 2%, E(R<sub>m</sub>) = 9%. Share K (β = 1.3) is forecast to return 12%. Its forecast alpha is:", opts: ["+3.0%", "+0.9%", "−0.9%"], ans: 1, hint: "12 − (2 + 1.3 × 7).", why: "Required 11.1%; alpha = <b>+0.9%</b>. +3.0% compares with E(R<sub>m</sub>)." }
      ]
    }
  ],

  /* ===================================================== MODULE QUIZ */
  moduleQuiz: [
    { lesson: 1, q: "Bills yield 3%; a fund has E = 10%, σ = 14%. An investor holds 120% in the fund, borrowing 20% at 3%. Her expected return and standard deviation are:", opts: ["11.4% and 14.0%", "12.0% and 16.8%", "11.4% and 16.8%"], ans: 2, hint: "1.2 × 10 − 0.2 × 3; 1.2 × 14.", why: "12 − 0.6 = <b>11.4%</b>; 1.2 × 14 = <b>16.8%</b>. 12.0% ignores the borrowing cost." },
    { lesson: 1, q: "A portfolio of a risk-free asset and a risky portfolio offers a better risk–return trade-off than either alone mainly because:", opts: ["the risky portfolio has no systematic risk", "the two are perfectly negatively correlated", "the risk-free asset has zero variance and zero correlation with the risky portfolio"], ans: 2, hint: "Why is the CAL straight?", why: "Zero variance and <b>zero correlation</b> make risk scale linearly with the risky weight." },
    { lesson: 1, q: "An investor's optimal portfolio on the CAL is the one that:", opts: ["has the highest expected return", "has the steepest slope", "touches the investor's highest attainable indifference curve"], ans: 2, hint: "Maximum utility.", why: "Optimal = tangency with the <b>highest indifference curve</b>." },
    { lesson: 1, q: "Bills yield 4%; a fund has E = 12%, σ = 20%. Which mix gives an expected return of 9%?", opts: ["45% fund, 55% bills", "75% fund, 25% bills", "62.5% fund, 37.5% bills"], ans: 2, hint: "9 = 4 + 8w.", why: "w = 5 ÷ 8 = <b>62.5%</b>." },
    { lesson: 2, q: "Which statement about the CML is most accurate?", opts: ["Any portfolio of risky assets can plot on it", "It uses beta on the x-axis", "It is the CAL that uses the market portfolio as the risky portfolio"], ans: 2, hint: "Special case.", why: "The CML is the <b>CAL with the market portfolio</b>; it uses σ, not beta." },
    { lesson: 2, q: "r<sub>f</sub> = 4%, E(R<sub>m</sub>) = 11%, σ<sub>m</sub> = 14%. A CML portfolio has σ = 21%. Its expected return is:", opts: ["16.5%", "15.0%", "14.5%"], ans: 2, hint: "Slope 7 ÷ 14 = 0.5.", why: "4 + 0.5 × 21 = <b>14.5%</b>. 16.5% is 1.5 × 11 (forgets the borrowing cost)." },
    { lesson: 2, q: "Same CML: r<sub>f</sub> = 4%, E(R<sub>m</sub>) = 11%, σ<sub>m</sub> = 14%. A CML portfolio with σ = 21% must be:", opts: ["a lending portfolio", "unachievable", "a borrowing portfolio holding 150% in the market"], ans: 2, hint: "w = 21 ÷ 14.", why: "w = <b>1.5</b>: borrowing 50% of wealth." },
    { lesson: 2, q: "If investors held different expectations about assets' returns, the most likely consequence is that:", opts: ["there would be no single optimal risky portfolio for everyone", "the CML would become steeper", "all investors would still hold the market"], ans: 0, hint: "Different frontiers.", why: "Heterogeneous beliefs give different valuations, so <b>no unique optimal risky portfolio</b>." },
    { lesson: 3, q: "A share's total standard deviation is 35% and its systematic standard deviation is 21%. Its nonsystematic standard deviation is:", opts: ["14%", "24.5%", "28%"], ans: 2, hint: "Subtract variances: 0.1225 − 0.0441.", why: "0.0784; √ = <b>28%</b>. 14% subtracts the σs, which is not allowed." },
    { lesson: 3, q: "An investor is compensated for bearing which of the following?", opts: ["Risk of a plant explosion at one firm", "Risk that one company loses a lawsuit", "Risk of a global recession"], ans: 2, hint: "Priced risk.", why: "Only systematic risk such as a <b>global recession</b> is priced." },
    { lesson: 3, q: "Which statement is most accurate?", opts: ["Total risk = systematic risk + nonsystematic risk, measured in standard deviations", "Beta = systematic variance + nonsystematic variance", "Total variance = systematic variance + nonsystematic variance"], ans: 2, hint: "What adds?", why: "<b>Variances</b> add; standard deviations do not." },
    { lesson: 3, q: "A fund manager holds 200 shares across all sectors. Most of the fund's remaining risk is likely to be:", opts: ["nonsystematic", "systematic", "zero"], ans: 1, hint: "What survives diversification?", why: "A broad portfolio retains mainly <b>systematic</b> risk." },
    { lesson: 4, q: "Under the market model, a share has β = 1.2, market σ = 15% and firm-specific σ = 16%. Its total standard deviation is closest to:", opts: ["24.1%", "34.0%", "18.0%"], ans: 0, hint: "1.44 × 0.0225 + 0.0256.", why: "0.0324 + 0.0256 = 0.058; √ = <b>24.1%</b>. 34.0% adds σs (18 + 16); 18.0% is only the systematic part." },
    { lesson: 4, q: "Two shares have betas of 0.9 and 1.5; market σ = 20%. Under the market model their covariance is:", opts: ["0.0540", "0.0400", "0.2700"], ans: 0, hint: "β<sub>1</sub>β<sub>2</sub>σ<sub>m</sub><sup>2</sup>.", why: "0.9 × 1.5 × 0.04 = <b>0.0540</b>. 0.2700 uses σ<sub>m</sub> rather than σ<sub>m</sub><sup>2</sup>." },
    { lesson: 4, q: "In the market model, the parameters α and β are typically estimated:", opts: ["from the CAPM formula", "from the share's dividend yield", "by regressing the share's past returns on the market's past returns"], ans: 2, hint: "Historical data.", why: "They are estimated by <b>regression on historical returns</b>, then used to forecast." },
    { lesson: 5, q: "A share has σ = 24% and correlation 0.75 with the market; the market's σ is 18%. Its beta is:", opts: ["1.00", "1.33", "0.56"], ans: 0, hint: "0.75 × 24 ÷ 18.", why: "18 ÷ 18 = <b>1.00</b>. 1.33 omits the correlation; 0.56 uses σ<sub>m</sub> ÷ σ<sub>i</sub>." },
    { lesson: 5, q: "A share's covariance with the market is 0.0300; the market's variance is 0.0250. Its beta is:", opts: ["0.83", "0.03", "1.20"], ans: 2, hint: "Cov ÷ variance.", why: "0.03 ÷ 0.025 = <b>1.20</b>." },
    { lesson: 5, q: "A portfolio: 50% in a share with β = 1.6, 30% in a share with β = 0.8 and 20% in treasury bills. The portfolio beta is:", opts: ["1.04", "1.20", "0.96"], ans: 0, hint: "Bills have β = 0.", why: "0.8 + 0.24 + 0 = <b>1.04</b>." },
    { lesson: 5, q: "Which statement about a share with β = 0.7 and σ = 40% (market σ = 20%) is correct?", opts: ["It has more total risk than the market but less systematic risk", "It has more systematic risk than the market", "Its correlation with the market must be above 1"], ans: 0, hint: "σ vs β.", why: "σ 40% &gt; 20% (more total risk), but β 0.7 &lt; 1 (<b>less systematic risk</b>). Its correlation is 0.7 × 20 ÷ 40 = 0.35." },
    { lesson: 6, q: "r<sub>f</sub> = 2.5%, market risk premium 5.5%. The CAPM return of a share with β = 1.4 is:", opts: ["10.2%", "7.7%", "11.2%"], ans: 0, hint: "2.5 + 1.4 × 5.5.", why: "2.5 + 7.7 = <b>10.2%</b>. 7.7% forgets r<sub>f</sub>; 11.2% multiplies E(R<sub>m</sub>) = 8% by 1.4." },
    { lesson: 6, q: "A share with β = 0.75 has a CAPM expected return of 8.25% when r<sub>f</sub> = 3%. The expected market return is:", opts: ["7.0%", "10.0%", "11.0%"], ans: 1, hint: "Premium = 5.25 ÷ 0.75.", why: "Premium 7%; E(R<sub>m</sub>) = 3 + 7 = <b>10.0%</b>. 7.0% is the premium alone." },
    { lesson: 6, q: "Under the CAPM, an asset with β = −0.5 when r<sub>f</sub> = 4% and E(R<sub>m</sub>) = 10% has an expected return of:", opts: ["1.0%", "4.0%", "7.0%"], ans: 0, hint: "4 − 0.5 × 6.", why: "4 − 3 = <b>1.0%</b>: below r<sub>f</sub>, like an insurance premium." },
    { lesson: 6, q: "Which statement comparing the SML and CML is correct?", opts: ["Both use total risk on the x-axis", "The SML applies to every fairly priced asset; the CML only to efficient portfolios", "The CML applies to individual securities; the SML only to portfolios"], ans: 1, hint: "β vs σ.", why: "The <b>SML</b> (beta) covers all fairly priced assets; the CML (σ) only efficient combinations of r<sub>f</sub> and the market." },
    { lesson: 6, q: "The CAPM implies that the primary determinant of an individual asset's expected return is its:", opts: ["standard deviation", "beta", "nonsystematic risk"], ans: 1, hint: "Priced risk.", why: "<b>Beta</b>, the measure of systematic risk." },
    { lesson: 7, q: "r<sub>f</sub> = 3%. Fund X: return 12%, σ 15%, β 1.0. Fund Y: return 10%, σ 10%, β 1.2. Which fund has the higher Sharpe ratio, and which the higher Treynor ratio?", opts: ["X for both", "Y for Sharpe, X for Treynor", "X for Sharpe, Y for Treynor"], ans: 1, hint: "Sharpe: 9/15 vs 7/10. Treynor: 9/1.0 vs 7/1.2.", why: "Sharpe: X 0.60, Y <b>0.70</b>. Treynor: X <b>9.0%</b>, Y 5.8%. So <b>Y for Sharpe, X for Treynor</b>." },
    { lesson: 7, q: "r<sub>f</sub> = 3%, market return 9%, market σ = 12%. A fund returned 11% with σ = 16%. Its M² is closest to:", opts: ["9.0%", "11.0%", "13.7%"], ans: 0, hint: "(8 ÷ 16) × 12 + 3.", why: "0.5 × 12 + 3 = <b>9.0%</b>, equal to the market: no risk-adjusted outperformance (M² alpha = 0). 13.7% scales by 16 ÷ 12 the wrong way." },
    { lesson: 7, q: "r<sub>f</sub> = 3%, market return 9%. A fund with β = 0.8 returned 9%. Its Jensen's alpha is:", opts: ["0.0%", "+1.2%", "−1.2%"], ans: 1, hint: "9 − (3 + 0.8 × 6).", why: "Required 7.8%; alpha = <b>+1.2%</b>." },
    { lesson: 7, q: "A pension fund holds many managers so that its overall portfolio is well diversified. To compare one equity manager within it, the most suitable measure is:", opts: ["the Sharpe ratio", "the Treynor ratio", "M²"], ans: 1, hint: "Firm-specific risk will be diversified away.", why: "For one part of a diversified whole, beta-based <b>Treynor</b> (or Jensen's alpha) is appropriate." },
    { lesson: 7, q: "A fund's Sharpe ratio is 0.38 and the market's is 0.45. The fund's M² compared with the market return is:", opts: ["higher", "lower", "equal"], ans: 1, hint: "Same ranking as Sharpe.", why: "M² ranks like Sharpe, so the fund's M² is <b>lower</b> than the market return." },
    { lesson: 8, q: "r<sub>f</sub> = 3%, E(R<sub>m</sub>) = 11%. Shares: P (β 1.2, forecast 13%), Q (β 0.9, forecast 9%), R (β 1.5, forecast 15%). Which share is undervalued?", opts: ["P", "Q", "R"], ans: 0, hint: "Required: 12.6%, 10.2%, 15.0%.", why: "P: 13 &gt; 12.6 (α +0.4%) → <b>undervalued</b>. Q: 9 &lt; 10.2 (overvalued). R: 15 = 15 (fair)." },
    { lesson: 8, q: "Same shares: P (α +0.4%), Q (α −1.2%), R (α 0%). Which plots exactly on the SML?", opts: ["P", "R", "Q"], ans: 1, hint: "Zero alpha.", why: "<b>R</b>'s forecast equals its required return." },
    { lesson: 8, q: "When a firm uses its own beta rather than a riskier project's beta to set the project's hurdle rate, it will most likely:", opts: ["reject too many risky projects", "accept projects whose returns don't compensate for their risk", "make no error"], ans: 1, hint: "Hurdle too low.", why: "The hurdle rate is too low, so it may <b>accept projects that destroy value</b>." },
    { lesson: 8, q: "Which security adds the most abnormal return per unit of risk to a well-diversified portfolio?", opts: ["α = 2%, σ<sub>e</sub> = 25%", "α = 1%, σ<sub>e</sub> = 8%", "α = 3%, σ<sub>e</sub> = 40%"], ans: 1, hint: "Information ratio α ÷ σ<sub>e</sub>.", why: "0.08, <b>0.125</b>, 0.075. The 1% alpha with 8% σ<sub>e</sub> has the highest information ratio." },
    { lesson: 8, q: "An empirical four-factor model explains share returns with the market factor plus:", opts: ["size, value and momentum", "inflation, GDP and interest rates only", "beta, alpha and the error term"], ans: 0, hint: "Fundamental factors.", why: "Market + <b>size, value and momentum</b>." },
    { lesson: 4, q: "A return-generating model that uses earnings growth and company size as factors is using:", opts: ["macroeconomic factors", "fundamental factors", "statistical factors"], ans: 1, hint: "Company characteristics.", why: "Company characteristics are <b>fundamental</b> factors." },
    { lesson: 1, q: "An investor can lend at 4% but borrow only at 7%. Compared with a world where both rates are 4%, leveraged portfolios on her CAL will offer:", opts: ["lower expected return for the same risk", "higher expected return for the same risk", "the same expected return"], ans: 0, hint: "Costlier borrowing.", why: "Higher borrowing cost flattens the line beyond the risky portfolio: <b>lower return for the same risk</b>." }
  ]
});
