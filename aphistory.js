// ============================================================
// aphistory.js — AP History & Culture (ఆంధ్రప్రదేశ్ చరిత్ర)
// ✏️  Edit ONLY this file to update AP History & Culture content
// ============================================================

const SUBJECT_APHISTORY_EN = {
  label: "AP History & Culture", icon: "📜", color: "#f0a500", exam: "Main Exam",
  subtopics: [
    exam: "Main Exam – Paper I",
    subtopics: [
      {
        title: "Satavahanas & Ikshvakus",
        desc: "Pre-Historic Cultures, Satavahanas, Ikshvakus",
        content: "The Satavahana dynasty (230 BCE–220 CE) was a major power in the Deccan, known for Amaravati art, Buddhism patronage, and trade links. The Ikshvaku dynasty succeeded them and continued the Buddhist tradition at Nagarjunakonda.",
        questions: [
          { q: "Amaravati stupa is associated with which dynasty?", options: ["Mauryas", "Satavahanas", "Guptas", "Cholas"], answer: 1 },
          { q: "Nagarjunakonda, an important Buddhist site, is located in:", options: ["Telangana", "Karnataka", "Andhra Pradesh", "Tamil Nadu"], answer: 2 },
          { q: "The founder of the Satavahana dynasty is considered to be:", options: ["Simuka", "Satakarni I", "Gautamiputra Satakarni", "Hala"], answer: 0 },
          { q: "The famous Amaravati school of art is known for its:", options: ["Bronze sculptures", "Marble carvings", "Limestone carvings with narrative panels", "Terracotta figurines"], answer: 2 },
          { q: "Gautamiputra Satakarni is considered the greatest Satavahana ruler because he:", options: ["Built Amaravati stupa", "Defeated the Shakas and restored the empire", "Patronized Sanskrit literature", "Conquered South India"], answer: 1 },
          { q: "The Ikshvaku dynasty had their capital at:", options: ["Amaravati", "Nagarjunakonda (Vijayapuri)", "Warangal", "Vengi"], answer: 1 },
          { q: "Which Satavahana king is known for compiling 'Gathasaptasati'?", options: ["Simuka", "Gautamiputra", "Hala", "Vasishthiputra"], answer: 2 },
          { q: "The Satavahana empire was located mainly in:", options: ["North India", "Deccan (present Maharashtra, AP, Telangana)", "South India (Tamil Nadu)", "Northeast India"], answer: 1 },
          { q: "The pre-historic site of Billa Surgam caves in AP is known for:", options: ["Rock paintings", "Bone tools and Mesolithic remains", "Iron smelting", "Buddhist relics"], answer: 1 },
          { q: "The Buddhist university established by Ikshvaku rulers was at:", options: ["Taxila", "Nalanda", "Nagarjunakonda", "Amaravati"], answer: 2 }
        ]
      },
      {
        title: "Telugu Language & Literature",
        desc: "Growth of Telugu Language, Medieval Dynasties",
        content: "Telugu, one of the oldest Dravidian languages, was elevated to literary status by Nannaya in the 11th century with his translation of the Mahabharata. The Kakatiyas, Vijayanagara Empire, and later Qutb Shahis patronized Telugu literature.",
        questions: [
          { q: "Nannaya is considered the Adikavi (first poet) of Telugu literature. His major work was:", options: ["Ramayana translation", "Mahabharata translation", "Bhagavatam", "Manucharitra"], answer: 1 },
          { q: "The Kakatiya dynasty had its capital at:", options: ["Amaravati", "Warangal", "Vijayawada", "Tirupati"], answer: 1 },
          { q: "Palnati Veeracharitra, a Telugu epic, is based on the:", options: ["Satavahana era", "Kakatiya era civil war at Palnad", "Vijayanagara period", "Eastern Chalukya period"], answer: 1 },
          { q: "Who completed the Telugu Mahabharata after Nannaya?", options: ["Tikkana and Errana", "Potana and Srinatha", "Vemana and Kshetrayya", "Krishnadevaraya and Peddana"], answer: 0 },
          { q: "Krishnadevaraya, the great Telugu poet-king, belonged to which dynasty?", options: ["Kakatiya", "Eastern Chalukya", "Vijayanagara", "Reddi"], answer: 2 },
          { q: "Amuktamalyada, a famous Telugu literary work, was written by:", options: ["Allasani Peddana", "Krishnadevaraya", "Nannaya", "Tikkana"], answer: 1 },
          { q: "Potana's famous Telugu Bhagavatam was dedicated to:", options: ["A king", "God Rama", "Lord Shiva", "No king — dedicated to God directly"], answer: 3 },
          { q: "The Eastern Chalukyas of Vengi ruled from approximately:", options: ["300–600 CE", "624–1075 CE", "1100–1300 CE", "1400–1600 CE"], answer: 1 },
          { q: "Vemana, the Telugu philosopher-poet, is known for his:", options: ["Epic poetry", "Short satirical poems (Satakam)", "Religious hymns", "Historical narratives"], answer: 1 },
          { q: "The Kakatiya ruler famous for constructing the Warangal Fort and Ramappa Temple was:", options: ["Ganapati Deva", "Prataparudra I", "Rudrama Devi", "Prataparudra II"], answer: 0 }
        ]
      },
      {
        title: "Andhra Movement & State Formation",
        desc: "Origin of Andhra Movement, Formation of AP 1953 & 1956",
        content: "The Andhra Movement demanded a separate state for Telugu-speaking people. Potti Sriramulu's fast unto death in 1952 led to the formation of Andhra State on October 1, 1953. Andhra Pradesh was created on November 1, 1956 after the States Reorganisation Act.",
        questions: [
          { q: "Andhra State was formed in the year:", options: ["1950", "1952", "1953", "1956"], answer: 2 },
          { q: "Potti Sriramulu fasted unto death for the cause of:", options: ["Indian independence", "Anti-zamindari struggle", "Separate Andhra state", "AP bifurcation"], answer: 2 },
          { q: "Andhra Pradesh was formed on:", options: ["1 October 1953", "1 November 1956", "2 June 1956", "15 August 1957"], answer: 1 },
          { q: "The States Reorganisation Commission (1953) was headed by:", options: ["Jawaharlal Nehru", "Fazal Ali", "B.R. Ambedkar", "Vallabhbhai Patel"], answer: 1 },
          { q: "The 'Gentlemen's Agreement' (1956) was made between leaders of:", options: ["Andhra and Madras regions", "Andhra and Hyderabad regions", "Andhra and Karnataka", "Hyderabad and Telangana"], answer: 1 },
          { q: "The Andhra Mahasabha was an important organization for:", options: ["Anti-British struggle in Andhra", "Promotion of Telugu language and culture", "Zamindari abolition", "Communist movement"], answer: 1 },
          { q: "Which newspaper played a key role in the Andhra Movement?", options: ["The Hindu", "Krishna Patrika", "Deccan Chronicle", "Eenadu"], answer: 1 },
          { q: "The Visalandhra Mahasabha advocated for:", options: ["Division of Andhra Pradesh", "Unification of all Telugu-speaking regions", "Merger with Karnataka", "Separate Telangana state"], answer: 1 },
          { q: "Andhra Pradesh was the first state in India to be formed on the basis of:", options: ["Religion", "Historical factors", "Language", "Administrative convenience"], answer: 2 },
          { q: "Telangana was carved out of Andhra Pradesh on:", options: ["2 June 2013", "2 June 2014", "1 November 2014", "26 January 2015"], answer: 1 }
        ]
      }
    ]
  },

  ]
};

