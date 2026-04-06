// ============================================================
// data.js — Edit this file to update all content & questions
// ============================================================

const DATA = {

  // ── SCREENING TEST ──────────────────────────────────────
  history: {
    label: "Indian History",
    icon: "🏛️",
    color: "#f0a500",
    exam: "Screening Test",
    subtopics: [
      {
        title: "Indus Valley & Vedic Age",
        desc: "Salient features of Indus Valley Civilization and Vedic Age",
        content: "The Indus Valley Civilization (3300–1300 BCE) featured advanced urban planning at Mohenjo-daro & Harappa. The Vedic Age followed with the composition of the Rig Veda and emergence of early social structures.",
        questions: [
          { q: "Which of the following is NOT a feature of the Indus Valley Civilization?", options: ["Planned cities with drainage", "Use of iron tools", "Trade with Mesopotamia", "Standardized weights"], answer: 1 },
          { q: "The Rig Veda is primarily a collection of:", options: ["Battle hymns", "Sacrificial rituals", "Hymns to deities", "Medical treatises"], answer: 2 },
          { q: "The Great Bath of the Indus Valley Civilization was found at:", options: ["Harappa", "Lothal", "Mohenjo-daro", "Kalibangan"], answer: 2 },
          { q: "Which metal was NOT known to the people of the Indus Valley Civilization?", options: ["Copper", "Bronze", "Gold", "Iron"], answer: 3 },
          { q: "The Indus Valley script is:", options: ["Alphabetical", "Pictographic and undeciphered", "Cuneiform", "Brahmi-based"], answer: 1 },
          { q: "The later Vedic period saw the emergence of which social system?", options: ["Feudal system", "Varna system", "Guild system", "Tribal democracy"], answer: 1 },
          { q: "Which Vedic text deals with medical knowledge?", options: ["Rig Veda", "Sama Veda", "Yajur Veda", "Atharva Veda"], answer: 3 },
          { q: "The main occupation of the Rig Vedic people was:", options: ["Trade", "Agriculture and Pastoralism", "Craft production", "Fishing"], answer: 1 },
          { q: "Dockyard of the Indus Valley Civilization was found at:", options: ["Mohenjo-daro", "Harappa", "Lothal", "Dholavira"], answer: 2 },
          { q: "The Gayatri Mantra is found in which Veda?", options: ["Atharva Veda", "Sama Veda", "Rig Veda", "Yajur Veda"], answer: 2 }
        ]
      },
      {
        title: "Buddhism & Jainism",
        desc: "Emergence of Buddhism and Jainism",
        content: "Buddhism was founded by Gautama Buddha (~563–483 BCE) and Jainism was preached by Vardhamana Mahavira. Both movements arose as a reaction to Brahmanical orthodoxy and emphasized non-violence and ethical conduct.",
        questions: [
          { q: "The Four Noble Truths are a foundational teaching of:", options: ["Jainism", "Buddhism", "Vedanta", "Shaivism"], answer: 1 },
          { q: "The principle of Ahimsa (non-violence) is most central to:", options: ["Mauryan Empire", "Jainism", "Chola Rule", "Islam"], answer: 1 },
          { q: "Gautama Buddha attained enlightenment at:", options: ["Sarnath", "Kushinagar", "Bodh Gaya", "Vaishali"], answer: 2 },
          { q: "The first sermon of Buddha was delivered at:", options: ["Bodh Gaya", "Sarnath", "Lumbini", "Rajgir"], answer: 1 },
          { q: "Vardhamana Mahavira was the __ Tirthankara of Jainism:", options: ["22nd", "23rd", "24th", "25th"], answer: 2 },
          { q: "The Buddhist text 'Tripitaka' is written in:", options: ["Sanskrit", "Pali", "Prakrit", "Ardhamagadhi"], answer: 1 },
          { q: "The concept of 'Nirvana' in Buddhism means:", options: ["Reincarnation", "Liberation from the cycle of birth and death", "Heaven", "Meditation"], answer: 1 },
          { q: "Jainism believes in how many Angas (canonical texts)?", options: ["8", "10", "12", "14"], answer: 2 },
          { q: "Which Buddhist council was held at Pataliputra under Ashoka?", options: ["First", "Second", "Third", "Fourth"], answer: 2 },
          { q: "The 'Middle Path' in Buddhism refers to:", options: ["A path between two rivers", "Avoiding extremes of luxury and asceticism", "A compromise between Jainism and Hinduism", "A neutral political stance"], answer: 1 }
        ]
      },
      {
        title: "Mauryan & Gupta Empires",
        desc: "Administration, Socio-Economic, Art & Architecture",
        content: "The Mauryan Empire (322–185 BCE) under Chandragupta and Ashoka unified the Indian subcontinent. The Gupta Age (320–550 CE) is known as the Golden Age of India, with advances in science, literature, and temple architecture.",
        questions: [
          { q: "The Arthashastra was written by:", options: ["Ashoka", "Kautilya (Chanakya)", "Kalidasa", "Aryabhata"], answer: 1 },
          { q: "Which Gupta ruler is associated with Nalanda University's establishment?", options: ["Chandragupta I", "Samudragupta", "Kumaragupta I", "Skandagupta"], answer: 2 },
          { q: "Ashoka's Dhamma was propagated mainly through:", options: ["Military conquest", "Rock and pillar edicts", "Religious texts", "Trade missions"], answer: 1 },
          { q: "The Mauryan Empire was founded by:", options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Bimbisara"], answer: 1 },
          { q: "Which battle marked Ashoka's conversion to Buddhism?", options: ["Battle of Plassey", "Battle of Kalinga", "Battle of Tarain", "Battle of Panipat"], answer: 1 },
          { q: "Aryabhata, the mathematician-astronomer, belonged to the:", options: ["Mauryan period", "Gupta period", "Kushana period", "Post-Gupta period"], answer: 1 },
          { q: "The iron pillar of Delhi, resistant to rust, was built during:", options: ["Mauryan era", "Gupta era", "Mughal era", "Kushana era"], answer: 1 },
          { q: "Kalidasa, the famous Sanskrit playwright, lived during the reign of:", options: ["Ashoka", "Chandragupta II", "Harshavardhana", "Samudragupta"], answer: 1 },
          { q: "The Mauryan administration at the village level was headed by:", options: ["Amatya", "Gramika", "Rajuka", "Mahamatra"], answer: 1 },
          { q: "Samudragupta is known as the 'Napoleon of India' because of his:", options: ["Administrative reforms", "Military conquests", "Literary contributions", "Religious tolerance"], answer: 1 }
        ]
      },
      {
        title: "Medieval History – Delhi Sultanate",
        desc: "Administration, Socio-Economic, Art & Architecture",
        content: "The Delhi Sultanate (1206–1526 CE) comprised five dynasties — Slave, Khalji, Tughlaq, Sayyid, and Lodi. It introduced Persian language and culture, built architectural marvels like Qutub Minar, and laid the groundwork for Mughal rule.",
        questions: [
          { q: "The Qutub Minar was built by:", options: ["Alauddin Khalji", "Muhammad bin Tughlaq", "Qutb-ud-din Aibak", "Iltutmish"], answer: 2 },
          { q: "The Bhakti movement primarily emphasized:", options: ["Caste superiority", "Personal devotion to God", "Ritualistic sacrifice", "Military expansion"], answer: 1 },
          { q: "Alauddin Khalji introduced the market control policy mainly to:", options: ["Increase tax revenue", "Maintain a large army at low cost", "Help poor citizens", "Control inflation"], answer: 1 },
          { q: "The founder of the Slave Dynasty was:", options: ["Iltutmish", "Balban", "Qutb-ud-din Aibak", "Raziya Sultan"], answer: 2 },
          { q: "Ibn Battuta, the Moroccan traveller, visited India during the reign of:", options: ["Alauddin Khalji", "Muhammad bin Tughlaq", "Firuz Shah Tughlaq", "Iltutmish"], answer: 1 },
          { q: "The first Sultan of Delhi to introduce the concept of 'Token Currency' was:", options: ["Alauddin Khalji", "Ghiyasuddin Tughlaq", "Muhammad bin Tughlaq", "Firuz Shah Tughlaq"], answer: 2 },
          { q: "The Sufi saint Nizamuddin Auliya belonged to which order?", options: ["Suhrawardi", "Chishti", "Qadiri", "Naqshbandi"], answer: 1 },
          { q: "Raziya Sultan was the daughter of:", options: ["Qutb-ud-din Aibak", "Iltutmish", "Balban", "Alauddin Khalji"], answer: 1 },
          { q: "The Battle of Tarain (1192) was fought between Muhammad Ghori and:", options: ["Prithviraj Chahamana", "Jai Chand", "Maharana Pratap", "Hem Chandra Vikramaditya"], answer: 0 },
          { q: "Firuz Shah Tughlaq is remembered for:", options: ["Military conquests", "Welfare works and canal construction", "Token currency", "Market reforms"], answer: 1 }
        ]
      },
      {
        title: "Mughal Empire",
        desc: "Administration, Literature, Language, Art",
        content: "The Mughal Empire (1526–1857) was founded by Babur and reached its zenith under Akbar, Jahangir, and Shah Jahan. It blended Persian, Turko-Mongol, and Indian traditions producing iconic architecture like the Taj Mahal.",
        questions: [
          { q: "Akbar's policy of Sulh-i-Kul means:", options: ["Holy war", "Universal peace", "Military supremacy", "Divine kingship"], answer: 1 },
          { q: "The Taj Mahal was built by which Mughal emperor?", options: ["Akbar", "Aurangzeb", "Shah Jahan", "Jahangir"], answer: 2 },
          { q: "Babur founded the Mughal Empire after defeating whom at the First Battle of Panipat (1526)?", options: ["Rana Sanga", "Ibrahim Lodi", "Hemu", "Daulat Khan Lodi"], answer: 1 },
          { q: "The 'Din-i-Ilahi' was a religious order founded by:", options: ["Babur", "Humayun", "Akbar", "Jahangir"], answer: 2 },
          { q: "Humayun recaptured Delhi from Sher Shah Suri's successors in:", options: ["1540", "1555", "1560", "1565"], answer: 1 },
          { q: "The Mughal painting reached its peak during the reign of:", options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"], answer: 1 },
          { q: "Aurangzeb's religious policy is associated with the reimposition of:", options: ["Jizya tax", "Zakat tax", "Land revenue tax", "Trade tax"], answer: 0 },
          { q: "The Battle of Haldighati (1576) was fought between Akbar's forces and:", options: ["Shivaji", "Maharana Pratap", "Rana Sanga", "Prithviraj Chahamana"], answer: 1 },
          { q: "Which Mughal emperor wrote his autobiography 'Tuzuk-i-Jahangiri'?", options: ["Akbar", "Babur", "Jahangir", "Shah Jahan"], answer: 2 },
          { q: "The Mughal administrative unit 'Suba' was headed by:", options: ["Diwan", "Subedar (Sipahsalar)", "Faujdar", "Kotwal"], answer: 1 }
        ]
      },
      {
        title: "Modern History – 1857 Revolt",
        desc: "Impact of the 1857 Revolt on India",
        content: "The Revolt of 1857 was the first large-scale armed uprising against British rule, triggered by the greased cartridge controversy and deep-seated political grievances. It led to the transfer of power from the East India Company to the British Crown.",
        questions: [
          { q: "The Revolt of 1857 began at:", options: ["Calcutta", "Delhi", "Meerut", "Lucknow"], answer: 2 },
          { q: "After 1857, administration of India was transferred to:", options: ["East India Company", "British Crown", "Indian National Congress", "House of Commons alone"], answer: 1 },
          { q: "The immediate cause of the 1857 Revolt was:", options: ["Heavy taxation", "The greased cartridges controversy", "Annexation of Awadh", "Doctrine of Lapse"], answer: 1 },
          { q: "Who was the last Mughal Emperor during the 1857 Revolt?", options: ["Akbar II", "Bahadur Shah Zafar", "Shah Alam II", "Muhammad Shah"], answer: 1 },
          { q: "The Rani of Jhansi who fought in the 1857 Revolt was:", options: ["Chand Bibi", "Lakshmibai", "Ahilyabai Holkar", "Kittur Chennamma"], answer: 1 },
          { q: "The 'Doctrine of Lapse' was introduced by:", options: ["Lord Dalhousie", "Lord Wellesley", "Lord Cornwallis", "Lord Canning"], answer: 0 },
          { q: "The 1857 Revolt is also known as:", options: ["Sepoy Mutiny and First War of Independence", "Peasant Uprising", "Tribal Revolt", "Religious War"], answer: 0 },
          { q: "Mangal Pandey, who fired the first shot of the 1857 Revolt, was a soldier of:", options: ["34th Bengal Infantry", "44th Bengal Infantry", "64th Bengal Infantry", "54th Bengal Infantry"], answer: 0 },
          { q: "The Government of India Act 1858 created the post of:", options: ["Viceroy replacing Governor-General", "President of India", "Prime Minister", "Chief Justice"], answer: 0 },
          { q: "Nana Sahib was the adopted son of:", options: ["Tipu Sultan", "Baji Rao II", "Shivaji III", "Daulat Rao Scindia"], answer: 1 }
        ]
      },
      {
        title: "Indian National Movement",
        desc: "Various stages, contributors, Post-Independence",
        content: "The Indian National Movement evolved from moderate demands (1885–1905) to the Swadeshi movement, Gandhian mass movements (1920–1942), and finally Independence in 1947. Key contributors include Gandhi, Nehru, Tilak, Bose, Ambedkar, and countless others.",
        questions: [
          { q: "The Indian National Congress was founded in the year:", options: ["1857", "1875", "1885", "1905"], answer: 2 },
          { q: "The Quit India Movement was launched in:", options: ["1940", "1942", "1945", "1947"], answer: 1 },
          { q: "Who said 'Swaraj is my birthright and I shall have it'?", options: ["Mahatma Gandhi", "Bal Gangadhar Tilak", "Lala Lajpat Rai", "Bipin Chandra Pal"], answer: 1 },
          { q: "The Dandi March (Salt Satyagraha) was launched in:", options: ["1920", "1928", "1930", "1932"], answer: 2 },
          { q: "The Non-Cooperation Movement was withdrawn after which incident?", options: ["Jallianwala Bagh massacre", "Chauri Chaura incident", "Simon Commission protests", "Bardoli Satyagraha"], answer: 1 },
          { q: "The Indian Independence Act was passed on:", options: ["15 August 1947", "18 July 1947", "26 January 1950", "14 August 1947"], answer: 1 },
          { q: "The Jallianwala Bagh massacre took place in:", options: ["1915", "1917", "1919", "1921"], answer: 2 },
          { q: "Who was the first President of the Indian National Congress?", options: ["Bal Gangadhar Tilak", "W.C. Bonnerjee", "Dadabhai Naoroji", "Surendranath Banerjee"], answer: 1 },
          { q: "The Partition of Bengal (1905) was announced by:", options: ["Lord Curzon", "Lord Mountbatten", "Lord Dalhousie", "Lord Minto"], answer: 0 },
          { q: "Subhash Chandra Bose founded the Indian National Army (INA) in:", options: ["1940", "1941", "1943", "1945"], answer: 2 }
        ]
      }
    ]
  },

  geography: {
    label: "Geography",
    icon: "🌏",
    color: "#3ecfb2",
    exam: "Screening Test",
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

  society: {
    label: "Indian Society",
    icon: "👥",
    color: "#a78bfa",
    exam: "Screening Test",
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

  current: {
    label: "Current Affairs",
    icon: "📰",
    color: "#f472b6",
    exam: "Screening Test",
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

  mental: {
    label: "Mental Ability",
    icon: "🧠",
    color: "#34d399",
    exam: "Screening Test",
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
  aphistory: {
    label: "AP History & Culture",
    icon: "📜",
    color: "#fb923c",
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

  constitution: {
    label: "Indian Constitution",
    icon: "⚖️",
    color: "#60a5fa",
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

  economy: {
    label: "Indian & AP Economy",
    icon: "📈",
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

  science: {
    label: "Science & Technology",
    icon: "🔬",
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
  }
};

// ============================================================
// SUBJECT METADATA (for home cards)
// ============================================================
const SCREENING_SUBJECTS = ['history','geography','society','current','mental'];
const MAIN_SUBJECTS      = ['aphistory','constitution','economy','science'];

// ============================================================
// STATE
// ============================================================
let currentSubject = null;
let currentTopicIdx = null;
let examAnswers = [];

// ============================================================
// LANGUAGE SYSTEM
// ============================================================
let currentLang = 'en';

const UI_TE = {
  navHome: 'హోమ్',
  navHistory: 'చరిత్ర',
  navGeography: 'భూగోళం',
  navSociety: 'భారతీయ సమాజం',
  navCurrent: 'కరెంట్ అఫైర్స్',
  navMental: 'మానసిక సామర్థ్యం',
  navApHistory: 'ఆంధ్ర చరిత్ర',
  navConstitution: 'భారత రాజ్యాంగం',
  navEconomy: 'ఆర్థిక శాస్త్రం',
  navScience: 'సైన్స్ & టెక్',
  screeningTitle: 'స్క్రీనింగ్ టెస్ట్',
  mainTitle: 'మెయిన్ పరీక్ష',
  heroEyebrow: '✦ అధికారిక సిలబస్ ఆధారిత సన్నద్ధత',
  heroH1: 'APPSC గ్రూప్ II<br/>2024 మాస్టర్ చేయండి',
  heroP: 'అన్ని స్క్రీనింగ్ మరియు మెయిన్ పరీక్ష విషయాల కోసం సంరచిత, సిలబస్-అనుగుణ అధ్యయన సామగ్రి. ప్రారంభించడానికి ఏదైనా విషయాన్ని క్లిక్ చేయండి.',
  heroSubjects: 'విషయాలు',
  heroSubtopics: 'సబ్‌టాపిక్‌లు',
  heroExam: 'పరీక్ష మోడ్',
  screeningSection: 'స్క్రీనింగ్ టెస్ట్ విషయాలు',
  mainSection: 'మెయిన్ పరీక్ష విషయాలు',
  backHome: '← హోమ్‌కు తిరిగి వెళ్ళండి',
  topicOverview: '📖 అంశం సారాంశం',
  readyTest: '🎯 మిమ్మల్ని పరీక్షించుకోవడానికి సిద్ధంగా ఉన్నారా?',
  takeExamDesc: 'ఈ అంశంపై 10 ప్రశ్నల MCQ పరీక్ష రాయండి',
  takeExam: '⚡ పరీక్ష రాయండి',
  examLabel: 'పరీక్ష',
  questions: 'ప్రశ్నలు',
  questionOf: 'యొక్క',
  questionLabel: 'ప్రశ్న',
  answered: 'సమాధానం ఇచ్చారు',
  allAnswered: 'అన్ని {n} ప్రశ్నలకు సమాధానం ఇచ్చారు — సమర్పించడానికి సిద్ధంగా ఉన్నారు!',
  of: 'యొక్క {n} సమాధానం ఇచ్చారు',
  submitBtn: '✅ పరీక్ష సమర్పించండి & ఫలితాలు చూడండి',
  correctAnswers: 'సరైన సమాధానాలు',
  retry: '↺ మళ్ళీ ప్రయత్నించండి',
  close: 'మూసివేయండి ✕',
  answerReview: '📋 సమాధాన సమీక్ష',
  yourAnswer: 'మీ సమాధానం:',
  correctAnswer: '✓ సరైన సమాధానం:',
  explore: 'అన్వేషించండి →',
  subtopics: 'సబ్‌టాపిక్‌లు',
  grades: {
    perfect: 'అద్భుతమైన స్కోర్!',
    excellent: 'చాలా బాగు!',
    good: 'మంచి పని!',
    keepGoing: 'కొనసాగండి!',
    practice: 'మరింత సాధన అవసరం'
  },
  messages: {
    perfect: 'అద్భుతం! మీరు అన్ని ప్రశ్నలకు సమాధానం ఇచ్చారు. మీరు పరీక్షకు సిద్ధంగా ఉన్నారు! 🚀',
    excellent: 'అద్భుతమైన పని! కొంచెం మరింత సాధన చేస్తే 100% వస్తుంది. ముందుకు సాగండి! 💪',
    good: 'మంచి ప్రయత్నం! మీరు తప్పిన ప్రశ్నలను సమీక్షించి మళ్ళీ ప్రయత్నించండి. 📚',
    keepGoing: 'వదులుకోవద్దు! అంశ విషయాన్ని మళ్ళీ చదివి ప్రయత్నించండి. 🌱',
    practice: 'నోట్స్ జాగ్రత్తగా మళ్ళీ చదవండి. ప్రతి ప్రయత్నం మిమ్మల్ని బలోపేతం చేస్తుంది! 🙌'
  },
  placeholder: '✎ సంపాదించదగిన స్థానభర్తీ — ఇక్కడ పూర్తి విషయాన్ని జోడించండి',
  footer: "Sravya's Education • APPSC గ్రూప్ II సన్నద్ధత •"
};

const UI_EN = {
  navHome: 'Home', navHistory: 'History', navGeography: 'Geography',
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

function getUI() { return currentLang === 'te' ? UI_TE : UI_EN; }
function getDATA() { return currentLang === 'te' ? DATA_TE : DATA; }

const DATA_TE = {
  history: {
    label: "భారతీయ చరిత్ర", icon: "🏛️", color: "#f0a500", exam: "స్క్రీనింగ్ టెస్ట్",
    subtopics: [
      {
        title: "సింధు లోయ నాగరికత – పరిచయం & ఆవిష్కరణ",
        desc: "సింధు లోయ నాగరికత పేరు, కాల పరిమితి, ఆవిష్కరణ, పురావస్తు శాస్త్రవేత్తలు, భౌగోళిక విస్తీర్ణం",
        content: "సింధు లోయ నాగరికత (IVC) ను హరప్పా నాగరికత అని కూడా పిలుస్తారు — మొదటి స్థలం హరప్పా కనుగొనబడినందున ఈ పేరు వచ్చింది.\n\n📅 కాల పరిమితి:\n• ప్రారంభ హరప్పా దశ: క్రీ.పూ. 3300–2600\n• మేచ్యూర్ (పూర్తి వికసిత) దశ: క్రీ.పూ. 2600–1900 ⭐ పరీక్షకు ముఖ్యం\n• చివరి హరప్పా దశ: క్రీ.పూ. 1900–1300\n\n🔍 ఆవిష్కరణ:\n• 1921లో హరప్పా కనుగొన్నారు — దయారాం సహ్ని\n• 1922లో మోహెంజోదారో కనుగొన్నారు — ఆర్.డి. బెనర్జీ\n• సర్ జాన్ మార్షల్ → నాగరికతను ప్రపంచానికి ప్రకటించారు\n• అలెగ్జాండర్ కనింగ్‌హామ్ → ప్రారంభ సర్వే చేసిన వ్యక్తి\n\n🌍 భౌగోళిక విస్తీర్ణం — ముఖ్య స్థలాలు:\n• హరప్పా & మోహెంజోదారో (పాకిస్తాన్)\n• ఢోలవీరా & లోథల్ (గుజరాత్)\n• కాలిబంగన్ (రాజస్థాన్)\n• రాఖిగఢి (హర్యానా) — భారతదేశంలో అతిపెద్ద స్థలం\n\n🌊 నది వ్యవస్థ: సింధు నది మరియు ఘగ్గర్-హక్రా నది (సరస్వతి అని భావిస్తారు)",
        questions: [
          { q: "సింధు లోయ నాగరికతను మరొక పేరుతో ఏమని పిలుస్తారు?", options: ["వేద నాగరికత", "హరప్పా నాగరికత", "గుప్త నాగరికత", "మౌర్య నాగరికత"], answer: 1 },
          { q: "సింధు లోయ నాగరికతలో మొదట కనుగొన్న స్థలం ఏది?", options: ["మోహెంజోదారో", "లోథల్", "హరప్పా", "ఢోలవీరా"], answer: 2 },
          { q: "హరప్పా స్థలం ఎప్పుడు కనుగొన్నారు?", options: ["1901", "1911", "1921", "1931"], answer: 2 },
          { q: "హరప్పాను కనుగొన్నవారు ఎవరు?", options: ["ఆర్.డి. బెనర్జీ", "దయారాం సహ్ని", "జాన్ మార్షల్", "కనింగ్‌హామ్"], answer: 1 },
          { q: "మోహెంజోదారోను కనుగొన్నవారు ఎవరు?", options: ["దయారాం సహ్ని", "ఆర్.డి. బెనర్జీ", "జాన్ మార్షల్", "వీలర్"], answer: 1 },
          { q: "మోహెంజోదారో ఎప్పుడు కనుగొన్నారు?", options: ["1921", "1922", "1930", "1919"], answer: 1 },
          { q: "సింధు నాగరికతను ప్రపంచానికి ప్రకటించినవారు ఎవరు?", options: ["కనింగ్‌హామ్", "వీలర్", "జాన్ మార్షల్", "సహ్ని"], answer: 2 },
          { q: "మేచ్యూర్ హరప్పా దశ కాలం ఏది?", options: ["3300–2600 BCE", "2600–1900 BCE", "1900–1300 BCE", "1500–1000 BCE"], answer: 1 },
          { q: "ప్రారంభ హరప్పా దశ కాలం ఏది?", options: ["2600–1900 BCE", "3300–2600 BCE", "1900–1300 BCE", "1500–500 BCE"], answer: 1 },
          { q: "చివరి హరప్పా దశ కాలం ఏది?", options: ["3300–2600 BCE", "2600–1900 BCE", "1900–1300 BCE", "1000–500 BCE"], answer: 2 },
          { q: "సింధు నాగరికత ప్రధానంగా ఏ నది వెంట అభివృద్ధి చెందింది?", options: ["గంగా", "యమునా", "సింధు", "నర్మదా"], answer: 2 },
          { q: "ఘగ్గర్-హక్రా నదిని ఏ నదిగా భావిస్తారు?", options: ["గంగా", "సరస్వతి", "యమునా", "గోదావరి"], answer: 1 },
          { q: "భారతదేశంలో అతిపెద్ద హరప్పా స్థలం ఏది?", options: ["లోథల్", "ఢోలవీరా", "రాఖిగఢి", "కాలిబంగన్"], answer: 2 },
          { q: "ఢోలవీరా ఎక్కడ ఉంది?", options: ["పంజాబ్", "హర్యానా", "గుజరాత్", "రాజస్థాన్"], answer: 2 },
          { q: "లోథల్ ఎక్కడ ఉంది?", options: ["గుజరాత్", "రాజస్థాన్", "పంజాబ్", "హర్యానా"], answer: 0 },
          { q: "కాలిబంగన్ ఎక్కడ ఉంది?", options: ["గుజరాత్", "రాజస్థాన్", "హర్యానా", "పంజాబ్"], answer: 1 },
          { q: "హరప్పా ప్రస్తుతం ఏ దేశంలో ఉంది?", options: ["భారతదేశం", "పాకిస్తాన్", "నేపాల్", "ఆఫ్ఘానిస్తాన్"], answer: 1 },
          { q: "మోహెంజోదారో ప్రస్తుతం ఏ దేశంలో ఉంది?", options: ["భారతదేశం", "పాకిస్తాన్", "బంగ్లాదేశ్", "ఇరాన్"], answer: 1 },
          { q: "సింధు నాగరికత ప్రపంచంలో ఎలా గుర్తించబడింది?", options: ["చిన్న నాగరికత", "అతిపెద్ద ప్రాచీన నాగరికత", "కొత్త నాగరికత", "గిరిజన నాగరికత"], answer: 1 },
          { q: "'హరప్పా నాగరికత' అనే పేరు ఎలా వచ్చింది?", options: ["నది పేరు", "మొదటి స్థలం", "రాజు పేరు", "మతం"], answer: 1 },
          { q: "హరప్పా పై ప్రారంభ సర్వే చేసినవారు ఎవరు?", options: ["వీలర్", "కనింగ్‌హామ్", "మార్షల్", "సహ్ని"], answer: 1 },
          { q: "ఈ నాగరికత ప్రధానంగా ఏ ప్రాంతంలో అభివృద్ధి చెందింది?", options: ["దక్షిణ భారతదేశం", "ఈశాన్య భారతదేశం", "వాయువ్య భారతదేశం", "మధ్య భారతదేశం"], answer: 2 },
          { q: "స్వర్ణ యుగంగా పరిగణించే దశ ఏది?", options: ["ప్రారంభ హరప్పా", "మేచ్యూర్ హరప్పా", "చివరి హరప్పా", "వేద కాలం"], answer: 1 },
          { q: "సింధు నాగరికత ఏ దేశాలలో విస్తరించింది?", options: ["భారతదేశం మాత్రమే", "పాకిస్తాన్ మాత్రమే", "భారతదేశం మరియు పాకిస్తాన్", "చైనా"], answer: 2 },
          { q: "రాఖిగఢి ఎక్కడ ఉంది?", options: ["పంజాబ్", "హర్యానా", "గుజరాత్", "రాజస్థాన్"], answer: 1 }
        ]
      },
      {
        title: "బౌద్ధమతం & జైనమతం",
        desc: "బౌద్ధమతం మరియు జైనమతం యొక్క ఆవిర్భావం",
        content: "బౌద్ధమతం గౌతమ బుద్ధుడు (~563–483 BCE) స్థాపించాడు మరియు జైనమతం వర్ధమాన మహావీరుడు బోధించాడు. రెండు ఉద్యమాలు బ్రాహ్మణ సనాతనవాదానికి ప్రతిచర్యగా ఉద్భవించాయి.",
        questions: [
          { q: "నాలుగు ఆర్య సత్యాలు దేని ప్రాథమిక బోధన?", options: ["జైనమతం", "బౌద్ధమతం", "వేదాంతం", "శైవమతం"], answer: 1 },
          { q: "అహింస సూత్రం అత్యంత కేంద్రీయంగా ఉన్నది:", options: ["మౌర్య సామ్రాజ్యం", "జైనమతం", "చోళ పాలన", "ఇస్లాం"], answer: 1 },
          { q: "గౌతమ బుద్ధుడు జ్ఞానోదయం పొందింది:", options: ["సారనాథ్", "కుశీనగర్", "బోధ్‌గయ", "వైశాలి"], answer: 2 },
          { q: "బుద్ధుని మొదటి ప్రసంగం ఎక్కడ జరిగింది?", options: ["బోధ్‌గయ", "సారనాథ్", "లుంబిని", "రాజ్‌గీర్"], answer: 1 },
          { q: "వర్ధమాన మహావీరుడు జైనమతంలో __వ తీర్థంకరుడు:", options: ["22వ", "23వ", "24వ", "25వ"], answer: 2 },
          { q: "బౌద్ధ గ్రంథం 'త్రిపిటక' ఏ భాషలో రాయబడింది?", options: ["సంస్కృతం", "పాళి", "ప్రాకృతం", "అర్ధమాగధి"], answer: 1 },
          { q: "బౌద్ధమతంలో 'నిర్వాణ' అంటే:", options: ["పునర్జన్మ", "జన్మ-మరణ చక్రం నుండి విముక్తి", "స్వర్గం", "ధ్యానం"], answer: 1 },
          { q: "జైనమతంలో ఎన్ని అంగాలు (కానోనికల్ గ్రంథాలు) ఉన్నాయి?", options: ["8", "10", "12", "14"], answer: 2 },
          { q: "అశోకుని కింద పాటలీపుత్రలో ఏ బౌద్ధ సంఘం జరిగింది?", options: ["మొదటి", "రెండవ", "మూడవ", "నాల్గవ"], answer: 2 },
          { q: "బౌద్ధమతంలో 'మధ్యమ మార్గం' అంటే:", options: ["రెండు నదుల మధ్య మార్గం", "విలాసం మరియు నిగ్రహం అతివాదాలను నివారించడం", "జైనమతం మరియు హిందూమతం మధ్య రాజీ", "తటస్థ రాజకీయ వైఖరి"], answer: 1 }
        ]
      },
      {
        title: "మౌర్య & గుప్త సామ్రాజ్యాలు",
        desc: "పరిపాలన, సామాజిక-ఆర్థిక, కళ & నిర్మాణం",
        content: "మౌర్య సామ్రాజ్యం (322–185 BCE) చంద్రగుప్త మరియు అశోకుని కింద భారత ఉపఖండాన్ని ఏకం చేసింది. గుప్త యుగం (320–550 CE) భారత స్వర్ణయుగంగా పిలవబడుతుంది.",
        questions: [
          { q: "అర్థశాస్త్రం రాసింది:", options: ["అశోకుడు", "కౌటిల్య (చాణక్య)", "కాళిదాసు", "ఆర్యభట్ట"], answer: 1 },
          { q: "నలంద విశ్వవిద్యాలయాన్ని స్థాపించిన గుప్త రాజు:", options: ["చంద్రగుప్త I", "సముద్రగుప్త", "కుమారగుప్త I", "స్కందగుప్త"], answer: 2 },
          { q: "అశోకుని ధర్మం ప్రధానంగా ఎలా ప్రచారించబడింది?", options: ["సైనిక విజయం", "రాతి మరియు స్తంభ శాసనాలు", "మతగ్రంథాలు", "వ్యాపార యాత్రలు"], answer: 1 },
          { q: "మౌర్య సామ్రాజ్యాన్ని స్థాపించింది:", options: ["అశోకుడు", "చంద్రగుప్త మౌర్య", "బిందుసార", "బింబిసార"], answer: 1 },
          { q: "అశోకుని బౌద్ధమతానికి మారడానికి కారణమైన యుద్ధం:", options: ["ప్లాసీ యుద్ధం", "కళింగ యుద్ధం", "తరాయిన్ యుద్ధం", "పానిపట్ యుద్ధం"], answer: 1 },
          { q: "ఆర్యభట్ట, గణిత-జ్యోతిష్కుడు, దేనికి చెందినవారు?", options: ["మౌర్య కాలం", "గుప్త కాలం", "కుషాన కాలం", "గుప్తానంతర కాలం"], answer: 1 },
          { q: "తుప్పు పట్టని ఢిల్లీ ఇనుప స్తంభం నిర్మించబడింది:", options: ["మౌర్య యుగం", "గుప్త యుగం", "మొఘల్ యుగం", "కుషాన యుగం"], answer: 1 },
          { q: "కాళిదాసు, ప్రసిద్ధ సంస్కృత నాటककర్త, ఎవరి పాలనలో జీవించారు?", options: ["అశోకుడు", "చంద్రగుప్త II", "హర్షవర్ధన", "సముద్రగుప్త"], answer: 1 },
          { q: "గ్రామ స్థాయిలో మౌర్య పరిపాలన ఎవరి నేతృత్వంలో ఉంది?", options: ["అమాత్య", "గ్రామిక", "రాజుక", "మహామాత్ర"], answer: 1 },
          { q: "సముద్రగుప్తుడు 'భారతదేశ నెపోలియన్' అని పిలవబడతాడు ఎందుకంటే:", options: ["పరిపాలన సంస్కరణలు", "సైనిక విజయాలు", "సాహిత్య రచనలు", "మత సహనం"], answer: 1 }
        ]
      },
      {
        title: "మధ్యయుగ చరిత్ర – ఢిల్లీ సుల్తానేట్",
        desc: "పరిపాలన, సామాజిక-ఆర్థిక, కళ & నిర్మాణం",
        content: "ఢిల్లీ సుల్తానేట్ (1206–1526 CE) ఐదు రాజవంశాలను కలిగి ఉంది — బానిస, ఖిల్జీ, తుఘ్లక్, సయ్యద్ మరియు లోది. ఇది పర్షియన్ భాష మరియు సంస్కృతిని ప్రవేశపెట్టింది.",
        questions: [
          { q: "కుతుబ్ మినార్ నిర్మించింది:", options: ["అలాఉద్దీన్ ఖిల్జీ", "ముహమ్మద్ బిన్ తుఘ్లక్", "కుతుబ్-ఉద్-దీన్ ఐబక్", "ఇల్తుత్మిష్"], answer: 2 },
          { q: "భక్తి ఉద్యమం ప్రధానంగా నొక్కి చెప్పింది:", options: ["కుల ఆధిక్యత", "దేవుని పట్ల వ్యక్తిగత భక్తి", "ఆచారబద్ధమైన యజ్ఞం", "సైనిక విస్తరణ"], answer: 1 },
          { q: "అలాఉద్దీన్ ఖిల్జీ మార్కెట్ నియంత్రణ విధానాన్ని ప్రధానంగా ప్రవేశపెట్టాడు:", options: ["పన్ను ఆదాయం పెంచడానికి", "తక్కువ ఖర్చుతో పెద్ద సైన్యాన్ని నిర్వహించడానికి", "పేద పౌరులకు సహాయం చేయడానికి", "ద్రవ్యోల్బణాన్ని నియంత్రించడానికి"], answer: 1 },
          { q: "బానిస రాజవంశం స్థాపకుడు:", options: ["ఇల్తుత్మిష్", "బల్బన్", "కుతుబ్-ఉద్-దీన్ ఐబక్", "రజియా సుల్తాన్"], answer: 2 },
          { q: "మొరాకో యాత్రికుడు ఇబ్న్ బటూటా ఏ పాలకుని కాలంలో భారత్ సందర్శించాడు?", options: ["అలాఉద్దీన్ ఖిల్జీ", "ముహమ్మద్ బిన్ తుఘ్లక్", "ఫిరోజ్ షా తుఘ్లక్", "ఇల్తుత్మిష్"], answer: 1 },
          { q: "'టోకెన్ కరెన్సీ' భావనను ప్రవేశపెట్టిన మొదటి ఢిల్లీ సుల్తాన్:", options: ["అలాఉద్దీన్ ఖిల్జీ", "గియాసుద్దీన్ తుఘ్లక్", "ముహమ్మద్ బిన్ తుఘ్లక్", "ఫిరోజ్ షా తుఘ్లక్"], answer: 2 },
          { q: "సూఫీ సాధువు నిజాముద్దీన్ ఔలియా ఏ తరీకాకు చెందినవారు?", options: ["సుహ్రవర్దీ", "చిష్తీ", "కాదిరీ", "నక్షబందీ"], answer: 1 },
          { q: "రజియా సుల్తాన్ ఎవరి కుమార్తె?", options: ["కుతుబ్-ఉద్-దీన్ ఐబక్", "ఇల్తుత్మిష్", "బల్బన్", "అలాఉద్దీన్ ఖిల్జీ"], answer: 1 },
          { q: "తరాయిన్ యుద్ధం (1192) ముహమ్మద్ ఘోరీ మరియు ఏ రాజు మధ్య జరిగింది?", options: ["పృథ్వీరాజ్ చహమాన", "జై చంద్", "మహారాణా ప్రతాప్", "హేమ చంద్ర విక్రమాదిత్య"], answer: 0 },
          { q: "ఫిరోజ్ షా తుఘ్లక్ దేనికి గుర్తుండిపోతారు?", options: ["సైనిక విజయాలు", "సంక్షేమ కార్యాలు మరియు కాలువ నిర్మాణం", "టోకెన్ కరెన్సీ", "మార్కెట్ సంస్కరణలు"], answer: 1 }
        ]
      },
      {
        title: "మొఘల్ సామ్రాజ్యం",
        desc: "పరిపాలన, సాహిత్యం, భాష, కళ",
        content: "మొఘల్ సామ్రాజ్యం (1526–1857) బాబర్ స్థాపించాడు మరియు అక్బర్, జహంగీర్, షాజహాన్ కింద శిఖరాన్ని చేరుకుంది. తాజ్ మహల్ వంటి అద్భుతమైన నిర్మాణాలు నిర్మించబడ్డాయి.",
        questions: [
          { q: "అక్బర్ యొక్క 'సుల్హ్-ఇ-కుల్' విధానం అంటే:", options: ["జిహాద్", "సార్వత్రిక శాంతి", "సైనిక ఆధిపత్యం", "దైవిక రాజత్వం"], answer: 1 },
          { q: "తాజ్ మహల్ నిర్మించింది:", options: ["అక్బర్", "ఔరంగజేబ్", "షాజహాన్", "జహంగీర్"], answer: 2 },
          { q: "మొదటి పానిపట్ యుద్ధంలో (1526) బాబర్ ఎవరిని ఓడించాడు?", options: ["రాణా సంగ", "ఇబ్రహీం లోది", "హేము", "దౌలత్ ఖాన్ లోది"], answer: 1 },
          { q: "'దీన్-ఇ-ఇలాహి' మతాన్ని స్థాపించింది:", options: ["బాబర్", "హుమాయూన్", "అక్బర్", "జహంగీర్"], answer: 2 },
          { q: "హుమాయూన్ షేర్ షా సూరీ వారసుల నుండి ఢిల్లీని తిరిగి వశపరచుకున్నాడు:", options: ["1540", "1555", "1560", "1565"], answer: 1 },
          { q: "మొఘల్ చిత్రకళ ఎవరి పాలనలో శిఖరాన్ని చేరుకుంది?", options: ["అక్బర్", "జహంగీర్", "షాజహాన్", "ఔరంగజేబ్"], answer: 1 },
          { q: "ఔరంగజేబ్ మత విధానం దీనిని పునర్విధింపుతో ముడిపడి ఉంది:", options: ["జిజ్యా పన్ను", "జకాత్ పన్ను", "భూమి రాబడి పన్ను", "వ్యాపార పన్ను"], answer: 0 },
          { q: "హల్దీఘాటి యుద్ధం (1576) అక్బర్ సేనలు మరియు ఎవరి మధ్య జరిగింది?", options: ["శివాజీ", "మహారాణా ప్రతాప్", "రాణా సంగ", "పృథ్వీరాజ్ చహమాన"], answer: 1 },
          { q: "'తుజుక్-ఇ-జహంగీరి' ఆత్మకథ రాసిన మొఘల్ చక్రవర్తి:", options: ["అక్బర్", "బాబర్", "జహంగీర్", "షాజహాన్"], answer: 2 },
          { q: "మొఘల్ పరిపాలన 'సుబా'ను ఎవరు నేతృత్వం వహించారు?", options: ["దివాన్", "సుబేదార్ (సిపహ్‌సాలార్)", "ఫౌజ్‌దార్", "కోత్వాల్"], answer: 1 }
        ]
      },
      {
        title: "ఆధునిక చరిత్ర – 1857 తిరుగుబాటు",
        desc: "1857 తిరుగుబాటు భారతదేశంపై ప్రభావం",
        content: "1857 తిరుగుబాటు, సిపాయి తిరుగుబాటు అని కూడా పిలుస్తారు, ఇది భారతదేశంలో బ్రిటిష్ ఈస్ట్ ఇండియా కంపెనీ పాలనకు వ్యతిరేకంగా జరిగిన ప్రధాన తిరుగుబాటు.",
        questions: [
          { q: "1857 తిరుగుబాటు మొదటగా ప్రారంభమైంది:", options: ["ఢిల్లీ", "మీరట్", "కాన్పూర్", "లక్నో"], answer: 1 },
          { q: "1857 తిరుగుబాటుకు తక్షణ కారణం:", options: ["అధిక పన్నులు", "ఎన్‌ఫీల్డ్ రైఫిల్ కార్తూసులు", "బ్రిటిష్ విద్య", "రైల్వే నిర్మాణం"], answer: 1 },
          { q: "ఝాన్సీ రాణి లక్ష్మీభాయి యొక్క వాస్తవ పేరు:", options: ["మణికర్ణికా", "సుభద్ర", "చంద్రముఖి", "సీతాదేవి"], answer: 0 },
          { q: "1857లో ఢిల్లీ మొఘల్ చక్రవర్తి:", options: ["షాజహాన్ II", "బహదూర్ షా జఫర్", "అక్బర్ II", "మొహమ్మద్ షా"], answer: 1 },
          { q: "1857 తిరుగుబాటు తర్వాత భారత పరిపాలన బదిలీ చేయబడింది:", options: ["ఈస్ట్ ఇండియా కంపెనీ నుండి బ్రిటిష్ క్రౌన్‌కు", "ఈస్ట్ ఇండియా కంపెనీ నుండి ఫ్రెంచ్ ప్రభుత్వానికి", "మొఘల్ సామ్రాజ్యానికి", "మరాఠా సామ్రాజ్యానికి"], answer: 0 },
          { q: "కాన్పూర్‌లో తిరుగుబాటుకు నాయకత్వం వహించింది:", options: ["తాంతియా టోపే", "నాన సాహిబ్", "బహదూర్ షా", "మంగల్ పాండే"], answer: 1 },
          { q: "1857 తిరుగుబాటు సమయంలో అవధ్ కమిషనర్:", options: ["లార్డ్ డల్హౌసీ", "హెన్రీ లారెన్స్", "లార్డ్ క్యానింగ్", "జాన్ లారెన్స్"], answer: 1 },
          { q: "మంగల్ పాండే ఏ రెజిమెంట్‌కు చెందినవాడు?", options: ["19వ నేటివ్ ఇన్ఫాంట్రీ", "34వ నేటివ్ ఇన్ఫాంట్రీ", "7వ అవధ్ ఇర్రెగ్యులర్ కావల్రీ", "3వ లైట్ కావల్రీ"], answer: 1 },
          { q: "1857 తిరుగుబాటు సమయంలో భారత గవర్నర్ జనరల్:", options: ["లార్డ్ డల్హౌసీ", "లార్డ్ క్యానింగ్", "లార్డ్ కర్జన్", "లార్డ్ రిప్పన్"], answer: 1 },
          { q: "1857 తిరుగుబాటు భారత చరిత్రలో ముఖ్యమైనది ఎందుకంటే:", options: ["ఇది మొదటి సాయుధ తిరుగుబాటు", "ఇది ఈస్ట్ ఇండియా కంపెనీ పాలన ముగింపుకు దారితీసింది", "ఇది స్వాతంత్ర్యానికి దారితీసింది", "ఇది మొఘల్ సామ్రాజ్యాన్ని పునరుద్ధరించింది"], answer: 1 }
        ]
      }
    ]
  },
  geography: {
    label: "భారత భూగోళం", icon: "🌏", color: "#3ecfb2", exam: "స్క్రీనింగ్ టెస్ట్",
    subtopics: [
      {
        title: "భారతదేశం యొక్క భౌతిక లక్షణాలు",
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
  },
  society: {
    label: "భారతీయ సమాజం", icon: "👥", color: "#e05c2a", exam: "స్క్రీనింగ్ టెస్ట్",
    subtopics: [
      {
        title: "భారతీయ సమాజ నిర్మాణం",
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
  },
  current: {
    label: "కరెంట్ అఫైర్స్", icon: "📰", color: "#7c4dff", exam: "స్క్రీనింగ్ టెస్ట్",
    subtopics: [
      {
        title: "జాతీయ మరియు అంతర్జాతీయ సంఘటనలు",
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
  mental: {
    label: "మానసిక సామర్థ్యం", icon: "🧠", color: "#f06292", exam: "స్క్రీనింగ్ టెస్ట్",
    subtopics: [
      {
        title: "తార్కిక చింతన",
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
  aphistory: {
    label: "ఆంధ్ర చరిత్ర", icon: "📜", color: "#26c6da", exam: "మెయిన్ పరీక్ష",
    subtopics: [
      {
        title: "ఆంధ్ర చరిత్ర – పురాతన కాలం",
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
  },
  constitution: {
    label: "భారత రాజ్యాంగం", icon: "⚖️", color: "#ef5350", exam: "మెయిన్ పరీక్ష",
    subtopics: [
      {
        title: "రాజ్యాంగ నిర్మాణం & ప్రాథమిక లక్షణాలు",
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
  },
  economy: {
    label: "ఆర్థిక శాస్త్రం", icon: "📈", color: "#66bb6a", exam: "మెయిన్ పరీక్ష",
    subtopics: [
      {
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
  },
  science: {
    label: "సైన్స్ & టెక్", icon: "🔬", color: "#ab47bc", exam: "మెయిన్ పరీక్ష",
    subtopics: [
      {
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
};
