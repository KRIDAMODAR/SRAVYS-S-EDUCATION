// ============================================================
// mental.js — Mental Ability (మానసిక సామర్థ్యం)
// ✏️  Edit ONLY this file to update Mental Ability content
// ============================================================

const SUBJECT_MENTAL_EN = {
  label: "Mental Ability", icon: "🧠", color: "#3ecfb2", exam: "Screening Test",
  subtopics: [
    subtopics: [
      {
        title: "Logical Reasoning",
        desc: "Statements: Assumptions, Arguments, Conclusions, Courses of Action",
        content: "Logical reasoning tests your ability to draw valid inferences from given statements. Types include deductive reasoning (specific from general), inductive reasoning (general from specific), and abductive reasoning (best explanation from evidence).",
        questions: [
          { q: "In deductive reasoning, if all A are B, and X is A, then:", options: ["X may be B", "X is B", "X is not B", "Cannot determine"], answer: 1 },
          { q: "All cats are animals. Some animals are white. Therefore:", options: ["All cats are white", "Some cats are white", "Some animals are cats", "None of the above is definite"], answer: 3 },
          { q: "Statement: All managers are employees. Conclusion: Some employees are managers. The conclusion is:", options: ["Definitely true", "Definitely false", "Probably true", "Cannot say"], answer: 0 },
          { q: "If APPLE = 50, MANGO = 50, then GRAPE = ?", options: ["43", "48", "50", "52"], answer: 1 },
          { q: "Pointing to a man, a woman says 'His mother is the only daughter of my mother.' How is the woman related to the man?", options: ["Grandmother", "Mother", "Sister", "Aunt"], answer: 1 },
          { q: "Statement: Should smoking be banned in public places? Argument: Yes, it harms non-smokers. This argument is:", options: ["Weak", "Strong", "Irrelevant", "Ambiguous"], answer: 1 },
          { q: "If in a certain code, PENCIL is written as LICNEP, then ERASER is written as:", options: ["RESARE", "RESEAR", "RESAER", "REASRE"], answer: 2 },
          { q: "A is B's sister. C is B's mother. D is C's father. E is D's mother. How is A related to D?", options: ["Granddaughter", "Grandmother", "Daughter", "Sister"], answer: 0 },
          { q: "If '+' means '×', '×' means '−', '−' means '÷', '÷' means '+', then 8 + 4 − 2 ÷ 3 = ?", options: ["17", "19", "21", "15"], answer: 1 },
          { q: "Which of the following is an example of inductive reasoning?", options: ["All men are mortal; Socrates is a man; Socrates is mortal", "The sun rose every day for 1000 years; it will rise tomorrow", "If P then Q; P is true; therefore Q", "None of the above"], answer: 1 }
        ]
      },
      {
        title: "Number & Letter Series",
        desc: "Number Series, Letter Series, Odd Man Out, Coding-Decoding",
        content: "Series questions require finding the pattern in a sequence of numbers or letters. Common patterns include arithmetic progressions, geometric progressions, prime numbers, squares, cubes, and alternating patterns.",
        questions: [
          { q: "Find the missing number: 2, 6, 12, 20, ?", options: ["28", "30", "32", "36"], answer: 1 },
          { q: "Find the odd one out: 3, 5, 7, 9, 11", options: ["3", "7", "9", "11"], answer: 2 },
          { q: "Next term in the series: 1, 4, 9, 16, 25, ?", options: ["30", "35", "36", "49"], answer: 2 },
          { q: "Complete the series: B, D, G, K, ?", options: ["N", "O", "P", "Q"], answer: 2 },
          { q: "Find the missing number: 5, 10, 20, 40, ?", options: ["60", "70", "80", "100"], answer: 2 },
          { q: "Odd one out: 144, 169, 196, 225, 250", options: ["144", "196", "225", "250"], answer: 3 },
          { q: "If CAT = 24, DOG = 26, then COT = ?", options: ["24", "25", "26", "27"], answer: 1 },
          { q: "Next in series: AZ, BY, CX, DW, ?", options: ["EV", "EU", "FV", "EW"], answer: 0 },
          { q: "Find the missing: 2, 3, 5, 8, 13, 21, ?", options: ["29", "32", "34", "36"], answer: 2 },
          { q: "If ROAD is coded as URDG, then SWAN is coded as:", options: ["VZDQ", "VZCQ", "VZBQ", "VYCO"], answer: 0 }
        ]
      },
      {
        title: "Basic Numeracy",
        desc: "Number System, Ratio, Percentage, Time & Work, Data Analysis",
        content: "Basic numeracy covers arithmetic operations, ratio and proportion, percentage calculations, simple and compound interest, time-distance-speed, and interpretation of graphs like bar charts, pie charts, and line graphs.",
        questions: [
          { q: "If 20% of a number is 50, what is the number?", options: ["100", "200", "250", "400"], answer: 2 },
          { q: "A train travels 360 km in 4 hours. Its speed is:", options: ["80 kmph", "90 kmph", "100 kmph", "120 kmph"], answer: 1 },
          { q: "Simple interest on ₹2000 at 5% per annum for 3 years is:", options: ["₹200", "₹250", "₹300", "₹350"], answer: 2 },
          { q: "A : B = 3 : 4 and B : C = 2 : 3. Then A : C =", options: ["1 : 2", "3 : 8", "1 : 3", "2 : 5"], answer: 0 },
          { q: "If a work is done by A in 10 days and B in 15 days, together they complete it in:", options: ["5 days", "6 days", "8 days", "12 days"], answer: 1 },
          { q: "What is 15% of 240?", options: ["30", "36", "40", "45"], answer: 1 },
          { q: "Compound interest on ₹1000 at 10% per annum for 2 years is:", options: ["₹200", "₹210", "₹220", "₹100"], answer: 1 },
          { q: "A man walks at 5 km/h. How long to cover 20 km?", options: ["2 hours", "3 hours", "4 hours", "5 hours"], answer: 2 },
          { q: "If a pie chart shows 25% for Agriculture, the angle for that sector is:", options: ["60°", "72°", "90°", "120°"], answer: 2 },
          { q: "Average of 5, 10, 15, 20, 25 is:", options: ["12", "13", "14", "15"], answer: 3 }
        ]
      }
    ]
  },

  // ── MAIN EXAM ──────────────────────────────────────────
  ]
};

