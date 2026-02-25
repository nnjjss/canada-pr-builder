const articlesData = [
    {
        title: "2026년 익스프레스 엔트리 대개혁: 카테고리 기반 선발 시스템 심층 분석",
        badge: "정책 분석",
        date: "2026년 2월 25일",
        summary: "IRCC는 2026년 익스프레스 엔트리 운영 방침을 발표하며 연구직, 시니어 매니저, 운송직 등 4대 핵심...",
        content: `<p>IRCC는 2026년 익스프레스 엔트리 운영 계획을 통해 \'CRS 점수 지상주의\'에서 벗어나, 캐나다의 실제 경제 성장 동력과 직결되는 <b>\'카테고리 기반 선발(Category-based Selection)\'</b>의 비중을 전체 선발 인원의 70% 이상으로 확대합니다.</p><h3>1. 2026년 4대 신규 집중 선발 카테고리</h3><ul><li><b>연구 및 교육(Academic/Research):</b> 캐나다 내 연구소나 대학에서 기여한 인재.</li><li><b>전략 경영(Senior Management):</b> 캐나다 현지 기업의 의사결정권자 그룹.</li><li><b>운송 및 물류(Transport):</b> 글로벌 공급망 병목 현상을 해결할 핵심 인력.</li><li><b>국방 및 특수 기술(Military):</b> 국가 안보와 직결된 특수 기술직군.</li></ul>`
    },
    {
        title: "캐나다 경력 연구자 및 교수진(Academic) 영주권 취득 로드맵",
        badge: "전문 가이드",
        date: "2026년 2월 24일",
        summary: "캐나다 대학이나 연구소에서 경력을 쌓은 연구자와 교수진이 2026년 전략 카테고리에 포함되었습니다.",
        content: `<p>캐나다 내 대학(DLI)이나 연구소에서 경력을 쌓은 전문가들에게 전례 없는 기회를 제공합니다. 대학 교수(NOC 40110), 박사 후 연구원(NOC 40120) 등이 주요 대상이며, 일반 컷오프보다 훨씬 낮은 점수로 합격이 가능합니다.</p>`
    },
    {
        title: "시니어 매니저(Senior Manager)를 위한 전략적 이민 가이드",
        badge: "경영 전략",
        date: "2026년 2월 23일",
        summary: "캐나다 경제 활성화를 위해 고도의 관리 능력을 갖춘 시니어 매니저 직군이 카테고리 선발의 한 축을...",
        content: `<p>NOC TEER 0 등급의 시니어 경영진(NOC 00012, 00013 등)을 위한 특별 전형입니다. 기업 운영 성과와 캐나다 경제 기여도를 증명하는 것이 합격의 핵심입니다.</p>`
    },
    {
        title: "2026 항공 및 운송 기술직: 공급망 위기 해결의 핵심 인재",
        badge: "산업 리포트",
        date: "2026년 2월 22일",
        summary: "파일럿, 항공기 정비사 등 운송 분야의 핵심 인력 부족을 해결하기 위해 별도의 드로우가 강화됩니다.",
        content: `<p>파일럿(NOC 72600), 항공 정비사(NOC 72404) 등 운송 직군은 가장 높은 빈도로 선발될 예정입니다. 해외 자격증의 캐나다 환산 절차를 미리 완료하는 것이 필수입니다.</p>`
    },
    {
        title: "국방 및 군사 기술직(Military) 신설 카테고리 완벽 분석",
        badge: "신규 전형",
        date: "2026년 2월 21일",
        summary: "2026년부터는 국방 분야의 기술력을 확보하기 위해 군 관련 숙련 기술직에 대한 우대 정책이 시행됩니다.",
        content: `<p>군에서의 특수 기술(사이버 보안, 특수 장비 정비 등)이 캐나다 안보의 핵심 자산으로 인정받습니다. 우방국 군 경력자에게 강력한 가점이 부여되는 혁신적인 전형입니다.</p>`
    },
    {
        title: "프랑스어 우수자 전형: 2026년에도 영주권 취득의 \'치트키\'",
        badge: "언어 전략",
        date: "2026년 2월 20일",
        summary: "언어 카테고리 중 프랑스어 우수자 전형은 여전히 강력합니다. 2026년에도 가장 낮은 컷오프를...",
        content: `<p>불어 능력(CLB 7 이상)은 일반 선발보다 100점 이상 낮은 커트라인 혜택을 제공합니다. 영어 성적과 조합 시 최대 50점 추가 점수를 확보할 수 있는 가장 확실한 경로입니다.</p>`
    }
];

