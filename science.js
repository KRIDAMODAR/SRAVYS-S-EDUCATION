// ============================================================
// science.js — Science & Technology (విజ్ఞాన శాస్త్రం & సాంకేతికత)
// ✏️  Edit ONLY this file to update Science & Technology content
// ============================================================

const SUBJECT_SCIENCE_EN = {
  label: "Science & Technology", icon: "🔬", color: "#e05c2a", exam: "Main Exam",
  subtopics: [
    color: "#a3e635",
    exam: "Main Exam – Paper II",
    subtopics: [
      {
        title: "Space Technology & ISRO",
        desc: "Indian Launch Vehicles, Satellite launches, Space Missions",
        content: "ISRO (Indian Space Research Organisation), founded in 1969, has achieved major milestones including Chandrayaan missions (moon), Mangalyaan (Mars Orbiter), and the PSLV/GSLV launch vehicles. India's space programme focuses on communication, remote sensing, and scientific exploration.",
        questions: [
          { q: "India's first Mars mission 'Mangalyaan' was launched in:", options: ["2010", "2013", "2015", "2017"], answer: 1 },
          { q: "ISRO's headquarters is located in:", options: ["Mumbai", "Hyderabad", "Bengaluru", "Chennai"], answer: 2 },
          { q: "Chandrayaan-3 successfully soft-landed near the Moon's south pole in:", options: ["2021", "2022", "2023", "2024"], answer: 2 },
          { q: "The PSLV (Polar Satellite Launch Vehicle) is used primarily to launch:", options: ["Geostationary satellites", "Remote sensing and polar orbit satellites", "Deep space probes only", "Military satellites only"], answer: 1 },
          { q: "India's first satellite 'Aryabhata' was launched in:", options: ["1969", "1972", "1975", "1980"], answer: 2 },
          { q: "The Satish Dhawan Space Centre (SHAR), India's primary launch site, is located at:", options: ["Thumba, Kerala", "Sriharikota, Andhra Pradesh", "Ahmedabad, Gujarat", "Bengaluru, Karnataka"], answer: 1 },
          { q: "Aditya-L1 is India's mission to study:", options: ["Mars", "The Moon", "The Sun", "Jupiter"], answer: 2 },
          { q: "India became the __ country to soft-land on the Moon's south pole:", options: ["First", "Second", "Third", "Fourth"], answer: 0 },
          { q: "GSLV (Geosynchronous Satellite Launch Vehicle) is designed to launch:", options: ["Heavier communication satellites to geostationary orbit", "Remote sensing satellites to polar orbit", "Inter-planetary missions only", "Military reconnaissance satellites"], answer: 0 },
          { q: "The mission that made India the first country to reach Mars orbit on its first attempt was:", options: ["Chandrayaan-1", "Chandrayaan-2", "Mangalyaan (MOM)", "Aditya-L1"], answer: 2 }
        ]
      },
      {
        title: "Environment & Biodiversity",
        desc: "Ecosystems, Biodiversity Hotspots, Conservation",
        content: "India is one of the world's 17 megadiverse countries with 4 biodiversity hotspots: Western Ghats, Himalayas, Indo-Burma, and Sundaland. Key conservation tools include biosphere reserves, wildlife sanctuaries, and national parks under the Wildlife Protection Act 1972.",
        questions: [
          { q: "India has how many biodiversity hotspots?", options: ["2", "3", "4", "5"], answer: 2 },
          { q: "Project Tiger was launched in India in:", options: ["1969", "1973", "1980", "1985"], answer: 1 },
          { q: "Which of the following is NOT a biodiversity hotspot in India?", options: ["Western Ghats", "Eastern Ghats", "Himalayas", "Indo-Burma region"], answer: 1 },
          { q: "The Wildlife Protection Act in India was enacted in:", options: ["1960", "1965", "1972", "1980"], answer: 2 },
          { q: "CITES stands for:", options: ["Convention on International Trade in Endangered Species", "Convention for Indian Tiger and Elephant Safeguarding", "Centre for International Tiger and Ecosystem Services", "Convention on Inter-State Environmental Standards"], answer: 0 },
          { q: "The first National Park in India was:", options: ["Kaziranga", "Bandipur", "Jim Corbett (Hailey)", "Gir"], answer: 2 },
          { q: "India has how many UNESCO World Heritage Natural Sites (approximately)?", options: ["5", "7", "10", "12"], answer: 2 },
          { q: "The Sundarbans mangrove forest is shared between India and:", options: ["Myanmar", "Sri Lanka", "Bangladesh", "Nepal"], answer: 2 },
          { q: "Project Elephant was launched in India in:", options: ["1973", "1985", "1992", "2000"], answer: 2 },
          { q: "The Biological Diversity Act of India was enacted in:", options: ["1992", "1998", "2002", "2006"], answer: 2 }
        ]
      },
      {
        title: "Climate Change & Sustainable Development",
        desc: "Global Warming, International Protocols, SDGs",
        content: "Climate change poses major threats through global warming, sea-level rise, and extreme weather events. India is a signatory to the Paris Agreement (2015) and has committed to achieving net zero emissions by 2070 while ramping up renewable energy to 500 GW by 2030.",
        questions: [
          { q: "The Paris Agreement aims to limit global temperature rise to:", options: ["1°C above pre-industrial levels", "1.5–2°C above pre-industrial levels", "3°C above pre-industrial levels", "5°C above pre-industrial levels"], answer: 1 },
          { q: "India's target for net-zero carbon emissions is:", options: ["2047", "2050", "2060", "2070"], answer: 3 },
          { q: "The Kyoto Protocol committed developed nations to reduce which emissions?", options: ["Carbon dioxide only", "Greenhouse gases", "CFC gases only", "Nitrogen oxide only"], answer: 1 },
          { q: "The International Solar Alliance (ISA) was co-founded by India and:", options: ["USA", "France", "Germany", "Japan"], answer: 1 },
          { q: "The Sustainable Development Goals (SDGs) are to be achieved by:", options: ["2025", "2030", "2040", "2050"], answer: 1 },
          { q: "The UNFCCC (UN Framework Convention on Climate Change) was adopted in:", options: ["1987", "1992", "1997", "2005"], answer: 1 },
          { q: "Ozone layer depletion is mainly caused by:", options: ["Carbon dioxide", "Methane", "Chlorofluorocarbons (CFCs)", "Nitrous oxide"], answer: 2 },
          { q: "The Montreal Protocol deals with:", options: ["Climate change mitigation", "Protection of the ozone layer", "Biodiversity conservation", "Marine pollution"], answer: 1 },
          { q: "India's National Action Plan on Climate Change (NAPCC) was released in:", options: ["2005", "2008", "2012", "2015"], answer: 1 },
          { q: "The term 'Carbon Neutrality' means:", options: ["Zero carbon production", "Balancing carbon emissions with carbon removal", "Using only renewable energy", "Reducing emissions by 50%"], answer: 1 }
        ]
      }
    ]
  ]
};

