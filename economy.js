// ============================================================
// economy.js — Economy (ఆర్థిక శాస్త్రం)
// ✏️  Edit ONLY this file to update Economy content
// ============================================================

const SUBJECT_ECONOMY_EN = {
  label: "Economy", icon: "📈", color: "#3ecfb2", exam: "Main Exam",
  subtopics: [
    color: "#f59e0b",
    exam: "Main Exam – Paper II",
    subtopics: [
      {
        title: "National Income & Planning",
        desc: "Concept of National Income, Economic Planning, NITI Aayog",
        content: "National Income measures the total economic output of a country. GDP (Gross Domestic Product) at market prices is the most common measure. India's Five-Year Plans were replaced by NITI Aayog in 2015, which focuses on cooperative federalism and sustainable development goals.",
        questions: [
          { q: "NITI Aayog replaced the Planning Commission in:", options: ["2014", "2015", "2016", "2017"], answer: 1 },
          { q: "GDP is the monetary value of all finished goods and services produced:", options: ["Globally per year", "In a country per year", "By a company per year", "By a state per year"], answer: 1 },
          { q: "GNP = GDP +", options: ["Depreciation", "Indirect taxes − Subsidies", "Net factor income from abroad", "Transfer payments"], answer: 2 },
          { q: "India's First Five-Year Plan focused mainly on:", options: ["Industrial development", "Agriculture and irrigation", "Infrastructure", "Education"], answer: 1 },
          { q: "Per Capita Income is calculated as:", options: ["GDP ÷ Total area", "GDP ÷ Total population", "GNP × Population", "NNP + Subsidies"], answer: 1 },
          { q: "The base year currently used for India's GDP calculation is:", options: ["2004–05", "2010–11", "2011–12", "2014–15"], answer: 2 },
          { q: "The 'Human Development Index' (HDI) is published by:", options: ["World Bank", "IMF", "UNDP", "WTO"], answer: 2 },
          { q: "India's Eleventh Five-Year Plan (2007–12) had as its main theme:", options: ["Faster and more inclusive growth", "Agriculture development", "Infrastructure building", "Service sector growth"], answer: 0 },
          { q: "NITI Aayog's Governing Council is chaired by:", options: ["Finance Minister", "Prime Minister", "Vice-Chairman of NITI Aayog", "Cabinet Secretary"], answer: 1 },
          { q: "NNP (Net National Product) = GNP −", options: ["Subsidies", "Indirect taxes", "Depreciation (Capital Consumption)", "Transfer payments"], answer: 2 }
        ]
      },
      {
        title: "Money, Banking & RBI",
        desc: "RBI Functions, Monetary Policy, GST, Inflation",
        content: "The Reserve Bank of India (RBI), established in 1935, serves as India's central bank. It regulates money supply through repo rate, reverse repo rate, and CRR/SLR. GST, implemented in 2017, replaced multiple indirect taxes with a unified tax structure.",
        questions: [
          { q: "The Goods and Services Tax (GST) was implemented in India on:", options: ["1 Jan 2017", "1 April 2017", "1 July 2017", "15 Aug 2017"], answer: 2 },
          { q: "The 'Repo Rate' is the rate at which:", options: ["Banks lend to public", "RBI lends to banks", "Banks borrow from public", "Government borrows from RBI"], answer: 1 },
          { q: "The RBI was nationalised in:", options: ["1935", "1947", "1949", "1955"], answer: 2 },
          { q: "CRR stands for:", options: ["Credit Reserve Ratio", "Cash Reserve Ratio", "Capital Reserve Rate", "Current Reserve Ratio"], answer: 1 },
          { q: "SLR (Statutory Liquidity Ratio) requires banks to maintain a portion of their deposits in:", options: ["Cash only", "Gold, government securities, or other approved securities", "Foreign currency", "RBI bonds only"], answer: 1 },
          { q: "Which of the following is NOT a function of the RBI?", options: ["Currency issuance", "Banker to the government", "Providing retail banking services", "Monetary policy formulation"], answer: 2 },
          { q: "Inflation is best controlled by the RBI through:", options: ["Increasing government spending", "Raising repo rate (tight monetary policy)", "Reducing SLR", "Printing more currency"], answer: 1 },
          { q: "The Insolvency and Bankruptcy Code (IBC) was enacted in:", options: ["2014", "2015", "2016", "2018"], answer: 2 },
          { q: "Priority Sector Lending by banks in India must be at least:", options: ["20% of net bank credit", "30% of net bank credit", "40% of net bank credit", "50% of net bank credit"], answer: 2 },
          { q: "NABARD provides refinance to which type of institutions?", options: ["Commercial banks only", "Cooperative banks and RRBs for agricultural credit", "Insurance companies", "NBFCs only"], answer: 1 }
        ]
      },
      {
        title: "AP Economy & Budget",
        desc: "GSDP, Per Capita Income, AP State Revenue & Expenditure",
        content: "Andhra Pradesh is among the top states in agricultural output with a growing IT sector in Visakhapatnam. The state faces challenges of capital reconstruction at Amaravati, Polavaram dam financing, and revenue deficit management.",
        questions: [
          { q: "GSDP stands for:", options: ["General State Domestic Product", "Gross State Domestic Product", "Government State Development Plan", "Gross Social Development Plan"], answer: 1 },
          { q: "Andhra Pradesh's major IT hub is located in:", options: ["Amaravati", "Tirupati", "Visakhapatnam", "Vijayawada"], answer: 2 },
          { q: "The Polavaram Irrigation Project is designated as a:", options: ["State project", "National project", "Central sector scheme", "External aid project"], answer: 1 },
          { q: "Andhra Pradesh's primary source of tax revenue is:", options: ["Income tax", "GST and State GST (SGST)", "Property tax", "Excise duty only"], answer: 1 },
          { q: "Which corridor passes through Andhra Pradesh connecting Chennai and Kolkata?", options: ["Delhi–Mumbai Industrial Corridor", "Amritsar–Kolkata Corridor", "East Coast Economic Corridor", "Golden Quadrilateral NH"], answer: 2 },
          { q: "The MSME sector in AP is promoted mainly through:", options: ["AP Industrial Infrastructure Corporation", "APIIC and single window clearance", "Only central government schemes", "Export promotion councils"], answer: 1 },
          { q: "Andhra Pradesh is the leading producer in India of:", options: ["Jute and tea", "Tobacco and chillies", "Cotton and sugarcane", "Rubber and coffee"], answer: 1 },
          { q: "The Krishna river basin irrigation project in AP is:", options: ["Srisailam Project", "Nagarjuna Sagar Project", "Both Srisailam and Nagarjuna Sagar", "Polavaram Project"], answer: 2 },
          { q: "The AP government's flagship social security scheme 'Jagananna Thodu' provides support to:", options: ["Farmers", "Street vendors and small traders", "Unemployed youth", "Senior citizens"], answer: 1 },
          { q: "Hindustan Shipyard Limited, a major public sector enterprise, is located in:", options: ["Vijayawada", "Visakhapatnam", "Tirupati", "Guntur"], answer: 1 }
        ]
      }
    ]
  },

  ]
};