// --- Comprehensive NOC 2021 Database (Canada.ca) ---
const nocData = [
    // TEER 0 - Management
    { code: "00010", title: "Legislators", teer: "0", cat: "Management" },
    { code: "00011", title: "Senior government managers and officials", teer: "0", cat: "Management" },
    { code: "00012", title: "Senior managers - financial, communications and business services", teer: "0", cat: "Management" },
    { code: "00013", title: "Senior managers - health, education, social and community services", teer: "0", cat: "Management" },
    { code: "00014", title: "Senior managers - trade, broadcasting and other services", teer: "0", cat: "Management" },
    { code: "00015", title: "Senior managers - construction, transportation, production and utilities", teer: "0", cat: "Management" },
    { code: "10010", title: "Financial managers", teer: "0", cat: "Management" },
    { code: "10011", title: "Human resources managers", teer: "0", cat: "Management" },
    { code: "10012", title: "Purchasing managers", teer: "0", cat: "Management" },
    { code: "10019", title: "Other administrative services managers", teer: "0", cat: "Management" },
    { code: "10020", title: "Insurance, real estate and financial brokerage managers", teer: "0", cat: "Management" },
    { code: "10021", title: "Banking, credit and other investment managers", teer: "0", cat: "Management" },
    { code: "10022", title: "Advertising, marketing and public relations managers", teer: "0", cat: "Management" },
    { code: "10029", title: "Other business services managers", teer: "0", cat: "Management" },
    { code: "10030", title: "Telecommunication carriers managers", teer: "0", cat: "Management" },
    { code: "20010", title: "Engineering managers", teer: "0", cat: "STEM" },
    { code: "20011", title: "Architecture and science managers", teer: "0", cat: "STEM" },
    { code: "20012", title: "Computer and information systems managers", teer: "0", cat: "STEM" },
    { code: "30010", title: "Managers in health care", teer: "0", cat: "Healthcare" },
    { code: "40010", title: "Government managers - health and social policy development", teer: "0", cat: "Management" },
    { code: "40011", title: "Government managers - economic analysis, policy development", teer: "0", cat: "Management" },
    { code: "40012", title: "Government managers - education policy development", teer: "0", cat: "Management" },
    { code: "40019", title: "Other managers in public administration", teer: "0", cat: "Management" },
    { code: "40020", title: "Administrators - post-secondary education and vocational training", teer: "0", cat: "Management" },
    { code: "40021", title: "School principals and administrators of elementary and secondary education", teer: "0", cat: "Management" },
    { code: "40030", title: "Managers in social, community and correctional services", teer: "0", cat: "Management" },
    { code: "40040", title: "Commissioned police officers and related occupations", teer: "0", cat: "Management" },
    { code: "40041", title: "Fire chiefs and senior firefighting officers", teer: "0", cat: "Management" },
    { code: "40042", title: "Commissioned officers of the Canadian Armed Forces", teer: "0", cat: "Management" },
    { code: "50010", title: "Library, archive, museum and art gallery managers", teer: "0", cat: "Management" },
    { code: "50011", title: "Managers - publishing, motion pictures, broadcasting and performing arts", teer: "0", cat: "Management" },
    { code: "50012", title: "Recreation, sports and fitness program and service directors", teer: "0", cat: "Management" },
    { code: "60010", title: "Corporate sales managers", teer: "0", cat: "Management" },
    { code: "60020", title: "Retail and wholesale trade managers", teer: "0", cat: "Management" },
    { code: "60030", title: "Restaurant and food service managers", teer: "0", cat: "Management" },
    { code: "60031", title: "Accommodation service managers", teer: "0", cat: "Management" },
    { code: "60040", title: "Managers in customer and personal services", teer: "0", cat: "Management" },
    { code: "70010", title: "Construction managers", teer: "0", cat: "Trades" },
    { code: "70011", title: "Home building and renovation managers", teer: "0", cat: "Trades" },
    { code: "70012", title: "Facility operation and maintenance managers", teer: "0", cat: "Trades" },
    { code: "70020", title: "Managers in transportation", teer: "0", cat: "Transport" },
    { code: "70021", title: "Postal and courier services managers", teer: "0", cat: "Transport" },
    { code: "80010", title: "Managers in natural resources production and fishing", teer: "0", cat: "Agriculture" },
    { code: "80020", title: "Managers in agriculture", teer: "0", cat: "Agriculture" },
    { code: "80021", title: "Managers in horticulture", teer: "0", cat: "Agriculture" },
    { code: "80022", title: "Managers in aquaculture", teer: "0", cat: "Agriculture" },
    { code: "90010", title: "Manufacturing managers", teer: "0", cat: "Management" },
    { code: "90011", title: "Utilities managers", teer: "0", cat: "Management" },
    // TEER 1 - University Degree
    { code: "11100", title: "Financial auditors and accountants", teer: "1", cat: "Management" },
    { code: "11101", title: "Financial and investment analysts", teer: "1", cat: "Management" },
    { code: "11102", title: "Financial advisors", teer: "1", cat: "Management" },
    { code: "11103", title: "Securities agents, investment dealers and brokers", teer: "1", cat: "Management" },
    { code: "11109", title: "Other financial officers", teer: "1", cat: "Management" },
    { code: "11200", title: "Human resources professionals", teer: "1", cat: "Management" },
    { code: "11201", title: "Professional occupations in business management consulting", teer: "1", cat: "Management" },
    { code: "11202", title: "Professional occupations in advertising, marketing and public relations", teer: "1", cat: "Management" },
    { code: "21100", title: "Physicists and astronomers", teer: "1", cat: "STEM" },
    { code: "21101", title: "Chemists", teer: "1", cat: "STEM" },
    { code: "21102", title: "Geoscientists and oceanographers", teer: "1", cat: "STEM" },
    { code: "21103", title: "Meteorologists and climatologists", teer: "1", cat: "STEM" },
    { code: "21109", title: "Other professional occupations in physical sciences", teer: "1", cat: "STEM" },
    { code: "21110", title: "Biologists and related scientists", teer: "1", cat: "STEM" },
    { code: "21111", title: "Forestry professionals", teer: "1", cat: "Agriculture" },
    { code: "21112", title: "Agricultural representatives, consultants and specialists", teer: "1", cat: "Agriculture" },
    { code: "21120", title: "Public and environmental health and safety professionals", teer: "1", cat: "Healthcare" },
    { code: "21200", title: "Architects", teer: "1", cat: "STEM" },
    { code: "21201", title: "Landscape architects", teer: "1", cat: "STEM" },
    { code: "21202", title: "Urban and land use planners", teer: "1", cat: "STEM" },
    { code: "21203", title: "Land surveyors", teer: "1", cat: "STEM" },
    { code: "21210", title: "Mathematicians, statisticians and actuaries", teer: "1", cat: "STEM" },
    { code: "21211", title: "Data scientists", teer: "1", cat: "STEM" },
    { code: "21220", title: "Cybersecurity specialists", teer: "1", cat: "STEM" },
    { code: "21221", title: "Business systems specialists", teer: "1", cat: "STEM" },
    { code: "21222", title: "Information systems specialists", teer: "1", cat: "STEM" },
    { code: "21223", title: "Database analysts and data administrators", teer: "1", cat: "STEM" },
    { code: "21230", title: "Computer systems developers and programmers", teer: "1", cat: "STEM" },
    { code: "21231", title: "Software engineers and designers", teer: "1", cat: "STEM" },
    { code: "21232", title: "Software developers and programmers", teer: "1", cat: "STEM" },
    { code: "21233", title: "Web designers", teer: "1", cat: "STEM" },
    { code: "21234", title: "Web developers and programmers", teer: "1", cat: "STEM" },
    { code: "21300", title: "Civil engineers", teer: "1", cat: "STEM" },
    { code: "21301", title: "Mechanical engineers", teer: "1", cat: "STEM" },
    { code: "21310", title: "Electrical and electronics engineers", teer: "1", cat: "STEM" },
    { code: "21311", title: "Computer engineers (except software)", teer: "1", cat: "STEM" },
    { code: "21320", title: "Chemical engineers", teer: "1", cat: "STEM" },
    { code: "21321", title: "Industrial and manufacturing engineers", teer: "1", cat: "STEM" },
    { code: "21322", title: "Metallurgical and materials engineers", teer: "1", cat: "STEM" },
    { code: "21330", title: "Mining engineers", teer: "1", cat: "STEM" },
    { code: "21331", title: "Geological engineers", teer: "1", cat: "STEM" },
    { code: "21332", title: "Petroleum engineers", teer: "1", cat: "STEM" },
    { code: "21390", title: "Aerospace engineers", teer: "1", cat: "STEM" },
    { code: "21399", title: "Other professional engineers", teer: "1", cat: "STEM" },
    { code: "31100", title: "Specialists in clinical and laboratory medicine", teer: "1", cat: "Healthcare" },
    { code: "31101", title: "Specialists in surgery", teer: "1", cat: "Healthcare" },
    { code: "31102", title: "General practitioners and family physicians", teer: "1", cat: "Healthcare" },
    { code: "31103", title: "Veterinarians", teer: "1", cat: "Healthcare" },
    { code: "31110", title: "Dentists", teer: "1", cat: "Healthcare" },
    { code: "31111", title: "Optometrists", teer: "1", cat: "Healthcare" },
    { code: "31112", title: "Audiologists and speech-language pathologists", teer: "1", cat: "Healthcare" },
    { code: "31120", title: "Pharmacists", teer: "1", cat: "Healthcare" },
    { code: "31121", title: "Dietitians and nutritionists", teer: "1", cat: "Healthcare" },
    { code: "31200", title: "Psychologists", teer: "1", cat: "Healthcare" },
    { code: "31201", title: "Chiropractors", teer: "1", cat: "Healthcare" },
    { code: "31202", title: "Physiotherapists", teer: "1", cat: "Healthcare" },
    { code: "31203", title: "Occupational therapists", teer: "1", cat: "Healthcare" },
    { code: "31204", title: "Kinesiologists and professional occupations in therapy", teer: "1", cat: "Healthcare" },
    { code: "31209", title: "Other professional occupations in health diagnosing and treating", teer: "1", cat: "Healthcare" },
    { code: "31300", title: "Nursing coordinators and supervisors", teer: "1", cat: "Healthcare" },
    { code: "31301", title: "Registered nurses and registered psychiatric nurses", teer: "1", cat: "Healthcare" },
    { code: "31302", title: "Nurse practitioners", teer: "1", cat: "Healthcare" },
    { code: "31303", title: "Physician assistants, midwives and allied health professionals", teer: "1", cat: "Healthcare" },
    { code: "41100", title: "Judges", teer: "1", cat: "Management" },
    { code: "41101", title: "Lawyers and Quebec notaries", teer: "1", cat: "Management" },
    { code: "41200", title: "University professors and lecturers", teer: "1", cat: "Management" },
    { code: "41201", title: "Post-secondary teaching and research assistants", teer: "1", cat: "Management" },
    { code: "41210", title: "College and other vocational instructors", teer: "1", cat: "Management" },
    { code: "41220", title: "Secondary school teachers", teer: "1", cat: "Management" },
    { code: "41221", title: "Elementary school and kindergarten teachers", teer: "1", cat: "Management" },
    { code: "41300", title: "Social workers", teer: "1", cat: "Management" },
    { code: "41301", title: "Therapists in counselling and related specialized therapies", teer: "1", cat: "Healthcare" },
    { code: "41302", title: "Religious leaders", teer: "1", cat: "Management" },
    { code: "41310", title: "Police investigators and other investigative occupations", teer: "1", cat: "Management" },
    { code: "41311", title: "Probation and parole officers", teer: "1", cat: "Management" },
    { code: "41320", title: "Educational counsellors", teer: "1", cat: "Management" },
    { code: "41321", title: "Career development practitioners and career counsellors", teer: "1", cat: "Management" },
    { code: "41400", title: "Natural and applied science policy researchers, consultants", teer: "1", cat: "STEM" },
    { code: "41401", title: "Economists and economic policy researchers and analysts", teer: "1", cat: "Management" },
    { code: "41402", title: "Business development officers and market researchers", teer: "1", cat: "Management" },
    { code: "41403", title: "Social policy researchers, consultants and program officers", teer: "1", cat: "Management" },
    { code: "41404", title: "Health policy researchers, consultants and program officers", teer: "1", cat: "Healthcare" },
    { code: "41405", title: "Education policy researchers, consultants and program officers", teer: "1", cat: "Management" },
    { code: "41406", title: "Recreation, sports and fitness policy researchers, consultants", teer: "1", cat: "Management" },
    { code: "41407", title: "Program officers unique to government", teer: "1", cat: "Management" },
    { code: "41409", title: "Other professional occupations in social science", teer: "1", cat: "Management" },
    { code: "51100", title: "Librarians", teer: "1", cat: "Management" },
    { code: "51101", title: "Conservators and curators", teer: "1", cat: "Management" },
    { code: "51102", title: "Archivists", teer: "1", cat: "Management" },
    { code: "51110", title: "Editors", teer: "1", cat: "Management" },
    { code: "51111", title: "Authors and writers (except technical)", teer: "1", cat: "Management" },
    { code: "51112", title: "Technical writers", teer: "1", cat: "Management" },
    { code: "51113", title: "Journalists", teer: "1", cat: "Management" },
    { code: "51114", title: "Translators, terminologists and interpreters", teer: "1", cat: "Management" },
    { code: "51120", title: "Producers, directors, choreographers and related occupations", teer: "1", cat: "Management" },
    { code: "51121", title: "Conductors, composers and arrangers", teer: "1", cat: "Management" },
    { code: "51122", title: "Musicians and singers", teer: "1", cat: "Management" },
    // TEER 2 - College Diploma / Apprenticeship (2+ years)
    { code: "12010", title: "Supervisors, general office and administrative support workers", teer: "2", cat: "Management" },
    { code: "12011", title: "Supervisors, finance and insurance office workers", teer: "2", cat: "Management" },
    { code: "12012", title: "Supervisors, library, correspondence and related information", teer: "2", cat: "Management" },
    { code: "12013", title: "Supervisors, supply chain, tracking and scheduling coordination", teer: "2", cat: "Management" },
    { code: "12100", title: "Executive assistants", teer: "2", cat: "Management" },
    { code: "12101", title: "Human resources and recruitment officers", teer: "2", cat: "Management" },
    { code: "12102", title: "Procurement and purchasing agents and officers", teer: "2", cat: "Management" },
    { code: "12103", title: "Conference and event planners", teer: "2", cat: "Management" },
    { code: "12104", title: "Employment insurance and revenue officers", teer: "2", cat: "Management" },
    { code: "12110", title: "Court reporters, medical transcriptionists and related", teer: "2", cat: "Management" },
    { code: "12111", title: "Health information management occupations", teer: "2", cat: "Healthcare" },
    { code: "12112", title: "Records management technicians", teer: "2", cat: "Management" },
    { code: "12113", title: "Statistical officers and related research support", teer: "2", cat: "Management" },
    { code: "12200", title: "Accounting technicians and bookkeepers", teer: "2", cat: "Management" },
    { code: "12201", title: "Insurance adjusters and claims examiners", teer: "2", cat: "Management" },
    { code: "12202", title: "Insurance underwriters", teer: "2", cat: "Management" },
    { code: "12203", title: "Assessors, business valuators and appraisers", teer: "2", cat: "Management" },
    { code: "22100", title: "Chemical technologists and technicians", teer: "2", cat: "STEM" },
    { code: "22101", title: "Geological and mineral technologists and technicians", teer: "2", cat: "STEM" },
    { code: "22110", title: "Biological technologists and technicians", teer: "2", cat: "STEM" },
    { code: "22111", title: "Agricultural and fish products inspectors", teer: "2", cat: "Agriculture" },
    { code: "22112", title: "Forestry technologists and technicians", teer: "2", cat: "Agriculture" },
    { code: "22113", title: "Conservation and fishery officers", teer: "2", cat: "Agriculture" },
    { code: "22114", title: "Landscape and horticulture technicians and specialists", teer: "2", cat: "Agriculture" },
    { code: "22210", title: "Architectural technologists and technicians", teer: "2", cat: "STEM" },
    { code: "22211", title: "Industrial designers", teer: "2", cat: "STEM" },
    { code: "22212", title: "Drafting technologists and technicians", teer: "2", cat: "STEM" },
    { code: "22213", title: "Land survey technologists and technicians", teer: "2", cat: "STEM" },
    { code: "22214", title: "Technical occupations in geomatics and meteorology", teer: "2", cat: "STEM" },
    { code: "22220", title: "Computer network and web technicians", teer: "2", cat: "STEM" },
    { code: "22221", title: "User support technicians", teer: "2", cat: "STEM" },
    { code: "22222", title: "Information systems testing technicians", teer: "2", cat: "STEM" },
    { code: "22230", title: "Non-destructive testers and inspectors", teer: "2", cat: "STEM" },
    { code: "22231", title: "Engineering inspectors and regulatory officers", teer: "2", cat: "STEM" },
    { code: "22232", title: "Occupational health and safety specialists", teer: "2", cat: "STEM" },
    { code: "22233", title: "Construction inspectors", teer: "2", cat: "Trades" },
    { code: "22300", title: "Civil engineering technologists and technicians", teer: "2", cat: "STEM" },
    { code: "22301", title: "Mechanical engineering technologists and technicians", teer: "2", cat: "STEM" },
    { code: "22302", title: "Industrial engineering and manufacturing technologists", teer: "2", cat: "STEM" },
    { code: "22303", title: "Construction estimators", teer: "2", cat: "Trades" },
    { code: "22310", title: "Electrical and electronics engineering technologists", teer: "2", cat: "STEM" },
    { code: "22311", title: "Electronic service technicians (household and business)", teer: "2", cat: "STEM" },
    { code: "22312", title: "Industrial instrument technicians and mechanics", teer: "2", cat: "STEM" },
    { code: "22313", title: "Aircraft instrument, electrical and avionics mechanics", teer: "2", cat: "Transport" },
    { code: "32100", title: "Opticians", teer: "2", cat: "Healthcare" },
    { code: "32101", title: "Licensed practical nurses", teer: "2", cat: "Healthcare" },
    { code: "32102", title: "Paramedical occupations", teer: "2", cat: "Healthcare" },
    { code: "32103", title: "Respiratory therapists, clinical perfusionists", teer: "2", cat: "Healthcare" },
    { code: "32104", title: "Animal health technologists and veterinary technicians", teer: "2", cat: "Healthcare" },
    { code: "32109", title: "Other technical occupations in therapy and assessment", teer: "2", cat: "Healthcare" },
    { code: "32110", title: "Denturists", teer: "2", cat: "Healthcare" },
    { code: "32111", title: "Dental hygienists and dental therapists", teer: "2", cat: "Healthcare" },
    { code: "32112", title: "Dental technologists and technicians", teer: "2", cat: "Healthcare" },
    { code: "32120", title: "Medical laboratory technologists", teer: "2", cat: "Healthcare" },
    { code: "32121", title: "Medical radiation technologists", teer: "2", cat: "Healthcare" },
    { code: "32122", title: "Medical sonographers", teer: "2", cat: "Healthcare" },
    { code: "32123", title: "Cardiology technologists and electrophysiological diagnostic technologists", teer: "2", cat: "Healthcare" },
    { code: "32124", title: "Pharmacy technicians", teer: "2", cat: "Healthcare" },
    { code: "32129", title: "Other medical technologists and technicians", teer: "2", cat: "Healthcare" },
    { code: "32200", title: "Traditional Chinese medicine practitioners and acupuncturists", teer: "2", cat: "Healthcare" },
    { code: "32201", title: "Massage therapists", teer: "2", cat: "Healthcare" },
    { code: "32209", title: "Other practitioners of natural healing", teer: "2", cat: "Healthcare" },
    { code: "52100", title: "Library and public archive technicians", teer: "2", cat: "Management" },
    { code: "52110", title: "Film and video camera operators", teer: "2", cat: "Management" },
    { code: "52111", title: "Graphic arts technicians", teer: "2", cat: "Management" },
    { code: "52112", title: "Broadcast technicians", teer: "2", cat: "Management" },
    { code: "52113", title: "Audio and video recording technicians", teer: "2", cat: "Management" },
    { code: "52114", title: "Announcers and other broadcasters", teer: "2", cat: "Management" },
    { code: "52119", title: "Other technical and coordinating occupations in motion pictures", teer: "2", cat: "Management" },
    { code: "52120", title: "Graphic designers and illustrators", teer: "2", cat: "Management" },
    { code: "52121", title: "Interior designers and interior decorators", teer: "2", cat: "Management" },
    { code: "62010", title: "Retail sales supervisors", teer: "2", cat: "Management" },
    { code: "62020", title: "Food service supervisors", teer: "2", cat: "Management" },
    { code: "62021", title: "Executive housekeepers", teer: "2", cat: "Management" },
    { code: "62022", title: "Accommodation, travel, tourism and related services supervisors", teer: "2", cat: "Management" },
    { code: "62023", title: "Customer and information services supervisors", teer: "2", cat: "Management" },
    { code: "62024", title: "Cleaning supervisors", teer: "2", cat: "Management" },
    { code: "62029", title: "Other services supervisors", teer: "2", cat: "Management" },
    { code: "62100", title: "Technical sales specialists - wholesale trade", teer: "2", cat: "Management" },
    { code: "62101", title: "Retail and wholesale buyers", teer: "2", cat: "Management" },
    { code: "62200", title: "Chefs", teer: "2", cat: "Trades" },
    { code: "62201", title: "Funeral directors and embalmers", teer: "2", cat: "Management" },
    { code: "62202", title: "Jewellers, jewellery and watch repairers", teer: "2", cat: "Trades" },
    { code: "72010", title: "Contractors and supervisors, machining and metal trades", teer: "2", cat: "Trades" },
    { code: "72011", title: "Contractors and supervisors, electrical trades", teer: "2", cat: "Trades" },
    { code: "72012", title: "Contractors and supervisors, pipefitting trades", teer: "2", cat: "Trades" },
    { code: "72013", title: "Contractors and supervisors, carpentry trades", teer: "2", cat: "Trades" },
    { code: "72014", title: "Contractors and supervisors, other construction trades", teer: "2", cat: "Trades" },
    { code: "72020", title: "Contractors and supervisors, mechanic trades", teer: "2", cat: "Trades" },
    { code: "72021", title: "Contractors and supervisors, heavy equipment operator crews", teer: "2", cat: "Trades" },
    { code: "72022", title: "Supervisors, printing and related occupations", teer: "2", cat: "Trades" },
    { code: "72023", title: "Supervisors, railway transport operations", teer: "2", cat: "Transport" },
    { code: "72024", title: "Supervisors, motor transport and other ground transit operators", teer: "2", cat: "Transport" },
    { code: "72025", title: "Supervisors, mail and message distribution occupations", teer: "2", cat: "Transport" },
    { code: "72100", title: "Machinists and machining and tooling inspectors", teer: "2", cat: "Trades" },
    { code: "72101", title: "Tool and die makers", teer: "2", cat: "Trades" },
    { code: "72102", title: "Sheet metal workers", teer: "2", cat: "Trades" },
    { code: "72103", title: "Boilermakers", teer: "2", cat: "Trades" },
    { code: "72104", title: "Structural metal and platework fabricators and fitters", teer: "2", cat: "Trades" },
    { code: "72105", title: "Ironworkers", teer: "2", cat: "Trades" },
    { code: "72106", title: "Welders and related machine operators", teer: "2", cat: "Trades" },
    { code: "72200", title: "Electricians (except industrial and power system)", teer: "2", cat: "Trades" },
    { code: "72201", title: "Industrial electricians", teer: "2", cat: "Trades" },
    { code: "72202", title: "Power system electricians", teer: "2", cat: "Trades" },
    { code: "72203", title: "Electrical power line and cable workers", teer: "2", cat: "Trades" },
    { code: "72204", title: "Telecommunications line and cable installers and repairers", teer: "2", cat: "Trades" },
    { code: "72205", title: "Telecommunications equipment installation and cable TV technicians", teer: "2", cat: "Trades" },
    { code: "72300", title: "Plumbers", teer: "2", cat: "Trades" },
    { code: "72301", title: "Steamfitters, pipefitters and sprinkler system installers", teer: "2", cat: "Trades" },
    { code: "72302", title: "Gas fitters", teer: "2", cat: "Trades" },
    { code: "72310", title: "Carpenters", teer: "2", cat: "Trades" },
    { code: "72311", title: "Cabinetmakers", teer: "2", cat: "Trades" },
    { code: "72320", title: "Bricklayers", teer: "2", cat: "Trades" },
    { code: "72321", title: "Insulators", teer: "2", cat: "Trades" },
    { code: "72400", title: "Construction millwrights and industrial mechanics", teer: "2", cat: "Trades" },
    { code: "72401", title: "Heavy-duty equipment mechanics", teer: "2", cat: "Trades" },
    { code: "72402", title: "Heating, refrigeration and air conditioning mechanics", teer: "2", cat: "Trades" },
    { code: "72403", title: "Railway carmen/women", teer: "2", cat: "Transport" },
    { code: "72404", title: "Aircraft mechanics and aircraft inspectors", teer: "2", cat: "Transport" },
    { code: "72405", title: "Machine fitters", teer: "2", cat: "Trades" },
    { code: "72406", title: "Elevator constructors and mechanics", teer: "2", cat: "Trades" },
    { code: "72410", title: "Automotive service technicians, truck and bus mechanics", teer: "2", cat: "Trades" },
    { code: "72411", title: "Auto body collision, refinishing and glass technicians", teer: "2", cat: "Trades" },
    { code: "72420", title: "Oil and solid fuel heating mechanics", teer: "2", cat: "Trades" },
    { code: "72421", title: "Appliance servicers and repairers", teer: "2", cat: "Trades" },
    { code: "72422", title: "Electrical mechanics", teer: "2", cat: "Trades" },
    { code: "72423", title: "Motorcycle, all-terrain vehicle and related mechanics", teer: "2", cat: "Trades" },
    { code: "72429", title: "Other small engine and small equipment repairers", teer: "2", cat: "Trades" },
    { code: "72500", title: "Crane operators", teer: "2", cat: "Trades" },
    { code: "72501", title: "Water well drillers", teer: "2", cat: "Trades" },
    { code: "72600", title: "Air pilots, flight engineers and flying instructors", teer: "2", cat: "Transport" },
    { code: "72601", title: "Air traffic controllers and related occupations", teer: "2", cat: "Transport" },
    { code: "72602", title: "Deck officers, water transport", teer: "2", cat: "Transport" },
    { code: "72603", title: "Engineer officers, water transport", teer: "2", cat: "Transport" },
    { code: "72604", title: "Railway traffic controllers and marine traffic regulators", teer: "2", cat: "Transport" },
    { code: "72999", title: "Other technical trades and related occupations", teer: "2", cat: "Trades" },
    { code: "82010", title: "Supervisors, logging and forestry", teer: "2", cat: "Agriculture" },
    { code: "82020", title: "Supervisors, mining and quarrying", teer: "2", cat: "Agriculture" },
    { code: "82021", title: "Contractors and supervisors, oil and gas drilling and services", teer: "2", cat: "Agriculture" },
    { code: "82030", title: "Agricultural service contractors and farm supervisors", teer: "2", cat: "Agriculture" },
    { code: "82031", title: "Contractors and supervisors, landscaping and horticulture services", teer: "2", cat: "Agriculture" },
    { code: "92010", title: "Supervisors, mineral and metal processing", teer: "2", cat: "Management" },
    { code: "92011", title: "Supervisors, petroleum, gas and chemical processing", teer: "2", cat: "Management" },
    { code: "92012", title: "Supervisors, food and beverage processing", teer: "2", cat: "Management" },
    { code: "92013", title: "Supervisors, plastic and rubber products manufacturing", teer: "2", cat: "Management" },
    { code: "92014", title: "Supervisors, forest products processing", teer: "2", cat: "Management" },
    { code: "92015", title: "Supervisors, textile, fabric, fur and leather products processing", teer: "2", cat: "Management" },
    { code: "92020", title: "Supervisors, motor vehicle assembling", teer: "2", cat: "Management" },
    { code: "92021", title: "Supervisors, electronics and electrical products manufacturing", teer: "2", cat: "Management" },
    { code: "92022", title: "Supervisors, furniture and fixtures manufacturing", teer: "2", cat: "Management" },
    { code: "92023", title: "Supervisors, other mechanical and metal products manufacturing", teer: "2", cat: "Management" },
    { code: "92024", title: "Supervisors, other products manufacturing and assembly", teer: "2", cat: "Management" },
    { code: "92100", title: "Power engineers and power systems operators", teer: "2", cat: "Trades" },
    { code: "92101", title: "Water and waste treatment plant operators", teer: "2", cat: "Trades" },
    // TEER 3 - College Diploma / Apprenticeship (<2 years)
    { code: "13100", title: "Administrative officers", teer: "3", cat: "Management" },
    { code: "13101", title: "Property administrators", teer: "3", cat: "Management" },
    { code: "13102", title: "Payroll administrators", teer: "3", cat: "Management" },
    { code: "13110", title: "Administrative assistants", teer: "3", cat: "Management" },
    { code: "13111", title: "Legal administrative assistants", teer: "3", cat: "Management" },
    { code: "13112", title: "Medical administrative assistants", teer: "3", cat: "Healthcare" },
    { code: "13200", title: "Customs, ship and other brokers", teer: "3", cat: "Management" },
    { code: "13201", title: "Production and transportation logistics coordinators", teer: "3", cat: "Transport" },
    { code: "33100", title: "Dental assistants and dental laboratory assistants", teer: "3", cat: "Healthcare" },
    { code: "33101", title: "Medical laboratory assistants and related technical occupations", teer: "3", cat: "Healthcare" },
    { code: "33102", title: "Nurse aides, orderlies and patient service associates", teer: "3", cat: "Healthcare" },
    { code: "33103", title: "Pharmacy technical assistants and pharmacy assistants", teer: "3", cat: "Healthcare" },
    { code: "33109", title: "Other assisting occupations in support of health services", teer: "3", cat: "Healthcare" },
    { code: "53100", title: "Registrars, restorers, interpreters and museum/gallery occupations", teer: "3", cat: "Management" },
    { code: "53110", title: "Photographers", teer: "3", cat: "Management" },
    { code: "53111", title: "Motion pictures, broadcasting, photography and performing arts assistants", teer: "3", cat: "Management" },
    { code: "53120", title: "Dancers", teer: "3", cat: "Management" },
    { code: "53121", title: "Actors, comedians and circus performers", teer: "3", cat: "Management" },
    { code: "53122", title: "Painters, sculptors and other visual artists", teer: "3", cat: "Management" },
    { code: "53123", title: "Theatre, fashion, exhibit and other creative designers", teer: "3", cat: "Management" },
    { code: "53124", title: "Artisans and craftspersons", teer: "3", cat: "Trades" },
    { code: "53125", title: "Patternmakers - textile, leather and fur products", teer: "3", cat: "Trades" },
    { code: "53200", title: "Athletes", teer: "3", cat: "Management" },
    { code: "53201", title: "Coaches", teer: "3", cat: "Management" },
    { code: "53202", title: "Sports officials and referees", teer: "3", cat: "Management" },
    { code: "63100", title: "Insurance agents and brokers", teer: "3", cat: "Management" },
    { code: "63101", title: "Real estate agents and salespersons", teer: "3", cat: "Management" },
    { code: "63102", title: "Financial sales representatives", teer: "3", cat: "Management" },
    { code: "63200", title: "Cooks", teer: "3", cat: "Trades" },
    { code: "63201", title: "Butchers - retail and wholesale", teer: "3", cat: "Trades" },
    { code: "63202", title: "Bakers", teer: "3", cat: "Trades" },
    { code: "63210", title: "Hairstylists and barbers", teer: "3", cat: "Management" },
    { code: "63211", title: "Estheticians, electrologists and related occupations", teer: "3", cat: "Management" },
    { code: "63220", title: "Shoe repairers and shoemakers", teer: "3", cat: "Trades" },
    { code: "63221", title: "Upholsterers", teer: "3", cat: "Trades" },
    { code: "73100", title: "Concrete finishers", teer: "3", cat: "Trades" },
    { code: "73101", title: "Tilesetters", teer: "3", cat: "Trades" },
    { code: "73102", title: "Plasterers, drywall installers and finishers and lathers", teer: "3", cat: "Trades" },
    { code: "73110", title: "Roofers and shinglers", teer: "3", cat: "Trades" },
    { code: "73111", title: "Glaziers", teer: "3", cat: "Trades" },
    { code: "73112", title: "Painters and decorators (except interior decorators)", teer: "3", cat: "Trades" },
    { code: "73113", title: "Floor covering installers", teer: "3", cat: "Trades" },
    { code: "73200", title: "Residential and commercial installers and servicers", teer: "3", cat: "Trades" },
    { code: "73201", title: "General building maintenance workers and building superintendents", teer: "3", cat: "Trades" },
    { code: "73202", title: "Pest controllers and fumigators", teer: "3", cat: "Trades" },
    { code: "73209", title: "Other repairers and servicers", teer: "3", cat: "Trades" },
    { code: "73300", title: "Transport truck drivers", teer: "3", cat: "Transport" },
    { code: "73301", title: "Bus drivers, subway operators and other transit operators", teer: "3", cat: "Transport" },
    { code: "73310", title: "Railway and yard locomotive engineers", teer: "3", cat: "Transport" },
    { code: "73311", title: "Railway conductors and brakemen/women", teer: "3", cat: "Transport" },
    { code: "73400", title: "Heavy equipment operators", teer: "3", cat: "Trades" },
    { code: "73401", title: "Printing press operators", teer: "3", cat: "Trades" },
    { code: "73402", title: "Drillers and blasters - surface mining, quarrying and construction", teer: "3", cat: "Trades" },
    { code: "83100", title: "Underground production and development miners", teer: "3", cat: "Agriculture" },
    { code: "83101", title: "Oil and gas well drillers, servicers, testers and related workers", teer: "3", cat: "Agriculture" },
    { code: "83110", title: "Logging machinery operators", teer: "3", cat: "Agriculture" },
    { code: "83120", title: "Fishing masters and officers", teer: "3", cat: "Agriculture" },
    { code: "83121", title: "Fishermen/women", teer: "3", cat: "Agriculture" },
    { code: "93100", title: "Central control and process operators, mineral and metal processing", teer: "3", cat: "Trades" },
    { code: "93101", title: "Central control and process operators, petroleum, gas and chemical", teer: "3", cat: "Trades" },
    { code: "93102", title: "Pulping, papermaking and coating control operators", teer: "3", cat: "Trades" },
    { code: "93200", title: "Aircraft assemblers and aircraft assembly inspectors", teer: "3", cat: "Transport" },
    // TEER 4 - High School Diploma
    { code: "14100", title: "General office support workers", teer: "4", cat: "Management" },
    { code: "14101", title: "Receptionists", teer: "4", cat: "Management" },
    { code: "14102", title: "Personnel clerks", teer: "4", cat: "Management" },
    { code: "14103", title: "Court clerks and related court services occupations", teer: "4", cat: "Management" },
    { code: "14110", title: "Survey interviewers and statistical clerks", teer: "4", cat: "Management" },
    { code: "14111", title: "Data entry clerks", teer: "4", cat: "Management" },
    { code: "14112", title: "Desktop publishing operators and related occupations", teer: "4", cat: "Management" },
    { code: "14200", title: "Accounting and related clerks", teer: "4", cat: "Management" },
    { code: "14201", title: "Banking, insurance and other financial clerks", teer: "4", cat: "Management" },
    { code: "14202", title: "Collection clerks", teer: "4", cat: "Management" },
    { code: "14300", title: "Library assistants and clerks", teer: "4", cat: "Management" },
    { code: "14301", title: "Correspondence, publication and regulatory clerks", teer: "4", cat: "Management" },
    { code: "14400", title: "Shippers and receivers", teer: "4", cat: "Transport" },
    { code: "14401", title: "Storekeepers and partspersons", teer: "4", cat: "Management" },
    { code: "14402", title: "Production logistics workers", teer: "4", cat: "Management" },
    { code: "14403", title: "Purchasing and inventory control workers", teer: "4", cat: "Management" },
    { code: "14404", title: "Dispatchers", teer: "4", cat: "Transport" },
    { code: "14405", title: "Transportation route and crew schedulers", teer: "4", cat: "Transport" },
    { code: "64100", title: "Retail salespersons and visual merchandisers", teer: "4", cat: "Management" },
    { code: "64101", title: "Sales and account representatives - wholesale trade (non-technical)", teer: "4", cat: "Management" },
    { code: "64200", title: "Tailors, dressmakers, furriers and milliners", teer: "4", cat: "Trades" },
    { code: "64201", title: "Image, social and other personal consultants", teer: "4", cat: "Management" },
    { code: "64300", title: "Maîtres d'hôtel and hosts/hostesses", teer: "4", cat: "Management" },
    { code: "64301", title: "Bartenders", teer: "4", cat: "Management" },
    { code: "64310", title: "Travel counsellors", teer: "4", cat: "Transport" },
    { code: "64311", title: "Pursers and flight attendants", teer: "4", cat: "Transport" },
    { code: "64312", title: "Airline ticket and service agents", teer: "4", cat: "Transport" },
    { code: "64313", title: "Ground and water transport ticket agents, cargo service representatives", teer: "4", cat: "Transport" },
    { code: "64314", title: "Hotel front desk clerks", teer: "4", cat: "Management" },
    { code: "64320", title: "Tour and travel guides", teer: "4", cat: "Transport" },
    { code: "64321", title: "Casino workers", teer: "4", cat: "Management" },
    { code: "64322", title: "Outdoor sport and recreational guides", teer: "4", cat: "Management" },
    { code: "64400", title: "Customer services representatives - financial institutions", teer: "4", cat: "Management" },
    { code: "64401", title: "Postal services representatives", teer: "4", cat: "Transport" },
    { code: "64409", title: "Other customer and information services representatives", teer: "4", cat: "Management" },
    { code: "64410", title: "Security guards and related security service occupations", teer: "4", cat: "Management" },
    { code: "74100", title: "Mail and parcel sorters and related occupations", teer: "4", cat: "Transport" },
    { code: "74101", title: "Letter carriers", teer: "4", cat: "Transport" },
    { code: "74102", title: "Couriers and messengers", teer: "4", cat: "Transport" },
    { code: "74200", title: "Railway yard and track maintenance workers", teer: "4", cat: "Transport" },
    { code: "74201", title: "Water transport deck and engine room crew", teer: "4", cat: "Transport" },
    { code: "74202", title: "Air transport ramp attendants", teer: "4", cat: "Transport" },
    { code: "74203", title: "Automotive and heavy truck and equipment parts installers", teer: "4", cat: "Trades" },
    { code: "74204", title: "Utility maintenance workers", teer: "4", cat: "Trades" },
    { code: "74205", title: "Public works maintenance equipment operators and related workers", teer: "4", cat: "Trades" },
    { code: "84100", title: "Underground mine service and support workers", teer: "4", cat: "Agriculture" },
    { code: "84101", title: "Oil and gas well drilling and related workers and services operators", teer: "4", cat: "Agriculture" },
    { code: "84110", title: "Chain saw and skidder operators", teer: "4", cat: "Agriculture" },
    { code: "84111", title: "Silviculture and forestry workers", teer: "4", cat: "Agriculture" },
    { code: "84120", title: "Specialized livestock workers and farm machinery operators", teer: "4", cat: "Agriculture" },
    { code: "84121", title: "Fishing vessel deckhands", teer: "4", cat: "Agriculture" },
    { code: "94100", title: "Machine operators, mineral and metal processing", teer: "4", cat: "Trades" },
    { code: "94101", title: "Foundry workers", teer: "4", cat: "Trades" },
    { code: "94102", title: "Glass forming and finishing machine operators and glass cutters", teer: "4", cat: "Trades" },
    { code: "94103", title: "Concrete, clay and stone forming operators", teer: "4", cat: "Trades" },
    { code: "94104", title: "Inspectors and testers, mineral and metal processing", teer: "4", cat: "Trades" },
    { code: "94105", title: "Metalworking and forging machine operators", teer: "4", cat: "Trades" },
    { code: "94106", title: "Machining tool operators", teer: "4", cat: "Trades" },
    { code: "94107", title: "Machine operators of other metal products", teer: "4", cat: "Trades" },
    { code: "94110", title: "Chemical plant machine operators", teer: "4", cat: "Trades" },
    { code: "94111", title: "Plastics processing machine operators", teer: "4", cat: "Trades" },
    { code: "94112", title: "Rubber processing machine operators and related workers", teer: "4", cat: "Trades" },
    { code: "94120", title: "Sawmill machine operators", teer: "4", cat: "Trades" },
    { code: "94121", title: "Pulp mill, papermaking and finishing machine operators", teer: "4", cat: "Trades" },
    { code: "94122", title: "Paper converting machine operators", teer: "4", cat: "Trades" },
    { code: "94123", title: "Lumber graders and other wood processing inspectors and graders", teer: "4", cat: "Trades" },
    { code: "94124", title: "Woodworking machine operators", teer: "4", cat: "Trades" },
    { code: "94129", title: "Other wood processing machine operators", teer: "4", cat: "Trades" },
    { code: "94130", title: "Textile fibre and yarn, hide and pelt processing machine operators", teer: "4", cat: "Trades" },
    { code: "94131", title: "Weavers, knitters and other fabric making occupations", teer: "4", cat: "Trades" },
    { code: "94132", title: "Industrial sewing machine operators", teer: "4", cat: "Trades" },
    { code: "94133", title: "Inspectors and graders, textile, fabric, fur and leather products", teer: "4", cat: "Trades" },
    { code: "94140", title: "Process control and machine operators, food and beverage processing", teer: "4", cat: "Trades" },
    { code: "94141", title: "Industrial butchers and meat cutters, poultry preparers", teer: "4", cat: "Trades" },
    { code: "94142", title: "Fish and seafood plant workers", teer: "4", cat: "Trades" },
    { code: "94143", title: "Testers and graders, food and beverage processing", teer: "4", cat: "Trades" },
    { code: "94150", title: "Plateless printing equipment operators", teer: "4", cat: "Trades" },
    { code: "94151", title: "Camera, platemaking and other prepress occupations", teer: "4", cat: "Trades" },
    { code: "94152", title: "Binding and finishing machine operators", teer: "4", cat: "Trades" },
    { code: "94153", title: "Photographic and film processors", teer: "4", cat: "Trades" },
    { code: "94200", title: "Motor vehicle assemblers, inspectors and testers", teer: "4", cat: "Trades" },
    { code: "94201", title: "Electronics assemblers, fabricators, inspectors and testers", teer: "4", cat: "Trades" },
    { code: "94202", title: "Assemblers and inspectors, electrical appliance, apparatus", teer: "4", cat: "Trades" },
    { code: "94203", title: "Assemblers, fabricators and inspectors, industrial electrical motors", teer: "4", cat: "Trades" },
    { code: "94204", title: "Mechanical assemblers and inspectors", teer: "4", cat: "Trades" },
    { code: "94205", title: "Machine operators and inspectors, electrical apparatus manufacturing", teer: "4", cat: "Trades" },
    { code: "94210", title: "Furniture and fixture assemblers, finishers, refinishers and inspectors", teer: "4", cat: "Trades" },
    { code: "94211", title: "Assemblers and inspectors of other wood products", teer: "4", cat: "Trades" },
    { code: "94212", title: "Plastic products assemblers, finishers and inspectors", teer: "4", cat: "Trades" },
    { code: "94213", title: "Industrial painters, coaters and metal finishing process operators", teer: "4", cat: "Trades" },
    { code: "94219", title: "Other products assemblers, finishers and inspectors", teer: "4", cat: "Trades" },
    // TEER 5 - Short-term Training / No Formal Education
    { code: "44100", title: "Home child care providers", teer: "5", cat: "Management" },
    { code: "44101", title: "Home support workers, caregivers and related occupations", teer: "5", cat: "Healthcare" },
    { code: "44200", title: "Primary combat members of the Canadian Armed Forces", teer: "5", cat: "Management" },
    { code: "45100", title: "Student monitors, crossing guards and related occupations", teer: "5", cat: "Management" },
    { code: "54100", title: "Program leaders and instructors in recreation, sport and fitness", teer: "5", cat: "Management" },
    { code: "55109", title: "Other performers", teer: "5", cat: "Management" },
    { code: "65100", title: "Cashiers", teer: "5", cat: "Management" },
    { code: "65101", title: "Service station attendants", teer: "5", cat: "Management" },
    { code: "65102", title: "Store shelf stockers, clerks and order fillers", teer: "5", cat: "Management" },
    { code: "65109", title: "Other sales related occupations", teer: "5", cat: "Management" },
    { code: "65200", title: "Food and beverage servers", teer: "5", cat: "Management" },
    { code: "65201", title: "Food counter attendants, kitchen helpers and support occupations", teer: "5", cat: "Management" },
    { code: "65202", title: "Meat cutters and fishmongers - retail and wholesale", teer: "5", cat: "Management" },
    { code: "65210", title: "Support occupations in accommodation, travel and facilities set-up", teer: "5", cat: "Management" },
    { code: "65211", title: "Operators and attendants in amusement, recreation and sport", teer: "5", cat: "Management" },
    { code: "65220", title: "Pet groomers and animal care workers", teer: "5", cat: "Agriculture" },
    { code: "65229", title: "Other support occupations in personal services", teer: "5", cat: "Management" },
    { code: "65310", title: "Light duty cleaners", teer: "5", cat: "Management" },
    { code: "65311", title: "Specialized cleaners", teer: "5", cat: "Management" },
    { code: "65312", title: "Janitors, caretakers and heavy-duty cleaners", teer: "5", cat: "Management" },
    { code: "65320", title: "Dry cleaning, laundry and related occupations", teer: "5", cat: "Management" },
    { code: "65329", title: "Other service support occupations", teer: "5", cat: "Management" },
    { code: "75100", title: "Longshore workers", teer: "5", cat: "Transport" },
    { code: "75101", title: "Material handlers", teer: "5", cat: "Transport" },
    { code: "75110", title: "Construction trades helpers and labourers", teer: "5", cat: "Trades" },
    { code: "75119", title: "Other trades helpers and labourers", teer: "5", cat: "Trades" },
    { code: "75200", title: "Taxi and limousine drivers and chauffeurs", teer: "5", cat: "Transport" },
    { code: "75201", title: "Delivery service drivers and door-to-door distributors", teer: "5", cat: "Transport" },
    { code: "75210", title: "Boat and cable ferry operators and related occupations", teer: "5", cat: "Transport" },
    { code: "75211", title: "Railway and motor transport labourers", teer: "5", cat: "Transport" },
    { code: "75212", title: "Public works and maintenance labourers", teer: "5", cat: "Trades" },
    { code: "85100", title: "Livestock labourers", teer: "5", cat: "Agriculture" },
    { code: "85101", title: "Harvesting labourers", teer: "5", cat: "Agriculture" },
    { code: "85102", title: "Aquaculture and marine harvest labourers", teer: "5", cat: "Agriculture" },
    { code: "85103", title: "Nursery and greenhouse labourers", teer: "5", cat: "Agriculture" },
    { code: "85104", title: "Trappers and hunters", teer: "5", cat: "Agriculture" },
    { code: "85110", title: "Mine labourers", teer: "5", cat: "Agriculture" },
    { code: "85111", title: "Oil and gas drilling, servicing and related labourers", teer: "5", cat: "Agriculture" },
    { code: "85120", title: "Logging and forestry labourers", teer: "5", cat: "Agriculture" },
    { code: "85121", title: "Landscaping and grounds maintenance labourers", teer: "5", cat: "Agriculture" }
];

