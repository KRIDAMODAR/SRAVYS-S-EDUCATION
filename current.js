// ============================================================
// current.js — Current Affairs (కరెంట్ అఫైర్స్)
// ✏️  Edit ONLY this file to update Current Affairs content
// ============================================================

const SUBJECT_CURRENT_EN = {
  label: "Current Affairs", icon: "📰", color: "#e05c2a", exam: "Screening Test",
  subtopics: [
    subtopics: [
      {
        title: "International Affairs",
        desc: "Major international current events and issues",
        content: "This section covers major international events including geopolitical developments, international organizations (UN, WTO, IMF), climate agreements, global conflicts, and India's foreign policy. Content should be updated regularly with latest events.",
        questions: [
          { q: "The United Nations was founded in:", options: ["1919", "1939", "1945", "1950"], answer: 2 },
          { q: "India is a permanent member of:", options: ["UN Security Council", "G7", "NATO", "None of the above"], answer: 3 },
          { q: "The headquarters of the United Nations is in:", options: ["Geneva", "Washington D.C.", "New York", "London"], answer: 2 },
          { q: "The World Trade Organization (WTO) was established in:", options: ["1948", "1985", "1995", "2001"], answer: 2 },
          { q: "The International Monetary Fund (IMF) is headquartered in:", options: ["New York", "Geneva", "Washington D.C.", "Brussels"], answer: 2 },
          { q: "The G20 is a group of:", options: ["20 richest countries", "Major economies representing 85% of global GDP", "20 largest democracies", "Members of the UN Security Council"], answer: 1 },
          { q: "India hosted the G20 Presidency in:", options: ["2021–22", "2022–23", "2023–24", "2024–25"], answer: 2 },
          { q: "The BRICS grouping includes Brazil, Russia, India, China and:", options: ["Singapore", "South Africa", "Saudi Arabia", "South Korea"], answer: 1 },
          { q: "The Paris Agreement on Climate Change was signed in:", options: ["2012", "2013", "2015", "2017"], answer: 2 },
          { q: "The Sustainable Development Goals (SDGs) number:", options: ["8 goals", "15 goals", "17 goals", "20 goals"], answer: 2 }
        ]
      },
      {
        title: "National Affairs",
        desc: "Major national current events in India",
        content: "National current affairs include developments in governance, economy, sports, science, and society within India. Key topics include constitutional amendments, budget highlights, flagship government schemes, and national awards.",
        questions: [
          { q: "The 'Make in India' initiative was launched in:", options: ["2012", "2014", "2016", "2018"], answer: 1 },
          { q: "India's financial year runs from:", options: ["Jan to Dec", "April to March", "July to June", "Oct to Sep"], answer: 1 },
          { q: "The Digital India programme was launched in:", options: ["2013", "2014", "2015", "2016"], answer: 2 },
          { q: "Pradhan Mantri Jan Dhan Yojana is related to:", options: ["Housing for all", "Financial inclusion through bank accounts", "Health insurance", "Free LPG connections"], answer: 1 },
          { q: "India's first indigenously built aircraft carrier is:", options: ["INS Vikrant", "INS Viraat", "INS Vikramaditya", "INS Arihant"], answer: 0 },
          { q: "The Chandrayaan-3 mission successfully landed on the moon in:", options: ["2021", "2022", "2023", "2024"], answer: 2 },
          { q: "The Goods and Services Tax (GST) in India replaced approximately how many taxes?", options: ["5", "10", "17", "25"], answer: 2 },
          { q: "Operation Ganga was launched to:", options: ["Clean the Ganga river", "Evacuate Indians from Ukraine", "Flood relief operations", "Provide drinking water"], answer: 1 },
          { q: "India's first bullet train corridor is planned between:", options: ["Delhi–Mumbai", "Mumbai–Ahmedabad", "Chennai–Bengaluru", "Kolkata–Patna"], answer: 1 },
          { q: "The National Education Policy (NEP) 2020 replaced NEP:", options: ["1968", "1986", "1992", "2005"], answer: 1 }
        ]
      },
      {
        title: "Andhra Pradesh Affairs",
        desc: "Current events in Andhra Pradesh",
        content: "AP current affairs cover state government policies, welfare schemes, infrastructure projects (Amaravati, Polavaram), IT development in Vizag, agriculture reforms, and important appointments in the state administration.",
        questions: [
          { q: "Polavaram project is built on which river?", options: ["Krishna", "Godavari", "Tungabhadra", "Penna"], answer: 1 },
          { q: "YSR Rythu Bharosa scheme provides financial assistance to:", options: ["Industrial workers", "Women entrepreneurs", "Farmers", "Students"], answer: 2 },
          { q: "The proposed Greenfield capital of Andhra Pradesh is:", options: ["Kurnool", "Visakhapatnam", "Amaravati", "Tirupati"], answer: 2 },
          { q: "Andhra Pradesh was bifurcated to form Telangana on:", options: ["2 June 2012", "2 June 2014", "1 November 2014", "26 January 2015"], answer: 1 },
          { q: "The Jagananna Gorumudda scheme in AP provides:", options: ["Free housing", "Mid-day meals to school children", "Free electricity", "Pension to elderly"], answer: 1 },
          { q: "AP's Vision 2029 aims to make it:", options: ["Most urbanized state", "Number one state in India", "Debt-free state", "100% literate state"], answer: 1 },
          { q: "The Vizag–Chennai Industrial Corridor is part of which initiative?", options: ["Smart Cities Mission", "East Coast Economic Corridor", "DMIC", "North–South Corridor"], answer: 1 },
          { q: "Which district of AP is called the 'Rice Bowl of India'?", options: ["Guntur", "East Godavari", "Krishna", "West Godavari"], answer: 1 },
          { q: "The YSR Aarogyasri scheme in AP is related to:", options: ["Agricultural insurance", "Free health care for poor families", "Free education", "Unemployment allowance"], answer: 1 },
          { q: "Andhra Pradesh's IT hub Vizag is also known as:", options: ["City of Lakes", "City of Destiny", "Silicon Valley of South", "Jewel of the East"], answer: 1 }
        ]
      }
    ]
  },

  ]
};

