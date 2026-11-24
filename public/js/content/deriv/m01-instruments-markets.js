/*
 * Derivatives · Module 1 – Derivative Instrument and Derivative Market Features
 * Original teaching text, examples and questions. The CFA Program curriculum is used only as a private
 * benchmark of topics and level; none of its text, exhibits or practice problems is reproduced.
 *
 * Question format: { q, opts:[A,B,C], ans:0|1|2, hint, why, lesson? }
 */
CFA.registerModule("deriv", {
  num: 1,
  title: "Derivative Instrument and Derivative Market Features",
  intro: "A derivative is a contract whose value comes from something else: a share price, an exchange rate, an interest rate, the price of copper. This module explains what every derivative contract has in common, the two big families (firm commitments and contingent claims), and the two places they trade: customised over-the-counter deals with a bank, or standardised contracts on an exchange. It ends with who carries credit risk and how a central counterparty changes that.",
  los: [
    "Explain what a derivative is, name its underlying, and describe the basic terms every derivative contract sets out",
    "Describe how derivative markets work, and compare over-the-counter and exchange-traded markets, including the role of a central counterparty"
  ],
  lessons: [

    /* ===================================================== LESSON 1 */
    {
      id: "l1",
      title: "What a derivative is",
      summary: "Spot (cash) markets vs derivatives; the underlying; the terms in every contract; firm commitments vs contingent claims; the main types of underlying.",
      los: [0],
      sections: [
        {
          title: "The idea in plain words",
          html: `
<p>A wheat farmer in Punjab will harvest in four months. A flour mill will need that wheat in four months. Neither wants to gamble on what wheat will cost then. So today they sign a piece of paper: “In four months the farmer delivers 100 tonnes and the mill pays ₹25 per kg.” No wheat and no money change hands today.</p>
<p>That piece of paper is a <b>derivative</b>. Its value is not fixed: if wheat prices jump to ₹30, the mill's right to buy at ₹25 is worth a lot; if they fall to ₹20, the farmer's right to sell at ₹25 is the valuable side. The contract's value is <b>derived</b> from the price of wheat, which is called the <b>underlying</b>.</p>
<div class="callout key"><span class="label">Definition</span>A <b>derivative</b> is a contract between two parties whose value depends on the value of something else, the <b>underlying</b> (an asset, a rate, an index or another variable). It arranges an exchange in the <b>future</b> on terms agreed <b>today</b>.</div>
<p>Compare it with the <b>spot</b> (or <b>cash</b>) market, where the asset changes hands now at today's price, the <b>spot price</b>. Buying 100 shares on the stock exchange today is a spot trade. Agreeing today to buy them in three months at a set price is a derivative.</p>
<div class="callout analogy"><span class="label">Analogy</span>Booking a hotel room for Diwali in June at a fixed rate is a derivative-like deal: you lock in the price now for a stay later. Walking in on Diwali night and paying whatever the hotel charges is the spot market.</div>`
        },
        {
          title: "What every derivative contract spells out",
          html: `
<div class="table-wrap"><table>
<tr><th>Term</th><th>What it means</th><th>Wheat example</th></tr>
<tr><td><b>Underlying</b></td><td>The asset, rate or index the contract is based on</td><td>Wheat of a stated grade</td></tr>
<tr><td><b>Contract size</b> (notional)</td><td>The quantity or amount used to work out the payments</td><td>100 tonnes</td></tr>
<tr><td><b>Price or rate</b></td><td>The agreed price (or, for options, the exercise price)</td><td>₹25 per kg</td></tr>
<tr><td><b>Maturity / settlement date</b></td><td>When the contract ends and is settled</td><td>In four months</td></tr>
<tr><td><b>Settlement method</b></td><td>Physical delivery of the underlying, or a cash payment of the difference</td><td>Physical delivery</td></tr>
<tr><td><b>Counterparties</b></td><td>The two sides: one gains when the underlying rises, the other when it falls</td><td>Mill (buyer) and farmer (seller)</td></tr>
</table></div>
<p><b>Long</b> = the side that agrees to <b>buy</b> the underlying (gains if its price rises). <b>Short</b> = the side that agrees to <b>sell</b> (gains if its price falls). In a derivative, one side's gain is the other side's loss: it is a <b>zero-sum</b> contract before costs.</p>
<p><b>Cash settlement</b> example: if the contract were cash-settled and wheat ends at ₹28 per kg, the farmer pays the mill (28 − 25) × 100,000 kg = ₹3,00,000 instead of delivering wheat. Both sides end up in the same economic position as with delivery, and then trade wheat in the spot market.</p>`
        },
        {
          title: "Two families: firm commitments and contingent claims",
          html: `
<div class="tiles">
  <div class="tile"><h4>Firm commitment</h4><p>Both sides <b>must</b> perform at maturity at the agreed price. Neither side can walk away.</p><p>Examples: <b>forwards, futures, swaps</b>.</p><p>Gains and losses move <b>one-for-one</b> with the underlying (a straight line).</p></div>
  <div class="tile c2"><h4>Contingent claim</h4><p>One side (the <b>buyer</b>) <b>chooses</b> whether the trade happens. The buyer pays the seller up front (a <b>premium</b>) for this right.</p><p>Examples: <b>options</b>, and credit derivatives that pay only if a credit event happens.</p><p>Payoff is <b>one-sided</b> (a bent line).</p></div>
</div>
<p>Why would anyone choose a contingent claim and pay a premium? Because it gives protection from bad outcomes while keeping the good ones. A mill with an <b>option</b> to buy wheat at ₹25 uses it if wheat rises above ₹25 and simply buys in the spot market if wheat falls.</p>`
        },
        {
          title: "What can be an underlying?",
          html: `
<div class="tree">
  <div class="q">Common underlyings</div>
  <div class="branches">
    <div class="branch"><div class="if">Equities</div><div class="then">Single shares, baskets, stock indexes (e.g. a Nifty 50 futures contract)</div></div>
    <div class="branch"><div class="if">Fixed income and interest rates</div><div class="then">Government bonds, and reference rates such as SOFR or MIBOR</div></div>
    <div class="branch"><div class="if">Currencies</div><div class="then">Exchange rates such as USD/INR</div></div>
    <div class="branch"><div class="if">Commodities</div><div class="then">Hard (oil, metals) and soft (wheat, coffee, sugar)</div></div>
    <div class="branch"><div class="if">Credit</div><div class="then">The risk that a borrower defaults (credit default swaps)</div></div>
    <div class="branch"><div class="if">Other</div><div class="then">Weather, volatility indexes, carbon emission allowances, even other derivatives</div></div>
  </div>
</div>
<p>An underlying does <b>not</b> have to be something you can hold. An interest rate or a temperature index cannot be delivered, so contracts on them are always <b>cash-settled</b>.</p>`
        }
      ],
      traps: [
        "<b>A derivative's value comes from the underlying</b>, not from a physical asset of its own.",
        "<b>Firm commitment = both must perform</b> (forwards, futures, swaps). <b>Contingent claim = one side chooses</b> (options).",
        "<b>The option buyer pays a premium</b> for the right; the seller receives it and takes on the obligation.",
        "<b>Long gains when the underlying rises; short gains when it falls.</b>",
        "<b>Cash settlement</b> pays the difference; it gives the same economic result as delivery plus a spot trade.",
        "The thing you hedge (say a machine you sell) is <b>not</b> the underlying; the <b>price risk</b> you face (currency, commodity) is."
      ],
      quiz: [
        {
          q: "Which statement best describes a derivative?",
          opts: ["A share in a company whose value depends on its profits", "A contract whose value depends on the value of an underlying asset, rate or index", "A loan secured on a physical asset"],
          ans: 1,
          hint: "Where does its value come from?",
          why: "A derivative is a <b>contract</b> whose value is <b>derived</b> from an underlying. A is a share (a spot asset). C is secured lending."
        },
        {
          q: "An investor buys 200 shares of a listed bank today for immediate settlement at the current market price. This is best described as:",
          opts: ["a spot (cash) market transaction", "a firm commitment derivative", "a contingent claim"],
          ans: 0,
          hint: "When does the asset change hands, and at what price?",
          why: "Exchange now at the current price = <b>spot market</b>. A derivative would fix today the terms of a <b>future</b> exchange."
        },
        {
          q: "Which of the following is a contingent claim?",
          opts: ["A futures contract on crude oil", "An interest rate swap", "A put option on a stock index"],
          ans: 2,
          hint: "Which one lets one side choose?",
          why: "An <b>option</b> gives the buyer a choice: a contingent claim. Futures and swaps oblige both sides: firm commitments."
        },
        {
          q: "In a contingent claim, the party that decides whether the trade takes place is:",
          opts: ["the buyer of the contract, who pays a premium", "the seller of the contract, who receives a premium", "the exchange on which it trades"],
          ans: 0,
          hint: "Who pays for the right?",
          why: "The <b>buyer</b> pays a <b>premium</b> for the right to choose. The seller must perform if the buyer exercises."
        },
        {
          q: "A cash-settled contract on 50,000 litres of diesel is agreed at ₹90 per litre. At maturity diesel trades at ₹86. The long side:",
          opts: ["receives ₹2,00,000", "pays ₹2,00,000", "receives 50,000 litres of diesel and pays ₹45,00,000"],
          ans: 1,
          hint: "The long agreed to buy at 90; the market is 86.",
          why: "The long is committed to pay 90 for something worth 86: (86 − 90) × 50,000 = <b>−₹2,00,000</b>, so the long <b>pays</b>. C describes physical, not cash, settlement."
        },
        {
          q: "Which of these is least likely to be settled by physical delivery?",
          opts: ["A forward on 1,000 ounces of silver", "A futures contract on a rainfall index", "A forward on 10,000 shares of a listed company"],
          ans: 1,
          hint: "Can you deliver it?",
          why: "A <b>rainfall index</b> cannot be delivered, so the contract must be <b>cash-settled</b>. Silver and shares can be delivered."
        },
        {
          q: "A Japanese company sells a robot to a buyer in Canada for CAD 2 million, payable in 90 days. The underlying of a derivative used to hedge this sale is most likely:",
          opts: ["the robot", "the buyer's credit rating", "the CAD/JPY exchange rate"],
          ans: 2,
          hint: "What price could move against the company?",
          why: "The risk is that CAD weakens against JPY before payment: the underlying is the <b>exchange rate</b>. The robot is the goods sold, not the hedged price."
        },
        {
          q: "Before costs, a gain of ₹5 lakh to the long side of a forward contract means that the short side has:",
          opts: ["a gain of ₹5 lakh", "no gain or loss, because the short has no exposure", "a loss of ₹5 lakh"],
          ans: 2,
          hint: "Zero-sum.",
          why: "Derivatives are <b>zero-sum</b> between the two sides: the short <b>loses ₹5 lakh</b>."
        },
        {
          q: "Compared with a firm commitment, a contingent claim's payoff is best described as:",
          opts: ["linear, moving one-for-one with the underlying in both directions", "always zero at maturity", "non-linear, with gains on one side and limited losses on the other for the buyer"],
          ans: 2,
          hint: "Picture the shape of an option payoff.",
          why: "Options are <b>non-linear</b>: the buyer gains in one direction and loses at most the premium. Firm commitments are linear."
        }
      ]
    },

    /* ===================================================== LESSON 2 */
    {
      id: "l2",
      title: "Two marketplaces: over-the-counter and exchange-traded",
      summary: "Dealers and end users; customised OTC contracts; standardised exchange-traded contracts; liquidity, transparency, cost and regulation compared.",
      los: [1],
      sections: [
        {
          title: "The idea in plain words",
          html: `
<p>A suit can be <b>tailor-made</b> to your exact measurements, or bought <b>off the rack</b> in standard sizes. A tailored suit fits perfectly but costs more, takes longer and is hard to resell. An off-the-rack suit is cheap, quick and easy to swap, but it might not fit exactly.</p>
<p>Derivative markets work the same way.</p>
<div class="tiles">
  <div class="tile"><h4>Over-the-counter (OTC)</h4><p>A private contract between an <b>end user</b> (a company, fund or investor) and a <b>dealer</b> (a bank acting as financial intermediary). Terms are <b>customised</b>: exact amount, exact date, any underlying.</p><p>Examples: forwards, most swaps, many options.</p></div>
  <div class="tile c2"><h4>Exchange-traded (ETD)</h4><p>Standardised contracts listed on an <b>exchange</b> (CME, NSE, Eurex). The exchange sets the size, dates, tick size and settlement rules. Anyone can buy or sell through a broker.</p><p>Examples: futures, listed options.</p></div>
</div>`
        },
        {
          title: "Side by side",
          html: `
<div class="table-wrap"><table>
<tr><th>Feature</th><th>OTC</th><th>Exchange-traded</th></tr>
<tr><td>Terms</td><td>Customised to the end user's exact need</td><td>Standardised by the exchange</td></tr>
<tr><td>Counterparty</td><td>A dealer (or, if centrally cleared, a CCP after novation)</td><td>The exchange's clearinghouse</td></tr>
<tr><td>Liquidity</td><td>Lower: hard to close out with anyone but the original dealer</td><td>Higher: many buyers and sellers in the same contract</td></tr>
<tr><td>Transparency</td><td>Lower: prices agreed privately (though trades are now reported to regulators)</td><td>Higher: prices and volumes published</td></tr>
<tr><td>Collateral</td><td>Set by agreement; regulation now requires margin on most dealer trades</td><td>Margin required from all participants, settled daily</td></tr>
<tr><td>Credit risk</td><td>Higher: depends on the other side's ability to pay</td><td>Very low: the clearinghouse guarantees performance</td></tr>
<tr><td>Cost</td><td>Higher, because tailoring and credit risk are priced in</td><td>Lower transaction costs</td></tr>
<tr><td>Best for</td><td>Hedging a <b>specific</b> exposure (odd amount, exact date)</td><td>Liquid, cheap exposure where an approximate match is fine</td></tr>
</table></div>
<div class="callout key"><span class="label">Rule of thumb</span>If the hedge must match an exact amount and date (a company's specific payment), OTC usually fits best. If cost, liquidity and the ability to exit quickly matter more than a perfect match, exchange-traded fits best.</div>`
        },
        {
          title: "How an exchange keeps the market orderly",
          html: `
<div class="vflow">
  <div class="node"><b>Standard contract</b>: size, expiry months, minimum price move, delivery or cash settlement</div><div class="arrow">⬇</div>
  <div class="node"><b>Trading</b> on an electronic order book; buyers and sellers usually never meet</div><div class="arrow">⬇</div>
  <div class="node"><b>Clearing</b>: the exchange checks the trade, records who holds what and becomes the counterparty to each side</div><div class="arrow">⬇</div>
  <div class="node"><b>Margin and daily settlement</b>: each day's gains are paid to winners and losses collected from losers</div><div class="arrow">⬇</div>
  <div class="node good"><b>Settlement</b> at expiry: delivery or cash, guaranteed by the clearinghouse</div>
</div>
<p>Exchanges may also set <b>price limits</b> (the most a price can move in a day) and <b>circuit breakers</b> (a short pause in trading when a limit is hit) to stop panic moves.</p>
<p><i>Example:</i> Nalanda Exports wants to hedge exactly USD 1,370,000 due on 19 March. An exchange's USD/INR futures come in USD 1,000 lots expiring on set dates near month-end. Nalanda could buy 1,370 lots, but the expiry won't match 19 March exactly. A bank forward can be written for USD 1,370,000 on 19 March: a <b>perfect fit</b>, at a slightly higher cost and with credit exposure to the bank.</p>`
        }
      ],
      traps: [
        "<b>Customised = OTC; standardised = exchange-traded.</b>",
        "<b>Exchange-traded markets are more liquid and transparent</b>, with lower credit risk because of the clearinghouse.",
        "<b>An odd amount or exact date</b> points to OTC for a hedger.",
        "<b>Dealers</b> are banks acting as intermediaries; <b>end users</b> are the companies and investors who use the contracts.",
        "OTC is <b>not</b> collateral-free any more: post-2008 rules require margin on most dealer trades."
      ],
      quiz: [
        {
          q: "A company needs to hedge exactly EUR 2,345,000 payable on 11 August. Which market is most suitable?",
          opts: ["Over-the-counter, because the contract can match the exact amount and date", "Exchange-traded, because standard contracts always match any amount", "Either, since both offer identical terms"],
          ans: 0,
          hint: "Odd amount, exact date.",
          why: "Only an <b>OTC</b> contract can be <b>tailored</b> to an odd amount and a specific date. Exchange contracts come in fixed sizes and dates."
        },
        {
          q: "Compared with OTC derivatives, exchange-traded derivatives typically have:",
          opts: ["higher counterparty credit risk", "lower transaction costs and greater liquidity", "terms negotiated privately between the two sides"],
          ans: 1,
          hint: "Off the rack.",
          why: "Standardisation brings <b>lower costs</b> and <b>more liquidity</b>. A and C describe OTC."
        },
        {
          q: "In derivative markets, a “dealer” is best described as:",
          opts: ["a financial intermediary, such as a bank, that takes the other side of end users' contracts", "a company using derivatives to hedge its own business risk", "the regulator that supervises an exchange"],
          ans: 0,
          hint: "The bank in the middle.",
          why: "<b>Dealers</b> are intermediaries (banks, investment banks) that trade with <b>end users</b>."
        },
        {
          q: "Which feature is most associated with exchange-traded derivatives?",
          opts: ["Any underlying can be chosen by the two counterparties", "Contracts can be written for any maturity date", "Prices and trading volumes are made public"],
          ans: 2,
          hint: "Transparency.",
          why: "Exchanges <b>publish prices and volumes</b>. A and B are flexibility features of OTC contracts."
        },
        {
          q: "An exchange halts trading in a futures contract for 15 minutes after its price falls by the maximum allowed amount. This is an example of:",
          opts: ["novation", "a circuit breaker", "cash settlement"],
          ans: 1,
          hint: "A pause after a limit is hit.",
          why: "A <b>circuit breaker</b> pauses trading when a <b>price limit</b> is reached."
        },
        {
          q: "A pension fund wants cheap, quick exposure to a stock index for a few weeks and is happy with an approximate match of size and date. The most suitable choice is:",
          opts: ["an OTC forward tailored by a bank", "buying every share in the index in the spot market", "a stock index futures contract on an exchange"],
          ans: 2,
          hint: "Approximate match is fine; cost and liquidity matter.",
          why: "When an exact match isn't needed, <b>exchange-traded futures</b> give cheap, liquid exposure that is easy to exit."
        },
        {
          q: "Which statement about OTC derivatives today is most accurate?",
          opts: ["They are never collateralised", "They are traded on an organised exchange", "Most dealer trades must now be margined or centrally cleared under post-crisis rules"],
          ans: 2,
          hint: "What changed after 2008?",
          why: "Post-crisis regulation requires <b>margin</b> and, for many contracts, <b>central clearing</b>. OTC trades are not exchange-listed."
        },
        {
          q: "The main reason an OTC derivative is usually less liquid than an exchange-traded one is that:",
          opts: ["its customised terms make it hard to find anyone else who wants exactly that contract", "OTC derivatives cannot be valued", "regulators forbid closing OTC contracts early"],
          ans: 0,
          hint: "Tailored suit.",
          why: "A tailored contract suits only its owner, so it is hard to <b>resell</b>; usually it can only be closed with the original dealer."
        },
        {
          q: "Which pairing of market and feature is correct?",
          opts: ["Exchange-traded: terms set by the end user", "OTC: higher counterparty credit risk if not centrally cleared", "OTC: guaranteed by the exchange clearinghouse"],
          ans: 1,
          hint: "Who stands behind each contract?",
          why: "A bilateral <b>OTC</b> contract depends on the other side paying, so <b>credit risk</b> is higher. Exchanges set terms and guarantee performance."
        }
      ]
    },

    /* ===================================================== LESSON 3 */
    {
      id: "l3",
      title: "Counterparty credit risk and the central counterparty",
      summary: "Who is exposed to whom; how a CCP steps in through novation; margin as protection; the central clearing mandate for OTC trades.",
      los: [1],
      sections: [
        {
          title: "The idea in plain words",
          html: `
<p>When you sign a forward with a bank, you depend on the bank still being there, and willing to pay, at maturity. The bank depends on you in the same way. That is <b>counterparty credit risk</b>: the risk that the other side does not perform.</p>
<p>Who is exposed at any moment? The side that is <b>owed</b> money, i.e. the side whose contract has a <b>positive value</b>. If wheat rises above the agreed price, the mill (long) is the winner and is exposed to the farmer (short) failing to deliver.</p>
<div class="callout key"><span class="label">Key point</span>Credit risk in a derivative runs <b>both ways</b> over the life of the contract, because either side can end up as the winner. You face credit risk from your counterparty, and you <b>pose</b> credit risk to them.</div>`
        },
        {
          title: "Enter the central counterparty (CCP)",
          html: `
<p>A <b>central counterparty</b> (CCP), or clearinghouse, steps into the middle of every trade. After the trade is agreed, the original contract is replaced by two contracts: buyer ↔ CCP and CCP ↔ seller. This substitution is called <b>novation</b>.</p>
<figure class="diagram"><div class="flow">
  <div class="step"><b>Before</b><span>Buyer ⇄ Seller</span><small>each exposed to the other</small></div>
  <div class="step"><b>Novation</b><span>CCP steps in</span><small>one contract becomes two</small></div>
  <div class="step"><b>After</b><span>Buyer ⇄ CCP ⇄ Seller</span><small>each faces only the CCP</small></div>
</div><figcaption>The CCP is the buyer to every seller and the seller to every buyer. It has no net market exposure, because its two contracts offset.</figcaption></figure>
<p>How does the CCP make sure it can pay winners? It collects <b>margin</b> (collateral) from everyone, settles gains and losses <b>daily</b>, and keeps a <b>default fund</b> funded by its members. If a member fails, its margin and default fund contribution are used first.</p>
<div class="table-wrap"><table>
<tr><th>Who carries the risk?</th><th>Bilateral OTC</th><th>Centrally cleared (OTC or exchange)</th></tr>
<tr><td>End user's exposure</td><td>to the dealer</td><td>to the CCP (very low; backed by margin and default fund)</td></tr>
<tr><td>End user poses risk to</td><td>the dealer</td><td>the CCP (which is why the CCP demands margin)</td></tr>
<tr><td>Exposure to the person with the opposite trade</td><td>yes, they are your counterparty</td><td>none: the CCP stands between you</td></tr>
</table></div>`
        },
        {
          title: "The central clearing mandate",
          html: `
<p>In 2008, huge bilateral OTC exposures between banks spread losses through the system when firms failed. Regulators in the major markets responded by requiring most <b>standardised OTC</b> derivatives (for example plain interest rate swaps between dealers) to be <b>centrally cleared</b> through a CCP, with margin, and reported to trade repositories.</p>
<p>Result: OTC markets now look more like exchange markets in their <b>margining</b> and <b>credit protection</b>, while keeping flexible terms. Dealers often pass the cost of posting margin on to their end-user clients.</p>
<div class="callout trap"><span class="label">Careful</span>A CCP reduces credit risk; it does not remove <b>market risk</b>. If you are long and prices fall, you still lose money; you just know the other side's gains will be paid.</div>`
        },
        {
          title: "Try it",
          html: `
<p>Sitara Textiles enters a centrally cleared OTC forward to sell USD for INR. Three weeks later the rupee has strengthened, so Sitara's contract has a large positive value. Who is Sitara exposed to?</p>
<p><b>Answer:</b> the <b>CCP</b>, not the bank that originally quoted the trade. The bank also faces the CCP. Sitara, in turn, would pose credit risk to the CCP if the contract moved against it, which is why it must post margin.</p>`
        }
      ],
      traps: [
        "<b>Credit risk is two-way</b>: the side with the positive contract value is the one exposed.",
        "<b>Novation</b> replaces one contract with two, each against the CCP.",
        "<b>With a CCP, you pose credit risk to the CCP</b>, not to the party with the opposite position.",
        "<b>A CCP removes counterparty risk, not market risk.</b>",
        "<b>Central clearing mandate</b>: most standardised OTC derivatives must be cleared through a CCP and margined."
      ],
      quiz: [
        {
          q: "A company is long a bilateral (not cleared) forward with a bank. The underlying has risen sharply since inception. Which statement is most accurate?",
          opts: ["The company is exposed to the risk that the bank fails to pay", "The bank is exposed to the risk that the company fails to pay", "Neither side has credit exposure until maturity"],
          ans: 0,
          hint: "Who is owed money?",
          why: "The <b>long</b> gains when the underlying rises, so its contract has positive value: it is <b>exposed to the bank</b>."
        },
        {
          q: "Novation in a centrally cleared trade means that:",
          opts: ["the contract is cancelled and the parties trade in the spot market instead", "the dealer guarantees the end user's obligations", "the original contract is replaced by two contracts, each with the CCP"],
          ans: 2,
          hint: "One contract becomes two.",
          why: "<b>Novation</b>: buyer ↔ CCP and CCP ↔ seller replace the original contract."
        },
        {
          q: "After a trade is centrally cleared, an end user poses credit risk mainly to:",
          opts: ["the dealer that quoted the original trade", "another end user holding the opposite position", "the central counterparty"],
          ans: 2,
          hint: "Who is now its only counterparty?",
          why: "After novation, the end user's only counterparty is the <b>CCP</b>, which is why the CCP demands margin."
        },
        {
          q: "A CCP protects itself against a member's default mainly by:",
          opts: ["collecting margin, settling gains and losses daily and keeping a default fund", "taking large directional positions in the market", "refusing to accept trades whose prices move"],
          ans: 0,
          hint: "Collateral and frequent settlement.",
          why: "<b>Margin</b>, <b>daily settlement</b> and a <b>default fund</b> mean losses are covered before they grow."
        },
        {
          q: "Which risk does central clearing NOT remove for an end user?",
          opts: ["The risk that the underlying's price moves against the position", "The risk that the counterparty fails to pay a gain", "The risk of facing many different counterparties"],
          ans: 0,
          hint: "Credit vs market risk.",
          why: "Clearing removes <b>counterparty</b> risk, not <b>market</b> risk."
        },
        {
          q: "The central clearing mandate introduced after the 2008 crisis most likely requires that:",
          opts: ["all derivatives be traded on exchanges", "OTC derivatives be banned for end users", "most standardised OTC derivatives be cleared through a CCP"],
          ans: 2,
          hint: "Clearing, not listing.",
          why: "Standardised <b>OTC</b> derivatives must be <b>centrally cleared</b>; they need not be exchange-listed."
        },
        {
          q: "Why does a CCP have no net market exposure?",
          opts: ["Its contract with the buyer and its contract with the seller offset each other", "It only accepts trades that are hedged by an exchange", "It always takes the winning side"],
          ans: 0,
          hint: "Buyer to every seller, seller to every buyer.",
          why: "For every long it faces, it faces an equal short: its two contracts <b>offset</b>."
        },
        {
          q: "A bilateral OTC forward has had a value of zero since inception, but an end user is concerned about credit risk. The best explanation is that:",
          opts: ["credit exposure can arise later if the underlying moves, in either direction", "credit risk exists only for exchange-traded derivatives", "the dealer always carries all the credit risk"],
          ans: 0,
          hint: "Either side can become the winner.",
          why: "Exposure appears once the contract moves; it can run <b>either way</b>."
        },
        {
          q: "Compared with bilateral OTC trading, central clearing of OTC derivatives most likely leads dealers to:",
          opts: ["stop asking end users for collateral", "trade only on exchanges", "pass margin costs on to their end-user clients"],
          ans: 2,
          hint: "Who pays for posting margin?",
          why: "Dealers must post margin to the CCP and often <b>pass those costs</b> to clients."
        }
      ]
    },

    /* ===================================================== LESSON 4 */
    {
      id: "l4",
      title: "Putting it together: choosing a derivative to hedge a real exposure",
      summary: "Why a derivative rather than a spot trade; picking the underlying and the family; drawing the cash flows; choosing the market; who carries credit risk.",
      los: [0, 1],
      sections: [
        {
          title: "A full case, step by step",
          html: `
<p><b>Torvik Marine</b>, a Norwegian boat builder, signs a contract today to sell a ferry to a buyer in Japan for <b>JPY 900 million</b>, payable on delivery in <b>120 days</b>. Torvik's costs are in Norwegian krone (NOK).</p>
<div class="timeline">
  <div class="ev"><b>Step 1 – What is the risk?</b> Torvik will receive yen in 120 days. If the yen weakens against the krone, the 900 million yen buy fewer krone. The problem is the <b>gap in time</b> between agreeing the price and being paid.</div>
  <div class="ev"><b>Step 2 – Why not the spot market?</b> Torvik has no yen today to sell. Converting on the payment date at whatever rate then applies leaves it fully exposed for 120 days. A derivative <b>fixes today</b> the rate for a <b>future</b> exchange.</div>
  <div class="ev"><b>Step 3 – Which underlying and family?</b> Underlying: the <b>JPY/NOK exchange rate</b> (not the ferry). Torvik wants certainty, so a <b>firm commitment</b>: sell JPY 900 million for a fixed NOK amount in 120 days (a currency forward).</div>
  <div class="ev"><b>Step 4 – Which market?</b> The amount and date are specific, so an <b>OTC forward</b> with a bank (dealer) fits exactly. Exchange futures would leave a size and date mismatch.</div>
  <div class="ev"><b>Step 5 – Who carries credit risk?</b> Bilateral: Torvik and the bank face each other. Centrally cleared: both face the CCP, and Torvik posts margin.</div>
</div>
<figure class="diagram"><div class="flow">
  <div class="step"><b>Torvik Marine</b><span>delivers JPY 900m</span><small>on day 120</small></div>
  <div class="step"><b>Bank (dealer)</b><span>pays a fixed NOK amount</span><small>set today at the forward rate</small></div>
</div><figcaption>The yen received from the Japanese buyer are passed to the bank; Torvik receives krone at a rate locked in today.</figcaption></figure>`
        },
        {
          title: "Firm commitment or option?",
          html: `
<p>If Torvik expected the yen to <b>strengthen</b> and wanted to keep that upside while being protected if it weakens, it could instead <b>buy an option</b> to sell yen at a set rate (a put on JPY). It pays a premium for that flexibility. If the yen strengthens, it lets the option lapse and converts at the better spot rate.</p>
<div class="table-wrap"><table>
<tr><th></th><th>Currency forward (sell JPY)</th><th>Bought option to sell JPY</th></tr>
<tr><td>Up-front cost</td><td>None</td><td>Premium paid</td></tr>
<tr><td>Yen weakens</td><td>Protected</td><td>Protected (exercise)</td></tr>
<tr><td>Yen strengthens</td><td>Gives up the gain</td><td>Keeps the gain (option lapses), less the premium</td></tr>
</table></div>`
        }
      ],
      traps: [
        "<b>The reason to use a derivative</b> is the time gap between fixing the price and settling, not merely that two currencies are involved.",
        "<b>The underlying is the price risk</b> (exchange rate), not the goods being sold.",
        "<b>Hedge direction:</b> receiving foreign currency later → <b>sell</b> it forward. Paying it later → <b>buy</b> it forward.",
        "<b>Specific amount and date → OTC</b> fits best.",
        "<b>Forward: no premium, no upside. Option: premium, keeps upside.</b>"
      ],
      quiz: [
        {
          q: "An Indian software firm will receive GBP 3 million in 60 days from a UK client. Why is a derivative more useful than a spot transaction for managing this risk?",
          opts: ["Because the firm's costs are in INR", "Because the firm cannot sell the pounds today; it only receives them in 60 days, and the rate can move before then", "Because spot transactions are not allowed for currencies"],
          ans: 1,
          hint: "What is the problem the spot market can't solve?",
          why: "The risk comes from the <b>60-day gap</b>. A spot trade can only happen when the pounds arrive. A is true but does not explain why a derivative is needed."
        },
        {
          q: "Same firm (receiving GBP 3 million in 60 days). The best firm-commitment hedge is to:",
          opts: ["sell GBP forward for a fixed INR amount", "buy GBP forward for a fixed INR amount", "buy an option to buy GBP"],
          ans: 0,
          hint: "It will receive pounds.",
          why: "Receiving GBP later → <b>sell GBP forward</b> for INR. B and C add to, rather than offset, the exposure."
        },
        {
          q: "A Korean shipyard will pay EUR 40 million to a German engine supplier in six months. To hedge, it should:",
          opts: ["sell EUR forward", "buy EUR forward", "buy a put option on EUR"],
          ans: 1,
          hint: "It must find euros later.",
          why: "Paying EUR later → risk that EUR <b>rises</b> → <b>buy EUR forward</b>. A and C protect against a fall in EUR."
        },
        {
          q: "A hedger wants protection if a currency weakens but wants to keep the benefit if it strengthens. The most suitable derivative is:",
          opts: ["a forward contract", "a bought option", "a sold option"],
          ans: 1,
          hint: "Protection plus upside costs a premium.",
          why: "A <b>bought option</b> gives one-sided protection and keeps the upside, for a premium. A forward gives up the upside."
        },
        {
          q: "A brewer buys a derivative to hedge the price of the barley it will buy next spring. The underlying of the derivative is:",
          opts: ["the price of barley", "the beer it will brew", "the brewer's share price"],
          ans: 0,
          hint: "What price is the risk?",
          why: "The exposure is to the <b>barley price</b>; that is the underlying."
        },
        {
          q: "A company enters a centrally cleared currency forward with a bank to hedge a receipt. Which statement about credit risk is most accurate?",
          opts: ["The company is exposed to the bank failing to pay", "The company poses credit risk to the CCP, which is why it posts margin", "The company faces the credit risk of other end users with the opposite trade"],
          ans: 1,
          hint: "After novation…",
          why: "After clearing, the company's counterparty is the <b>CCP</b>; it poses risk to the CCP and posts <b>margin</b>."
        },
        {
          q: "Which hedge would most likely leave a mismatch for a company that must convert exactly USD 812,500 on 7 May?",
          opts: ["A bank forward for USD 812,500 settling on 7 May", "Exchange-traded USD futures in USD 1,000 lots expiring at month-end", "An OTC option on USD 812,500 expiring on 7 May"],
          ans: 1,
          hint: "Standard sizes and dates.",
          why: "<b>Exchange futures</b> have fixed sizes and expiry dates, so both size and date are approximate."
        }
      ]
    }
  ],

  moduleQuiz: [
    { lesson: 1, q: "A contract that fixes today the price at which 500 tonnes of copper will be exchanged in six months is:", opts: ["a spot transaction", "an equity security", "a derivative"], ans: 2, hint: "Future exchange, terms set today.", why: "Terms set today for a <b>future</b> exchange: a <b>derivative</b> (here a forward)." },
    { lesson: 1, q: "Which list contains only firm commitments?", opts: ["Forwards, futures and swaps", "Forwards, options and swaps", "Futures, options and credit default swaps"], ans: 0, hint: "Both sides must perform.", why: "<b>Forwards, futures, swaps</b> oblige both sides. Options and CDS pay only if something happens: contingent claims." },
    { lesson: 1, q: "In a contingent claim, the premium is paid by:", opts: ["the seller, to compensate the buyer for the obligation", "both parties to the exchange", "the buyer, for the right to choose"], ans: 2, hint: "Who receives the choice?", why: "The <b>buyer</b> pays the <b>premium</b> for the right." },
    { lesson: 1, q: "A cash-settled forward on 20,000 barrels of oil is agreed at USD 78. At maturity oil is USD 83. The short side:", opts: ["receives USD 100,000", "delivers 20,000 barrels", "pays USD 100,000"], ans: 2, hint: "The short agreed to sell at 78.", why: "Short loses when the price rises: (83 − 78) × 20,000 = <b>USD 100,000 paid</b>." },
    { lesson: 1, q: "Which underlying must be cash-settled?", opts: ["Gold", "A government bond", "A temperature index"], ans: 2, hint: "Can it be handed over?", why: "An <b>index</b> of temperature cannot be delivered, so contracts are <b>cash-settled</b>." },
    { lesson: 1, q: "A derivative's “notional amount” is best described as:", opts: ["the amount used to calculate the contract's payments", "the premium paid at inception", "the contract's market value"], ans: 0, hint: "Contract size.", why: "Notional (contract size) is the base for calculating payments; it is usually <b>not</b> exchanged or equal to the value." },
    { lesson: 1, q: "Before costs, the sum of the gains of the long and short sides of a derivative is:", opts: ["positive", "negative", "zero"], ans: 2, hint: "One's gain is the other's loss.", why: "Derivatives are <b>zero-sum</b> before costs." },
    { lesson: 1, q: "Which statement best contrasts firm commitments and contingent claims?", opts: ["Firm commitments have non-linear payoffs; contingent claims have linear payoffs", "Both require an up-front premium", "Firm commitments have linear payoffs; contingent claims give one side a choice and have non-linear payoffs"], ans: 2, hint: "Straight vs bent line.", why: "Firm commitments are <b>linear</b> and require no premium; contingent claims are <b>non-linear</b> and the buyer pays a premium." },
    { lesson: 1, q: "A credit default swap is best classified as:", opts: ["a firm commitment, because both sides pay every period", "a spot transaction in a bond", "a contingent claim, because the protection payment is made only if a credit event occurs"], ans: 2, hint: "Payment depends on an event.", why: "The protection seller pays <b>only if a credit event happens</b>: a <b>contingent claim</b>." },
    { lesson: 1, q: "A mutual fund is long a forward on a stock index. The fund gains if the index:", opts: ["rises", "falls", "stays unchanged"], ans: 0, hint: "Long = agreed to buy.", why: "The <b>long</b> gains when the underlying <b>rises</b> above the agreed price." },
    { lesson: 1, q: "An airline wants a contract on jet fuel that it is obliged to complete, with no up-front payment. It should choose:", opts: ["a forward or futures contract", "a call option", "a put option"], ans: 0, hint: "No premium, both sides committed.", why: "A <b>firm commitment</b> (forward/futures) needs no premium. Options require a premium." },
    { lesson: 2, q: "Which is a typical feature of OTC derivatives?", opts: ["Standard contract sizes set by an exchange", "Customised terms negotiated with a dealer", "Prices published in real time on an exchange"], ans: 1, hint: "Tailor-made.", why: "OTC contracts are <b>customised</b> with a <b>dealer</b>." },
    { lesson: 2, q: "A hedge fund wants to take a short-term view on government bond prices at low cost and be able to exit within minutes. It is most likely to use:", opts: ["a bespoke OTC forward", "exchange-traded bond futures", "a bilateral swap with a 10-year maturity"], ans: 1, hint: "Liquidity and cost.", why: "<b>Exchange-traded</b> futures are liquid, cheap and quick to exit." },
    { lesson: 2, q: "Which of the following is the best reason an exporter chooses an OTC forward over exchange-traded futures?", opts: ["The OTC forward can match the exact size and date of the exposure", "The OTC forward has no credit risk", "The OTC forward is more liquid"], ans: 0, hint: "Why accept higher cost?", why: "An OTC forward can be <b>tailored</b> to the exact exposure. It has more credit risk and less liquidity." },
    { lesson: 2, q: "Which statement about exchange-traded derivatives is least accurate?", opts: ["The exchange sets the contract terms", "Participants post margin", "Counterparties choose any delivery date they like"], ans: 2, hint: "Least accurate.", why: "Delivery dates on an exchange are <b>standardised</b>; choosing any date is an OTC feature." },
    { lesson: 2, q: "A maximum daily price move set by an exchange is called a:", opts: ["price limit", "notional amount", "premium"], ans: 0, hint: "A cap on daily moves.", why: "A <b>price limit</b>; hitting it may trigger a <b>circuit breaker</b> pause." },
    { lesson: 2, q: "Compared with exchange-traded markets, OTC markets are typically:", opts: ["more transparent", "less liquid and less transparent", "less flexible"], ans: 1, hint: "Private deals.", why: "Private, customised deals are <b>less liquid and less transparent</b>; they are more flexible." },
    { lesson: 2, q: "Which party is an end user in a derivative market?", opts: ["A bank making markets in swaps", "An exchange clearinghouse", "A cement company hedging its coal costs"], ans: 2, hint: "Uses derivatives for its own business.", why: "<b>End users</b> are companies and investors using derivatives for their own needs." },
    { lesson: 2, q: "Exchange-traded derivatives typically have lower transaction costs than OTC derivatives because:", opts: ["exchanges do not charge fees", "standardisation concentrates trading in a few contracts, creating liquidity", "they carry more credit risk"], ans: 1, hint: "Many traders, same contract.", why: "<b>Standardisation</b> concentrates trading, raising <b>liquidity</b> and lowering costs." },
    { lesson: 2, q: "A corporate treasurer says: “I need a contract on our exact quarterly interest dates and an amount of USD 63.7 million.” This most strongly suggests:", opts: ["an OTC contract", "an exchange-traded contract", "a spot transaction"], ans: 0, hint: "Exact dates and odd amount.", why: "Exact dates and an odd amount call for a <b>customised OTC</b> contract." },
    { lesson: 3, q: "In a bilateral OTC forward, the party exposed to counterparty credit risk at a given moment is:", opts: ["always the dealer", "the party whose contract currently has positive value", "always the end user"], ans: 1, hint: "Who is owed money?", why: "The side that is <b>owed</b> (positive value) is exposed; this can switch over the life of the contract." },
    { lesson: 3, q: "After central clearing, a fund with a long position faces credit risk from:", opts: ["the party with the matching short position", "the CCP", "the original dealer"], ans: 1, hint: "Novation.", why: "After <b>novation</b>, the fund's counterparty is the <b>CCP</b>." },
    { lesson: 3, q: "The process by which a CCP becomes the buyer to every seller and the seller to every buyer is called:", opts: ["novation", "netting", "settlement"], ans: 0, hint: "Replacing one contract with two.", why: "<b>Novation</b>." },
    { lesson: 3, q: "Which is NOT a tool a CCP uses to manage default risk?", opts: ["Initial and variation margin", "A default fund financed by members", "Guaranteeing members a profit on every trade"], ans: 2, hint: "Not a tool.", why: "A CCP protects itself with <b>margin</b> and a <b>default fund</b>; it never guarantees profits." },
    { lesson: 3, q: "Which statement about a CCP is most accurate?", opts: ["It removes market risk for its members", "It reduces counterparty credit risk but members still bear market risk", "It takes the opposite side of trades to profit from them"], ans: 1, hint: "Credit vs market.", why: "Clearing cuts <b>credit</b> risk; members still bear <b>market</b> risk." },
    { lesson: 3, q: "An end user's centrally cleared OTC contract moves sharply against it. Which statement is most accurate?", opts: ["The end user now poses credit risk to the CCP and must post more margin", "The opposite end user is exposed to this end user", "The dealer must absorb the loss"], ans: 0, hint: "Losers pose risk.", why: "A losing position <b>poses risk to the CCP</b>, which calls for <b>more margin</b>." },
    { lesson: 3, q: "The main purpose of the post-2008 central clearing mandate was to:", opts: ["ban speculation in derivatives", "reduce the spread of losses through bilateral OTC exposures between institutions", "require all derivatives to be physically settled"], ans: 1, hint: "Systemic risk.", why: "It reduces <b>systemic risk</b> from webs of bilateral exposures." },
    { lesson: 3, q: "A CCP's net market exposure across its cleared trades is approximately:", opts: ["zero, because its long and short contracts offset", "very large, because it is party to every trade", "equal to the total notional of all trades"], ans: 0, hint: "Matched book.", why: "Every long it faces is matched by a short: <b>net zero</b>." },
    { lesson: 4, q: "A Brazilian coffee exporter will receive USD 5 million in 90 days. Its costs are in BRL. Which statement best explains why it should consider a derivative?", opts: ["It sells coffee in USD", "Over the 90 days before payment, the BRL value of the USD receipt can change", "It cannot hold USD"], ans: 1, hint: "The timing gap.", why: "The <b>time gap</b> creates the exposure; a derivative fixes the rate now for the future exchange." },
    { lesson: 4, q: "Same exporter (receiving USD 5 million in 90 days). The derivative that best fixes its BRL proceeds is:", opts: ["a forward to buy USD with BRL in 90 days", "a forward to sell USD for BRL in 90 days", "a call option on coffee"], ans: 1, hint: "Receiving dollars.", why: "Receiving USD → <b>sell USD forward</b>." },
    { lesson: 4, q: "An Indian refiner will pay USD 30 million for crude oil in two months. To hedge its currency risk with no up-front cost, it should:", opts: ["buy USD forward", "sell USD forward", "buy a put on USD"], ans: 0, hint: "Paying dollars later.", why: "Paying USD later: risk that USD rises → <b>buy USD forward</b>; a forward needs no premium." },
    { lesson: 4, q: "A hedger chooses a bought option instead of a forward. The main trade-off is:", opts: ["receiving a premium but giving up protection", "paying a premium to keep favourable price moves", "no cost but no protection"], ans: 1, hint: "Flexibility costs money.", why: "An option keeps the <b>upside</b> but costs a <b>premium</b>." },
    { lesson: 4, q: "Which statement about a company's hedge of a foreign currency sale is least accurate?", opts: ["The underlying is the exchange rate", "An OTC contract can match the payment date exactly", "The underlying is the product being sold"], ans: 2, hint: "Least accurate.", why: "The <b>product</b> is not the underlying; the <b>exchange rate</b> is." },
    { lesson: 4, q: "A company hedges a CHF 7.3 million payment due on 14 October with exchange-traded CHF futures (CHF 125,000 per contract, expiring in mid-December). The main drawback is:", opts: ["the size and the date do not match the exposure exactly", "the hedge carries more credit risk than an OTC forward", "futures cannot be closed before expiry"], ans: 0, hint: "Standard sizes and dates.", why: "7.3m ÷ 125,000 = 58.4 contracts, and the expiry is two months late: <b>size and date mismatch</b>." }
  ]
});
