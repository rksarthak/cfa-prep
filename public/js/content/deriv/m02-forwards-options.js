/*
 * Derivatives · Module 2 – Forward Commitment and Contingent Claim Features and Instruments
 * Original teaching text, examples and questions. The CFA Program curriculum is used only as a private
 * benchmark of topics and level; none of its text, exhibits or practice problems is reproduced.
 *
 * Question format: { q, opts:[A,B,C], ans:0|1|2, hint, why, lesson? }
 */
CFA.registerModule("deriv", {
  num: 2,
  title: "Forward Commitment and Contingent Claim Features and Instruments",
  intro: "Now we meet the instruments one by one: forwards, futures and swaps (both sides must perform), then options and credit default swaps (one side chooses, or payment depends on an event). For each you will learn who pays whom, how to draw the payoff, and how to calculate the value at expiry and the profit for a long or short position. The module ends by comparing the two families for the same hedging job.",
  los: [
    "Describe forwards, futures, swaps, options (calls and puts) and credit derivatives, and compare their main features",
    "Calculate the value at expiry and the profit of a long or short call or put",
    "Contrast forward commitments with contingent claims"
  ],
  lessons: [

    /* ===================================================== LESSON 1 */
    {
      id: "l1",
      title: "Forward contracts",
      summary: "An OTC agreement to trade later at a price fixed today; payoff of the long and short at maturity; no money at the start; credit risk.",
      los: [0, 2],
      sections: [
        {
          title: "The idea in plain words",
          html: `
<p>A <b>forward contract</b> is a private (OTC) agreement to buy or sell an underlying at a <b>future date</b> (T) at a price fixed <b>today</b>, the <b>forward price</b>, written F<sub>0</sub>(T). Nothing is paid when it is signed: the forward price is set so that the deal is fair to both sides, so its value at the start is zero.</p>
<p>At maturity, the underlying is worth its spot price then, S<sub>T</sub>.</p>
<div class="tiles">
  <div class="tile"><h4>Long forward (buyer)</h4><p>Must pay F<sub>0</sub>(T) for something worth S<sub>T</sub>.</p><p><b>Payoff = S<sub>T</sub> − F<sub>0</sub>(T)</b></p><p>Gains if the price rises above F<sub>0</sub>(T).</p></div>
  <div class="tile c2"><h4>Short forward (seller)</h4><p>Must deliver something worth S<sub>T</sub> and receives F<sub>0</sub>(T).</p><p><b>Payoff = F<sub>0</sub>(T) − S<sub>T</sub></b></p><p>Gains if the price falls below F<sub>0</sub>(T).</p></div>
</div>
<p>Because nothing is paid at the start, <b>payoff = profit</b> for a forward.</p>`
        },
        {
          title: "Worked example",
          html: `
<p>Meridian Jewellers agrees today to buy 100 ounces of gold in 6 months at F<sub>0</sub>(T) = USD 2,050 per ounce from a bank.</p>
<div class="table-wrap"><table>
<tr><th>Gold price at maturity S<sub>T</sub></th><th class="num">Long (Meridian) per oz</th><th class="num">Short (bank) per oz</th><th class="num">Long, 100 oz</th></tr>
<tr><td>1,950</td><td class="num">−100</td><td class="num">+100</td><td class="num">−10,000</td></tr>
<tr><td>2,050</td><td class="num">0</td><td class="num">0</td><td class="num">0</td></tr>
<tr><td>2,180</td><td class="num">+130</td><td class="num">−130</td><td class="num">+13,000</td></tr>
</table></div>
<figure class="diagram"><div class="bars">
  <div class="bar"><span>S<sub>T</sub> 1,950</span><span class="track"><span class="fill neg" style="width:38%"></span></span><span class="val">−100</span></div>
  <div class="bar"><span>S<sub>T</sub> 2,050</span><span class="track"><span class="fill" style="width:1%"></span></span><span class="val">0</span></div>
  <div class="bar"><span>S<sub>T</sub> 2,180</span><span class="track"><span class="fill pass" style="width:50%"></span></span><span class="val">+130</span></div>
</div><figcaption>Long forward payoff per ounce: a straight line through zero at the forward price. The short's payoff is the mirror image.</figcaption></figure>
<p>Note the symmetry: unlimited gain and (almost) unlimited loss for both sides. That is the <b>linear</b> payoff of a firm commitment.</p>`
        },
        {
          title: "Features of forwards",
          html: `
<ul>
<li><b>OTC and customised</b>: any underlying, size and date.</li>
<li><b>Settled at maturity</b>: by delivery, or by a cash payment of the difference (a <b>non-deliverable forward</b>, common for currencies that can't be freely exchanged, settles in cash).</li>
<li><b>Counterparty credit risk</b>: no money changes hands until the end, so the winner relies on the loser paying. Unless collateralised, the exposure can build up over the whole life.</li>
</ul>`
        }
      ],
      traps: [
        "<b>Long forward payoff = S<sub>T</sub> − F<sub>0</sub>(T); short = F<sub>0</sub>(T) − S<sub>T</sub>.</b>",
        "<b>No premium:</b> a forward's value at inception is zero, so payoff = profit.",
        "<b>Forward price ≠ value.</b> The price is the agreed exchange price; the value is what the contract is worth to one side.",
        "<b>Losses are not limited</b> for either side of a forward."
      ],
      quiz: [
        {
          q: "A long forward on 1,000 shares has a forward price of ₹840. At maturity the share price is ₹795. The long's payoff is:",
          opts: ["−₹45,000", "+₹45,000", "₹0, because the long can walk away"],
          ans: 0,
          hint: "(S<sub>T</sub> − F) × quantity.",
          why: "(795 − 840) × 1,000 = <b>−₹45,000</b>. A forward is a firm commitment: the long cannot walk away."
        },
        {
          q: "Same forward (F = ₹840, 1,000 shares, S<sub>T</sub> = ₹795). The short's profit is:",
          opts: ["−₹45,000", "₹0", "+₹45,000"],
          ans: 2,
          hint: "Mirror image; no premium.",
          why: "F − S<sub>T</sub> = 45 per share: <b>+₹45,000</b>, and profit = payoff because nothing was paid at the start."
        },
        {
          q: "At the start of a forward contract, the amount paid by the long to the short is normally:",
          opts: ["the forward price", "a premium equal to the expected gain", "zero"],
          ans: 2,
          hint: "Fair to both sides.",
          why: "The forward price is set so the contract is worth <b>zero</b> at inception; nothing is paid."
        },
        {
          q: "Which risk is most associated with an uncollateralised forward?",
          opts: ["Counterparty credit risk", "Daily margin calls", "Loss of the premium paid"],
          ans: 0,
          hint: "Private contract, settled at the end.",
          why: "A forward is settled only at maturity, so the winner depends on the loser paying: <b>credit risk</b>. Margin calls are a futures feature."
        },
        {
          q: "A forward on wheat is settled by a cash payment rather than delivery. Compared with physical delivery, the economic result for the long is:",
          opts: ["better, because no wheat is received", "worse, because the long loses the forward price", "the same, if the long then buys wheat in the spot market"],
          ans: 2,
          hint: "Difference payment plus spot purchase.",
          why: "Receiving S<sub>T</sub> − F and buying at S<sub>T</sub> costs F in total: the <b>same</b> result as delivery."
        },
        {
          q: "An investor is short a forward on a currency at F<sub>0</sub>(T) = 1.0850. The investor gains if at maturity the spot rate is:",
          opts: ["1.1000", "1.0850", "1.0700"],
          ans: 2,
          hint: "Short gains when the price falls.",
          why: "Short payoff = F − S<sub>T</sub> = 1.0850 − 1.0700 &gt; 0 at <b>1.0700</b>."
        },
        {
          q: "Which statement about forwards is most accurate?",
          opts: ["The long's maximum gain is limited to the forward price", "Only the short faces losses", "The long's maximum loss equals the forward price"],
          ans: 2,
          hint: "How low can S<sub>T</sub> go?",
          why: "The worst case for the long is S<sub>T</sub> = 0, a loss of <b>F<sub>0</sub>(T)</b>. The long's gain is unlimited; the short can lose."
        },
        {
          q: "A forward contract on a currency that cannot be freely exchanged is usually settled by:",
          opts: ["physical delivery of the currency", "a cash payment of the difference in a freely traded currency", "an exchange clearinghouse"],
          ans: 1,
          hint: "Non-deliverable forward.",
          why: "A <b>non-deliverable forward</b> settles the <b>difference in cash</b> (often in USD)."
        }
      ]
    },

    /* ===================================================== LESSON 2 */
    {
      id: "l2",
      title: "Futures contracts and margin",
      summary: "Standardised exchange-traded forwards; initial and maintenance margin; daily settlement (mark to market); margin calls and variation margin.",
      los: [0],
      sections: [
        {
          title: "The idea in plain words",
          html: `
<p>A <b>futures contract</b> is a forward that has been standardised and moved onto an exchange. The big difference is <b>daily settlement</b>: instead of waiting until maturity, gains and losses are paid every day through <b>margin accounts</b> held with the clearinghouse.</p>
<div class="callout analogy"><span class="label">Analogy</span>A forward is a bar tab paid at the end of the night. Futures are “pay as you go”: each round is settled immediately, so nobody can run up a huge unpaid bill.</div>
<div class="table-wrap"><table>
<tr><th>Term</th><th>Meaning</th></tr>
<tr><td><b>Initial margin</b></td><td>Deposit required to open a position (a performance bond, not a down payment)</td></tr>
<tr><td><b>Maintenance margin</b></td><td>The minimum balance the account may fall to</td></tr>
<tr><td><b>Margin call</b></td><td>Demand to top up when the balance falls <b>below</b> maintenance</td></tr>
<tr><td><b>Variation margin</b></td><td>The top-up, which brings the account back to the <b>initial</b> margin level</td></tr>
<tr><td><b>Settlement price</b></td><td>The official end-of-day price used for daily settlement</td></tr>
</table></div>`
        },
        {
          title: "Worked example: following a margin account",
          html: `
<p>Kaveri Capital buys (goes long) 1 gold futures contract on 100 oz at USD 2,000. Initial margin USD 8,000; maintenance margin USD 6,000.</p>
<div class="table-wrap"><table>
<tr><th>Day</th><th class="num">Settlement price</th><th class="num">Daily gain/loss (× 100 oz)</th><th class="num">Balance before top-up</th><th class="num">Variation margin</th><th class="num">Balance after</th></tr>
<tr><td>0</td><td class="num">2,000</td><td class="num">–</td><td class="num">8,000</td><td class="num">–</td><td class="num">8,000</td></tr>
<tr><td>1</td><td class="num">1,985</td><td class="num">−1,500</td><td class="num">6,500</td><td class="num">0 (above 6,000)</td><td class="num">6,500</td></tr>
<tr><td>2</td><td class="num">1,970</td><td class="num">−1,500</td><td class="num">5,000</td><td class="num">3,000</td><td class="num">8,000</td></tr>
<tr><td>3</td><td class="num">2,010</td><td class="num">+4,000</td><td class="num">12,000</td><td class="num">–</td><td class="num">12,000 (excess can be withdrawn)</td></tr>
</table></div>
<p>On day 2 the balance fell below 6,000, so Kaveri gets a margin call and must deposit <b>3,000</b> to return to the <b>initial</b> 8,000 (not just to 6,000).</p>
<p><b>At what price does the first margin call come?</b> The account can lose 8,000 − 6,000 = 2,000 before a call. Per ounce: 2,000 ÷ 100 = 20. So any settlement price below 2,000 − 20 = <b>1,980</b> triggers a call.</p>
<div class="callout key"><span class="label">Daily reset</span>Each day the contract is marked to market and its value is reset to zero at the new settlement price. Over the life, the total of the daily gains and losses equals the forward-style total: (final price − original price) × size.</div>`
        },
        {
          title: "Forwards vs futures",
          html: `
<div class="table-wrap"><table>
<tr><th></th><th>Forward</th><th>Futures</th></tr>
<tr><td>Where</td><td>OTC, private</td><td>Exchange</td></tr>
<tr><td>Terms</td><td>Customised</td><td>Standardised</td></tr>
<tr><td>Gains/losses paid</td><td>At maturity</td><td>Daily (mark to market)</td></tr>
<tr><td>Credit risk</td><td>Counterparty</td><td>Clearinghouse (very low)</td></tr>
<tr><td>Usually closed by</td><td>Settlement at maturity</td><td>An offsetting trade before expiry</td></tr>
<tr><td>Regulation</td><td>Lighter (now with reporting and clearing rules)</td><td>Exchange and regulator rules, price limits</td></tr>
</table></div>
<p>Most futures positions are <b>closed before expiry</b> by taking the opposite position; few end in delivery.</p>`
        }
      ],
      traps: [
        "<b>Variation margin restores the account to the initial margin</b>, not to maintenance.",
        "<b>Margin call trigger:</b> allowed loss = initial − maintenance; divide by contract size for the price move.",
        "<b>Futures margin is a performance bond</b>, not a loan or down payment.",
        "<b>Daily settlement</b> is the key difference from forwards and cuts credit risk.",
        "Excess above the initial margin can be withdrawn."
      ],
      quiz: [
        {
          q: "A trader is short 1 futures contract on 5,000 bushels at USD 6.00. Initial margin USD 2,500; maintenance USD 2,000. The next settlement price is USD 6.15. The account balance is then:",
          opts: ["USD 1,750, triggering a call for USD 750", "USD 3,250", "USD 1,750, triggering a call for USD 250"],
          ans: 0,
          hint: "A short loses when the price rises.",
          why: "Loss = 0.15 × 5,000 = 750 → balance 1,750 &lt; 2,000. Top up to the <b>initial</b> 2,500: <b>750</b>. C tops up only to maintenance."
        },
        {
          q: "Long 1 contract of 25,000 lb copper at USD 4.20 per lb. Initial margin USD 9,000; maintenance USD 6,500. Below what settlement price does the first margin call occur?",
          opts: ["USD 4.10", "USD 3.84", "USD 4.06"],
          ans: 0,
          hint: "Allowed loss 2,500 ÷ 25,000 lb.",
          why: "2,500 ÷ 25,000 = 0.10 → <b>4.10</b>. B uses the whole initial margin (ignores maintenance)."
        },
        {
          q: "When a futures account receives a margin call, the trader must deposit enough to bring the balance back to:",
          opts: ["the maintenance margin", "zero", "the initial margin"],
          ans: 2,
          hint: "Not just the minimum.",
          why: "The top-up (variation margin) restores the <b>initial</b> margin level."
        },
        {
          q: "Which is the most important difference between futures and forwards?",
          opts: ["Futures have a premium; forwards do not", "Futures can only be cash-settled", "Futures gains and losses are settled daily; forward gains and losses are settled at maturity"],
          ans: 2,
          hint: "Pay as you go.",
          why: "<b>Daily settlement</b> through margin accounts. Neither has a premium; futures can be delivered or cash-settled."
        },
        {
          q: "A trader is long 2 index futures (multiplier ₹50 per point) bought at 22,000. Over three days settlement prices are 22,120, 21,950 and 22,080. The total gain over the three days is:",
          opts: ["₹8,000", "₹4,000", "₹13,000"],
          ans: 0,
          hint: "Total = (final − original) × multiplier × contracts.",
          why: "(22,080 − 22,000) × 50 × 2 = <b>₹8,000</b>, the same as adding the daily amounts (+12,000 − 17,000 + 13,000). B forgets the 2 contracts."
        },
        {
          q: "Initial margin in a futures account is best described as:",
          opts: ["a down payment on the underlying", "a loan from the broker", "collateral that guarantees performance"],
          ans: 2,
          hint: "Performance bond.",
          why: "Margin is <b>collateral</b> (a performance bond), not part-payment for the asset."
        },
        {
          q: "Most futures positions end by:",
          opts: ["physical delivery", "cancellation by the exchange", "an offsetting trade before expiry"],
          ans: 2,
          hint: "How do traders exit?",
          why: "Traders usually <b>close out</b> by taking the opposite position before expiry."
        },
        {
          q: "A long futures account has initial margin USD 5,000 and maintenance USD 3,500. After a gain, the balance is USD 7,200. The trader may withdraw:",
          opts: ["USD 3,700", "USD 2,200", "nothing until the contract expires"],
          ans: 1,
          hint: "Excess over the initial margin.",
          why: "7,200 − 5,000 = <b>USD 2,200</b>. A measures the excess over maintenance."
        },
        {
          q: "Daily settlement of futures mainly reduces:",
          opts: ["market risk", "basis risk", "counterparty credit risk"],
          ans: 2,
          hint: "No large unpaid balances build up.",
          why: "Losses are collected each day, so <b>credit exposure</b> stays small."
        }
      ]
    },

    /* ===================================================== LESSON 3 */
    {
      id: "l3",
      title: "Swaps",
      summary: "A series of future exchanges; fixed-for-floating interest rate swaps; netting payments; the notional is not exchanged; swaps as a series of forwards.",
      los: [0],
      sections: [
        {
          title: "The idea in plain words",
          html: `
<p>A <b>swap</b> is an agreement to exchange a <b>series</b> of cash flows on several future dates. A forward is one exchange; a swap is many.</p>
<p>The most common is the <b>interest rate swap</b>: one side pays a <b>fixed</b> rate, the other pays a <b>floating</b> rate tied to a <b>market reference rate (MRR)</b> such as SOFR, SONIA or MIBOR, both on the same <b>notional</b> amount. The notional itself is <b>not</b> exchanged; it is only used to calculate the payments.</p>
<div class="tiles">
  <div class="tile"><h4>Fixed-rate payer</h4><p>Pays fixed, receives floating.</p><p>Gains if the floating rate <b>rises</b>.</p></div>
  <div class="tile c2"><h4>Fixed-rate receiver</h4><p>Receives fixed, pays floating (the floating-rate payer).</p><p>Gains if the floating rate <b>falls</b>.</p></div>
</div>`
        },
        {
          title: "Worked example: netting a payment",
          html: `
<p>Ganga Power has a ₹50 crore floating-rate loan and fears rates will rise. It enters a swap with a bank: Ganga <b>pays 7.0% fixed</b> and <b>receives MIBOR-based floating</b>, semiannually, on ₹50 crore notional.</p>
<p>For the first six-month period the floating rate is set at 6.2%.</p>
<div class="table-wrap"><table>
<tr><th>Leg</th><th>Calculation</th><th class="num">Amount</th></tr>
<tr><td>Ganga pays fixed</td><td>7.0% × ₹50 crore × 0.5</td><td class="num">₹1.75 crore</td></tr>
<tr><td>Ganga receives floating</td><td>6.2% × ₹50 crore × 0.5</td><td class="num">₹1.55 crore</td></tr>
<tr><td><b>Net</b></td><td>(7.0% − 6.2%) × ₹50 crore × 0.5</td><td class="num"><b>Ganga pays ₹20 lakh</b></td></tr>
</table></div>
<p>Only the <b>net</b> amount changes hands. If MIBOR later rises to 7.6%, the bank pays Ganga (7.6% − 7.0%) × 50 crore × 0.5 = ₹15 lakh, which offsets Ganga's higher loan interest. Combined, Ganga's loan + swap behaves like a <b>fixed-rate loan at 7.0%</b>.</p>
<figure class="diagram"><div class="flow">
  <div class="step"><b>Lenders</b><span>receive floating</span><small>MIBOR on the loan</small></div>
  <div class="step"><b>Ganga Power</b><span>pays floating to lenders</span><small>receives floating, pays 7% fixed in the swap</small></div>
  <div class="step"><b>Bank (swap dealer)</b><span>receives 7% fixed</span><small>pays floating</small></div>
</div><figcaption>The floating legs cancel; Ganga is left paying a fixed 7%.</figcaption></figure>`
        },
        {
          title: "Swaps as a series of forwards; other swaps",
          html: `
<p>Each settlement date of a swap is like a small forward contract on the floating rate. The difference: a series of separate forwards would each have its own forward rate, while a swap uses <b>one fixed rate</b> for every date. You will price swaps in a later module.</p>
<p>Other swaps follow the same pattern: <b>currency swaps</b> (interest in two currencies, usually with the notional exchanged at start and end), <b>equity swaps</b> (index return for a fixed or floating rate) and <b>commodity swaps</b>. Swaps are OTC, firm commitments, and many standard interest rate swaps are now centrally cleared.</p>`
        }
      ],
      traps: [
        "<b>The notional is not exchanged</b> in an interest rate swap; only net interest is.",
        "<b>Net payment = (fixed − floating) × notional × period fraction</b>, paid by the side with the higher rate.",
        "<b>Fixed payer gains when rates rise</b>; fixed receiver gains when rates fall.",
        "<b>Floating-rate borrower + pay-fixed swap = synthetic fixed-rate loan.</b>",
        "A swap uses <b>one</b> fixed rate for all dates; a strip of forwards uses different rates."
      ],
      quiz: [
        {
          q: "In a plain interest rate swap, the notional principal is:",
          opts: ["exchanged at the start and returned at maturity", "used only to calculate interest payments and not exchanged", "paid by the fixed-rate payer at maturity"],
          ans: 1,
          hint: "A reference amount.",
          why: "The notional is a <b>reference</b> for calculating interest; it is not exchanged in a single-currency interest rate swap."
        },
        {
          q: "Notional USD 80 million, quarterly payments (0.25 years), fixed rate 4.0%, floating rate for the period 4.6%. The fixed-rate payer:",
          opts: ["pays USD 120,000", "receives USD 120,000", "receives USD 480,000"],
          ans: 1,
          hint: "(4.6% − 4.0%) × 80m × 0.25.",
          why: "Floating &gt; fixed, so the fixed payer <b>receives</b> 0.6% × 80m × 0.25 = <b>USD 120,000</b>. C forgets the quarter."
        },
        {
          q: "A company with floating-rate debt that fears rising rates should enter a swap to:",
          opts: ["receive fixed and pay floating", "pay fixed and receive floating", "pay floating and receive floating"],
          ans: 1,
          hint: "Turn floating into fixed.",
          why: "<b>Pay fixed, receive floating</b>: the floating receipts offset the loan's floating interest."
        },
        {
          q: "A fixed-rate receiver in an interest rate swap gains if:",
          opts: ["the reference rate falls", "the reference rate rises", "the notional increases"],
          ans: 0,
          hint: "It pays floating.",
          why: "It pays floating, so a <b>falling</b> reference rate cuts its payments."
        },
        {
          q: "Notional ₹200 crore, annual payments, fixed 6.5%, floating set at 7.25%. The net payment for the year is:",
          opts: ["₹1.5 crore paid by the fixed-rate payer", "₹1.5 crore paid by the floating-rate payer", "₹14.5 crore paid by the floating-rate payer"],
          ans: 1,
          hint: "Who owes the higher rate?",
          why: "Floating (7.25%) &gt; fixed: the floating payer pays 0.75% × 200 crore = <b>₹1.5 crore</b>."
        },
        {
          q: "How does an interest rate swap differ from a series of forward rate contracts on the same dates?",
          opts: ["A swap uses one fixed rate for every settlement; each forward has its own rate", "A swap has no credit risk", "A swap is a contingent claim"],
          ans: 0,
          hint: "One rate vs many.",
          why: "A swap fixes <b>one rate</b> for all periods; a strip of forwards would use a different forward rate for each."
        },
        {
          q: "A swap in which interest is paid in two different currencies, with the principal amounts usually exchanged at the start and the end, is a:",
          opts: ["currency swap", "credit default swap", "equity swap"],
          ans: 0,
          hint: "Two currencies.",
          why: "A <b>currency swap</b>; unlike a single-currency interest rate swap, the notional is usually exchanged."
        },
        {
          q: "Which statement about swaps is most accurate?",
          opts: ["They are standardised exchange-traded contracts", "They give one party the right but not the obligation to exchange cash flows", "They are firm commitments usually traded OTC"],
          ans: 2,
          hint: "Family and market.",
          why: "Swaps are <b>OTC firm commitments</b>; many standard swaps are centrally cleared but not exchange-listed."
        }
      ]
    },

    /* ===================================================== LESSON 4 */
    {
      id: "l4",
      title: "Options: calls and puts, payoff and profit",
      summary: "Rights vs obligations; value at expiry and profit for long and short calls and puts; breakeven; maximum gain and loss; American vs European.",
      los: [0, 1],
      sections: [
        {
          title: "The idea in plain words",
          html: `
<div class="tiles">
  <div class="tile"><h4>Call option</h4><p>The <b>right to buy</b> the underlying at the <b>exercise (strike) price</b> X.</p><p>The buyer exercises if S<sub>T</sub> &gt; X.</p></div>
  <div class="tile c2"><h4>Put option</h4><p>The <b>right to sell</b> the underlying at X.</p><p>The buyer exercises if S<sub>T</sub> &lt; X.</p></div>
</div>
<p>The buyer (holder, long) pays a <b>premium</b> (c<sub>0</sub> for a call, p<sub>0</sub> for a put) to the seller (writer, short). The seller must perform if the buyer exercises.</p>
<p><b>European</b> options can be exercised only at expiry; <b>American</b> options at any time up to expiry.</p>
<div class="callout key"><span class="label">The four formulas</span>
Long call: payoff = max(0, S<sub>T</sub> − X); profit = max(0, S<sub>T</sub> − X) − c<sub>0</sub><br>
Short call: payoff = −max(0, S<sub>T</sub> − X); profit = c<sub>0</sub> − max(0, S<sub>T</sub> − X)<br>
Long put: payoff = max(0, X − S<sub>T</sub>); profit = max(0, X − S<sub>T</sub>) − p<sub>0</sub><br>
Short put: payoff = −max(0, X − S<sub>T</sub>); profit = p<sub>0</sub> − max(0, X − S<sub>T</sub>)</div>
<p><b>Payoff</b> (value at expiry) ignores the premium. <b>Profit</b> subtracts it for the buyer and adds it for the seller.</p>`
        },
        {
          title: "Worked example: a call and a put on the same share",
          html: `
<p>Shares of Indus Robotics. Call: X = ₹500, premium ₹30. Put: X = ₹500, premium ₹20.</p>
<div class="table-wrap"><table>
<tr><th>S<sub>T</sub></th><th class="num">Long call payoff</th><th class="num">Long call profit</th><th class="num">Long put payoff</th><th class="num">Long put profit</th></tr>
<tr><td>420</td><td class="num">0</td><td class="num">−30</td><td class="num">80</td><td class="num">+60</td></tr>
<tr><td>480</td><td class="num">0</td><td class="num">−30</td><td class="num">20</td><td class="num">0</td></tr>
<tr><td>500</td><td class="num">0</td><td class="num">−30</td><td class="num">0</td><td class="num">−20</td></tr>
<tr><td>530</td><td class="num">30</td><td class="num">0</td><td class="num">0</td><td class="num">−20</td></tr>
<tr><td>600</td><td class="num">100</td><td class="num">+70</td><td class="num">0</td><td class="num">−20</td></tr>
</table></div>
<p><b>Breakeven</b> (profit = 0): call at X + c<sub>0</sub> = <b>530</b>; put at X − p<sub>0</sub> = <b>480</b>.</p>
<div class="table-wrap"><table>
<tr><th>Position</th><th>Maximum gain</th><th>Maximum loss</th><th>Breakeven</th></tr>
<tr><td>Long call</td><td>Unlimited</td><td>Premium (c<sub>0</sub>)</td><td>X + c<sub>0</sub></td></tr>
<tr><td>Short call</td><td>Premium</td><td>Unlimited</td><td>X + c<sub>0</sub></td></tr>
<tr><td>Long put</td><td>X − p<sub>0</sub> (if S<sub>T</sub> = 0)</td><td>Premium (p<sub>0</sub>)</td><td>X − p<sub>0</sub></td></tr>
<tr><td>Short put</td><td>Premium</td><td>X − p<sub>0</sub></td><td>X − p<sub>0</sub></td></tr>
</table></div>
<div class="callout analogy"><span class="label">Analogy</span>A bought put is insurance on your shares: you pay a premium, and if the price crashes the policy pays out. The seller is the insurer: it keeps the premium if nothing bad happens.</div>`
        },
        {
          title: "Moneyness in one line",
          html: `
<p>A call is <b>in the money</b> when S &gt; X, a put when S &lt; X; <b>at the money</b> when S = X; otherwise <b>out of the money</b>. Only in-the-money options are exercised at expiry. (More on this, and on option value before expiry, in Module 8.)</p>`
        }
      ],
      traps: [
        "<b>Payoff ignores the premium; profit includes it.</b> Read which one the question asks for.",
        "<b>Breakeven: call X + premium; put X − premium.</b>",
        "<b>Short call has unlimited loss</b>; short put's maximum loss is X − premium.",
        "<b>The buyer's maximum loss is the premium</b> for both calls and puts.",
        "European = exercise only at expiry; American = any time."
      ],
      quiz: [
        {
          q: "A call on an index has X = 18,000 and a premium of 900. At expiry the index is 18,600. The call buyer's payoff and profit are:",
          opts: ["payoff 600; profit 600", "payoff 600; profit −300", "payoff 1,500; profit 600"],
          ans: 1,
          hint: "Payoff max(0, S − X); profit subtracts the premium.",
          why: "Payoff = 600; profit = 600 − 900 = <b>−300</b>. Exercising still reduces the loss."
        },
        {
          q: "A put with X = USD 50 costs USD 4. At expiry the share is USD 41. The put seller's profit is:",
          opts: ["+USD 5", "−USD 5", "−USD 9"],
          ans: 1,
          hint: "Premium received minus payoff owed.",
          why: "Payoff owed = 50 − 41 = 9; profit = 4 − 9 = <b>−USD 5</b>. C ignores the premium."
        },
        {
          q: "The breakeven share price at expiry for the buyer of a put with X = ₹1,200 and premium ₹75 is:",
          opts: ["₹1,275", "₹1,200", "₹1,125"],
          ans: 2,
          hint: "Put: X − premium.",
          why: "1,200 − 75 = <b>₹1,125</b>. A is the call breakeven formula."
        },
        {
          q: "Which position has unlimited potential loss?",
          opts: ["Long put", "Short call", "Short put"],
          ans: 1,
          hint: "The price can rise without limit.",
          why: "A <b>short call</b> must deliver at X however high S<sub>T</sub> goes."
        },
        {
          q: "A call with X = 75 and premium 6 expires with the share at 72. The call buyer's profit is:",
          opts: ["−6", "−3", "0"],
          ans: 0,
          hint: "Out of the money: not exercised.",
          why: "S &lt; X, so payoff 0 and profit = <b>−6</b> (the premium). B wrongly treats 72 − 75 as a payoff."
        },
        {
          q: "The maximum profit for the seller of a put with X = 40 and premium 3 is:",
          opts: ["3", "37", "unlimited"],
          ans: 0,
          hint: "Best case: not exercised.",
          why: "The seller keeps the <b>premium, 3</b>. 37 is the seller's maximum <i>loss</i> (X − premium)."
        },
        {
          q: "An option that can be exercised at any time up to expiry is:",
          opts: ["American", "European", "at the money"],
          ans: 0,
          hint: "Style, not moneyness.",
          why: "<b>American</b> options allow early exercise."
        },
        {
          q: "A long call and a long put on the same share both have X = 100. The call costs 7 and the put 5. At S<sub>T</sub> = 110, the combined profit of holding both is:",
          opts: ["+10", "−2", "−12"],
          ans: 1,
          hint: "Call pays 10; put pays 0; subtract both premiums.",
          why: "10 + 0 − 7 − 5 = <b>−2</b>."
        },
        {
          q: "A put buyer's maximum possible gain occurs when the share price at expiry is:",
          opts: ["equal to the exercise price", "zero", "very high"],
          ans: 1,
          hint: "The lowest price.",
          why: "Gain = X − S<sub>T</sub> − p<sub>0</sub>, largest at S<sub>T</sub> = <b>0</b>: X − premium."
        },
        {
          q: "A call option on a stock trading at 64 has X = 60. The call is:",
          opts: ["in the money", "at the money", "out of the money"],
          ans: 0,
          hint: "S vs X for a call.",
          why: "S &gt; X for a call: <b>in the money</b>."
        }
      ]
    },

    /* ===================================================== LESSON 5 */
    {
      id: "l5",
      title: "Credit derivatives: credit default swaps",
      summary: "Protection buyer and seller; the CDS spread; credit events; payout and loss given default; uses for hedging and for taking a view on credit.",
      los: [0],
      sections: [
        {
          title: "The idea in plain words",
          html: `
<p>A <b>credit default swap (CDS)</b> works like insurance on a borrower (the <b>reference entity</b>). The <b>protection buyer</b> pays a regular fee, the <b>CDS spread</b> (a percentage of the notional per year). The <b>protection seller</b> pays out if a <b>credit event</b> happens: a failure to pay, a bankruptcy or a restructuring of the borrower's debt.</p>
<figure class="diagram"><div class="flow">
  <div class="step"><b>Protection buyer</b><span>pays the CDS spread</span><small>every quarter until maturity or a credit event</small></div>
  <div class="step"><b>Protection seller</b><span>pays the loss</span><small>only if a credit event occurs</small></div>
</div><figcaption>The payout is contingent on a credit event, so a CDS is a contingent claim even though it is called a swap.</figcaption></figure>`
        },
        {
          title: "Worked example",
          html: `
<p>Lakeshore Fund owns USD 10 million of bonds issued by Corvane Airlines and buys 5-year CDS protection on USD 10 million at a spread of 2% a year (paid quarterly: 0.5% × 10m = USD 50,000 a quarter).</p>
<p>In year 3 Corvane misses a coupon (a credit event). The bonds are now worth 35% of face value, so the <b>recovery rate</b> is 35% and the <b>loss given default</b> is 65%.</p>
<p>CDS payout = 65% × 10m = <b>USD 6.5 million</b>. Lakeshore's bonds are worth 3.5 million, so bonds + payout = 10 million: the loss is covered, apart from the spread paid.</p>
<div class="callout key"><span class="label">What drives the spread</span>The CDS spread reflects the <b>probability of default</b> and the <b>loss given default</b>. Higher default risk → wider (higher) spread.</div>`
        },
        {
          title: "Uses and positions",
          html: `
<div class="table-wrap"><table>
<tr><th>Position</th><th>Economic exposure</th><th>Gains when</th></tr>
<tr><td>Protection buyer</td><td>Like being <b>short</b> the borrower's credit</td><td>Credit quality worsens (spread widens) or default happens</td></tr>
<tr><td>Protection seller</td><td>Like being <b>long</b> the borrower's bonds</td><td>Credit quality improves (spread narrows) and no default</td></tr>
</table></div>
<p>A bondholder buys protection to <b>hedge</b>. An investor who thinks a company's credit will worsen can buy protection without owning the bonds. A seller earns the spread, taking on credit risk without buying bonds.</p>`
        }
      ],
      traps: [
        "<b>Protection buyer pays the spread</b>; the seller pays only after a credit event.",
        "<b>Payout = (1 − recovery rate) × notional</b> = loss given default × notional.",
        "<b>Buying protection ≈ shorting credit</b>; selling protection ≈ owning the bond's credit risk.",
        "A CDS is a <b>contingent claim</b> despite its name."
      ],
      quiz: [
        {
          q: "In a CDS, the party that pays a regular spread is the:",
          opts: ["protection seller", "reference entity", "protection buyer"],
          ans: 2,
          hint: "Who buys the insurance?",
          why: "The <b>protection buyer</b> pays the spread, like an insurance premium."
        },
        {
          q: "CDS notional EUR 20 million; after a credit event the reference bonds trade at 30% of face. The protection seller pays:",
          opts: ["EUR 6 million", "EUR 14 million", "EUR 20 million"],
          ans: 1,
          hint: "Loss given default × notional.",
          why: "(1 − 0.30) × 20m = <b>EUR 14 million</b>. A pays the recovery instead of the loss."
        },
        {
          q: "An investor who does not own a company's bonds expects its credit quality to worsen. Using a CDS, the investor should:",
          opts: ["do nothing, because only bondholders can trade CDS", "sell protection", "buy protection"],
          ans: 2,
          hint: "Profit from widening spreads.",
          why: "<b>Buying protection</b> gains as credit worsens; ownership of the bonds is not required."
        },
        {
          q: "Selling CDS protection on a company is economically most similar to:",
          opts: ["buying the company's bonds", "short selling the company's bonds", "buying a put on the company's shares"],
          ans: 0,
          hint: "Who loses on default?",
          why: "The seller loses if the company defaults and earns income otherwise: like <b>owning the bonds' credit risk</b>."
        },
        {
          q: "Which of the following would most likely widen the CDS spread on a borrower?",
          opts: ["A credit rating upgrade", "A rise in the expected recovery rate", "Higher expected probability of default"],
          ans: 2,
          hint: "What makes protection costlier?",
          why: "A higher <b>default probability</b> raises the expected payout, so the spread widens. A higher recovery rate narrows it."
        },
        {
          q: "A CDS is best classified as a contingent claim because:",
          opts: ["both parties pay every quarter", "the protection seller pays only if a credit event occurs", "it trades on an exchange"],
          ans: 1,
          hint: "What triggers the main payment?",
          why: "The protection payment depends on a <b>credit event</b>."
        },
        {
          q: "Which is NOT normally a credit event in a CDS?",
          opts: ["A fall in the company's share price", "Bankruptcy filing", "Failure to pay interest"],
          ans: 0,
          hint: "Credit events relate to debt.",
          why: "Credit events include failure to pay, bankruptcy and restructuring; a <b>share price fall</b> is not one."
        }
      ]
    },

    /* ===================================================== LESSON 6 */
    {
      id: "l6",
      title: "Forward commitments vs contingent claims: choosing the right tool",
      summary: "Linear vs non-linear payoffs; cost up front vs none; hedging an existing holding with a short forward, a bought put or a sold call; comparing outcomes.",
      los: [1, 2],
      sections: [
        {
          title: "Same goal, different tools",
          html: `
<p>Deepa owns 1,000 shares of Kestrel Pharma at ₹600 and fears a fall over the next three months but can't sell yet. Her choices:</p>
<div class="table-wrap"><table>
<tr><th>Tool</th><th>What she does</th><th>Cost now</th><th>If the price falls</th><th>If the price rises</th></tr>
<tr><td><b>Short forward / futures</b></td><td>Agree to sell at F = ₹606</td><td>None</td><td>Protected: sells at 606</td><td>Gives up the gain</td></tr>
<tr><td><b>Long put</b></td><td>Buy the right to sell at X = ₹600, premium ₹18</td><td>₹18 per share</td><td>Protected below 600 (less premium)</td><td>Keeps the gain, less the premium</td></tr>
<tr><td><b>Short call</b></td><td>Sell the right to buy at X = ₹650, premium ₹10</td><td>Receives ₹10</td><td>Only cushioned by ₹10</td><td>Gain capped at 650</td></tr>
</table></div>
<p>A bought call or a sold put would <b>add</b> to her exposure, not reduce it.</p>
<div class="callout key"><span class="label">Which is better if the share rises?</span>With the share at ₹700 in three months: short forward = 606 − 700 = <b>−94</b> per share on the hedge; long put = <b>−18</b> (premium lost). The put is better. If the share ends at ₹606: forward = 0; put = −18: the forward is better. Which one wins depends on <b>how far</b> the price moves compared with the premium.</div>`
        },
        {
          title: "The shapes compared",
          html: `
<div class="table-wrap"><table>
<tr><th></th><th>Forward commitments</th><th>Contingent claims (options)</th></tr>
<tr><td>Payoff shape</td><td>Linear, symmetric</td><td>Non-linear, asymmetric</td></tr>
<tr><td>Obligation</td><td>Both sides</td><td>Seller only (buyer has a right)</td></tr>
<tr><td>Up-front payment</td><td>None (value zero at start)</td><td>Premium from buyer to seller</td></tr>
<tr><td>Hedge result</td><td>Locks in a price: no downside, no upside</td><td>Bought option: downside protection, keeps upside, costs premium</td></tr>
</table></div>
<p>Combining options can recreate a forward: a long call plus a short put with the same exercise price and expiry behaves like a long forward (you'll see this as put–call parity in Module 9).</p>`
        }
      ],
      traps: [
        "<b>To protect a long holding:</b> short forward/futures or <b>buy a put</b>. A bought call or sold put adds exposure.",
        "<b>Forward vs put if the price rises:</b> the put loses only its premium; the short forward loses F − S<sub>T</sub> without limit.",
        "<b>You can't tell which hedge wins</b> without knowing how far the price moved relative to the premium.",
        "<b>Selling a call</b> earns income but only cushions a fall by the premium.",
        "Long call + short put (same X, T) ≈ long forward."
      ],
      quiz: [
        {
          q: "A family office owns 50,000 shares and wants to remove exposure to a fall in price over six months, with no up-front cost. The most suitable position is:",
          opts: ["a long call", "a short futures contract", "a short put"],
          ans: 1,
          hint: "Firm commitment to sell.",
          why: "A <b>short futures</b> position locks in a sale price with no premium. A and C increase exposure."
        },
        {
          q: "An investor holding shares is optimistic but wants protection against a fall while keeping the upside. The best choice is to:",
          opts: ["buy a put", "sell a call", "sell a futures contract"],
          ans: 0,
          hint: "Insurance.",
          why: "A <b>bought put</b> protects the downside and keeps the upside, for a premium. Selling a call caps the upside; a short future removes it."
        },
        {
          q: "A holder hedges with a short forward at F = 250 or, alternatively, a long put with X = 250 and premium 9. The share ends at 300. Compared with the put, the forward hedge result is:",
          opts: ["41 better", "the same", "41 worse"],
          ans: 2,
          hint: "Forward: 250 − 300; put: −9.",
          why: "Forward −50 vs put −9: the forward is <b>41 worse</b>."
        },
        {
          q: "Same choice (short forward at 250 or put X = 250, premium 9). If the share ends at 255, which hedge did better?",
          opts: ["The short forward", "The long put", "They are equal"],
          ans: 0,
          hint: "Forward −5; put −9.",
          why: "Forward: 250 − 255 = −5. Put: the premium, −9. A small rise favours the <b>forward</b>: the move is smaller than the premium."
        },
        {
          q: "Which statement best contrasts the payoff of a long forward with that of a long call on the same underlying?",
          opts: ["Both are linear", "The forward is linear and symmetric; the call limits losses to the premium", "The call has unlimited losses"],
          ans: 1,
          hint: "Straight vs bent.",
          why: "Forward: <b>linear and symmetric</b>; call: <b>asymmetric</b>, with the loss capped at the premium."
        },
        {
          q: "Selling a call on shares an investor already owns most likely:",
          opts: ["provides full protection against a price fall", "earns a premium but caps the gain if the price rises above the exercise price", "costs a premium up front"],
          ans: 1,
          hint: "Covered call.",
          why: "The investor <b>receives</b> a premium and gives up gains above X. Protection is only the premium received."
        },
        {
          q: "An investor believes a share will rise but cannot tell by how much. Which statement comparing a long forward and a long call is most accurate?",
          opts: ["The forward always gives the higher profit", "Which is better depends on how far the share rises compared with the call premium", "The call always gives the higher profit"],
          ans: 1,
          hint: "Premium vs size of move.",
          why: "Without knowing the size of the move relative to the premium, <b>we cannot say</b> which wins."
        },
        {
          q: "A combination of a long call and a short put with the same exercise price and expiry is most similar to:",
          opts: ["a risk-free bond", "a short forward", "a long forward"],
          ans: 2,
          hint: "Gains above X, losses below X.",
          why: "It gains when S rises and loses when S falls, linearly: a <b>long forward</b>."
        }
      ]
    }
  ],

  moduleQuiz: [
    { lesson: 1, q: "A long forward on 2,000 kg of cardamom is agreed at ₹2,400 per kg. At maturity the spot price is ₹2,550. The long's payoff is:", opts: ["₹0", "−₹3,00,000", "+₹3,00,000"], ans: 2, hint: "(S − F) × quantity.", why: "(2,550 − 2,400) × 2,000 = <b>+₹3,00,000</b>." },
    { lesson: 1, q: "Which statement about a forward contract is most accurate?", opts: ["The long pays a premium at inception", "It is traded on an exchange", "Its value at inception is normally zero"], ans: 2, hint: "Fair at the start.", why: "The forward price is set so the value is <b>zero</b> at inception; forwards are OTC." },
    { lesson: 1, q: "A short forward position gains when the underlying price at maturity is:", opts: ["above the forward price", "equal to the forward price", "below the forward price"], ans: 2, hint: "The short sells at F.", why: "Short payoff = F − S<sub>T</sub>, positive when S<sub>T</sub> is <b>below</b> F." },
    { lesson: 1, q: "For a forward contract, profit at maturity equals payoff because:", opts: ["no premium is paid at inception", "the contract is marked to market daily", "losses are limited"], ans: 0, hint: "Nothing paid at the start.", why: "No initial payment, so <b>profit = payoff</b>." },
    { lesson: 2, q: "Long 4 futures contracts of 100 oz at USD 1,900. Initial margin USD 6,000 per contract; maintenance USD 4,500 per contract. The first margin call occurs if the price falls below:", opts: ["USD 1,885", "USD 1,840", "USD 1,896.25"], ans: 0, hint: "Allowed loss per contract ÷ 100 oz.", why: "(6,000 − 4,500) ÷ 100 = 15 → <b>1,885</b>. The number of contracts doesn't change the trigger price." },
    { lesson: 2, q: "A short futures account: initial margin ₹1,20,000, maintenance ₹90,000. After losses the balance is ₹78,000. The variation margin required is:", opts: ["₹12,000", "₹42,000", "₹1,20,000"], ans: 1, hint: "Back to initial.", why: "1,20,000 − 78,000 = <b>₹42,000</b>. A restores only to maintenance." },
    { lesson: 2, q: "Which feature is unique to futures compared with forwards?", opts: ["A price agreed today for a future exchange", "Possible physical delivery", "Daily mark-to-market settlement through margin accounts"], ans: 2, hint: "Pay as you go.", why: "<b>Daily settlement</b> is the futures feature; the others are shared." },
    { lesson: 2, q: "A trader is long 1 futures contract (multiplier USD 250 per point) at 5,200. Settlement prices on the next three days: 5,180, 5,230, 5,215. The cumulative gain is:", opts: ["USD 3,750", "USD 15", "−USD 1,250"], ans: 0, hint: "(5,215 − 5,200) × 250.", why: "15 points × 250 = <b>USD 3,750</b>." },
    { lesson: 2, q: "The futures settlement price is used to:", opts: ["set the premium of an option", "fix the contract's notional", "calculate each day's gains and losses for margin accounts"], ans: 2, hint: "End-of-day price.", why: "Daily <b>mark to market</b> uses the settlement price." },
    { lesson: 2, q: "Compared with a forward, a futures contract's credit risk is lower mainly because:", opts: ["the exchange guarantees a profit", "futures cannot lose value", "losses are collected daily and the clearinghouse is the counterparty"], ans: 2, hint: "Two reasons.", why: "<b>Daily settlement</b> and the <b>clearinghouse</b> keep credit risk very low." },
    { lesson: 3, q: "Notional EUR 60 million, semiannual payments, fixed 3.2%, floating set at 2.6%. The net payment is:", opts: ["EUR 180,000 paid by the fixed-rate payer", "EUR 360,000 paid by the fixed-rate payer", "EUR 180,000 paid by the floating-rate payer"], ans: 0, hint: "0.6% × 60m × 0.5.", why: "Fixed &gt; floating: fixed payer pays 0.6% × 60m × 0.5 = <b>EUR 180,000</b>. B ignores the half-year." },
    { lesson: 3, q: "A bank has fixed-rate assets funded by floating-rate deposits. To reduce its interest rate risk with a swap, it should:", opts: ["receive fixed, pay floating", "buy a CDS", "pay fixed, receive floating"], ans: 2, hint: "It pays floating on deposits.", why: "<b>Receiving floating</b> offsets its floating deposit costs, and <b>paying fixed</b> uses its fixed asset income." },
    { lesson: 3, q: "An investor who receives fixed in an interest rate swap has an exposure most similar to:", opts: ["a long position in a fixed-rate bond", "a short position in a fixed-rate bond", "a long position in a floating-rate note"], ans: 0, hint: "Receiving fixed coupons.", why: "Receiving fixed (and paying floating) behaves like <b>owning a fixed-rate bond</b> funded at a floating rate." },
    { lesson: 3, q: "In a single-currency interest rate swap, which amount is normally exchanged?", opts: ["The notional at inception", "Both full interest amounts gross", "Only the net interest difference on each settlement date"], ans: 2, hint: "Netting.", why: "Only the <b>net</b> difference is paid." },
    { lesson: 3, q: "Which statement about swaps and forwards is most accurate?", opts: ["A swap is a single future exchange", "A swap is like a series of forwards but with one fixed rate for all periods", "A swap is a contingent claim"], ans: 1, hint: "Many exchanges, one rate.", why: "A swap ≈ a <b>series of forwards</b> sharing <b>one</b> fixed rate." },
    { lesson: 4, q: "A long call: X = USD 45, premium USD 3.50. At expiry the share is USD 52. Payoff and profit are:", opts: ["7.00 and 3.50", "3.50 and 7.00", "7.00 and 10.50"], ans: 0, hint: "Payoff first, then subtract premium.", why: "Payoff 52 − 45 = <b>7.00</b>; profit 7.00 − 3.50 = <b>3.50</b>." },
    { lesson: 4, q: "A short put: X = ₹900, premium ₹40. At expiry the share is ₹830. The short's profit is:", opts: ["+₹40", "−₹30", "−₹70"], ans: 1, hint: "40 − (900 − 830).", why: "40 − 70 = <b>−₹30</b>. C ignores the premium." },
    { lesson: 4, q: "The call buyer's breakeven for X = 1,500 and premium 85 is:", opts: ["1,415", "1,500", "1,585"], ans: 2, hint: "X + premium.", why: "<b>1,585</b>. A is the put breakeven." },
    { lesson: 4, q: "The maximum loss for the seller of a put with X = 80 and premium 6 is:", opts: ["74", "6", "unlimited"], ans: 0, hint: "Price falls to zero.", why: "If S<sub>T</sub> = 0, the seller pays 80 and kept 6: loss <b>74</b>." },
    { lesson: 4, q: "An index call with X = 24,000, premium 1,100. At expiry the index is 24,700. The buyer:", opts: ["does not exercise and loses 1,100", "exercises and loses 400", "exercises and gains 700"], ans: 1, hint: "In the money but below breakeven.", why: "Payoff 700 − premium 1,100 = <b>−400</b>. Exercising still beats losing 1,100." },
    { lesson: 4, q: "Which statement about option positions is most accurate?", opts: ["The seller of a call has limited loss", "The buyer of a put has a maximum loss equal to the premium", "The buyer of a call has a maximum gain equal to the premium"], ans: 1, hint: "Buyers risk only the premium.", why: "Any option <b>buyer</b> can lose at most the <b>premium</b>." },
    { lesson: 4, q: "A put with X = 60 on a share trading at 66 is:", opts: ["in the money", "at the money", "out of the money"], ans: 2, hint: "Put: S vs X.", why: "For a put, S &gt; X means <b>out of the money</b>." },
    { lesson: 4, q: "A call and a put on the same stock both have X = 200; the call costs 12 and the put 8. An investor sells both. At expiry the stock is 228. The investor's profit is:", opts: ["+20", "−8", "−28"], ans: 1, hint: "Owes 28 on the call; keeps both premiums.", why: "Premiums 20 − call payoff 28 − put payoff 0 = <b>−8</b>." },
    { lesson: 5, q: "A bondholder wants to hedge the risk that the issuer defaults. Using a CDS, the bondholder should:", opts: ["buy protection", "sell protection", "receive the CDS spread"], ans: 0, hint: "Buy insurance.", why: "<b>Buy protection</b> and pay the spread." },
    { lesson: 5, q: "CDS notional USD 15 million; recovery rate after default 45%. The protection buyer receives:", opts: ["USD 6.75 million", "USD 8.25 million", "USD 15 million"], ans: 1, hint: "(1 − recovery) × notional.", why: "55% × 15m = <b>USD 8.25 million</b>. A pays the recovery." },
    { lesson: 5, q: "The CDS spread on a company narrows. This most likely benefits the:", opts: ["protection buyer", "protection seller", "reference entity's other lenders only"], ans: 1, hint: "Narrower spread = better credit.", why: "Improving credit benefits the <b>protection seller</b> (long credit)." },
    { lesson: 5, q: "Which statement about a CDS is least accurate?", opts: ["The protection seller pays the spread", "It is a contingent claim", "Its spread reflects the probability of default and loss given default"], ans: 0, hint: "Least accurate.", why: "The <b>buyer</b> pays the spread, not the seller." },
    { lesson: 6, q: "An investor owns shares and wants to keep the upside while limiting the downside. Which combination achieves this?", opts: ["Shares + short put", "Shares + long put", "Shares + long call"], ans: 1, hint: "Protective put.", why: "<b>Shares + long put</b> (a protective put) floors the value at X less the premium." },
    { lesson: 6, q: "To hedge an existing long holding, which position would increase rather than reduce exposure?", opts: ["Short futures", "Long put", "Short put"], ans: 2, hint: "Which one loses when the price falls?", why: "A <b>short put</b> loses when prices fall, adding to the holding's loss." },
    { lesson: 6, q: "Hedge choices for 1 share: short forward at F = 520, or long put X = 520 with premium 15. The share ends at 600. Hedge results are:", opts: ["forward −80, put −15", "forward +80, put +65", "forward −80, put −95"], ans: 0, hint: "Forward F − S; put loses premium.", why: "Forward 520 − 600 = <b>−80</b>; put expires, <b>−15</b>." },
    { lesson: 6, q: "Which statement best describes the trade-off between a short forward and a bought put as hedges?", opts: ["The put costs a premium and keeps upside; the forward has no cost and gives up upside", "The forward costs a premium and keeps upside", "Both give up all upside"], ans: 0, hint: "Premium vs upside.", why: "Put: <b>premium + upside kept</b>. Forward: <b>no cost, no upside</b>." },
    { lesson: 6, q: "If the underlying rises, a bought put hedge will outperform a short forward hedge when:", opts: ["S<sub>T</sub> is below the forward price", "S<sub>T</sub> − F<sub>0</sub>(T) is greater than the put premium (with X = F)", "the put premium exceeds the price rise"], ans: 1, hint: "Forward loss vs premium.", why: "The forward loses S<sub>T</sub> − F; the put loses p<sub>0</sub>. The put wins when <b>S<sub>T</sub> − F &gt; p<sub>0</sub></b>." },
    { lesson: 6, q: "A payoff that is linear in the underlying price in both directions describes:", opts: ["a long futures contract", "a long call", "a long put"], ans: 0, hint: "Firm commitment.", why: "<b>Futures</b> (firm commitments) have linear payoffs; options are non-linear." },
    { lesson: 6, q: "Long call (X = 100) + short put (X = 100), same expiry. At S<sub>T</sub> = 85 the combined payoff is:", opts: ["0", "−15", "+15"], ans: 1, hint: "Call worthless; put owes 15.", why: "Call 0; short put −(100 − 85) = <b>−15</b>, like a long forward at 100." }
  ]
});