const SUBJECT_ECONOMY_TE = {
  label: "ఆర్థిక శాస్త్రం", icon: "📈", color: "#3ecfb2", exam: "మెయిన్ పరీక్ష",
  subtopics: [
        title: "భారత ఆర్థిక వ్యవస్థ – మూల భావనలు",
        desc: "GNP, GDP, ద్రవ్యోల్బణం, ఆర్థిక నిర్వహణ",
        content: "భారతదేశం ప్రపంచంలో అతివేగంగా అభివృద్ధి చెందుతున్న ఆర్థిక వ్యవస్థలలో ఒకటి. స్వాతంత్ర్యం తర్వాత మిశ్రమ ఆర్థిక వ్యవస్థ మోడల్‌ను అనుసరించింది.",
        questions: [
          { q: "GDP అంటే:", options: ["స్థూల దేశీయ ఉత్పత్తి", "స్థూల దేశ పురోగతి", "స్థూల అభివృద్ధి ప్రణాళిక", "జనరల్ అభివృద్ధి ప్రణాళిక"], answer: 0 },
          { q: "భారతదేశంలో ఆర్థిక విధానాన్ని నిర్ణయించే సంస్థ:", options: ["RBI", "SEBI", "నీతి అయోగ్", "ఆర్థిక మంత్రిత్వ శాఖ"], answer: 3 },
          { q: "ద్రవ్యోల్బణాన్ని కొలవడానికి ఉపయోగించే సూచిక:", options: ["GDP", "GNP", "CPI", "HDI"], answer: 2 },
          { q: "భారతదేశంలో 1991 ఆర్థిక సంస్కరణలు ప్రారంభమైనప్పుడు ఆర్థిక మంత్రి:", options: ["పి.వి. నరసింహారావు", "మన్మోహన్ సింగ్", "ప్రణబ్ ముఖర్జీ", "చిదంబరం"], answer: 1 },
          { q: "RBI స్థాపించబడిన సంవత్సరం:", options: ["1930", "1935", "1947", "1950"], answer: 1 },
          { q: "GST అంటే:", options: ["గ్లోబల్ సర్వీస్ ట్యాక్స్", "వస్తు సేవల పన్ను", "జనరల్ సేల్స్ ట్యాక్స్", "గవర్నమెంట్ సర్వీస్ ట్యాక్స్"], answer: 1 },
          { q: "భారతదేశంలో పంచవర్ష ప్రణాళికలు ఆరంభమైన సంవత్సరం:", options: ["1947", "1951", "1956", "1961"], answer: 1 },
          { q: "NITI అయోగ్ స్థాపించబడిన సంవత్సరం:", options: ["2012", "2014", "2015", "2016"], answer: 2 },
          { q: "భారతదేశంలో అత్యంత ఎక్కువ GDP కల్పించే రంగం:", options: ["వ్యవసాయం", "పరిశ్రమలు", "సేవా రంగం", "ఖనిజాలు"], answer: 2 },
          { q: "ప్రధాన మంత్రి జన్ ధన్ యోజన లక్ష్యం:", options: ["వ్యవసాయ రుణాలు", "ఆర్థిక చేరిక", "ఎగుమతి ప్రోత్సాహం", "పన్ను సంస్కరణ"], answer: 1 }
        ]
      }
    ]
  ]
};
