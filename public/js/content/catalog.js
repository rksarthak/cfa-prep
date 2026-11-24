/*
 * Catalogue of CFA Level I subjects and their learning modules.
 * A module is "live" when a content file registers it with CFA.registerModule(...).
 * To add a module: create js/content/<subject>/<file>.js, call CFA.registerModule,
 * and add a <script> tag for it in index.html.
 */
window.CFA = {
  subjects: [
    { id: "ethics", name: "Ethical and Professional Standards", icon: "⚖️", blurb: "Code of Ethics, Standards of Professional Conduct, GIPS.", modules: [] },
    { id: "quant", name: "Quantitative Methods", icon: "📐", blurb: "Rates of return, time value of money, statistics, hypothesis testing, regression.", modules: [] },
    { id: "econ", name: "Economics", icon: "🌐", blurb: "Firms and market structures, business cycles, monetary and fiscal policy, currencies.", modules: [] },
    { id: "corp", name: "Corporate Issuers", icon: "🏢", blurb: "Governance, capital investment, working capital, capital structure.", modules: [] },
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
    { id: "equity", name: "Equity Investments", icon: "📈", blurb: "Market organisation, indexes, efficiency, industry analysis, equity valuation.", modules: [] },
    { id: "fixed", name: "Fixed Income", icon: "🏦", blurb: "Bond features, pricing, yields, duration, credit risk, securitisation.", modules: [] },
    { id: "deriv", name: "Derivatives", icon: "🔁", blurb: "Forwards, futures, swaps and options: pricing and uses.", modules: [] },
    { id: "alts", name: "Alternative Investments", icon: "🏗️", blurb: "Private capital, real estate, infrastructure, hedge funds, digital assets.", modules: [] },
    { id: "pm", name: "Portfolio Management", icon: "🧺", blurb: "Risk and return, CAPM, planning, behavioural finance, risk management.", modules: [] }
  ],
  content: {},
  registerModule: function (subjectId, mod) {
    this.content[subjectId + "/" + mod.num] = mod;
  }
};