const SUBJECT_CURRENT_TE = {
  label: "కరెంట్ అఫైర్స్", icon: "📰", color: "#e05c2a", exam: "స్క్రీనింగ్ టెస్ట్",
  subtopics: [
        desc: "సమకాలీన వ్యవహారాలు మరియు ముఖ్యమైన సంఘటనలు",
        content: "కరెంట్ అఫైర్స్ APPSC పరీక్షకు చాలా ముఖ్యమైనది. జాతీయ, అంతర్జాతీయ సంఘటనలు, ప్రభుత్వ పథకాలు మరియు అవార్డులపై తాజా సమాచారం అవసరం.",
        questions: [
          { q: "భారతదేశం యొక్క జాతీయ జంతువు:", options: ["సింహం", "ఏనుగు", "బెంగాల్ పులి", "నెమలి"], answer: 2 },
          { q: "భారత జాతీయ పక్షి:", options: ["కాకి", "నెమలి", "చిలుక", "హంస"], answer: 1 },
          { q: "భారత జాతీయ పువ్వు:", options: ["గులాబీ", "మల్లె", "కమలం", "సన్నజాజి"], answer: 2 },
          { q: "భారత జాతీయ వృక్షం:", options: ["తులసి", "మర్రి చెట్టు", "వేప", "మామిడి"], answer: 1 },
          { q: "UNESCO ప్రపంచ వారసత్వ స్థలాల సంఖ్య భారతదేశంలో (2023):", options: ["32", "38", "42", "45"], answer: 2 },
          { q: "భారతదేశం యొక్క 'UPI' అంటే:", options: ["ఏకీకృత చెల్లింపు ఇంటర్‌ఫేస్", "ఏకీకృత పోలీసు గుర్తింపు", "ఏకీకృత ప్రజా సంస్థ", "ఏకీకృత పత్రిక సూచిక"], answer: 0 },
          { q: "PM-KISAN పథకం లక్ష్యం:", options: ["పట్టణ యువతకు ఉపాధి", "రైతులకు నేరుగా ఆదాయ మద్దతు", "మహిళా విద్య", "గ్రామీణ ఆరోగ్య సంరక్షణ"], answer: 1 },
          { q: "'ఆయుష్మాన్ భారత్' పథకం ఏ రంగానికి సంబంధించినది?", options: ["విద్య", "ఆరోగ్య బీమా", "గృహ నిర్మాణం", "వ్యవసాయం"], answer: 1 },
          { q: "భారతదేశ మొదటి చంద్రయాన్ ప్రారంభమైన సంవత్సరం:", options: ["2005", "2008", "2010", "2012"], answer: 1 },
          { q: "G20 శిఖరాగ్ర సమావేశం 2023 ఎక్కడ జరిగింది?", options: ["ముంబై", "న్యూఢిల్లీ", "బెంగళూరు", "చెన్నై"], answer: 1 }
        ]
      }
    ]
  },
  ]
};