const SUBJECT_SCIENCE_TE = {
  label: "విజ్ఞాన శాస్త్రం & సాంకేతికత", icon: "🔬", color: "#e05c2a", exam: "మెయిన్ పరీక్ష",
  subtopics: [
        title: "సైన్స్ & టెక్నాలజీ – మూల భావనలు",
        desc: "భౌతిక శాస్త్రం, రసాయన శాస్త్రం, జీవ శాస్త్రం ప్రాథమిక అంశాలు",
        content: "సైన్స్ & టెక్నాలజీ విభాగంలో పదార్థ విజ్ఞానం, వేడి, ధ్వని, వెలుతురు, అయస్కాంతత్వం, రసాయన శాస్త్రం మరియు జీవ శాస్త్రం అంశాలు ఉంటాయి.",
        questions: [
          { q: "కాంతి వేగం:", options: ["3×10⁶ మీ/సె", "3×10⁸ మీ/సె", "3×10¹⁰ మీ/సె", "3×10⁴ మీ/సె"], answer: 1 },
          { q: "DNA యొక్క పూర్తి పేరు:", options: ["డీఆక్సీరైబో న్యూక్లిక్ ఆమ్లం", "డైరెక్ట్ న్యూక్లిక్ ఆమ్లం", "డైన్యూక్లియో ఆమ్లం", "డీఆక్సీ న్యూక్లియర్ ఆమ్లం"], answer: 0 },
          { q: "నీటి రసాయన సూత్రం:", options: ["HO", "H₂O", "H₂O₂", "HO₂"], answer: 1 },
          { q: "మానవ శరీరంలో అత్యంత పెద్ద అవయవం:", options: ["కాలేయం", "మెదడు", "చర్మం", "గుండె"], answer: 2 },
          { q: "న్యూటన్ యొక్క మొదటి నియమం:", options: ["F = ma", "జడత్వ నియమం", "చర్య-ప్రతిచర్య నియమం", "సార్వత్రిక గురుత్వాకర్షణ నియమం"], answer: 1 },
          { q: "ఆక్సిజన్ పరమాణు సంఖ్య:", options: ["6", "7", "8", "9"], answer: 2 },
          { q: "కిరణజన్య సంయోగ క్రియకు అవసరమైన రంగు:", options: ["ఎరుపు మాత్రమే", "నీలి మాత్రమే", "ఎరుపు మరియు నీలి", "పచ్చ మరియు పసుపు"], answer: 2 },
          { q: "భారత అంతరిక్ష పరిశోధనా సంస్థ (ISRO) ప్రధాన కార్యాలయం:", options: ["ముంబై", "హైదరాబాద్", "బెంగళూరు", "చెన్నై"], answer: 2 },
          { q: "వ్యాధులు కలిగించే వైరస్ కాకుండా బ్యాక్టీరియా వల్ల వచ్చే వ్యాధి:", options: ["ఫ్లూ", "HIV/AIDS", "క్షయ వ్యాధి (TB)", "పోలియో"], answer: 2 },
          { q: "రాడార్ పనిచేసే పద్ధతి:", options: ["శబ్ద తరంగాలు", "రేడియో తరంగాలు", "కాంతి తరంగాలు", "ఎక్స్-రే తరంగాలు"], answer: 1 }
        ]
      },
      {
        title: "పర్యావరణ శాస్త్రం & వాతావరణ మార్పు",
        desc: "జీవావరణ శాస్త్రం, జీవవైవిధ్యం మరియు పర్యావరణ సమస్యలు",
        content: "పర్యావరణ శాస్త్రం జీవులు మరియు వాటి పర్యావరణం మధ్య పరస్పర చర్యలను అధ్యయనం చేస్తుంది. వాతావరణ మార్పు నేటి అత్యంత ముఖ్యమైన సవాళ్ళలో ఒకటి.",
        questions: [
          { q: "పారిస్ ఒప్పందం ప్రపంచ ఉష్ణోగ్రత పెరుగుదలను పరిమితం చేయాలని లక్ష్యంగా పెట్టుకుంది:", options: ["పారిశ్రామిక స్థాయికంటే 1°C", "పారిశ్రామిక స్థాయికంటే 1.5–2°C", "పారిశ్రామిక స్థాయికంటే 3°C", "పారిశ్రామిక స్థాయికంటే 5°C"], answer: 1 },
          { q: "భారతదేశం నికర-సున్నా కార్బన్ ఉద్గారాలకు లక్ష్య సంవత్సరం:", options: ["2047", "2050", "2060", "2070"], answer: 3 },
          { q: "క్యోటో ప్రోటోకాల్ అభివృద్ధి చెందిన దేశాలను ఏ ఉద్గారాలు తగ్గించాలని నిబంధిత చేసింది?", options: ["కేవలం కార్బన్ డయాక్సైడ్", "గ్రీన్‌హౌస్ వాయువులు", "కేవలం CFC వాయువులు", "కేవలం నైట్రస్ ఆక్సైడ్"], answer: 1 },
          { q: "అంతర్జాతీయ సౌర కూటమి (ISA) భారత్ మరియు ఏ దేశం కలిసి స్థాపించింది?", options: ["USA", "ఫ్రాన్స్", "జర్మనీ", "జపాన్"], answer: 1 },
          { q: "సుస్థిర అభివృద్ధి లక్ష్యాలు (SDGs) ఏ సంవత్సరానికి సాధించాలి?", options: ["2025", "2030", "2040", "2050"], answer: 1 },
          { q: "UNFCCC (వాతావరణ మార్పుపై UN ఫ్రేమ్‌వర్క్ కన్వెన్షన్) ఏ సంవత్సరంలో ఆమోదించబడింది?", options: ["1987", "1992", "1997", "2005"], answer: 1 },
          { q: "ఓజోన్ పొర క్షీణతకు ప్రధాన కారణం:", options: ["కార్బన్ డయాక్సైడ్", "మీథేన్", "క్లోరోఫ్లోరోకార్బన్లు (CFCs)", "నైట్రస్ ఆక్సైడ్"], answer: 2 },
          { q: "మాంట్రియల్ ప్రోటోకాల్ దేనికి సంబంధించినది?", options: ["వాతావరణ మార్పు తగ్గింపు", "ఓజోన్ పొర రక్షణ", "జీవవైవిధ్య సంరక్షణ", "సముద్ర కాలుష్యం"], answer: 1 },
          { q: "భారతదేశం యొక్క 'వాతావరణ మార్పుపై జాతీయ కార్యాచరణ ప్రణాళిక' (NAPCC) విడుదల అయిన సంవత్సరం:", options: ["2005", "2008", "2012", "2015"], answer: 1 },
          { q: "'కార్బన్ తటస్థత' అంటే:", options: ["కార్బన్ ఉత్పత్తి శూన్యం", "కార్బన్ ఉద్గారాలు మరియు కార్బన్ తొలగింపు మధ్య సమతుల్యత", "కేవలం పునరుత్పాదక శక్తి వినియోగం", "ఉద్గారాలు 50% తగ్గించడం"], answer: 1 }
        ]
      }
    ]
  }
  ]
};
