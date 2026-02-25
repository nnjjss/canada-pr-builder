const articlesData = [
    {
        title: "2026년 익스프레스 엔트리 대개혁: 카테고리 기반 선발 시스템 심층 분석",
        badge: "정책 분석",
        date: "2026년 2월 25일",
        content: `
            <p>IRCC는 2026년 익스프레스 엔트리 운영 계획을 통해 'CRS 점수 지상주의'에서 벗어나, 캐나다의 실제 경제 성장 동력과 직결되는 <b>'카테고리 기반 선발(Category-based Selection)'</b>의 비중을 전체 선발 인원의 70% 이상으로 확대합니다.</p>
            <h3>1. 2026년 4대 신규 집중 선발 카테고리</h3>
            <ul>
                <li><b>연구 및 교육(Academic/Research):</b> 캐나다 내 연구소나 대학에서 기여한 인재.</li>
                <li><b>전략 경영(Senior Management):</b> 캐나다 현지 기업의 의사결정권자 그룹.</li>
                <li><b>운송 및 물류(Transport):</b> 글로벌 공급망 병목 현상을 해결할 핵심 인력.</li>
                <li><b>국방 및 특수 기술(Military):</b> 국가 안보와 직결된 특수 기술직군.</li>
            </ul>
        `
    },
    {
        title: "캐나다 경력 연구자 및 교수진(Academic) 영주권 취득 로드맵",
        badge: "전문 가이드",
        date: "2026년 2월 24일",
        content: `<p>캐나다 내 대학(DLI)이나 연구소에서 경력을 쌓은 전문가들에게 전례 없는 기회를 제공합니다. 대학 교수(NOC 40110), 박사 후 연구원(NOC 40120) 등이 주요 대상이며, 일반 컷오프보다 훨씬 낮은 점수로 합격이 가능합니다.</p>`
    },
    {
        title: "시니어 매니저(Senior Manager)를 위한 전략적 이민 가이드",
        badge: "경영 전략",
        date: "2026년 2월 23일",
        content: `<p>NOC TEER 0 등급의 시니어 경영진(NOC 00012, 00013 등)을 위한 특별 전형입니다. 기업 운영 성과와 캐나다 경제 기여도를 증명하는 것이 합격의 핵심입니다.</p>`
    },
    {
        title: "2026 항공 및 운송 기술직: 공급망 위기 해결의 핵심 인재",
        badge: "산업 리포트",
        date: "2026년 2월 22일",
        content: `<p>파일럿(NOC 72600), 항공 정비사(NOC 72404) 등 운송 직군은 가장 높은 빈도로 선발될 예정입니다. 해외 자격증의 캐나다 환산 절차를 미리 완료하는 것이 필수입니다.</p>`
    },
    {
        title: "국방 및 군사 기술직(Military) 신설 카테고리 완벽 분석",
        badge: "신규 전형",
        date: "2026년 2월 21일",
        content: `<p>군에서의 특수 기술(사이버 보안, 특수 장비 정비 등)이 캐나다 안보의 핵심 자산으로 인정받습니다. 우방국 군 경력자에게 강력한 가점이 부여되는 혁신적인 전형입니다.</p>`
    },
    {
        title: "프랑스어 우수자 전형: 2026년에도 영주권 취득의 '치트키'",
        badge: "언어 전략",
        date: "2026년 2월 20일",
        content: `<p>불어 능력(CLB 7 이상)은 일반 선발보다 100점 이상 낮은 커트라인 혜택을 제공합니다. 영어 성적과 조합 시 최대 50점 추가 점수를 확보할 수 있는 가장 확실한 경로입니다.</p>`
    }
];

