// ============================================================
// geography.js — Geography (భూగోళశాస్త్రం)
// ✏️  Edit ONLY this file to update Geography content
// ============================================================

const SUBJECT_GEOGRAPHY_EN = {
  label: "Geography", icon: "🌏", color: "#3ecfb2", exam: "Screening Test",
  subtopics: [
    subtopics: [
      {
        title: "Earth & Interior",
        desc: "Earth in Solar System, Interior layers of the Earth",
        content: "Earth is the third planet from the Sun with four internal layers: inner core (solid iron-nickel), outer core (liquid), mantle, and crust. The theory of plate tectonics explains earthquakes, volcanoes, and mountain formation.",
        questions: [
          { q: "Earth's innermost layer is:", options: ["Mantle", "Outer Core", "Inner Core", "Crust"], answer: 2 },
          { q: "The theory of plate tectonics was proposed by:", options: ["Charles Darwin", "Alfred Wegener", "James Hutton", "Isaac Newton"], answer: 1 },
          { q: "The thinnest layer of the Earth is:", options: ["Mantle", "Outer core", "Inner core", "Crust"], answer: 3 },
          { q: "Earth is approximately how many km from the Sun?", options: ["100 million km", "150 million km", "200 million km", "250 million km"], answer: 1 },
          { q: "The Earth's outer core is mainly composed of:", options: ["Silica and aluminium", "Liquid iron and nickel", "Solid iron and nickel", "Magnesium and iron"], answer: 1 },
          { q: "Which seismic waves cannot pass through liquid layers?", options: ["P-waves (Primary)", "S-waves (Secondary)", "Surface waves", "Love waves"], answer: 1 },
          { q: "The boundary between crust and mantle is called:", options: ["Gutenberg Discontinuity", "Mohorovicic Discontinuity", "Conrad Discontinuity", "Lehmann Discontinuity"], answer: 1 },
          { q: "The age of Earth is approximately:", options: ["2.5 billion years", "3.5 billion years", "4.6 billion years", "5.5 billion years"], answer: 2 },
          { q: "Which type of plate boundary causes earthquakes and volcanic activity?", options: ["Divergent boundaries only", "Convergent boundaries only", "Transform boundaries only", "All types of plate boundaries"], answer: 3 },
          { q: "The Ring of Fire is located around the:", options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: 2 }
        ]
      },
      {
        title: "Climate & Atmosphere",
        desc: "Structure and Composition of Atmosphere, Climate",
        content: "The atmosphere has five layers: Troposphere (weather occurs here), Stratosphere (ozone layer), Mesosphere, Thermosphere, and Exosphere. Climate is determined by latitude, altitude, ocean currents, and distance from the sea.",
        questions: [
          { q: "The ozone layer is found in the:", options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"], answer: 1 },
          { q: "Weather phenomena occur in which layer?", options: ["Stratosphere", "Troposphere", "Mesosphere", "Exosphere"], answer: 1 },
          { q: "The hottest layer of the atmosphere is:", options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"], answer: 3 },
          { q: "India receives rainfall mainly from which monsoon?", options: ["North-East Monsoon", "South-West Monsoon", "Western Disturbances", "Cyclonic Storms"], answer: 1 },
          { q: "Which gas is most abundant in the Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], answer: 2 },
          { q: "The Coriolis effect causes winds to deflect:", options: ["To the left in Northern Hemisphere", "To the right in Northern Hemisphere", "Straight along the equator", "Upward in polar regions"], answer: 1 },
          { q: "The Western Disturbances that bring winter rainfall to northern India originate from:", options: ["Bay of Bengal", "Arabian Sea", "Mediterranean Sea", "Indian Ocean"], answer: 2 },
          { q: "El Niño is associated with:", options: ["Cooling of Pacific Ocean surface", "Warming of Pacific Ocean surface", "Atlantic Ocean temperature changes", "Indian Ocean dipole"], answer: 1 },
          { q: "The Tropopause is the boundary between:", options: ["Stratosphere and Mesosphere", "Troposphere and Stratosphere", "Mesosphere and Thermosphere", "Thermosphere and Exosphere"], answer: 1 },
          { q: "Monsoon winds blow from:", options: ["Land to sea in summer", "Sea to land in summer", "Sea to land in winter", "Land to sea all year"], answer: 1 }
        ]
      },
      {
        title: "India's Physiography & Rivers",
        desc: "Major physiographic features, Drainage System",
        content: "India is divided into physiographic regions: Himalayan mountains, Indo-Gangetic Plains, Peninsular Plateau, Coastal Plains, and Islands. Major river systems include the Himalayan rivers (Ganga, Brahmaputra) and Peninsular rivers (Godavari, Krishna, Cauvery).",
        questions: [
          { q: "The Western Ghats are also known as:", options: ["Vindhyas", "Sahyadri", "Aravalli", "Satpura"], answer: 1 },
          { q: "Which river is known as the 'Dakshin Ganga'?", options: ["Krishna", "Mahanadi", "Godavari", "Cauvery"], answer: 2 },
          { q: "The highest peak in India is:", options: ["Nanda Devi", "K2", "Kangchenjunga", "Mount Everest"], answer: 2 },
          { q: "The Deccan Plateau is bounded on the east by:", options: ["Western Ghats", "Eastern Ghats", "Vindhya Range", "Aravalli Range"], answer: 1 },
          { q: "The Brahmaputra river in Bangladesh is called:", options: ["Jamuna", "Meghna", "Padma", "Surma"], answer: 0 },
          { q: "The Thar Desert is located in which state?", options: ["Gujarat", "Maharashtra", "Rajasthan", "Madhya Pradesh"], answer: 2 },
          { q: "Which river is called the 'Sorrow of Bihar'?", options: ["Ganga", "Son", "Kosi", "Gandak"], answer: 2 },
          { q: "The Lakshadweep Islands are of which type?", options: ["Volcanic islands", "Coral islands", "Continental shelf islands", "River delta islands"], answer: 1 },
          { q: "The Indo-Gangetic Plain is formed by deposits of which rivers?", options: ["Only Ganga and Yamuna", "Indus, Ganga and Brahmaputra river systems", "Only Himalayan rivers", "Both peninsular and Himalayan rivers"], answer: 1 },
          { q: "The Loktak Lake, the largest freshwater lake in Northeast India, is in:", options: ["Assam", "Mizoram", "Manipur", "Meghalaya"], answer: 2 }
        ]
      },
      {
        title: "Andhra Pradesh – Physical Features",
        desc: "AP Physiography, Climate, Soils, Vegetation",
        content: "Andhra Pradesh has diverse physiographic regions including the Eastern Ghats, Godavari-Krishna delta plains, and coastal belt. The state has tropical climate and fertile alluvial soils in the deltas supporting rice cultivation.",
        questions: [
          { q: "The capital city of Andhra Pradesh is:", options: ["Hyderabad", "Amaravati", "Visakhapatnam", "Tirupati"], answer: 1 },
          { q: "Which river forms the boundary between Andhra Pradesh and Telangana?", options: ["Godavari", "Krishna", "Tungabhadra", "Penna"], answer: 1 },
          { q: "The Kolleru Lake in Andhra Pradesh is located between which two rivers?", options: ["Godavari and Krishna", "Krishna and Penna", "Tungabhadra and Krishna", "Godavari and Indravati"], answer: 0 },
          { q: "The highest peak in Andhra Pradesh is:", options: ["Arma Konda", "Mahendragiri", "Deomali", "Jindhagada"], answer: 0 },
          { q: "Which district of AP has the longest coastline?", options: ["Krishna", "Guntur", "Srikakulam", "East Godavari"], answer: 3 },
          { q: "Andhra Pradesh's coastline stretches approximately:", options: ["500 km", "600 km", "974 km", "800 km"], answer: 2 },
          { q: "The Nagarjuna Sagar dam is located on which river?", options: ["Godavari", "Tungabhadra", "Krishna", "Penna"], answer: 2 },
          { q: "Which type of soil is dominant in the Krishna-Godavari delta?", options: ["Red soil", "Black cotton soil", "Alluvial soil", "Laterite soil"], answer: 2 },
          { q: "The Papikondalu Gorge through which the Godavari flows is in:", options: ["Khammam", "East and West Godavari districts", "Krishna district", "Guntur district"], answer: 1 },
          { q: "Andhra Pradesh shares its border with how many states?", options: ["4", "5", "6", "7"], answer: 2 }
        ]
      },
      {
        title: "Economic Geography – Agriculture",
        desc: "Natural resources, Agriculture, Industries in India & AP",
        content: "India is primarily an agrarian economy with agriculture employing ~46% of the workforce. Major crops include rice, wheat, sugarcane, cotton, and oilseeds. AP is the leading producer of rice, chilli, and aquaculture products.",
        questions: [
          { q: "India is the world's largest producer of:", options: ["Rice", "Wheat", "Milk", "Tea"], answer: 2 },
          { q: "Andhra Pradesh is famous for being the largest producer of:", options: ["Sugarcane", "Cotton", "Chilli", "Jute"], answer: 2 },
          { q: "The Green Revolution in India primarily focused on which crop?", options: ["Rice and wheat", "Maize and millet", "Cotton and jute", "Sugarcane and oilseeds"], answer: 0 },
          { q: "The National Food Security Mission was launched in:", options: ["2005–06", "2007–08", "2010–11", "2014–15"], answer: 1 },
          { q: "India is the largest producer and exporter of which spice?", options: ["Turmeric", "Black pepper", "Cardamom", "Cumin"], answer: 0 },
          { q: "Aquaculture (fish farming) in AP is concentrated mainly in:", options: ["Rayalaseema districts", "Krishna and West Godavari districts", "Srikakulam only", "Nellore and Prakasam"], answer: 1 },
          { q: "The 'White Revolution' (Operation Flood) in India was related to:", options: ["Salt production", "Cotton cultivation", "Milk production", "Sugar production"], answer: 2 },
          { q: "Which state is the largest producer of groundnuts in India?", options: ["Maharashtra", "Rajasthan", "Gujarat", "Andhra Pradesh"], answer: 2 },
          { q: "The MSP (Minimum Support Price) for crops is fixed by:", options: ["State governments", "NABARD", "Commission for Agricultural Costs and Prices (CACP)", "FCI"], answer: 2 },
          { q: "India's largest steel plant (by capacity) is located at:", options: ["Bhilai", "Bokaro", "Visakhapatnam", "Rourkela"], answer: 0 }
        ]
      }
    ]
  },
  ]
};

const SUBJECT_GEOGRAPHY_TE = {
  label: "భూగోళశాస్త్రం", icon: "🌏", color: "#3ecfb2", exam: "స్క్రీనింగ్ టెస్ట్",
  subtopics: [
        desc: "పర్వతాలు, మైదానాలు, పీఠభూములు మరియు తీరప్రాంతాలు",
        content: "భారతదేశం వివిధ భౌతిక లక్షణాలను కలిగి ఉంది: హిమాలయ పర్వత శ్రేణులు, సింధు-గంగా మైదానం, దక్కన్ పీఠభూమి, తూర్పు మరియు పశ్చిమ కనుమలు మరియు తీరప్రాంత మైదానాలు.",
        questions: [
          { q: "భారతదేశంలో అత్యంత పొడవైన తీరప్రాంతం ఉన్న రాష్ట్రం:", options: ["తమిళనాడు", "ఆంధ్రప్రదేశ్", "గుజరాత్", "కేరళ"], answer: 2 },
          { q: "హిమాలయాలు ఏ రాష్ట్రాల గుండా వెళ్ళవు?", options: ["జమ్మూ & కాశ్మీర్", "హిమాచల్ ప్రదేశ్", "రాజస్థాన్", "సిక్కిం"], answer: 2 },
          { q: "భారతదేశంలో అతిపెద్ద మైదానం:", options: ["దక్కన్ పీఠభూమి", "సింధు-గంగా మైదానం", "బ్రహ్మపుత్ర మైదానం", "కోస్టల్ మైదానం"], answer: 1 },
          { q: "భారతదేశంలో అత్యంత ఎత్తైన శిఖరం:", options: ["నందా దేవి", "K2", "కాంచంజంగా", "మొంట్ ఎవరెస్ట్"], answer: 2 },
          { q: "పశ్చిమ కనుమలు ఎక్కడ ముగుస్తాయి?", options: ["కన్యాకుమారి", "గోవా", "ముంబై", "కొచ్చి"], answer: 0 },
          { q: "భారతదేశంలో అతిపెద్ద మడ అడవులు ఉన్న ప్రాంతం:", options: ["అండమాన్ & నికోబార్", "సుందర్బన్స్", "కేరళ కనుమలు", "మన్నార్ సింధుశాఖ"], answer: 1 },
          { q: "థార్ ఎడారి ఏ రాష్ట్రంలో ప్రధానంగా ఉంది?", options: ["గుజరాత్", "పంజాబ్", "రాజస్థాన్", "హర్యానా"], answer: 2 },
          { q: "భారతదేశం యొక్క దక్షిణ చివర:", options: ["రామేశ్వరం", "కన్యాకుమారి", "ఇందిర పాయింట్", "కోలాచెల్"], answer: 2 },
          { q: "తూర్పు మరియు పశ్చిమ కనుమలు కలిసే స్థలం:", options: ["పాల్‌ఘాట్ అంతరాళం", "నీలగిరి కొండలు", "అనైమలై కొండలు", "శేషాచలం కొండలు"], answer: 1 },
          { q: "భారతదేశంలో అతిపెద్ద తాజా నీటి సరస్సు:", options: ["వులర్ సరస్సు", "చిల్కా సరస్సు", "డల్ సరస్సు", "లోకటక్ సరస్సు"], answer: 0 }
        ]
      },
      {
        title: "నదులు మరియు వాటిపై ఆధారపడే ప్రాంతాలు",
        desc: "హిమాలయ మరియు ద్వీపకల్ప నదులు",
        content: "భారతదేశంలో నదులు రెండు వ్యవస్థలుగా విభజించబడ్డాయి: హిమాలయ నదులు (గంగా, యమునా, బ్రహ్మపుత్ర) మరియు ద్వీపకల్ప నదులు (గోదావరి, కృష్ణా, కావేరి).",
        questions: [
          { q: "భారతదేశంలో అతి పొడవైన నది:", options: ["గంగా", "గోదావరి", "యమునా", "సింధు"], answer: 0 },
          { q: "దక్షిణ భారతదేశంలో 'ముసలమ్మ' అని పిలవబడే నది:", options: ["కృష్ణా", "గోదావరి", "కావేరి", "తుంగభద్ర"], answer: 1 },
          { q: "గంగా నది ఏ హిమానీనదం నుండి ఉద్భవిస్తుంది?", options: ["యమునోత్రి", "గంగోత్రి", "బద్రీనాథ్", "కేదార్నాథ్"], answer: 1 },
          { q: "కృష్ణా నది ఏ రాష్ట్రంలో సముద్రంలో కలుస్తుంది?", options: ["తమిళనాడు", "ఆంధ్రప్రదేశ్", "కర్ణాటక", "తెలంగాణ"], answer: 1 },
          { q: "బ్రహ్మపుత్ర నది భారతదేశంలో ఏ పేరుతో ప్రవహిస్తుంది?", options: ["సాంగ్‌పో", "జమునా", "సియాంగ్", "ల్హాసా"], answer: 2 },
          { q: "నర్మద నది ఏ దిశలో ప్రవహిస్తుంది?", options: ["తూర్పు నుండి పశ్చిమానికి", "పశ్చిమం నుండి తూర్పుకు", "ఉత్తరం నుండి దక్షిణానికి", "దక్షిణం నుండి ఉత్తరానికి"], answer: 0 },
          { q: "తెలంగాణలో భారతదేశంలో అతిపెద్ద రాతి నిర్మిత ఆనకట్ట:", options: ["హీరాకుడ్", "నాగార్జున సాగర్", "తుంగభద్ర", "శ్రీశైలం"], answer: 1 },
          { q: "సింధు నది ఏ దేశంలో పుట్టింది?", options: ["భారత్", "పాకిస్తాన్", "అఫ్ఘానిస్తాన్", "చైనా (టిబెట్)"], answer: 3 },
          { q: "సబర్మతి నది ఏ నగరం గుండా ప్రవహిస్తుంది?", options: ["సూరత్", "అహ్మదాబాద్", "వడోదర", "రాజ్‌కోట్"], answer: 1 },
          { q: "అమరావతి నది ఏ నదికి ఉపనది?", options: ["కృష్ణా", "గోదావరి", "కావేరి", "తుంగభద్ర"], answer: 2 }
        ]
      }
    ]
  ]
};
