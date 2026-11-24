/*
 * Catalogue of CFA® Program Level I subjects and their learning modules.
 * A module is "live" when a content file registers it with CFA.registerModule(...).
 * To add a module: create js/content/<subject>/<file>.js, call CFA.registerModule,
 * and add a <script> tag for it in index.html.
 */
window.CFA = {
  subjects: [
    {
      id: "fsa", name: "Financial Statement Analysis", icon: "📊",
      blurb: "Read, analyse and adjust income statements, balance sheets and cash flow statements.",
      modules: [
        { num: 1, title: "Introduction to Financial Statement Analysis" },
        { num: 2, title: "Analyzing Income Statements" },
        { num: 3, title: "Analyzing Balance Sheets" },
        { num: 4, title: "Analyzing Statements of Cash Flows I" },
        { num: 5, title: "Analyzing Statements of Cash Flows II" },
        { num: 6, title: "Analysis of Inventories" },
        { num: 7, title: "Analysis of Long-Term Assets" },
        { num: 8, title: "Topics in Long-Term Liabilities and Equity" },
        { num: 9, title: "Analysis of Income Taxes" },
        { num: 10, title: "Financial Reporting Quality" },
        { num: 11, title: "Financial Analysis Techniques" },
        { num: 12, title: "Introduction to Financial Statement Modeling" }
      ]
    },
    {
      id: "ethics", name: "Ethical and Professional Standards", icon: "⚖️", blurb: "Ethics and trust, the Code of Ethics, the seven Standards of Professional Conduct and how to apply them to cases.", modules: [
        { num: 1, title: "Ethics and Trust in the Investment Profession" },
        { num: 2, title: "Code of Ethics and Standards of Professional Conduct" },
        { num: 3, title: "Guidance for Standard I: Professionalism" },
        { num: 4, title: "Guidance for Standard II: Integrity of Capital Markets" },
        { num: 5, title: "Guidance for Standard III: Duties to Clients" },
        { num: 6, title: "Guidance for Standard IV: Duties to Employers" },
        { num: 7, title: "Guidance for Standard V: Investment Analysis, Recommendations, and Actions" },
        { num: 8, title: "Guidance for Standard VI: Conflicts of Interest" },
        { num: 9, title: "Guidance for Standard VII: Responsibilities as a CFA Institute Member or CFA Candidate" },
        { num: 10, title: "Application of the Code and Standards: Level I" }
      ]
    },
    { id: "quant", name: "Quantitative Methods", icon: "📐", blurb: "Rates of return, time value of money, statistics, hypothesis testing, regression.", modules: [] },
    { id: "econ", name: "Economics", icon: "🌐", blurb: "Firms and market structures, business cycles, monetary and fiscal policy, currencies.", modules: [] },
    {
      id: "corp", name: "Corporate Issuers", icon: "🏢", blurb: "Ownership, stakeholders, governance, working capital, capital investment, capital structure and business models.", modules: [
        { num: 1, title: "Organizational Forms, Corporate Issuer Features, and Ownership" },
        { num: 2, title: "Investors and Other Stakeholders" },
        { num: 3, title: "Corporate Governance: Conflicts, Mechanisms, Risks, and Benefits" },
        { num: 4, title: "Working Capital and Liquidity" },
        { num: 5, title: "Capital Investments and Capital Allocation" },
        { num: 6, title: "Capital Structure" },
        { num: 7, title: "Business Models" }
      ]
    },
    { id: "equity", name: "Equity Investments", icon: "📈", blurb: "Market organisation, indexes, efficiency, industry analysis, equity valuation.", modules: [] },
    { id: "fixed", name: "Fixed Income", icon: "🏦", blurb: "Bond features, pricing, yields, duration, credit risk, securitisation.", modules: [] },
    {
      id: "deriv", name: "Derivatives", icon: "🔁", blurb: "Forwards, futures, swaps and options: pricing and uses.", modules: [
        { num: 1, title: "Derivative Instrument and Derivative Market Features" },
        { num: 2, title: "Forward Commitment and Contingent Claim Features and Instruments" },
        { num: 3, title: "Derivative Benefits, Risks, and Issuer and Investor Uses" },
        { num: 4, title: "Arbitrage, Replication, and the Cost of Carry in Pricing Derivatives" },
        { num: 5, title: "Pricing and Valuation of Forward Contracts and for an Underlying with Varying Maturities" },
        { num: 6, title: "Pricing and Valuation of Futures Contracts" },
        { num: 7, title: "Pricing and Valuation of Interest Rate and Other Swaps" },
        { num: 8, title: "Pricing and Valuation of Options" },
        { num: 9, title: "Option Replication Using Put–Call Parity" },
        { num: 10, title: "Valuing a Derivative Using a One-Period Binomial Model" }
      ]
    },
    { id: "alts", name: "Alternative Investments", icon: "🏗️", blurb: "Private capital, real estate, infrastructure, hedge funds, digital assets.", modules: [] },
    {
      id: "pm", name: "Portfolio Management", icon: "🧺", blurb: "Risk and return, diversification, CAPM, portfolio planning, behavioural biases and risk management.", modules: [
        { num: 1, title: "Portfolio Risk and Return: Part I" },
        { num: 2, title: "Portfolio Risk and Return: Part II" },
        { num: 3, title: "Portfolio Management: An Overview" },
        { num: 4, title: "Basics of Portfolio Planning and Construction" },
        { num: 5, title: "The Behavioral Biases of Individuals" },
        { num: 6, title: "Introduction to Risk Management" }
      ]
    }
  ],
  content: {},
  tests: {},     // end-of-subject tests: the free part is a public file; the paid part loads from the database
  testPaid: {},
  registerModule: function (subjectId, mod) {
    this.content[subjectId + "/" + mod.num] = mod;
  },
  registerTest: function (subjectId, test) {
    this.tests[subjectId] = test;
  }
};