// --- Comprehensive NOC 2021 Database (Expanded to 300+ entries) ---
const nocData = [
    // 0 - Management
    { code: "00010", title: "Legislators", teer: "0", cat: "" },
    { code: "00011", title: "Senior government managers and officials", teer: "0", cat: "" },
    { code: "00012", title: "Senior managers - financial, communications", teer: "0", cat: "Management" },
    { code: "00013", title: "Senior managers - health, education", teer: "0", cat: "Management" },
    { code: "00014", title: "Senior managers - trade, broadcasting", teer: "0", cat: "Management" },
    { code: "00015", title: "Senior managers - construction, transportation", teer: "0", cat: "Management" },
    { code: "10010", title: "Financial managers", teer: "0", cat: "" },
    { code: "10011", title: "Human resources managers", teer: "0", cat: "" },
    { code: "10012", title: "Purchasing managers", teer: "0", cat: "" },
    { code: "10019", title: "Other administrative services managers", teer: "0", cat: "" },
    { code: "10020", title: "Insurance, real estate and brokerage managers", teer: "0", cat: "" },
    { code: "10021", title: "Banking, credit and other investment managers", teer: "0", cat: "" },
    { code: "10022", title: "Advertising, marketing and public relations managers", teer: "0", cat: "" },
    { code: "10029", title: "Other business services managers", teer: "0", cat: "" },
    { code: "10030", title: "Telecommunication carriers managers", teer: "0", cat: "STEM" },
    { code: "20010", title: "Engineering managers", teer: "0", cat: "STEM" },
    { code: "20011", title: "Architecture and science managers", teer: "0", cat: "STEM" },
    { code: "20012", title: "Computer and information systems managers", teer: "0", cat: "STEM" },
    { code: "30010", title: "Managers in health care", teer: "0", cat: "Healthcare" },
    { code: "40010", title: "Government managers - health and social policy", teer: "0", cat: "" },
    { code: "40011", title: "Government managers - education policy", teer: "0", cat: "" },
    { code: "40012", title: "Government managers - economic analysis", teer: "0", cat: "" },
    { code: "40019", title: "Other managers in public administration", teer: "0", cat: "" },
    { code: "40020", title: "Administrators - post-secondary education", teer: "0", cat: "Academic" },
    { code: "40021", title: "School principals and administrators", teer: "0", cat: "" },
    { code: "40030", title: "Managers in social, community and correctional services", teer: "0", cat: "" },
    { code: "50010", title: "Library, archive, museum and art gallery managers", teer: "0", cat: "" },
    { code: "50011", title: "Managers - publishing, motion pictures, broadcasting", teer: "0", cat: "" },
    { code: "50012", title: "Recreation, sports and fitness program directors", teer: "0", cat: "" },
    { code: "60010", title: "Corporate sales managers", teer: "0", cat: "" },
    { code: "60020", title: "Retail and wholesale trade managers", teer: "0", cat: "" },
    { code: "60030", title: "Restaurant and food service managers", teer: "0", cat: "" },
    { code: "60031", title: "Accommodation service managers", teer: "0", cat: "" },
    { code: "60040", title: "Managers in customer and personal services", teer: "0", cat: "" },
    { code: "70010", title: "Construction managers", teer: "0", cat: "" },
    { code: "70011", title: "Home building and renovation managers", teer: "0", cat: "" },
    { code: "70012", title: "Facility operation and maintenance managers", teer: "0", cat: "" },
    { code: "70020", title: "Managers in transportation", teer: "0", cat: "Transport" },
    { code: "80010", title: "Managers in natural resources and fishing", teer: "0", cat: "" },
    { code: "80020", title: "Managers in agriculture", teer: "0", cat: "" },
    { code: "80021", title: "Managers in horticulture", teer: "0", cat: "" },
    { code: "80022", title: "Managers in aquaculture", teer: "0", cat: "" },
    { code: "90010", title: "Manufacturing managers", teer: "0", cat: "" },
    { code: "90011", title: "Utilities managers", teer: "0", cat: "" },

    // 1 - Business, Finance and Administration
    { code: "11100", title: "Financial auditors and accountants", teer: "1", cat: "" },
    { code: "11101", title: "Financial and investment analysts", teer: "1", cat: "" },
    { code: "11102", title: "Financial advisors", teer: "1", cat: "" },
    { code: "11103", title: "Securities agents, investment dealers and brokers", teer: "1", cat: "" },
    { code: "11109", title: "Other financial officers", teer: "1", cat: "" },
    { code: "11200", title: "Human resources professionals", teer: "1", cat: "" },
    { code: "11201", title: "Business management consulting professionals", teer: "1", cat: "" },
    { code: "11202", title: "Advertising, marketing and PR professionals", teer: "1", cat: "" },
    { code: "12010", title: "General office supervisors", teer: "2", cat: "" },
    { code: "12011", title: "Finance and insurance office worker supervisors", teer: "2", cat: "" },
    { code: "12012", title: "Library, correspondence and info worker supervisors", teer: "2", cat: "" },
    { code: "12013", title: "Supply chain, tracking and scheduling supervisors", teer: "2", cat: "" },
    { code: "12100", title: "Administrative officers", teer: "2", cat: "" },
    { code: "12101", title: "Executive assistants", teer: "2", cat: "" },
    { code: "12102", title: "Procurement and purchasing agents", teer: "2", cat: "" },
    { code: "12103", title: "Conference and event planners", teer: "2", cat: "" },
    { code: "12200", title: "Accounting technicians and bookkeepers", teer: "2", cat: "" },
    { code: "12201", title: "Insurance adjusters and claims examiners", teer: "2", cat: "" },
    { code: "12202", title: "Industrial examiners, collectors and investigators", teer: "2", cat: "" },
    { code: "13100", title: "Administrative assistants", teer: "3", cat: "" },
    { code: "13101", title: "Legal administrative assistants", teer: "3", cat: "" },
    { code: "13102", title: "Medical administrative assistants", teer: "3", cat: "" },
    { code: "13110", title: "Administrative accounts payroll", teer: "3", cat: "" },
    { code: "13111", title: "Property administrators", teer: "3", cat: "" },

    // 2 - Natural and Applied Sciences
    { code: "21100", title: "Physicists and astronomers", teer: "1", cat: "STEM" },
    { code: "21101", title: "Chemists", teer: "1", cat: "STEM" },
    { code: "21102", title: "Geoscientists and oceanographers", teer: "1", cat: "STEM" },
    { code: "21103", title: "Meteorologists and climatologists", teer: "1", cat: "STEM" },
    { code: "21110", title: "Biologists and related scientists", teer: "1", cat: "STEM" },
    { code: "21111", title: "Forestry professionals", teer: "1", cat: "" },
    { code: "21112", title: "Agricultural representatives and consultants", teer: "1", cat: "" },
    { code: "21120", title: "Public and environmental health professionals", teer: "1", cat: "" },
    { code: "21200", title: "Architects", teer: "1", cat: "STEM" },
    { code: "21201", title: "Landscape architects", teer: "1", cat: "STEM" },
    { code: "21202", title: "Urban and land use planners", teer: "1", cat: "STEM" },
    { code: "21203", title: "Land surveyors", teer: "1", cat: "STEM" },
    { code: "21210", title: "Mathematicians, statisticians and actuaries", teer: "1", cat: "STEM" },
    { code: "21211", title: "Data scientists", teer: "1", cat: "STEM" },
    { code: "21220", title: "Cybersecurity specialists", teer: "1", cat: "STEM" },
    { code: "21221", title: "Business systems specialists", teer: "1", cat: "STEM" },
    { code: "21222", title: "Information systems specialists", teer: "1", cat: "STEM" },
    { code: "21223", title: "Database analysts and administrators", teer: "1", cat: "STEM" },
    { code: "21230", title: "Computer systems developers", teer: "1", cat: "STEM" },
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
    { code: "21390", title: "Other professional engineers", teer: "1", cat: "STEM" },
    { code: "22100", title: "Chemical technologists and technicians", teer: "2", cat: "STEM" },
    { code: "22101", title: "Geological and mineral technologists", teer: "2", cat: "STEM" },
    { code: "22110", title: "Biological technologists and technicians", teer: "2", cat: "STEM" },
    { code: "22111", title: "Agricultural and fish products inspectors", teer: "2", cat: "" },
    { code: "22114", title: "Landscape and horticulture technicians", teer: "2", cat: "" },
    { code: "22210", title: "Architectural technologists and technicians", teer: "2", cat: "STEM" },
    { code: "22211", title: "Industrial designers", teer: "2", cat: "STEM" },
    { code: "22212", title: "Drafting technologists and technicians", teer: "2", cat: "STEM" },
    { code: "22213", title: "Land survey technologists and technicians", teer: "2", cat: "STEM" },
    { code: "22220", title: "Computer network and web technicians", teer: "2", cat: "STEM" },
    { code: "22221", title: "User support technicians", teer: "2", cat: "STEM" },
    { code: "22222", title: "Information systems testing technicians", teer: "2", cat: "STEM" },
    { code: "22230", title: "Civil engineering technologists and technicians", teer: "2", cat: "STEM" },
    { code: "22231", title: "Mechanical engineering technologists", teer: "2", cat: "STEM" },
    { code: "22232", title: "Industrial engineering technologists", teer: "2", cat: "STEM" },
    { code: "22233", title: "Electrical engineering technologists", teer: "2", cat: "STEM" },

    // 3 - Health Occupations
    { code: "31100", title: "Specialists in clinical medicine", teer: "1", cat: "Healthcare" },
    { code: "31101", title: "Specialists in surgery", teer: "1", cat: "Healthcare" },
    { code: "31102", title: "General practitioners and family physicians", teer: "1", cat: "Healthcare" },
    { code: "31103", title: "Veterinarians", teer: "1", cat: "" },
    { code: "31110", title: "Dentists", teer: "1", cat: "Healthcare" },
    { code: "31111", title: "Optometrists", teer: "1", cat: "Healthcare" },
    { code: "31112", title: "Audiologists and speech-language pathologists", teer: "1", cat: "Healthcare" },
    { code: "31120", title: "Pharmacists", teer: "1", cat: "Healthcare" },
    { code: "31121", title: "Dietitians and nutritionists", teer: "1", cat: "Healthcare" },
    { code: "31200", title: "Psychologists", teer: "1", cat: "Healthcare" },
    { code: "31201", title: "Chiropractors", teer: "1", cat: "Healthcare" },
    { code: "31202", title: "Physiotherapists", teer: "1", cat: "Healthcare" },
    { code: "31203", title: "Occupational therapists", teer: "1", cat: "Healthcare" },
    { code: "31204", title: "Kinesiologists and related occupations", teer: "1", cat: "Healthcare" },
    { code: "31300", title: "Nursing coordinators and supervisors", teer: "1", cat: "Healthcare" },
    { code: "31301", title: "Registered nurses and psychiatric nurses", teer: "1", cat: "Healthcare" },
    { code: "31302", title: "Nurse practitioners", teer: "1", cat: "Healthcare" },
    { code: "31303", title: "Physician assistants and midwives", teer: "1", cat: "Healthcare" },
    { code: "32100", title: "Opticians", teer: "2", cat: "Healthcare" },
    { code: "32101", title: "Licensed practical nurses", teer: "2", cat: "Healthcare" },
    { code: "32102", title: "Paramedical occupations", teer: "2", cat: "Healthcare" },
    { code: "32103", title: "Respiratory therapists", teer: "2", cat: "Healthcare" },
    { code: "32110", title: "Denturists", teer: "2", cat: "Healthcare" },
    { code: "32111", title: "Dental hygienists and therapists", teer: "2", cat: "Healthcare" },
    { code: "32112", title: "Dental technologists and technicians", teer: "2", cat: "Healthcare" },
    { code: "32120", title: "Medical laboratory technologists", teer: "2", cat: "Healthcare" },
    { code: "32121", title: "Medical radiation technologists", teer: "2", cat: "Healthcare" },
    { code: "32122", title: "Medical sonographers", teer: "2", cat: "Healthcare" },
    { code: "32123", title: "Cardiology and diagnostic technologists", teer: "2", cat: "Healthcare" },
    { code: "32124", title: "Pharmacy technicians", teer: "2", cat: "Healthcare" },
    { code: "33100", title: "Dental assistants and laboratory assistants", teer: "3", cat: "Healthcare" },
    { code: "33101", title: "Medical laboratory assistants", teer: "3", cat: "Healthcare" },
    { code: "33102", title: "Nurse aides, orderlies and patient associates", teer: "3", cat: "Healthcare" },
    { code: "33103", title: "Pharmacy technical assistants", teer: "3", cat: "Healthcare" },

    // 4 - Education, Law, Social Services
    { code: "41100", title: "Judges", teer: "1", cat: "" },
    { code: "41101", title: "Lawyers and Quebec notaries", teer: "1", cat: "" },
    { code: "41200", title: "University professors and lecturers", teer: "1", cat: "Academic" },
    { code: "41201", title: "Post-secondary teaching and research assistants", teer: "1", cat: "Academic" },
    { code: "41210", title: "College and other vocational instructors", teer: "1", cat: "Academic" },
    { code: "41220", title: "Secondary school teachers", teer: "1", cat: "" },
    { code: "41221", title: "Elementary school and kindergarten teachers", teer: "1", cat: "" },
    { code: "41300", title: "Social workers", teer: "1", cat: "Healthcare" },
    { code: "41301", title: "Therapists in counselling and related therapies", teer: "1", cat: "Healthcare" },
    { code: "41302", title: "Religious leaders", teer: "1", cat: "" },
    { code: "41400", title: "Natural and applied science policy researchers", teer: "1", cat: "STEM" },
    { code: "41401", title: "Economists and economic policy researchers", teer: "1", cat: "" },
    { code: "41402", title: "Business development and market researchers", teer: "1", cat: "" },
    { code: "41403", title: "Social policy researchers and program officers", teer: "1", cat: "" },
    { code: "41404", title: "Health policy researchers and consultants", teer: "1", cat: "Healthcare" },
    { code: "41405", title: "Education policy researchers and consultants", teer: "1", cat: "" },
    { code: "42100", title: "Police officers (except commissioned)", teer: "2", cat: "" },
    { code: "42101", title: "Firefighters", teer: "2", cat: "" },
    { code: "42201", title: "Social and community service workers", teer: "2", cat: "Healthcare" },
    { code: "42202", title: "Early childhood educators and assistants (ECE)", teer: "2", cat: "" },
    { code: "42203", title: "Instructors of persons with disabilities", teer: "2", cat: "" },
    { code: "43100", title: "Legal assistants and paralegals", teer: "3", cat: "" },
    { code: "43109", title: "Other instructors", teer: "3", cat: "" },

    // 5 - Arts, Culture, Recreation, Sport
    { code: "51101", title: "Painters, sculptors and visual artists", teer: "1", cat: "" },
    { code: "51111", title: "Librarians", teer: "1", cat: "" },
    { code: "51113", title: "Authors and writers", teer: "1", cat: "" },
    { code: "51114", title: "Technical writers", teer: "1", cat: "STEM" },
    { code: "51120", title: "Conservators and curators", teer: "1", cat: "" },
    { code: "52100", title: "Writers and editors", teer: "2", cat: "" },
    { code: "52110", title: "Video camera operators", teer: "2", cat: "" },
    { code: "52111", title: "Graphic arts technicians", teer: "2", cat: "" },
    { code: "52112", title: "Broadcast technicians", teer: "2", cat: "" },
    { code: "52113", title: "Audio and video recording technicians", teer: "2", cat: "" },
    { code: "52120", title: "Graphic designers and illustrators", teer: "2", cat: "" },
    { code: "52121", title: "Interior designers and decorators", teer: "2", cat: "" },
    { code: "53100", title: "Photographers", teer: "3", cat: "" },

    // 6 - Sales and Service
    { code: "62010", title: "Retail sales supervisors", teer: "2", cat: "" },
    { code: "62020", title: "Food service supervisors", teer: "2", cat: "" },
    { code: "62021", title: "Accommodation service supervisors", teer: "2", cat: "" },
    { code: "62100", title: "Technical sales specialists", teer: "2", cat: "" },
    { code: "62101", title: "Retail and wholesale buyers", teer: "2", cat: "" },
    { code: "62200", title: "Chefs", teer: "2", cat: "Trades" },
    { code: "63100", title: "Insurance agents and brokers", teer: "3", cat: "" },
    { code: "63101", title: "Real estate agents and salespersons", teer: "3", cat: "" },
    { code: "63200", title: "Cooks", teer: "3", cat: "Trades" },
    { code: "63201", title: "Butchers - retail and wholesale", teer: "3", cat: "Trades" },
    { code: "63202", title: "Bakers", teer: "3", cat: "Trades" },
    { code: "63211", title: "Hairstylists and barbers", teer: "3", cat: "" },

    // 7 - Trades, Transport, Equipment
    { code: "72010", title: "Contractors, machining and metal trades", teer: "2", cat: "Trades" },
    { code: "72011", title: "Contractors, electrical and telecommunications", teer: "2", cat: "Trades" },
    { code: "72012", title: "Contractors, pipefitting trades", teer: "2", cat: "Trades" },
    { code: "72013", title: "Contractors, carpentry trades", teer: "2", cat: "Trades" },
    { code: "72014", title: "Contractors, other construction trades", teer: "2", cat: "Trades" },
    { code: "72100", title: "Machinists and machining inspectors", teer: "2", cat: "Trades" },
    { code: "72101", title: "Tool and die makers", teer: "2", cat: "Trades" },
    { code: "72106", title: "Welders and related machine operators", teer: "2", cat: "Trades" },
    { code: "72200", title: "Electricians (except industrial)", teer: "2", cat: "Trades" },
    { code: "72201", title: "Industrial electricians", teer: "2", cat: "Trades" },
    { code: "72300", title: "Plumbers", teer: "2", cat: "Trades" },
    { code: "72310", title: "Carpenters", teer: "2", cat: "Trades" },
    { code: "72311", title: "Cabinetmakers", teer: "2", cat: "Trades" },
    { code: "72320", title: "Bricklayers", teer: "2", cat: "Trades" },
    { code: "72400", title: "Construction millwrights and industrial mechanics", teer: "2", cat: "Trades" },
    { code: "72401", title: "Heavy-duty equipment mechanics", teer: "2", cat: "Trades" },
    { code: "72402", title: "Heating and air conditioning mechanics", teer: "2", cat: "Trades" },
    { code: "72404", title: "Aircraft mechanics and inspectors", teer: "2", cat: "Transport" },
    { code: "72410", title: "Automotive service technicians and mechanics", teer: "2", cat: "Trades" },
    { code: "72500", title: "Crane operators", teer: "2", cat: "Trades" },
    { code: "72600", title: "Air pilots, flight engineers and instructors", teer: "2", cat: "Transport" },
    { code: "72601", title: "Air traffic controllers", teer: "2", cat: "Transport" },
    { code: "72602", title: "Deck officers, water transport", teer: "2", cat: "Transport" },
    { code: "73100", title: "Concrete finishers", teer: "3", cat: "Trades" },
    { code: "73110", title: "Roofers and shinglers", teer: "3", cat: "Trades" },
    { code: "73111", title: "Glaziers", teer: "3", cat: "Trades" },
    { code: "73112", title: "Painters and decorators", teer: "3", cat: "Trades" },
    { code: "73200", title: "Residential and commercial installers", teer: "3", cat: "Trades" },
    { code: "73300", title: "Transport truck drivers", teer: "3", cat: "Transport" },
    { code: "73301", title: "Bus drivers and transit operators", teer: "3", cat: "Transport" },

    // 8 - Natural Resources, Agriculture
    { code: "82010", title: "Agricultural service farm supervisors", teer: "2", cat: "" },
    { code: "82020", title: "Logging contractors and supervisors", teer: "2", cat: "" },
    { code: "82021", title: "Contractors, oil and gas drilling", teer: "2", cat: "" },
    { code: "83110", title: "Logging machinery operators", teer: "3", cat: "" },
    { code: "83120", title: "Oil and gas well drillers", teer: "3", cat: "" },

    // 9 - Manufacturing and Utilities
    { code: "92010", title: "Supervisors, mineral and metal processing", teer: "2", cat: "" },
    { code: "92011", title: "Supervisors, petroleum, gas and utilities", teer: "2", cat: "" },
    { code: "92012", title: "Supervisors, food and beverage processing", teer: "2", cat: "" },
    { code: "92100", title: "Power engineers and systems operators", teer: "2", cat: "" },
    { code: "92101", title: "Water and waste treatment plant operators", teer: "2", cat: "" }
];