window.filterNOC = function() {
    const input = document.getElementById('nocSearchInput').value.toLowerCase().trim();
    const resultsContainer = document.getElementById('nocResults');
    if (input.length < 2) {
        resultsContainer.innerHTML = '<p style="text-align: center; padding: 20px; color: var(--text-muted);">영문 키워드를 2글자 이상 입력하세요.</p>';
        return;
    }
    const keywords = input.split(' ');
    const filtered = nocData.filter(item => {
        const fullContent = (item.title + " " + item.code + " " + (item.cat || "")).toLowerCase();
        return keywords.every(kw => fullContent.includes(kw));
    });
    if (filtered.length === 0) {
        resultsContainer.innerHTML = '<p style="text-align: center; padding: 20px; color: var(--text-muted);">일치하는 결과가 없습니다.</p>';
        return;
    }
    resultsContainer.innerHTML = filtered.map(item => `<div class="noc-item"><div class="noc-header"><span class="noc-code">${item.code}</span><span class="noc-teer">TEER ${item.teer}</span>${item.cat ? `<span class="noc-cat-badge">${item.cat}</span>` : ''}</div><div class="noc-title">${item.title}</div></div>`).join('');
};

window.openArticle = function(index) {
    const article = articlesData[index];
    if (!article) return;
    const modal = document.getElementById("articleModal");
    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = `<span class="article-badge">${article.badge}</span><h2>${article.title}</h2><div class="article-meta">${article.date}</div><div class="full-content">${article.content}</div><button class="read-more-btn" style="margin-top:30px; width:100%" id="modalCloseBtn">닫기</button>`;
    modal.style.display = "block";
    document.body.classList.add("modal-open");
    document.getElementById("modalCloseBtn").onclick = window.closeArticle;
};

