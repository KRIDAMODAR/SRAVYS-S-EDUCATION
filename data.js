// ============================================================
// data.js — Master file (DO NOT EDIT CONTENT HERE)
// To update a subject, edit only that subject's .js file:
//
//   history.js      → Indian History (చరిత్ర)
//   geography.js    → Geography (భూగోళశాస్త్రం)
//   society.js      → Indian Society (సమాజం)
//   current.js      → Current Affairs (కరెంట్ అఫైర్స్)
//   mental.js       → Mental Ability (మానసిక సామర్థ్యం)
//   aphistory.js    → AP History (ఆంధ్ర చరిత్ర)
//   constitution.js → Indian Constitution (రాజ్యాంగం)
//   economy.js      → Economy (ఆర్థిక శాస్త్రం)
//   science.js      → Science & Technology (విజ్ఞానం)
// ============================================================

// ── Assemble English DATA from subject files ─────────────
const DATA = {
  history:      SUBJECT_HISTORY_EN,
  geography:    SUBJECT_GEOGRAPHY_EN,
  society:      SUBJECT_SOCIETY_EN,
  current:      SUBJECT_CURRENT_EN,
  mental:       SUBJECT_MENTAL_EN,
  aphistory:    SUBJECT_APHISTORY_EN,
  constitution: SUBJECT_CONSTITUTION_EN,
  economy:      SUBJECT_ECONOMY_EN,
  science:      SUBJECT_SCIENCE_EN,
};

// ── Assemble Telugu DATA_TE from subject files ───────────
const DATA_TE = {
  history:      SUBJECT_HISTORY_TE,
  geography:    SUBJECT_GEOGRAPHY_TE,
  society:      SUBJECT_SOCIETY_TE,
  current:      SUBJECT_CURRENT_TE,
  mental:       SUBJECT_MENTAL_TE,
  aphistory:    SUBJECT_APHISTORY_TE,
  constitution: SUBJECT_CONSTITUTION_TE,
  economy:      SUBJECT_ECONOMY_TE,
  science:      SUBJECT_SCIENCE_TE,
};

// ── Subject groupings ────────────────────────────────────
const SCREENING_SUBJECTS = ['history','geography','society','current','mental'];
const MAIN_SUBJECTS      = ['aphistory','constitution','economy','science'];

// ── State ────────────────────────────────────────────────
let currentSubject  = null;
let currentTopicIdx = null;
let examAnswers     = [];

// ── Language ─────────────────────────────────────────────
let currentLang = 'en';

const UI_TE = {
  navHome: 'హోమ్', navHistory: 'చరిత్ర', navGeography: 'భూగోళం',
  navSociety: 'భారతీయ సమాజం', navCurrent: 'కరెంట్ అఫైర్స్',
  navMental: 'మానసిక సామర్థ్యం', navApHistory: 'ఆంధ్ర చరిత్ర',
  navConstitution: 'భారత రాజ్యాంగం', navEconomy: 'ఆర్థిక శాస్త్రం',
  navScience: 'విజ్ఞాన శాస్త్రం',
  screeningTitle: 'స్క్రీనింగ్ టెస్ట్', mainTitle: 'మెయిన్ పరీక్ష',
  heroEyebrow: '✦ అధికారిక సిలబస్ ఆధారిత సన్నద్ధత',
  heroH1: '<span>APPSC</span> గ్రూప్ II 2024<br/>మాస్టర్ చేయండి',
  heroP: 'స్క్రీనింగ్ మరియు మెయిన్ పరీక్ష అన్ని సబ్జెక్టులకు నిర్మాణాత్మక, సిలబస్ అనుగుణమైన అధ్యయన సామగ్రి.',
  heroSubjects: 'సబ్జెక్టులు', heroSubtopics: 'సబ్టాపిక్స్', heroExam: 'పరీక్ష మోడ్',
  screeningSection: 'స్క్రీనింగ్ టెస్ట్ సబ్జెక్టులు', mainSection: 'మెయిన్ పరీక్ష సబ్జెక్టులు',
  backHome: '← హోమ్‌కి వెళ్ళు', topicOverview: '📖 టాపిక్ అవలోకనం',
  readyTest: '🎯 పరీక్ష రాయడానికి సిద్ధంగా ఉన్నారా?',
  takeExamDesc: 'ఈ టాపిక్‌పై 10-ప్రశ్నల MCQ పరీక్ష రాయండి',
  takeExam: '⚡ పరీక్ష రాయండి', examLabel: 'పరీక్ష', questions: 'ప్రశ్నలు',
  questionOf: 'లో', questionLabel: 'ప్రశ్న',
  answered: 'సమాధానమిచ్చారు', allAnswered: 'అన్ని {n} ప్రశ్నలకు సమాధానమిచ్చారు — సబ్మిట్ చేయడానికి సిద్ధం!',
  of: '{n} లో సమాధానమిచ్చారు', submitBtn: '✅ పరీక్ష సబ్మిట్ చేయండి & ఫలితాలు చూడండి',
  correctAnswers: 'సరైన సమాధానాలు', retry: '↺ మళ్ళీ పరీక్ష రాయండి', close: 'మూసివేయి ✕',
  answerReview: '📋 సమాధాన సమీక్ష', yourAnswer: 'మీ సమాధానం:', correctAnswer: '✓ సరైనది:',
  explore: 'చదవండి →', subtopics: 'సబ్టాపిక్స్',
  grades: { perfect: 'పర్ఫెక్ట్ స్కోర్!', excellent: 'అద్భుతం!', good: 'బాగా చేశారు!', keepGoing: 'కొనసాగండి!', practice: 'మరింత అభ్యాసం అవసరం' },
  messages: {
    perfect: 'అద్భుతంగా చేశారు! అన్ని ప్రశ్నలకు సరిగా సమాధానమిచ్చారు. మీరు పరీక్షకు సంపూర్ణంగా సిద్ధంగా ఉన్నారు! 🚀',
    excellent: 'అత్యుత్తమ పని! కొంచెం మరింత పునశ్చరణతో మీరు దాన్ని జయిస్తారు. కొనసాగండి! 💪',
    good: 'మంచి ప్రయత్నం! మీరు మిస్ చేసిన ప్రశ్నల కోసం సమీక్ష చూడండి. 📚',
    keepGoing: 'వదలుకోకండి! టాపిక్ మళ్ళీ చదివి మళ్ళీ ప్రయత్నించండి. 🌱',
    practice: 'నోట్సులు జాగ్రత్తగా మళ్ళీ చదవడం ప్రారంభించండి. ప్రతి ప్రయత్నం మిమ్మల్ని బలోపేతం చేస్తుంది! 🙌'
  },
  placeholder: '✎ సవరించదగిన స్థానభర్తీ — ఇక్కడ పూర్తి విషయం జోడించండి',
  footer: "Sravya's Education • APPSC గ్రూప్ II సన్నద్ధత •"
};

