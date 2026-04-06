// ============================================================
// society.js — Indian Society (భారతీయ సమాజం)
// ✏️  Edit ONLY this file to update Indian Society content
// ============================================================

const SUBJECT_SOCIETY_EN = {
  label: "Indian Society", icon: "👥", color: "#7a5af8", exam: "Screening Test",
  subtopics: [
    subtopics: [
      {
        title: "Structure of Indian Society",
        desc: "Family, Marriage, Kinship, Caste, Tribe, Ethnicity",
        content: "Indian society is characterized by its diversity — multiple castes, tribes, languages, and religions coexist. The joint family system, caste hierarchy, and patriarchal norms have historically shaped social relations, though urbanization and modernization are transforming these structures.",
        questions: [
          { q: "The concept of 'Varna' in Indian society refers to:", options: ["Regional divisions", "Occupational/social hierarchy", "Language groups", "Religious sects"], answer: 1 },
          { q: "The Scheduled Castes in India were formerly referred to as:", options: ["Sudras", "Vaishyas", "Untouchables/Dalits", "Tribals"], answer: 2 },
          { q: "The term 'Gotra' in Hindu kinship system refers to:", options: ["Village community", "Exogamous patrilineal clan", "Endogamous caste group", "Extended family"], answer: 1 },
          { q: "Which sociologist is known for his work on the Indian caste system?", options: ["Max Weber", "M.N. Srinivas", "Karl Marx", "Emile Durkheim"], answer: 1 },
          { q: "Scheduled Tribes are also called:", options: ["Adivasis", "Dalits", "OBCs", "Minorities"], answer: 0 },
          { q: "The concept of 'Sanskritization' was introduced by:", options: ["B.R. Ambedkar", "M.N. Srinivas", "A.R. Desai", "Irawati Karve"], answer: 1 },
          { q: "India has approximately how many Scheduled Tribes?", options: ["100", "300", "705", "900"], answer: 2 },
          { q: "The largest tribal group in India is:", options: ["Gonds", "Bhils", "Santhals", "Oraons"], answer: 1 },
          { q: "Which Article of the Constitution deals with the abolition of untouchability?", options: ["Article 14", "Article 15", "Article 16", "Article 17"], answer: 3 },
          { q: "The 'Joint Family System' in India is characterized by:", options: ["Nuclear family living", "Common property and joint living", "Matrilineal descent", "Exogamous marriage"], answer: 1 }
        ]
      },
      {
        title: "Social Issues",
        desc: "Casteism, Communalism, Crime against Women, Child Labour",
        content: "Contemporary Indian society faces challenges including casteism, communal tensions, crime against women, child labour, and youth unemployment. Government and civil society are working through legislation and welfare programs to address these issues.",
        questions: [
          { q: "The Protection of Children from Sexual Offences (POCSO) Act was enacted in:", options: ["2005", "2009", "2012", "2015"], answer: 2 },
          { q: "National Commission for Women was established in:", options: ["1985", "1990", "1992", "2000"], answer: 2 },
          { q: "The Dowry Prohibition Act was enacted in:", options: ["1950", "1955", "1961", "1970"], answer: 2 },
          { q: "Child labour in India is prohibited under which Act?", options: ["The Factories Act 1948", "The Child Labour (Prohibition and Regulation) Act 1986", "The Juvenile Justice Act", "The Right to Education Act"], answer: 1 },
          { q: "The minimum age for marriage for girls in India is currently:", options: ["16 years", "18 years", "19 years", "21 years"], answer: 1 },
          { q: "The Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act was enacted in:", options: ["1976", "1989", "1993", "2000"], answer: 1 },
          { q: "Which commission was constituted to look into the status of women in India?", options: ["Sarkaria Commission", "Nanavati Commission", "National Commission for Women", "Mandal Commission"], answer: 2 },
          { q: "Communalism refers to:", options: ["Community development", "Political mobilization along religious lines", "Caste-based reservations", "Tribalism"], answer: 1 },
          { q: "The National Crime Records Bureau (NCRB) functions under:", options: ["Ministry of Women and Child Development", "Ministry of Home Affairs", "Ministry of Law", "Ministry of Social Justice"], answer: 1 },
          { q: "The Right of Children to Free and Compulsory Education Act was enacted in:", options: ["2005", "2007", "2009", "2012"], answer: 2 }
        ]
      },
      {
        title: "Welfare Mechanisms",
        desc: "Public Policies, Constitutional Provisions for SC/ST/Women/BCs",
        content: "The Indian Constitution provides special protections for SC/ST communities through reservations, scholarships, and legal safeguards. Key welfare provisions include Articles 15, 16, 17, 46, and special laws like the SC/ST (Prevention of Atrocities) Act.",
        questions: [
          { q: "Article 17 of the Indian Constitution abolishes:", options: ["Untouchability", "Bonded labour", "Child labour", "Casteism"], answer: 0 },
          { q: "The National Commission for Scheduled Castes was established under Article:", options: ["335", "338", "340", "342"], answer: 1 },
          { q: "The Mandal Commission recommended reservation for OBCs at:", options: ["15%", "22.5%", "27%", "33%"], answer: 2 },
          { q: "Article 46 of the Constitution directs the State to promote educational and economic interests of:", options: ["Women and Children", "SC, ST and weaker sections", "Minorities", "Senior Citizens"], answer: 1 },
          { q: "The National Commission for Backward Classes was set up in:", options: ["1990", "1993", "1999", "2004"], answer: 1 },
          { q: "Which Article of the Constitution provides for reservation of seats for SC/ST in legislatures?", options: ["Article 330", "Article 340", "Article 335", "Article 342"], answer: 0 },
          { q: "The Integrated Child Development Services (ICDS) scheme was launched in:", options: ["1965", "1970", "1975", "1980"], answer: 2 },
          { q: "The National Rural Employment Guarantee Act (MGNREGA) guarantees employment for how many days per year?", options: ["50 days", "75 days", "100 days", "150 days"], answer: 2 },
          { q: "The Beti Bachao Beti Padhao scheme was launched in:", options: ["2012", "2013", "2015", "2016"], answer: 2 },
          { q: "Which ministry is responsible for implementing welfare programmes for Scheduled Castes?", options: ["Ministry of Home Affairs", "Ministry of Social Justice and Empowerment", "Ministry of Human Resource Development", "Ministry of Tribal Affairs"], answer: 1 }
        ]
      }
    ]
  },

  ]
};