window.closeArticle = function() {
    const modal = document.getElementById("articleModal");
    if (modal) { modal.style.display = "none"; document.body.classList.remove("modal-open"); }
};

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('mainNav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) { nav.style.padding = '8px 20px'; nav.style.top = '10px'; }
            else { nav.style.padding = '12px 30px'; nav.style.top = '20px'; }
        });
    }
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    }
    renderPosts();
    window.addEventListener('click', (e) => { if (e.target === document.getElementById("articleModal")) window.closeArticle(); });
    window.addEventListener('keydown', (e) => { if (e.key === "Escape") window.closeArticle(); });
});

// --- CORE ASSESSMENT LOGIC ---
function calculateCRS() {
    console.log("Analysis Triggered");
    
    // Core Inputs
    const age = parseInt(document.getElementById("age").value) || 0;
    const education = document.getElementById("education").value;
    const language = parseInt(document.getElementById("language").value) || 0;
    const status = document.getElementById('maritalStatus').value;
    const isMarried = (status === 'married');
    const canadianExp = parseInt(document.getElementById("canadianExp").value) || 0;
    const foreignExp = parseInt(document.getElementById("foreignExp").value) || 0;
    const canadianStudy = parseInt(document.getElementById("canadianStudy").value) || 0;
    const pnp = parseInt(document.getElementById("pnp").value) || 0;
    const jobOffer = parseInt(document.getElementById("jobOffer").value) || 0;
    const sibling = parseInt(document.getElementById("sibling").value) || 0;
    const frenchSkill = parseInt(document.getElementById("frenchSkill").value) || 0;
    const targetProvince = document.getElementById("targetProvince").value;
    const occupationGroup = document.getElementById("occupationGroup").value;

    let total = 0;

    // 1. Age
    let agePoints = 0;
    if (age >= 20 && age <= 29) agePoints = isMarried ? 100 : 110;
    else if (age >= 30 && age <= 44) {
        let base = isMarried ? 100 : 110;
        let deduct = isMarried ? 5 : 6;
        agePoints = base - ((age - 29) * deduct);
    }
    total += Math.max(0, agePoints);

    // 2. Education
    const eduMap = { 'highschool': isMarried ? 28 : 30, 'bachelor': isMarried ? 112 : 120, 'two_or_more': isMarried ? 119 : 128, 'master': isMarried ? 126 : 135, 'phd': isMarried ? 140 : 150 };
    total += eduMap[education] || 0;

    // 3. Language
    const langMap = { 7: isMarried ? 64 : 68, 8: isMarried ? 88 : 92, 9: isMarried ? 116 : 124, 10: isMarried ? 128 : 136 };
    total += langMap[language] || 0;

    // 4. Experience
    const canExpMap = { 1: isMarried ? 35 : 40, 2: isMarried ? 46 : 53, 3: isMarried ? 70 : 80 };
    total += canExpMap[canadianExp] || 0;

    // 5. Spouse (Simplified)
    if (isMarried) {
        const sEdu = document.getElementById("spouseEducation").value;
        const sLang = parseInt(document.getElementById("spouseLanguage").value) || 0;
        if (sEdu === 'bachelor') total += 8; else if (sEdu === 'master') total += 10;
        if (sLang >= 9) total += 20; else if (sLang >= 7) total += 12;
    }

    // 6. Transferability
    let transfer = 0;
    if (education !== 'highschool' && education !== '0') {
        if (language >= 9) transfer += 50; else if (language >= 7) transfer += 25;
    }
    total += Math.min(100, transfer);

    // 7. Additional
    total += (canadianStudy + jobOffer + sibling + frenchSkill + pnp);
    const finalScore = Math.min(1200, total);

    // --- Update Results UI ---
    document.getElementById("strategyResults").style.display = "block";
    document.getElementById("res-crs").innerText = finalScore + "점";
    
    const RECENT_CUTOFF = 525;
    const gap = finalScore - RECENT_CUTOFF;
    document.getElementById("res-gap").innerText = (gap >= 0 ? "+" : "") + gap + "점";
    
    let prob = "Low";
    if (finalScore >= 500) prob = "Very High";
    else if (finalScore >= 470) prob = "High";
    else if (finalScore >= 430) prob = "Medium";
    document.getElementById("res-prob").innerText = prob;

    // Recommendations
    const pathContainer = document.getElementById("recommendation-paths");
    pathContainer.innerHTML = "";
    let recs = [];
    if (finalScore >= 480) recs.push({ title: "Express Entry - General", desc: "가장 빠른 영주권 취득 경로입니다.", badge: "Fastest" });
    if (occupationGroup !== "others") recs.push({ title: `EE Category (${occupationGroup})`, desc: "당신의 직종은 우선 선발 대상입니다.", badge: "Best Match" });
    if (targetProvince !== "any") recs.push({ title: `${targetProvince} PNP`, desc: "지역 주정부 이민을 통한 600점 가점을 노려보세요.", badge: "Regional" });

    recs.forEach(r => {
        pathContainer.innerHTML += `<div class="article-card" style="padding: 20px; border: 1px solid var(--border-color); background: var(--card-bg); border-radius: 12px;"><span class="article-badge">${r.badge}</span><h3 style="margin-top:10px;">${r.title}</h3><p style="font-size:0.85rem; color:var(--text-muted);">${r.desc}</p></div>`;
    });

    document.getElementById("strategyResults").scrollIntoView({ behavior: 'smooth' });
}

function toggleSpouseSection() {
    const status = document.getElementById('maritalStatus').value;
    document.getElementById('spouseSection').style.display = status === 'married' ? 'block' : 'none';
}

function renderPosts() {
    const list = document.getElementById("blogList");
    if (!list) return;
    list.className = "articles-grid";
    list.innerHTML = "";

    articlesData.forEach((article, index) => {
        const articleElement = document.createElement("article");
        articleElement.className = "article-card";
        articleElement.innerHTML = `
            <span class="article-badge">${article.badge}</span>
            <h3>${article.title}</h3>
            <div class="article-meta">${article.date}</div>
            <div class="article-summary">
                ${article.summary}
            </div>
            <button class="read-more-btn" onclick="openArticle(${index})">자세히 보기</button>
        `;
        list.appendChild(articleElement);
    });
}
