// ============================================================
// constitution.js — Indian Constitution (భారత రాజ్యాంగం)
// ✏️  Edit ONLY this file to update Indian Constitution content
// ============================================================

const SUBJECT_CONSTITUTION_EN = {
  label: "Indian Constitution", icon: "⚖️", color: "#7a5af8", exam: "Main Exam",
  subtopics: [
    exam: "Main Exam – Paper I",
    subtopics: [
      {
        title: "Salient Features & Preamble",
        desc: "Nature, Constitutional Development, Preamble",
        content: "The Indian Constitution, adopted on November 26, 1949, is the world's longest written constitution. The Preamble describes India as a Sovereign, Socialist, Secular, Democratic Republic committed to justice, liberty, equality, and fraternity.",
        questions: [
          { q: "The Indian Constitution came into force on:", options: ["15 August 1947", "26 January 1950", "26 November 1949", "30 January 1950"], answer: 1 },
          { q: "The words 'Socialist' and 'Secular' were added to the Preamble by the:", options: ["42nd Amendment", "44th Amendment", "52nd Amendment", "86th Amendment"], answer: 0 },
          { q: "The Indian Constitution was adopted on:", options: ["15 August 1947", "26 January 1950", "26 November 1949", "30 January 1948"], answer: 2 },
          { q: "The Constituent Assembly of India was chaired by:", options: ["Jawaharlal Nehru", "Vallabhbhai Patel", "Dr. Rajendra Prasad", "B.R. Ambedkar"], answer: 2 },
          { q: "The Drafting Committee of the Constitution was headed by:", options: ["Dr. Rajendra Prasad", "B.R. Ambedkar", "Jawaharlal Nehru", "Alladi Krishnaswami Ayyar"], answer: 1 },
          { q: "The Preamble to the Indian Constitution was adopted from the Constitution of:", options: ["USA", "UK", "Australia", "France"], answer: 0 },
          { q: "India is described as a 'Union of States' in Article:", options: ["Article 1", "Article 2", "Article 3", "Article 4"], answer: 0 },
          { q: "The concept of Fundamental Rights was borrowed from the constitution of:", options: ["UK", "Australia", "USA", "Ireland"], answer: 2 },
          { q: "The concept of Directive Principles of State Policy was borrowed from:", options: ["USA", "Canada", "Ireland", "Australia"], answer: 2 },
          { q: "Which country's constitution is considered the basis for the Parliamentary form of government in India?", options: ["USA", "Canada", "UK", "France"], answer: 2 }
        ]
      },
      {
        title: "Fundamental Rights",
        desc: "Articles 12–35: Rights and their relationship with DPSPs",
        content: "Fundamental Rights (Articles 12–35) are justiciable rights guaranteed to all citizens. They include Right to Equality (14–18), Right to Freedom (19–22), Right against Exploitation (23–24), Right to Freedom of Religion (25–28), Cultural & Educational Rights (29–30), and Right to Constitutional Remedies (32).",
        questions: [
          { q: "Article 32 deals with:", options: ["Right to Equality", "Right to Property", "Right to Constitutional Remedies", "Right to Education"], answer: 2 },
          { q: "The 'Right to Education' was made a Fundamental Right by the:", options: ["86th Amendment", "44th Amendment", "73rd Amendment", "91st Amendment"], answer: 0 },
          { q: "Article 19 guarantees freedom of:", options: ["Religion", "Speech, expression, assembly, movement etc.", "Life and personal liberty", "Residence and profession only"], answer: 1 },
          { q: "The Right to Equality is guaranteed under Articles:", options: ["12–18", "14–18", "19–22", "23–24"], answer: 1 },
          { q: "Which Fundamental Right was originally included but later removed by the 44th Amendment?", options: ["Right to Education", "Right to Property", "Right to Privacy", "Right to Work"], answer: 1 },
          { q: "Article 21A providing free and compulsory education covers children of age:", options: ["0–6 years", "6–14 years", "6–18 years", "5–15 years"], answer: 1 },
          { q: "The Directive Principles of State Policy are:", options: ["Justiciable in courts", "Non-justiciable but fundamental in governance", "Part of Fundamental Rights", "Only for states"], answer: 1 },
          { q: "Article 23 prohibits:", options: ["Untouchability", "Forced labour and human trafficking", "Child labour", "Discrimination in public employment"], answer: 1 },
          { q: "The 'Golden Triangle' of the Indian Constitution consists of Articles:", options: ["12, 13, 14", "14, 19, 21", "19, 20, 21", "32, 226, 136"], answer: 1 },
          { q: "Which writ is issued to a lower court or tribunal to prevent it from exceeding its jurisdiction?", options: ["Mandamus", "Certiorari", "Prohibition", "Quo Warranto"], answer: 2 }
        ]
      },
      {
        title: "Parliament & Judiciary",
        desc: "Legislature, Executive, Judiciary, Judicial Review",
        content: "India has a bicameral Parliament comprising the Rajya Sabha (upper house, 245 members) and Lok Sabha (lower house, 543 elected members). The Supreme Court is the apex judicial body and exercises judicial review to strike down unconstitutional laws.",
        questions: [
          { q: "The maximum strength of the Lok Sabha is:", options: ["543", "545", "552", "560"], answer: 1 },
          { q: "Judicial Review in India means:", options: ["Review of judicial decisions", "Power to declare laws unconstitutional", "Review of executive actions only", "Appellate jurisdiction"], answer: 1 },
          { q: "The Rajya Sabha consists of a maximum of how many members?", options: ["238", "245", "250", "260"], answer: 1 },
          { q: "Money Bills can only be introduced in:", options: ["Rajya Sabha", "Lok Sabha", "Either House", "Joint sitting"], answer: 1 },
          { q: "The President of India is elected by:", options: ["Direct election by citizens", "Elected members of Parliament and State Assemblies", "Both Houses of Parliament only", "Supreme Court judges"], answer: 1 },
          { q: "The concept of 'Basic Structure' of the Constitution was propounded in:", options: ["A.K. Gopalan case", "Kesavananda Bharati case", "Minerva Mills case", "Maneka Gandhi case"], answer: 1 },
          { q: "Public Interest Litigation (PIL) in India was introduced by:", options: ["Justice V.R. Krishna Iyer and Justice P.N. Bhagwati", "Justice Y.V. Chandrachud", "Justice H.R. Khanna", "Justice M. Hidayatullah"], answer: 0 },
          { q: "The term of Lok Sabha is:", options: ["4 years", "5 years", "6 years", "Permanent"], answer: 1 },
          { q: "The Prime Minister of India is appointed by the:", options: ["Lok Sabha", "Rajya Sabha", "President of India", "Supreme Court"], answer: 2 },
          { q: "A Constitutional Amendment Bill requires passage by:", options: ["Simple majority in Parliament", "Two-thirds majority in both Houses and ratification by half the states (for some provisions)", "Unanimous vote", "Referendum"], answer: 1 }
        ]
      },
      {
        title: "Centre–State Relations",
        desc: "Distribution of Powers, Financial Relations, Federalism",
        content: "India is a federal state with a strong centre. Powers are distributed through three lists: Union List (100 subjects), State List (61 subjects), and Concurrent List (52 subjects). The Sarkaria Commission (1983) and Punchchi Commission (2007) recommended reforms to balance Centre-State relations.",
        questions: [
          { q: "The Sarkaria Commission was set up to examine:", options: ["Electoral reforms", "Centre-State relations", "Judicial appointments", "Federalism"], answer: 1 },
          { q: "The 73rd Constitutional Amendment relates to:", options: ["Nagar Panchayats", "Panchayati Raj", "Cooperative societies", "Urban local bodies"], answer: 1 },
          { q: "The Union List in the Indian Constitution contains subjects on which:", options: ["Only states can legislate", "Only Parliament can legislate", "Both Parliament and State can legislate", "Neither can legislate without President's permission"], answer: 1 },
          { q: "In case of conflict between Central and State laws on the Concurrent List, which prevails?", options: ["State law always prevails", "Central law prevails", "The later law prevails regardless of level", "President decides"], answer: 1 },
          { q: "The Finance Commission is constituted every:", options: ["3 years", "5 years", "6 years", "10 years"], answer: 1 },
          { q: "The Balwant Rai Mehta Committee (1957) recommended:", options: ["Financial reforms", "Three-tier Panchayati Raj system", "Centre-State financial relations", "Urban governance reforms"], answer: 1 },
          { q: "Article 356 deals with:", options: ["Emergency due to war", "Financial emergency", "President's Rule in states", "Proclamation of national emergency"], answer: 2 },
          { q: "The 74th Constitutional Amendment deals with:", options: ["Panchayati Raj", "Urban Local Bodies", "Cooperative societies", "Decentralization of finances"], answer: 1 },
          { q: "Residuary powers in India are vested with:", options: ["State governments", "Parliament (Union)", "Both Centre and States", "Supreme Court"], answer: 1 },
          { q: "The Inter-State Council was established under Article:", options: ["256", "263", "270", "280"], answer: 1 }
        ]
      }
    ]
  },

  ]
};