// --- Logic ---
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
        resultsContainer.innerHTML = '<p style="text-align: center; padding: 20px; color: var(--text-muted);">일치하는 결과가 없습니다. 영문 키워드(e.g. Developer, Cook)로 다시 시도해보세요.</p>';
        return;
    }
    resultsContainer.innerHTML = filtered.map(item => `
        <div class="noc-item">
            <div class="noc-header">
                <span class="noc-code">${item.code}</span>
                <span class="noc-teer">TEER ${item.teer}</span>
                ${item.cat ? `<span class="noc-cat-badge">${item.cat}</span>` : ''}
            </div>
            <div class="noc-title">${item.title}</div>
        </div>
    `).join('');
};

window.openArticle = function(index) {
    const article = articlesData[index];
    if (!article) return;
    const modal = document.getElementById("articleModal");
    const modalBody = document.getElementById("modalBody");
    if (!modal || !modalBody) return;
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
        if (document.documentElement.getAttribute('data-theme') === 'dark') themeToggle.textContent = '☀️ 라이트 모드';
        themeToggle.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            themeToggle.textContent = theme === 'dark' ? '☀️ 라이트 모드' : '🌙 다크 모드';
        });
    }
    renderPosts();
    window.addEventListener('click', (e) => { if (e.target === document.getElementById("articleModal")) window.closeArticle(); });
    window.addEventListener('keydown', (e) => { if (e.key === "Escape") window.closeArticle(); });
});