const SUBJECT_SOCIETY_TE = {
  label: "భారతీయ సమాజం", icon: "👥", color: "#7a5af8", exam: "స్క్రీనింగ్ టెస్ట్",
  subtopics: [
        desc: "కుటుంబం, వివాహం, సామాజిక సంస్థలు",
        content: "భారతీయ సమాజం వివిధతలో ఐక్యతను ప్రతిబింబిస్తుంది. కుటుంబ వ్యవస్థ, కుల వ్యవస్థ, మతాలు, భాషలు మరియు సంప్రదాయాలు భారతీయ సమాజాన్ని రూపొందిస్తాయి.",
        questions: [
          { q: "భారతదేశంలో 'సంయుక్త కుటుంబ వ్యవస్థ' ముఖ్య లక్షణం:", options: ["ఒంటరిగా నివసించడం", "అనేక తరాలు కలిసి నివసించడం", "నగర జీవనం", "బాలికా వివాహం"], answer: 1 },
          { q: "భారత రాజ్యాంగంలో అస్పృశ్యత నిషేధించబడింది ఏ అధికరణ ద్వారా?", options: ["అధికరణ 14", "అధికరణ 17", "అధికరణ 21", "అధికరణ 25"], answer: 1 },
          { q: "భారతదేశంలో 'ఒంటరి ప్రాథమిక కుటుంబం' ను ఏమంటారు?", options: ["విస్తరిత కుటుంబం", "అణు కుటుంబం", "సంయుక్త కుటుంబం", "మాతృ కుటుంబం"], answer: 1 },
          { q: "2011 జనగణన ప్రకారం భారత అక్షరాస్యత రేటు:", options: ["64.8%", "74.0%", "79.2%", "82.1%"], answer: 1 },
          { q: "భారతదేశంలో అత్యధిక జనాభా గల రాష్ట్రం:", options: ["మహారాష్ట్ర", "ఉత్తరప్రదేశ్", "బీహార్", "పశ్చిమ బెంగాల్"], answer: 1 },
          { q: "OBC అంటే:", options: ["ఇతర వెనుకబడిన కులాలు", "ఇతర అధికార కమిటీ", "ఇతర ప్రాథమిక కులాలు", "ఉన్నత బ్రాహ్మణ కులాలు"], answer: 0 },
          { q: "బాల్య వివాహ నిరోధక చట్టం ఏ సంవత్సరం అమలులోకి వచ్చింది?", options: ["1929", "1955", "1976", "2006"], answer: 0 },
          { q: "మహిళలకు ఆస్తి హక్కులు మెరుగుపరచిన హిందూ వారసత్వ చట్టం సవరణ:", options: ["2000", "2005", "2010", "2015"], answer: 1 },
          { q: "భారతదేశంలో మొదటి మహిళా ఐఏఎస్ అధికారి:", options: ["అన్నా జార్జ్ మల్హోత్రా", "కిరణ్ బేడీ", "సుచేతా కృపలానీ", "విజయలక్ష్మి పండిట్"], answer: 0 },
          { q: "భారతదేశంలో SC/ST కోటా ఏ అధికరణ ద్వారా రక్షించబడింది?", options: ["అధికరణ 14", "అధికరణ 15(4)", "అధికరణ 19", "అధికరణ 32"], answer: 1 }
        ]
      }
    ]
  ]
};