const SUBJECT_APHISTORY_TE = {
  label: "ఆంధ్రప్రదేశ్ చరిత్ర", icon: "📜", color: "#f0a500", exam: "మెయిన్ పరీక్ష",
  subtopics: [
        desc: "ఆంధ్ర సాతవాహన, ఇక్ష్వాకు, పల్లవ రాజవంశాలు",
        content: "ఆంధ్రుల చరిత్ర సాతవాహన రాజవంశం (230 BCE – 220 CE) నుండి ప్రారంభమవుతుంది. అమరావతి, నాగార్జునకొండ బౌద్ధ నిర్మాణ కేంద్రాలుగా వెలిగాయి.",
        questions: [
          { q: "సాతవాహన రాజవంశ స్థాపకుడు:", options: ["శ్రీముఖ", "సిముక", "హాల", "గౌతమీపుత్ర శాతకర్ణి"], answer: 1 },
          { q: "నాగార్జున కొండ ఏ జిల్లాలో ఉంది?", options: ["గుంటూరు", "నల్లగొండ", "పల్నాడు", "కర్నూలు"], answer: 1 },
          { q: "కృష్ణదేవరాయలు రాసిన తెలుగు రచన:", options: ["రంగనాథ రామాయణం", "అముక్తమాల్యద", "మనుచరిత్ర", "పాండురంగ మాహాత్మ్యం"], answer: 1 },
          { q: "విజయనగర సామ్రాజ్యం స్థాపించింది:", options: ["కృష్ణదేవరాయలు", "హరిహర మరియు బుక్కరాయలు", "దేవరాయలు II", "రామరాయలు"], answer: 1 },
          { q: "చారిత్రక అమరావతి స్తూపం ఏ కాలానికి చెందినది?", options: ["మౌర్య కాలం", "సాతవాహన కాలం", "గుప్త కాలం", "విజయనగర కాలం"], answer: 1 },
          { q: "శ్రీ కృష్ణదేవరాయలు 'అష్ఠదిగ్గజాలు'గా పిలవబడే ఎంతమంది కవులను పోషించారు?", options: ["6", "7", "8", "9"], answer: 2 },
          { q: "రెడ్డి రాజుల రాజధాని:", options: ["వారంగల్", "కొండవీడు", "విజయనగరం", "ఓరుగల్లు"], answer: 1 },
          { q: "ఇక్ష్వాకు రాజవంశం రాజధాని:", options: ["అమరావతి", "నాగార్జున కొండ (విజయపురి)", "ధారణికోట", "పైఠాన్"], answer: 1 },
          { q: "తెలుగు లిఖిత ప్రమాణం మొదటిసారి ఏ రాజు శాసనాలలో కనిపిస్తుంది?", options: ["ఇక్ష్వాకులు", "సాతవాహనులు", "కాకతీయులు", "పల్లవులు"], answer: 0 },
          { q: "తాళ్ళపాక అన్నమాచార్య ప్రసిద్ధి చెందింది:", options: ["వ్యాకరణం", "రాజ్యాంగ చట్టం", "సంకీర్తనలు (తెలుగు భక్తి కవిత్వం)", "యుద్ధ వ్యూహం"], answer: 2 }
        ]
      }
    ]
  ]
};