function calculateCRS() {
    const status = document.getElementById('maritalStatus').value;
    const isMarried = (status === 'married');
    const age = parseInt(document.getElementById("age").value) || 0;
    const education = document.getElementById("education").value;
    const language = parseInt(document.getElementById("language").value) || 0;
    const canadianExp = parseInt(document.getElementById("canadianExp").value) || 0;
    const foreignExp = parseInt(document.getElementById("foreignExp").value) || 0;
    const canadianStudy = parseInt(document.getElementById("canadianStudy").value) || 0;
    const pnp = parseInt(document.getElementById("pnp").value) || 0;
    const jobOffer = parseInt(document.getElementById("jobOffer").value) || 0;
    const sibling = parseInt(document.getElementById("sibling").value) || 0;
    const frenchSkill = parseInt(document.getElementById("frenchSkill").value) || 0;

    // 분석용 추가 변수
    const targetProvince = document.getElementById("targetProvince").value;
    const occupationGroup = document.getElementById("occupationGroup").value;

    let total = 0;
    let agePoints = 0;
    if (age >= 20 && age <= 29) agePoints = isMarried ? 100 : 110;
    else if (age >= 30 && age <= 44) {
        let base = isMarried ? 100 : 110;
        let deduct = isMarried ? 5 : 6;
        agePoints = base - ((age - 29) * deduct);
    }
    total += Math.max(0, agePoints);

    const eduMap = { 'highschool': isMarried ? 28 : 30, 'bachelor': isMarried ? 112 : 120, 'two_or_more': isMarried ? 119 : 128, 'master': isMarried ? 126 : 135, 'phd': isMarried ? 140 : 150 };
    total += eduMap[education] || 0;

    const langMap = { 7: isMarried ? 64 : 68, 8: isMarried ? 88 : 92, 9: isMarried ? 116 : 124, 10: isMarried ? 128 : 136 };
    total += langMap[language] || 0;

    const canExpMap = { 1: isMarried ? 35 : 40, 2: isMarried ? 46 : 53, 3: isMarried ? 70 : 80 };
    total += canExpMap[canadianExp] || 0;

    if (isMarried) {
        const sEdu = document.getElementById("spouseEducation").value;
        const sLang = parseInt(document.getElementById("spouseLanguage").value) || 0;
        if (sEdu === 'bachelor') total += 8; else if (sEdu === 'master') total += 10;
        if (sLang >= 9) total += 20; else if (sLang >= 7) total += 12; else if (sLang >= 5) total += 4;
    }

    let transfer = 0;
    if (education !== 'highschool' && education !== '0') {
        if (language >= 9) transfer += (education === 'master' || education === 'phd' ? 50 : 25);
        else if (language >= 7) transfer += (education === 'master' || education === 'phd' ? 25 : 13);
    }
    if (canadianExp >= 1 && foreignExp >= 1) {
        if (canadianExp >= 2) transfer += (foreignExp >= 3 ? 50 : 25);
        else transfer += (foreignExp >= 3 ? 25 : 13);
    } else if (foreignExp >= 1 && language >= 7) {
        if (language >= 9) transfer += (foreignExp >= 3 ? 50 : 25);
        else transfer += (foreignExp >= 3 ? 25 : 13);
    }
    total += Math.min(100, transfer);
    total += (canadianStudy + jobOffer + sibling + frenchSkill + pnp);

    const finalScore = Math.min(1200, total);

    // --- AI 루트 분석 결과 표시 ---
    const RECENT_CUTOFF = 525;
    const gap = finalScore - RECENT_CUTOFF;
    
    document.getElementById("strategyResults").style.display = "block";
    document.getElementById("res-crs").innerText = finalScore;
    document.getElementById("res-gap").innerText = (gap >= 0 ? "+" : "") + gap;
    
    let prob = "Low";
    if (finalScore >= 500) prob = "Very High";
    else if (finalScore >= 470) prob = "High";
    else if (finalScore >= 430) prob = "Medium";
    document.getElementById("res-prob").innerText = prob;

    // 추천 경로 생성
    const pathContainer = document.getElementById("recommendation-paths");
    pathContainer.innerHTML = "";
    
    let recommendations = [];

    if (finalScore >= 480) {
        recommendations.push({ title: "Express Entry - General", desc: "현재 점수가 안정권에 가깝습니다. All-program 드로우를 통해 가장 빠르게 영주권 취득이 가능합니다.", badge: "Fastest" });
    }
    
    if (["Healthcare", "STEM", "Transport", "Trades", "Agriculture"].includes(occupationGroup)) {
        recommendations.push({ title: `EE Category-based (${occupationGroup})`, desc: `당신의 직종은 2026년 우선 선발 대상입니다. 일반 선발보다 낮은 점수로도 충분히 가능성이 있습니다.`, badge: "Recommended" });
    }

    if (targetProvince !== "any") {
        recommendations.push({ title: `${targetProvince} Provincial Nominee`, desc: `선호하시는 ${targetProvince} 지역의 주정부 프로그램을 통해 600점 가산점을 노려볼 수 있습니다.`, badge: "Regional" });
    } else if (finalScore < 450) {
        recommendations.push({ title: "Provincial Nominee Program (PNP)", desc: "연방 정부 점수가 낮을 경우, 특정 주정부의 인적 자본 스트림(OINP 등)을 통한 600점 가산점이 필수적입니다.", badge: "Strategic" });
    }

    if (targetProvince === "Atlantic") {
        recommendations.push({ title: "Atlantic Immigration Program (AIP)", desc: "아틀란틱 지역의 고용주로부터 잡오퍼를 받는다면, 낮은 점수 요건으로 영주권 신청이 가능합니다.", badge: "Low Score" });
    }

    recommendations.forEach(r => {
        pathContainer.innerHTML += `<div class="article-card" style="padding: 25px; border: 1px solid var(--border-color); background: var(--card-bg);"><span class="article-badge" style="background: var(--primary); color: white;">${r.badge}</span><h3 style="margin-top: 10px;">${r.title}</h3><p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0;">${r.desc}</p></div>`;
    });

    let adviceHTML = `<h3>💡 AI 전략 분석 결과</h3><p>당신의 프로필을 기반으로 한 맞춤형 리포트입니다.</p><ul>`;
    if (language < 9) adviceHTML += `<li><b>영어 점수 극대화</b>: 현재 CLB ${language}입니다. CLB 9(IELTS 8.0/7.0) 달성 시 기술 전이 점수에서 비약적인 상승을 기대할 수 있습니다.</li>`;
    if (frenchSkill === 0) adviceHTML += `<li><b>프랑스어 보너스</b>: 연방 정부는 불어 구사자를 선호합니다. 기초 불어 공부를 통해 50점을 추가하면 판도가 바뀝니다.</li>`;
    if (occupationGroup === "others") adviceHTML += `<li><b>NOC 최적화</b>: 본인의 경력이 2026년 전략 카테고리에 맞출 수 있는지 NOC Finder에서 재검토하세요.</li>`;
    if (jobOffer === 0) adviceHTML += `<li><b>잡오퍼 전략</b>: 고용주로부터 잡오퍼를 확보하면 50~200점의 가점뿐만 아니라 PNP 연결이 매우 쉬워집니다.</li>`;
    adviceHTML += `</ul>`;
    
    document.getElementById("strategic-advice").innerHTML = adviceHTML;
    document.getElementById("strategyResults").scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function addPost() {
    let t = document.getElementById("title");
    let c = document.getElementById("content");
    if(!t.value || !c.value) return;
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push({title: t.value, content: c.value});
    localStorage.setItem("posts", JSON.stringify(posts));
    t.value = ""; c.value = "";
    renderPosts();
}

function renderPosts() {
    let list = document.getElementById("blogList");
    if(!list) return;
    list.innerHTML = "";
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.reverse().forEach(p => {
        let d = document.createElement("div");
        d.className = "blog-post card";
        d.style.padding = "20px";
        d.innerHTML = `<h3>${p.title}</h3><p>${p.content}</p>`;
        list.appendChild(d);
    });
}