const SUBJECT_CONSTITUTION_TE = {
  label: "భారత రాజ్యాంగం", icon: "⚖️", color: "#7a5af8", exam: "మెయిన్ పరీక్ష",
  subtopics: [
        desc: "రాజ్యాంగ పరిషత్, ప్రవేశిక, ప్రాథమిక లక్షణాలు",
        content: "భారత రాజ్యాంగం 26 నవంబర్ 1949న ఆమోదించబడింది మరియు 26 జనవరి 1950న అమలులోకి వచ్చింది. డాక్టర్ బి.ఆర్. అంబేద్కర్ రాజ్యాంగ ముసాయిదా కమిటీ చైర్మన్.",
        questions: [
          { q: "భారత రాజ్యాంగం అమలులోకి వచ్చిన తేదీ:", options: ["15 ఆగస్ట్ 1947", "26 నవంబర్ 1949", "26 జనవరి 1950", "2 అక్టోబర్ 1950"], answer: 2 },
          { q: "రాజ్యాంగ ముసాయిదా కమిటీ చైర్మన్:", options: ["జవహర్లాల్ నెహ్రూ", "రాజేంద్ర ప్రసాద్", "బి.ఆర్. అంబేద్కర్", "సర్దార్ పటేల్"], answer: 2 },
          { q: "ప్రస్తుతం భారత రాజ్యాంగంలో అధికరణలు:", options: ["395", "444", "470+", "500+"], answer: 2 },
          { q: "భారత రాజ్యాంగంలో మూల హక్కులు ఏ భాగంలో ఉన్నాయి?", options: ["భాగం II", "భాగం III", "భాగం IV", "భాగం V"], answer: 1 },
          { q: "భారత రాజ్యాంగ ప్రవేశిక 'సార్వభౌమ, సోషలిస్టు, లౌకిక, ప్రజాస్వామిక, గణతంత్ర రాజ్యం'గా వర్ణిస్తుంది. 'సోషలిస్టు' మరియు 'లౌకిక' పదాలు చేర్చిన సవరణ:", options: ["42వ సవరణ, 1976", "44వ సవరణ, 1978", "52వ సవరణ, 1985", "73వ సవరణ, 1992"], answer: 0 },
          { q: "హక్కుల రక్షకుడిగా పిలవబడే అధికరణ:", options: ["అధికరణ 14", "అధికరణ 19", "అధికరణ 21", "అధికరణ 32"], answer: 3 },
          { q: "భారతదేశంలో ఒకే పౌరసత్వం ఉంది, దీన్ని ఎక్కడ నుండి గ్రహించారు?", options: ["అమెరికా", "కెనడా", "యుకె", "ఆస్ట్రేలియా"], answer: 2 },
          { q: "ప్రాథమిక విధులు ఏ సవరణ ద్వారా జోడించబడ్డాయి?", options: ["42వ సవరణ", "44వ సవరణ", "52వ సవరణ", "86వ సవరణ"], answer: 0 },
          { q: "భారతదేశపు 'క్విజి-ఫెడరల్' లక్షణాన్ని ఏ భావనతో వివరిస్తారు?", options: ["ఏకీకృత లక్షణాలతో సమాఖ్య", "సమాఖ్య లక్షణాలతో ఏకీకృత", "సుప్రీం కోర్ట్ పర్యవేక్షణలో సమాఖ్య", "పార్లమెంట్ పర్యవేక్షణలో సమాఖ్య"], answer: 1 },
          { q: "రాష్ట్ర విధాన నిర్దేశక సూత్రాలు ఏ భాగంలో ఉన్నాయి?", options: ["భాగం II", "భాగం III", "భాగం IV", "భాగం IVA"], answer: 2 }
        ]
      }
    ]
  ]
};
