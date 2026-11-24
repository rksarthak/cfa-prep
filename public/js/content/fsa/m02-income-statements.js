/*
 * FSA · Module 2 – Analyzing Income Statements
 * Original teaching text, examples and questions. The CFA Program curriculum is used only as a private
 * benchmark of topics and level; none of its text, exhibits or practice problems is reproduced.
 *
 * Question format: { q, opts:[A,B,C], ans:0|1|2, hint, why, lesson? }
 */
CFA.registerModule("fsa", {
  num: 2,
  title: "Analyzing Income Statements",
  intro: "The income statement is the page most investors read first: revenue, costs, profit and earnings per share. This module explains <b>when</b> revenue and expenses are recorded (and how much choice management has), how to treat one-off items, how to calculate <b>basic and diluted EPS</b>, and how to compare companies of different sizes with common-size statements and margins. It has more calculations than Module 1, so work through every example with a pen.",
  los: [
    "Explain when and how much revenue a company records, using the five-step model, and handle common cases such as agents, licences and long-term contracts",
    "Explain when expenses are recorded, compare capitalising a cost with expensing it, and adjust ratios for capitalised interest and development costs",
    "Recognise one-off items, discontinued operations and accounting changes, and know how each is reported and how to treat it in a forecast",
    "Calculate and interpret basic and diluted EPS, including convertible securities, options and antidilution",
    "Use common-size income statements and margins to compare a company over time and with its peers"
  ],
  lessons: [

    /* ===================================================== LESSON 1 */
    {
      id: "l1",
      title: "Revenue: when is it earned?",
      summary: "Accrual accounting, the five-step model, control, returns, contract balances and contract costs.",
      los: [0],
      sections: [
        {
          title: "The idea in plain words",
          html: `
<p>On 1 October you pay a gym <b>$1,200</b> for a year of membership. Has the gym earned $1,200 in October? No. It has your cash, but it still <b>owes</b> you eleven more months of access. It earns the money month by month, <b>$100 a month</b>, as it delivers.</p>
<p>That is accrual accounting: revenue is recorded when it is <b>earned</b> (when the company delivers what it promised), not when the cash arrives. Cash and revenue can fall in different periods:</p>
<figure class="diagram">
<div class="tiles">
  <div class="tile"><h4>Cash first, delivery later</h4><ul><li>The gym, a software subscription, an airline ticket</li><li>On receipt: cash ↑ and a <b>liability</b> ↑ (deferred revenue, or “contract liability”)</li><li>As it delivers: liability ↓, revenue ↑</li></ul></div>
  <div class="tile c2"><h4>Delivery and cash together</h4><ul><li>A café sale paid on the spot</li><li>Revenue and cash on the same day</li></ul></div>
  <div class="tile c3"><h4>Delivery first, cash later</h4><ul><li>A wholesaler selling on 30-day credit</li><li>On delivery: revenue ↑ and an <b>accounts receivable</b> ↑</li><li>When paid: receivable ↓, cash ↑ (no new revenue)</li></ul></div>
</div>
<figcaption>Gym at 31 December: revenue earned = 3 months × $100 = $300; still owed to members = $900 (a liability).</figcaption>
</figure>
<div class="callout key"><span class="label">What counts as income</span>Under IFRS, <b>income</b> is any increase in economic benefits during the period, through assets coming in or growing, or liabilities shrinking, that raises equity, <b>except money put in by the owners</b>. Expenses are the mirror image. So a bank loan is not income (a liability rises too), and new shares sold to owners are not income (it is the owners' own contribution).</div>
<p>One more everyday adjustment: if customers return goods or get price allowances, the company reports <b>net revenue</b> = gross sales − returns and allowances. Cash collected is irrelevant to that number.</p>`
        },
        {
          title: "The five-step model",
          html: `
<p>IFRS and US GAAP use the same revenue standard (effective 2018). The core idea: record revenue to show the <b>transfer of goods or services to customers</b>, at the amount the company <b>expects to be entitled to</b>. Five steps get you there:</p>
<div class="vflow">
  <div class="node"><b>1. Identify the contract.</b> An agreement with commercial substance that sets out each side's rights, obligations and payment terms, and where payment is <b>probable</b>.</div><div class="arrow">⬇</div>
  <div class="node"><b>2. Identify the performance obligations.</b> Each <b>distinct</b> promise: something the customer can benefit from on its own (or with things easily available) and that can be separated from the other promises.</div><div class="arrow">⬇</div>
  <div class="node"><b>3. Determine the transaction price.</b> What the seller expects to receive, after expected discounts and returns.</div><div class="arrow">⬇</div>
  <div class="node"><b>4. Allocate the price</b> to the performance obligations.</div><div class="arrow">⬇</div>
  <div class="node good"><b>5. Recognise revenue</b> when (or as) each obligation is satisfied, i.e. when <b>control</b> passes to the customer.</div>
</div>
<p class="small muted">Steps 3 and 4 are about <b>how much</b>; step 5 is about <b>when</b>.</p>
<h3>“Probable” is not the same word in both systems</h3>
<p>Under IFRS, probable means <b>more likely than not</b>; under US GAAP it means <b>likely to occur</b>, a higher bar. So two economically similar contracts can be treated differently.</p>
<h3>How do you know control has passed?</h3>
<div class="tiles">
  <div class="tile"><h4>Signs of control</h4><ul><li>The seller has a present <b>right to payment</b></li><li>The customer has <b>legal title</b></li><li>The customer has <b>physical possession</b></li><li>The customer bears the main <b>risks and rewards</b></li><li>The customer has <b>accepted</b> the item</li></ul></div>
  <div class="tile c2"><h4>Not on the list</h4><ul><li>“The seller has received the cash.” Cash in hand is not required; a <i>right</i> to payment is.</li></ul></div>
</div>
<h3>Expected returns</h3>
<p>Revenue is recorded only to the extent it is <b>highly probable that it will not be reversed</b> later. If returns are likely, the seller records less revenue, a <b>refund liability</b> for what it expects to pay back, and an asset for its <b>right to recover the returned goods</b>.</p>`
        },
        {
          title: "Worked example: a phone on a two-year plan",
          html: `
<p><b>Volt Mobile</b> sells a phone plus 24 months of service for a total contract price of <b>$1,080</b>, paid monthly. Sold separately, the phone would cost $600 and the service $30 a month ($720 for 24 months).</p>
<div class="timeline">
  <div class="ev"><b>Step 1 – Contract.</b> Signed two-year plan, customer passes the credit check.</div>
  <div class="ev"><b>Step 2 – Obligations.</b> Two distinct promises: the phone, and the network service.</div>
  <div class="ev"><b>Step 3 – Price.</b> $1,080.</div>
  <div class="ev"><b>Step 4 – Allocate</b> in proportion to stand-alone prices (total 600 + 720 = 1,320): phone = 1,080 × 600 ÷ 1,320 = <b>$491</b>; service = 1,080 × 720 ÷ 1,320 = <b>$589</b>.</div>
  <div class="ev"><b>Step 5 – Recognise.</b> Phone revenue of $491 on the day the customer takes it home. Service revenue of 589 ÷ 24 = <b>$24.5 a month</b> over two years.</div>
</div>
<p>On day one Volt has recorded $491 of revenue but received only the first monthly payment of $45. The gap is a <b>contract asset</b>: revenue earned before Volt has an unconditional right to bill for it.</p>`
        },
        {
          title: "Contract balances, contract costs and disclosures",
          html: `
<div class="table-wrap"><table>
<tr><th>Balance</th><th>When it appears</th><th>Example</th></tr>
<tr><td><b>Accounts receivable</b></td><td>Revenue recorded, payment is now unconditional (only time must pass)</td><td>Invoice sent after delivery</td></tr>
<tr><td><b>Contract asset</b></td><td>Revenue recorded, but payment still depends on doing something else</td><td>Volt's phone, paid through future monthly bills</td></tr>
<tr><td><b>Contract liability</b> (deferred revenue)</td><td>Cash received before delivery</td><td>The gym's $900 still owed</td></tr>
</table></div>
<h3>Costs of winning a contract</h3>
<p>Under the converged standard, the <b>incremental costs of obtaining a contract</b> (e.g. a salesperson's commission paid only because the contract was signed) and certain costs to fulfil it are <b>capitalised</b> as an asset and expensed over the contract. A company that used to expense these immediately will show <b>higher profit</b> at first after switching, with no change in cash.</p>
<h3>What companies must disclose</h3>
<p>Revenue split into meaningful categories (product, region, customer type, contract length, timing), opening and closing contract balances and why they changed, the revenue still to come from obligations not yet satisfied, and the main judgments made. Look for a note called “Revenue”.</p>`
        },
        {
          title: "Why analysts care",
          html: `
<p>Two companies with the same business can report different revenue just because of <b>timing choices</b>. Where the notes give enough detail, adjust one company's revenue to match the other. Where they don't, at least label the policies: recording revenue <b>earlier</b> is <b>less conservative</b>; recording it later is more conservative.</p>
<div class="callout analogy"><span class="label">Analogy</span>Revenue recognition is like counting a school fee. Paid in September for the whole year? The school has the money in September, but it earns it one month of lessons at a time.</div>`
        }
      ],
      traps: [
        "<b>Cash ≠ revenue.</b> Cash collected never decides revenue. Net revenue = gross sales − returns and allowances.",
        "<b>Owner contributions are not income</b>, and neither is a loan. Income comes from assets rising or liabilities falling <i>without</i> the owners putting money in.",
        "<b>Order of the steps:</b> contract → obligations → price → allocate → recognise. Questions love to ask “which is step 2?”",
        "<b>Right to payment, not payment received</b>, is the control indicator.",
        "<b>Probable:</b> IFRS = more likely than not; US GAAP = likely to occur.",
        "<b>Contract costs:</b> capitalising sales commissions makes profit look <b>higher</b> at first than expensing them."
      ],
      quiz: [
        {
          q: "Which of these would count as income for the period under IFRS?",
          opts: ["Cash received from shareholders who buy newly issued shares", "A bank loan of $500,000 paid into the company's account", "An increase in an asset's value that did not come from the owners"],
          ans: 2,
          hint: "Income raises equity, but not through the owners' own money.",
          why: "Income is an increase in economic benefits (assets up or liabilities down) that raises equity, <b>other than contributions from owners</b>. A is an owner contribution. B raises cash but also a liability of the same size, so equity doesn't change."
        },
        {
          q: "In its first year, Tidewater Supplies invoiced customers $500,000. Customers returned goods worth $40,000 and paid $300,000 in cash by year-end. Cost of goods sold was $320,000. What net revenue does Tidewater report?",
          opts: ["$460,000", "$300,000", "$500,000"],
          ans: 0,
          hint: "Two of the numbers are irrelevant to revenue.",
          why: "Net revenue = gross sales − returns = 500,000 − 40,000 = <b>$460,000</b>. B uses cash collected, which doesn't decide revenue under accrual accounting. C ignores returns. Cost of goods sold affects gross profit, not revenue."
        },
        {
          q: "A customer pays a gym $1,200 on 1 October for 12 months of membership. The gym's year ends on 31 December. What does the gym report at year-end?",
          opts: ["Revenue $1,200; no liability", "Revenue $300; liability $900", "Revenue $0; liability $1,200"],
          ans: 1,
          hint: "How many months of service has the gym delivered by 31 December?",
          why: "Three months delivered × $100 = <b>$300 revenue</b>. The other nine months are still owed: a <b>$900 contract liability</b> (deferred revenue). A records revenue on receipt of cash; C ignores the service already delivered."
        },
        {
          q: "In the five-step revenue model, which is the second step?",
          opts: ["Determine the transaction price", "Identify the distinct performance obligations", "Allocate the price to the obligations"],
          ans: 1,
          hint: "Before you can price and allocate, you need to know what has been promised.",
          why: "The order is: identify the contract, <b>identify the performance obligations</b>, determine the price, allocate it, recognise revenue. A is step 3 and C is step 4."
        },
        {
          q: "Two companies sign identical contracts with a customer whose ability to pay is somewhat uncertain. One reports under IFRS, the other under US GAAP. Which statement is most accurate?",
          opts: ["Both must treat the contract the same way, because the standards use the same word “probable”", "Because “probable” means more likely than not under IFRS but likely to occur under US GAAP, the two could treat the contract differently", "Collectability is not part of deciding whether a contract exists"],
          ans: 1,
          hint: "Same word, different threshold.",
          why: "The wording is the same, but the threshold differs: IFRS <b>more likely than not</b>, US GAAP <b>likely to occur</b> (higher). Similar contracts can therefore be treated differently. C is wrong: a contract exists only if collection is probable."
        },
        {
          q: "Which of the following is <b>not</b> one of the usual signs that a customer has obtained control of a product?",
          opts: ["The customer has legal title", "The customer has accepted the product", "The seller has already collected the full price in cash"],
          ans: 2,
          hint: "Think about a sale on credit: control can pass before any cash arrives.",
          why: "The indicators are: seller has a <b>right to payment</b>, customer has legal title, physical possession, the risks and rewards, and has accepted the item. Cash already collected is not required, so C is the odd one out."
        },
        {
          q: "An online fashion retailer expects about 30% of this month's dresses to be returned. How should it reflect this?",
          opts: ["Record revenue only for what it does not expect to refund, plus a refund liability and an asset for the right to recover returned dresses", "Record all sales as revenue now and reduce revenue only when a dress actually comes back", "Record no revenue until the 60-day return window has closed"],
          ans: 0,
          hint: "Revenue is recorded only to the extent it is highly probable not to be reversed.",
          why: "Expected returns reduce revenue up front: the retailer records a <b>refund liability</b> and an asset for its <b>right to the returned goods</b>. B overstates revenue; C is too conservative because most sales are not expected to reverse."
        },
        {
          q: "A software company used to expense the sales commissions it pays when a multi-year contract is signed. Under the converged revenue standard these are capitalised. All else equal, how does its reported profit look in the first year after the change?",
          opts: ["Lower", "Unchanged", "Higher"],
          ans: 2,
          hint: "Capitalised costs move from this year's expenses to an asset, expensed over the contract.",
          why: "Capitalising moves the commissions out of this year's expenses into an asset that is expensed over time, so first-year profit is <b>higher</b>. Cash is unchanged."
        },
        {
          q: "CloudNest receives $50,000 from a client on 15 December for software it will deliver in February. On 31 December, CloudNest records:",
          opts: ["revenue of $50,000", "a contract asset of $50,000", "a contract liability of $50,000"],
          ans: 2,
          hint: "Who owes whom at year-end?",
          why: "Cash arrived before delivery, so CloudNest owes the client the software: a <b>contract liability</b> (deferred revenue). A records revenue before it is earned. A contract asset (B) is the opposite case: revenue earned before the right to bill."
        },
        {
          q: "Company P records revenue when goods leave its warehouse. Company Q, in the same industry, waits until the customer formally accepts delivery a few weeks later. If no adjustment is possible, the analyst should most likely describe:",
          opts: ["P's policy as less conservative than Q's", "P's policy as more conservative than Q's", "both policies as equally conservative because the totals are the same over time"],
          ans: 0,
          hint: "Earlier revenue = more or less conservative?",
          why: "Recording revenue <b>earlier</b> is <b>less conservative</b>. C misses the point: timing affects each period's revenue, margins and growth, even if totals match over the long run."
        }
      ]
    },

    /* ===================================================== LESSON 2 */
    {
      id: "l2",
      title: "Revenue in practice: agents, licences and long contracts",
      summary: "Principal vs agent, consignment and franchising, licences vs subscriptions, revenue over time, bill-and-hold.",
      los: [0],
      sections: [
        {
          title: "Principal or agent?",
          html: `
<p>When a company sells something made by someone else, ask: <b>did it control the item before the customer got it?</b></p>
<div class="tiles">
  <div class="tile"><h4>Principal (controls the item)</h4><ul><li>Reports the <b>full sale price</b> as revenue</li><li>Reports what it paid as cost of sales</li></ul></div>
  <div class="tile c2"><h4>Agent (arranges the sale)</h4><ul><li>Reports only its <b>fee or commission</b> as revenue</li><li>No cost of sales for the item itself</li></ul></div>
</div>
<h3>Worked example: TicketHub, both worlds</h3>
<p>TicketHub sells a $200 concert ticket. In world 1 it bought the ticket for $160 and resold it (principal). In world 2 it sells the promoter's ticket for a $40 commission (agent). Either way it has $15 of other costs.</p>
<div class="table-wrap"><table>
<tr><th></th><th class="num">Principal</th><th class="num">%</th><th class="num">Agent</th><th class="num">%</th></tr>
<tr><td>Revenue</td><td class="num">200</td><td class="num">100</td><td class="num">40</td><td class="num">100</td></tr>
<tr><td>Cost of sales</td><td class="num">(160)</td><td class="num">80</td><td class="num">0</td><td class="num">0</td></tr>
<tr><td>Gross profit</td><td class="num">40</td><td class="num">20</td><td class="num">40</td><td class="num">100</td></tr>
<tr><td>Other costs</td><td class="num">(15)</td><td class="num">7.5</td><td class="num">(15)</td><td class="num">37.5</td></tr>
<tr class="total"><td>Profit</td><td class="num">25</td><td class="num">12.5</td><td class="num">25</td><td class="num">62.5</td></tr>
</table></div>
<p>Same $25 profit, but the agent shows <b>one-fifth of the revenue</b> and <b>much higher margins</b>. If a company sells both ways, a shift in the mix changes its margins without any change in the underlying business.</p>
<figure class="diagram"><div class="bars">
  <div class="bar"><span>Principal: revenue</span><span class="track"><span class="fill" style="width:100%"></span></span><span class="val">200</span></div>
  <div class="bar"><span>Agent: revenue</span><span class="track"><span class="fill" style="width:20%"></span></span><span class="val">40</span></div>
  <div class="bar"><span>Principal: profit margin</span><span class="track"><span class="fill pass" style="width:12.5%"></span></span><span class="val">12.5%</span></div>
  <div class="bar"><span>Agent: profit margin</span><span class="track"><span class="fill pass" style="width:62.5%"></span></span><span class="val">62.5%</span></div>
</div></figure>
<h3>Consignment and franchising are agent-style</h3>
<ul>
<li>A <b>consignment</b> seller holds other people's goods and keeps a commission. Revenue = the <b>commission</b>, not the full price of the goods sold.</li>
<li>A <b>franchisor</b> records its <b>royalties</b> (say 6% of each franchised restaurant's sales), not the restaurants' total sales. An <b>up-front franchise fee</b> is deferred and recorded over the life of the agreement (e.g. a $50,000 fee for a 10-year franchise gives $5,000 of revenue a year). Food and equipment it sells to franchisees are its own sales, recorded on delivery.</li>
</ul>`
        },
        {
          title: "Licence or subscription?",
          html: `
<div class="table-wrap"><table>
<tr><th></th><th>Software licence installed by the customer</th><th>Cloud subscription (software as a service)</th></tr>
<tr><td>What the customer gets</td><td>A right to use the software as it is when delivered</td><td>Access to software the provider keeps running and updating</td></tr>
<tr><td>Revenue timing</td><td><b>At a point in time</b>, when the licence is made available, unless the provider keeps changing the software in ways that affect the customer (then over the licence term)</td><td><b>Over time</b>, across the subscription term</td></tr>
<tr><td>Support and updates sold with a licence</td><td colspan="2">A separate obligation, recorded over the support period</td></tr>
</table></div>
<p>Analyst angle: when a software company moves customers from licences to subscriptions, <b>near-term revenue falls</b> (an up-front amount becomes a stream) even if the business is healthy. Look at the revenue mix before calling it a slowdown.</p>`
        },
        {
          title: "Long contracts: revenue over time",
          html: `
<p>A performance obligation is satisfied <b>over time</b> if any one of these is true:</p>
<div class="tree">
  <div class="q">Is revenue recorded over time?</div>
  <div class="branches">
    <div class="branch"><div class="if">The customer receives and uses the benefit as the work is done (cleaning, payroll services)</div><div class="then">Yes</div></div>
    <div class="branch"><div class="if">The work creates or improves an asset the customer controls (renovating the customer's building)</div><div class="then">Yes</div></div>
    <div class="branch"><div class="if">The asset has no other use to the seller <b>and</b> the seller has a right to be paid for work done so far</div><div class="then">Yes</div></div>
    <div class="branch"><div class="if">None of these: e.g. the seller could sell the asset to anyone</div><div class="then">No: at a point in time</div></div>
  </div>
</div>
<p>Progress can be measured by <b>outputs</b> (units delivered, surveys) or <b>inputs</b> (costs incurred ÷ total expected costs, the “cost-to-cost” method).</p>
<h3>Worked example: Arcadia Builders' bridge</h3>
<p>Contract price <b>$40 m</b>; expected total cost <b>$32 m</b>; expected profit $8 m.</p>
<div class="timeline">
  <div class="ev"><b>Year 1.</b> Costs $8 m → 8 ÷ 32 = <b>25%</b> complete. Revenue = 25% × 40 = <b>$10 m</b>; profit = 10 − 8 = <b>$2 m</b>.</div>
  <div class="ev"><b>Year 2.</b> Costs $16 m (cumulative 24) → 24 ÷ 32 = 75%. Cumulative revenue 30, minus 10 already recorded = <b>$20 m</b>; profit = 20 − 16 = <b>$4 m</b>.</div>
  <div class="ev"><b>Year 3.</b> Finished, but total actual cost is $33 m, so Year 3 cost = 9. Revenue = 40 − 30 = <b>$10 m</b>; profit = 10 − 9 = <b>$1 m</b>.</div>
</div>
<p>Total profit = 2 + 4 + 1 = <b>$7 m</b> (= 40 − 33). The cost overrun hit the last year. Because the method depends on cost <b>estimates</b>, changes in estimates move profit between years: read the notes.</p>`
        },
        {
          title: "Bill-and-hold, and the revenue note",
          html: `
<p>Sometimes a customer buys a finished product but asks the seller to keep it for now (no storage space yet). Revenue can be recorded before shipping only if <b>all</b> of these hold:</p>
<ul>
<li>There is a <b>substantive reason</b> (typically the customer asked for it)</li>
<li>The product is <b>separately identified</b> as the customer's</li>
<li>It is <b>ready</b> for physical transfer</li>
<li>The seller <b>cannot use it or send it to another customer</b></li>
</ul>
<p>The revenue note should give: revenue split by category, contract balances and their changes, remaining performance obligations, and key judgments. These disclosures are where you check the choices described in this lesson.</p>`
        }
      ],
      traps: [
        "<b>Agent = commission only.</b> A consignment seller or marketplace agent reports its fee, not the full price of the goods.",
        "<b>Agent margins look higher</b> (smaller revenue, same profit). Don't confuse a mix shift with better performance.",
        "<b>Franchisor revenue = royalties and fees</b>, not franchisees' sales. Up-front fees are spread over the agreement.",
        "<b>Cost-to-cost:</b> % complete = costs to date ÷ <b>total expected</b> costs. Revenue this year = cumulative revenue − revenue already recorded.",
        "<b>Over time needs only one</b> of the three criteria. If the seller could sell the asset to anyone and has no right to payment for work done, it's a point in time."
      ],
      quiz: [
        {
          q: "PlayDeck, an online marketplace, sells a used guitar for $200 on behalf of the owner and keeps a 15% commission. PlayDeck never owns the guitar. How much revenue does PlayDeck report?",
          opts: ["$200", "$30", "$170"],
          ans: 1,
          hint: "Did PlayDeck control the guitar before the buyer got it?",
          why: "PlayDeck is an <b>agent</b>, so revenue = its commission: 15% × 200 = <b>$30</b>. A treats it as a principal. C is the amount passed to the owner."
        },
        {
          q: "During the year, consignment shop Second Chance sold customers' items for a total of €800,000 and kept a 20% commission, paying the rest to the owners. What revenue should it report?",
          opts: ["€640,000", "€800,000", "€160,000"],
          ans: 2,
          hint: "Whose goods were they?",
          why: "The shop never owned the goods; it reports its <b>commission</b>: 20% × 800,000 = <b>€160,000</b>. B is the full sale value (principal treatment). A is what it paid to the owners."
        },
        {
          q: "A retailer sells the same product sometimes as a principal and sometimes as an agent, for the same price and the same profit. Compared with a principal sale, an agent sale shows:",
          opts: ["higher revenue and a higher margin", "lower revenue and a higher margin", "lower revenue and the same margin"],
          ans: 1,
          hint: "Same profit, divided by a smaller revenue number.",
          why: "As an agent, revenue is only the commission, so revenue is <b>lower</b>; profit is the same, so margins are <b>higher</b>."
        },
        {
          q: "Which fact best shows that a company is acting as a principal rather than an agent?",
          opts: ["It controls the product before it is transferred to the customer", "It collects the full price from the customer", "It sends the customer a confirmation email"],
          ans: 0,
          hint: "The test is about control, not about who handles the cash.",
          why: "The deciding question is whether the company <b>controls</b> the item before transfer. An agent may also collect the full price and pass most of it on (B), and an email (C) proves nothing."
        },
        {
          q: "BurgerWay charges each new franchisee an up-front fee of $50,000 for a 10-year franchise, plus a 6% royalty on sales. A new restaurant opens on 1 January and makes $1,000,000 of sales in its first year. How much revenue does BurgerWay report from this franchisee for the year?",
          opts: ["$110,000", "$65,000", "$1,050,000"],
          ans: 1,
          hint: "Royalty on sales, plus one year's share of the up-front fee.",
          why: "Royalty = 6% × 1,000,000 = 60,000. Up-front fee spread over 10 years = 5,000. Total = <b>$65,000</b>. A records the whole fee at once; C counts the restaurant's own sales."
        },
        {
          q: "Codeforge sells a perpetual licence to its design software “as is”, with no ongoing changes that affect the customer, plus a separate two-year support contract. When is the licence revenue recorded?",
          opts: ["When the licence is made available to the customer", "Evenly over the two years of support", "Only when the support contract ends"],
          ans: 0,
          hint: "The software won't change; support is a separate promise.",
          why: "A licence to use software as it exists is recorded at the <b>point in time</b> it is made available. Support is a separate obligation recorded over the two years (B describes the support, not the licence)."
        },
        {
          q: "Which situation is <b>least likely</b> to allow revenue to be recorded over time?",
          opts: ["A cleaning company that services an office every night", "A builder renovating a factory that the customer owns and controls", "A manufacturer building standard machines it could sell to any customer, with no right to payment until delivery"],
          ans: 2,
          hint: "Check the three criteria. Which situation meets none?",
          why: "C meets none of the criteria: the asset has another use and there is no right to payment for work done, so revenue is at a <b>point in time</b>. A: the customer consumes the benefit as it's performed. B: the work improves an asset the customer controls."
        },
        {
          q: "Harbour Yards has a $12 million contract to build a ferry, with expected total costs of $9 million. In Year 1 it incurs $3.6 million of costs and uses the cost-to-cost method. Year 1 revenue is:",
          opts: ["$3.6 million", "$4.8 million", "$1.2 million"],
          ans: 1,
          hint: "% complete = costs to date ÷ total expected costs.",
          why: "3.6 ÷ 9 = 40% complete; revenue = 40% × 12 = <b>$4.8 million</b>. A is the cost, and C is the Year 1 profit (4.8 − 3.6)."
        },
        {
          q: "Delta Works has a $20 million contract with expected total costs of $16 million. In Year 1 it incurred $6 million of costs and recorded $7.5 million of revenue. In Year 2 the project is completed, with total actual costs of $17 million. Delta's Year 2 profit is:",
          opts: ["$1.5 million", "$3.0 million", "$2.5 million"],
          ans: 0,
          hint: "Year 2 revenue = total price − revenue already recorded. Year 2 cost = total actual − Year 1 cost.",
          why: "Year 2 revenue = 20 − 7.5 = 12.5. Year 2 cost = 17 − 6 = 11. Profit = <b>1.5</b>. B is the total profit over both years (20 − 17). C uses the original cost estimate (12.5 − 10)."
        },
        {
          q: "A machinery maker wants to record revenue on a finished machine that the customer has asked it to keep in its warehouse for three months. Which condition must be met?",
          opts: ["The maker may use the machine for demonstrations to other customers until it ships", "The full price must have been paid in cash", "There is a substantive reason for the arrangement, such as the customer's request"],
          ans: 2,
          hint: "Bill-and-hold has four conditions. One of the options breaks one of them.",
          why: "A substantive reason (usually the customer's request) is required, along with separate identification, readiness to ship, and the seller being <b>unable</b> to use or redirect the product. A breaks that last condition; cash (B) is not a condition."
        },
        {
          q: "Where would an analyst find a company's revenue split by region and product, its contract balances and its remaining performance obligations?",
          opts: ["In the revenue note to the financial statements", "Only in the auditor's report", "In the statement of changes in equity"],
          ans: 0,
          hint: "The revenue standard comes with extensive disclosure requirements.",
          why: "The <b>revenue note</b> must give disaggregated revenue, contract balances, remaining obligations and key judgments. The auditor's report (B) and equity statement (C) do not."
        }
      ]
    },

    /* ===================================================== LESSON 3 */
    {
      id: "l3",
      title: "Expenses: match, expense now, or capitalise?",
      summary: "The three ways expenses are recognised, and how capitalising instead of expensing changes profit, cash flow and ratios.",
      los: [1],
      sections: [
        {
          title: "The idea in plain words",
          html: `
<p>A cost is recorded as an expense when the company <b>uses up</b> the benefit it paid for. There are three patterns:</p>
<div class="tiles">
  <div class="tile"><h4>1. Match it to revenue</h4><ul><li>Inventory becomes <b>cost of goods sold</b> in the period the goods are sold</li><li>Unsold goods stay on the balance sheet as inventory</li></ul></div>
  <div class="tile c2"><h4>2. Expense it as incurred</h4><ul><li><b>Period costs</b> that don't link neatly to a sale</li><li>Head-office salaries, IT, repairs and maintenance, most research</li></ul></div>
  <div class="tile c3"><h4>3. Capitalise, then spread it</h4><ul><li>Record an <b>asset</b> (an investing cash outflow)</li><li>Expense it over its useful life as <b>depreciation</b> or <b>amortisation</b></li><li>Not for land or intangibles with indefinite lives</li></ul></div>
</div>
<div class="callout analogy"><span class="label">Analogy</span>Inventory is a waiting room for costs: they sit on the balance sheet until the goods are sold, then walk through into cost of goods sold.</div>`
        },
        {
          title: "Worked example: matching inventory",
          html: `
<p><b>Kite &amp; Co</b> starts the year with no stock. It buys 100 kites at $10 in spring and 100 kites at $12 in summer (total cost $2,200). It sells 150 kites at $20. Specific identification shows the kites sold were all 100 spring kites and 50 summer kites.</p>
<div class="table-wrap"><table>
<tr><th>Item</th><th>Working</th><th class="num">$</th></tr>
<tr><td>Revenue</td><td>150 × 20</td><td class="num">3,000</td></tr>
<tr><td>Cost of goods sold</td><td>100 × 10 + 50 × 12</td><td class="num">(1,600)</td></tr>
<tr class="total"><td>Gross profit</td><td></td><td class="num">1,400</td></tr>
<tr><td>Ending inventory (asset)</td><td>50 × 12</td><td class="num">600</td></tr>
</table></div>
<p>Check: 1,600 expensed + 600 still in inventory = 2,200 bought. The $600 will be matched against revenue next year, when those kites are sold.</p>`
        },
        {
          title: "Capitalise or expense? Two identical companies",
          html: `
<p><b>Oak Ltd</b> and <b>Pine Ltd</b> are identical. Each starts with $2,000 cash and $2,000 equity, and each year earns $1,000 cash revenue and pays $400 cash expenses. On day one each buys equipment for <b>$600</b> (3-year life, no salvage). Tax is 25% and follows the accounts. Oak <b>capitalises</b> and depreciates $200 a year; Pine <b>expenses</b> the $600 at once.</p>
<div class="table-wrap"><table>
<tr><th></th><th class="num">Oak Y1</th><th class="num">Oak Y2</th><th class="num">Oak Y3</th><th class="num">Pine Y1</th><th class="num">Pine Y2</th><th class="num">Pine Y3</th></tr>
<tr><td>Revenue</td><td class="num">1,000</td><td class="num">1,000</td><td class="num">1,000</td><td class="num">1,000</td><td class="num">1,000</td><td class="num">1,000</td></tr>
<tr><td>Cash expenses</td><td class="num">(400)</td><td class="num">(400)</td><td class="num">(400)</td><td class="num">(1,000)</td><td class="num">(400)</td><td class="num">(400)</td></tr>
<tr><td>Depreciation</td><td class="num">(200)</td><td class="num">(200)</td><td class="num">(200)</td><td class="num">0</td><td class="num">0</td><td class="num">0</td></tr>
<tr><td>Pre-tax profit</td><td class="num">400</td><td class="num">400</td><td class="num">400</td><td class="num">0</td><td class="num">600</td><td class="num">600</td></tr>
<tr><td>Tax 25%</td><td class="num">(100)</td><td class="num">(100)</td><td class="num">(100)</td><td class="num">0</td><td class="num">(150)</td><td class="num">(150)</td></tr>
<tr class="total"><td>Net income</td><td class="num">300</td><td class="num">300</td><td class="num">300</td><td class="num">0</td><td class="num">450</td><td class="num">450</td></tr>
<tr><td>Cash from operations</td><td class="num">500</td><td class="num">500</td><td class="num">500</td><td class="num">0</td><td class="num">450</td><td class="num">450</td></tr>
<tr><td>Cash from investing</td><td class="num">(600)</td><td class="num">0</td><td class="num">0</td><td class="num">0</td><td class="num">0</td><td class="num">0</td></tr>
<tr><td>Change in cash</td><td class="num">(100)</td><td class="num">500</td><td class="num">500</td><td class="num">0</td><td class="num">450</td><td class="num">450</td></tr>
<tr><td>Year-end equity</td><td class="num">2,300</td><td class="num">2,600</td><td class="num">2,900</td><td class="num">2,000</td><td class="num">2,450</td><td class="num">2,900</td></tr>
<tr><td>ROE (avg equity)</td><td class="num">14.0%</td><td class="num">12.2%</td><td class="num">10.9%</td><td class="num">0%</td><td class="num">20.2%</td><td class="num">16.8%</td></tr>
</table></div>
<p>Read the table in four lines:</p>
<ul>
<li><b>Over the three years, nothing differs</b>: net income 900 each, change in cash 900 each, equity 2,900 each.</li>
<li><b>Year 1:</b> Oak shows higher profit, ROE, margin, assets and equity. Oak's <b>cash from operations is higher every year</b> (1,500 in total vs 900) because the $600 sits in investing.</li>
<li><b>Years 2–3:</b> Pine shows the higher profit and ROE, and its growth from Year 1 to Year 2 looks spectacular. That “growth” is only the accounting choice.</li>
<li>Oak's Year 1 cash falls by 100 while Pine's doesn't: Oak paid $100 more tax in Year 1. If tax follows the accounts, expensing gets the tax saving earlier, which is worth something.</li>
</ul>
<figure class="diagram"><div class="bars">
  <div class="bar"><span>Oak NI Y1</span><span class="track"><span class="fill" style="width:66.7%"></span></span><span class="val">300</span></div>
  <div class="bar"><span>Pine NI Y1</span><span class="track"><span class="fill neg" style="width:0.5%"></span></span><span class="val">0</span></div>
  <div class="bar"><span>Oak NI Y2</span><span class="track"><span class="fill" style="width:66.7%"></span></span><span class="val">300</span></div>
  <div class="bar"><span>Pine NI Y2</span><span class="track"><span class="fill pass" style="width:100%"></span></span><span class="val">450</span></div>
</div><figcaption>Capitalising shifts profit into the early year; expensing shifts it into later years.</figcaption></figure>`
        },
        {
          title: "Ongoing purchases and the analyst's checklist",
          html: `
<p>Most companies buy assets every year. Say a firm buys a $900 batch of laptops each year (3-year life). If it capitalises, depreciation is $300 in Year 1, $600 in Year 2 and $900 from Year 3 onward. From Year 3, depreciation = spending, so profit is the <b>same</b> whichever method is used. Capitalising keeps boosting profit only while <b>spending exceeds depreciation</b> (a growing company).</p>
<div class="table-wrap"><table>
<tr><th>Capitalising (vs expensing) does this…</th><th>Effect</th></tr>
<tr><td>Profit and margins in the year of spending</td><td><b>Higher</b></td></tr>
<tr><td>Profit in later years, and profit growth</td><td><b>Lower</b></td></tr>
<tr><td>Cash from operations</td><td><b>Higher</b> (the spending is investing)</td></tr>
<tr><td>Total assets and equity, early years</td><td><b>Higher</b> → asset turnover lower</td></tr>
<tr><td>Total cash over the asset's life</td><td>Same (better for expensing if tax follows the books)</td></tr>
<tr><td>Volatility of profit</td><td><b>Lower</b> (expensing creates a dip then a jump)</td></tr>
</table></div>
<h3>Quick estimates from the balance sheet</h3>
<p>With straight-line depreciation: <b>average remaining life ≈ net PP&amp;E ÷ annual depreciation</b>; average age ≈ accumulated depreciation ÷ annual depreciation; total life ≈ gross PP&amp;E ÷ annual depreciation. (Land is excluded because it isn't depreciated.)</p>
<p class="small muted">Example: gross plant $9,000, accumulated depreciation $3,000, depreciation $400 a year → remaining life ≈ 6,000 ÷ 400 = 15 years; age ≈ 7.5 years; total life ≈ 22.5 years.</p>`
        }
      ],
      traps: [
        "<b>Capitalise = higher profit now, lower later.</b> Over the asset's life, total profit and total cash are the same.",
        "<b>CFO is always higher when capitalising</b>, because the spending goes to investing. Watch for companies capitalising costs to flatter CFO.",
        "<b>Expensing makes later growth look better</b> (a low base year). A new management team that expenses heavily can create “growth”.",
        "<b>Asset turnover:</b> capitalising raises assets, so turnover is lower; expensing gives higher turnover.",
        "<b>Accelerated depreciation</b> (for books and tax): lower profit and margin now, but <b>higher CFO</b> because of the tax saving.",
        "<b>Remaining life = net PP&amp;E ÷ depreciation</b>, not gross ÷ depreciation (that's total life)."
      ],
      quiz: [
        {
          q: "A shop starts the year with no inventory. It buys 100 units at $10 and then 100 units at $12, and sells 150 units at $20. It identifies the units sold as all 100 of the $10 units and 50 of the $12 units. What is cost of goods sold?",
          opts: ["$1,600", "$1,700", "$2,200"],
          ans: 0,
          hint: "Cost of goods sold = the cost of the units actually sold.",
          why: "100 × 10 + 50 × 12 = <b>$1,600</b>. B assumes the $12 units were sold first (100 × 12 + 50 × 10). C is everything bought, including the 50 unsold units."
        },
        {
          q: "Which cost is most likely expensed in the period it is incurred?",
          opts: ["Inventory bought for resale", "A new delivery truck", "Salaries of head-office administrative staff"],
          ans: 2,
          hint: "Which one has no product to match and no multi-year asset?",
          why: "Administrative salaries are <b>period costs</b>, expensed as incurred. Inventory (A) is matched to revenue when sold; the truck (B) is capitalised and depreciated."
        },
        {
          q: "Compared with expensing it, capitalising a long-lived asset purchase in the year it is bought gives:",
          opts: ["lower net income and higher cash from operations", "higher net income and higher cash from operations", "higher net income and lower total cash flow"],
          ans: 1,
          hint: "Only depreciation hits the income statement, and the purchase is an investing outflow.",
          why: "Only one year's depreciation is expensed, so net income is <b>higher</b>; the purchase is in investing, so CFO is <b>higher</b>. Total cash (C) is the same before tax effects."
        },
        {
          q: "Two identical companies buy the same $600 machine with a three-year life. One capitalises it, the other expenses it at once, and tax follows each company's accounts. Over the full three years, total net income is:",
          opts: ["higher for the company that capitalises", "higher for the company that expenses", "the same for both"],
          ans: 2,
          hint: "The $600 is deducted either way; only the timing differs.",
          why: "The whole $600 is expensed either way, just at different times, so total net income over the three years is <b>the same</b>. Only the year-by-year pattern differs."
        },
        {
          q: "A new management team at a railway decides to expense track upgrades that the previous team capitalised. Compared with capitalising them, the most likely effect is that:",
          opts: ["this year's net profit margin is higher", "profit growth in the following years looks higher", "this year's total asset turnover is lower"],
          ans: 1,
          hint: "Expensing lowers this year's profit and removes future depreciation.",
          why: "Expensing lowers this year's profit and avoids future depreciation, so later years look like <b>strong growth</b>. A is wrong (margin falls). C is wrong: fewer assets means turnover is <b>higher</b>."
        },
        {
          q: "Firms X and Z are identical except that, on 1 January, X capitalises a $600,000 machine (3-year life, straight line, no salvage) and Z expenses it. Tax rate 25%; no dividends. At year-end, X reports net income of $900,000 and equity of $12,000,000. Z's return on year-end equity is closest to:",
          opts: ["5.1%", "7.5%", "5.0%"],
          ans: 0,
          hint: "Z expenses 600,000 instead of depreciation of 200,000. Adjust both net income and equity.",
          why: "Z has 400,000 more pre-tax expense, or 400,000 × 0.75 = 300,000 after tax. Z's NI = 600,000; equity = 12,000,000 − 300,000 = 11,700,000. ROE = 600,000 ÷ 11,700,000 = <b>5.1%</b>. C forgets to lower equity; B is X's ROE."
        },
        {
          q: "A company buys an identical $900 batch of laptops every year, each with a 3-year life, and capitalises them. In which year does capitalising stop giving higher profit than expensing?",
          opts: ["Year 2", "Year 3", "Never, as long as it keeps buying"],
          ans: 1,
          hint: "When does annual depreciation catch up with annual spending?",
          why: "Depreciation is 300 in Year 1, 600 in Year 2 and <b>900 in Year 3</b>, equal to the year's spending, so the two methods give the same profit from Year 3. C would be true only if spending kept growing."
        },
        {
          q: "An analyst worries that a company is capitalising costs that should be expensed. Which reported figures would this practice inflate?",
          opts: ["Net income only", "Investing cash outflows only", "Current profit and cash flow from operations"],
          ans: 2,
          hint: "Capitalised costs leave the income statement and leave operating cash flow.",
          why: "Capitalising moves the cost out of expenses (profit up) and out of operating cash flow into investing (<b>CFO up</b>). Investing outflows (B) actually rise, which flatters nothing."
        },
        {
          q: "A company switches from straight-line to accelerated depreciation for both its accounts and its tax return. Next year, the most likely effect is:",
          opts: ["a higher net profit margin", "higher cash flow from operations", "lower total asset turnover"],
          ans: 1,
          hint: "More depreciation means less taxable profit. What happens to taxes paid?",
          why: "Higher depreciation lowers taxable income and <b>taxes paid</b>, so CFO rises. The margin falls (A), and net assets fall, so asset turnover <b>rises</b> (C is wrong)."
        },
        {
          q: "A company's plant and equipment has a gross cost of $9,000 and accumulated depreciation of $3,000. Annual straight-line depreciation is $400. The average remaining useful life is closest to:",
          opts: ["22.5 years", "7.5 years", "15.0 years"],
          ans: 2,
          hint: "Remaining life uses what is left on the books.",
          why: "Net PP&amp;E = 9,000 − 3,000 = 6,000; remaining life ≈ 6,000 ÷ 400 = <b>15 years</b>. A is total life (gross ÷ depreciation); B is the average age (accumulated ÷ depreciation)."
        },
        {
          q: "In a country where taxes must follow the accounts, and ignoring everything else, which choice gives the better cash outcome over an asset's life?",
          opts: ["Expensing, because the tax saving comes earlier", "Capitalising, because cash from operations is higher", "Neither, because total taxes are the same and timing never matters"],
          ans: 0,
          hint: "Same total tax, different timing. Is money today worth more than money later?",
          why: "Total tax is the same, but expensing saves tax <b>earlier</b>, and that cash can earn interest. B confuses a classification (CFO vs investing) with actual cash. C ignores the time value of money."
        }
      ]
    },

    /* ===================================================== LESSON 4 */
    {
      id: "l4",
      title: "Capitalised interest, development costs and estimates",
      summary: "Where capitalised interest ends up, adjusting coverage ratios, capitalised software costs and valuation multiples, and judging estimates.",
      los: [1],
      sections: [
        {
          title: "Capitalised interest",
          html: `
<p>When a company builds a long-term asset that takes a long time to get ready (a hotel, a ship, a power plant), the interest on the money borrowed during construction is generally <b>capitalised</b>: added to the cost of the asset instead of being expensed.</p>
<div class="tiles">
  <div class="tile"><h4>Asset for its own use</h4><ul><li>Interest becomes part of the asset</li><li>It reaches the income statement later as <b>depreciation</b>, not interest</li></ul></div>
  <div class="tile c2"><h4>Asset built to sell</h4><ul><li>A home builder: interest becomes part of <b>inventory</b></li><li>It is expensed in <b>cost of sales</b> when the homes are sold</li></ul></div>
  <div class="tile c3"><h4>Cash flow statement</h4><ul><li>Capitalised interest sits in <b>investing</b> outflows</li><li>Expensed interest is operating (US GAAP) or operating/financing (IFRS)</li><li>So capitalising makes CFO look higher</li></ul></div>
</div>
<h3>Worked example: true interest coverage</h3>
<p><b>Summit Resorts</b> is building a new hotel. This year: EBIT $500 m, interest expense on the income statement $100 m, interest capitalised $50 m, and depreciation that relates to interest capitalised in earlier years $10 m.</p>
<div class="table-wrap"><table>
<tr><th></th><th>Working</th><th class="num">Coverage</th></tr>
<tr><td>As reported</td><td>500 ÷ 100</td><td class="num">5.0×</td></tr>
<tr><td>Adjusted</td><td>(500 + 10) ÷ (100 + 50)</td><td class="num">3.4×</td></tr>
</table></div>
<p>To see the real burden, put <b>all</b> the interest in the denominator, and add back to EBIT the depreciation of interest capitalised before (it is really an old interest cost). Rating agencies do this. Lenders' covenants may define coverage differently, so check the loan agreement.</p>`
        },
        {
          title: "Development costs, and why multiples change",
          html: `
<p>Under <b>IFRS</b>, research is expensed and <b>development</b> costs are capitalised once specific conditions are met (technical feasibility, intention and ability to complete, and so on). Under <b>US GAAP</b>, research and development is generally expensed, except that <b>software</b> development costs are capitalised once technological feasibility is reached. “Feasibility” needs judgment, so two companies can treat similar spending very differently.</p>
<h3>Worked example: Pixel Labs, both worlds</h3>
<p>Pixel Labs (no debt, 5,000 shares at $30) reports operating income of $10,000 after capitalising $5,000 of software development this year and amortising $1,500 of past capitalised costs. Depreciation $1,000; CFO $12,000; tax 25%.</p>
<div class="table-wrap"><table>
<tr><th></th><th class="num">As reported (capitalise)</th><th class="num">Adjusted (expense)</th></tr>
<tr><td>Operating income</td><td class="num">10,000</td><td class="num">10,000 − 5,000 + 1,500 = 6,500</td></tr>
<tr><td>Net income (× 0.75)</td><td class="num">7,500</td><td class="num">4,875</td></tr>
<tr><td>EPS</td><td class="num">1.50</td><td class="num">0.98</td></tr>
<tr><td><b>P/E</b> (price $30)</td><td class="num">20.0</td><td class="num">30.8</td></tr>
<tr><td>CFO (capitalised spending was in investing)</td><td class="num">12,000</td><td class="num">12,000 − 5,000 = 7,000</td></tr>
<tr><td><b>P/CFO</b> (per share 2.40 vs 1.40)</td><td class="num">12.5</td><td class="num">21.4</td></tr>
<tr><td>EBITDA (op. income + depreciation + amortisation)</td><td class="num">12,500</td><td class="num">7,500</td></tr>
<tr><td><b>EV/EBITDA</b> (EV = 150,000)</td><td class="num">12.0</td><td class="num">20.0</td></tr>
</table></div>
<p>Capitalising makes Pixel look <b>cheaper</b> on every multiple. Compare it with a rival that expenses everything and Pixel may seem a bargain purely because of accounting. Use the adjusted figures for comparison.</p>
<p class="small muted">The effect reverses if spending slows: once this year's spending is below the amortisation of past costs, expensing would give the <b>higher</b> income.</p>`
        },
        {
          title: "Estimates and conservatism",
          html: `
<p>Many expenses rest on estimates: bad debts, warranty costs, useful lives, salvage values. A policy that records expenses <b>later</b> is <b>less conservative</b>.</p>
<div class="tree">
  <div class="q">An estimate changed or differs from peers. Why?</div>
  <div class="branches">
    <div class="branch"><div class="if">Explained by the business (better product quality → fewer warranty claims; newer equipment → longer lives; safer customers → fewer bad debts)</div><div class="then">Probably fine</div></div>
    <div class="branch"><div class="if">No business reason, and it happens to lift profit just when a target is near</div><div class="then">Possible earnings management: dig deeper</div></div>
  </div>
</div>
<p>Where to look: accounting policies and estimates in the <b>notes</b>; critical estimates in the <b>MD&amp;A</b>.</p>
<h3>Impairments</h3>
<p>A large impairment (write-down) of assets this year suggests the assets were carried too high, so earlier depreciation was probably too low and <b>earlier profits overstated</b>. It lowers this year's profit and margin, so later margins will likely look better by comparison. It is a <b>non-cash</b> charge: no effect on CFO.</p>`
        }
      ],
      traps: [
        "<b>Capitalised interest shows up later as depreciation</b> (own-use asset) or in cost of sales (asset for sale), not as interest expense.",
        "<b>Adjusted coverage</b> = (EBIT + depreciation of past capitalised interest) ÷ (interest expense + interest capitalised). Usually lower than reported.",
        "<b>Capitalising boosts CFO</b> (the cost moves to investing) and makes P/E, P/CFO and EV/EBITDA look <b>lower</b> (cheaper).",
        "<b>Impairment:</b> earlier profits were probably overstated; no cash effect; later margins likely higher.",
        "<b>Later expense recognition = less conservative.</b> Changing estimates without a business reason is a warning sign."
      ],
      quiz: [
        {
          q: "A retailer capitalises interest while building its own new head office. In later years, that capitalised interest appears on the income statement as:",
          opts: ["interest expense", "depreciation expense", "cost of goods sold"],
          ans: 1,
          hint: "The interest became part of the building's cost.",
          why: "For an asset the company uses itself, capitalised interest is part of the asset and is expensed through <b>depreciation</b>. C would apply to an asset built for sale."
        },
        {
          q: "A home builder capitalises interest on loans used to build houses for sale. The capitalised interest is expensed:",
          opts: ["as depreciation over 30 years", "as interest expense in the year it is paid", "as part of cost of sales when the houses are sold"],
          ans: 2,
          hint: "Houses built for sale are inventory.",
          why: "For an asset built to sell, capitalised interest becomes part of <b>inventory</b> and is expensed in <b>cost of sales</b> when the house is sold. Houses held for sale are not depreciated (A)."
        },
        {
          q: "Compared with expensing it, capitalising interest makes reported cash flow from operations:",
          opts: ["higher", "lower", "unchanged"],
          ans: 0,
          hint: "Where in the cash flow statement does capitalised interest go?",
          why: "Capitalised interest is part of the asset's cost, an <b>investing</b> outflow, so CFO is <b>higher</b> than if it had been expensed."
        },
        {
          q: "A utility reports EBIT of $800 m and interest expense of $160 m. Its notes show $40 m of interest capitalised this year and $20 m of depreciation relating to interest capitalised in earlier years. Its interest coverage, adjusted for capitalised interest, is closest to:",
          opts: ["5.0×", "4.0×", "4.1×"],
          ans: 2,
          hint: "Adjust both the top and the bottom of the ratio.",
          why: "(800 + 20) ÷ (160 + 40) = 820 ÷ 200 = <b>4.1×</b>. A is the reported ratio (800 ÷ 160). B adjusts only the denominator."
        },
        {
          q: "Why do rating agencies add capitalised interest to interest expense when they calculate coverage ratios?",
          opts: ["Because the company still has to pay all of that interest, wherever the accounts put it", "Because capitalised interest is not tax-deductible", "Because IFRS requires coverage ratios to be disclosed that way"],
          ans: 0,
          hint: "Coverage measures the ability to meet interest obligations.",
          why: "The whole interest bill is a real obligation; capitalising only changes where it is shown. Including it gives a <b>truer picture of solvency</b>. B and C are invented."
        },
        {
          q: "This year a software company capitalised $6,000 of development costs and amortised $2,000 of costs capitalised in earlier years. If it had expensed all development costs instead, its pre-tax operating income would change by:",
          opts: ["−$6,000", "−$4,000", "−$2,000"],
          ans: 1,
          hint: "Add the new expense, remove the amortisation.",
          why: "Expensing adds 6,000 of expense but removes the 2,000 of amortisation: net change <b>−4,000</b>. A forgets to remove the amortisation."
        },
        {
          q: "Same company: $6,000 of development costs were capitalised this year (shown in investing cash flows). If it had expensed them, its cash flow from operations would be:",
          opts: ["$6,000 lower", "$4,000 lower", "unchanged"],
          ans: 0,
          hint: "Amortisation is non-cash. What moves between cash flow sections?",
          why: "The $6,000 cash spent would move from investing to operating, so CFO would be <b>$6,000 lower</b>. Amortisation (part of B's logic) is non-cash and never affected CFO."
        },
        {
          q: "Two otherwise similar software firms: one capitalises development costs, the other expenses them all. Using reported figures, the most likely result is that:",
          opts: ["the capitalising firm has a higher true value", "the expensing firm looks cheaper on P/E", "the capitalising firm may look cheaper on P/E, P/CFO and EV/EBITDA purely because of accounting"],
          ans: 2,
          hint: "Capitalising raises earnings, CFO and EBITDA, the denominators of the multiples.",
          why: "Higher earnings, CFO and EBITDA give <b>lower multiples</b>, so the capitalising firm looks cheaper. That is an accounting effect, not value (A). Adjust before comparing."
        },
        {
          q: "A company has been capitalising development costs for years. This year its development spending drops well below the amortisation of past capitalised costs. Compared with capitalising, expensing all development costs this year would give:",
          opts: ["lower operating income", "higher operating income", "the same operating income"],
          ans: 1,
          hint: "Compare this year's spending with this year's amortisation.",
          why: "Expensing replaces the (large) amortisation with the (small) current spending, so income is <b>higher</b>. The usual “capitalising boosts profit” only holds while spending exceeds amortisation."
        },
        {
          q: "With no change in its business, a company lengthens the useful lives of its machines from 8 to 12 years just as it was about to miss its earnings target. The best interpretation is that:",
          opts: ["the change is less conservative and may be earnings management", "the change is more conservative because depreciation falls", "the change has no effect on reported profit"],
          ans: 0,
          hint: "Longer life → lower depreciation → higher profit. Is there a business reason?",
          why: "Longer lives lower depreciation and raise profit: <b>less conservative</b>. With no business reason and a target in sight, it is a warning sign. B gets the direction wrong; C is false."
        },
        {
          q: "A shipping company records a large impairment loss on its older vessels this year. Which statement is most likely correct?",
          opts: ["Cash flow from operations fell by the amount of the impairment", "Net income in earlier years was probably understated", "Net profit margins in later years will probably be higher than this year's"],
          ans: 2,
          hint: "Impairment is non-cash, and it suggests depreciation was too low before.",
          why: "This year's margin is depressed by the one-off charge, so later margins are likely to be <b>higher</b>. The charge is non-cash (A is wrong). It suggests earlier depreciation was too low, so earlier income was <b>overstated</b> (B has it backwards)."
        }
      ]
    },

    /* ===================================================== LESSON 5 */
    {
      id: "l5",
      title: "One-off items and accounting changes",
      summary: "Unusual or infrequent items, discontinued operations, changes in policy and estimates, error corrections, scope and currency effects.",
      los: [2],
      sections: [
        {
          title: "The idea in plain words",
          html: `
<p>An analyst reads last year's income statement to predict next year's. So the key question for every line is: <b>will this happen again?</b> A restaurant chain that sold its head office this year made a gain it won't repeat. A chain that has “restructured” every year for five years will probably do it again.</p>
<div class="tiles">
  <div class="tile"><h4>Unusual or infrequent items</h4><ul><li>Restructuring costs, gains and losses on selling assets or a business, litigation, storm or fire damage</li><li><b>IFRS:</b> show separately when material or relevant to understanding performance</li><li><b>US GAAP:</b> material items that are unusual <i>or</i> infrequent are shown separately <b>within continuing operations</b></li><li>They are still part of ordinary activities</li></ul></div>
  <div class="tile c2"><h4>Discontinued operations</h4><ul><li>A component the company has sold or plans to sell, with no further involvement</li><li>Must be separable <b>physically and operationally</b></li><li>Shown <b>net of tax</b>, after continuing operations, with its own per-share figure</li><li>Its assets and liabilities: “held for sale”</li></ul></div>
</div>
<div class="callout key"><span class="label">How to use them in a forecast</span>Discontinued operations won't earn anything after the sale, so they can usually be <b>left out</b> of forecasts. Unusual items need <b>judgment</b>: don't simply ignore them all. Ask whether they keep coming back.</div>`
        },
        {
          title: "Worked example: Brightline Foods",
          html: `
<div class="table-wrap"><table>
<tr><th>Brightline Foods ($ m)</th><th class="num">2026</th></tr>
<tr><td>Revenue</td><td class="num">5,000</td></tr>
<tr><td>Operating expenses</td><td class="num">(4,400)</td></tr>
<tr><td><b>Recurring operating profit</b></td><td class="num">600</td></tr>
<tr><td>Restructuring: closing two bakeries</td><td class="num">(80)</td></tr>
<tr><td>Gain on sale of the “Sunny” brand</td><td class="num">150</td></tr>
<tr><td>Operating profit</td><td class="num">670</td></tr>
<tr><td>Interest and tax</td><td class="num">(220)</td></tr>
<tr><td>Profit from continuing operations</td><td class="num">450</td></tr>
<tr><td>Profit from discontinued operations (frozen-food division sold), net of tax</td><td class="num">40</td></tr>
<tr class="total"><td>Net profit</td><td class="num">490</td></tr>
</table></div>
<p>For next year's forecast: start from recurring operating profit of 600. Drop the 40 of discontinued profit (the division is gone). The brand gain is a one-off. The restructuring charge: check the history. If Brightline restructures most years, budget for something similar.</p>`
        },
        {
          title: "Accounting changes and corrections",
          html: `
<div class="table-wrap"><table>
<tr><th>Type of change</th><th>Example</th><th>How it is reported</th></tr>
<tr><td><b>Change in accounting policy</b></td><td>Switching inventory method; adopting a new standard</td><td><b>Retrospective</b> (if practical): every year shown in the report is restated as if the new policy had always applied. Notes explain the change and why. A new standard may allow other options, e.g. <b>modified retrospective</b>: no restatement, just adjust opening retained earnings for the cumulative effect.</td></tr>
<tr><td><b>Change in accounting estimate</b></td><td>New useful life, new bad-debt rate</td><td><b>Prospective</b>: current and future periods only. No restatement; significant changes disclosed in the notes.</td></tr>
<tr><td><b>Correction of a prior-period error</b></td><td>Revenue double-counted last year</td><td><b>Restate</b> the prior periods shown (all statements). Read the disclosure: it may reveal weak controls.</td></tr>
</table></div>
<h3>Worked example: a new revenue rule makes results look better</h3>
<p><b>Quill Software</b> adopts a new revenue standard and restates last year. Under the old rules, last year's revenue was $800 m and net income $160 m (margin 20%). Restated, revenue is $860 m and net income $198 m (margin 23%). Same business, same cash; the new rules record licence revenue earlier. Because both years are restated, the trend stays comparable, and the disclosure lets you see the size of the effect.</p>
<h3>Changes in scope and currency</h3>
<p>A big acquisition or a strong currency can lift reported revenue with no change in the underlying business. Standards don't require companies to quantify these effects, but many report growth “excluding acquisitions and currency” in management commentary. Look for it.</p>`
        }
      ],
      traps: [
        "<b>Fires, floods, restructurings and asset-sale gains</b> are in <b>continuing operations</b>, not discontinued operations and not OCI.",
        "<b>Discontinued = a whole component</b>, separable physically and operationally, sold or to be sold. Closing a few stores is not.",
        "<b>Policy change → retrospective</b> for the periods shown in the report (not every year since the company began).",
        "<b>Estimate change → prospective</b>, no restatement.",
        "<b>Error → restate</b> prior periods presented.",
        "<b>“Extraordinary items” no longer exist</b> under US GAAP or IFRS."
      ],
      quiz: [
        {
          q: "An IFRS reporter's warehouse is badly damaged by an earthquake, causing a large loss. The loss would most likely be reported in:",
          opts: ["continuing operations, possibly as a separate line", "discontinued operations", "other comprehensive income"],
          ans: 0,
          hint: "Is the company getting rid of a business?",
          why: "A rare loss is still part of <b>continuing operations</b>, shown separately if material. Discontinued operations (B) are for disposing of a component. OCI (C) is for specific items such as some revaluations, not disaster losses."
        },
        {
          q: "Costs to close two factories and lay off staff are best described as:",
          opts: ["discontinued operations", "an extraordinary item shown below net income", "part of continuing operations, often shown separately"],
          ans: 2,
          hint: "Restructuring is part of running a business.",
          why: "Restructuring charges are part of ordinary activities, in <b>continuing operations</b>, often shown on a separate line. Extraordinary items (B) no longer exist; closing two plants isn't a disposal of a component (A)."
        },
        {
          q: "Which event would most likely be reported as a discontinued operation?",
          opts: ["A clothing chain closes 3 of its 200 stores", "A food group sells its entire frozen-food division, which has its own plants and management, and keeps no involvement", "A trucking firm sells an old truck at a loss"],
          ans: 1,
          hint: "The component must be separable physically and operationally, with no further involvement.",
          why: "Only B disposes of a whole <b>component</b> that is separable physically and operationally. Closing a few stores (A) or selling one asset (C) are ordinary items in continuing operations."
        },
        {
          q: "How are the results of discontinued operations presented on the income statement?",
          opts: ["Net of tax, after income from continuing operations, with a per-share figure", "Before tax, included in operating profit", "Only in the notes, not on the face of the statement"],
          ans: 0,
          hint: "The aim is to separate what is continuing from what is not.",
          why: "Discontinued operations appear <b>net of tax</b>, below continuing operations, with their own <b>EPS</b>, so the analyst can see continuing results clearly."
        },
        {
          q: "A company has reported a “one-off” restructuring charge in four of the last five years. In forecasting next year's earnings, the analyst should most likely:",
          opts: ["ignore it, because the company calls it one-off", "assume a similar charge is likely to recur", "treat it as a discontinued operation"],
          ans: 1,
          hint: "Look at the pattern, not the label.",
          why: "Something that happens almost every year is effectively <b>recurring</b>, so budget for it. Ignoring all unusual items (A) is a classic mistake. It has nothing to do with discontinued operations (C)."
        },
        {
          q: "A retailer voluntarily changes its inventory method. If practical, which periods must it restate?",
          opts: ["Only the current and future periods", "Every year since the company was founded", "All periods presented in the current financial report"],
          ans: 2,
          hint: "Retrospective, but only as far as the report goes.",
          why: "A policy change is applied <b>retrospectively</b> to every period <b>shown in the report</b>, so the years are comparable. A describes an estimate change; B goes much further than required."
        },
        {
          q: "A company revises the expected useful life of its delivery fleet from 5 to 7 years. How is this reported?",
          opts: ["Restate prior years' depreciation", "In the current and future periods only, with no restatement", "As a cumulative adjustment to opening retained earnings"],
          ans: 1,
          hint: "A useful life is an estimate, not a policy.",
          why: "Changes in <b>estimates</b> are prospective: they affect the current and future periods only, disclosed in the notes if significant. A and C describe policy changes."
        },
        {
          q: "A company discovers that it double-counted some revenue in last year's published statements. How should it fix this?",
          opts: ["Restate the prior-period statements presented and disclose the error", "Reduce this year's revenue by the same amount", "Disclose it in the notes only, without changing any numbers"],
          ans: 0,
          hint: "The current year's figures did nothing wrong.",
          why: "A prior-period error is corrected by <b>restating</b> the prior periods shown, with disclosure. B would distort this year's results; C leaves wrong numbers in the report."
        },
        {
          q: "A company adopts a new standard using the modified retrospective method. Which statement is most accurate?",
          opts: ["All prior years shown are restated", "The change is applied only to transactions in future years", "Prior years are not restated; opening retained earnings is adjusted for the cumulative effect"],
          ans: 2,
          hint: "“Modified” means a shortcut on restatement.",
          why: "Under the <b>modified retrospective</b> approach, previous statements are not revised; instead the <b>cumulative effect</b> goes into opening retained earnings. A is the full retrospective method."
        },
        {
          q: "Quill Software restates last year for a new revenue standard: revenue goes from $800 m to $860 m and net income from $160 m to $198 m. Its restated net profit margin is closest to:",
          opts: ["20.0%", "23.0%", "24.8%"],
          ans: 1,
          hint: "Use restated income over restated revenue.",
          why: "198 ÷ 860 = <b>23.0%</b>. A is the old margin (160 ÷ 800). C mixes restated income with old revenue (198 ÷ 800)."
        },
        {
          q: "A company's revenue grew 12% this year. It bought a large competitor in mid-year, and its home currency strengthened against the reporting currency. Which statement is most accurate?",
          opts: ["Part of the growth may come from the acquisition and the currency. Standards don't require the company to quantify these effects, though many do so voluntarily", "The standards require a note splitting growth into acquisitions, currency and underlying growth", "The 12% must be underlying growth because acquisitions are excluded from revenue in their first year"],
          ans: 0,
          hint: "What are companies required to disclose about scope and currency effects?",
          why: "Acquisitions and currency can drive reported growth. Standards <b>don't require</b> the split (B is wrong), but many companies give growth excluding them in their commentary. C is false: acquired revenue is consolidated from the closing date."
        }
      ]
    },

    /* ===================================================== LESSON 6 */
    {
      id: "l6",
      title: "Basic earnings per share",
      summary: "Simple vs complex capital structures, the basic EPS formula, weighted average shares, splits and stock dividends.",
      los: [3],
      sections: [
        {
          title: "The idea in plain words",
          html: `
<p>Profit belongs to the owners. <b>Earnings per share</b> tells each ordinary shareholder how much of this year's profit is “theirs”. Preferred shareholders are paid first, so their dividends come off the top.</p>
<div class="callout key"><span class="label">Formula</span><b>Basic EPS = (Net income − Preferred dividends) ÷ Weighted average number of ordinary shares outstanding</b></div>
<ul>
<li><b>Ordinary shares</b> (IFRS) = <b>common shares</b> (US GAAP): the last in line, who gain most when things go well.</li>
<li>Dividends paid to <b>common</b> shareholders are <b>not</b> subtracted: they are a share of the profit, not a cost.</li>
<li>Both IFRS and US GAAP require EPS on the <b>face of the income statement</b>, for profit from continuing operations and for net profit.</li>
</ul>
<div class="tiles">
  <div class="tile"><h4>Simple capital structure</h4><ul><li>No securities that could turn into ordinary shares</li><li>Basic EPS = diluted EPS</li></ul></div>
  <div class="tile c2"><h4>Complex capital structure</h4><ul><li>Has potentially convertible securities: <b>convertible bonds, convertible preferred shares, employee stock options, warrants</b></li><li>Diluted EPS may be lower than basic EPS</li></ul></div>
</div>
<p class="small muted">A warrant is like a call option issued by the company itself: the holder may buy new shares at a fixed price. Issuing plain shares many times in a year does not make the structure complex.</p>`
        },
        {
          title: "Worked example: weighting the shares",
          html: `
<p><b>Delta Outdoor</b>: net income $5,000,000; preferred dividends $500,000. Shares: 2,000,000 on 1 January; 300,000 issued on 1 May; 150,000 bought back on 1 November.</p>
<div class="timeline">
  <div class="ev"><b>Jan–Apr (4 months):</b> 2,000,000 × 4/12 = 666,667</div>
  <div class="ev"><b>May–Oct (6 months):</b> 2,300,000 × 6/12 = 1,150,000</div>
  <div class="ev"><b>Nov–Dec (2 months):</b> 2,150,000 × 2/12 = 358,333</div>
</div>
<p>Weighted average = 666,667 + 1,150,000 + 358,333 = <b>2,175,000</b>.</p>
<p>Basic EPS = (5,000,000 − 500,000) ÷ 2,175,000 = <b>$2.07</b>.</p>
<p class="small muted">Shortcut: start with the opening shares and add each change times the fraction of the year it was outstanding: 2,000,000 + 300,000 × 8/12 − 150,000 × 2/12 = 2,175,000.</p>`
        },
        {
          title: "Splits and stock dividends: go back to day one",
          html: `
<p>A stock split or stock dividend brings in <b>no new money</b>; it just cuts the same cake into more slices. So it is treated as if it had happened at the <b>start of the period</b> (and earlier years shown are restated too).</p>
<p>Delta again, but on 1 December a <b>3-for-2 split</b> takes effect (every 2 shares become 3). Every share count in the year is multiplied by 1.5, whenever the split happened:</p>
<div class="table-wrap"><table>
<tr><th></th><th class="num">Before the split</th><th class="num">After (× 1.5)</th></tr>
<tr><td>Weighted average shares</td><td class="num">2,175,000</td><td class="num">3,262,500</td></tr>
<tr><td>Basic EPS</td><td class="num">2.07</td><td class="num">4,500,000 ÷ 3,262,500 = 1.38</td></tr>
</table></div>
<div class="callout analogy"><span class="label">Analogy</span>A split is cutting a pizza into 12 slices instead of 8. Nobody gets more pizza, so you don't pretend the extra slices only existed for the last month.</div>`
        }
      ],
      traps: [
        "<b>Don't subtract common dividends</b>; only preferred dividends come off the numerator.",
        "<b>Use the weighted average</b> number of shares, not the year-end number and not a simple average of opening and closing.",
        "<b>Splits and stock dividends are retroactive</b> to the start of the period (and prior periods).",
        "<b>Issuing plain common shares</b>, even several times, keeps the capital structure simple: basic = diluted.",
        "<b>Non-convertible preferred shares and straight bonds</b> don't make the structure complex."
      ],
      quiz: [
        {
          q: "A company earns net income of $3,000,000 and pays $600,000 of preferred dividends. Its weighted average number of common shares is 1,200,000. Basic EPS is:",
          opts: ["$2.50", "$2.00", "$1.50"],
          ans: 1,
          hint: "Take the preferred dividends off first.",
          why: "(3,000,000 − 600,000) ÷ 1,200,000 = <b>$2.00</b>. A ignores the preferred dividends."
        },
        {
          q: "A company had 1,000,000 shares on 1 January and issued 200,000 new shares on 1 October. Its weighted average number of shares for the calendar year is:",
          opts: ["1,200,000", "1,100,000", "1,050,000"],
          ans: 2,
          hint: "The new shares were outstanding for 3 months.",
          why: "1,000,000 + 200,000 × 3/12 = <b>1,050,000</b>. A uses year-end shares. B is a simple average of opening and closing."
        },
        {
          q: "A company had 2,000,000 shares at the start of the year and bought back 100,000 shares on 1 July. Its weighted average number of shares is:",
          opts: ["1,950,000", "1,900,000", "2,000,000"],
          ans: 0,
          hint: "The bought-back shares were outstanding for half the year.",
          why: "2,000,000 − 100,000 × 6/12 = <b>1,950,000</b>. B is the year-end count; C ignores the buyback."
        },
        {
          q: "Harbor Tools had net income of $2,400,000. It had 2,000,000 shares on 1 January and issued 400,000 shares on 1 April. It paid $300,000 of dividends to common shareholders and has no preferred shares. Basic EPS is closest to:",
          opts: ["$1.00", "$0.91", "$1.04"],
          ans: 2,
          hint: "Weight the new shares for 9 months. Are common dividends subtracted?",
          why: "Weighted shares = 2,000,000 + 400,000 × 9/12 = 2,300,000. EPS = 2,400,000 ÷ 2,300,000 = <b>$1.04</b>. A uses year-end shares (2,400,000). B wrongly subtracts the common dividends."
        },
        {
          q: "A company had 500,000 shares all year and net income of $1,000,000. A 2-for-1 stock split took effect on 1 December. Basic EPS is:",
          opts: ["$1.00", "$1.85", "$2.00"],
          ans: 0,
          hint: "A split is treated as if it happened at the start of the year.",
          why: "After the split there are 1,000,000 shares, treated as outstanding all year: EPS = <b>$1.00</b>. B weights the split for one month only; C ignores the split."
        },
        {
          q: "A company had 1,000,000 shares on 1 January and paid a 10% stock dividend on 1 June. No other changes. The weighted average number of shares for EPS is:",
          opts: ["1,058,333", "1,100,000", "1,000,000"],
          ans: 1,
          hint: "Stock dividends work like splits.",
          why: "The 100,000 new shares are treated as outstanding from 1 January: <b>1,100,000</b>. A wrongly time-weights them from June."
        },
        {
          q: "A company with no debt and no convertible securities issued new common shares three times during the year. Which statement is correct?",
          opts: ["Its basic EPS equals its diluted EPS", "It has a complex capital structure at year-end", "Basic EPS uses a simple average of opening and closing shares"],
          ans: 0,
          hint: "What makes a capital structure complex?",
          why: "With nothing that could convert into shares, the structure is <b>simple</b>, so basic = diluted. Issuing plain shares doesn't make it complex (B). EPS uses a <b>weighted</b> average (C)."
        },
        {
          q: "Which security would make a company's capital structure complex?",
          opts: ["Non-convertible preferred shares", "Ordinary bonds with no conversion feature", "Employee stock options"],
          ans: 2,
          hint: "Which one could turn into common shares?",
          why: "<b>Stock options</b> can become common shares, so they make the structure complex. A and B can never become common shares."
        },
        {
          q: "Stonebridge Homes reports: shares outstanding on 1 January 3,000,000; a stock dividend of 600,000 shares on 1 August; warrants outstanding all year; net income $5,000,000; preferred dividends $680,000; common dividends $300,000. Its basic EPS is closest to:",
          opts: ["$1.11", "$1.20", "$1.39"],
          ans: 1,
          hint: "The stock dividend counts from 1 January. Only preferred dividends are subtracted.",
          why: "Shares = 3,600,000 (stock dividend retroactive). EPS = (5,000,000 − 680,000) ÷ 3,600,000 = <b>$1.20</b>. A also subtracts common dividends; C subtracts nothing."
        },
        {
          q: "Under IFRS, where must EPS be presented?",
          opts: ["Only in the notes", "Only for total net profit", "On the face of the income statement, for profit from continuing operations and for net profit"],
          ans: 2,
          hint: "EPS is one of the headline numbers.",
          why: "EPS must be shown <b>on the face</b> of the income statement for both <b>continuing operations</b> and <b>net profit</b>; US GAAP requires a similar presentation."
        }
      ]
    },

    /* ===================================================== LESSON 7 */
    {
      id: "l7",
      title: "Diluted EPS",
      summary: "The if-converted method for convertible preferred shares and bonds, the treasury stock method for options and warrants, and antidilution.",
      los: [3],
      sections: [
        {
          title: "The idea in plain words",
          html: `
<p>Diluted EPS answers: <b>what would EPS be if everyone who could become a shareholder did so</b>, at the start of the year (or when the security was issued, if later)? More shares usually means a thinner slice each, so diluted EPS is <b>never higher</b> than basic EPS.</p>
<div class="table-wrap"><table>
<tr><th>Security</th><th>Method</th><th>Numerator</th><th>Denominator</th></tr>
<tr><td>Convertible preferred</td><td>If-converted</td><td>Add back the <b>preferred dividends</b> (no longer paid)</td><td>+ shares from conversion</td></tr>
<tr><td>Convertible bonds</td><td>If-converted</td><td>Add back <b>after-tax interest</b> = interest × (1 − t)</td><td>+ shares from conversion</td></tr>
<tr><td>Options and warrants</td><td>Treasury stock method</td><td><b>No change</b></td><td>+ shares issued − shares bought back with the exercise money</td></tr>
</table></div>`
        },
        {
          title: "Worked examples: the if-converted method",
          html: `
<h3>Convertible preferred: Riverstone Energy</h3>
<p>Net income $2,500,000; 800,000 common shares; 50,000 convertible preferred shares, each paying a $6 dividend ($300,000 in total) and convertible into 3 common shares.</p>
<div class="table-wrap"><table>
<tr><th></th><th class="num">Basic</th><th class="num">Diluted (if-converted)</th></tr>
<tr><td>Net income</td><td class="num">2,500,000</td><td class="num">2,500,000</td></tr>
<tr><td>Preferred dividends</td><td class="num">(300,000)</td><td class="num">0 (would not be paid)</td></tr>
<tr><td>Numerator</td><td class="num">2,200,000</td><td class="num">2,500,000</td></tr>
<tr><td>Shares</td><td class="num">800,000</td><td class="num">800,000 + 150,000 = 950,000</td></tr>
<tr class="total"><td>EPS</td><td class="num">2.75</td><td class="num">2.63</td></tr>
</table></div>
<h3>Convertible bonds: Northwind Ltd</h3>
<p>Net income $900,000; 600,000 shares; $1,000,000 of 6% bonds convertible into 50,000 shares; tax rate 30%. Interest saved = 60,000; after tax = 60,000 × 0.70 = 42,000.</p>
<div class="table-wrap"><table>
<tr><th></th><th class="num">Basic</th><th class="num">Diluted</th></tr>
<tr><td>Numerator</td><td class="num">900,000</td><td class="num">900,000 + 42,000 = 942,000</td></tr>
<tr><td>Shares</td><td class="num">600,000</td><td class="num">650,000</td></tr>
<tr class="total"><td>EPS</td><td class="num">1.50</td><td class="num">1.45</td></tr>
</table></div>`
        },
        {
          title: "Worked example: the treasury stock method",
          html: `
<p><b>Lumen Tech</b>: net income $3,000,000; 1,500,000 shares; 60,000 options outstanding all year with an exercise price of $25; average share price during the year $40.</p>
<div class="vflow">
  <div class="node">If exercised, holders pay 60,000 × $25 = <b>$1,500,000</b> and receive 60,000 new shares</div><div class="arrow">⬇</div>
  <div class="node">The company uses the $1,500,000 to buy back shares at the average price: 1,500,000 ÷ 40 = <b>37,500</b> shares</div><div class="arrow">⬇</div>
  <div class="node good">Net new shares = 60,000 − 37,500 = <b>22,500</b></div>
</div>
<p>Diluted EPS = 3,000,000 ÷ (1,500,000 + 22,500) = <b>$1.97</b> (basic $2.00). The numerator doesn't change, because no interest or dividend disappears.</p>
<ul>
<li><b>IFRS</b> does the same calculation without the name: the 37,500 are “inferred” shares assumed issued at market price, and only the 22,500 excess is added. Same answer.</li>
<li>Options <b>issued during the year</b>: weight the net new shares for the time outstanding (22,500 × 6/12 = 11,250 if issued on 1 July).</li>
<li>If the exercise price is <b>above</b> the average share price, the buyback would exceed the shares issued: the options are <b>antidilutive</b> and are left out.</li>
</ul>`
        },
        {
          title: "Antidilution, and reading EPS changes",
          html: `
<p>A security is <b>antidilutive</b> if including it would <b>raise</b> EPS. It is then <b>left out</b>, and diluted EPS stays at basic.</p>
<p><b>Example.</b> Net income $1,200,000; preferred dividends $100,000 on 20,000 convertible preferred shares, each convertible into 1 common share; 300,000 common shares.</p>
<div class="table-wrap"><table>
<tr><th></th><th class="num">Basic</th><th class="num">If converted</th></tr>
<tr><td>Numerator</td><td class="num">1,100,000</td><td class="num">1,200,000</td></tr>
<tr><td>Shares</td><td class="num">300,000</td><td class="num">320,000</td></tr>
<tr class="total"><td>EPS</td><td class="num">3.67</td><td class="num">3.75 ← higher, so excluded</td></tr>
</table></div>
<p>Reported diluted EPS = <b>$3.67</b>. Quick test: the conversion adds $100,000 for 20,000 shares, i.e. $5.00 per new share. That is above basic EPS of $3.67, so it can only pull EPS up.</p>
<h3>Why did EPS change?</h3>
<p>EPS rises if net income rises, if the number of shares falls (a buyback), or both. The arithmetic tells you which; finding the business reason needs further digging.</p>`
        }
      ],
      traps: [
        "<b>Convertible bonds: add back interest × (1 − tax rate)</b>, not the full interest.",
        "<b>Convertible preferred: add back the preferred dividends</b>; the numerator becomes plain net income.",
        "<b>Options and warrants change only the denominator</b> (no numerator effect).",
        "<b>Treasury stock method uses the average market price</b> for the buyback, not the year-end price.",
        "<b>Antidilutive securities are excluded</b>: diluted EPS is always ≤ basic EPS.",
        "<b>Options issued mid-year</b>: weight the incremental shares by the time outstanding."
      ],
      quiz: [
        {
          q: "A company earns net income of $4,000,000 and has 1,000,000 common shares. It also has 100,000 convertible preferred shares, each paying a $4 dividend and convertible into 2 common shares. Diluted EPS is closest to:",
          opts: ["$3.33", "$3.00", "$3.60"],
          ans: 0,
          hint: "If converted, no preferred dividend is paid and 200,000 shares are added.",
          why: "Diluted = 4,000,000 ÷ (1,000,000 + 200,000) = <b>$3.33</b>. C is basic EPS (3,600,000 ÷ 1,000,000). B adds the shares but still deducts the dividend."
        },
        {
          q: "A company has net income of $1,000,000 and 500,000 shares. It has $2,000,000 of 5% convertible bonds, convertible into 100,000 shares. The tax rate is 25%. Diluted EPS is closest to:",
          opts: ["$1.67", "$1.79", "$1.83"],
          ans: 1,
          hint: "Interest saved = 100,000. What is it after tax?",
          why: "After-tax interest = 100,000 × 0.75 = 75,000. Diluted = 1,075,000 ÷ 600,000 = <b>$1.79</b>. A adds the shares but no interest; C adds the full pre-tax interest."
        },
        {
          q: "A company has 50,000 options outstanding all year with an exercise price of $40. The average share price during the year was $50. How many net new shares does the treasury stock method add?",
          opts: ["50,000", "40,000", "10,000"],
          ans: 2,
          hint: "Proceeds ÷ average price = shares bought back.",
          why: "Proceeds = 50,000 × 40 = 2,000,000; shares bought back = 2,000,000 ÷ 50 = 40,000; net = 50,000 − 40,000 = <b>10,000</b>. B is the number bought back."
        },
        {
          q: "Coral Pharma: net income $6,000,000; preferred dividends $1,000,000; weighted average shares 2,000,000; 200,000 options outstanding all year with an exercise price of $30; average share price $40. Diluted EPS is closest to:",
          opts: ["$2.44", "$2.50", "$2.93"],
          ans: 0,
          hint: "Net new shares from the options, and keep subtracting the preferred dividends.",
          why: "Proceeds 6,000,000 ÷ 40 = 150,000 bought back; net new = 50,000. Diluted = (6,000,000 − 1,000,000) ÷ 2,050,000 = <b>$2.44</b>. B is basic EPS. C forgets the preferred dividends."
        },
        {
          q: "A company has options with an exercise price of $60. Its shares traded at an average of $50 during the year. For diluted EPS, the options are:",
          opts: ["included, adding shares to the denominator", "excluded, because they are antidilutive", "included, reducing the numerator"],
          ans: 1,
          hint: "Would anyone pay $60 for a $50 share? What would the buyback calculation give?",
          why: "Out-of-the-money options would buy back <b>more</b> shares than they issue, raising EPS: they are <b>antidilutive</b> and excluded. Options never change the numerator (C)."
        },
        {
          q: "Net income $2,000,000; 400,000 common shares; 10,000 convertible preferred shares paying $12 each ($120,000), each convertible into 2 common shares. Reported diluted EPS is:",
          opts: ["$4.76", "$4.70", "$5.00"],
          ans: 1,
          hint: "Calculate basic, then the if-converted figure, and compare.",
          why: "Basic = 1,880,000 ÷ 400,000 = 4.70. If converted = 2,000,000 ÷ 420,000 = 4.76, which is <b>higher</b>, so the preferred is antidilutive and excluded: diluted = <b>$4.70</b>."
        },
        {
          q: "When calculating diluted EPS, which security increases the number of shares without changing the income available to common shareholders?",
          opts: ["Warrants", "Convertible bonds", "Convertible preferred shares"],
          ans: 0,
          hint: "Which one has no interest or dividend that would disappear on conversion?",
          why: "<b>Warrants</b> (like options) use the treasury stock method: shares change, the numerator doesn't. Convertible bonds add back after-tax interest; convertible preferred adds back the dividends."
        },
        {
          q: "Under the if-converted method for convertible bonds, the numerator is increased by:",
          opts: ["the full pre-tax interest on the bonds", "the after-tax interest on the bonds", "the preferred dividends"],
          ans: 1,
          hint: "Interest is tax-deductible. Saving it also means losing the tax deduction.",
          why: "Without the bonds, the company saves the interest but pays more tax, so income rises by <b>interest × (1 − t)</b>. C applies to convertible preferred."
        },
        {
          q: "Options issued on 1 July add 8,000 net new shares under the treasury stock method. For a calendar-year company, how many shares do they add to the weighted average for diluted EPS?",
          opts: ["8,000", "0", "4,000"],
          ans: 2,
          hint: "They existed for half the year.",
          why: "Incremental shares are weighted for the time the options were outstanding: 8,000 × 6/12 = <b>4,000</b>."
        },
        {
          q: "A company has warrants outstanding. Which statement is most accurate?",
          opts: ["Diluted EPS is above basic EPS when the warrants are out of the money", "Basic EPS is calculated with year-end shares", "Diluted EPS will be equal to or less than basic EPS"],
          ans: 2,
          hint: "What happens to antidilutive securities?",
          why: "Antidilutive securities are excluded, so diluted EPS is always <b>≤ basic</b>. Out-of-the-money warrants are simply left out (A). Basic uses the weighted average (B)."
        },
        {
          q: "Under IFRS, how are options treated when calculating diluted EPS?",
          opts: ["The exercise money is assumed to issue shares at the average market price (“inferred” shares); only the options' excess over those shares is added, giving the same result as the treasury stock method", "All option shares are added, with no adjustment for the exercise money", "Options are ignored under IFRS"],
          ans: 0,
          hint: "Different wording, same arithmetic.",
          why: "IFRS treats the exercise money as issuing shares at the average market price and adds only the <b>excess</b> option shares, the same result as the treasury stock method. B would overstate dilution."
        },
        {
          q: "A company's EPS rose 10% although its net income was flat. The most likely reason is:",
          opts: ["revenue grew strongly", "fewer weighted average shares outstanding, for example after a buyback", "convertible securities were converted into shares"],
          ans: 1,
          hint: "If the numerator didn't move, what did?",
          why: "Same net income with higher EPS means a <b>smaller denominator</b>, e.g. a buyback. Revenue growth (A) would show in net income. Conversions (C) increase the shares."
        }
      ]
    },

    /* ===================================================== LESSON 8 */
    {
      id: "l8",
      title: "Common-size statements and margins",
      summary: "Expressing every line as a % of revenue, comparing companies of different size, and the main margin ratios.",
      los: [4],
      sections: [
        {
          title: "The idea in plain words",
          html: `
<p>Is a $1 m profit good? For a corner shop, yes; for a global brand, no. To compare companies of different sizes, or one company across years, express every line of the income statement as a <b>% of revenue</b>. That is a <b>common-size</b> (vertical) income statement.</p>
<h3>Worked example: three headphone makers ($ m)</h3>
<div class="table-wrap"><table>
<tr><th></th><th class="num">Alto</th><th class="num">%</th><th class="num">Bravo</th><th class="num">%</th><th class="num">Cora</th><th class="num">%</th></tr>
<tr><td>Sales</td><td class="num">20.0</td><td class="num">100</td><td class="num">20.0</td><td class="num">100</td><td class="num">5.0</td><td class="num">100</td></tr>
<tr><td>Cost of sales</td><td class="num">(8.0)</td><td class="num">40</td><td class="num">(14.0)</td><td class="num">70</td><td class="num">(2.0)</td><td class="num">40</td></tr>
<tr><td>Gross profit</td><td class="num">12.0</td><td class="num">60</td><td class="num">6.0</td><td class="num">30</td><td class="num">3.0</td><td class="num">60</td></tr>
<tr><td>SG&amp;A</td><td class="num">(3.0)</td><td class="num">15</td><td class="num">(3.0)</td><td class="num">15</td><td class="num">(0.75)</td><td class="num">15</td></tr>
<tr><td>Research &amp; development</td><td class="num">(2.0)</td><td class="num">10</td><td class="num">0</td><td class="num">0</td><td class="num">(0.5)</td><td class="num">10</td></tr>
<tr><td>Marketing</td><td class="num">(3.0)</td><td class="num">15</td><td class="num">0</td><td class="num">0</td><td class="num">(0.75)</td><td class="num">15</td></tr>
<tr class="total"><td>Operating profit</td><td class="num">4.0</td><td class="num">20</td><td class="num">3.0</td><td class="num">15</td><td class="num">1.0</td><td class="num">20</td></tr>
</table></div>
<figure class="diagram"><div class="bars">
  <div class="bar"><span>Alto operating margin</span><span class="track"><span class="fill pass" style="width:100%"></span></span><span class="val">20%</span></div>
  <div class="bar"><span>Bravo operating margin</span><span class="track"><span class="fill" style="width:75%"></span></span><span class="val">15%</span></div>
  <div class="bar"><span>Cora operating margin</span><span class="track"><span class="fill pass" style="width:100%"></span></span><span class="val">20%</span></div>
</div><figcaption>Cora is a quarter of Bravo's size and earns a third of its profit in dollars, but it keeps 20 cents of every sales dollar against Bravo's 15.</figcaption></figure>
<p>The percentages also reveal <b>strategy</b>: Alto spends heavily on R&amp;D and marketing and earns a much higher gross margin (60% vs 30%), which suggests better or better-known products sold at higher prices. Bravo skips those costs and competes on price. An analyst would dig into why.</p>
<p class="small muted">One exception: compare <b>tax</b> with <b>pre-tax income</b> (the effective tax rate), not with revenue.</p>`
        },
        {
          title: "The margin family",
          html: `
<div class="table-wrap"><table>
<tr><th>Ratio</th><th>Formula</th><th>What it tells you</th></tr>
<tr><td><b>Gross profit margin</b></td><td>Gross profit ÷ Revenue</td><td>Pricing power and production cost. Higher for differentiated products (brand, technology, patents)</td></tr>
<tr><td><b>Operating profit margin</b></td><td>Operating profit ÷ Revenue</td><td>After running costs (selling, admin, R&amp;D)</td></tr>
<tr><td><b>Pretax margin</b></td><td>Profit before tax ÷ Revenue</td><td>After financing costs and other non-operating items</td></tr>
<tr><td><b>Net profit margin</b> (return on sales)</td><td>Net income ÷ Revenue</td><td>What is left for the owners per dollar of sales</td></tr>
</table></div>
<p>A ratio means little alone: compare it with the company's <b>own past</b> (time series) or with <b>peers and sector figures</b> (cross-section). A differentiation strategy may take time to show in the gross margin, because R&amp;D and advertising come first and sit below gross profit.</p>`
        },
        {
          title: "Worked example: Harvest Brewing over three years",
          html: `
<p>In Year 2, Harvest Brewing bought a rival with borrowed money.</p>
<div class="table-wrap"><table>
<tr><th>$ m</th><th class="num">Y1</th><th class="num">%</th><th class="num">Y2</th><th class="num">%</th><th class="num">Y3</th><th class="num">%</th></tr>
<tr><td>Revenue</td><td class="num">1,000</td><td class="num">100</td><td class="num">1,300</td><td class="num">100</td><td class="num">1,500</td><td class="num">100</td></tr>
<tr><td>Cost of sales</td><td class="num">(400)</td><td class="num">40.0</td><td class="num">(515)</td><td class="num">39.6</td><td class="num">(580)</td><td class="num">38.7</td></tr>
<tr><td>Gross profit</td><td class="num">600</td><td class="num">60.0</td><td class="num">785</td><td class="num">60.4</td><td class="num">920</td><td class="num">61.3</td></tr>
<tr><td>Operating expenses</td><td class="num">(300)</td><td class="num">30.0</td><td class="num">(400)</td><td class="num">30.8</td><td class="num">(450)</td><td class="num">30.0</td></tr>
<tr><td>Operating profit</td><td class="num">300</td><td class="num">30.0</td><td class="num">385</td><td class="num">29.6</td><td class="num">470</td><td class="num">31.3</td></tr>
<tr><td>Finance costs</td><td class="num">(50)</td><td class="num">5.0</td><td class="num">(230)</td><td class="num">17.7</td><td class="num">(180)</td><td class="num">12.0</td></tr>
<tr><td>Profit before tax</td><td class="num">250</td><td class="num">25.0</td><td class="num">155</td><td class="num">11.9</td><td class="num">290</td><td class="num">19.3</td></tr>
<tr><td>Tax</td><td class="num">(60)</td><td class="num">6.0</td><td class="num">(40)</td><td class="num">3.1</td><td class="num">(70)</td><td class="num">4.7</td></tr>
<tr class="total"><td>Net income</td><td class="num">190</td><td class="num">19.0</td><td class="num">115</td><td class="num">8.8</td><td class="num">220</td><td class="num">14.7</td></tr>
</table></div>
<p>Net margin fell from 19.0% to 8.8% in Year 2, yet the gross and operating margins barely moved. The drop came from <b>finance costs</b> (5% → 17.7% of revenue), the price of the debt-funded acquisition, which also explains the jump in revenue. In Year 3 finance costs ease and the net margin recovers to 14.7%. Common-size figures point you to the line that changed; the notes tell you why.</p>`
        }
      ],
      traps: [
        "<b>Common-size = % of revenue</b>, not % of net income or total assets (that's the balance sheet version).",
        "<b>Common-size statements reveal strategy differences</b>; they don't hide them.",
        "<b>Tax is compared with pre-tax income</b>, not revenue, to get the effective tax rate.",
        "<b>Bigger dollar profit ≠ more profitable.</b> Compare margins.",
        "<b>Net margin</b> uses net income; <b>pretax margin</b> uses profit before tax; don't mix them up in calculations."
      ],
      quiz: [
        {
          q: "A common-size income statement expresses each line item as a percentage of:",
          opts: ["net income", "revenue", "total assets"],
          ans: 1,
          hint: "The top line becomes 100%.",
          why: "Each line is divided by <b>revenue</b>. Total assets (C) is the base for a common-size balance sheet."
        },
        {
          q: "The main benefit of common-size income statements is that they:",
          opts: ["remove the effect of size, so companies and years can be compared", "show the company's cash position", "replace the need to read the notes"],
          ans: 0,
          hint: "Why divide everything by revenue?",
          why: "Scaling by revenue <b>removes the effect of size</b>, helping time-series and cross-sectional comparisons. They say nothing about cash (B) and don't replace the notes (C)."
        },
        {
          q: "Company B has sales of $10 m and operating profit of $1.5 m. Company C has sales of $2 m and operating profit of $0.4 m. Which statement is correct?",
          opts: ["B is more profitable because its operating profit is larger", "They are equally profitable", "C is more profitable relative to sales: 20% vs 15%"],
          ans: 2,
          hint: "Compute each operating margin.",
          why: "B: 1.5 ÷ 10 = 15%. C: 0.4 ÷ 2 = <b>20%</b>. C keeps more of each sales dollar, even though B's dollar profit is larger (A)."
        },
        {
          q: "Revenue is $800 and cost of goods sold is $500. The gross profit margin is:",
          opts: ["62.5%", "60.0%", "37.5%"],
          ans: 2,
          hint: "Gross profit first, then divide by revenue.",
          why: "Gross profit = 300; margin = 300 ÷ 800 = <b>37.5%</b>. A is cost of sales as a % of revenue."
        },
        {
          q: "Net income is $90 and revenue is $1,200. The net profit margin is:",
          opts: ["7.5%", "13.3%", "9.0%"],
          ans: 0,
          hint: "Net income ÷ revenue.",
          why: "90 ÷ 1,200 = <b>7.5%</b>. B is revenue ÷ net income, upside down (1,200 ÷ 90 = 13.3)."
        },
        {
          q: "In a common-size analysis, income tax expense is most meaningfully compared with:",
          opts: ["revenue", "pre-tax income", "operating expenses"],
          ans: 1,
          hint: "Taxes are charged on profit, not on sales.",
          why: "Comparing tax with <b>pre-tax income</b> gives the effective tax rate, which can then be analysed using the tax note and used in forecasts."
        },
        {
          q: "A company sells a branded, patented product while its rival sells a generic version. All else equal, the branded company most likely has:",
          opts: ["a higher gross profit margin", "a lower gross profit margin", "the same gross profit margin"],
          ans: 0,
          hint: "Differentiated products can command higher prices.",
          why: "Differentiation (brand, patents, technology) supports <b>higher prices</b> and so a higher gross margin, though it may take time while development and advertising costs are spent."
        },
        {
          q: "A brewer's common-size figures: gross margin 60.0% last year and 60.4% this year; finance costs 5.0% of revenue last year and 17.7% this year; net margin fell from 19.0% to 8.8%. What mainly drove the fall in net margin?",
          opts: ["A drop in gross margin", "Higher cost of sales", "Much higher finance costs"],
          ans: 2,
          hint: "Find the line whose percentage changed most.",
          why: "Gross margin actually <b>rose</b> slightly (so A and B are wrong). <b>Finance costs</b> jumped by about 12.7 percentage points of revenue, which explains most of the drop."
        },
        {
          q: "Which statement about common-size income statements is most accurate?",
          opts: ["They hide differences in strategy between companies", "They can reveal strategy differences, such as one firm spending heavily on R&amp;D and advertising and earning a higher gross margin", "They can only be used to study one company over time"],
          ans: 1,
          hint: "Think of Alto vs Bravo.",
          why: "By putting each cost on the same scale, common-size statements <b>highlight</b> different strategies. They work across companies as well as over time (C)."
        },
        {
          q: "A company has revenue of $5,000, operating profit of $750, interest expense of $150 and tax of $180. Its pretax margin is:",
          opts: ["15.0%", "12.0%", "8.4%"],
          ans: 1,
          hint: "Profit before tax = operating profit − interest.",
          why: "Profit before tax = 750 − 150 = 600; pretax margin = 600 ÷ 5,000 = <b>12%</b>. A is the operating margin; C is the net margin (420 ÷ 5,000)."
        }
      ]
    }
  ],

  /* ===================================================== MODULE QUIZ */
  moduleQuiz: [
    {
      lesson: 1,
      q: "Under IFRS, which of these would increase income for the period?",
      opts: ["A shareholder contributes $1 m of new capital", "A supplier formally waives $50,000 the company owed it, with no link to the owners", "The company borrows $1 m from a bank"],
      ans: 1,
      hint: "Income: assets up or liabilities down, raising equity, other than owner contributions.",
      why: "A liability falling (with nothing given up and no owner involvement) raises equity: <b>income</b>. A is an owner contribution; C raises cash and a liability equally."
    },
    {
      lesson: 1,
      q: "In its first year, Cobalt Gear billed $2.4 m of sales, accepted $0.3 m of returns and allowances, collected $1.9 m in cash and had cost of sales of $1.5 m. Net revenue is:",
      opts: ["$2.1 m", "$1.9 m", "$0.6 m"],
      ans: 0,
      hint: "Gross sales less returns and allowances.",
      why: "2.4 − 0.3 = <b>$2.1 m</b>. B is cash collected; C is gross profit (2.1 − 1.5)."
    },
    {
      lesson: 1,
      q: "Under the converged revenue standard, a sales commission paid only because a three-year contract was signed is generally:",
      opts: ["expensed immediately", "capitalised and expensed over the contract", "deducted from revenue"],
      ans: 1,
      hint: "It is an incremental cost of obtaining a contract.",
      why: "Incremental costs of obtaining a contract are <b>capitalised</b> and expensed over the contract, which lifts profit at first compared with expensing them."
    },
    {
      lesson: 2,
      q: "A travel website books $1,000 of hotel stays as an agent and keeps a 12% commission. Its revenue from these bookings is:",
      opts: ["$880", "$1,000", "$120"],
      ans: 2,
      hint: "Agent = fee only.",
      why: "As an agent it reports only its commission: 12% × 1,000 = <b>$120</b>. A is the amount passed to hotels; B is principal treatment."
    },
    {
      lesson: 2,
      q: "A contractor has a $50 m contract with expected total costs of $40 m. In Year 1 it incurs $10 m of costs and measures progress by cost-to-cost. Year 1 revenue is:",
      opts: ["$12.5 m", "$10.0 m", "$2.5 m"],
      ans: 0,
      hint: "Progress = 10 ÷ 40.",
      why: "25% complete × 50 = <b>$12.5 m</b>. B is the cost; C is the Year 1 profit."
    },
    {
      lesson: 2,
      q: "A software company is moving customers from one-off licences to monthly cloud subscriptions. In the short term, an analyst should expect:",
      opts: ["revenue to jump, because subscriptions are recorded up front", "reported revenue to fall even if the business is healthy, because up-front licence revenue becomes revenue spread over time", "no effect on revenue timing"],
      ans: 1,
      hint: "Point in time vs over time.",
      why: "Licences are typically recorded at a point in time; subscriptions <b>over time</b>. The switch delays revenue, so near-term revenue can fall without any real weakness."
    },
    {
      lesson: 3,
      q: "Two identical companies buy a $600 asset with a 3-year life. One capitalises it; the other expenses it at once. Tax follows the accounts. At the end of the three years:",
      opts: ["the capitalising company has higher cumulative net income", "the expensing company has more total cash", "cumulative net income and equity are identical"],
      ans: 2,
      hint: "The whole $600 is expensed either way; only timing differs.",
      why: "The full cost is expensed in both cases, so cumulative net income and <b>equity are identical</b>, and so is total cash. Only the year-by-year pattern differs."
    },
    {
      lesson: 3,
      q: "A new CEO expenses large equipment upgrades that previous managers would have capitalised. Compared with capitalising, the most likely effect next year is that:",
      opts: ["profit growth will look stronger", "asset turnover will be lower", "this year's cash from operations will be higher"],
      ans: 0,
      hint: "Expensing creates a low base this year and no depreciation later.",
      why: "A low base this year and no later depreciation make <b>next year's growth look strong</b>. Fewer assets mean higher turnover (B is wrong). Expensing puts the spending in operating cash flow, so CFO is <b>lower</b> (C is wrong)."
    },
    {
      lesson: 4,
      q: "A developer reports EBIT of $1,200 m and interest expense of $200 m. It capitalised $100 m of interest this year, and depreciation includes $30 m relating to interest capitalised earlier. Coverage adjusted for capitalised interest is closest to:",
      opts: ["6.0×", "4.1×", "4.0×"],
      ans: 1,
      hint: "Add back the old interest in depreciation; add the new capitalised interest to the denominator.",
      why: "(1,200 + 30) ÷ (200 + 100) = <b>4.1×</b>. A is the reported ratio; C adjusts only the denominator."
    },
    {
      lesson: 4,
      q: "A software maker capitalises development costs once technological feasibility is reached; its rival expenses all of them. All else equal, compared with the rival, the capitalising company reports:",
      opts: ["higher cash flow from operations and a lower price-to-CFO ratio", "lower cash flow from operations", "the same EBITDA"],
      ans: 0,
      hint: "Where does capitalised spending go in the cash flow statement?",
      why: "Capitalised costs are <b>investing</b> outflows, so CFO is higher and P/CFO lower. EBITDA is higher too (C), because amortisation is added back while the expensing rival bears the full cost."
    },
    {
      lesson: 4,
      q: "A company cuts its warranty expense from 4% to 1% of sales. Product quality and claims history have not changed, and the company was close to missing its profit target. The best interpretation is that:",
      opts: ["the change is more conservative", "the change has no effect on profit", "the estimate change may be managing earnings and deserves scrutiny"],
      ans: 2,
      hint: "Is there a business reason behind the new estimate?",
      why: "A lower warranty estimate raises profit (less conservative). With no business reason and a target in sight, it may be <b>earnings management</b>."
    },
    {
      lesson: 5,
      q: "Under US GAAP, a material loss from a rare flood at a factory is reported:",
      opts: ["as an extraordinary item, net of tax", "in discontinued operations", "within income from continuing operations, shown separately"],
      ans: 2,
      hint: "Extraordinary items no longer exist.",
      why: "Material unusual or infrequent items are shown <b>separately within continuing operations</b>. The extraordinary category was removed (A); nothing is being disposed of (B)."
    },
    {
      lesson: 5,
      q: "A company switches from FIFO to weighted-average inventory costing. How should this appear in its financial report?",
      opts: ["The years shown in the report are presented as if the new method had always been used", "Only next year's figures use the new method", "The cumulative effect is shown as a single line in this year's income"],
      ans: 0,
      hint: "This is a change in accounting policy.",
      why: "Policy changes are <b>retrospective</b> (if practical): all years presented are restated, so they stay comparable."
    },
    {
      lesson: 5,
      q: "Last year a company reported profit from discontinued operations for a division it has now sold. In forecasting next year's earnings, the analyst should most likely:",
      opts: ["include it, because it was profitable", "exclude it, because the division will no longer contribute", "double it, because the sale proceeds will be invested"],
      ans: 1,
      hint: "Will the division earn anything for the company next year?",
      why: "Once sold, the division won't contribute earnings or cash flow, so it is <b>excluded</b> from forecasts of future performance."
    },
    {
      lesson: 6,
      q: "Net income $1,500,000. Shares: 1,000,000 on 1 January; 200,000 issued on 1 July. Common dividends paid $100,000; no preferred shares. Basic EPS is closest to:",
      opts: ["$1.27", "$1.25", "$1.36"],
      ans: 2,
      hint: "Weighted shares: the new issue counts for half the year. Common dividends stay in.",
      why: "Weighted shares = 1,100,000. EPS = 1,500,000 ÷ 1,100,000 = <b>$1.36</b>. A subtracts common dividends; B uses year-end shares."
    },
    {
      lesson: 6,
      q: "A 3-for-1 stock split takes effect in November. For EPS, how is it treated?",
      opts: ["All share counts for the year (and prior years shown) are multiplied by 3, as if the split happened at the start", "The extra shares are weighted from November", "It is ignored because no cash was raised"],
      ans: 0,
      hint: "Same cake, more slices.",
      why: "Splits are applied <b>retroactively</b> to the start of the period and to prior periods, so EPS stays comparable."
    },
    {
      lesson: 7,
      q: "Net income $300 m; weighted shares 60 m; 4 m convertible preferred shares with a $5 dividend each ($20 m), each convertible into 2 common shares. Diluted EPS is closest to:",
      opts: ["$4.41", "$4.12", "$4.67"],
      ans: 0,
      hint: "Check the if-converted figure against basic.",
      why: "Basic = 280 ÷ 60 = 4.67. If converted = 300 ÷ 68 = <b>4.41</b>, below basic, so it's dilutive and reported. B adds the shares but still deducts the dividend; C is basic."
    },
    {
      lesson: 7,
      q: "A company has 2,000,000 shares and 30,000 options outstanding all year with an exercise price of $20. The average share price was $30. How many shares go into the diluted EPS denominator?",
      opts: ["2,030,000", "2,010,000", "2,020,000"],
      ans: 1,
      hint: "Proceeds 600,000 buy back shares at $30.",
      why: "Shares bought back = 600,000 ÷ 30 = 20,000; net new = 10,000; denominator = <b>2,010,000</b>. A adds all the options; C uses the wrong buyback."
    },
    {
      lesson: 7,
      q: "Which security, if dilutive, changes both the numerator and the denominator of diluted EPS?",
      opts: ["Warrants", "Employee stock options", "Convertible bonds"],
      ans: 2,
      hint: "Which one carries a cost that disappears on conversion?",
      why: "Convertible bonds add back <b>after-tax interest</b> and add shares. Warrants and options change only the denominator."
    },
    {
      lesson: 7,
      q: "Net income $900,000; 1,000,000 shares. The company has $1,000,000 of 8% convertible bonds, convertible into 50,000 shares; tax rate 25%. Reported diluted EPS is:",
      opts: ["$0.91", "$0.86", "$0.90"],
      ans: 2,
      hint: "Compute the if-converted EPS and compare with basic.",
      why: "Basic = 0.90. If converted: (900,000 + 80,000 × 0.75) ÷ 1,050,000 = 960,000 ÷ 1,050,000 = 0.914, <b>higher</b> than basic, so the bonds are antidilutive and diluted EPS = <b>$0.90</b>."
    },
    {
      lesson: 8,
      q: "Two firms in the same industry have the same operating margin, but Firm A's gross margin is much higher than Firm B's. The most likely explanation is that Firm A:",
      opts: ["has lower selling and R&amp;D costs than Firm B", "spends more on R&amp;D and marketing, which supports higher prices", "pays less tax"],
      ans: 1,
      hint: "Same operating margin: if A keeps more at the gross level, where does the difference go?",
      why: "A's extra gross margin is used up by higher operating costs such as <b>R&amp;D and marketing</b>, the classic differentiation strategy. Tax (C) is below operating profit."
    },
    {
      lesson: 8,
      q: "Revenue $4,000; cost of sales $2,400; SG&amp;A $600; R&amp;D $200. The operating profit margin is:",
      opts: ["20%", "40%", "35%"],
      ans: 0,
      hint: "Subtract all operating costs.",
      why: "Operating profit = 4,000 − 2,400 − 600 − 200 = 800; margin = <b>20%</b>. B is the gross margin; C forgets R&amp;D."
    },
    {
      lesson: 1,
      q: "Under the five-step revenue model, after identifying the contract and its separate performance obligations, the next step is to:",
      opts: [
        "recognise revenue as each obligation is satisfied",
        "determine the transaction price",
        "allocate the price to each obligation"
      ],
      ans: 1,
      hint: "Before you can split the price, you need to know what the price is.",
      why: "The steps are: identify the contract, identify the performance obligations, <b>determine the transaction price</b>, allocate it to the obligations, then recognise revenue as each is satisfied. C and A are steps four and five."
    },
    {
      lesson: 1,
      q: "Orbit Soft sells a software licence and two years of support together for $1,200. Sold on their own, the licence would cost $1,000 and the support $500. The licence is delivered on day one and support is provided evenly. Revenue in year 1 is closest to:",
      opts: [
        "$1,200",
        "$1,000",
        "$800"
      ],
      ans: 1,
      hint: "Split the $1,200 by relative standalone prices, then work out how much of each part is earned in year 1.",
      why: "Licence share = 1,200 × 1,000/1,500 = $800, all earned on delivery. Support share = 1,200 × 500/1,500 = $400, earned evenly over two years, so $200 in year 1. Total = <b>$1,000</b>. A recognises everything at once. C forgets the support earned in year 1."
    },
    {
      lesson: 2,
      q: "A travel website sells a $500 airline ticket and keeps a $40 commission. The airline sets the price and bears the risk if the flight is cancelled. The website should report revenue of:",
      opts: [
        "$40",
        "$460",
        "$500"
      ],
      ans: 0,
      hint: "Is the website acting for itself or for the airline?",
      why: "The website does not control the ticket before it is sold, so it is an <b>agent</b> and reports revenue <b>net</b>: the $40 commission. $500 (C) would be correct only for a principal. $460 (B) is the amount passed on to the airline."
    },
    {
      lesson: 2,
      q: "Halden Build signs a $10 m contract and expects total costs of $8 m. It recognises revenue over time based on costs incurred. In year 1 it incurs $2 m of costs. Year 1 revenue is:",
      opts: [
        "$2.0 m",
        "$10.0 m",
        "$2.5 m"
      ],
      ans: 2,
      hint: "What fraction of total expected cost has been incurred?",
      why: "Progress = 2/8 = 25%. Revenue = 25% × $10 m = <b>$2.5 m</b>, giving a profit of $0.5 m. A records revenue equal to cost (no profit). B recognises the whole contract at once."
    },
    {
      lesson: 3,
      q: "Pinecrest pays $1 m for a machine with a five-year life and no residual value, using straight-line depreciation. Compared with expensing the full $1 m immediately, Pinecrest's year 1 pre-tax income is higher by:",
      opts: [
        "$0.8 m",
        "$1.0 m",
        "$0.2 m"
      ],
      ans: 0,
      hint: "If capitalised, only one year's depreciation hits year 1.",
      why: "Expensing charges $1.0 m in year 1. Capitalising charges only depreciation of $1 m / 5 = $0.2 m. Income is higher by 1.0 − 0.2 = <b>$0.8 m</b>. B ignores depreciation. C is the depreciation charge itself."
    },
    {
      lesson: 3,
      q: "Over the whole life of an asset, capitalising a cost rather than expensing it immediately results in:",
      opts: [
        "a higher total expense",
        "the same total expense, with more profit in early years and less in later years",
        "a lower total expense"
      ],
      ans: 1,
      hint: "The cost does not disappear; it is only spread out.",
      why: "Capitalising <b>spreads</b> the same cost over the asset's life through depreciation. Total expense is unchanged, but early profits are higher and later profits are lower than if the cost had been expensed at once."
    },
    {
      lesson: 4,
      q: "A company builds its own warehouse and capitalises the interest on the construction loan. Compared with expensing that interest, in the construction year the company reports:",
      opts: [
        "higher net income and higher cash flow from operations",
        "lower net income and lower cash flow from operations",
        "the same net income and the same cash flow from operations"
      ],
      ans: 0,
      hint: "Where does capitalised interest go on the income statement and on the cash flow statement?",
      why: "Capitalised interest is added to the asset, so there is no interest expense this year and <b>net income is higher</b>. The cash paid is shown in <b>investing</b> rather than operating activities, so <b>operating cash flow is higher</b> too. Total cash is the same."
    },
    {
      lesson: 4,
      q: "Under US GAAP, Velora Pharma spends $3 m on research and $5 m on development of a new manufacturing process (not software). The amount expensed in the year is:",
      opts: [
        "$3 m",
        "$8 m",
        "$5 m"
      ],
      ans: 1,
      hint: "Does US GAAP generally allow development costs to be capitalised outside software?",
      why: "US GAAP generally requires both research and development costs to be <b>expensed</b>, with limited exceptions such as some software costs. So the full <b>$8 m</b> is expensed. Under IFRS, development costs meeting the criteria could be capitalised, giving $3 m (A)."
    },
    {
      lesson: 5,
      q: "A company sold a business unit during the year and reports it as a discontinued operation. To forecast next year's earnings, an analyst should usually:",
      opts: [
        "include the unit's profit because it was profitable this year",
        "add back the loss on disposal to income from continuing operations",
        "focus on income from continuing operations"
      ],
      ans: 2,
      hint: "Will the unit produce earnings next year?",
      why: "Discontinued operations will <b>not continue</b>, so the forecast should start from <b>income from continuing operations</b>. A includes earnings that will not recur. B mixes a discontinued item into continuing results."
    },
    {
      lesson: 5,
      q: "A company revises the expected useful life of its delivery vans from 8 years to 5 years. How is this change reported?",
      opts: [
        "Prior years' statements are restated",
        "It is shown as a discontinued operation",
        "It is applied prospectively, affecting the current and future periods only"
      ],
      ans: 2,
      hint: "Is this a change in accounting policy or a change in an estimate?",
      why: "A new useful life is a <b>change in accounting estimate</b>, applied <b>prospectively</b> with no restatement. Restatement (A) applies to changes in accounting policy. C is irrelevant: the vans are still used."
    },
    {
      lesson: 6,
      q: "Juniper Ltd earned net income of $5.0 m and paid $0.5 m of preferred dividends. It had 2.0 m common shares on 1 January, issued 0.6 m on 1 July and bought back 0.2 m on 1 October. Basic EPS is closest to:",
      opts: [
        "$1.88",
        "$2.22",
        "$2.00"
      ],
      ans: 2,
      hint: "Weight each share change by the fraction of the year it was outstanding, and remove preferred dividends from the numerator.",
      why: "Weighted shares = 2.0 + 0.6 × 6/12 − 0.2 × 3/12 = 2.25 m. Earnings for common = 5.0 − 0.5 = $4.5 m. EPS = 4.5 / 2.25 = <b>$2.00</b>. A uses year-end shares (2.4 m). B forgets the preferred dividends."
    },
    {
      lesson: 6,
      q: "A company had 1.2 m shares outstanding all year and did a 2-for-1 stock split on 1 November. The weighted average number of shares for the year's EPS is:",
      opts: [
        "2.4 m",
        "1.4 m",
        "1.2 m"
      ],
      ans: 0,
      hint: "Stock splits are applied as if they happened at the start of the period.",
      why: "A split is applied <b>retroactively</b> to the start of the year, so all 1.2 m shares become 2.4 m for the whole year: <b>2.4 m</b>. B wrongly time-weights the split. C ignores it."
    },
    {
      lesson: 7,
      q: "Tessaly Corp has net income of $6.0 m, preferred dividends of $0.8 m and 4.0 m weighted common shares. Its preferred shares convert into 0.5 m common shares. The diluted EPS Tessaly should report is:",
      opts: [
        "$1.33",
        "$1.30",
        "$1.50"
      ],
      ans: 1,
      hint: "Work out basic EPS first, then check whether conversion lowers it.",
      why: "Basic EPS = (6.0 − 0.8) / 4.0 = $1.30. If converted, EPS = 6.0 / 4.5 = $1.33, which is <b>higher</b> than basic, so conversion is <b>antidilutive</b> and is ignored. Diluted EPS = <b>$1.30</b>. C divides by basic shares without removing preferred dividends."
    },
    {
      lesson: 7,
      q: "A company has 100,000 options with an exercise price of $20. The average share price for the year was $25. Using the treasury stock method, how many extra shares are added to the diluted share count?",
      opts: [
        "20,000",
        "100,000",
        "80,000"
      ],
      ans: 0,
      hint: "The exercise cash is assumed to buy back shares at the average price.",
      why: "Cash from exercise = 100,000 × $20 = $2,000,000, which buys back 2,000,000 / 25 = 80,000 shares. Net new shares = 100,000 − 80,000 = <b>20,000</b>. B ignores the buyback. C is the number bought back."
    },
    {
      lesson: 8,
      q: "Kestrel Shops has revenue of $800 m, cost of sales $520 m, operating expenses $120 m, interest $20 m and tax $35 m. Its net profit margin is closest to:",
      opts: [
        "20.0%",
        "17.5%",
        "13.1%"
      ],
      ans: 2,
      hint: "Net margin uses profit after interest and tax.",
      why: "Net income = 800 − 520 − 120 − 20 − 35 = $105 m. Net margin = 105 / 800 = <b>13.1%</b>. A is the operating margin (160/800). B is pre-tax margin (140/800)."
    }
  ]
});
