/*
 * Portfolio Management · Module 1 – Portfolio Risk and Return: Part I (free module)
 * Original teaching text, examples and questions. The CFA Program curriculum is used only as a private
 * benchmark of topics and level; none of its text, exhibits or practice problems is reproduced.
 *
 * Question format: { q, opts:[A,B,C], ans:0|1|2, hint, why, lesson? }
 */
CFA.registerModule("pm", {
  num: 1,
  title: "Portfolio Risk and Return: Part I",
  intro: "Why do some investors hold mostly bank deposits while others buy small-company shares? This module builds the tools behind every portfolio decision: how asset classes have rewarded risk, how to describe an investor's dislike of risk with a <b>utility</b> score, how to calculate the risk of a portfolio of two assets, why <b>correlation</b> is the secret of diversification, and how the <b>efficient frontier</b> and the <b>capital allocation line</b> lead to each investor's best portfolio. Keep a calculator next to you: about half of the questions are calculations.",
  los: [
    "Describe how the main asset classes differ in return, risk, return distribution and liquidity",
    "Explain risk aversion and what it means for the portfolios investors choose",
    "Explain how an investor's best portfolio is found from their utility (risk aversion) and the capital allocation line",
    "Calculate and interpret the mean, variance, covariance and correlation of asset returns from past data",
    "Calculate and interpret the standard deviation of a portfolio",
    "Describe how combining assets that are less than perfectly correlated lowers portfolio risk",
    "Describe and interpret the minimum-variance frontier, the efficient frontier and the global minimum-variance portfolio"
  ],
  lessons: [

    /* ===================================================== LESSON 1 */
    {
      id: "l1",
      title: "Asset classes: the reward for taking risk",
      summary: "What a return is made of (real rate, inflation, risk premium); arithmetic vs geometric mean; how cash, bonds, large and small company shares have traded off risk and return.",
      los: [0],
      sections: [
        {
          title: "Three pieces of every expected return",
          html: `
<p>Think of lending money to three different people: the government, a big company and a new start-up. You would ask each for a different rate. Every expected return can be split into three pieces:</p>
<div class="vflow">
  <div class="node"><b>Real risk-free rate</b>: the pure reward for waiting (giving up spending today)</div><div class="arrow">+</div>
  <div class="node"><b>Expected inflation</b>: compensation because money will buy less later</div><div class="arrow">+</div>
  <div class="node good"><b>Risk premium</b>: extra return demanded for the chance that things go wrong</div>
</div>
<div class="callout key"><span class="label">Formula</span>Approximately: nominal expected return ≈ real risk-free rate + expected inflation + risk premium.<br>Exactly: (1 + nominal return) = (1 + real risk-free rate) × (1 + expected inflation) × (1 + risk premium).</div>
<p><i>Example:</i> real risk-free rate 1%, expected inflation 3%, risk premium 5%. The quick sum gives 9%. The exact version gives 1.01 × 1.03 × 1.05 − 1 = <b>9.23%</b>. The gap is small at low rates, which is why the sum is often used.</p>
<p>Two more definitions you will need: the <b>nominal risk-free rate</b> = real risk-free rate plus inflation (a government bill pays it), and the <b>real return</b> of an asset ≈ nominal return − inflation.</p>`
        },
        {
          title: "Averaging returns: arithmetic vs geometric",
          html: `
<p>A share rises 50% in year 1 and falls 50% in year 2. ₹100 becomes ₹150, then ₹75.</p>
<div class="table-wrap"><table>
<tr><th>Average</th><th>Calculation</th><th class="num">Result</th><th>What it tells you</th></tr>
<tr><td><b>Arithmetic mean</b></td><td>(50% − 50%) ÷ 2</td><td class="num">0.0%</td><td>The typical single-year return</td></tr>
<tr><td><b>Geometric mean</b></td><td>(1.50 × 0.50)<sup>1/2</sup> − 1</td><td class="num">−13.4%</td><td>The compound growth rate you actually earned</td></tr>
</table></div>
<p>The investor lost money, so the geometric mean tells the truth about growth. The geometric mean is <b>never higher</b> than the arithmetic mean, and the gap widens as returns become more volatile. Long-run asset-class comparisons are usually stated as geometric means.</p>`
        },
        {
          title: "How the asset classes compare",
          html: `
<p>Long histories in many countries show the same ranking. The figures below are <b>illustrative</b> (a made-up but typical market) to show the pattern, not data to memorise:</p>
<figure class="diagram"><div class="bars">
  <div class="bar"><span>Treasury bills: return 3.5%, risk 3%</span><span class="track"><span class="fill pass" style="width:12%"></span></span><span class="val">σ 3%</span></div>
  <div class="bar"><span>Government bonds: return 5.5%, risk 9%</span><span class="track"><span class="fill" style="width:30%"></span></span><span class="val">σ 9%</span></div>
  <div class="bar"><span>Large company shares: return 10%, risk 20%</span><span class="track"><span class="fill" style="width:62%"></span></span><span class="val">σ 20%</span></div>
  <div class="bar"><span>Small company shares: return 12%, risk 31%</span><span class="track"><span class="fill neg" style="width:95%"></span></span><span class="val">σ 31%</span></div>
</div><figcaption>Higher average return comes with higher volatility (standard deviation, σ): a positive risk–return relationship.</figcaption></figure>
<ul>
<li>The <b>positive relation</b> between risk and return across asset classes is the evidence that investors, as a group, are <b>risk averse</b>: they must be paid to hold riskier assets.</li>
<li>After inflation (real returns), cash has earned close to zero over long periods; shares have earned the largest real premium.</li>
<li>The <b>equity risk premium</b> is the return of shares above the risk-free rate. It can be measured in nominal or real terms; both give similar premiums because inflation cancels out of the difference.</li>
<li>Over short periods the ranking can flip: shares can lose 30–40% in a year. The pattern holds on average over long periods, not every year.</li>
</ul>`
        }
      ],
      traps: [
        "<b>Geometric ≤ arithmetic</b> mean; the gap grows with volatility. Long-run compound growth = geometric.",
        "A <b>positive</b> risk–return relationship is the evidence of risk aversion (not a negative or flat one).",
        "Nominal return ≈ real risk-free + inflation + risk premium; the exact form multiplies (1 + each).",
        "Real return ≈ nominal return − inflation; T-bills earn little after inflation.",
        "Small company shares: highest average return <b>and</b> highest standard deviation of the main classes."
      ],
      quiz: [
        { q: "Over long periods, the asset class with both the highest average return and the highest standard deviation of return has typically been:", opts: ["Treasury bills", "long-term government bonds", "small company shares"], ans: 2, hint: "Highest reward goes with highest risk.", why: "<b>Small company shares</b> top both lists. Government bonds sit in the middle; Treasury bills have the lowest return and risk." },
        { q: "Across asset classes, history shows that assets with higher standard deviations have earned higher average returns. This pattern is best explained by investors being:", opts: ["risk seeking", "risk neutral", "risk averse"], ans: 2, hint: "Why must riskier assets pay more?", why: "Investors demand extra return to hold risk, so they are <b>risk averse</b>. Risk-neutral investors would not demand a premium; risk seekers would accept a lower return for more risk." },
        { q: "The real risk-free rate is 1.5%, expected inflation is 4.0% and the risk premium on an equity fund is 5.0%. Using the exact (multiplicative) relation, the fund's nominal expected return is closest to:", opts: ["10.50%", "9.50%", "10.85%"], ans: 2, hint: "1.015 × 1.04 × 1.05 − 1.", why: "1.015 × 1.04 × 1.05 = 1.1084, so <b>10.84% ≈ 10.85%</b>. 10.50% is the simple sum; 9.50% leaves out the real rate." },
        { q: "A fund returned +30%, −20% and +10% in three years. Its geometric mean annual return is closest to:", opts: ["6.7%", "3.4%", "4.6%"], ans: 2, hint: "(1.30 × 0.80 × 1.10)^(1/3) − 1.", why: "1.30 × 0.80 × 1.10 = 1.144; the cube root is 1.0459, so <b>4.6%</b>. 6.7% is the arithmetic mean (20 ÷ 3); 3.4% is not a valid average of these returns." },
        { q: "Which statement about the arithmetic and geometric mean of the same return series is correct?", opts: ["The geometric mean can exceed the arithmetic mean when returns are volatile", "The arithmetic mean better measures the compound growth actually earned", "The two are equal only if every year's return is the same"], ans: 2, hint: "When is there no volatility penalty?", why: "They are equal <b>only when returns do not vary</b>. Otherwise the geometric mean is lower, and it (not the arithmetic mean) measures compound growth." },
        { q: "A bond fund earned a nominal return of 7% in a year when inflation was 4%. Its approximate real return is:", opts: ["11%", "1.75%", "3%"], ans: 2, hint: "Real ≈ nominal − inflation.", why: "7% − 4% = <b>3%</b> (exactly 1.07 ÷ 1.04 − 1 = 2.88%). 11% adds inflation instead of removing it." },
        { q: "Treasury bills in a country earned an average nominal return of 4.2% while inflation averaged 3.9%. The most likely conclusion is that the bills:", opts: ["outperformed shares in real terms", "carried a large risk premium", "gave investors almost no growth in purchasing power"], ans: 2, hint: "Subtract inflation.", why: "4.2% − 3.9% ≈ 0.3% real: <b>almost no gain in purchasing power</b>. T-bills carry little or no risk premium." },
        { q: "An analyst calculates the equity risk premium once with nominal returns and once with real returns over the same period. The two premiums are most likely:", opts: ["very different, because inflation is large", "zero in real terms", "similar, because inflation is removed from both shares and the risk-free asset"], ans: 2, hint: "A premium is a difference of two returns.", why: "Inflation affects both shares and the risk-free rate, so it <b>largely cancels</b> out of the difference." },
        { q: "Which statement about the risk–return pattern of asset classes is most accurate?", opts: ["Shares beat bonds in every individual year", "Bonds have always had a higher return than shares in real terms", "The ranking holds on average over long periods but can reverse in a given year"], ans: 2, hint: "Risky means results vary.", why: "The pattern is a <b>long-run average</b>. Shares are risky precisely because some years they lose heavily." }
      ]
    },

    /* ===================================================== LESSON 2 */
    {
      id: "l2",
      title: "Beyond mean and variance: skewness, fat tails and liquidity",
      summary: "Why mean and standard deviation are not the whole story: negative skewness, kurtosis (fat tails), and market characteristics such as liquidity and trading costs.",
      los: [0],
      sections: [
        {
          title: "The normal-distribution shortcut",
          html: `
<p>Most portfolio tools describe an asset with just two numbers: its <b>mean</b> (expected return) and its <b>variance</b> or standard deviation (risk). That is complete only if returns follow a <b>normal distribution</b>, the symmetric bell curve. Real returns often break that assumption in two ways.</p>
<div class="tiles">
  <div class="tile"><h4>Skewness: lopsided</h4><p>A <b>negatively skewed</b> distribution has a long left tail: many small gains and a few very large losses. Share returns tend to be negatively skewed. For the same mean and variance, investors dislike negative skew.</p></div>
  <div class="tile c2"><h4>Kurtosis: fat tails</h4><p><b>High kurtosis</b> (fat tails) means extreme returns, good or bad, happen more often than the normal curve predicts. A one-in-a-century crash under the normal curve may happen every decade in practice.</p></div>
</div>
<div class="callout analogy"><span class="label">Analogy</span>Two roads have the same average travel time. One has small daily delays; the other is usually quick but now and then is closed for a whole day. The averages match, the experience does not. Skewness and kurtosis describe those rare closures.</div>`
        },
        {
          title: "Market characteristics: liquidity and trading costs",
          html: `
<p>Returns in the textbook assume you can buy and sell freely. In practice, <b>operational efficiency</b> of the market matters:</p>
<div class="table-wrap"><table>
<tr><th>Cost of trading</th><th>Depends on liquidity?</th><th>Why</th></tr>
<tr><td><b>Bid–ask spread</b> (dealer's buy price vs sell price)</td><td>Yes</td><td>Illiquid securities have wider spreads</td></tr>
<tr><td><b>Price impact</b> (your own order moving the price)</td><td>Yes</td><td>In a thin market, a large sell order pushes the price down; doubt about being able to sell also lowers what buyers will pay</td></tr>
<tr><td><b>Brokerage commission</b></td><td>No (mostly)</td><td>Negotiated with the broker; it does not depend on how liquid the share is</td></tr>
</table></div>
<p>Liquidity is a serious issue for small-company shares, emerging-market securities, many corporate bonds and especially alternative assets such as private equity and real estate. Investors demand extra return for illiquid assets: a <b>liquidity premium</b>.</p>`
        }
      ],
      traps: [
        "Mean–variance analysis is complete only for <b>normal</b> returns.",
        "<b>Negative skew</b> = long left tail = occasional large losses; investors dislike it.",
        "<b>Kurtosis</b> = fat tails = extreme outcomes more common than normal.",
        "Liquidity affects <b>bid–ask spreads and price impact</b>; it is least likely to affect brokerage commissions.",
        "Illiquid assets need a higher expected return (liquidity premium)."
      ],
      quiz: [
        { q: "Which trading cost is least likely to change with how liquid a security is?", opts: ["The bid–ask spread", "The price impact of a large order", "The brokerage commission agreed with the broker"], ans: 2, hint: "Which cost is set by negotiation, not by the market?", why: "The <b>commission</b> is negotiated with the broker. Spreads and price impact both widen when liquidity is poor." },
        { q: "A return distribution with frequent small gains and a few very large losses is best described as:", opts: ["positively skewed", "normally distributed", "negatively skewed"], ans: 2, hint: "Where is the long tail?", why: "A long <b>left</b> tail of big losses is <b>negative skewness</b>." },
        { q: "A portfolio manager notes that daily losses greater than five standard deviations have occurred several times in 20 years. This is most consistent with returns that:", opts: ["have fat tails (high kurtosis)", "are perfectly normally distributed", "have zero variance"], ans: 0, hint: "How often should 5σ events happen under the bell curve?", why: "Under a normal curve such moves are almost impossible; seeing several means <b>fat tails</b>." },
        { q: "Two funds have the same mean return and standard deviation. Fund X is negatively skewed; Fund Y is symmetric. A typical risk-averse investor would most likely prefer:", opts: ["Fund X, because the averages are equal", "either fund, because mean and variance fully describe them", "Fund Y, because it has less crash risk"], ans: 2, hint: "Investors dislike rare large losses.", why: "With equal mean and variance, investors prefer to avoid the long left tail, so <b>Fund Y</b>. Mean and variance are not enough when returns are skewed." },
        { q: "Using only the mean and variance to describe an asset is fully adequate when returns are:", opts: ["normally distributed", "negatively skewed", "fat-tailed"], ans: 0, hint: "Which distribution is fully described by two numbers?", why: "A <b>normal</b> distribution is fully described by its mean and variance." },
        { q: "An investor wants to sell a large block of a thinly traded small-company share quickly. The most likely result is:", opts: ["a lower commission", "no effect, because markets are always liquid", "a lower selling price because of price impact and a wide spread"], ans: 2, hint: "Few buyers, big order.", why: "In a thin market a large order pushes the price down: <b>price impact</b> plus a wide spread." },
        { q: "Compared with large listed shares, private real estate funds most likely require investors to accept:", opts: ["lower liquidity, for which they expect a higher return", "higher liquidity and lower return", "no liquidity risk"], ans: 0, hint: "Can you sell a building in a day?", why: "Private assets are <b>illiquid</b>; investors expect a liquidity premium." },
        { q: "Which statement about share returns is most accurate?", opts: ["They are exactly normal, so mean and variance capture all risk", "They are positively skewed with thin tails", "They tend to show negative skewness and fat tails"], ans: 2, hint: "Think about crashes.", why: "Share returns tend to be <b>negatively skewed and fat-tailed</b>, which is why crashes happen more often than the bell curve predicts." }
      ]
    },

    /* ===================================================== LESSON 3 */
    {
      id: "l3",
      title: "Risk aversion and utility",
      summary: "Risk seeking, risk neutral and risk averse investors; the utility formula U = E(r) − ½Aσ²; using it to rank investments.",
      los: [1, 2],
      sections: [
        {
          title: "Three attitudes to the same gamble",
          html: `
<p>Offer someone a choice: <b>₹50 for sure</b>, or a coin toss paying ₹100 or nothing. Both have an expected value of ₹50.</p>
<div class="table-wrap"><table>
<tr><th>Attitude</th><th>Choice</th><th>What it means</th><th>A (risk-aversion coefficient)</th></tr>
<tr><td><b>Risk averse</b></td><td>Takes the sure ₹50</td><td>Accepts risk only if paid extra for it</td><td class="num">A &gt; 0</td></tr>
<tr><td><b>Risk neutral</b></td><td>Doesn't care</td><td>Looks only at expected return; risk is irrelevant</td><td class="num">A = 0</td></tr>
<tr><td><b>Risk seeking</b></td><td>Takes the gamble</td><td>Enjoys risk; would accept a lower expected return to get it</td><td class="num">A &lt; 0</td></tr>
</table></div>
<p>Portfolio theory assumes investors are <b>risk averse</b>. That does not mean they refuse all risk: they take it when the expected return is high enough. People who buy lottery tickets may still be risk averse with their pension; the lottery is closer to entertainment.</p>`
        },
        {
          title: "Utility: one score for return and risk",
          html: `
<div class="callout key"><span class="label">Utility formula</span>U = E(r) − ½ × A × σ²<br>E(r) = expected return, σ² = variance, A = the investor's risk-aversion coefficient. Use <b>decimals</b> (8% = 0.08).</div>
<ul>
<li>Utility is a <b>score for ranking</b>; the investor picks the investment with the highest U. The number itself has no meaning in rupees, and it can be negative.</li>
<li>Each unit of variance costs the investor ½A units of return. The bigger A is, the heavier the penalty for risk.</li>
<li>A <b>risk-free asset</b> has σ = 0, so U = its return for <b>every</b> investor, whatever their A.</li>
</ul>
<h3>Worked example: four funds, four investors</h3>
<div class="table-wrap"><table>
<tr><th>Fund</th><th class="num">E(r)</th><th class="num">σ</th><th class="num">U (A = −2)</th><th class="num">U (A = 0)</th><th class="num">U (A = 2)</th><th class="num">U (A = 4)</th></tr>
<tr><td>P</td><td class="num">8%</td><td class="num">5%</td><td class="num">0.0825</td><td class="num">0.0800</td><td class="num">0.0775</td><td class="num"><b>0.0750</b></td></tr>
<tr><td>Q</td><td class="num">11%</td><td class="num">15%</td><td class="num">0.1325</td><td class="num">0.1100</td><td class="num"><b>0.0875</b></td><td class="num">0.0650</td></tr>
<tr><td>R</td><td class="num">13%</td><td class="num">22%</td><td class="num">0.1784</td><td class="num"><b>0.1300</b></td><td class="num">0.0816</td><td class="num">0.0332</td></tr>
<tr><td>S</td><td class="num">9%</td><td class="num">30%</td><td class="num"><b>0.1800</b></td><td class="num">0.0900</td><td class="num">0.0000</td><td class="num">−0.0900</td></tr>
</table></div>
<p>Check one: Fund Q with A = 2: 0.11 − ½ × 2 × 0.15² = 0.11 − 0.0225 = 0.0875.</p>
<ul>
<li>The <b>risk seeker</b> (A = −2) picks S, the riskiest fund, even though its expected return is low: risk <i>adds</i> utility.</li>
<li>The <b>risk-neutral</b> investor (A = 0) simply picks the highest expected return, R.</li>
<li>As A rises, the choice moves to safer funds: Q at A = 2, P at A = 4.</li>
</ul>`
        }
      ],
      traps: [
        "Use <b>decimals</b> in U = E(r) − ½Aσ²; σ² means square the standard deviation.",
        "Least risk averse = <b>lowest (most negative) A</b>; A = 0 is neutral, not the least averse.",
        "Risk-neutral investors ignore σ and pick the highest E(r).",
        "A risk-free asset gives U = r<sub>f</sub> for <b>everyone</b>, whatever A.",
        "With A &lt; 0, risk raises utility: the seeker may choose a high-risk, low-return asset."
      ],
      quiz: [
        { q: "In the utility function U = E(r) − ½Aσ², which value of A describes the investor with the least aversion to risk?", opts: ["A = 3", "A = 0", "A = −3"], ans: 2, hint: "Negative A means risk adds to utility.", why: "A negative A is a <b>risk seeker</b>: least averse. A = 0 is neutral; A = 3 is averse." },
        { q: "A government bill yields 5% with no risk. For an investor with A = 6 and another with A = −1, its utility is:", opts: ["0.05 for both investors", "higher for the investor with A = 6", "negative for the risk seeker"], ans: 0, hint: "What is σ² for a risk-free asset?", why: "With σ = 0 the penalty term vanishes: U = <b>0.05 for everyone</b>." },
        { q: "An investor with A = 3 considers a fund with expected return 12% and standard deviation 20%. The fund's utility is:", opts: ["0.0600", "0.0900", "0.0000"], ans: 0, hint: "0.12 − 0.5 × 3 × 0.04.", why: "0.12 − 1.5 × 0.04 = 0.12 − 0.06 = <b>0.0600</b>. 0.0900 uses σ instead of σ² (0.12 − 1.5 × 0.02); 0.0000 forgets the ½." },
        { q: "Funds: K (E = 9%, σ = 10%), L (E = 12%, σ = 20%), M (E = 15%, σ = 30%). Which fund does an investor with A = 4 prefer?", opts: ["K", "L", "M"], ans: 0, hint: "Compute 0.09 − 2(0.01), 0.12 − 2(0.04), 0.15 − 2(0.09).", why: "U<sub>K</sub> = 0.07, U<sub>L</sub> = 0.04, U<sub>M</sub> = −0.03. <b>K</b> wins." },
        { q: "Same funds: K (9%, 10%), L (12%, 20%), M (15%, 30%). Which fund does a risk-neutral investor prefer?", opts: ["K", "M", "L"], ans: 1, hint: "A = 0: only E(r) counts.", why: "With A = 0, U = E(r): <b>M</b> has the highest return." },
        { q: "Same funds: K (9%, 10%), L (12%, 20%), M (15%, 30%). An investor with A = 1 prefers:", opts: ["L", "K", "M"], ans: 2, hint: "0.09 − 0.005; 0.12 − 0.02; 0.15 − 0.045.", why: "U<sub>K</sub> = 0.085, U<sub>L</sub> = 0.100, U<sub>M</sub> = 0.105. <b>M</b> wins narrowly; mild risk aversion doesn't outweigh M's return." },
        { q: "Asset X: E = 7%, σ = 4%. Asset Y: E = 8%, σ = 32%. An investor with A = −2 would most likely choose:", opts: ["X, because its risk is lower", "either, because their returns are similar", "Y, because risk raises a risk seeker's utility"], ans: 2, hint: "With A = −2, U = E(r) + σ².", why: "U<sub>X</sub> = 0.07 + 0.0016 = 0.0716; U<sub>Y</sub> = 0.08 + 0.1024 = 0.1824. The seeker picks <b>Y</b>." },
        { q: "Which statement about utility scores is most accurate?", opts: ["Utility is measured in currency units and must be positive", "Utility is used only to rank choices and can be negative", "Two investors always give the same asset the same utility"], ans: 1, hint: "What is the number for?", why: "Utility <b>ranks</b> choices for one investor; it has no currency meaning and can be negative. Different A values give different scores." },
        { q: "Two investors look at a fund with E = 10%, σ = 25%. Investor 1 has A = 2, Investor 2 has A = 5. Which statement is correct?", opts: ["Investor 2 gets lower utility (−0.0563) than Investor 1 (0.0375)", "Both get utility of 0.10", "Investor 1 gets lower utility, because A is smaller"], ans: 0, hint: "σ² = 0.0625.", why: "Investor 1: 0.10 − 0.0625 = 0.0375. Investor 2: 0.10 − 2.5 × 0.0625 = −0.0563. The <b>more risk-averse investor scores it lower</b>." },
        { q: "A risk-averse investor will accept more risk only if:", opts: ["the investment is risk-free", "the risk is diversifiable", "the expected return is high enough to compensate"], ans: 2, hint: "Risk averse ≠ refuses all risk.", why: "Risk-averse investors take risk when they are <b>paid enough</b> in expected return." }
      ]
    },

    /* ===================================================== LESSON 4 */
    {
      id: "l4",
      title: "Indifference curves, the capital allocation line and the best portfolio",
      summary: "Indifference curves and their slope; the capital allocation line (risk-free asset + risky portfolio); the optimal portfolio where the CAL touches the highest indifference curve.",
      los: [1, 2],
      sections: [
        {
          title: "Indifference curves: all the portfolios that feel the same",
          html: `
<p>Fix a utility level, say U = 0.06, and ask which (risk, return) pairs give exactly that score. Joining them draws an <b>indifference curve</b>. The investor is equally happy anywhere on it.</p>
<ul>
<li>For a risk-averse investor the curve slopes <b>upward</b> (more risk needs more return) and is <b>convex</b> (each extra unit of risk needs a bigger return bump).</li>
<li>A <b>more risk-averse</b> investor has a <b>steeper</b> curve: they need more extra return for the same extra risk.</li>
<li>Higher curves (further up and to the left) mean higher utility. Curves of one investor never cross.</li>
<li>Risk-neutral: horizontal lines. Risk seeker: curves slope downward (they would give up return to get risk).</li>
</ul>
<figure class="diagram">
<svg viewBox="0 0 360 220" role="img" aria-label="Indifference curves" style="width:100%;max-width:460px;font-size:11px">
  <line x1="40" y1="190" x2="345" y2="190" style="stroke:var(--ink)"/><line x1="40" y1="190" x2="40" y2="15" style="stroke:var(--ink)"/>
  <text x="300" y="207" style="fill:var(--muted)">Risk σ</text><text x="6" y="20" style="fill:var(--muted)">E(r)</text>
  <path d="M40 150 Q 200 140 300 40" style="fill:none;stroke:var(--accent);stroke-width:2.5"/>
  <path d="M40 120 Q 140 110 190 25" style="fill:none;stroke:var(--bad);stroke-width:2.5"/>
  <text x="250" y="70" style="fill:var(--accent)">less risk averse (flatter)</text>
  <text x="140" y="45" style="fill:var(--bad)">more risk averse (steeper)</text>
</svg>
<figcaption>Our own sketch: the steeper curve belongs to the investor who needs more return for each extra unit of risk.</figcaption></figure>`
        },
        {
          title: "The capital allocation line (CAL)",
          html: `
<p>Now give the investor two things to mix: a <b>risk-free asset</b> (return r<sub>f</sub>, σ = 0) and one <b>risky portfolio</b> (E(R<sub>i</sub>), σ<sub>i</sub>). Put weight w in the risky portfolio and 1 − w in the risk-free asset.</p>
<ul>
<li>Return: E(R<sub>p</sub>) = r<sub>f</sub> + w[E(R<sub>i</sub>) − r<sub>f</sub>]</li>
<li>Risk: σ<sub>p</sub> = w × σ<sub>i</sub> (the risk-free asset has no risk and zero correlation with anything)</li>
</ul>
<p>Replace w with σ<sub>p</sub>/σ<sub>i</sub> and you get a straight line:</p>
<div class="callout key"><span class="label">Capital allocation line</span>E(R<sub>p</sub>) = r<sub>f</sub> + [(E(R<sub>i</sub>) − r<sub>f</sub>) ÷ σ<sub>i</sub>] × σ<sub>p</sub><br>Intercept = r<sub>f</sub>. Slope = extra return per unit of risk (the Sharpe ratio of the risky portfolio).</div>
<p><i>Example:</i> r<sub>f</sub> = 4%, risky fund E = 12%, σ = 20%. Slope = (12 − 4) ÷ 20 = 0.40. A portfolio with σ<sub>p</sub> = 10% (half in the fund) expects 4 + 0.40 × 10 = <b>8%</b>. With σ<sub>p</sub> = 30% (w = 150%: borrow at r<sub>f</sub> and invest 1.5× in the fund) it expects 4 + 12 = <b>16%</b>.</p>
<ul>
<li>w between 0 and 1: <b>lending</b> (part of the money in the risk-free asset).</li>
<li>w above 1: <b>borrowing</b> at r<sub>f</sub> to buy more of the risky portfolio (leverage).</li>
</ul>`
        },
        {
          title: "The optimal portfolio: where the line touches the highest curve",
          html: `
<p>Every investor faces the <b>same CAL</b> (it depends only on the market), but each has their own indifference curves. The <b>optimal investor portfolio</b> is the point on the CAL that touches (is tangent to) the <b>highest</b> indifference curve the investor can reach.</p>
<div class="tiles">
  <div class="tile"><h4>Very risk averse</h4><p>Steep curves touch the CAL near r<sub>f</sub>: mostly the risk-free asset, a little risky portfolio.</p></div>
  <div class="tile c2"><h4>Less risk averse</h4><p>Flatter curves touch the CAL far out: all risky, or even borrowing to buy more.</p></div>
</div>
<p>For a numerical answer, maximise U along the CAL. That gives the weight in the risky portfolio:</p>
<div class="callout key"><span class="label">Optimal risky weight</span>w* = [E(R<sub>i</sub>) − r<sub>f</sub>] ÷ (A × σ<sub>i</sub><sup>2</sup>)</div>
<p><i>Example:</i> r<sub>f</sub> = 4%, fund E = 12%, σ = 20%. Investor with A = 4: w* = 0.08 ÷ (4 × 0.04) = <b>0.50</b>: half in the fund. Investor with A = 1: w* = 0.08 ÷ 0.04 = <b>2.0</b>: borrow an amount equal to their wealth and put everything in the fund. Different risk aversion, <b>same risky fund</b>, different mix.</p>`
        }
      ],
      traps: [
        "More risk averse = <b>steeper</b> indifference curve (greatest slope).",
        "All optimal portfolios lie <b>on</b> the CAL, never above or below it.",
        "CAL slope = (E(R<sub>i</sub>) − r<sub>f</sub>) ÷ σ<sub>i</sub>; risk along the CAL is w × σ<sub>i</sub>.",
        "w &gt; 1 means <b>borrowing</b> at the risk-free rate; w &lt; 1 means lending.",
        "The optimal mix is decided by the investor's <b>risk preference</b> (A), not by their risk-free rate."
      ],
      quiz: [
        { q: "Compared with a less risk-averse investor, a more risk-averse investor's indifference curves are:", opts: ["steeper", "flatter", "horizontal"], ans: 0, hint: "Who needs more extra return per unit of risk?", why: "The more risk-averse investor needs a bigger reward for each unit of risk, so the curve is <b>steeper</b>. Horizontal curves belong to a risk-neutral investor." },
        { q: "Two investors with different risk aversion use the same risk-free asset and the same risky portfolio. Their optimal portfolios will be:", opts: ["at different points on the capital allocation line", "above the capital allocation line", "at the same point on the capital allocation line"], ans: 0, hint: "Same line, different curves.", why: "Each picks where the CAL touches their highest curve: <b>different points on the same line</b>. Points above the line can't be reached." },
        { q: "The risk-free rate is 3% and a risky fund has E = 11%, σ = 16%. An investor puts 75% in the fund and 25% in the risk-free asset. The portfolio's expected return and standard deviation are:", opts: ["8.25% and 16.00%", "9.00% and 12.00%", "9.00% and 16.00%"], ans: 1, hint: "Return: 3 + 0.75 × 8. Risk: 0.75 × 16.", why: "E = 3 + 6 = <b>9.00%</b>; σ = 0.75 × 16 = <b>12.00%</b>. The 16% options forget that the risk-free part adds no risk." },
        { q: "Same CAL: risk-free 3%, fund E = 11%, σ = 16%. What expected return does a portfolio on this CAL with a standard deviation of 24% offer?", opts: ["15.0%", "16.5%", "14.0%"], ans: 0, hint: "Slope = 8 ÷ 16 = 0.5.", why: "3 + 0.5 × 24 = <b>15.0%</b>. It requires w = 1.5: borrowing to invest 150% in the fund. 16.5% is 1.5 × 11, which forgets to subtract the borrowing cost." },
        { q: "An investor on the CAL holds a portfolio with a standard deviation greater than that of the risky portfolio. The investor must be:", opts: ["lending at the risk-free rate", "borrowing at the risk-free rate", "holding only the risk-free asset"], ans: 1, hint: "σ<sub>p</sub> = w × σ<sub>i</sub>; when is σ<sub>p</sub> &gt; σ<sub>i</sub>?", why: "σ<sub>p</sub> &gt; σ<sub>i</sub> needs w &gt; 1: the investor is <b>borrowing</b> to buy more of the risky portfolio." },
        { q: "Risk-free rate 5%; risky portfolio E = 13%, σ = 20%. An investor's risk-aversion coefficient is A = 5. The optimal weight in the risky portfolio is:", opts: ["40%", "80%", "160%"], ans: 0, hint: "w* = (0.13 − 0.05) ÷ (5 × 0.04).", why: "0.08 ÷ 0.20 = <b>0.40</b>. 80% uses σ = 0.20 instead of σ² (0.08 ÷ (5 × 0.02)); 160% would be the weight for an investor with A = 1.25." },
        { q: "Same market: risk-free 5%; risky portfolio E = 13%, σ = 20%. An investor with A = 1.6 holds the optimal portfolio. Which statement is correct?", opts: ["The investor holds 80% risky and 20% risk-free", "The investor borrows to hold 125% in the risky portfolio", "The investor holds only the risk-free asset"], ans: 1, hint: "w* = 0.08 ÷ (1.6 × 0.04).", why: "0.08 ÷ 0.064 = <b>1.25</b>: borrow 25% of wealth and hold 125% in the risky portfolio." },
        { q: "The optimal mix of the risk-free asset and the risky portfolio for a given investor is decided mainly by the investor's:", opts: ["risk-free rate", "risk preference", "borrowing limit"], ans: 1, hint: "What differs between investors facing the same CAL?", why: "All investors face the same line; their <b>risk preference</b> (indifference curves) picks the point." },
        { q: "On a CAL with r<sub>f</sub> = 2%, a risky fund has E = 10% and σ = 25%. The slope of the CAL is:", opts: ["0.32", "0.40", "0.08"], ans: 0, hint: "(10 − 2) ÷ 25.", why: "8 ÷ 25 = <b>0.32</b>. 0.40 uses 10 ÷ 25 (forgets r<sub>f</sub>); 0.08 is the risk premium, not the slope." },
        { q: "A highly risk-averse investor facing the CAL most likely holds:", opts: ["a leveraged position in the risky portfolio", "mostly the risk-free asset with a small risky position", "only the riskiest asset available"], ans: 1, hint: "Steep curves touch the CAL near its intercept.", why: "Steep indifference curves touch the CAL close to r<sub>f</sub>: <b>mostly risk-free</b>." }
      ]
    },

    /* ===================================================== LESSON 5 */
    {
      id: "l5",
      title: "Measuring return and risk from past data: mean, variance, covariance, correlation",
      summary: "Sample mean and variance; covariance as a measure of co-movement; correlation as standardised covariance between −1 and +1.",
      los: [3],
      sections: [
        {
          title: "Mean and variance from history",
          html: `
<p>Four years of returns for two funds (made up):</p>
<div class="table-wrap"><table>
<tr><th>Year</th><th class="num">Fund A</th><th class="num">Fund B</th><th class="num">A − mean</th><th class="num">B − mean</th><th class="num">Product</th></tr>
<tr><td>1</td><td class="num">12%</td><td class="num">5%</td><td class="num">+3</td><td class="num">−1</td><td class="num">−3</td></tr>
<tr><td>2</td><td class="num">−4%</td><td class="num">3%</td><td class="num">−13</td><td class="num">−3</td><td class="num">+39</td></tr>
<tr><td>3</td><td class="num">20%</td><td class="num">9%</td><td class="num">+11</td><td class="num">+3</td><td class="num">+33</td></tr>
<tr><td>4</td><td class="num">8%</td><td class="num">7%</td><td class="num">−1</td><td class="num">+1</td><td class="num">−1</td></tr>
<tr class="total"><td>Mean</td><td class="num">9%</td><td class="num">6%</td><td></td><td>Sum</td><td class="num">68</td></tr>
</table></div>
<ul>
<li><b>Mean</b> = sum ÷ number of years: A = 36 ÷ 4 = 9%; B = 24 ÷ 4 = 6%.</li>
<li><b>Sample variance</b> = sum of squared deviations ÷ (n − 1). A: (9 + 169 + 121 + 1) ÷ 3 = 300 ÷ 3 = 100 (%²) = 0.0100, so σ<sub>A</sub> = 10%. B: (1 + 9 + 9 + 1) ÷ 3 = 6.67 (%²), σ<sub>B</sub> = 2.58%.</li>
</ul>
<div class="callout key"><span class="label">Why n − 1?</span>With a sample (not every possible year), dividing by n − 1 corrects for the fact that the sample mean was estimated from the same data. If you are given the whole population, divide by n.</div>`
        },
        {
          title: "Covariance and correlation: do they move together?",
          html: `
<p><b>Covariance</b> = sum of (deviation of A × deviation of B) ÷ (n − 1) = 68 ÷ 3 = 22.67 (%²) = <b>0.002267</b>. It is positive: when A is above its mean, B tends to be above its mean too.</p>
<p>Covariance is hard to read because its size depends on how volatile each asset is. Dividing by both standard deviations gives the <b>correlation</b>:</p>
<div class="callout key"><span class="label">Correlation</span>ρ<sub>AB</sub> = Cov(A, B) ÷ (σ<sub>A</sub> × σ<sub>B</sub>) = 0.002267 ÷ (0.10 × 0.0258) = <b>0.88</b><br>Rearranged: Cov(A, B) = ρ<sub>AB</sub> × σ<sub>A</sub> × σ<sub>B</sub>.</div>
<div class="table-wrap"><table>
<tr><th>Correlation</th><th>Meaning</th></tr>
<tr><td class="num">+1</td><td>Perfect positive: they always move together in a straight-line way</td></tr>
<tr><td class="num">0</td><td>No linear relation</td></tr>
<tr><td class="num">−1</td><td>Perfect negative: when one is above its mean, the other is below by a fixed proportion</td></tr>
</table></div>
<p>Correlation is always between −1 and +1, has no units, and the correlation of an asset with itself is +1 (its covariance with itself is its variance).</p>`
        }
      ],
      traps: [
        "Sample variance and covariance divide by <b>n − 1</b>; population by n.",
        "Variance is in squared units; σ = √variance.",
        "Cov = ρ × σ<sub>1</sub> × σ<sub>2</sub>; ρ = Cov ÷ (σ<sub>1</sub>σ<sub>2</sub>), always between −1 and +1.",
        "Working in %²? 22.67 %² = 0.002267 in decimals (divide by 10,000).",
        "Cov of an asset with itself = its variance; its correlation with itself = 1."
      ],
      quiz: [
        { q: "A share returned 10%, 20% and −6% in three years. Using the sample formula, its standard deviation is closest to:", opts: ["13.1%", "10.7%", "17.2%"], ans: 0, hint: "Mean 8%; deviations 2, 12, −14; divide by 2.", why: "Squared deviations 4 + 144 + 196 = 344; ÷ 2 = 172 (%²), √172 = <b>13.1%</b>. 10.7% divides by 3 (population); 17.2% forgets the square root (172 %² is 0.0172)." },
        { q: "Share X returned 10%, 20%, −6%; share Y returned 4%, 8%, 6% in the same years. The sample covariance of X and Y is:", opts: ["0.0007", "0.0010", "0.0020"], ans: 1, hint: "Deviations X: 2, 12, −14. Y: −2, 2, 0.", why: "Products: −4 + 24 + 0 = 20; ÷ (3 − 1) = 10 (%²) = <b>0.0010</b>. 0.0007 divides by 3; 0.0020 forgets to divide." },
        { q: "Two assets have a covariance of 0.0120, and standard deviations of 20% and 15%. Their correlation is:", opts: ["0.40", "0.0004", "0.80"], ans: 0, hint: "0.012 ÷ (0.20 × 0.15).", why: "0.012 ÷ 0.03 = <b>0.40</b>. 0.80 divides by 0.015 instead of 0.03; 0.0004 multiplies by the σs instead of dividing." },
        { q: "Two assets have a correlation of −0.5 and standard deviations of 30% and 10%. Their covariance is:", opts: ["−0.0150", "−0.1500", "+0.0150"], ans: 0, hint: "ρ × σ<sub>1</sub> × σ<sub>2</sub>.", why: "−0.5 × 0.30 × 0.10 = <b>−0.0150</b>. The sign follows the correlation." },
        { q: "Which statement about correlation is correct?", opts: ["It is always between −1 and +1 and has no units", "It can take any value, depending on the units of returns", "A correlation of 0 means the two assets always move in opposite directions"], ans: 0, hint: "Standardised covariance.", why: "Correlation is covariance divided by both σs: <b>unit-free and between −1 and +1</b>. Zero means no linear relation, not opposite moves." },
        { q: "An analyst has a full population of returns rather than a sample. To compute the variance she should divide the sum of squared deviations by:", opts: ["n − 1", "n", "n + 1"], ans: 1, hint: "No estimation correction needed.", why: "For a whole population divide by <b>n</b>; n − 1 is for samples." },
        { q: "The covariance of an asset's returns with its own returns equals the asset's:", opts: ["correlation of 0", "standard deviation", "variance"], ans: 2, hint: "Cov(A, A) = ρ × σ × σ with ρ = 1.", why: "Cov(A, A) = 1 × σ × σ = σ² = <b>variance</b>." },
        { q: "Fund M's returns over four years were 6%, 6%, 6%, 6%. Fund N's were 2%, 10%, 4%, 8%. Their covariance is:", opts: ["positive", "zero", "negative"], ans: 1, hint: "M's deviations from its mean are…", why: "M never deviates from its mean, so every product is 0: covariance is <b>zero</b>." },
        { q: "Sample variance of a fund's returns is 0.0225. Its standard deviation is:", opts: ["2.25%", "15.0%", "1.50%"], ans: 1, hint: "√0.0225.", why: "√0.0225 = 0.15 = <b>15.0%</b>. 2.25% reads the variance as a percentage." }
      ]
    },

    /* ===================================================== LESSON 6 */
    {
      id: "l6",
      title: "The risk and return of a two-asset portfolio",
      summary: "Portfolio return is a weighted average; portfolio standard deviation is not (unless ρ = +1). The two-asset formula with correlation or covariance; finding weights from a target return.",
      los: [4, 5],
      sections: [
        {
          title: "Return: a simple weighted average",
          html: `
<div class="callout key"><span class="label">Portfolio return</span>E(R<sub>p</sub>) = w<sub>1</sub>E(R<sub>1</sub>) + w<sub>2</sub>E(R<sub>2</sub>), with w<sub>1</sub> + w<sub>2</sub> = 1</div>
<p><i>Example:</i> Kaveri Equity expects 14%, Ganga Bonds expects 6%. With 40% in Kaveri and 60% in Ganga: 0.4 × 14 + 0.6 × 6 = <b>9.2%</b>.</p>
<p><b>Working backwards</b>: to target 11%, solve 11 = w × 14 + (1 − w) × 6 → 11 = 6 + 8w → w = <b>62.5%</b> in Kaveri.</p>`
        },
        {
          title: "Risk: the formula with the cross term",
          html: `
<div class="callout key"><span class="label">Portfolio variance</span>σ<sub>p</sub><sup>2</sup> = w<sub>1</sub><sup>2</sup>σ<sub>1</sub><sup>2</sup> + w<sub>2</sub><sup>2</sup>σ<sub>2</sub><sup>2</sup> + 2w<sub>1</sub>w<sub>2</sub>Cov<sub>12</sub><br>with Cov<sub>12</sub> = ρ<sub>12</sub>σ<sub>1</sub>σ<sub>2</sub>. Then σ<sub>p</sub> = √σ<sub>p</sub><sup>2</sup>.</div>
<p>Kaveri σ = 25%, Ganga σ = 10%, correlation 0.3, weights 40/60:</p>
<div class="table-wrap"><table>
<tr><th>Term</th><th>Calculation</th><th class="num">Value</th></tr>
<tr><td>w<sub>1</sub><sup>2</sup>σ<sub>1</sub><sup>2</sup></td><td>0.16 × 0.0625</td><td class="num">0.0100</td></tr>
<tr><td>w<sub>2</sub><sup>2</sup>σ<sub>2</sub><sup>2</sup></td><td>0.36 × 0.0100</td><td class="num">0.0036</td></tr>
<tr><td>2w<sub>1</sub>w<sub>2</sub>ρσ<sub>1</sub>σ<sub>2</sub></td><td>2 × 0.4 × 0.6 × 0.3 × 0.25 × 0.10</td><td class="num">0.0036</td></tr>
<tr class="total"><td>Variance</td><td></td><td class="num">0.0172</td></tr>
<tr class="total"><td>Standard deviation</td><td>√0.0172</td><td class="num">13.11%</td></tr>
</table></div>
<p>The same weights with other correlations:</p>
<div class="table-wrap"><table>
<tr><th>Correlation</th><th class="num">+1</th><th class="num">+0.3</th><th class="num">0</th><th class="num">−1</th></tr>
<tr><td>Portfolio σ</td><td class="num">16.00%</td><td class="num">13.11%</td><td class="num">11.66%</td><td class="num">4.00%</td></tr>
</table></div>
<ul>
<li>At ρ = +1 the portfolio σ is the <b>weighted average</b> of the two σs: 0.4 × 25 + 0.6 × 10 = 16%. No diversification benefit.</li>
<li>Any ρ below +1 gives a σ <b>below</b> the weighted average. The return stays 9.2% in every case: correlation changes risk, not return.</li>
<li>At ρ = −1 risk can be removed completely with the right weights: w<sub>1</sub> = σ<sub>2</sub> ÷ (σ<sub>1</sub> + σ<sub>2</sub>).</li>
</ul>
<div class="callout trap"><span class="label">Reverse question</span>If you are told a portfolio's σ equals the weighted average of the two σs, the correlation must be <b>+1</b>, and the covariance is then σ<sub>1</sub> × σ<sub>2</sub>.</div>`
        }
      ],
      traps: [
        "Portfolio <b>return</b> = weighted average; portfolio <b>σ</b> = weighted average only when ρ = +1.",
        "Square the <b>weights</b> and the <b>σs</b>; the cross term has a 2 in front.",
        "If you are given a covariance, put it straight into 2w<sub>1</sub>w<sub>2</sub>Cov (don't multiply by σs again).",
        "Expected returns are not inputs to portfolio variance.",
        "A negative cross term can make σ<sub>p</sub> far smaller than either asset's σ."
      ],
      quiz: [
        { q: "A portfolio is 50% in each of two funds with σ of 20% and 30% and correlation 0.2. The portfolio standard deviation is closest to:", opts: ["25.0%", "18.0%", "19.6%"], ans: 2, hint: "0.25(0.04) + 0.25(0.09) + 2(0.25)(0.2)(0.2)(0.3).", why: "0.0100 + 0.0225 + 0.0060 = 0.0385; √ = <b>19.6%</b>. 25.0% is the weighted average (only right if ρ = 1); 18.0% ignores the correlation term." },
        { q: "A portfolio is 60% in Fund 1 (σ = 15%) and 40% in Fund 2 (σ = 25%). The covariance between the funds is 0.0150. The portfolio standard deviation is closest to:", opts: ["14.3%", "15.9%", "19.0%"], ans: 1, hint: "0.36(0.0225) + 0.16(0.0625) + 2(0.6)(0.4)(0.015).", why: "0.0081 + 0.0100 + 0.0072 = 0.0253; √ = <b>15.9%</b>. 19.0% is the weighted average of the σs." },
        { q: "Asset 1 expects 14% and Asset 2 expects 6%. What weight in Asset 1 gives a portfolio expected return of 11%?", opts: ["62.5%", "37.5%", "78.6%"], ans: 0, hint: "11 = 6 + 8w.", why: "w = 5 ÷ 8 = <b>62.5%</b>. 37.5% is the weight in Asset 2; 78.6% is 11 ÷ 14." },
        { q: "A 70/30 portfolio of two assets with σ of 18% and 8% has a standard deviation of exactly 15.0%. The correlation between the assets must be:", opts: ["0", "+1", "−1"], ans: 1, hint: "0.7 × 18 + 0.3 × 8 = ?", why: "The weighted average of the σs is 12.6 + 2.4 = 15.0%. Portfolio σ equals it only when ρ = <b>+1</b>." },
        { q: "Same portfolio: 70/30 of assets with σ = 18% and 8%, portfolio σ = 15.0%. The covariance between the assets is:", opts: ["0.0000", "0.0144", "1.0000"], ans: 1, hint: "Cov = ρσ<sub>1</sub>σ<sub>2</sub> with ρ = 1.", why: "1 × 0.18 × 0.08 = <b>0.0144</b>." },
        { q: "Which input is not needed to calculate the variance of a two-asset portfolio?", opts: ["The assets' expected returns", "The assets' standard deviations", "The correlation between the assets"], ans: 0, hint: "Look at the formula.", why: "Variance uses weights, σs and covariance (or correlation): <b>expected returns are not used</b>." },
        { q: "A portfolio holds 40% of Asset X (σ = 20%) and 60% of Asset Y (σ = 12%). The covariance is −0.0120. The portfolio standard deviation is closest to:", opts: ["7.6%", "15.2%", "10.8%"], ans: 0, hint: "0.16(0.04) + 0.36(0.0144) + 2(0.4)(0.6)(−0.012).", why: "0.0064 + 0.005184 − 0.00576 = 0.005824; √ = <b>7.6%</b>. 15.2% is the weighted average of the σs; 10.8% ignores the covariance term." },
        { q: "Two assets have σ of 30% and 15% and a correlation of −1. Which weight in the 30%-σ asset creates a zero-risk portfolio?", opts: ["33.3%", "50.0%", "66.7%"], ans: 0, hint: "w<sub>1</sub> = σ<sub>2</sub> ÷ (σ<sub>1</sub> + σ<sub>2</sub>).", why: "15 ÷ 45 = <b>33.3%</b>. Check: 0.333 × 30 = 10 and 0.667 × 15 = 10; with ρ = −1 they cancel." },
        { q: "An equally weighted portfolio of two assets, each with σ = 20%, has a correlation of 0. Its standard deviation is closest to:", opts: ["20.0%", "10.0%", "14.1%"], ans: 2, hint: "√(0.25 × 0.04 × 2).", why: "0.01 + 0.01 = 0.02; √ = <b>14.1%</b>. 20.0% would need ρ = 1; 10.0% would need ρ = −0.5." },
        { q: "Holding weights and the assets' standard deviations constant, if the correlation between two assets falls from 0.6 to 0.1, the portfolio's expected return will:", opts: ["rise", "stay the same", "fall"], ans: 1, hint: "Which formula contains correlation?", why: "Correlation enters only the variance formula; expected return <b>stays the same</b> while risk falls." }
      ]
    },

    /* ===================================================== LESSON 7 */
    {
      id: "l7",
      title: "The power of diversification: correlation and many assets",
      summary: "How correlation drives risk reduction; equally weighted portfolios of N assets; why average covariance dominates as N grows; correlations rise in crises.",
      los: [5],
      sections: [
        {
          title: "Correlation is the engine",
          html: `
<p>Combining assets lowers risk whenever their correlation is <b>below +1</b>. The lower the correlation, the bigger the cut. Here are three made-up assets, each with an expected return of 8%, under three equally likely economic outcomes:</p>
<div class="table-wrap"><table>
<tr><th>Asset</th><th class="num">Boom</th><th class="num">Normal</th><th class="num">Slump</th></tr>
<tr><td>Steel maker</td><td class="num">16%</td><td class="num">8%</td><td class="num">0%</td></tr>
<tr><td>Car parts</td><td class="num">16%</td><td class="num">0%</td><td class="num">8%</td></tr>
<tr><td>Discount retailer</td><td class="num">0%</td><td class="num">8%</td><td class="num">16%</td></tr>
</table></div>
<ul>
<li><b>Steel + retailer</b> (50/50): 8%, 8%, 8% in every outcome. They move exactly opposite (ρ = −1): risk vanishes.</li>
<li><b>Steel + car parts</b>: 16%, 4%, 4%. They move together in the boom, so this pair keeps the most risk: the least risk reduction.</li>
<li>All pairs have the same expected return (8%). Only the risk differs.</li>
</ul>`
        },
        {
          title: "Many assets: variances fade, covariances stay",
          html: `
<p>For an equally weighted portfolio of N assets with average variance σ̄<sup>2</sup> and average covariance Cov̄:</p>
<div class="callout key"><span class="label">Equally weighted portfolio</span>σ<sub>p</sub><sup>2</sup> = σ̄<sup>2</sup> ÷ N + [(N − 1) ÷ N] × Cov̄ &nbsp; (with Cov̄ = ρ̄σ̄<sup>2</sup> when all assets have the same σ)</div>
<p>Shares with σ = 30% and average correlation 0.3 (so Cov̄ = 0.3 × 0.09 = 0.027):</p>
<figure class="diagram"><div class="bars">
  <div class="bar"><span>N = 1</span><span class="track"><span class="fill neg" style="width:100%"></span></span><span class="val">30.0%</span></div>
  <div class="bar"><span>N = 2</span><span class="track"><span class="fill" style="width:81%"></span></span><span class="val">24.2%</span></div>
  <div class="bar"><span>N = 10</span><span class="track"><span class="fill" style="width:61%"></span></span><span class="val">18.3%</span></div>
  <div class="bar"><span>N = 100</span><span class="track"><span class="fill pass" style="width:55%"></span></span><span class="val">16.6%</span></div>
  <div class="bar"><span>N → ∞</span><span class="track"><span class="fill pass" style="width:55%"></span></span><span class="val">16.4%</span></div>
</div><figcaption>Our own example. Risk falls fast at first, then levels off at √Cov̄ = √0.027 = 16.4%.</figcaption></figure>
<ul>
<li>As N grows, the first term (each asset's own variance) shrinks towards zero: individual variances <b>matter less and less</b>.</li>
<li>The second term tends to Cov̄: in a large portfolio the <b>average covariance</b> (co-movement) is what remains. It can't be diversified away.</li>
</ul>
<div class="callout trap"><span class="label">Crises</span>Correlations tend to <b>rise</b> when markets fall sharply. With the same weights and σs, a higher correlation means <b>higher</b> portfolio volatility: diversification helps least when it's needed most.</div>`
        }
      ],
      traps: [
        "Lowest-risk pair = <b>lowest correlation</b> (most opposite moves); least risk reduction = highest correlation.",
        "In a large equally weighted portfolio, <b>average covariance</b> dominates; individual variances fade.",
        "Higher correlation → higher portfolio σ (weights and σs unchanged).",
        "Diversification cuts risk without necessarily cutting expected return.",
        "Correlations rise in market crashes, so diversification benefits shrink then."
      ],
      quiz: [
        { q: "Three assets each expect 6%. Outcomes (equally likely): Asset 1: 12%, 0%, 6%; Asset 2: 0%, 6%, 12%; Asset 3: 12%, 6%, 0%. Which equally weighted pair has the lowest risk?", opts: ["Assets 1 and 2", "Assets 1 and 3", "Assets 2 and 3"], ans: 2, hint: "Average each pair outcome by outcome.", why: "Assets 2 and 3: 6%, 6%, 6%: <b>no risk</b> (perfect negative correlation). Pair 1–2 gives 6, 3, 9; pair 1–3 gives 12, 3, 3." },
        { q: "Same three assets: Asset 1: 12%, 0%, 6%; Asset 2: 0%, 6%, 12%; Asset 3: 12%, 6%, 0%. Which equally weighted pair gives the least risk reduction?", opts: ["Assets 1 and 2", "Assets 1 and 3", "Assets 2 and 3"], ans: 1, hint: "Which pair's outcomes are most spread out?", why: "Pair 1–3 returns 12%, 3%, 3%: the widest spread, so the <b>least risk reduction</b>. Pair 1–2 returns 6%, 3%, 9%; pair 2–3 returns 6% always." },
        { q: "As more assets are added to an equally weighted portfolio, the contribution of each asset's own variance to portfolio risk:", opts: ["decreases", "stays the same", "increases"], ans: 0, hint: "Look at σ̄² ÷ N.", why: "The variance term is divided by N, so it <b>decreases</b>." },
        { q: "For a large, equally weighted portfolio, the factor that contributes most to portfolio volatility is the:", opts: ["standard deviation of the riskiest asset", "average variance of individual assets", "average covariance between pairs of assets"], ans: 2, hint: "Which term survives as N grows?", why: "As N → ∞, σ<sub>p</sub><sup>2</sup> → <b>Cov̄</b>; individual variances fade away." },
        { q: "During a market crash, correlations between a portfolio's two assets rise. Weights and individual standard deviations do not change. Portfolio volatility will most likely:", opts: ["decrease", "increase", "stay the same"], ans: 1, hint: "Higher ρ → bigger cross term.", why: "A larger correlation increases the 2w<sub>1</sub>w<sub>2</sub>ρσ<sub>1</sub>σ<sub>2</sub> term, so volatility <b>increases</b>." },
        { q: "Shares each have σ = 30% and average pairwise correlation 0.3. The standard deviation of an equally weighted portfolio of 10 such shares is closest to:", opts: ["18.3%", "9.5%", "16.4%"], ans: 0, hint: "0.09 ÷ 10 + 0.9 × 0.027.", why: "0.009 + 0.0243 = 0.0333; √ = <b>18.3%</b>. 16.4% is the limit for an infinitely large portfolio; 9.5% is 30 ÷ √10, which assumes zero correlation." },
        { q: "Same shares (σ = 30%, average correlation 0.3). The lowest standard deviation achievable by adding ever more of them in equal weights is closest to:", opts: ["0%", "16.4%", "9.0%"], ans: 1, hint: "√Cov̄.", why: "√(0.3 × 0.09) = √0.027 = <b>16.4%</b>. Risk can't reach zero because the shares are positively correlated; 9.0% is ρ × σ, not a standard deviation." },
        { q: "Which statement about diversification is most accurate?", opts: ["It removes all risk if enough assets are held", "It always raises expected return", "It reduces risk without necessarily reducing expected return"], ans: 2, hint: "Correlation changes risk, not return.", why: "Diversification <b>lowers risk</b>; expected return is a weighted average and need not fall. Market-wide co-movement remains." },
        { q: "An investor holds two shares with correlation 0.9. To get the largest drop in risk from adding a third share, she should choose a share whose correlation with the first two is:", opts: ["as low as possible", "close to +1", "exactly 0.9"], ans: 0, hint: "What drives the cross terms?", why: "The <b>lower the correlation</b>, the smaller the cross terms and the larger the risk reduction." }
      ]
    },

    /* ===================================================== LESSON 8 */
    {
      id: "l8",
      title: "Efficient frontier, optimal risky portfolio and two-fund separation",
      summary: "Investment opportunity set; minimum-variance frontier; global minimum-variance portfolio; Markowitz efficient frontier; adding a risk-free asset: the optimal risky portfolio and two-fund separation.",
      los: [2, 6],
      sections: [
        {
          title: "From all possible portfolios to the efficient ones",
          html: `
<ul>
<li>The <b>investment opportunity set</b> is every (σ, E(R)) point you can build from the available risky assets.</li>
<li>For each level of expected return, keep only the portfolio with the <b>lowest risk</b>. Those points form the <b>minimum-variance frontier</b>, a curve opening to the right.</li>
<li>The leftmost point of that curve is the <b>global minimum-variance portfolio</b> (GMV): the lowest-risk portfolio of risky assets. It is attainable, but it is not usually the best risky portfolio once a risk-free asset is available.</li>
<li>The part of the frontier <b>above</b> the GMV is the <b>Markowitz efficient frontier</b>: highest return for each level of risk, and lowest risk for each level of return. Portfolios on the lower half are dominated: for the same risk there is a higher-return point straight above.</li>
</ul>
<figure class="diagram">
<svg viewBox="0 0 360 230" role="img" aria-label="Efficient frontier and capital allocation line" style="width:100%;max-width:480px;font-size:11px">
  <line x1="40" y1="200" x2="345" y2="200" style="stroke:var(--ink)"/><line x1="40" y1="200" x2="40" y2="12" style="stroke:var(--ink)"/>
  <text x="300" y="218" style="fill:var(--muted)">Risk σ</text><text x="6" y="18" style="fill:var(--muted)">E(R)</text>
  <path d="M230 185 Q 95 150 115 120 Q 135 70 300 35" style="fill:none;stroke:var(--line);stroke-width:2;stroke-dasharray:5 4"/>
  <path d="M115 120 Q 135 70 300 35" style="fill:none;stroke:var(--accent);stroke-width:3"/>
  <line x1="40" y1="160" x2="250" y2="16" style="stroke:var(--good);stroke-width:2"/>
  <circle cx="115" cy="120" r="4" style="fill:var(--ink)"/><text x="122" y="134" style="fill:var(--ink)">GMV</text>
  <circle cx="142" cy="90" r="5" style="fill:var(--good)"/><text x="150" y="104" style="fill:var(--good)">P (optimal risky)</text>
  <text x="44" y="155" style="fill:var(--muted)">r<tspan dy="3" font-size="8">f</tspan></text>
  <text x="250" y="75" style="fill:var(--accent)">efficient frontier</text>
  <text x="200" y="30" style="fill:var(--good)">best CAL</text>
  <text x="170" y="190" style="fill:var(--muted)">lower half: dominated</text>
</svg>
<figcaption>Our own sketch. The best CAL starts at r<sub>f</sub> and just touches the efficient frontier at P.</figcaption></figure>`
        },
        {
          title: "Adding the risk-free asset: the optimal risky portfolio",
          html: `
<p>A CAL can be drawn from r<sub>f</sub> to any risky portfolio. The steeper the line, the more return per unit of risk. The steepest possible CAL is the one that just <b>touches</b> the efficient frontier. The point it touches, P, is the <b>optimal risky portfolio</b>.</p>
<ul>
<li>This best CAL <b>dominates</b> the efficient frontier everywhere except at P itself: for any risk level, the line gives more return than the curve.</li>
<li>To the left of P, investors lend (hold some risk-free asset). To the right of P, the line can only beat the frontier because investors can <b>borrow at the risk-free rate</b> and buy more of P.</li>
<li>The efficient frontier itself ignores the risk-free rate: it is made only of risky assets.</li>
</ul>
<div class="callout key"><span class="label">Two-fund separation theorem</span>Every investor, whatever their risk aversion, holds a combination of just <b>two funds</b>: the risk-free asset and the same optimal risky portfolio P.<br>Step 1 (same for everyone): find P and the best CAL. Step 2 (personal): choose the point on that CAL using the investor's indifference curves.</div>
<p>So the <b>investment decision</b> (which risky portfolio) is separate from the <b>financing decision</b> (how much to lend or borrow), and only the second depends on the investor's risk preference.</p>`
        }
      ],
      traps: [
        "The efficient frontier does <b>not</b> use the risk-free rate (that's the CAL).",
        "GMV = lowest-σ portfolio of risky assets: attainable, but not the optimal risky portfolio.",
        "Efficient frontier = the part of the minimum-variance frontier <b>above</b> the GMV.",
        "Best CAL = r<sub>f</sub> + optimal risky portfolio (tangency point), not the GMV.",
        "Above P on the CAL, extra return comes from <b>borrowing</b> at r<sub>f</sub>.",
        "Two-fund separation: same risky portfolio for all; the mix depends on <b>risk preference</b>."
      ],
      quiz: [
        { q: "Which description of the efficient frontier of risky assets is least accurate? It is the set of portfolios with the:", opts: ["highest expected return for each level of risk", "highest expected return in excess of the risk-free rate per unit of risk", "lowest risk for each level of expected return"], ans: 1, hint: "Does the frontier involve r<sub>f</sub>?", why: "The efficient frontier is built from risky assets only; return in excess of r<sub>f</sub> per unit of risk describes the <b>CAL</b>, so that statement is least accurate." },
        { q: "The portfolio on the minimum-variance frontier with the lowest standard deviation is the:", opts: ["optimal risky portfolio", "global minimum-variance portfolio", "market portfolio"], ans: 1, hint: "Leftmost point.", why: "The leftmost point is the <b>global minimum-variance portfolio</b>." },
        { q: "Portfolios on the minimum-variance frontier below the global minimum-variance portfolio are:", opts: ["the best choice for risk-averse investors", "dominated by portfolios above it with the same risk", "unattainable"], ans: 1, hint: "Same σ, which point has higher return?", why: "For the same σ there is a point on the upper half with higher return, so they are <b>dominated</b>." },
        { q: "The best (dominant) capital allocation line combines the risk-free asset with:", opts: ["the global minimum-variance portfolio", "the optimal risky portfolio", "the riskiest asset available"], ans: 1, hint: "Which point gives the steepest line?", why: "The steepest CAL touches the frontier at the <b>optimal risky portfolio</b>. A line to the GMV is flatter." },
        { q: "Beyond the optimal risky portfolio, the best CAL offers higher returns than the efficient frontier for the same risk because investors can:", opts: ["borrow at the risk-free rate", "lend at the risk-free rate", "short-sell the risk-free asset only in theory"], ans: 0, hint: "How do you get more risk than P on a straight line?", why: "Points beyond P require <b>borrowing</b> at r<sub>f</sub> to buy more of P. Lending applies to points left of P." },
        { q: "According to the two-fund separation theorem, investors with different risk aversion will hold:", opts: ["different risky portfolios", "the same risky portfolio in different proportions with the risk-free asset", "only the global minimum-variance portfolio"], ans: 1, hint: "Two funds for everyone.", why: "Everyone holds the <b>same optimal risky portfolio</b>; only the split with the risk-free asset differs." },
        { q: "Ravi is more risk averse than Meena. Both use the same best CAL. Compared with Meena, Ravi's portfolio most likely has:", opts: ["a different optimal risky portfolio", "a larger weight in the risk-free asset", "a higher expected return"], ans: 1, hint: "Same risky fund, different mix.", why: "Ravi's steeper curves touch the CAL closer to r<sub>f</sub>: <b>more in the risk-free asset</b>, lower expected return, same risky portfolio." },
        { q: "Risk-free rate 3%. Risky portfolio X: E = 9%, σ = 12%. Risky portfolio Y: E = 12%, σ = 20%. Which forms the better CAL?", opts: ["X, because its slope is higher", "Y, because its expected return is higher", "Both are equally good"], ans: 0, hint: "Compare (E − r<sub>f</sub>) ÷ σ.", why: "X: 6 ÷ 12 = 0.50; Y: 9 ÷ 20 = 0.45. <b>X</b> gives the steeper line; investors wanting more return can borrow and lever X." },
        { q: "In mean–variance theory, the investor's optimal portfolio is determined in the final step by the investor's:", opts: ["borrowing rate", "risk preference", "risk-free rate"], ans: 1, hint: "Step 2 of two-fund separation.", why: "The point on the CAL is chosen by the investor's <b>risk preference</b> (indifference curves)." }
      ]
    }
  ],

  /* ===================================================== MODULE QUIZ */
  moduleQuiz: [
    { lesson: 1, q: "The real risk-free rate is 2%, expected inflation 3% and a share's risk premium 6%. Using the exact relation, the share's nominal expected return is closest to:", opts: ["11.00%", "9.18%", "11.36%"], ans: 2, hint: "1.02 × 1.03 × 1.06 − 1.", why: "1.02 × 1.03 × 1.06 = 1.1136: <b>11.36%</b>. 11.00% is the simple sum; 9.18% leaves out the real risk-free rate (1.03 × 1.06 − 1)." },
    { lesson: 1, q: "A fund gained 40% and then lost 30%. Its geometric mean annual return is closest to:", opts: ["5.0%", "0.0%", "−1.0%"], ans: 2, hint: "√(1.40 × 0.70) − 1.", why: "1.40 × 0.70 = 0.98; √0.98 = 0.9899: <b>−1.0%</b>. 5.0% is the arithmetic mean." },
    { lesson: 1, q: "Long-run evidence that riskier asset classes have earned higher average returns is best described as a risk–return relationship that is:", opts: ["positive", "negative", "neutral"], ans: 0, hint: "Evidence of risk aversion.", why: "A <b>positive</b> relationship: investors demand more return for more risk." },
    { lesson: 1, q: "Which asset class has historically had the lowest real (after-inflation) return?", opts: ["Small company shares", "Large company shares", "Treasury bills"], ans: 2, hint: "Safe and short-term.", why: "<b>Treasury bills</b> have earned little above inflation." },
    { lesson: 2, q: "A security's liquidity is least likely to affect its:", opts: ["bid–ask spread", "selling price when a large block is sold", "brokerage commission"], ans: 2, hint: "Negotiated cost.", why: "<b>Commissions</b> are negotiated with the broker; spreads and price impact depend on liquidity." },
    { lesson: 2, q: "A hedge fund strategy earns small gains in most months but suffers occasional very large losses. Its return distribution most likely shows:", opts: ["positive skewness", "a normal distribution", "negative skewness and fat tails"], ans: 2, hint: "Long left tail, extreme events.", why: "Occasional big losses = long left tail (<b>negative skew</b>) and extreme events (<b>fat tails</b>)." },
    { lesson: 2, q: "If returns have high kurtosis, a risk model that assumes normality will most likely:", opts: ["overstate the chance of extreme losses", "understate the chance of extreme losses", "measure tail risk correctly"], ans: 1, hint: "Fat tails vs the bell curve.", why: "Fat tails mean extreme outcomes are more likely than the normal curve says, so the model <b>understates</b> them." },
    { lesson: 3, q: "Funds: J (E = 10%, σ = 12%), K (E = 14%, σ = 24%), L (E = 18%, σ = 36%). Which fund does an investor with A = 3 choose?", opts: ["L", "K", "J"], ans: 2, hint: "U = E − 1.5σ².", why: "J: 0.10 − 0.0216 = 0.0784; K: 0.14 − 0.0864 = 0.0536; L: 0.18 − 0.1944 = −0.0144. <b>J</b>." },
    { lesson: 3, q: "Same funds: J (10%, 12%), K (14%, 24%), L (18%, 36%). Which fund does an investor with A = −1 choose?", opts: ["J", "K", "L"], ans: 2, hint: "U = E + 0.5σ².", why: "J: 0.1072; K: 0.1688; L: 0.18 + 0.0648 = 0.2448. The risk seeker picks <b>L</b>." },
    { lesson: 3, q: "Same funds: J (10%, 12%), K (14%, 24%), L (18%, 36%). An investor with A = 1 chooses:", opts: ["J", "K", "L"], ans: 2, hint: "U = E − 0.5σ².", why: "J: 0.10 − 0.0072 = 0.0928; K: 0.14 − 0.0288 = 0.1112; L: 0.18 − 0.0648 = 0.1152. <b>L</b> narrowly beats K." },
    { lesson: 3, q: "Which statement about the risk-aversion coefficient A is correct?", opts: ["A = 0 describes the least risk-averse investor possible", "A higher A means a larger utility penalty for the same variance", "A must be positive for all investors"], ans: 1, hint: "Penalty = ½Aσ².", why: "The penalty is ½Aσ², so a <b>higher A, bigger penalty</b>. A can be negative (risk seeker), which is less averse than A = 0." },
    { lesson: 3, q: "An investment with E = 6% and σ = 0% gives an investor with A = 8 a utility of:", opts: ["0.00", "−0.02", "0.06"], ans: 2, hint: "No variance, no penalty.", why: "U = 0.06 − 0 = <b>0.06</b>, the same for every investor." },
    { lesson: 4, q: "Risk-free rate 4%; risky portfolio E = 10%, σ = 15%. An investor wants a portfolio on the CAL with an expected return of 13%. Its standard deviation is:", opts: ["19.5%", "22.5%", "15.0%"], ans: 1, hint: "w = (13 − 4) ÷ (10 − 4).", why: "w = 9 ÷ 6 = 1.5, so σ = 1.5 × 15 = <b>22.5%</b> (borrowing 50% of wealth). 19.5% uses 13 ÷ 10 × 15." },
    { lesson: 4, q: "Risk-free rate 4%; risky portfolio E = 10%, σ = 15%. An investor has A = 2. Her optimal weight in the risky portfolio is closest to:", opts: ["133%", "67%", "267%"], ans: 0, hint: "0.06 ÷ (2 × 0.0225).", why: "0.06 ÷ 0.045 = <b>1.33</b>: she borrows a third of her wealth to hold 133% in the risky portfolio. 67% would suit an investor with A = 4; 267% one with A = 1." },
    { lesson: 4, q: "The most risk-averse of three investors will have indifference curves with the:", opts: ["flattest shape", "smallest intercept", "greatest slope"], ans: 2, hint: "More return needed per unit of risk.", why: "The <b>steepest</b> curves belong to the most risk-averse investor." },
    { lesson: 4, q: "The capital allocation line is the set of combinations of the risk-free asset and:", opts: ["all equity securities", "a portfolio of risky assets", "all feasible investments, including the risk-free asset twice"], ans: 1, hint: "Two ingredients.", why: "CAL = risk-free asset + <b>a portfolio of risky assets</b>." },
    { lesson: 4, q: "On a CAL, an investor's portfolio has a standard deviation of 9% when the risky portfolio's σ is 18%. The investor is:", opts: ["holding 100% in the risky portfolio", "borrowing 50% of wealth", "lending: 50% in the risk-free asset"], ans: 2, hint: "w = σ<sub>p</sub> ÷ σ<sub>i</sub>.", why: "w = 9 ÷ 18 = 0.5: half risky, half risk-free, so <b>lending</b>." },
    { lesson: 4, q: "Why can an investor's optimal portfolio not lie above the capital allocation line?", opts: ["It would have too much risk", "No combination of available assets reaches it", "Risk-averse investors dislike high returns"], ans: 1, hint: "What is the CAL made of?", why: "The CAL is the best that the available assets can deliver; points above it are <b>unattainable</b>." },
    { lesson: 5, q: "Returns of Fund P: 8%, −2%, 12%; Fund Q: 3%, 1%, 5%. The sample covariance of P and Q is:", opts: ["0.00093", "0.00140", "0.00280"], ans: 1, hint: "Means 6% and 3%; deviations P: 2, −8, 6; Q: 0, −2, 2.", why: "Products: 0 + 16 + 12 = 28; ÷ 2 = 14 (%²) = <b>0.00140</b>. 0.00093 divides by 3; 0.00280 doesn't divide." },
    { lesson: 5, q: "Fund P (8%, −2%, 12%) has a sample standard deviation of 7.2% and Fund Q (3%, 1%, 5%) one of 2.0%. Their covariance is 0.0014. The correlation is closest to:", opts: ["0.49", "0.10", "0.97"], ans: 2, hint: "0.0014 ÷ (0.072 × 0.020).", why: "0.0014 ÷ 0.00144 = <b>0.97</b>: they move almost in lockstep." },
    { lesson: 5, q: "Two assets have a correlation of 0.25 and standard deviations of 40% and 20%. Their covariance is:", opts: ["0.0200", "0.0800", "0.0050"], ans: 0, hint: "0.25 × 0.40 × 0.20.", why: "= <b>0.0200</b>." },
    { lesson: 5, q: "A positive covariance between two assets means that:", opts: ["when one is above its mean, the other tends to be above its mean", "both assets always earn positive returns", "the assets have a correlation of exactly +1"], ans: 0, hint: "Covariance measures co-movement around the means.", why: "Positive covariance means they <b>tend to be above (or below) their means together</b>; it says nothing about the sign of returns." },
    { lesson: 6, q: "A portfolio is 30% in Asset 1 (σ = 24%) and 70% in Asset 2 (σ = 14%). The correlation is 0.5. The portfolio standard deviation is closest to:", opts: ["17.0%", "14.8%", "13.5%"], ans: 1, hint: "0.09(0.0576) + 0.49(0.0196) + 2(0.3)(0.7)(0.5)(0.24)(0.14).", why: "0.005184 + 0.009604 + 0.007056 = 0.021844; √ = <b>14.8%</b>. 17.0% is the weighted average of the σs (true only if ρ = 1); 13.5% leaves the 2 out of the cross term." },
    { lesson: 6, q: "A portfolio is 30% in Asset 1 (σ = 20%) and 70% in Asset 2 (σ = 12%). If the covariance is −0.0100, the portfolio standard deviation is closest to:", opts: ["10.3%", "8.0%", "14.4%"], ans: 1, hint: "0.0036 + 0.007056 + 2(0.3)(0.7)(−0.01).", why: "0.0036 + 0.007056 − 0.0042 = 0.006456; √ = <b>8.0%</b>. 10.3% ignores the covariance term; 14.4% is the weighted average of the σs." },
    { lesson: 6, q: "Asset 1 expects 16% and Asset 2 expects 10%. What weight in Asset 1 gives a portfolio expected return of 14.5%?", opts: ["75%", "25%", "90.6%"], ans: 0, hint: "14.5 = 10 + 6w.", why: "w = 4.5 ÷ 6 = <b>75%</b>." },
    { lesson: 6, q: "A 25/75 portfolio of two assets with σ = 24% and 12% has a portfolio σ of exactly 15%. The correlation between the assets is:", opts: ["+1", "−1", "0"], ans: 0, hint: "Weighted average of σs: 6 + 9.", why: "0.25 × 24 + 0.75 × 12 = 15%: equal to the weighted average, so ρ = <b>+1</b>." },
    { lesson: 6, q: "An equally weighted portfolio holds two assets, each with σ = 24%, correlation −0.2. Its standard deviation is closest to:", opts: ["17.0%", "24.0%", "15.2%"], ans: 2, hint: "0.25(0.0576) × 2 + 2(0.25)(−0.2)(0.0576).", why: "0.0288 − 0.00576 = 0.02304; √ = <b>15.2%</b>. 17.0% would be ρ = 0." },
    { lesson: 7, q: "Which change would most reduce the risk of a two-asset portfolio, holding weights and standard deviations constant?", opts: ["Raising the correlation from 0.2 to 0.6", "Lowering the correlation from 0.2 to −0.4", "Raising both expected returns"], ans: 1, hint: "Only correlation enters the cross term.", why: "A <b>lower correlation</b> shrinks the cross term; expected returns don't affect risk." },
    { lesson: 7, q: "Shares with σ = 40% and an average pairwise correlation of 0.25. The standard deviation of an equally weighted portfolio of 20 such shares is closest to:", opts: ["21.4%", "20.0%", "8.9%"], ans: 0, hint: "0.16 ÷ 20 + 0.95 × 0.04.", why: "0.008 + 0.038 = 0.046; √ = <b>21.4%</b>. 20.0% is the infinite-N limit √0.04; 8.9% is 40 ÷ √20 (zero correlation)." },
    { lesson: 7, q: "In a portfolio of many assets, an analyst says: 'What matters most for risk is how each share moves with the others.' This is:", opts: ["correct: average covariance dominates as N grows", "incorrect: individual variances always dominate", "incorrect: expected returns determine risk"], ans: 0, hint: "Which term survives?", why: "With many assets, <b>average covariance</b> dominates portfolio variance." },
    { lesson: 7, q: "Why does diversification often disappoint during financial crises?", opts: ["Correlations between assets tend to rise", "Expected returns become equal", "Standard deviations fall to zero"], ans: 0, hint: "Everything falls together.", why: "In crises assets fall together: <b>correlations rise</b>, so diversification helps less." },
    { lesson: 8, q: "Which portfolio is attainable but is generally not the optimal risky portfolio when a risk-free asset is available?", opts: ["The global minimum-variance portfolio", "A portfolio above the capital allocation line", "The tangency portfolio"], ans: 0, hint: "Lowest risk ≠ best risk-return trade-off.", why: "The <b>GMV</b> is attainable, but the best CAL touches the frontier at the tangency (optimal risky) portfolio. Points above the CAL can't be reached." },
    { lesson: 8, q: "The Markowitz efficient frontier is the part of the minimum-variance frontier that:", opts: ["lies above the global minimum-variance portfolio", "lies below the global minimum-variance portfolio", "includes the risk-free asset"], ans: 0, hint: "Upper half.", why: "The efficient frontier is the <b>upper part</b>, from the GMV upwards." },
    { lesson: 8, q: "Risk-free rate 2%. Portfolio A: E = 8%, σ = 10%. Portfolio B: E = 11%, σ = 18%. Portfolio C: E = 14%, σ = 25%. Which risky portfolio gives the steepest CAL?", opts: ["A", "B", "C"], ans: 0, hint: "(E − 2) ÷ σ for each.", why: "A: 0.60; B: 0.50; C: 0.48. <b>A</b> gives the steepest line." },
    { lesson: 8, q: "Under two-fund separation, the decision that is the same for all investors is:", opts: ["how much to borrow or lend", "which risky portfolio to hold", "the point chosen on the CAL"], ans: 1, hint: "Step 1 vs step 2.", why: "Choosing <b>the optimal risky portfolio</b> is common to all; borrowing/lending depends on risk preference." },
    { lesson: 8, q: "Compared with the efficient frontier of risky assets alone, combining the risk-free asset with the optimal risky portfolio produces portfolios that are:", opts: ["dominated at every risk level", "better at every risk level except at the optimal risky portfolio, where they are equal", "better only for risk-seeking investors"], ans: 1, hint: "Line vs curve, touching at one point.", why: "The best CAL lies <b>above the frontier everywhere except at the tangency point</b>, where they meet." },
    { lesson: 1, q: "Which statement about the equity risk premium is most accurate?", opts: ["It is the return of shares minus inflation", "It is the return of shares minus the risk-free rate", "It is the return of bonds minus the return of bills"], ans: 1, hint: "Premium over risk-free.", why: "Equity risk premium = share return <b>minus the risk-free rate</b>. Share return minus inflation is a real return." },
    { lesson: 2, q: "Mean–variance analysis may understate the risk of an asset whose returns are:", opts: ["negatively skewed with fat tails", "normally distributed", "risk-free"], ans: 0, hint: "What do two numbers miss?", why: "Mean and variance miss the extra crash risk of <b>negative skew and fat tails</b>." }
  ]
});