const UI_EN = {
  navHome: 'Home', navHistory: 'Indian History', navGeography: 'Geography',
  navSociety: 'Indian Society', navCurrent: 'Current Affairs', navMental: 'Mental Ability',
  navApHistory: 'AP History', navConstitution: 'Indian Constitution',
  navEconomy: 'Economy', navScience: 'Science & Tech',
  screeningTitle: 'Screening Test', mainTitle: 'Main Exam',
  heroEyebrow: '✦ Official Syllabus Based Prep',
  heroH1: 'Master <span>APPSC</span><br/>Group II 2024',
  heroP: 'Structured, syllabus-aligned study material for all Screening and Main Exam subjects. Click any subject to begin.',
  heroSubjects: 'Subjects', heroSubtopics: 'Subtopics', heroExam: 'Exam Mode',
  screeningSection: 'Screening Test Subjects', mainSection: 'Main Exam Subjects',
  backHome: '← Back to Home', topicOverview: '📖 Topic Overview',
  readyTest: '🎯 Ready to test yourself?',
  takeExamDesc: 'Take a 10-question MCQ exam on this topic',
  takeExam: '⚡ Take Exam', examLabel: 'Exam', questions: 'Questions',
  questionOf: 'of', questionLabel: 'Question',
  answered: 'answered', allAnswered: 'All {n} questions answered — ready to submit!',
  of: '{n} of answered', submitBtn: '✅ Submit Exam & See Results',
  correctAnswers: 'Correct answers', retry: '↺ Retry Exam', close: 'Close ✕',
  answerReview: '📋 Answer Review', yourAnswer: 'Your answer:', correctAnswer: '✓ Correct:',
  explore: 'Explore →', subtopics: 'subtopics',
  grades: { perfect: 'Perfect Score!', excellent: 'Excellent!', good: 'Good Job!', keepGoing: 'Keep Going!', practice: 'Needs More Practice' },
  messages: {
    perfect: 'Absolutely brilliant! You nailed every question. You are fully exam-ready! 🚀',
    excellent: 'Outstanding work! Just a bit more revision and you will ace it. Keep pushing! 💪',
    good: 'Solid effort! Check the review below for the questions you missed. 📚',
    keepGoing: 'Do not give up! Re-read the topic and try again. Progress takes practice! 🌱',
    practice: 'Start by re-reading the notes carefully. Every attempt makes you stronger! 🙌'
  },
  placeholder: '✎ Editable Placeholder — Add full content here',
  footer: "Sravya's Education • APPSC Group II Prep •"
};

function getUI()   { return currentLang === 'te' ? UI_TE : UI_EN; }
function getDATA() { return currentLang === 'te' ? DATA_TE : DATA; }