const SUBJECT_MENTAL_TE = {
  label: "మానసిక సామర్థ్యం", icon: "🧠", color: "#3ecfb2", exam: "స్క్రీనింగ్ టెస్ట్",
  subtopics: [
        desc: "తార్కిక, సంఖ్యాత్మక మరియు వేర్బల్ రీజనింగ్",
        content: "మానసిక సామర్థ్యం విభాగంలో తార్కిక చింతన, సంఖ్యా శ్రేణులు, అనలాజీలు, కోడింగ్-డీకోడింగ్, గడియారం మరియు క్యాలెండర్ సమస్యలు ఉంటాయి.",
        questions: [
          { q: "3, 6, 12, 24, __ తర్వాత వచ్చే సంఖ్య:", options: ["36", "48", "54", "60"], answer: 1 },
          { q: "ABCD : DCBA :: EFGH : ?", options: ["HGFE", "FGHE", "HEFG", "GHEF"], answer: 0 },
          { q: "ఒక గడియారంలో 3 గంటలకు గంట మరియు నిమిష ముల్లుల మధ్య కోణం:", options: ["60°", "75°", "90°", "120°"], answer: 2 },
          { q: "2025 జనవరి 1 బుధవారం అయితే, 2025 ఫిబ్రవరి 1 ఏ రోజు?", options: ["శనివారం", "ఆదివారం", "సోమవారం", "మంగళవారం"], answer: 0 },
          { q: "CAT : ACT :: DOG : ?", options: ["OGD", "GOD", "DGO", "ODG"], answer: 1 },
          { q: "100 నుండి 200 వరకు మొత్తం:", options: ["14950", "15050", "15150", "15250"], answer: 1 },
          { q: "ఒక వ్యక్తి 40 కిమీ/గంట వేగంతో A నుండి B కు ప్రయాణిస్తాడు మరియు 60 కిమీ/గంట వేగంతో తిరిగి వస్తాడు. సగటు వేగం:", options: ["48 కిమీ/గంట", "50 కిమీ/గంట", "52 కిమీ/గంట", "55 కిమీ/గంట"], answer: 0 },
          { q: "1 నుండి 10 వరకు అన్ని సంఖ్యల గుణలబ్ధం:", options: ["3628800", "3268800", "3682800", "3286800"], answer: 0 },
          { q: "RICE ను SJDF గా కోడ్ చేస్తే, MILK ని ఎలా కోడ్ చేస్తారు?", options: ["NJMM", "NJML", "NIMM", "NJNL"], answer: 0 },
          { q: "రాజు పశ్చిమాభిముఖంగా నిలబడ్డాడు. అతను 90° కుడి వైపు తిరిగితే, తర్వాత 45° ఎడమ వైపు తిరిగితే, అతను ఏ దిశగా ఉన్నాడు?", options: ["ఉత్తరం", "ఉత్తరపశ్చిమం", "దక్షిణం", "తూర్పు"], answer: 1 }
        ]
      }
    ]
  },
  ]
};
