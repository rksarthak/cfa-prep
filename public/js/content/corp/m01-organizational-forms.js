/*
 * Corporate Issuers · Module 1 – Organizational Forms, Corporate Issuer Features, and Ownership (free module)
 * Original teaching text, examples and questions. The CFA Program curriculum is used only as a private
 * benchmark of topics and level; none of its text, exhibits or practice problems is reproduced.
 *
 * Question format: { q, opts:[A,B,C], ans:0|1|2, hint, why, lesson? }
 */
CFA.registerModule("corp", {
  num: 1,
  title: "Organizational Forms, Corporate Issuer Features, and Ownership",
  intro: "Every business has a legal shape. That shape decides who runs it, who is on the hook if it fails, who pays tax on its profit and how much money it can raise. This module compares sole proprietorships, partnerships and limited companies, explains why the corporation dominates the financial markets, and shows how companies move between private and public ownership.",
  los: [
    "Compare sole proprietorships, partnerships and limited companies on legal identity, who manages, owner liability, taxation and access to financing",
    "Describe the key features of a corporation: separate legal identity, separation of owners and managers, limited liability, external financing and taxation",
    "Compare publicly listed and privately held companies, and explain how companies go public and are taken private"
  ],
  lessons: [

    /* ===================================================== LESSON 1 */
    {
      id: "l1",
      title: "Five questions that define any business form",
      summary: "Sole proprietorships and general partnerships; the five attributes used to compare every organizational form.",
      los: [0],
      sections: [
        {
          title: "The idea in plain words",
          html: `
<p>Meera bakes cakes from home and sells them to neighbours. Nobody registers anything: Meera <i>is</i> the business. If a customer sues, Meera is sued. If the bakery borrows for an oven and cannot repay, the lender can take Meera's own savings. Her profit is simply part of her personal income.</p>
<p>Now Meera teams up with her friend Arjun, who is good at marketing. They share the work, the profit and the debts. That is a <b>partnership</b>.</p>
<p>Whatever the form, an analyst asks the same <b>five questions</b>:</p>
<div class="table-wrap"><table>
<tr><th>Attribute</th><th>The question to ask</th></tr>
<tr><td><b>Legal identity</b></td><td>Is the business a separate legal “person”, or just an extension of its owners?</td></tr>
<tr><td><b>Owner–manager relationship</b></td><td>Do the owners run it themselves, or do they hire others?</td></tr>
<tr><td><b>Owner liability</b></td><td>If the business cannot pay its debts, can creditors go after the owners' personal assets?</td></tr>
<tr><td><b>Taxation</b></td><td>Is profit taxed in the business, at the owners' level, or both?</td></tr>
<tr><td><b>Access to financing</b></td><td>How much money can the business raise to grow, and from whom?</td></tr>
</table></div>
<div class="callout key"><span class="label">Three families of business form</span> <b>Sole proprietorship</b> (one owner) → <b>partnership</b> (several owners) → <b>limited company</b> (shareholders with limited liability). Each step gives more access to money and spreads risk wider, at the cost of more rules.</div>`
        },
        {
          title: "Sole proprietorship (sole trader)",
          html: `
<div class="tiles">
  <div class="tile"><h4>How it works</h4><ul><li>One person puts in the money and runs everything</li><li>Often needs no registration; it ends when the owner stops or dies</li><li>The most common business form by number</li></ul></div>
  <div class="tile c4"><h4>The catch</h4><ul><li><b>Unlimited liability</b>: personal assets are at risk</li><li>Growth limited to what one person can save or borrow</li><li>All risk sits with one person</li></ul></div>
</div>
<p><b>Tax:</b> the business is a <b>pass-through</b>. It pays no tax itself; its profit is taxed as the owner's personal income, whether or not the owner takes the cash out.</p>`
        },
        {
          title: "General partnership",
          html: `
<p>A general partnership has two or more <b>general partners</b>. It is a sole proprietorship with more owners: more capital, more skills, shared work, and shared risk.</p>
<div class="vflow">
  <div class="node">Partners agree how to share profit, losses and duties (usually in a written <b>partnership agreement</b>, though a verbal deal or simply acting together can be enough)</div><div class="arrow">⬇</div>
  <div class="node">All partners help run the business</div><div class="arrow">⬇</div>
  <div class="node warn">Every partner has <b>unlimited, shared liability</b>: if one partner cannot pay his or her share of the debts, the others must cover it</div>
</div>
<p><b>Typical users:</b> small builders, consultancies, joint ventures between businesses. Growth is still capped by what the partners can raise and how much personal risk they will carry.</p>
<p><b>Tax:</b> pass-through, like the sole proprietorship. Each partner pays personal tax on his or her share of profit, even profit left in the business.</p>`
        },
        {
          title: "Worked example: who pays when it goes wrong?",
          html: `
<p>Kiran, Leela and Omar run <b>Tri-Build</b>, a general partnership, sharing everything equally. The business collapses owing <b>₹30 lakh</b> more than its assets are worth. Omar has no personal assets.</p>
<div class="table-wrap"><table>
<tr><th></th><th>Kiran</th><th>Leela</th><th>Omar</th></tr>
<tr><td>Equal share of the shortfall</td><td>₹10 lakh</td><td>₹10 lakh</td><td>₹10 lakh</td></tr>
<tr><td>Omar cannot pay, so the others cover his share</td><td>+₹5 lakh</td><td>+₹5 lakh</td><td>₹0</td></tr>
<tr><td><b>Total paid from personal assets</b></td><td><b>₹15 lakh</b></td><td><b>₹15 lakh</b></td><td>₹0</td></tr>
</table></div>
<p>That is what “shared unlimited liability” means in practice: your loss is not capped at your share.</p>`
        }
      ],
      traps: [
        "<b>Pass-through ≠ tax-free.</b> The business pays no tax, but the owners pay personal tax on all the profit, <i>even if it is kept in the business</i>.",
        "<b>General partners share unlimited liability.</b> If one cannot pay, the others are liable for the rest.",
        "<b>A partnership does not need a written agreement.</b> It can be formed verbally or just by acting together.",
        "<b>Sole proprietorships are the most numerous</b> businesses, but have the <b>least</b> access to financing.",
        "Keep the five attributes in order: legal identity, owner–manager relationship, liability, taxation, financing. Questions usually test one of them."
      ],
      quiz: [
        { q: "Which business form most likely has the least access to financing for growth?", opts: ["General partnership", "Sole proprietorship", "Public limited company"], ans: 1, hint: "How many people can put in money?", why: "A <b>sole proprietorship</b> can raise only what one owner can save or borrow personally. A partnership adds partners; a public limited company can sell shares to anyone." },
        { q: "Nadia runs a design studio as a sole proprietor. The studio earns a profit of $80,000 and Nadia leaves all of it in the business bank account. For tax purposes, the $80,000 is most likely:", opts: ["taxed only when Nadia withdraws it", "taxed first in the business and again when withdrawn", "taxed as Nadia's personal income this year"], ans: 2, hint: "Pass-through.", why: "A sole proprietorship is a <b>pass-through</b>: profit is Nadia's personal income in the year it is earned, whether or not she takes the cash out. There is no business-level tax and no second tax on withdrawal." },
        { q: "In a general partnership, the owners' liability for business debts is best described as:", opts: ["limited to each partner's capital contribution", "unlimited and shared among the partners", "unlimited for the managing partner only"], ans: 1, hint: "All partners are general partners.", why: "All general partners have <b>unlimited, shared</b> liability. A cap at the capital contribution describes a limited partner; liability falling only on the manager describes a limited partnership's general partner." },
        { q: "Three equal general partners owe creditors €90,000 more than the business owns. One partner has no assets. How much will each of the other two most likely have to pay from personal assets?", opts: ["€30,000", "€90,000", "€45,000"], ans: 2, hint: "The others cover the missing share.", why: "Each share is €30,000; the two solvent partners also cover the missing €30,000 between them: 30,000 + 15,000 = <b>€45,000</b> each. €30,000 ignores the shared liability; €90,000 puts the whole loss on one partner." },
        { q: "Which statement about forming a general partnership is most accurate?", opts: ["It can be formed without any written agreement", "It must be registered with a securities regulator", "It must have at least one partner with limited liability"], ans: 0, hint: "How informal can it be?", why: "A general partnership can arise <b>verbally or simply through acting together</b>. Securities registration is not required, and a limited-liability partner belongs to a limited partnership." },
        { q: "The attribute that describes whether a business is legally a separate person from its owners is:", opts: ["access to financing", "owner–manager relationship", "legal identity"], ans: 2, hint: "Can it sue and be sued in its own name?", why: "<b>Legal identity</b> asks whether the business exists separately from its owners. Sole proprietorships and partnerships do not; corporations do." },
        { q: "Compared with a sole proprietorship, the main advantage of a general partnership is most likely that it:", opts: ["protects the owners' personal assets", "pools money, skills and risk from several owners", "avoids personal income tax on business profit"], ans: 1, hint: "What changes when you add owners?", why: "A partnership <b>pools capital, expertise and risk</b>. Liability is still unlimited and profit is still taxed personally (pass-through)." },
        { q: "A small contractor wants simplicity, has one owner and needs little capital. The most suitable form is most likely a:", opts: ["sole proprietorship", "public limited company", "general partnership"], ans: 0, hint: "One owner, minimal paperwork.", why: "A <b>sole proprietorship</b> is simple and often needs no registration. A public limited company is costly to run; a general partnership needs at least two owners." },
        { q: "Why is the growth of a general partnership usually limited?", opts: ["Partners cannot share profits unequally", "Partnerships are taxed twice on profit", "Capital is limited to what partners can contribute, and they carry unlimited personal risk"], ans: 2, hint: "Money and risk appetite.", why: "Growth is capped by the partners' own <b>capital and risk tolerance</b>, because each faces unlimited liability. Profit can be shared in any agreed ratio, and partnerships are pass-through (taxed once)." },
        { q: "Which pair of attributes is shared by a sole proprietorship and a general partnership?", opts: ["Professional managers and freely traded ownership", "Separate legal identity and limited liability", "Pass-through taxation and unlimited owner liability"], ans: 2, hint: "Think of Meera and of Tri-Build.", why: "Both are <b>pass-through</b> and both expose owners to <b>unlimited liability</b>. Neither has a separate legal identity or freely traded shares." }
      ]
    },

    /* ===================================================== LESSON 2 */
    {
      id: "l2",
      title: "Limited partnerships and limited companies",
      summary: "General vs limited partners, LLPs, private and public limited companies, and layered structures that mix a corporation with a partnership.",
      los: [0],
      sections: [
        {
          title: "Limited partnership: one captain, many passengers",
          html: `
<p>A <b>limited partnership</b> fixes the biggest weakness of the general partnership by creating two kinds of partner:</p>
<div class="tiles">
  <div class="tile"><h4>General partner (GP)</h4><ul><li>At least one is required</li><li><b>Unlimited liability</b></li><li>Usually <b>manages</b> the business</li><li>Often gets a larger share of profit for the extra risk</li></ul></div>
  <div class="tile c3"><h4>Limited partners (LPs)</h4><ul><li><b>Limited liability</b>: can lose only what they invested</li><li>Usually little or no say in management</li><li>Share profit and loss as the agreement says</li></ul></div>
</div>
<div class="callout analogy"><span class="label">Analogy</span> A boat: the GP is the captain who steers and goes down with the ship; the LPs are passengers who paid for a ticket and can lose the ticket, nothing more.</div>
<p>Partnership agreements are tailor-made and can be complex, and they often restrict selling a partnership interest to outsiders. Limited partnerships are still <b>pass-through</b> entities: partners pay personal tax on their share of profit, distributed or not.</p>
<p>A <b>limited liability partnership (LLP)</b>, available in some places, has <b>no</b> general partner: every partner has limited liability and partners share management (often naming managing partners). Some countries allow LLPs only for professional firms such as lawyers, accountants and architects.</p>`
        },
        {
          title: "Limited companies: private and public",
          html: `
<p>A <b>limited company</b> goes further: <b>all</b> owners have limited liability, ownership is split into easily transferable <b>shares</b>, and owners (shareholders) elect a <b>board of directors</b>, which hires professional managers.</p>
<div class="vflow">
  <div class="node">Shareholders (owners) <small>– vote</small></div><div class="arrow">⬇ elect</div>
  <div class="node">Board of directors</div><div class="arrow">⬇ appoints and oversees</div>
  <div class="node">CEO, CFO and other executives <small>– run the business day to day</small></div>
</div>
<div class="table-wrap"><table>
<tr><th></th><th>Private limited company</th><th>Public limited company (corporation)</th></tr>
<tr><td>Examples of names</td><td>LLC (US), GmbH (Germany), SARL (France), Pvt Ltd (India)</td><td>AG (Germany), SA (France), plc (UK), Ltd (India, listed)</td></tr>
<tr><td>Number of owners</td><td>Often capped by law</td><td>No limit</td></tr>
<tr><td>Transferring ownership</td><td>Often needs other owners' approval</td><td>Free</td></tr>
<tr><td>Taxation (typical)</td><td>Often <b>pass-through</b>, like a partnership</td><td>Taxed at company level <b>and</b> again on dividends</td></tr>
<tr><td>Best suited to</td><td>Owner-run businesses wanting limited liability</td><td>Raising capital widely; listing on an exchange</td></tr>
</table></div>
<p>Public limited companies are the dominant form worldwide by revenue and assets. Their one disadvantage is tax: distributed profit is taxed twice (Lesson 3).</p>
<div class="callout trap"><span class="label">Careful with the word “public”</span> A <i>public limited company</i> is a legal form. It does <b>not</b> have to list its shares on an exchange, and it is not owned by the government. “Public” in “public company” (Lesson 4) means <b>listed</b>.</div>`
        },
        {
          title: "Layered structures: a corporation as general partner",
          html: `
<p>Large businesses often combine forms. A common design: the assets sit in a <b>limited partnership</b>, and the <b>general partner is a listed corporation</b>.</p>
<p><i>Example (made up):</i> <b>Harbourline Ports LP</b> owns a group of container terminals. Its general partner is <b>Harbourline Holdings Inc.</b>, a listed corporation, which owns <b>75%</b> of the partnership; outside limited partners own 25%. The founding Vasquez family owns <b>40%</b> of Harbourline Holdings Inc. and holds the top management jobs; the rest of the shares are widely held.</p>
<div class="vflow">
  <div class="node">Vasquez family: 40% of Holdings Inc. <small>· other shareholders 60%</small></div><div class="arrow">⬇</div>
  <div class="node">Harbourline Holdings Inc. (GP, corporation): 75% of the LP <small>· outside LPs 25%</small></div><div class="arrow">⬇</div>
  <div class="node good">Harbourline Ports LP: owns 100% of the terminals</div>
</div>
<p><b>Effective (look-through) ownership</b> of the terminals by the family = 40% × 75% = <b>30%</b>. Multiply the percentages down the chain.</p>
<div class="tiles">
  <div class="tile"><h4>Why build it this way?</h4><ul><li>The family <b>controls management</b> while owning only 30% economically</li><li>The GP has unlimited liability, but the GP is a corporation, so its <b>shareholders' liability is limited</b></li><li>The listed corporation gives <b>broad access to capital</b></li></ul></div>
  <div class="tile c4"><h4>What it means for investors</h4><ul><li>Outside LPs have no vote in Holdings Inc. and little power to replace the GP</li><li>Outside shareholders of Holdings Inc. have votes and could, together, change its board</li><li>Tax depends on the rules: the LP is pass-through; the corporation may or may not pay entity tax</li></ul></div>
</div>
<p>Investment funds use the same two designs: a fund can be a <b>corporation</b> (investors hold shares and elect a fund board, which hires a manager) or a <b>limited partnership</b> (investors are LPs; the manager is the GP, usually through its own limited company to cap its liability).</p>`
        }
      ],
      traps: [
        "<b>Limited partners have limited liability; the general partner does not.</b> An LLP has no general partner at all.",
        "<b>Look-through ownership = multiply down the chain</b> (40% × 75% = 30%), not add or pick one percentage.",
        "<b>“Public limited company” is a legal form</b>, not a listing and not government ownership.",
        "<b>Private limited companies are often pass-through</b>; public limited companies are usually taxed at company level.",
        "<b>Control ≠ economic ownership.</b> Being the GP (or holding a controlling block of the GP) can give control with a minority economic stake.",
        "<b>LPs usually have little management say</b> and limited ability to remove the GP."
      ],
      quiz: [
        { q: "In a limited partnership, which partner is required to have unlimited liability?", opts: ["Every limited partner", "At least one general partner", "Only the partner with the largest capital contribution"], ans: 1, hint: "There must be a captain.", why: "A limited partnership needs <b>at least one general partner</b> with unlimited liability. Limited partners' losses are capped at their investment; capital size does not decide liability." },
        { q: "A limited liability partnership (LLP) most likely differs from a limited partnership in that an LLP:", opts: ["has no general partner with unlimited liability", "is taxed at the entity level", "has shares that trade on an exchange"], ans: 0, hint: "Who has unlimited liability in an LLP?", why: "In an LLP <b>all partners have limited liability</b> and share management; there is no general partner. LLPs are still pass-through and are not listed." },
        { q: "A family owns 25% of a listed corporation. The corporation is the general partner of a partnership and owns 60% of it; the partnership owns 100% of a group of wind farms. The family's effective ownership of the wind farms is closest to:", opts: ["15%", "25%", "60%"], ans: 0, hint: "Multiply down the chain.", why: "25% × 60% = <b>15%</b>. 25% stops at the corporation; 60% is the corporation's stake, not the family's." },
        { q: "Using the same structure (family owns 25% of the GP corporation, which owns 60% of the partnership), what share of the wind farms do outside shareholders of the corporation effectively own?", opts: ["40%", "75%", "45%"], ans: 2, hint: "Outsiders own 75% of the corporation.", why: "75% × 60% = <b>45%</b>. 40% is the limited partners' stake; 75% is the outsiders' share of the corporation only." },
        { q: "The most likely reason a founding family would hold assets through a limited partnership whose general partner is a listed corporation that the family partly owns is to:", opts: ["avoid ever paying personal income tax", "give limited partners the right to replace management", "keep management control with a minority economic stake while limiting personal liability"], ans: 2, hint: "Control, liability, capital.", why: "The structure gives the family <b>control</b> (through the GP) with a <b>minority stake</b>, while the corporate GP shields the family's personal assets. It does not remove personal tax, and it limits rather than strengthens LPs' power over management." },
        { q: "Compared with a limited partnership, a private limited company most likely offers:", opts: ["limited liability for all owners and ownership split into shares", "unlimited liability for the managers", "no restrictions on the number of owners"], ans: 0, hint: "What changes for every owner?", why: "A private limited company gives <b>all owners limited liability</b> and divides ownership into <b>shares</b>, with a board separating owners from managers. Many jurisdictions still cap the number of owners." },
        { q: "Which statement about a public limited company is most accurate?", opts: ["Its shares must be listed on a stock exchange", "It is the form best suited to a company that wants to go public", "It is owned at least partly by the government"], ans: 1, hint: "Legal form vs listing.", why: "A public limited company has no limits on owners or share transfers, so it is <b>best suited to going public</b>, but it is not obliged to list, and “public” has nothing to do with government ownership." },
        { q: "An investment fund organised as a corporation most likely has which structure?", opts: ["Investors are limited partners and the manager is the general partner", "The fund manager owns the assets directly and investors lend to the manager", "Investors hold shares and elect a board that hires the fund manager"], ans: 2, hint: "Corporation = shares + board.", why: "In the corporate form, investors are <b>shareholders</b> who elect a <b>board</b>, which hires the manager. The LP/GP design is the partnership form." },
        { q: "Which business form typically combines limited liability for all owners with pass-through taxation and limits on the number of owners?", opts: ["Public limited company", "General partnership", "Private limited company"], ans: 2, hint: "Often called an LLC in the US.", why: "A <b>private limited company</b> commonly has all three features. A public limited company has no owner cap and is taxed at company level; a general partnership has unlimited liability." },
        { q: "A limited partner in a fund most likely has:", opts: ["management responsibility and unlimited liability", "voting rights to elect the fund's board of directors", "no management responsibility and liability limited to the investment"], ans: 2, hint: "The passenger.", why: "LPs usually have <b>no management role</b> and <b>limited liability</b>. Unlimited liability and management belong to the GP; electing a board belongs to the corporate fund form." }
      ]
    },

    /* ===================================================== LESSON 3 */
    {
      id: "l3",
      title: "What makes a corporation different",
      summary: "Separate legal entity, owners vs managers, limited liability, raising debt and equity, the financial vs economic view, and double taxation with worked numbers.",
      los: [1],
      sections: [
        {
          title: "Four features, one big advantage",
          html: `
<p>A corporation is created by filing articles of incorporation with a regulator. From then on it is a <b>legal person</b>: it signs contracts, hires staff, borrows and lends, sues and can be sued, and pays tax. A large group is subject to the rules of every place where it is incorporated, does business and raises money.</p>
<div class="hub">
  <div class="side">
    <div class="spoke"><b>Separate legal entity</b><br>The company, not the owners, owns the assets and owes the debts</div>
    <div class="spoke"><b>Owners ≠ managers</b><br>Shareholders elect a board; the board appoints managers</div>
  </div>
  <div class="centre">Corporation</div>
  <div class="side">
    <div class="spoke"><b>Limited liability</b><br>A shareholder can lose the share price paid, no more</div>
    <div class="spoke"><b>External financing</b><br>Anyone who buys a share becomes an owner; debt can be raised too</div>
  </div>
</div>
<p>These features feed each other. Because owners need not manage and cannot lose more than they put in, <b>many more people and institutions are willing to invest</b>: pension funds, mutual funds, banks, governments, foundations, other companies. That is why the corporation has the broadest access to capital, even though it is more costly to set up and run.</p>
<p>If the board or managers ignore shareholders' interests, shareholders can use their <b>votes</b>, mainly to replace directors. This works, but slowly.</p>`
        },
        {
          title: "Debt and equity, and two ways to read the balance sheet",
          html: `
<div class="tiles">
  <div class="tile"><h4>Equity</h4><ul><li>Raised by selling shares or by keeping (retaining) profit</li><li>Shareholders may receive <b>dividends</b>: discretionary distributions of profit</li></ul></div>
  <div class="tile c2"><h4>Debt</h4><ul><li>Loans, bonds and leases</li><li>Must be repaid on set dates, <b>with interest</b></li></ul></div>
</div>
<p>Either can be a private contract with a few investors or a <b>security</b>: a standardised instrument that can trade between investors.</p>
<p><b>Financial vs “economic” view.</b> The balance sheet shows assets and their financing in money terms. Analysts also think of a wider “economic” balance sheet that includes hard-to-measure assets and obligations: employees' skills, relationships with suppliers and customers, duties to the community. Similarly, <b>net income</b> is what is left after suppliers, employees, lenders and taxes. <b>Economic profit</b> is profit <i>above</i> what owners could have earned elsewhere at similar risk (their required return on equity).</p>
<p><i>Example:</i> Sunfield Foods earns net income of $12m on equity of $100m. Owners require 10%. Economic profit = 12 − 10% × 100 = <b>$2m</b>. The accounts show $12m of profit, but only $2m is truly “extra”.</p>`
        },
        {
          title: "Double taxation, step by step",
          html: `
<p>Most countries tax a corporation's profit. Many then tax shareholders again on the <b>dividends</b> they receive. That second layer is <b>double taxation</b>.</p>
<p><i>Worked example.</i> Brightwater Ltd earns pretax profit of <b>₹500 crore</b>. Corporate tax is 25%; shareholders pay 15% tax on dividends. Brightwater pays out all of its after-tax profit.</p>
<div class="table-wrap"><table>
<tr><th>Step</th><th>Corporation (pays all out)</th><th>Same business as a partnership</th></tr>
<tr><td>Pretax profit</td><td>500</td><td>500</td></tr>
<tr><td>Business-level tax</td><td>25% × 500 = 125</td><td>none (pass-through)</td></tr>
<tr><td>Cash paid to owners</td><td>375</td><td>(taxed whether paid or not)</td></tr>
<tr><td>Owner-level tax</td><td>15% × 375 = 56.25</td><td>30% personal rate × 500 = 150</td></tr>
<tr><td><b>Total tax</b></td><td><b>181.25</b></td><td><b>150</b></td></tr>
<tr><td><b>Total tax as % of pretax profit</b></td><td><b>36.25%</b></td><td><b>30%</b></td></tr>
</table></div>
<p>Combined rate formula for full payout: <b>t<sub>c</sub> + (1 − t<sub>c</sub>) × t<sub>d</sub></b> = 0.25 + 0.75 × 0.15 = 36.25%.</p>
<div class="callout key"><span class="label">Why the corporate form is still attractive</span> The second tax applies <b>only to profit paid out</b>. If Brightwater <b>retains and reinvests</b> its profit, shareholders pay no dividend tax now, while a partner pays personal tax on all profit every year. Where corporate tax rates are below personal rates, “storing” profit inside the company can even be cheaper. Some countries also soften double taxation with dividend tax credits or exemptions.</div>`
        }
      ],
      traps: [
        "<b>Limited liability = maximum loss is the price paid for the shares.</b> Shareholders are not liable for company debts unless they personally guarantee them.",
        "<b>Shareholders do not hire the CEO.</b> They elect the board; the board appoints the CEO.",
        "<b>Double taxation applies to distributed profit only.</b> A company that reinvests everything triggers no dividend tax.",
        "<b>Combined tax on paid-out profit = t<sub>c</sub> + (1 − t<sub>c</sub>)t<sub>d</sub></b>, not t<sub>c</sub> + t<sub>d</sub> (the dividend tax is charged on the after-tax amount).",
        "<b>A corporation is legally separate from its owners.</b> “Owners are not legally distinct from the company” describes proprietorships and partnerships.",
        "<b>Economic profit subtracts the owners' required return</b>; net income does not."
      ],
      quiz: [
        { q: "Voting rights attached to ordinary shares most likely give shareholders the direct power to:", opts: ["elect members of the board of directors", "appoint the chief executive officer", "approve each major contract the company signs"], ans: 0, hint: "Who chooses the CEO?", why: "Shareholders <b>elect directors</b>; the board appoints the CEO and oversees managers, who sign contracts." },
        { q: "The separation of ownership from management most helps a corporation to:", opts: ["avoid tax on its profits", "guarantee dividends to shareholders", "attract investors who want returns without running the business"], ans: 2, hint: "Who can now invest?", why: "Owners need not manage, so a <b>much wider pool of investors</b> can buy in. It does not remove tax or guarantee dividends." },
        { q: "A corporation earns pretax profit of $200m, pays corporate tax at 20% and pays out all after-tax profit as dividends. Shareholders pay 25% tax on dividends. Total tax as a percentage of pretax profit is closest to:", opts: ["40%", "45%", "35%"], ans: 0, hint: "0.20 + 0.80 × 0.25.", why: "Corporate tax 40; dividends 160; dividend tax 40; total 80 ÷ 200 = <b>40%</b>. 45% simply adds 20% + 25%; 35% is not a combination of the two rates." },
        { q: "Same corporation ($200m pretax, 20% corporate tax, 25% dividend tax), but now it retains and reinvests all its after-tax profit. Total tax paid this year as a percentage of pretax profit is:", opts: ["20%", "40%", "45%"], ans: 0, hint: "No dividend, no second tax.", why: "Only corporate tax is paid: 40 ÷ 200 = <b>20%</b>. The dividend tax applies only to profit that is distributed." },
        { q: "A business earns pretax profit of €10m. As a corporation it would pay 30% corporate tax and pay out everything; dividend tax is 20%. As a partnership, partners pay 40% personal tax on all profit. The tax saving from being a partnership is closest to:", opts: ["€0.4m", "€1.0m", "€4.4m"], ans: 0, hint: "Corporation: 3.0 + 0.2 × 7.0.", why: "Corporation: 3.0 + 0.20 × 7.0 = €4.4m in total tax. Partnership: 0.40 × 10 = €4.0m. Saving = <b>€0.4m</b>. €4.4m is the corporation's total tax, not the saving; €1.0m is the gap in headline rates (40% − 30%) applied to €10m, which ignores the dividend tax." },
        { q: "In which situation does double taxation of the corporate form matter least?", opts: ["The company pays out all after-tax profit every year", "Shareholders face a high tax rate on dividends", "The company reinvests all after-tax profit in growth"], ans: 2, hint: "When is the second tax triggered?", why: "With <b>no dividends</b>, there is no second layer of tax. Full payout and a high dividend tax rate make double taxation matter more." },
        { q: "The maximum amount a shareholder in a corporation can lose is most likely:", opts: ["the amount paid for the shares", "the shareholder's share of the company's debts", "unlimited, if the company is insolvent"], ans: 0, hint: "Limited liability.", why: "With <b>limited liability</b>, the shares can become worthless, but the loss stops there. Shareholders are not liable for company debts unless they guarantee them." },
        { q: "Which statement is least accurate as a description of a corporation?", opts: ["It can borrow money and be sued in its own name", "Its owners are not legally separate from the company", "Its profits are generally taxed at the company level"], ans: 1, hint: "Look for the false one.", why: "A corporation <b>is</b> legally separate from its owners, so that statement is the inaccurate one. The other two are standard features." },
        { q: "Kestrel Mills earned net income of £18m on average equity of £150m. Its shareholders require a 14% return. Kestrel's economic profit is closest to:", opts: ["£18.0m", "£3.0m", "−£3.0m"], ans: 2, hint: "Net income minus required return × equity.", why: "18 − 0.14 × 150 = 18 − 21 = <b>−£3.0m</b>. The company is profitable in the accounts but earns less than owners require. £18m ignores the required return; +£3m gets the sign wrong." },
        { q: "Why might the corporate form be preferred, despite double taxation, where the corporate tax rate is well below personal income tax rates?", opts: ["Profit kept inside the company is taxed at the lower corporate rate until paid out", "Dividends are never taxed in such countries", "Partnerships pay both corporate and personal tax"], ans: 0, hint: "“Storing” profit.", why: "Retained profit bears only the <b>lower corporate rate</b>; partners pay the higher personal rate on all profit each year. Dividends are usually still taxed, and partnerships are pass-through." }
      ]
    },

    /* ===================================================== LESSON 4 */
    {
      id: "l4",
      title: "Listed (public) vs private companies",
      summary: "Exchange listing, liquidity and price transparency, free float, raising new shares, private placements, and registration and disclosure.",
      los: [2],
      sections: [
        {
          title: "Two meanings of “public”",
          html: `
<p>For companies, <b>public</b> usually means <b>listed</b>: its shares trade on an exchange. <b>Private</b> (unlisted) means they do not. This is different from the legal forms in Lesson 2: most listed companies are public limited companies, but a public limited company does not have to list.</p>
<div class="vflow">
  <div class="node">Limited companies</div><div class="arrow">⬇</div>
  <div class="node">Private limited companies (LLC, GmbH…) → almost always <b>privately held</b></div>
  <div class="node">Public limited companies → can be <b>privately held</b> or <b>listed</b></div>
</div>
<p>An <b>exchange</b> is a rules-based, open venue where prices and volumes are visible to everyone. Four things separate listed and private companies:</p>
<div class="table-wrap"><table>
<tr><th></th><th>Listed company</th><th>Private company</th></tr>
<tr><td><b>Transferring ownership</b></td><td>Buy or sell on the exchange (secondary market); quick for liquid shares</td><td>Find a buyer, negotiate a price; the company may block the transfer; money often locked up until a sale or listing</td></tr>
<tr><td><b>Price transparency</b></td><td>A market price every day</td><td>No visible price or valuation</td></tr>
<tr><td><b>Raising new equity</b></td><td>Can issue large amounts; new shares then trade freely</td><td>Smaller amounts through <b>private placements</b> to a few investors who hold for longer</td></tr>
<tr><td><b>Registration and disclosure</b></td><td>Registered with a regulator; regular audited reports, major shareholdings, insider trades, price-sensitive news</td><td>Few disclosure duties (fraud rules and tax filings still apply); may share information privately with owners and lenders</td></tr>
</table></div>`
        },
        {
          title: "Free float and who can buy private shares",
          html: `
<p><b>Free float</b> is the part of a listed company's shares that actually trades: shares <b>not</b> held by insiders, founders, strategic investors or sponsors. It is usually quoted as a percentage of shares outstanding.</p>
<p><i>Example:</i> Corvane Retail has 400m shares. The founder holds 150m, a strategic partner company holds 90m, and the rest are held by funds, individuals and employees. Free float = (400 − 150 − 90) ÷ 400 = 160 ÷ 400 = <b>40%</b>.</p>
<p>Private placements are often limited to <b>accredited</b> (or sophisticated, qualified) investors: those whom regulators judge able to understand and bear the higher risk of investing in <b>unlisted</b> companies. Listed companies can also do private placements, within the rules.</p>`
        },
        {
          title: "Why stay private, why list?",
          html: `
<div class="tiles">
  <div class="tile"><h4>Benefits of being listed</h4><ul><li>Access to a much wider pool of capital; large raises become possible</li><li>Liquidity and a visible price; employees' shares become easy to sell</li><li>Shares can be used as currency for acquisitions</li></ul></div>
  <div class="tile c2"><h4>Benefits of staying private</h4><ul><li>Fewer, often more involved, shareholders; owners and managers often overlap</li><li>Far lower disclosure and compliance cost; information stays confidential</li><li>Possibly high returns for early investors in successful young companies</li></ul></div>
</div>
<p>Some argue private ownership avoids “short-termism” from quarterly reporting; the evidence for this is weak. Disclosure is the defining feature of listed companies: annual reports often run past a hundred pages, and big trades by directors can tell investors something about management's confidence.</p>`
        }
      ],
      traps: [
        "<b>“Public” ≠ government-owned.</b> It means shares trade on an exchange.",
        "<b>Public limited company ≠ listed company.</b> A legal form that <i>can</i> list.",
        "<b>Free float excludes</b> insiders', founders', strategic holders' and sponsors' shares.",
        "<b>Accredited investors</b> are allowed to buy <b>private</b> (unregistered) securities, not “the investors allowed to buy listed shares”.",
        "<b>Private companies still face some rules</b> (fraud, tax filings); they simply have far lighter disclosure duties.",
        "<b>Owner–manager overlap and negotiated financing</b> point to a private company; registration, exchange listing and share liquidity point to a listed one."
      ],
      quiz: [
        { q: "The word “public” in “public company” most likely means that the company:", opts: ["is wholly or partly owned by the government", "has shares listed and traded on an exchange", "must publish its tax returns"], ans: 1, hint: "Public = listed.", why: "A public company's shares are <b>listed</b> and available to the public. Government ownership is possible but not implied." },
        { q: "Tamsin Labs has 250m shares outstanding. Founders hold 60m, a private equity sponsor holds 40m and a supplier holds 25m as a strategic stake. Its free float is closest to:", opts: ["50%", "60%", "76%"], ans: 0, hint: "Remove all three blocks.", why: "(250 − 60 − 40 − 25) ÷ 250 = 125 ÷ 250 = <b>50%</b>. 60% leaves out the supplier's strategic stake; 76% removes only the founders." },
        { q: "A shareholder of a private company who wants to sell most likely must:", opts: ["place a sell order on the exchange", "wait for the regulator to set a fair price", "find a buyer, negotiate a price, and may need the company's consent"], ans: 2, hint: "No exchange, no visible price.", why: "Private shares lack a market: the seller must <b>find a buyer and negotiate</b>, and the company may refuse the transfer." },
        { q: "Which feature is most likely found in both listed and private companies?", opts: ["Some non-financial disclosure duties", "Daily share price transparency", "Shares freely traded on an exchange"], ans: 0, hint: "Which applies to both?", why: "Both face <b>some</b> disclosure and legal duties (for example tax filings and fraud rules). Daily prices and exchange trading are features of listed companies only." },
        { q: "Accredited (sophisticated) investors are best described as investors who:", opts: ["are the only ones allowed to buy listed shares", "have been approved by the company's board", "regulators judge able to bear the risks of private, unregistered offerings"], ans: 2, hint: "Private placements.", why: "Accredited investors may buy <b>private</b> securities because regulators consider them able to understand and bear the risk. Anyone may buy listed shares." },
        { q: "A company has a controlling owner who is also CEO, raises money only through negotiated bank loans and has no plan to issue new shares. It is most likely:", opts: ["a listed company", "a private company", "a government-owned company"], ans: 1, hint: "Overlap and negotiation.", why: "Owner–manager overlap, negotiated financing and no need for new equity all point to a <b>private</b> company." },
        { q: "Which is most likely a benefit of staying private rather than listing?", opts: ["Lower disclosure and compliance costs", "Easier sale of shares by employees", "A visible market valuation"], ans: 0, hint: "What does listing cost?", why: "Private companies avoid most <b>disclosure and compliance costs</b> and keep information confidential. Easy sale and visible prices come with listing." },
        { q: "New shares sold by a listed company in a public offering most likely:", opts: ["can only be sold back to the company", "can trade freely in the secondary market once issued", "must be held until the company is acquired"], ans: 1, hint: "What does a listing give the buyer?", why: "Once issued, listed shares <b>trade in the secondary market</b>. Lock-ups until a sale or listing describe private company shares." },
        { q: "An analyst sees that several directors of a listed company sold large blocks of shares last month. This disclosed information is most useful because it:", opts: ["proves the company is about to fail", "may say something about management's view of the company's prospects", "must be repeated in the company's tax return"], ans: 1, hint: "Why are insider trades disclosed?", why: "Disclosed insider trades can <b>signal management's confidence</b> (or lack of it); they prove nothing on their own." }
      ]
    },

    /* ===================================================== LESSON 5 */
    {
      id: "l5",
      title: "Going public, going private, and who the owners are",
      summary: "IPO, direct listing, SPAC and acquisition; take-private deals; why listings rise in emerging and fall in developed markets; governments, non-profits and companies as owners.",
      los: [2],
      sections: [
        {
          title: "Three ways to go public",
          html: `
<div class="tree">
  <div class="q">A private company wants to become public. How?</div>
  <div class="branches">
    <div class="branch"><div class="if">Initial public offering (IPO)</div><div class="then">Investment banks <b>underwrite</b> the sale of <b>new shares</b>; the company <b>raises cash</b>; the shares start trading</div></div>
    <div class="branch"><div class="if">Direct listing</div><div class="then"><b>No underwriter, no new shares, no cash raised</b>: existing shares are listed and existing holders sell at market prices</div></div>
    <div class="branch"><div class="if">Acquisition</div><div class="then">Bought by a <b>listed company</b>, or merged with a <b>SPAC</b> (a listed “blank cheque” shell)</div></div>
  </div>
</div>
<div class="table-wrap"><table>
<tr><th></th><th>IPO</th><th>Direct listing</th></tr>
<tr><td>Underwriter</td><td>Yes</td><td>No</td></tr>
<tr><td>New capital raised</td><td>Yes</td><td>No</td></tr>
<tr><td>Dilution of existing owners</td><td>Yes (new shares)</td><td>No</td></tr>
<tr><td>Speed and cost</td><td>Slower, costlier</td><td>Faster, cheaper</td></tr>
<tr><td>Typical user</td><td>Most companies, including those needing cash</td><td>Large, well-known companies that do not need cash</td></tr>
</table></div>
<p><b>SPACs.</b> A special purpose acquisition company raises money in its own IPO, holds it in a <b>trust</b>, and has a fixed time (for example two years) to buy a private company; otherwise the money goes back to investors. When it buys a target, the target becomes public. Investors do not know the target in advance, though the SPAC's sponsors and stated sector give clues. SPACs have largely replaced the older <b>reverse merger</b> into a dormant listed shell.</p>
<p>If a private company is bought by a <b>listed</b> company, it becomes part of a public company, even though it has no shares of its own any more; its weight in the combined group may be small.</p>`
        },
        {
          title: "Going private",
          html: `
<div class="vflow">
  <div class="node">Investors believe the company is worth more than its share price if they can make changes</div><div class="arrow">⬇</div>
  <div class="node">They buy <b>all</b> publicly traded shares at a <b>premium</b> to the market price, often with a lot of borrowed money (a <b>leveraged buyout</b>)</div><div class="arrow">⬇</div>
  <div class="node">The company is <b>delisted</b>; out of public view, owners change management, sell assets, cut costs or restructure</div><div class="arrow">⬇</div>
  <div class="node good">If the plan works, the owners may <b>list it again</b> some years later at a higher value</div>
</div>
<p>The changes must be expected to earn back the premium and the financing cost.</p>`
        },
        {
          title: "Trends and the variety of owners",
          html: `
<div class="tiles">
  <div class="tile"><h4>Emerging markets: more listings</h4><p>Faster growth, more open markets and foreign capital inflows bring new companies to local exchanges.</p></div>
  <div class="tile c2"><h4>Developed markets: fewer listings</h4><ul><li>Mergers reduce the number of independent companies</li><li>Plenty of private capital (venture capital, private equity)</li><li>Owners avoid listing costs, regulation and scrutiny, and keep control</li></ul></div>
</div>
<p><b>Who owns corporations?</b> Individuals and institutions (pension funds, mutual funds, insurers), but also:</p>
<ul>
<li><b>Governments.</b> A state may own 100% of a corporation with its own board and audited accounts, which shows taxpayers and lenders whether it makes or loses money. Common for public goods and infrastructure (postal services, railways, airports) and, in emerging economies, for dominant industries such as energy and commodities. States often sell stakes later, through an IPO, to bring in private and foreign capital, diversify the economy, or after deregulation and new technology (telecoms and power generation are classic cases).</li>
<li><b>Non-profits.</b> Foundations and endowments can be controlling shareholders, usually with social as well as financial goals.</li>
<li><b>Other corporations</b>, often as strategic or controlling holders.</li>
</ul>`
        }
      ],
      traps: [
        "<b>Direct listing: no underwriter, no new shares, no money raised.</b> An IPO has all three.",
        "<b>Employee share ownership is not a difference</b> between an IPO and a direct listing; both work with employee holders.",
        "<b>A private company bought by a listed company becomes public</b> (part of a listed group), even with no shares of its own.",
        "<b>SPAC = “blank cheque”</b>: IPO first, target chosen later, cash held in trust, deadline or money back.",
        "<b>Going private needs a premium</b> over the market price and is often debt-financed.",
        "<b>Listings rise in emerging markets and fall in developed markets</b>: know the reasons for each."
      ],
      quiz: [
        { q: "Which of the following is not a main difference between an IPO and a direct listing?", opts: ["Whether an underwriter is used", "Whether employees own shares in the company", "Whether new capital is raised"], ans: 1, hint: "Two are real differences.", why: "Companies with <b>employee shareholders</b> can use either route. Underwriters and new capital are exactly what separate the two." },
        { q: "A large, well-known private software company has plenty of cash and wants its early investors to be able to sell, without diluting them. The route that best fits is:", opts: ["an initial public offering", "a direct listing", "a private placement"], ans: 1, hint: "No cash needed, no dilution.", why: "A <b>direct listing</b> lists existing shares without issuing new ones, so no dilution and no money raised. An IPO issues new shares; a private placement does not create a public market." },
        { q: "The best description of a special purpose acquisition company (SPAC) is a listed company that:", opts: ["buys back its own shares to go private", "raises cash in an IPO to acquire a yet-to-be-chosen private company within a set time", "underwrites other companies' IPOs"], ans: 1, hint: "Blank cheque.", why: "A SPAC raises money first, holds it in <b>trust</b>, and must <b>acquire a private target</b> by a deadline or return the money." },
        { q: "A listed company acquires a private company for cash. After the deal, the acquired business is best described as:", opts: ["still private, because it has no listed shares", "public, because it is now owned by a listed company's shareholders", "government-owned"], ans: 1, hint: "Who owns it now?", why: "The business now belongs to the <b>listed acquirer's shareholders</b> and is run by its board, so it is part of a public company." },
        { q: "In a typical take-private transaction, the buyers most likely:", opts: ["buy the shares at a discount to the market price", "pay a premium to the share price and often borrow heavily", "keep the company listed but replace the board"], ans: 1, hint: "Why would shareholders agree to sell?", why: "Buyers usually pay a <b>premium</b> and often use <b>debt</b> (a leveraged buyout); the company is then delisted." },
        { q: "Which factor least explains the falling number of listed companies in developed markets?", opts: ["More mergers and acquisitions", "Growing private capital from venture capital and private equity", "Rising foreign capital inflows into local stock exchanges"], ans: 2, hint: "One is an emerging-market driver.", why: "<b>Foreign capital inflows</b> help explain <i>more</i> listings in emerging markets. Mergers and abundant private capital reduce listings in developed markets." },
        { q: "A government most likely keeps 100% ownership of a corporation when the corporation:", opts: ["supplies a public good, such as basic infrastructure, that private owners might not provide fairly or efficiently", "operates in a fast-changing industry needing large private investment", "wants to attract foreign investors"], ans: 0, hint: "Why would a state own it at all?", why: "Full state ownership is typical for <b>public goods and infrastructure</b>. Needing private investment or foreign capital are reasons to <b>sell</b> stakes." },
        { q: "A national government sells 20% of its oil company through an IPO on the local exchange. The most likely reason is to:", opts: ["avoid preparing audited financial statements", "bring in private capital to help diversify the economy", "prevent the company from paying taxes"], ans: 1, hint: "Why do states privatise?", why: "Partial privatisation brings in <b>private and foreign capital</b>, often to fund diversification. A listing <i>increases</i> reporting duties." },
        { q: "Compared with an IPO, a direct listing is most likely:", opts: ["faster and cheaper, and does not dilute existing shareholders", "slower, because underwriters must guarantee the price", "only available to companies that need to raise new capital"], ans: 0, hint: "No underwriter, no new shares.", why: "With no underwriting and no new shares, a direct listing is <b>quicker, cheaper and non-dilutive</b>, but it raises no money." }
      ]
    }
  ],

  /* ===================================================== MODULE QUIZ */
  moduleQuiz: [
    { lesson: 1, q: "Which organizational form is most likely the default for a single owner who starts trading without registering anything?", opts: ["Private limited company", "Limited partnership", "Sole proprietorship"], ans: 2, hint: "No paperwork.", why: "In many places the <b>sole proprietorship</b> needs no registration. Limited companies and limited partnerships must be formally set up." },
    { lesson: 1, q: "Four equal general partners owe $200,000 more than the partnership's assets. Two partners have no personal assets. Each of the other two will most likely pay:", opts: ["$50,000", "$200,000", "$100,000"], ans: 2, hint: "The shortfall falls on whoever can pay.", why: "With unlimited shared liability, the two solvent partners cover the whole $200,000: <b>$100,000</b> each. $50,000 is the equal share ignoring the missing partners." },
    { lesson: 1, q: "A partnership earns $600,000 and keeps all of it to buy equipment. The partners' personal tax on this profit is most likely:", opts: ["zero, because nothing was distributed", "due only when the partnership is wound up", "due this year on their shares of the $600,000"], ans: 2, hint: "Pass-through.", why: "Partners are taxed on their <b>share of profit when earned</b>, distributed or not." },
    { lesson: 1, q: "Which attribute is shared by a general partnership and a public limited company?", opts: ["Unlimited owner liability", "Profit taxed only at the owner level", "Profit and risk shared among several owners"], ans: 2, hint: "Only one is true of both.", why: "Both have <b>several owners sharing risk and return</b>. Unlimited liability and owner-level-only tax apply to the partnership, not the corporation." },
    { lesson: 1, q: "The growth of a sole proprietorship is most constrained by:", opts: ["double taxation of its profits", "rules limiting the number of its customers", "the owner's ability to raise money and bear risk alone"], ans: 2, hint: "One person.", why: "Financing and risk rest on <b>one owner</b>. Sole proprietorships are pass-through, so double taxation does not apply." },
    { lesson: 2, q: "A real estate limited partnership has one general partner and 40 limited partners. If the partnership fails owing more than its assets, who is personally liable for the excess?", opts: ["All 41 partners equally", "The limited partners in proportion to their capital", "The general partner"], ans: 2, hint: "Captain vs passengers.", why: "Only the <b>general partner</b> has unlimited liability; limited partners lose at most their investment." },
    { lesson: 2, q: "A listed corporation is general partner of a partnership and owns 85% of it; outside limited partners own 15%. A founding family owns 20% of the corporation and runs it. The family's effective ownership of the partnership's assets is closest to:", opts: ["35%", "20%", "17%"], ans: 2, hint: "20% × 85%.", why: "0.20 × 0.85 = <b>17%</b>. 20% stops at the corporation; 35% adds the percentages." },
    { lesson: 2, q: "In the same structure (family 20% of the GP corporation, which owns 85% of the partnership), which group could most easily change who manages the partnership?", opts: ["The outside limited partners, through their 15% stake", "Neither, because a general partner can never be replaced", "The corporation's other shareholders, by voting to change its board"], ans: 2, hint: "Who has votes, and how many?", why: "The corporation's outside shareholders hold <b>80% of its votes</b> and could replace its board, which controls the GP. Limited partners have no vote in the corporation and only 15% of the partnership." },
    { lesson: 2, q: "The most likely reason to make a corporation, rather than a person, the general partner of a partnership is to:", opts: ["avoid partnership-level tax", "let limited partners manage the business", "give the ultimate owners limited liability while the GP carries unlimited liability"], ans: 2, hint: "Who is ultimately exposed?", why: "The corporate GP carries unlimited liability, but its <b>shareholders' liability is limited</b>, shielding the people behind it." },
    { lesson: 2, q: "Compared with a private limited company, a public limited company most likely:", opts: ["has unlimited liability for its directors", "offers pass-through taxation", "allows any number of owners and free transfer of shares"], ans: 2, hint: "Restrictions removed.", why: "Public limited companies have <b>no limits on owners or transfers</b>, which suits going public. Private limited companies are the ones often taxed as pass-through." },
    { lesson: 2, q: "An accounting firm wants all partners to share management without any of them having unlimited liability. The most suitable form is a:", opts: ["general partnership", "limited liability partnership", "limited partnership"], ans: 1, hint: "No general partner at all.", why: "An <b>LLP</b> gives every partner limited liability and shared management. A general partnership gives everyone unlimited liability; a limited partnership needs a GP with unlimited liability." },
    { lesson: 2, q: "A fund organised as a limited partnership most likely has:", opts: ["investors as limited partners and the manager as general partner", "a board of directors elected by investors", "investors with unlimited liability"], ans: 0, hint: "Partnership roles.", why: "Investors are <b>LPs</b>; the manager is the <b>GP</b> (often through its own limited company). A board elected by investors is the corporate design." },
    { lesson: 3, q: "Which feature of a corporation most directly allows its ownership to be divided into very small, tradable pieces?", opts: ["Ownership divided into shares", "Pass-through taxation", "Unlimited liability of directors"], ans: 0, hint: "Units of ownership.", why: "Ownership is split into <b>shares</b>, which can be bought and sold in small units. Corporations are not pass-through, and directors do not have unlimited liability." },
    { lesson: 3, q: "A corporation earns pretax profit of ¥4,000m, pays 30% corporate tax and distributes half of its after-tax profit. Shareholders pay 20% tax on dividends. Total tax as a percentage of pretax profit is closest to:", opts: ["37.0%", "44.0%", "50.0%"], ans: 0, hint: "Dividend = 0.5 × 2,800.", why: "Corporate tax 1,200; dividends 1,400; dividend tax 280; total 1,480 ÷ 4,000 = <b>37.0%</b>. 44% assumes full payout; 50% adds the two rates." },
    { lesson: 3, q: "A business earns pretax profit of $50m. As a corporation paying out everything it faces 21% corporate tax and 20% dividend tax; as a partnership its owners pay 37% personal tax. The partnership form saves taxes of closest to:", opts: ["$0.0m, because both forms pay about the same", "$5.4m more tax as a partnership", "$2.1m less tax as a partnership"], ans: 0, hint: "Corporation: 0.21 + 0.79 × 0.20.", why: "Corporation: 10.5 + 0.20 × 39.5 = 10.5 + 7.9 = $18.4m (36.8%). Partnership: 0.37 × 50 = $18.5m. The difference is only $0.1m, so <b>about the same</b>." },
    { lesson: 3, q: "A shareholder bought shares for $5,000. The company goes bankrupt owing creditors $2m more than its assets. The shareholder's maximum loss is:", opts: ["$5,000", "a share of the $2m shortfall", "unlimited"], ans: 0, hint: "Limited liability.", why: "Limited liability caps the loss at the <b>$5,000 paid</b>." },
    { lesson: 3, q: "If a board does not act in shareholders' interests, shareholders' main direct remedy is to:", opts: ["dismiss the CEO themselves", "vote to replace directors", "stop the company paying its suppliers"], ans: 1, hint: "What do votes elect?", why: "Shareholders' power is mainly to <b>replace directors</b>, which takes time. The board, not shareholders, dismisses the CEO." },
    { lesson: 3, q: "Pinewood Tools has net income of €9m, equity of €75m and a required return on equity of 11%. Which statement is most accurate?", opts: ["Pinewood earns an economic profit of €0.75m", "Pinewood earns an economic loss because its return is below 11%", "Pinewood's economic profit equals its net income"], ans: 0, hint: "9 − 0.11 × 75.", why: "9 − 8.25 = <b>€0.75m</b> economic profit. Its return is 12%, above 11%; economic profit subtracts the owners' required return, so it is smaller than net income." },
    { lesson: 3, q: "Corporate issuers are characterised by all of the following except:", opts: ["income taxed at the company level and again on dividends", "owners who need not take part in management", "owners who are not legally separate from the company"], ans: 2, hint: "Find the false feature.", why: "Owners <b>are</b> legally separate from a corporation. The other two are standard features." },
    { lesson: 3, q: "Which item belongs on a company's broader “economic” balance sheet but usually not on its financial balance sheet?", opts: ["Long-term bank loans", "The skills and loyalty of its workforce", "Cash in the bank"], ans: 1, hint: "Hard to measure.", why: "<b>Human capital</b> and relationships are real but hard to measure, so they sit only on the economic view. Loans and cash are on the financial balance sheet." },
    { lesson: 3, q: "Double taxation of corporate profit can be reduced or removed in some countries by:", opts: ["dividend tax credits or exemptions for shareholders", "requiring companies to pay out all profit", "taxing retained profit at personal rates"], ans: 0, hint: "Relief at the shareholder level.", why: "Some systems give shareholders <b>credits or exemptions</b> for tax already paid by the company. Full payout increases double taxation." },
    { lesson: 4, q: "A listed company has 800m shares. Its founder holds 200m, a sovereign fund holds a strategic 120m, employees hold 30m and the rest is held by mutual funds and individuals. Free float is closest to:", opts: ["60%", "56%", "75%"], ans: 0, hint: "Employees' shares trade freely.", why: "Excluding founder and strategic holder: (800 − 200 − 120) ÷ 800 = 480 ÷ 800 = <b>60%</b>. 56% wrongly removes employees' freely held shares; 75% removes only the founder." },
    { lesson: 4, q: "Which characteristic most likely describes a privately held company rather than a listed one?", opts: ["Shares registered with a securities regulator", "Debt and equity raised through privately negotiated deals", "Daily share price available to everyone"], ans: 1, hint: "No public market.", why: "<b>Negotiated</b> financing is typical of private companies; registration and visible prices belong to listed companies." },
    { lesson: 4, q: "A public limited company whose shares are not traded on any exchange is best described as:", opts: ["impossible, because public limited companies must list", "a privately held company with a public limited legal form", "a government-owned company"], ans: 1, hint: "Legal form vs listing.", why: "The legal form permits listing but does not require it, so it is a <b>privately held</b> public limited company." },
    { lesson: 4, q: "The defining attribute of listed companies compared with private companies is most likely:", opts: ["limited liability for shareholders", "transparency through mandatory registration and disclosure", "the ability to borrow from banks"], ans: 1, hint: "Private limited companies also have limited liability.", why: "<b>Disclosure and transparency</b> define listed companies. Limited liability and bank borrowing are available to private companies too." },
    { lesson: 4, q: "Investors in a fast-growing private company most likely accept illiquid shares because:", opts: ["they can sell on the exchange whenever they like", "successful early-stage companies can deliver high returns", "private companies must pay fixed dividends"], ans: 1, hint: "Why take the lock-up?", why: "The reward for patience is potentially <b>high returns</b> if the company succeeds. There is no exchange and no dividend promise." },
    { lesson: 4, q: "Which statement about private placements is most accurate?", opts: ["They are open to all members of the public", "Their terms are set out in a legal document and buyers are often limited to accredited investors", "Only private companies may use them"], ans: 1, hint: "Invited investors.", why: "Private placements are by <b>invitation</b>, documented in a legal agreement, often limited to accredited investors; listed companies may use them too." },
    { lesson: 5, q: "Proceeds from the new shares sold in an IPO go to:", opts: ["the issuing company", "the underwriters only", "existing shareholders selling on the exchange"], ans: 0, hint: "New shares.", why: "New shares are sold by the <b>company</b>, which receives the proceeds (less fees). In a direct listing, existing holders sell." },
    { lesson: 5, q: "A SPAC fails to find a target within its deadline. Most likely:", opts: ["the money held in trust is returned to investors", "the sponsors keep the investors' money", "the SPAC must buy any listed company instead"], ans: 0, hint: "Trust account.", why: "Money in the trust can only fund an acquisition; otherwise it is <b>returned to investors</b>." },
    { lesson: 5, q: "A company that goes public through a direct listing most likely:", opts: ["raises significant new capital", "uses an underwriter to guarantee the price", "sees existing shareholders sell to new investors at market prices"], ans: 2, hint: "No new shares.", why: "In a direct listing, <b>existing holders sell</b> at prices set by the market; no capital is raised and no underwriter is used." },
    { lesson: 5, q: "An investor group takes a listed retailer private, paying a 30% premium funded mostly with loans. The investors most likely expect to:", opts: ["keep the company private permanently and avoid all debt", "make changes worth more than the premium and financing costs, then possibly relist", "receive a lower return than public shareholders"], ans: 1, hint: "Why pay a premium?", why: "The bet is that <b>private control</b> allows changes that earn back the premium and financing cost, with a possible later relisting." },
    { lesson: 5, q: "The best explanation for the growing number of listed companies in many emerging economies is:", opts: ["more mergers between existing listed companies", "higher growth, more open markets and foreign capital inflows", "abundant private equity capital"], ans: 1, hint: "Which way does each factor push?", why: "<b>Growth, openness and foreign inflows</b> drive new listings. Mergers and private capital reduce listings." },
    { lesson: 5, q: "A large foundation that controls a listed pharmaceutical company most likely:", opts: ["cares only about short-term share price gains", "pursues social or charitable goals alongside financial returns", "cannot legally hold shares in a for-profit company"], ans: 1, hint: "Non-profit owners.", why: "Non-profit owners usually have <b>social as well as financial</b> objectives, and they can hold for-profit shares." },
    { lesson: 5, q: "A state-owned railway is turned into a corporation with its own board and audited accounts, while still 100% government owned. The main benefit is most likely:", opts: ["it can now sell shares on an exchange without a decision by the state", "taxpayers and lenders can see whether it makes or loses money", "its losses no longer need funding by the state"], ans: 1, hint: "Transparency.", why: "Corporatisation gives <b>transparency</b> to taxpayers and debt investors. Losses still fall on the state budget." },
    { lesson: 1, q: "Which comparison of a sole proprietorship and a general partnership is most accurate?", opts: ["Both are pass-through and both expose owners to unlimited liability", "Only the partnership exposes owners to unlimited liability", "Only the sole proprietorship is a separate legal entity"], ans: 0, hint: "Same rules, more owners.", why: "Both are <b>pass-through</b> with <b>unlimited liability</b>, and neither is a separate legal entity." },
    { lesson: 4, q: "Which combination best describes a typical listed company?", opts: ["Registered, exchange listed, liquid shares", "Unregistered, owner-managed, negotiated equity sales", "Registered, unlisted, no price transparency"], ans: 0, hint: "Three listed-company features.", why: "<b>Registration, listing and liquidity</b> go together for listed companies. The second option describes a private company." }
  ]
});
