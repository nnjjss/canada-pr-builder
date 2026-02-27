/* ── Global Constants ── */
const CURRENT_YEAR = new Date().getFullYear();
const MIN_BIRTH_YEAR = 1940;
const MAX_BIRTH_YEAR = CURRENT_YEAR - 18;
const WIZARD_TOTAL_STEPS = 7;
const NEW_ARTICLE_DAYS = 14;
const FORMSPREE_URL = 'https://formspree.io/f/mjgejrry';

const CRS_BENCHMARKS = {
    RECENT_CUTOFF: 490,
    VERY_HIGH: 500,
    HIGH: 470,
    MEDIUM: 430,
    NEAR_ELIGIBLE_GAP: 50
};

const SCORE_BREAKDOWN_MAX = {
    '나이': 110, 'Age': 110,
    '학력': 150, 'Education': 150,
    '언어 (영어)': 136, 'Language (English)': 136,
    '캐나다 경력': 80, 'Canadian Experience': 80,
    '이전성 점수': 100, 'Skill Transferability': 100,
    '배우자 요소': 40, 'Spouse Factors': 40,
    'PNP 노미네이션': 600, 'PNP Nomination': 600,
    '불어': 50, 'French': 50,
    '캐나다 학업': 30, 'Canadian Study': 30,
    '형제/자매': 15, 'Sibling in Canada': 15
};

const articlesData = {
    ko: [
        {
            title: "신설 '의사 카테고리' 첫 드로우 — CRS 169점, 2021년 이후 역대 최저",
            badge: "신설 카테고리",
            date: "2026년 2월 19일",
            summary: "캐나다 경력 의사를 대상으로 한 신규 카테고리 첫 드로우에서 391명이 초청됐으며 CRS 컷오프가 169점에 불과했습니다.",
            content: `<p>2026년 2월 19일, IRCC는 <b>캐나다 경력 의사(Physicians with Canadian Work Experience)</b>를 대상으로 하는 신설 카테고리의 첫 번째 드로우를 실시했습니다. 총 391명에게 초청장(ITA)이 발급됐으며, CRS 컷오프는 <b>169점</b>으로 2021년 이후 역대 최저 수준입니다.</p><h3>주요 대상 직종</h3><ul><li><b>일반의 및 가정의(NOC 31102):</b> 캐나다 내 병원·클리닉 근무 경력자.</li><li><b>전문의(NOC 31100):</b> 내과·외과·정신과 등 전문 분야 의사.</li><li><b>레지던트(NOC 31101):</b> 캐나다 의과대학 수련 중인 의사.</li></ul><h3>지원 요건</h3><p>캐나다 내 1년 이상의 의사 경력과 NOC 31100~31102에 해당하는 직종이어야 하며, 언어 CLB 7 이상을 충족해야 합니다. 이 컷오프는 캐나다 의료 인력난 해소를 위한 특단의 조치로, 향후 유사 드로우가 추가 실시될 가능성이 높습니다.</p>`
        },
        {
            title: "프랑스어 우수자 8,500명 대규모 선발 — CRS 400점, 일반 선발 대비 100점 절감",
            badge: "프랑스어",
            date: "2026년 2월 6일",
            summary: "2월 6일 프랑스어 카테고리 드로우에서 역대 최대 규모인 8,500명이 초청됐습니다. CRS 400점은 같은 시기 일반 선발 대비 100점 이상 낮습니다.",
            content: `<p>2026년 2월 6일 실시된 <b>프랑스어 우수자(French-Language Proficiency)</b> 드로우는 단일 드로우 기준 역대 최대 규모인 <b>8,500명</b>을 초청하며 CRS 컷오프 <b>400점</b>을 기록했습니다.</p><h3>프랑스어 카테고리 자격 요건</h3><ul><li>TEF Canada 또는 TCF Canada 시험에서 <b>NCLC 7 이상</b>(읽기·쓰기·듣기·말하기 모두).</li><li>영어 CLB 5 이상 충족 필수.</li><li>Express Entry 풀 등록 상태 유지.</li></ul><h3>왜 유리한가</h3><p>프랑스어 카테고리는 CRS 점수와 무관하게 언어 능력만으로 경쟁하는 구조입니다. 8,500명이라는 초청 규모는 IRCC가 퀘벡 외 지역의 프랑코폰 이민을 적극 장려하고 있다는 신호이며, 향후 드로우에서도 대규모 선발이 이어질 전망입니다.</p>`
        },
        {
            title: "CEC 6,000명 대규모 드로우 — 캐나다 경력자의 황금 기회",
            badge: "CEC 드로우",
            date: "2026년 2월 17일",
            summary: "캐나다 경험 이민(CEC) 카테고리에서 6,000명이 초청됐습니다. CRS 508점으로, 캐나다 내 취업 중인 워크퍼밋 소지자에게 유리합니다.",
            content: `<p>2026년 2월 17일 실시된 <b>캐나다 경험 이민(Canadian Experience Class, CEC)</b> 드로우에서 <b>6,000명</b>이 초청됐으며 CRS 컷오프는 <b>508점</b>이었습니다.</p><h3>CEC 자격 요건</h3><ul><li>최근 3년 내 캐나다 내 <b>1년 이상</b>의 숙련직(NOC TEER 0~3) 경력.</li><li>영어 CLB 7(TEER 0~2) 또는 CLB 5(TEER 3) 이상.</li><li>캐나다 내 거주 및 합법적 취업 상태.</li></ul><h3>전략 포인트</h3><p>CEC는 Express Entry 3개 스트림 중 가장 빠른 처리 속도(평균 6개월 이내)를 자랑합니다. 현재 워크퍼밋으로 캐나다에서 근무 중이라면 경력 기산일을 확인하고, CLB 점수 향상으로 CRS를 최대화하는 것이 핵심 전략입니다.</p>`
        },
        {
            title: "헬스케어·사회서비스 4,000명 초청 — CRS 467점",
            badge: "헬스케어",
            date: "2026년 2월 20일",
            summary: "헬스케어 및 사회서비스 카테고리 드로우에서 4,000명이 초청됐습니다. 간호사·의료기사·사회복지사 등 관련 직종이 대상입니다.",
            content: `<p>2026년 2월 20일 실시된 <b>헬스케어 및 사회서비스(Healthcare & Social Services)</b> 카테고리 드로우에서 <b>4,000명</b>이 초청됐으며 CRS 컷오프는 <b>467점</b>이었습니다.</p><h3>해당 직종 (주요 NOC)</h3><ul><li><b>등록 간호사(NOC 31301):</b> 병원·장기요양시설 근무자.</li><li><b>의료기사·방사선사(NOC 32101~32109):</b> 진단영상·임상병리 등.</li><li><b>사회복지사(NOC 41300):</b> 복지기관·학교·병원 근무자.</li><li><b>약사·치과위생사(NOC 31120, 32111):</b> 의료지원 전문직.</li></ul><h3>전략 포인트</h3><p>헬스케어 카테고리는 CRS 점수 요건이 일반 선발보다 낮고, 캐나다의 고령화 사회 진입으로 인해 수요가 장기적으로 지속될 가능성이 높습니다. 해당 직종 종사자라면 해외 자격증 캐나다 인증(면허 취득) 절차를 선행하는 것이 중요합니다.</p>`
        },
        {
            title: "2월 PNP 드로우 2회 실시 — 실질 기준 CRS 약 149~189점",
            badge: "PNP",
            date: "2026년 2월 16일 / 2월 3일",
            summary: "2월 중 두 차례 PNP 드로우가 실시됐습니다. PNP 600점 가산점을 제외한 실질 CRS는 각각 약 189점, 149점 수준입니다.",
            content: `<p>2026년 2월에는 두 차례의 <b>주정부 이민 연계(PNP) 드로우</b>가 실시됐습니다.</p><ul><li><b>2월 16일:</b> 279명 초청, CRS 컷오프 789점 (PNP 600점 제외 시 실질 189점)</li><li><b>2월 3일:</b> 423명 초청, CRS 컷오프 749점 (PNP 600점 제외 시 실질 149점)</li></ul><h3>PNP란?</h3><p>각 주정부가 독자적으로 이민자를 추천(노미네이션)하면 CRS에 600점이 자동 부여되어 ITA 획득이 사실상 확정됩니다. 주별로 추천 기준이 다르며, BC PNP·OINP(온타리오)·SINP(사스카추완) 등이 대표적입니다.</p><h3>전략 포인트</h3><p>PNP 노미네이션을 받으면 CRS 점수와 관계없이 ITA를 받을 수 있습니다. 특정 주에 고용주가 있거나, 해당 주의 인력 수요 직종에 해당된다면 NOI(관심 표명서) 제출을 통한 PNP 접근이 가장 효율적인 전략입니다.</p>`
        },
        {
            title: "2026년 카테고리 선발 완전 정복 — 내 직종에 맞는 경로 찾기",
            badge: "전략 가이드",
            date: "2026년 2월 26일",
            summary: "헬스케어, 프랑스어, CEC, PNP, 의사 카테고리까지 — 2026년 실제 드로우 데이터를 바탕으로 내게 유리한 이민 경로를 분석합니다.",
            content: `<p>2026년 2월 한 달간의 드로우 데이터를 분석하면 <b>카테고리 기반 선발</b>이 이민 전략의 핵심임을 알 수 있습니다.</p><h3>2월 드로우 총정리</h3><ul><li><b>의사 카테고리 (02/19):</b> 391명 · CRS 169점 — 역대 최저권</li><li><b>프랑스어 (02/06):</b> 8,500명 · CRS 400점 — 역대 최대 규모</li><li><b>CEC (02/17):</b> 6,000명 · CRS 508점 — 캐나다 경력자</li><li><b>헬스케어 (02/20):</b> 4,000명 · CRS 467점 — 의료·복지직</li><li><b>PNP (02/16, 02/03):</b> 각 279명·423명 · 789점·749점</li></ul><h3>나에게 맞는 전략</h3><p>① 의료직 종사자 → 의사/헬스케어 카테고리 우선 검토<br>② 프랑스어 CLB 7 달성 가능 → 프랑스어 카테고리 목표<br>③ 캐나다 내 1년 이상 경력 → CEC 경로 집중<br>④ 특정 주와 연계된 고용주 → PNP 전략<br>위 CRS 계산기로 현재 점수를 확인하고 AI 루트 분석을 실행해 보세요.</p>`
        },
        {
            title: "Express Entry 2026년 연간 초청 목표 11만 명 — 역대 최대 규모",
            badge: "뉴스",
            date: "2026년 1월 15일",
            summary: "IRCC가 2026년 Express Entry 초청 목표를 11만 명으로 발표했습니다. 카테고리별 선발 비중이 대폭 확대됩니다.",
            content: `<p>IRCC는 2026년 Express Entry를 통해 총 <b>110,000명</b>을 초청하겠다는 연간 계획을 발표했습니다. 이는 2025년 대비 약 15% 증가한 수치입니다.</p><h3>주요 변경 사항</h3><ul><li><b>카테고리별 선발 비중 확대:</b> 전체 초청의 60% 이상을 카테고리 드로우로 실시.</li><li><b>일반(No Program Specified) 드로우 축소:</b> CRS 고득점자 위주의 일반 드로우 빈도 감소.</li><li><b>신규 카테고리 추가:</b> 의사, 농업·식품 분야 카테고리 신설 예정.</li></ul><h3>전략적 시사점</h3><p>CRS 점수만으로 경쟁하는 시대는 저물고 있습니다. 자신의 직종·언어·경력이 어떤 카테고리에 해당하는지 파악하고, 해당 카테고리의 드로우 주기와 컷오프를 추적하는 것이 핵심 전략입니다.</p>`
        },
        {
            title: "BC PNP Tech 스트림 — IT 직종 우선 초청 확대",
            badge: "PNP",
            date: "2026년 2월 10일",
            summary: "BC주가 Tech 스트림 대상 직종을 35개로 확대하고 월 2회 드로우를 실시합니다. 소프트웨어 엔지니어·데이터 분석가 등이 포함됩니다.",
            content: `<p>브리티시 컬럼비아(BC)주는 2026년부터 <b>BC PNP Tech 스트림</b> 대상 NOC 코드를 <b>35개</b>로 확대하고, 드로우 빈도를 월 2회로 늘렸습니다.</p><h3>주요 대상 직종</h3><ul><li><b>소프트웨어 엔지니어(NOC 21231)</b></li><li><b>데이터베이스 분석가(NOC 21223)</b></li><li><b>UX/UI 디자이너(NOC 21233)</b></li><li><b>정보보안 분석가(NOC 21220)</b></li></ul><h3>지원 절차</h3><p>BC주 고용주로부터 1년 이상의 잡오퍼를 받고 Express Entry 프로필을 등록한 후, BC PNP에 별도 신청합니다. 노미네이션을 받으면 CRS 600점이 추가됩니다. IT 업계 종사자라면 가장 현실적인 PR 경로입니다.</p>`
        },
        {
            title: "OINP 고용주 잡오퍼 스트림 — 온타리오 취업자 필독",
            badge: "PNP",
            date: "2026년 2월 5일",
            summary: "온타리오 OINP가 고용주 잡오퍼 스트림을 통해 1,200명을 초청했습니다. 토론토·오타와 소재 기업 취업자에게 유리합니다.",
            content: `<p>온타리오 이민자 추천 프로그램(OINP)은 2026년 2월 <b>고용주 잡오퍼(Employer Job Offer)</b> 스트림에서 <b>1,200명</b>에게 노미네이션 초청장을 발급했습니다.</p><h3>스트림 종류</h3><ul><li><b>Foreign Worker Stream:</b> 해외 거주 숙련 인력 (NOC TEER 0~3).</li><li><b>International Student Stream:</b> 온타리오 대학 졸업생.</li><li><b>In-Demand Skills Stream:</b> 농업·건설·운송 등 TEER 4~5 직종.</li></ul><h3>핵심 요건</h3><p>온타리오 소재 고용주로부터 정규직 잡오퍼가 필수입니다. 잡오퍼의 임금이 해당 직종 중위 임금 이상이어야 하며, 고용주는 OINP 등록 요건을 충족해야 합니다. 노미네이션 시 CRS 600점이 추가됩니다.</p>`
        },
        {
            title: "프랑스어 학습 전략 — TEF 시험 NCLC 7 달성 로드맵",
            badge: "프랑스어",
            date: "2026년 1월 28일",
            summary: "프랑스어 초보자도 12~18개월이면 NCLC 7을 달성할 수 있습니다. 효율적인 학습 방법과 시험 전략을 정리했습니다.",
            content: `<p>프랑스어 카테고리 드로우는 CRS 400점대에서 8,500명을 초청할 만큼 <b>가장 유리한 이민 경로</b> 중 하나입니다. NCLC 7 달성은 생각보다 어렵지 않습니다.</p><h3>학습 단계별 로드맵</h3><ul><li><b>0~3개월:</b> Duolingo + YouTube 기초 강의로 A1~A2 수준 달성.</li><li><b>3~6개월:</b> Alliance Française 또는 온라인 B1 과정 수강.</li><li><b>6~12개월:</b> TEF 모의시험 반복 + 작문·말하기 집중 훈련.</li><li><b>12~18개월:</b> NCLC 7 목표 TEF Canada 응시.</li></ul><h3>시험 팁</h3><p>TEF Canada는 컴퓨터 기반 시험으로, 듣기·읽기는 객관식, 쓰기·말하기는 주관식입니다. 가장 점수를 올리기 쉬운 영역은 <b>듣기</b>이며, 말하기는 자신감 있는 발음과 구조화된 답변이 핵심입니다. CRS에서 프랑스어 보너스 최대 50점을 추가로 받을 수 있습니다.</p>`
        },
        {
            title: "AIPP에서 AIP로 — 대서양 이민 정규 프로그램 가이드",
            badge: "가이드",
            date: "2026년 1월 20일",
            summary: "파일럿에서 정규 프로그램으로 전환된 AIP. 대서양 4개 주 취업자라면 CRS 없이 PR이 가능합니다.",
            content: `<p><b>대서양 이민 프로그램(Atlantic Immigration Program, AIP)</b>은 2022년 정규 프로그램으로 전환되어 Nova Scotia, New Brunswick, PEI, Newfoundland & Labrador 4개 주에서 운영됩니다.</p><h3>자격 요건</h3><ul><li>대서양 4개 주 소재 <b>지정 고용주</b>로부터 정규직 잡오퍼.</li><li>최근 5년 내 1년 이상 경력 (NOC TEER 0~4).</li><li>영어/프랑스어 CLB 4 이상 (TEER 0~3) 또는 CLB 5 (TEER 4).</li><li>고등학교 졸업 이상 학력.</li></ul><h3>장점</h3><p>AIP는 Express Entry와 별도의 경로로, CRS 점수 경쟁 없이 PR을 취득할 수 있습니다. 처리 기간은 평균 12~18개월이며, 고용주 지정(designation) 절차가 간소화되어 중소기업도 적극 참여하고 있습니다.</p>`
        },
        {
            title: "캐나다 정착 첫 6개월 — 실전 생활 가이드",
            badge: "가이드",
            date: "2026년 2월 1일",
            summary: "SIN 발급부터 은행 개설, 건강보험, 주거, 취업까지. PR 랜딩 후 반드시 해야 할 일을 순서대로 정리했습니다.",
            content: `<p>PR 카드를 받고 캐나다에 도착한 후 <b>첫 6개월</b>은 정착의 골든 타임입니다.</p><h3>도착 후 즉시 (1~2주)</h3><ul><li><b>SIN(사회보험번호) 발급:</b> Service Canada 센터 방문 또는 온라인 신청.</li><li><b>은행 계좌 개설:</b> TD, RBC, BMO 등 주요 은행. 신분증 + PR 카드 필요.</li><li><b>핸드폰 개통:</b> Bell, Rogers, Telus 또는 알뜰폰(Freedom, Koodo).</li></ul><h3>1~3개월</h3><ul><li><b>건강보험(OHIP/MSP 등) 등록:</b> 주별로 대기 기간 상이 (온타리오 3개월 대기).</li><li><b>운전면허 전환:</b> 한국 면허 → 주별 교환 절차 확인.</li><li><b>임시 주거 → 장기 렌트:</b> 크레딧 히스토리 구축 시작.</li></ul><h3>3~6개월</h3><ul><li><b>취업 활동:</b> LinkedIn, Indeed Canada, 주정부 Job Bank 활용.</li><li><b>세금 신고 준비:</b> CRA 등록 + T4 수령 대비.</li><li><b>언어 향상:</b> LINC(무료 영어 교육) 프로그램 등록.</li></ul>`
        }
    ],
    en: [
        {
            title: "New Physician Category: First Draw Hits Historic Low CRS of 169",
            badge: "New Category",
            date: "Feb 19, 2026",
            summary: "Canada's brand-new physician category drew 391 candidates with a CRS cut-off of just 169 — the second lowest since 2021.",
            content: `<p>On February 19, 2026, IRCC held the inaugural draw for <b>Physicians with Canadian Work Experience</b>, inviting <b>391 candidates</b> with a historic CRS cut-off of just <b>169 points</b> — the second lowest on record since 2021.</p><h3>Eligible Occupations</h3><ul><li><b>General Practitioners & Family Physicians (NOC 31102):</b> Working in Canadian hospitals or clinics.</li><li><b>Specialist Physicians (NOC 31100):</b> Internal medicine, surgery, psychiatry, etc.</li><li><b>Residents (NOC 31101):</b> Physicians in Canadian medical residency programs.</li></ul><h3>Requirements</h3><p>Candidates need at least 1 year of Canadian physician experience in NOC 31100–31102 and a minimum CLB 7 in English. This draw signals IRCC's urgent push to address Canada's physician shortage. More draws under this category are expected.</p>`
        },
        {
            title: "Record-Breaking French Draw: 8,500 Invited at CRS 400",
            badge: "French Language",
            date: "Feb 6, 2026",
            summary: "The February 6 French-language draw invited a record 8,500 candidates at a CRS cut-off of 400 — over 100 points below typical general draws.",
            content: `<p>The <b>French-Language Proficiency</b> draw on February 6, 2026 set a new record with <b>8,500 invitations</b> issued at a CRS cut-off of <b>400 points</b>.</p><h3>Eligibility Requirements</h3><ul><li>TEF Canada or TCF Canada score of <b>NCLC 7+</b> in all four abilities.</li><li>English CLB 5 or higher also required.</li><li>Active Express Entry profile.</li></ul><h3>Why This Matters</h3><p>The French-language category operates on language ability alone, independent of CRS score. The massive 8,500-person draw signals a strong IRCC commitment to growing Francophone communities outside Québec. This category consistently offers the lowest cut-off scores and should be a priority for anyone who can reach NCLC 7.</p>`
        },
        {
            title: "CEC Mega Draw: 6,000 Invited — Opportunity for Canadian Work Experience Holders",
            badge: "CEC Draw",
            date: "Feb 17, 2026",
            summary: "The Canadian Experience Class draw on Feb 17 invited 6,000 candidates at CRS 508 — a major opportunity for those already working in Canada.",
            content: `<p>The <b>Canadian Experience Class (CEC)</b> draw on February 17, 2026 invited <b>6,000 candidates</b> at a CRS cut-off of <b>508 points</b>.</p><h3>CEC Requirements</h3><ul><li>At least <b>1 year</b> of skilled Canadian work experience (NOC TEER 0–3) in the past 3 years.</li><li>English CLB 7 (TEER 0–2) or CLB 5 (TEER 3) or higher.</li><li>Currently living and working legally in Canada.</li></ul><h3>Strategy</h3><p>CEC is the fastest Express Entry stream (average processing under 6 months). If you're on a work permit in Canada, check your work history start date, maximize CLB scores, and ensure your NOC code is correctly classified. The 6,000-person draw confirms CEC remains a primary pathway in 2026.</p>`
        },
        {
            title: "Healthcare & Social Services Draw: 4,000 Invited at CRS 467",
            badge: "Healthcare",
            date: "Feb 20, 2026",
            summary: "The Healthcare & Social Services category draw on Feb 20 invited 4,000 candidates at CRS 467, targeting nurses, allied health workers, and social workers.",
            content: `<p>The <b>Healthcare & Social Services</b> category draw on February 20, 2026 invited <b>4,000 candidates</b> at a CRS cut-off of <b>467 points</b>.</p><h3>Key Eligible NOC Codes</h3><ul><li><b>Registered Nurses (NOC 31301):</b> Hospital, long-term care facilities.</li><li><b>Medical Radiation Technologists (NOC 32121):</b> Diagnostic imaging.</li><li><b>Social Workers (NOC 41300):</b> Community, school, and hospital settings.</li><li><b>Pharmacists & Dental Hygienists (NOC 31120, 32111):</b> Allied health professionals.</li></ul><h3>Strategy</h3><p>The healthcare category consistently draws at lower cut-offs than general draws. With Canada's aging population, demand in this sector is structurally long-term. Foreign healthcare workers should prioritize credential recognition (provincial licensing) as the first step.</p>`
        },
        {
            title: "Two PNP Draws in February — Effective CRS ~149–189 Points",
            badge: "PNP",
            date: "Feb 16 / Feb 3, 2026",
            summary: "Two PNP draws were held in February 2026. Excluding the 600-point provincial nomination bonus, the effective CRS benchmarks were approximately 189 and 149 points.",
            content: `<p>Two <b>Provincial Nominee Program (PNP)</b> draws were held in February 2026:</p><ul><li><b>Feb 16:</b> 279 invitations · CRS cut-off 789 pts (effective ~189 excl. PNP bonus)</li><li><b>Feb 3:</b> 423 invitations · CRS cut-off 749 pts (effective ~149 excl. PNP bonus)</li></ul><h3>How PNP Works</h3><p>When a province nominates you, 600 points are automatically added to your CRS, virtually guaranteeing an ITA regardless of your base score. Each province has its own criteria — BC PNP, OINP (Ontario), and SINP (Saskatchewan) are among the most active.</p><h3>Strategy</h3><p>If you have a Canadian employer or skills matching a specific province's demand, submit a Notice of Interest (NOI) and pursue the employer-linked PNP stream. It bypasses the CRS competition entirely and is the most reliable path for those with mid-range scores.</p>`
        },
        {
            title: "2026 Category-Based Selection Guide: Which Path is Right for You?",
            badge: "Strategy Guide",
            date: "Feb 26, 2026",
            summary: "From Healthcare to French, CEC, PNP, and the new Physician category — use February's real draw data to identify your best immigration pathway.",
            content: `<p>February 2026's draw results confirm that <b>category-based selection</b> is now the dominant feature of Express Entry strategy.</p><h3>February 2026 Draw Summary</h3><ul><li><b>Physicians (Feb 19):</b> 391 invited · CRS 169 — historic low</li><li><b>French (Feb 6):</b> 8,500 invited · CRS 400 — record volume</li><li><b>CEC (Feb 17):</b> 6,000 invited · CRS 508 — Canadian work exp.</li><li><b>Healthcare (Feb 20):</b> 4,000 invited · CRS 467 — medical & social</li><li><b>PNP (Feb 16, Feb 3):</b> 279 & 423 invited · 789 & 749 pts</li></ul><h3>Choose Your Path</h3><p>① Medical professionals → Check Physician or Healthcare category eligibility first<br>② Can achieve French NCLC 7 → Prioritize French-language category<br>③ 1+ year Canadian work experience → Focus on CEC<br>④ Employer in a specific province → Pursue PNP strategy<br>Use the CRS Calculator above to find your score and run the AI route analysis.</p>`
        },
        {
            title: "Express Entry 2026 Annual Target: 110,000 Invitations — Record High",
            badge: "News",
            date: "Jan 15, 2026",
            summary: "IRCC announced a 2026 Express Entry target of 110,000 invitations — up 15% from 2025. Category-based draws will dominate.",
            content: `<p>IRCC has announced an annual target of <b>110,000 Express Entry invitations</b> for 2026, a ~15% increase over 2025.</p><h3>Key Changes</h3><ul><li><b>Category-based draws dominate:</b> Over 60% of invitations will be through category draws.</li><li><b>Fewer general draws:</b> No-program-specified draws will become less frequent.</li><li><b>New categories:</b> Physician and agriculture/food processing categories added.</li></ul><h3>Strategic Implications</h3><p>The era of competing purely on CRS score is fading. The new priority is identifying which category matches your occupation, language, and experience — then tracking that category's draw frequency and cut-off trends.</p>`
        },
        {
            title: "BC PNP Tech Stream — Expanded IT Occupation Priority",
            badge: "PNP",
            date: "Feb 10, 2026",
            summary: "BC has expanded the Tech Stream to 35 NOC codes with bi-monthly draws. Software engineers, data analysts, and UX designers are eligible.",
            content: `<p>British Columbia has expanded the <b>BC PNP Tech Stream</b> to <b>35 eligible NOC codes</b> and increased draw frequency to twice monthly in 2026.</p><h3>Key Eligible Occupations</h3><ul><li><b>Software Engineers (NOC 21231)</b></li><li><b>Database Analysts (NOC 21223)</b></li><li><b>UX/UI Designers (NOC 21233)</b></li><li><b>Information Security Analysts (NOC 21220)</b></li></ul><h3>Application Process</h3><p>Obtain a job offer of 1+ year from a BC employer, register an Express Entry profile, then apply separately to BC PNP. If nominated, 600 CRS points are added automatically. For IT professionals, this is the most practical PR pathway.</p>`
        },
        {
            title: "OINP Employer Job Offer Stream — Must-Read for Ontario Workers",
            badge: "PNP",
            date: "Feb 5, 2026",
            summary: "Ontario's OINP invited 1,200 through the Employer Job Offer stream. Ideal for those working with Toronto or Ottawa employers.",
            content: `<p>The Ontario Immigrant Nominee Program (OINP) issued <b>1,200 nomination invitations</b> through the <b>Employer Job Offer</b> stream in February 2026.</p><h3>Stream Types</h3><ul><li><b>Foreign Worker Stream:</b> Skilled workers abroad (NOC TEER 0–3).</li><li><b>International Student Stream:</b> Ontario post-secondary graduates.</li><li><b>In-Demand Skills Stream:</b> Agriculture, construction, transport (TEER 4–5).</li></ul><h3>Key Requirements</h3><p>A full-time job offer from an Ontario employer is mandatory. The offered wage must meet or exceed the median for the occupation, and the employer must meet OINP registration requirements. Nomination adds 600 CRS points.</p>`
        },
        {
            title: "French Language Strategy — Roadmap to TEF NCLC 7",
            badge: "French Language",
            date: "Jan 28, 2026",
            summary: "Even French beginners can reach NCLC 7 in 12–18 months. Here's an efficient study plan and exam strategy.",
            content: `<p>The French-language category invites 8,500+ at CRS 400, making it one of the <b>most advantageous immigration pathways</b>. Reaching NCLC 7 is more achievable than you think.</p><h3>Study Roadmap</h3><ul><li><b>Months 0–3:</b> Duolingo + YouTube basics to reach A1–A2.</li><li><b>Months 3–6:</b> Alliance Française or online B1 course.</li><li><b>Months 6–12:</b> TEF practice tests + writing/speaking intensive training.</li><li><b>Months 12–18:</b> Take TEF Canada aiming for NCLC 7.</li></ul><h3>Exam Tips</h3><p>TEF Canada is computer-based: listening and reading are multiple-choice; writing and speaking are open-ended. <b>Listening</b> is the easiest section to improve. For speaking, confident pronunciation and structured responses are key. French proficiency can add up to 50 bonus CRS points.</p>`
        },
        {
            title: "Atlantic Immigration Program (AIP) — Full Guide",
            badge: "Guide",
            date: "Jan 20, 2026",
            summary: "The AIP offers a CRS-free PR path for those working in Atlantic Canada's four provinces.",
            content: `<p>The <b>Atlantic Immigration Program (AIP)</b> became a permanent program in 2022, operating in Nova Scotia, New Brunswick, PEI, and Newfoundland & Labrador.</p><h3>Eligibility</h3><ul><li>Full-time job offer from a <b>designated employer</b> in Atlantic Canada.</li><li>1+ year work experience in the past 5 years (NOC TEER 0–4).</li><li>CLB 4+ (TEER 0–3) or CLB 5 (TEER 4).</li><li>High school diploma or equivalent.</li></ul><h3>Advantages</h3><p>AIP operates separately from Express Entry — no CRS score competition. Processing takes 12–18 months on average, and the employer designation process has been simplified, enabling more small businesses to participate.</p>`
        },
        {
            title: "First 6 Months in Canada — Practical Settlement Guide",
            badge: "Guide",
            date: "Feb 1, 2026",
            summary: "From SIN to banking, health insurance, housing, and employment — everything you need to do after PR landing, in order.",
            content: `<p>The <b>first 6 months</b> after arriving in Canada with PR status are your golden settlement window.</p><h3>Immediately (Week 1–2)</h3><ul><li><b>Get your SIN:</b> Visit Service Canada or apply online.</li><li><b>Open a bank account:</b> TD, RBC, BMO — bring ID + PR card.</li><li><b>Get a phone plan:</b> Bell, Rogers, Telus, or budget carriers (Freedom, Koodo).</li></ul><h3>Months 1–3</h3><ul><li><b>Health insurance:</b> Register for OHIP/MSP (varies by province; Ontario has 3-month wait).</li><li><b>Driver's license:</b> Check provincial exchange agreements for your country.</li><li><b>Long-term housing:</b> Start building credit history for rental applications.</li></ul><h3>Months 3–6</h3><ul><li><b>Job search:</b> LinkedIn, Indeed Canada, provincial Job Banks.</li><li><b>Tax prep:</b> Register with CRA, prepare for T4 slips.</li><li><b>Language improvement:</b> Enroll in LINC (free English classes).</li></ul>`
        }
    ]
};

const translations = {
    ko: {
        title: "캐나다 익스프레스 엔트리 가이드 & CRS 점수 계산기",
        headerSubtitle: "캐나다 익스프레스 엔트리 & CRS 종합 가이드",
        langToggle: "English",
        themeToggleLight: "☀️ 라이트 모드",
        themeToggleDark: "🌙 다크 모드",
        navHome: "홈",
        navCalculator: "CRS 계산기",
        navGuide: "EE",
        navDraws: "선발 결과",
        navPNP: "PNP",
        navArticles: "뉴스",
        navContact: "문의",
        homeH2: "Welcome to Canada",
        homeP: "AI를 활용한 정밀 CRS 분석과 함께, Express Entry, PNP, Pilot 프로그램 전반을 종합적으로 검토합니다. 개인의 조건과 상황을 기반으로 최적의 이민 전략을 설계하며, 복잡한 제도 속에서도 실행 가능한 명확한 로드맵을 제공합니다.",
        heroChip1: "✅ IRCC 공식 기준",
        heroChip2: "⚡ 실시간 CRS 계산",
        heroChip3: "🆓 무료 사용",
        jobOfferNotice: "⚠️ 2025년 3월 25일부로 잡오퍼 CRS 가산점이 폐지됐습니다. 프로그램 자격 판단용으로만 활용됩니다.",
        calcH2: "맞춤형 이민 루트 진단 & CRS 계산기",
        calcP: "기본 정보와 선호도를 입력하면 <b>Express Entry, PNP, Pilot 프로그램</b> 중 당신에게 가장 유리한 최적의 경로를 데이터 기반으로 추천해드립니다.",
        wizardSteps: ["인적정보","학력","언어","경력","가산점","선호도","시뮬레이션"],
        wizardPrev: "\u2190 이전",
        wizardNext: "다음 \u2192",
        wizardSubmit: "AI 최적 루트 분석 시작하기",
        miniScoreLabel: "CRS",
        miniScoreSuffix: "점",
        bottomStepOf: "/",
        acc1Title: "기본 인적 정보",
        acc1Sub: "Personal Information",
        labelBirthYear: "출생 연도",
        placeholderBirthYear: "예: 1992",
        labelBirthMonth: "출생 월",
        labelAge: "만 나이 (자동계산)",
        ageDefault: "출생 연도/월 입력 후 자동 계산",
        labelMarital: "결혼 여부",
        single: "미혼 (Single)",
        married: "기혼 (Married)",
        labelSpouseAcc: "배우자 동반 여부",
        yes: "예",
        no: "아니오",
        accompany: "동반 예정",
        nonAccompany: "비동반 (점수 산정 제외)",
        labelDependents: "부양 자녀 수",
        none: "없음",
        labelCanadaStatus: "현재 캐나다 체류 상태",
        statusAbroad: "없음 (해외 거주)",
        statusStudent: "학생 비자",
        statusWork: "워크퍼밋",
        statusVisitor: "방문자 비자",
        acc2Title: "학력 정보",
        acc2Sub: "Education",
        labelEdu: "최종 학력",
        eduPlaceholder: "학력을 선택하세요",
        eduHigh: "고등학교 졸업",
        edu1y: "1년 과정 대학 졸업 (1-year college)",
        edu2y: "2년 과정 대학 졸업 (2-year college)",
        eduBach: "학사 학위 (3년 이상)",
        edu2plus: "2개 이상의 학위 (하나가 3년 이상)",
        eduMast: "석사 학위",
        eduPhd: "박사 학위",
        labelEduCountry: "학위 취득 국가",
        abroad: "해외",
        canada: "캐나다",
        both: "해외+캐나다 복수",
        labelEca: "ECA 평가 완료 여부 (해외 학위)",
        labelCanStudy: "캐나다 내 학업 유무",
        canStudyNone: "없음",
        canStudy12y: "1~2년 과정 졸업",
        canStudy3y: "3년 이상 또는 석/박사 졸업",
        acc3Title: "언어 성적",
        acc3Sub: "Language Proficiency",
        labelLangTest: "영어 시험 종류",
        labelLangL: "듣기 (L)",
        labelLangR: "읽기 (R)",
        labelLangW: "쓰기 (W)",
        labelLangS: "말하기 (S)",
        labelClbRes: "CLB 자동계산 결과",
        clbDefault: "언어 점수 입력 후 자동 계산",
        labelFrench: "불어 성적 (선택)",
        labelFrenchTest: "불어 시험 종류",
        labelFrenchClb: "불어 CLB 레벨",
        frenchClb4: "CLB 4 이하",
        frenchClb56: "CLB 5~6",
        frenchClb78: "CLB 7~8",
        frenchClb9: "CLB 9 이상",
        acc4Title: "경력 정보",
        acc4Sub: "Work Experience & Job Offer",
        canExpTitle: "캐나다 내 경력",
        labelCanExpY: "캐나다 숙련직 경력 (년)",
        labelCanNoc: "캐나다 직업 NOC 코드",
        labelTeerDisplay: "TEER / 직업명 (자동표시)",
        teerDefault: "NOC 코드 입력 후 자동 표시",
        foreignExpTitle: "해외 경력",
        labelForeignExpY: "해외 숙련직 경력 (최근 10년)",
        labelForeignNoc: "해외 직업 NOC 코드",
        jobOfferTitle: "잡오퍼 (Job Offer)",
        labelHasJob: "유효한 잡오퍼 보유 여부",
        jobRegular: "있음 (일반 숙련직, TEER 1-3)",
        jobSenior: "있음 (시니어 매니저, TEER 0)",
        labelEmpPnp: "고용주 PNP 연계 가능 여부",
        acc5Title: "가산점 요소",
        acc5Sub: "Additional Points",
        labelSibling: "캐나다 내 형제/자매 거주",
        siblingYes: "예 (시민/영주권자)",
        labelPnp: "주정부 이민 (PNP) 노미네이션",
        pnpPlus600: "있음 (+600점)",
        labelTrade: "기술직 자격 보유 (FST 해당)",
        tradeYes: "예 (Red Seal 등)",
        acc6Title: "이민 선호도",
        acc6Sub: "Preferences & Profile",
        labelProvince: "선호 거주 지역",
        anyProvince: "상관 없음 (전 지역)",
        labelRural: "농촌/소도시 정착 의향",
        labelAtlantic: "아틀란틱 지역 정착 의향",
        labelOccGroup: "현재 직종 카테고리",
        occOthers: "기타 일반 숙련직",
        labelSalary: "현재 연봉 (캐나다 달러)",
        salaryNone: "정보 없음",
        labelBusiness: "비즈니스 이민 관심 여부",
        acc7Title: "전략 시뮬레이션",
        acc7Sub: "What-if Strategy Simulation",
        simP: "아래 옵션을 선택하면 분석 결과에서 시나리오별 점수 향상 시뮬레이션을 확인할 수 있습니다.",
        labelSimIelts: "IELTS 재응시 의향",
        labelSimFrench: "불어 학습 의향",
        labelSimExp: "추가 경력 계획 (1년 내)",
        labelSimSpouse: "배우자 IELTS 응시 의향",
        labelSimEmp: "고용주 변경 가능 여부",
        spouseSectionTitle: "배우자 정보 (동반하는 경우)",
        labelSpouseEdu: "배우자 최종 학력",
        labelSpouseLang: "배우자 영어 CLB 레벨",
        labelSpouseExp: "배우자 캐나다 경력",
        btnAnalyze: "AI 최적 루트 분석 시작하기",
        drawsH2: "익스프레스 엔트리 최신 선발 결과",
        drawsP: "최근 IRCC에서 발표한 익스프레스 엔트리 초청(ITA) 결과입니다. 본인의 점수와 최신 컷오프를 비교해 보세요.",
        thDate: "날짜",
        thType: "선발 유형",
        thInvitations: "초청 인원",
        thScore: "합격 점수 (CRS)",
        drawsDisclaimer: "* PNP 선발은 주정부 가산점 600점이 포함된 점수입니다.",
        pnpH2: "주정부 이민 (PNP)란?",
        pnpIntroP: "PNP(Provincial Nominee Program)는 퀘벡을 제외한 캐나다 각 주정부·준주가 자체 기준으로 이민자를 선발·추천하는 프로그램입니다. 지역 노동 시장 수요에 맞는 인재를 유치하며, 노미네이션을 받으면 연방 영주권 신청 자격이 주어집니다. 익스프레스 엔트리 연계 스트림에서는 CRS <strong>+600점</strong>이 자동 부여돼 영주권 취득에 결정적 역할을 합니다.",
        pnpEeLabel: "EE 연계형 (Enhanced Stream)",
        pnpEeLi1: "익스프레스 엔트리 풀 등록 필수",
        pnpEeLi2: "주정부 NOI → 노미네이션 수락",
        pnpEeLi3: "CRS <strong>+600점</strong> 자동 부여",
        pnpEeLi4: "처리 기간 약 <strong>6개월</strong>",
        pnpBaseLabel: "기본 스트림 (Base Stream)",
        pnpBaseLi1: "EE 풀 등록 없이 주정부에 직접 신청",
        pnpBaseLi2: "주정부 노미네이션 후 IRCC에 별도 신청",
        pnpBaseLi3: "CRS 가산점 없음",
        pnpBaseLi4: "처리 기간 약 <strong>1~2년</strong>",
        pnpProvincesH3: "주요 주별 PNP 프로그램",
        pnpQuebecNote: "* 퀘벡주는 별도의 이민 시스템(QSWP/PEQ)을 운영하며 연방 PNP와 다릅니다.",
        pnpProvON: "온타리오", pnpProvBC: "브리티시컬럼비아", pnpProvAB: "앨버타",
        pnpProvMB: "매니토바", pnpProvSK: "서스캐처원", pnpProvNS: "노바스코샤",
        pnpProvNB: "뉴브런즈윅", pnpProvNL: "뉴펀들랜드",
        pnp600Label: "EE 연계 PNP 노미네이션 수락 시",
        pnp600Desc: "CRS에 자동 부여 — 사실상 ITA 획득이 확정됩니다",
        pnpBCStream1: "BC PNP Tech (IT·헬스케어)",
        pnpOnS1: "인적 자본 우선 스트림", pnpOnS2: "석·박사 졸업자", pnpOnS3: "수요 기술 직군", pnpOnS4: "불어권 숙련 근로자",
        pnpBcS2: "국제 대학원 졸업자", pnpBcS3: "보건기관 스트림", pnpBcS4: "숙련직 / 초급직",
        pnpAbS1: "앨버타 기회 스트림", pnpAbS2: "익스프레스 엔트리 연계", pnpAbS3: "농촌 재생 스트림", pnpAbS4: "국제 졸업자",
        pnpMbS1: "매니토바 숙련 근로자", pnpMbS2: "해외 숙련 근로자", pnpMbS3: "국제 교육 스트림", pnpMbS4: "비즈니스 투자 스트림",
        pnpSkS1: "익스프레스 엔트리 연계", pnpSkS2: "수요 직종", pnpSkS3: "국제 졸업자", pnpSkS4: "서스캐처원 경험",
        pnpNsS1: "노동시장 우선 스트림", pnpNsS2: "숙련 근로자", pnpNsS3: "의사 스트림", pnpNsS4: "국제 졸업자",
        pnpNbS1: "전략 이니셔티브 스트림", pnpNbS2: "익스프레스 엔트리 연계", pnpNbS3: "대서양 이민 프로그램",
        pnpPeiS1: "익스프레스 엔트리 연계", pnpPeiS2: "핵심 근로자 파일럿", pnpPeiS3: "해외 숙련 근로자",
        pnpNlS1: "EE 연계 숙련 근로자", pnpNlS2: "숙련 근로자", pnpNlS3: "국제 졸업자", pnpNlS4: "대서양 이민 프로그램",
        pnpStrategyH3: "PNP 활용 전략",
        pnpStrat1T: "EE 풀 먼저 등록",
        pnpStrat1D: "가능한 한 빨리 EE 풀에 프로필을 등록해 주정부 NOI 수신 자격을 갖추세요. CRS가 낮더라도 특정 주정부의 타깃 직군이라면 NOI를 받을 수 있습니다.",
        pnpStrat2T: "타깃 주정부 선택",
        pnpStrat2D: "본인의 직군(NOC)·경력·거주지를 분석해 가장 매칭 가능성이 높은 주를 2~3곳 선정하고, 해당 주정부 이민 웹사이트에서 최신 Draws를 모니터링하세요.",
        pnpStrat3T: "AIP (Atlantic Immigration Program)",
        pnpStrat3D: "뉴브런즈윅·노바스코샤·PEI·뉴펀들랜드 중 하나에서 고용주 오퍼를 받으면 AIP로 영주권 신청이 가능합니다. 대서양 연안 주는 경쟁이 낮아 중간 CRS 대상자에게 유리합니다.",
        pnpStrat4T: "RNIP (Rural & Northern Immigration Pilot)",
        pnpStrat4D: "농촌·북부 지역 커뮤니티가 직접 이민자를 추천하는 파일럿 프로그램입니다. 특정 지역 거주·취업 의향이 있다면 낮은 CRS로도 영주권 취득이 가능합니다.",
        guideH2: "익스프레스 엔트리(Express Entry)란?",
        guideP1: "익스프레스 엔트리는 캐나다 정부가 숙련직 근로자의 영주권 신청을 관리하는 시스템입니다. 다음 세 가지 주요 프로그램을 포함합니다:",
        liFswp: "연방 숙련직 프로그램 (FSWP): 해외 숙련직 경력 최소 1년(최근 10년 이내), CLB 7 이상, TEER 0·1·2·3 직군. 선발 점수 67점 이상 필요.",
        liFstp: "연방 기술직 프로그램 (FSTP): 기술직 경력 최소 2년(최근 5년 이내). 취업 오퍼(1년 이상) 또는 Red Seal 등 자격증 필요. CLB 5 이상.",
        liCec: "캐나다 경험 이민 (CEC): 캐나다 내 TEER 0~3 경력 최소 1년(최근 3년 이내). TEER 0·1은 CLB 7, TEER 2·3은 CLB 5 이상.",
        clbTableH3: "언어 성적(CLB) 상세 점수표",
        clbTableP: "캐나다 이민에서 가장 널리 사용되는 <strong>IELTS General Training</strong>과 <strong>CELPIP General</strong> 점수의 CLB 변환표입니다. 익스프레스 엔트리 고득점을 위해서는 <strong>CLB 9 이상</strong>을 목표로 하는 것이 좋습니다.",
        thClb: "CLB 레벨",
        thTest: "시험 종류",
        howToRaiseH3: "CRS 점수를 높이는 방법은?",
        howToRaiseP: "아래 전략을 통해 CRS 점수를 높이고 초청 가능성을 극대화하세요.",
        liRaiseLang: "언어 점수 향상 (CLB 9·10): CLB 9 또는 10 달성 시 각 능력별 점수와 스킬 전이 항목이 함께 올라 CRS가 40–70점 상승합니다.",
        liRaiseFrench: "프랑스어 추가 (CLB 7+): 영어 외 프랑스어 CLB 7 이상 시 최대 50점이 추가되며 불어 카테고리 드로우 자격도 얻습니다.",
        liRaisePnp: "PNP 노미네이션: EE 연계 PNP 노미네이션 수락 시 +600점이 자동 부여됩니다.",
        liRaiseCanExp: "캐나다 경력 쌓기: NOC TEER 0–3, 풀타임 경력이 쌓이면 핵심 인적 자본과 스킬 전이 합산 최대 80점이 추가됩니다.",
        liRaiseForeignExp: "해외 경력 쌓기: 관련 직종 3년 이상의 해외 경력은 스킬 전이 항목으로 최대 50점을 받을 수 있습니다.",
        liRaiseEdu: "학위 추가: 석·박사 학위는 핵심 인적 자본(최대 150점)과 스킬 전이(최대 50점) 합산 최대 200점 상승이 가능합니다.",
        liRaiseOther: "캐나다 학력·가족 가산점: 캐나다 내 1년 이상 학위 취득 시 +30점, 캐나다 시민권자·영주권자 형제·자매 거주 시 +15점이 추가됩니다.",
        articlesH2: "최신 이민 뉴스 및 가이드",
        filterAll: "전체",
        filterNews: "뉴스",
        filterPNP: "PNP",
        filterCEC: "CEC",
        filterFrench: "프랑스어",
        filterHealthcare: "헬스케어",
        filterGuide: "가이드",
        blogSearchPlaceholder: "기사 검색...",
        blogLoadMore: "더 보기",
        blogEmpty: "검색 결과가 없습니다.",
        nlH2: "최신 이민 소식을 놓치지 마세요",
        nlP: "Express Entry 선발 결과, 정책 변경, PNP 소식을 이메일로 받아보세요.",
        nlPlaceholder: "이메일 입력",
        nlBtn: "구독하기",
        nlDisclaimer: "스팸 없이 주요 소식만 전달합니다.",
        nlSuccess: "구독이 완료되었습니다! 감사합니다.",
        contactH2: "문의 및 제휴",
        contactP: "협업이나 특정 질문이 있으신가요? 저희에게 연락주세요!",
        labelName: "성함:",
        namePlaceholder: "홍길동",
        labelEmail: "이메일:",
        labelMessage: "메시지:",
        messagePlaceholder: "내용을 입력해주세요...",
        btnSubmit: "메시지 전송",
        footerRights: `© ${CURRENT_YEAR} Canada PR Builder. All rights reserved.`,
        footerPrivacy: "개인정보처리방침",
        footerContact: "고객센터"
    },
    en: {
        title: "Canada Express Entry Guide & CRS Calculator",
        headerSubtitle: "Canada Express Entry & CRS Comprehensive Guide",
        langToggle: "한글",
        themeToggleLight: "☀️ Light Mode",
        themeToggleDark: "🌙 Dark Mode",
        navHome: "Home",
        navCalculator: "CRS Calculator",
        navGuide: "EE",
        navDraws: "Draws",
        navPNP: "PNP",
        navArticles: "News",
        navContact: "Contact",
        homeH2: "Welcome to Canada",
        homeP: "Powered by AI-driven CRS analysis, we take a comprehensive look across Express Entry, PNP, and Pilot programs. We design the optimal immigration strategy based on your personal profile and circumstances — delivering a clear, actionable roadmap through even the most complex immigration systems.",
        heroChip1: "✅ IRCC Official Standard",
        heroChip2: "⚡ Real-time CRS Score",
        heroChip3: "🆓 Free to Use",
        jobOfferNotice: "⚠️ As of March 25, 2025, CRS points for job offers have been eliminated. Job offer information is used only for program eligibility purposes.",
        calcH2: "Personalized Immigration Path Diagnosis & CRS Calculator",
        calcP: "Enter your information and preferences to get data-driven recommendations for <b>Express Entry, PNP, and Pilot programs</b>.",
        wizardSteps: ["Personal","Education","Language","Work","Bonus","Preferences","Simulation"],
        wizardPrev: "\u2190 Previous",
        wizardNext: "Next \u2192",
        wizardSubmit: "Start AI Optimal Path Analysis",
        miniScoreLabel: "CRS",
        miniScoreSuffix: "pts",
        bottomStepOf: "/",
        acc1Title: "Personal Information",
        acc1Sub: "Basic Info",
        labelBirthYear: "Birth Year",
        placeholderBirthYear: "e.g. 1992",
        labelBirthMonth: "Birth Month",
        labelAge: "Age (Auto-calculated)",
        ageDefault: "Calculated after entering birth year/month",
        labelMarital: "Marital Status",
        single: "Single",
        married: "Married",
        labelSpouseAcc: "Spouse Accompanying",
        yes: "Yes",
        no: "No",
        accompany: "Accompanying",
        nonAccompany: "Non-accompanying (Excl. from score)",
        labelDependents: "Number of Dependents",
        none: "None",
        labelCanadaStatus: "Current Status in Canada",
        statusAbroad: "None (Living Abroad)",
        statusStudent: "Student Visa",
        statusWork: "Work Permit",
        statusVisitor: "Visitor Visa",
        acc2Title: "Education",
        acc2Sub: "Academic Background",
        labelEdu: "Highest Education",
        eduPlaceholder: "Select Education",
        eduHigh: "High School Graduation",
        edu1y: "1-year post-secondary program",
        edu2y: "2-year post-secondary program",
        eduBach: "Bachelor's degree (3+ years)",
        edu2plus: "Two or more degrees (One must be 3+ years)",
        eduMast: "Master's degree",
        eduPhd: "Doctoral degree (PhD)",
        labelEduCountry: "Country of Study",
        abroad: "Abroad",
        canada: "Canada",
        both: "Both (Abroad + Canada)",
        labelEca: "ECA Completed? (For foreign degrees)",
        labelCanStudy: "Study in Canada",
        canStudyNone: "None",
        canStudy12y: "1-2 year program graduation",
        canStudy3y: "3+ years or Master/PhD graduation",
        acc3Title: "Language Proficiency",
        acc3Sub: "English & French Scores",
        labelLangTest: "English Test Type",
        labelLangL: "Listening (L)",
        labelLangR: "Reading (R)",
        labelLangW: "Writing (W)",
        labelLangS: "Speaking (S)",
        labelClbRes: "CLB Auto-calculation",
        clbDefault: "Calculated after entering language scores",
        labelFrench: "French Scores (Optional)",
        labelFrenchTest: "French Test Type",
        labelFrenchClb: "French CLB Level",
        frenchClb4: "CLB 4 or less",
        frenchClb56: "CLB 5~6",
        frenchClb78: "CLB 7~8",
        frenchClb9: "CLB 9 or higher",
        acc4Title: "Work Experience & Job Offer",
        acc4Sub: "Professional Experience",
        canExpTitle: "Work Experience in Canada",
        labelCanExpY: "Canadian Skilled Work Exp (Years)",
        labelCanNoc: "Canadian Job NOC Code",
        labelTeerDisplay: "TEER / Job Title (Auto-display)",
        teerDefault: "Displayed after entering NOC code",
        foreignExpTitle: "Foreign Work Experience",
        labelForeignExpY: "Foreign Skilled Work Exp (Last 10y)",
        labelForeignNoc: "Foreign Job NOC Code",
        jobOfferTitle: "Job Offer",
        labelHasJob: "Valid Job Offer?",
        jobRegular: "Yes (Regular skilled, TEER 1-3)",
        jobSenior: "Yes (Senior Manager, TEER 0)",
        labelEmpPnp: "Employer PNP Link Possible?",
        acc5Title: "Additional Points",
        acc5Sub: "Bonus Factors",
        labelSibling: "Sibling in Canada",
        siblingYes: "Yes (Citizen/PR)",
        labelPnp: "PNP Nomination",
        pnpPlus600: "Yes (+600 points)",
        labelTrade: "Certificate of Qualification (FST)",
        tradeYes: "Yes (Red Seal, etc.)",
        acc6Title: "Preferences & Profile",
        acc6Sub: "Personal Preferences",
        labelProvince: "Preferred Province",
        anyProvince: "No preference (All regions)",
        labelRural: "Willing to settle in Rural/Small towns?",
        labelAtlantic: "Willing to settle in Atlantic regions?",
        labelOccGroup: "Occupation Category",
        occOthers: "Other Skilled Occupations",
        labelSalary: "Current Annual Salary (CAD)",
        salaryNone: "No info",
        labelBusiness: "Interested in Business Immigration?",
        acc7Title: "Strategy Simulation",
        acc7Sub: "What-if Scenarios",
        simP: "Select options below to see how your score could improve in the analysis report.",
        labelSimIelts: "Willing to retake IELTS?",
        labelSimFrench: "Willing to study French?",
        labelSimExp: "Plan for more work exp? (Within 1y)",
        labelSimSpouse: "Spouse willing to take IELTS?",
        labelSimEmp: "Possible to change employer?",
        spouseSectionTitle: "Spouse Information (If accompanying)",
        labelSpouseEdu: "Spouse Highest Education",
        labelSpouseLang: "Spouse English CLB Level",
        labelSpouseExp: "Spouse Canadian Work Exp",
        btnAnalyze: "Start AI Optimal Path Analysis",
        drawsH2: "Latest Express Entry Draw Results",
        drawsP: "Recent EE Invitation to Apply (ITA) results from IRCC. Compare your score with the latest cut-offs.",
        thDate: "Date",
        thType: "Draw Type",
        thInvitations: "Invitations",
        thScore: "Cut-off Score (CRS)",
        drawsDisclaimer: "* PNP draws include the 600-point provincial nomination bonus.",
        pnpH2: "Provincial Nominee Program (PNP)",
        pnpIntroP: "The PNP allows Canadian provinces and territories (except Quebec) to nominate immigrants who meet their specific labour market needs. Once nominated, you may apply for permanent residence. Through Express Entry-linked Enhanced Streams, a PNP nomination automatically adds <strong>+600 CRS points</strong>, virtually guaranteeing an ITA.",
        pnpEeLabel: "EE-Linked (Enhanced Stream)",
        pnpEeLi1: "Must have an active Express Entry profile",
        pnpEeLi2: "Province issues NOI → Accept nomination",
        pnpEeLi3: "Automatic CRS <strong>+600 points</strong>",
        pnpEeLi4: "Processing time approx. <strong>6 months</strong>",
        pnpBaseLabel: "Base Stream",
        pnpBaseLi1: "Apply directly to the province (no EE profile needed)",
        pnpBaseLi2: "Provincial nomination → Separate IRCC application",
        pnpBaseLi3: "No CRS bonus points",
        pnpBaseLi4: "Processing time approx. <strong>1–2 years</strong>",
        pnpProvincesH3: "PNP Programs by Province",
        pnpQuebecNote: "* Quebec operates its own immigration system (QSWP/PEQ) and is separate from the federal PNP.",
        pnpProvON: "Ontario", pnpProvBC: "British Columbia", pnpProvAB: "Alberta",
        pnpProvMB: "Manitoba", pnpProvSK: "Saskatchewan", pnpProvNS: "Nova Scotia",
        pnpProvNB: "New Brunswick", pnpProvNL: "Newfoundland & Labrador",
        pnp600Label: "When you accept an EE-linked PNP nomination",
        pnp600Desc: "Points are automatically added to your CRS — virtually guaranteeing an ITA",
        pnpBCStream1: "BC PNP Tech (IT & Healthcare)",
        pnpOnS1: "Human Capital Priorities", pnpOnS2: "Masters / PhD Graduate", pnpOnS3: "In-Demand Skills", pnpOnS4: "French-Speaking Skilled Worker",
        pnpBcS2: "International Post-Graduate", pnpBcS3: "Health Authority", pnpBcS4: "Skilled Worker / Entry Level",
        pnpAbS1: "Alberta Opportunity Stream", pnpAbS2: "Express Entry Stream", pnpAbS3: "Rural Renewal Stream", pnpAbS4: "International Graduate",
        pnpMbS1: "Skilled Workers in Manitoba", pnpMbS2: "Skilled Workers Overseas", pnpMbS3: "International Education Stream", pnpMbS4: "Business Investor Stream",
        pnpSkS1: "Express Entry", pnpSkS2: "Occupations In-Demand", pnpSkS3: "International Graduate", pnpSkS4: "Saskatchewan Experience",
        pnpNsS1: "Labour Market Priorities", pnpNsS2: "Skilled Worker", pnpNsS3: "Physician Stream", pnpNsS4: "International Graduate",
        pnpNbS1: "Strategic Initiative Stream", pnpNbS2: "Express Entry", pnpNbS3: "Atlantic Immigration Program",
        pnpPeiS1: "Express Entry", pnpPeiS2: "Critical Worker Pilot", pnpPeiS3: "Skilled Worker Outside Canada",
        pnpNlS1: "Express Entry Skilled Worker", pnpNlS2: "Skilled Worker", pnpNlS3: "International Graduate", pnpNlS4: "Atlantic Immigration Program",
        pnpStrategyH3: "PNP Strategy Tips",
        pnpStrat1T: "Register in Express Entry First",
        pnpStrat1D: "Create your EE profile as early as possible to become eligible for provincial Notices of Interest (NOIs). Even with a lower CRS, you may receive an NOI if your occupation matches a province's target.",
        pnpStrat2T: "Target the Right Province",
        pnpStrat2D: "Analyze your NOC, experience, and location to shortlist 2–3 provinces with the best match. Monitor each province's latest draws on their official immigration website.",
        pnpStrat3T: "AIP (Atlantic Immigration Program)",
        pnpStrat3D: "If you secure a job offer in NB, NS, PEI, or NL, the AIP can be a viable path. Atlantic provinces have less competition and can be ideal for mid-CRS candidates.",
        pnpStrat4T: "RNIP (Rural & Northern Immigration Pilot)",
        pnpStrat4D: "Smaller communities in rural or northern regions directly recommend immigrants. If you're willing to settle in a specific region, RNIP can lead to PR even with a modest CRS score.",
        guideH2: "What is Express Entry?",
        guideP1: "Express Entry is a system used by the Canadian government to manage applications for permanent residence from skilled workers. It includes three main programs:",
        liFswp: "Federal Skilled Worker Program (FSWP): 1+ yr of foreign skilled work experience (TEER 0–3) in the past 10 years. CLB 7+, and must score 67+ on selection factors.",
        liFstp: "Federal Skilled Trades Program (FSTP): 2+ yrs of skilled trade experience (TEER 2–3) in the past 5 years. Requires a job offer (1+ yr) or a trade certificate (e.g. Red Seal). CLB 5+.",
        liCec: "Canadian Experience Class (CEC): 1+ yr of skilled work experience in Canada (TEER 0–3) in the past 3 years. CLB 7 for TEER 0/1, CLB 5 for TEER 2/3.",
        clbTableH3: "Detailed CLB Score Table",
        clbTableP: "CLB conversion table for <strong>IELTS General Training</strong> and <strong>CELPIP General</strong>. Aiming for <strong>CLB 9 or higher</strong> is recommended for high EE scores.",
        thClb: "CLB Level",
        thTest: "Test Type",
        howToRaiseH3: "How to Increase Your CRS Score?",
        howToRaiseP: "Use these strategies to boost your CRS score and maximize your chances of receiving an ITA.",
        liRaiseLang: "Language Score (CLB 9–10): Reaching CLB 9 or 10 raises per-ability points and skill transferability together, commonly adding 40–70 pts to your CRS.",
        liRaiseFrench: "Add French (CLB 7+): Achieving French CLB 7 or higher adds up to 50 pts and grants eligibility for French-language category draws.",
        liRaisePnp: "PNP Nomination: Accepting an EE-linked PNP nomination automatically adds +600 pts to your CRS.",
        liRaiseCanExp: "Canadian Work Experience: NOC TEER 0–3 full-time experience adds up to 80 pts combined via core human capital and skill transferability.",
        liRaiseForeignExp: "Foreign Work Experience: 3+ years of relevant foreign experience can earn up to 50 pts through the skill transferability factor.",
        liRaiseEdu: "Higher Education: A Master's or PhD adds up to 150 pts in core human capital and up to 50 pts in skill transferability — a total of up to 200 pts above a Bachelor's.",
        liRaiseOther: "Canadian Study & Family: Canadian degree (1+ year) adds +30 pts; a sibling who is a Canadian citizen or PR adds +15 pts.",
        articlesH2: "Latest Immigration News & Guides",
        filterAll: "All",
        filterNews: "News",
        filterPNP: "PNP",
        filterCEC: "CEC",
        filterFrench: "French",
        filterHealthcare: "Healthcare",
        filterGuide: "Guide",
        blogSearchPlaceholder: "Search articles...",
        blogLoadMore: "Load More",
        blogEmpty: "No articles found.",
        nlH2: "Don't Miss the Latest Immigration Updates",
        nlP: "Get Express Entry draw results, policy changes, and PNP news delivered to your inbox.",
        nlPlaceholder: "Enter your email",
        nlBtn: "Subscribe",
        nlDisclaimer: "Only important updates, no spam.",
        nlSuccess: "You're subscribed! Thank you.",
        contactH2: "Contact & Partnership",
        contactP: "Have questions or interested in partnership? Contact us!",
        labelName: "Name:",
        namePlaceholder: "John Doe",
        labelEmail: "Email:",
        labelMessage: "Message:",
        messagePlaceholder: "Enter your message here...",
        btnSubmit: "Send Message",
        footerRights: `© ${CURRENT_YEAR} Canada PR Builder. All rights reserved.`,
        footerPrivacy: "Privacy Policy",
        footerContact: "Support Center"
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    const t = translations[lang];

    // Page Title
    document.title = t.title;

    // Header
    document.querySelector('header h1').textContent = "Canada PR Builder";
    document.getElementById('header-subtitle').textContent = t.headerSubtitle;
    document.getElementById('langToggle').textContent = t.langToggle;
    const themeToggle = document.getElementById('themeToggle');
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    themeToggle.textContent = isDark ? t.themeToggleLight : t.themeToggleDark;

    // Navigation
    const navLinks = document.querySelectorAll('#mainNav a');
    navLinks[0].textContent = t.navHome;
    navLinks[1].textContent = t.navCalculator;
    navLinks[2].textContent = t.navGuide;
    navLinks[3].textContent = t.navDraws;
    navLinks[4].textContent = t.navPNP;
    navLinks[5].textContent = t.navArticles;
    navLinks[6].textContent = t.navContact;

    // Home
    document.getElementById('homeH2').textContent = t.homeH2;
    document.getElementById('homeP').textContent = t.homeP;
    document.getElementById('heroChip1').textContent = t.heroChip1;
    document.getElementById('heroChip2').textContent = t.heroChip2;
    document.getElementById('heroChip3').textContent = t.heroChip3;

    // Calculator
    document.querySelector('#calculator h2').textContent = t.calcH2;
    document.querySelector('#calculator > p').innerHTML = t.calcP;
    document.getElementById('jobOfferNotice').textContent = t.jobOfferNotice;

    // Wizard step labels & nav buttons
    document.querySelectorAll('.wizard-step .step-label').forEach((el, i) => {
        if (t.wizardSteps[i]) el.textContent = t.wizardSteps[i];
    });
    updateBottomNav();

    // Accordion 1
    document.querySelector('#acc1 .acc-header div > div').textContent = t.acc1Title;
    document.querySelector('#acc1 .acc-sub').textContent = t.acc1Sub;
    const acc1Labels = document.querySelectorAll('#acc-body1 .input-group label');
    acc1Labels[0].textContent = t.labelBirthYear;
    acc1Labels[1].textContent = t.labelBirthMonth;
    acc1Labels[2].textContent = t.labelAge;
    acc1Labels[3].textContent = t.labelMarital;
    acc1Labels[4].textContent = t.labelSpouseAcc;
    acc1Labels[5].textContent = t.labelDependents;
    acc1Labels[6].textContent = t.labelCanadaStatus;
    
    document.getElementById('birthYear').placeholder = t.placeholderBirthYear;
    document.getElementById('ageDisplay').textContent = t.ageDefault;
    
    const maritalSelect = document.getElementById('maritalStatus');
    maritalSelect.options[0].textContent = t.single;
    maritalSelect.options[1].textContent = t.married;
    
    const spouseAccSelect = document.getElementById('spouseAccompany');
    spouseAccSelect.options[0].textContent = t.accompany;
    spouseAccSelect.options[1].textContent = t.nonAccompany;

    const canadaStatusSelect = document.getElementById('canadaStatus');
    canadaStatusSelect.options[0].textContent = t.statusAbroad;
    canadaStatusSelect.options[1].textContent = t.statusStudent;
    canadaStatusSelect.options[2].textContent = t.statusWork;
    canadaStatusSelect.options[3].textContent = t.statusVisitor;

    const birthMonthSel = document.getElementById('birthMonth');
    const monthNames = lang === 'ko'
        ? ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
        : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    monthNames.forEach((m, i) => { if (birthMonthSel.options[i]) birthMonthSel.options[i].textContent = m; });

    const depSel = document.getElementById('dependents');
    const depOpts = lang === 'ko' ? ['없음','1명','2명','3명 이상'] : ['None','1','2','3 or more'];
    depOpts.forEach((text, i) => { if (depSel.options[i]) depSel.options[i].textContent = text; });

    // Accordion 2
    document.querySelector('#acc2 .acc-header div > div').textContent = t.acc2Title;
    document.querySelector('#acc2 .acc-sub').textContent = t.acc2Sub;
    const acc2Labels = document.querySelectorAll('#acc-body2 .input-group label');
    acc2Labels[0].textContent = t.labelEdu;
    acc2Labels[1].textContent = t.labelEduCountry;
    acc2Labels[2].textContent = t.labelEca;
    acc2Labels[3].textContent = t.labelCanStudy;
    
    const eduSelect = document.getElementById('education');
    eduSelect.options[0].textContent = t.eduPlaceholder;
    eduSelect.options[1].textContent = t.eduHigh;
    eduSelect.options[2].textContent = t.edu1y;
    eduSelect.options[3].textContent = t.edu2y;
    eduSelect.options[4].textContent = t.eduBach;
    eduSelect.options[5].textContent = t.edu2plus;
    eduSelect.options[6].textContent = t.eduMast;
    eduSelect.options[7].textContent = t.eduPhd;

    const eduCountrySelect = document.getElementById('eduCountry');
    eduCountrySelect.options[0].textContent = t.abroad;
    eduCountrySelect.options[1].textContent = t.canada;
    eduCountrySelect.options[2].textContent = t.both;

    const ecaDoneSelect = document.getElementById('ecaDone');
    ecaDoneSelect.options[0].textContent = t.no;
    ecaDoneSelect.options[1].textContent = t.yes;

    const canadianStudySelect = document.getElementById('canadianStudy');
    canadianStudySelect.options[0].textContent = t.canStudyNone;
    canadianStudySelect.options[1].textContent = t.canStudy12y;
    canadianStudySelect.options[2].textContent = t.canStudy3y;

    // Accordion 3
    document.querySelector('#acc3 .acc-header div > div').textContent = t.acc3Title;
    document.querySelector('#acc3 .acc-sub').textContent = t.acc3Sub;
    const acc3Labels = document.querySelectorAll('#acc-body3 .calc-grid .input-group label');
    acc3Labels[0].textContent = t.labelLangTest;
    // Labels for individual language parts are updated via updateLangPlaceholders()
    acc3Labels[5].textContent = t.labelClbRes;
    document.getElementById('clbDisplay').textContent = t.clbDefault;
    document.querySelector('#acc-body3 div[style*="dashed"] div').textContent = t.labelFrench;
    const frenchLabels = document.querySelectorAll('#acc-body3 div[style*="dashed"] .input-group label');
    frenchLabels[0].textContent = t.labelFrenchTest;
    frenchLabels[1].textContent = t.labelFrenchClb;
    
    const frenchTestSelect = document.getElementById('frenchTest');
    frenchTestSelect.options[0].textContent = t.none;
    
    const frenchClbSelect = document.getElementById('frenchCLB');
    frenchClbSelect.options[0].textContent = t.frenchClb4;
    frenchClbSelect.options[1].textContent = t.frenchClb56;
    frenchClbSelect.options[2].textContent = t.frenchClb78;
    frenchClbSelect.options[3].textContent = t.frenchClb9;

    // Accordion 4
    document.querySelector('#acc4 .acc-header div > div').textContent = t.acc4Title;
    document.querySelector('#acc4 .acc-sub').textContent = t.acc4Sub;
    const expHeads = document.querySelectorAll('#acc-body4 > div[style*="font-weight:600"]');
    expHeads[0].textContent = t.canExpTitle;
    expHeads[1].textContent = t.foreignExpTitle;
    expHeads[2].textContent = t.jobOfferTitle;
    
    const acc4Labels = document.querySelectorAll('#acc-body4 .input-group label');
    acc4Labels[0].textContent = t.labelCanExpY;
    acc4Labels[1].textContent = t.labelCanNoc;
    acc4Labels[2].textContent = t.labelTeerDisplay;
    acc4Labels[3].textContent = t.labelForeignExpY;
    acc4Labels[4].textContent = t.labelForeignNoc;
    acc4Labels[5].textContent = t.labelTeerDisplay;
    acc4Labels[6].textContent = t.labelHasJob;
    acc4Labels[7].textContent = t.labelEmpPnp;
    
    document.getElementById('canadianTEER').textContent = t.teerDefault;
    document.getElementById('foreignTEER').textContent = t.teerDefault;

    const canExpYSelect = document.getElementById('canadianExpYears');
    const canExpOpts = lang === 'ko'
        ? ['없음','1년','2년','3년','4년','5년 이상']
        : ['None','1 year','2 years','3 years','4 years','5+ years'];
    canExpOpts.forEach((text, i) => { if (canExpYSelect.options[i]) canExpYSelect.options[i].textContent = text; });

    const forExpYSelect = document.getElementById('foreignExpYears');
    const forExpOpts = lang === 'ko' ? ['없음','1~2년','3년 이상'] : ['None','1-2 years','3+ years'];
    forExpOpts.forEach((text, i) => { if (forExpYSelect.options[i]) forExpYSelect.options[i].textContent = text; });

    const hasJobSelect = document.getElementById('hasJobOffer');
    hasJobSelect.options[0].textContent = t.no;
    hasJobSelect.options[1].textContent = t.jobRegular;
    hasJobSelect.options[2].textContent = t.jobSenior;

    const empPnpSelect = document.getElementById('employerPNP');
    empPnpSelect.options[0].textContent = t.no;
    empPnpSelect.options[1].textContent = t.yes;

    const nocSearchPh = lang === 'ko' ? '직업명/키워드 입력 (영문, 예: Software Engineer)' : 'Type job title/keyword (e.g. Software Engineer)';
    document.getElementById('canadianNOCSearch').placeholder = nocSearchPh;
    document.getElementById('foreignNOCSearch').placeholder = nocSearchPh;

    // Accordion 5
    document.querySelector('#acc5 .acc-header div > div').textContent = t.acc5Title;
    document.querySelector('#acc5 .acc-sub').textContent = t.acc5Sub;
    const acc5Labels = document.querySelectorAll('#acc-body5 .input-group label');
    acc5Labels[0].textContent = t.labelSibling;
    acc5Labels[1].textContent = t.labelPnp;
    acc5Labels[2].textContent = t.labelTrade;
    
    const sibSelect = document.getElementById('sibling');
    sibSelect.options[0].textContent = t.no;
    sibSelect.options[1].textContent = t.siblingYes;

    const pnpSelect = document.getElementById('hasPNP');
    pnpSelect.options[0].textContent = t.none;
    pnpSelect.options[1].textContent = t.pnpPlus600;

    const tradeSelect = document.getElementById('tradeOccupation');
    tradeSelect.options[0].textContent = t.no;
    tradeSelect.options[1].textContent = t.tradeYes;

    // Accordion 6
    document.querySelector('#acc6 .acc-header div > div').textContent = t.acc6Title;
    document.querySelector('#acc6 .acc-sub').textContent = t.acc6Sub;
    const acc6Labels = document.querySelectorAll('#acc-body6 .input-group label');
    acc6Labels[0].textContent = t.labelProvince;
    acc6Labels[1].textContent = t.labelRural;
    acc6Labels[2].textContent = t.labelAtlantic;
    acc6Labels[3].textContent = t.labelOccGroup;
    acc6Labels[4].textContent = t.labelSalary;
    acc6Labels[5].textContent = t.labelBusiness;
    
    const provinceSelect = document.getElementById('targetProvince');
    const provinceOpts = lang === 'ko'
        ? ['상관 없음 (전 지역)','온타리오 (OINP)','브리티시 컬럼비아 (BC PNP)','알버타 (AAIP)',
           '사스카추완 (SINP)','마니토바 (MPNP)','퀘벡 (PEQ/QSWP)','노바스코샤 (NSNP)',
           '뉴브런즈윅 (NBPNP)','PEI (PEI PNP)','뉴펀들랜드 (NLPNP)','아틀란틱 지역 (AIP)','외곽 지역 (RNIP/RCIP)']
        : ['No preference (All regions)','Ontario (OINP)','British Columbia (BC PNP)','Alberta (AAIP)',
           'Saskatchewan (SINP)','Manitoba (MPNP)','Quebec (PEQ/QSWP)','Nova Scotia (NSNP)',
           'New Brunswick (NBPNP)','PEI (PEI PNP)','Newfoundland (NLPNP)','Atlantic Region (AIP)','Rural & Remote (RNIP/RCIP)'];
    provinceOpts.forEach((text, i) => { if (provinceSelect.options[i]) provinceSelect.options[i].textContent = text; });

    const occGroupSelect = document.getElementById('occupationGroup');
    const occOpts = lang === 'ko'
        ? ['기타 일반 숙련직','의료/보건 (Healthcare)','IT/공학 (STEM)','기술 생산직 (Trades)',
           '운송 (Transport)','농축산 (Agriculture)','교육 (Education)','불어 우수자 (French)']
        : ['Other Skilled Occupations','Healthcare','STEM / IT & Engineering','Skilled Trades',
           'Transport','Agriculture','Education','French Language Proficiency'];
    occOpts.forEach((text, i) => { if (occGroupSelect.options[i]) occGroupSelect.options[i].textContent = text; });
    
    const ruralSel = document.getElementById('ruralWilling');
    ruralSel.options[0].textContent = t.no; ruralSel.options[1].textContent = t.yes;
    const atlanticSel = document.getElementById('atlanticWilling');
    atlanticSel.options[0].textContent = t.no; atlanticSel.options[1].textContent = t.yes;
    const businessSel = document.getElementById('businessIntent');
    businessSel.options[0].textContent = t.no; businessSel.options[1].textContent = t.yes;

    const salarySelect = document.getElementById('currentSalary');
    const salaryOpts = lang === 'ko'
        ? ['정보 없음','CA$40,000 미만','CA$40,000~60,000','CA$60,000~80,000','CA$80,000~100,000','CA$100,000 이상']
        : ['No info','Under CA$40,000','CA$40,000~60,000','CA$60,000~80,000','CA$80,000~100,000','CA$100,000+'];
    salaryOpts.forEach((text, i) => { if (salarySelect.options[i]) salarySelect.options[i].textContent = text; });

    // Accordion 7
    document.querySelector('#acc7 .acc-header div > div').textContent = t.acc7Title;
    document.querySelector('#acc7 .acc-sub').textContent = t.acc7Sub;
    document.querySelector('#acc-body7 p').textContent = t.simP;
    const acc7Labels = document.querySelectorAll('#acc-body7 .input-group label');
    acc7Labels[0].textContent = t.labelSimIelts;
    acc7Labels[1].textContent = t.labelSimFrench;
    acc7Labels[2].textContent = t.labelSimExp;
    acc7Labels[3].textContent = t.labelSimSpouse;
    acc7Labels[4].textContent = t.labelSimEmp;

    ['willingRetakeIELTS','canStudyFrench','planMoreWork','spouseIELTS','canChangeEmployer'].forEach(id => {
        const sel = document.getElementById(id);
        if (sel) { sel.options[0].textContent = t.no; sel.options[1].textContent = t.yes; }
    });

    // Spouse Section
    document.querySelector('#spouseSection h3').textContent = t.spouseSectionTitle;
    const spouseLabels = document.querySelectorAll('#spouseSection .input-group label');
    spouseLabels[0].textContent = t.labelSpouseEdu;
    spouseLabels[1].textContent = t.labelSpouseLang;
    spouseLabels[2].textContent = t.labelSpouseExp;

    const spouseEduSel = document.getElementById('spouseEducation');
    const spouseEduOpts = lang === 'ko'
        ? ['선택 안 함','고등학교 졸업','1년 과정 대학','2년 과정 대학','학사 학위','석사/박사 학위']
        : ['Not selected','High School','1-year college','2-year college',"Bachelor's","Master's / PhD"];
    spouseEduOpts.forEach((text, i) => { if (spouseEduSel.options[i]) spouseEduSel.options[i].textContent = text; });

    const spouseLangSel = document.getElementById('spouseLanguage');
    spouseLangSel.options[0].textContent = lang === 'ko' ? '선택 안 함 / CLB 4 이하' : 'Not selected / CLB 4 or less';
    spouseLangSel.options[5].textContent = lang === 'ko' ? 'CLB 9 이상' : 'CLB 9 or higher';

    const spouseExpSel = document.getElementById('spouseCanadianExp');
    const spouseExpOpts = lang === 'ko'
        ? ['없음','1년','2년','3년','4년','5년 이상']
        : ['None','1 year','2 years','3 years','4 years','5+ years'];
    spouseExpOpts.forEach((text, i) => { if (spouseExpSel.options[i]) spouseExpSel.options[i].textContent = text; });
    
    // Latest Draws Section
    document.getElementById('drawsH2').textContent = t.drawsH2;
    document.getElementById('drawsDesc').textContent = t.drawsP;
    renderDrawsTable(lastDrawUserCRS);

    // PNP Guide Section
    document.querySelector('#pnp-guide h2').textContent = t.pnpH2;
    document.querySelector('#pnpIntroP').innerHTML = t.pnpIntroP;
    document.querySelector('#pnpEeLabel').textContent = t.pnpEeLabel;
    document.querySelector('#pnpEeLi1').innerHTML = t.pnpEeLi1;
    document.querySelector('#pnpEeLi2').innerHTML = t.pnpEeLi2;
    document.querySelector('#pnpEeLi3').innerHTML = t.pnpEeLi3;
    document.querySelector('#pnpEeLi4').innerHTML = t.pnpEeLi4;
    document.querySelector('#pnpBaseLabel').textContent = t.pnpBaseLabel;
    document.querySelector('#pnpBaseLi1').innerHTML = t.pnpBaseLi1;
    document.querySelector('#pnpBaseLi2').innerHTML = t.pnpBaseLi2;
    document.querySelector('#pnpBaseLi3').innerHTML = t.pnpBaseLi3;
    document.querySelector('#pnpBaseLi4').innerHTML = t.pnpBaseLi4;
    document.querySelector('#pnp600Label').textContent = t.pnp600Label;
    document.querySelector('#pnp600Desc').textContent = t.pnp600Desc;
    document.querySelector('#pnpProvincesH3').textContent = t.pnpProvincesH3;
    document.querySelector('#pnpProvON').textContent = t.pnpProvON;
    document.querySelector('#pnpProvBC').textContent = t.pnpProvBC;
    document.querySelector('#pnpProvAB').textContent = t.pnpProvAB;
    document.querySelector('#pnpProvMB').textContent = t.pnpProvMB;
    document.querySelector('#pnpProvSK').textContent = t.pnpProvSK;
    document.querySelector('#pnpProvNS').textContent = t.pnpProvNS;
    document.querySelector('#pnpProvNB').textContent = t.pnpProvNB;
    document.querySelector('#pnpProvNL').textContent = t.pnpProvNL;
    document.querySelector('#pnpQuebecNote').textContent = t.pnpQuebecNote;
    // Batch update data-i18n elements (province streams)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelector('#pnpStrategyH3').textContent = t.pnpStrategyH3;
    document.querySelector('#pnpStrat1T').textContent = t.pnpStrat1T;
    document.querySelector('#pnpStrat1D').textContent = t.pnpStrat1D;
    document.querySelector('#pnpStrat2T').textContent = t.pnpStrat2T;
    document.querySelector('#pnpStrat2D').textContent = t.pnpStrat2D;
    document.querySelector('#pnpStrat3T').textContent = t.pnpStrat3T;
    document.querySelector('#pnpStrat3D').textContent = t.pnpStrat3D;
    document.querySelector('#pnpStrat4T').textContent = t.pnpStrat4T;
    document.querySelector('#pnpStrat4D').textContent = t.pnpStrat4D;

    // Dashboard
    document.querySelector('#strategyResults h2').textContent = lang === 'ko' ? 'AI 맞춤형 전략 리포트' : 'AI Personalized Strategy Report';
    const statLabels = document.querySelectorAll('.stat-label');
    statLabels[0].textContent = lang === 'ko' ? '나의 CRS 점수' : 'My CRS Score';
    statLabels[1].textContent = lang === 'ko' ? '합격권과의 격차' : 'Gap to ITA Cut-off';
    statLabels[2].textContent = lang === 'ko' ? '성공 확률' : 'Success Probability';

    // CLB Table
    const skillThs = document.querySelectorAll('#guide thead th');
    if (skillThs.length) {
        const isEn = lang === 'en';
        skillThs[2].textContent = isEn ? "Listening (L)" : "듣기 (L)";
        skillThs[3].textContent = isEn ? "Reading (R)"   : "읽기 (R)";
        skillThs[4].textContent = isEn ? "Writing (W)"   : "쓰기 (W)";
        skillThs[5].textContent = isEn ? "Speaking (S)"  : "말하기 (S)";
    }

    // Guide
    document.querySelector('#guide h2').textContent = t.guideH2;
    document.getElementById('guideP1').textContent = t.guideP1;
    const guideLis = document.querySelectorAll('#guideProgramUl li');
    [t.liFswp, t.liFstp, t.liCec].forEach((str, i) => {
        const idx = str.indexOf(':');
        guideLis[i].innerHTML = `<strong>${str.slice(0, idx)}:</strong>${str.slice(idx + 1)}`;
    });

    document.querySelectorAll('#guide h3')[0].textContent = t.clbTableH3;
    document.getElementById('clbTableP').innerHTML = t.clbTableP;
    const clbThs = document.querySelectorAll('#guide table th');
    clbThs[0].textContent = t.thClb;
    clbThs[1].textContent = t.thTest;

    document.querySelectorAll('#guide h3')[1].textContent = t.howToRaiseH3;
    document.getElementById('howToRaiseP').textContent = t.howToRaiseP;
    const raiseLis = document.querySelectorAll('#guide .raise-list li');
    const splitLi = s => { const idx = s.indexOf(':'); return `<strong>${s.slice(0, idx)}:</strong>${s.slice(idx + 1)}`; };
    if (raiseLis[0]) raiseLis[0].innerHTML = splitLi(t.liRaiseLang);
    if (raiseLis[1]) raiseLis[1].innerHTML = splitLi(t.liRaiseFrench);
    if (raiseLis[2]) raiseLis[2].innerHTML = splitLi(t.liRaisePnp);
    if (raiseLis[3]) raiseLis[3].innerHTML = splitLi(t.liRaiseCanExp);
    if (raiseLis[4]) raiseLis[4].innerHTML = splitLi(t.liRaiseForeignExp);
    if (raiseLis[5]) raiseLis[5].innerHTML = splitLi(t.liRaiseEdu);
    if (raiseLis[6]) raiseLis[6].innerHTML = splitLi(t.liRaiseOther);

    // News
    document.querySelector('#articles h2').textContent = t.articlesH2;
    document.querySelectorAll('.blog-filter-btn').forEach(btn => {
        const key = btn.dataset.i18n;
        if (key && t[key]) btn.textContent = t[key];
    });
    const blogSearchEl = document.getElementById('blogSearchInput');
    if (blogSearchEl) blogSearchEl.placeholder = t.blogSearchPlaceholder || '';
    const loadMoreEl = document.getElementById('blogLoadMore');
    if (loadMoreEl) loadMoreEl.textContent = t.blogLoadMore || '';
    const emptyEl = document.getElementById('blogEmpty');
    if (emptyEl) emptyEl.textContent = t.blogEmpty || '';
    renderPosts();

    // Newsletter
    document.querySelector('#newsletter h2').textContent = t.nlH2;
    document.querySelector('#newsletter > p').textContent = t.nlP;
    document.querySelector('#newsletter input[type="email"]').placeholder = t.nlPlaceholder;
    document.querySelector('#newsletter button').textContent = t.nlBtn;
    document.querySelector('.newsletter-disclaimer').textContent = t.nlDisclaimer;
    document.querySelector('.newsletter-success').textContent = t.nlSuccess;

    // Contact
    document.querySelector('#contact h2').textContent = t.contactH2;
    document.querySelector('#contact p').textContent = t.contactP;
    const contactLabels = document.querySelectorAll('#contact label');
    contactLabels[0].textContent = t.labelName;
    contactLabels[1].textContent = t.labelEmail;
    contactLabels[2].textContent = t.labelMessage;
    document.querySelector('#contact input[name="name"]').placeholder = t.namePlaceholder;
    document.querySelector('#contact textarea').placeholder = t.messagePlaceholder;
    document.querySelector('#contact button').textContent = t.btnSubmit;

    // Footer
    document.querySelector('footer p').textContent = t.footerRights;
    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks[0].textContent = t.navHome;
    footerLinks[1].textContent = t.navGuide;
    footerLinks[2].textContent = t.navDraws;
    footerLinks[3].textContent = t.navPNP;
    footerLinks[4].textContent = t.footerPrivacy;
    footerLinks[5].textContent = t.footerContact;

    updateLangPlaceholders();
    if (document.getElementById('birthYear').value) calcAge();
    if (document.getElementById('langL').value) calcCLB();

    // Re-run calculation if results are already shown to translate the breakdown and advice
    if (document.getElementById('strategyResults').style.display === 'block') {
        calculateCRS();
    }
}

// --- Article Metadata (language-agnostic) ---
// isNew is computed dynamically: true if published within NEW_ARTICLE_DAYS days
function isNewArticle(pubDate) {
    return (Date.now() - new Date(pubDate).getTime()) / 86400000 <= NEW_ARTICLE_DAYS;
}

const articlesMeta = [
    { type: 'special',    pubDate: '2026-02-19' },
    { type: 'french',     pubDate: '2026-02-06' },
    { type: 'cec',        pubDate: '2026-02-17' },
    { type: 'healthcare', pubDate: '2026-02-20' },
    { type: 'pnp',        pubDate: '2026-02-16' },
    { type: 'guide',      pubDate: '2026-02-26' },
    { type: 'news',       pubDate: '2026-01-15' },
    { type: 'pnp',        pubDate: '2026-02-10' },
    { type: 'pnp',        pubDate: '2026-02-05' },
    { type: 'french',     pubDate: '2026-01-28' },
    { type: 'guide',      pubDate: '2026-01-20' },
    { type: 'guide',      pubDate: '2026-02-01' },
];

// --- Express Entry Draw Data ---
const drawsData = [
    { date: { ko: '2026년 2월 20일', en: 'Feb 20, 2026' }, type: 'healthcare', label: { ko: '헬스케어 & 소셜 서비스', en: 'Healthcare & Social Services' }, invited: 4000, cutoff: 467 },
    { date: { ko: '2026년 2월 19일', en: 'Feb 19, 2026' }, type: 'special',    label: { ko: '신설 의사 카테고리', en: 'Physician Category (New)' }, invited: 391, cutoff: 169 },
    { date: { ko: '2026년 2월 17일', en: 'Feb 17, 2026' }, type: 'cec',        label: { ko: '캐나다 경험 이민 (CEC)', en: 'Canadian Experience Class (CEC)' }, invited: 6000, cutoff: 508 },
    { date: { ko: '2026년 2월 16일', en: 'Feb 16, 2026' }, type: 'pnp',        label: { ko: '주정부 이민 (PNP)', en: 'Provincial Nominee Program (PNP)' }, invited: 279,  cutoff: 789, effectiveCutoff: 189 },
    { date: { ko: '2026년 2월 6일',  en: 'Feb 6, 2026'  }, type: 'french',     label: { ko: '프랑스어 우수자', en: 'French-Language Proficiency' }, invited: 8500, cutoff: 400 },
    { date: { ko: '2026년 2월 3일',  en: 'Feb 3, 2026'  }, type: 'pnp',        label: { ko: '주정부 이민 (PNP)', en: 'Provincial Nominee Program (PNP)' }, invited: 423,  cutoff: 749, effectiveCutoff: 149 },
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

window.openArticle = function(index) {
    const article = articlesData[currentLang][index];
    if (!article) return;
    const modal = document.getElementById("articleModal");
    const modalBody = document.getElementById("modalBody");
    const closeText = currentLang === 'ko' ? '닫기' : 'Close';
    modalBody.innerHTML = `<span class="article-badge">${article.badge}</span><h2>${article.title}</h2><div class="article-meta">${article.date}</div><div class="full-content">${article.content}</div><button class="read-more-btn" style="margin-top:30px; width:100%" id="modalCloseBtn">${closeText}</button>`;
    modal.style.display = "block";
    document.body.classList.add("modal-open");
    document.getElementById("modalCloseBtn").onclick = window.closeArticle;
};

window.closeArticle = function() {
    const modal = document.getElementById("articleModal");
    if (modal) { modal.style.display = "none"; document.body.classList.remove("modal-open"); }
};

document.addEventListener('DOMContentLoaded', () => {
    // Dynamic copyright year
    const copyrightEl = document.getElementById('copyrightYear');
    if (copyrightEl) copyrightEl.textContent = CURRENT_YEAR;

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
            // Update button text
            const t = translations[currentLang];
            themeToggle.textContent = theme === 'dark' ? t.themeToggleLight : t.themeToggleDark;
        });
    }

    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'ko' ? 'en' : 'ko';
            updateLanguage(newLang);
        });
    }

    initBlogToolbar();
    updateLanguage(currentLang);
    window.addEventListener('click', (e) => { if (e.target === document.getElementById("articleModal")) window.closeArticle(); });
    window.addEventListener('keydown', (e) => { if (e.key === "Escape") window.closeArticle(); });

    // Back-to-Top button
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Nav active state via IntersectionObserver
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const sections = [];
    navLinks.forEach(link => {
        const id = link.getAttribute('href').substring(1);
        const section = document.getElementById(id);
        if (section) sections.push({ el: section, link: link });
    });
    if (sections.length > 0) {
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const match = sections.find(s => s.el === entry.target);
                if (match) {
                    if (entry.isIntersecting) {
                        navLinks.forEach(l => l.classList.remove('active'));
                        match.link.classList.add('active');
                    }
                }
            });
        }, { rootMargin: '-20% 0px -60% 0px' });
        sections.forEach(s => navObserver.observe(s.el));
    }

    // Scroll fade-in-up animation
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
        const fadeTargets = document.querySelectorAll('.card, #articles');
        fadeTargets.forEach(el => el.classList.add('fade-in-up'));
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        fadeTargets.forEach(el => fadeObserver.observe(el));
    }

    // Newsletter form submit
    const nlForm = document.getElementById('newsletterForm');
    if (nlForm) {
        nlForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const emailInput = nlForm.querySelector('input[type="email"]');
            const btn = nlForm.querySelector('button');
            const t = translations[currentLang];
            btn.disabled = true;
            btn.textContent = '...';
            try {
                const res = await fetch(FORMSPREE_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: emailInput.value, _subject: 'Newsletter Subscription' })
                });
                if (res.ok) {
                    nlForm.style.display = 'none';
                    document.querySelector('.newsletter-disclaimer').style.display = 'none';
                    document.querySelector('.newsletter-success').style.display = 'block';
                } else {
                    btn.disabled = false;
                    btn.textContent = t.nlBtn;
                }
            } catch {
                btn.disabled = false;
                btn.textContent = t.nlBtn;
            }
        });
    }

    // --- Bottom Nav: IntersectionObserver to show/hide ---
    const calcSection = document.getElementById('calculator');
    const bottomNav = document.getElementById('wizardBottomNav');
    if (calcSection && bottomNav) {
        const calcObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    bottomNav.style.display = 'flex';
                    requestAnimationFrame(() => bottomNav.classList.remove('hidden'));
                } else {
                    bottomNav.classList.add('hidden');
                    setTimeout(() => {
                        if (bottomNav.classList.contains('hidden')) bottomNav.style.display = 'none';
                    }, 300);
                }
            });
        }, { threshold: 0.01 });
        calcObserver.observe(calcSection);
        updateBottomNav();
        updateMiniScore();
    }

    renderDrawsTable(null);

    // --- Real-time mini CRS: input/change delegation ---
    if (calcSection) {
        let miniDebounce = null;
        calcSection.addEventListener('input', () => {
            clearTimeout(miniDebounce);
            miniDebounce = setTimeout(updateMiniScore, 200);
        });
        calcSection.addEventListener('change', () => {
            clearTimeout(miniDebounce);
            miniDebounce = setTimeout(updateMiniScore, 100);
        });
    }

    // --- Enter key to advance step ---
    if (calcSection) {
        calcSection.addEventListener('keydown', (e) => {
            if (e.key !== 'Enter') return;
            const tag = e.target.tagName;
            if (tag === 'SELECT' || tag === 'TEXTAREA' || tag === 'BUTTON') return;
            if (e.target.closest('.acc-header')) return;
            // Skip if a NOC dropdown is visible
            const nocDrop = e.target.closest('.input-group')?.querySelector('.noc-inline-drop');
            if (nocDrop && nocDrop.style.display === 'block') return;
            // Only handle if target is inside the active accordion body
            const activeBody = document.getElementById(`acc-body${currentStep}`);
            if (!activeBody || !activeBody.contains(e.target)) return;
            e.preventDefault();
            if (currentStep === WIZARD_TOTAL_STEPS) {
                calculateCRS();
            } else {
                goToStep(currentStep + 1);
            }
        });
    }
});

// --- CORE ASSESSMENT LOGIC ---

// IELTS → CLB conversion tables (per ability)
const ieltsToCLB = {
    L: [[8.5,10],[8.0,9],[7.5,8],[6.0,7],[5.5,6],[5.0,5],[4.5,4]],
    R: [[8.0,10],[7.0,9],[6.5,8],[6.0,7],[5.0,6],[4.0,5],[3.5,4]],
    W: [[7.5,10],[7.0,9],[6.5,8],[6.0,7],[5.5,6],[5.0,5],[4.0,4]],
    S: [[7.5,10],[7.0,9],[6.5,8],[6.0,7],[5.5,6],[5.0,5],[4.0,4]]
};

function convertToCLB(score, ability, testType) {
    if (!score) return 0;
    const s = parseFloat(score);
    if (testType === 'CELPIP') {
        if (s >= 10) return 10;
        if (s >= 9) return 9;
        if (s >= 8) return 8;
        if (s >= 7) return 7;
        if (s >= 6) return 6;
        if (s >= 5) return 5;
        if (s >= 4) return 4;
        return 0;
    }
    const table = ieltsToCLB[ability];
    if (!table) return 0;
    for (const [threshold, clb] of table) {
        if (s >= threshold) return clb;
    }
    return 0;
}

function calcAge() {
    const year = parseInt(document.getElementById('birthYear').value);
    const month = parseInt(document.getElementById('birthMonth').value) || 1;
    const display = document.getElementById('ageDisplay');
    if (!year || year < MIN_BIRTH_YEAR || year > MAX_BIRTH_YEAR) {
        display.textContent = currentLang === 'ko' ? '올바른 출생 연도를 입력하세요' : 'Enter a valid birth year';
        return;
    }
    const today = new Date();
    let age = today.getFullYear() - year;
    if (today.getMonth() + 1 < month) age--;
    display.textContent = currentLang === 'ko' ? `만 ${age}세` : `Age ${age}`;
}

function calcCLB() {
    const testType = document.getElementById('langTest').value;
    const L = document.getElementById('langL').value;
    const R = document.getElementById('langR').value;
    const W = document.getElementById('langW').value;
    const S = document.getElementById('langS').value;
    const display = document.getElementById('clbDisplay');
    if (!L || !R || !W || !S) {
        display.textContent = currentLang === 'ko' ? '4개 점수를 모두 입력하세요' : 'Enter all 4 scores';
        return;
    }
    const clbL = convertToCLB(L, 'L', testType);
    const clbR = convertToCLB(R, 'R', testType);
    const clbW = convertToCLB(W, 'W', testType);
    const clbS = convertToCLB(S, 'S', testType);
    const minCLB = Math.min(clbL, clbR, clbW, clbS);
    display.textContent = `L:${clbL} / R:${clbR} / W:${clbW} / S:${clbS} (${currentLang === 'ko' ? '최저' : 'Min'} CLB ${minCLB})`;
}

function lookupNOC(inputId, displayId) {
    const val = document.getElementById(inputId).value.trim();
    const display = document.getElementById(displayId);
    const t = translations[currentLang];
    if (!val) { display.textContent = t.teerDefault; display.style.color = ''; return; }
    const found = nocData.find(n => n.code === val);
    if (found) {
        display.textContent = `TEER ${found.teer} — ${found.title}`;
        display.style.color = 'var(--primary)';
    } else {
        display.textContent = currentLang === 'ko' ? '일치하는 NOC 코드 없음' : 'No matching NOC code';
        display.style.color = 'var(--text-muted)';
    }
}

function searchNOCInline(prefix) {
    const input = document.getElementById(prefix + 'NOCSearch').value.trim().toLowerCase();
    const drop = document.getElementById(prefix + 'NOCDrop');
    if (!input || input.length < 2) { drop.style.display = 'none'; return; }
    const keywords = input.split(/\s+/);
    const filtered = nocData.filter(item => {
        const hay = (item.title + ' ' + item.code + ' ' + (item.cat || '')).toLowerCase();
        return keywords.every(kw => hay.includes(kw));
    }).slice(0, 8);
    if (filtered.length === 0) {
        drop.innerHTML = `<div class="noc-drop-empty">${currentLang === 'ko' ? '일치하는 결과 없음' : 'No matching results'}</div>`;
    } else {
        drop.innerHTML = filtered.map(item =>
            `<div class="noc-drop-item">
                <span class="noc-drop-code">${item.code}</span>
                <span class="noc-drop-teer">TEER ${item.teer}</span>
                <span class="noc-drop-title">${item.title}</span>
            </div>`
        ).join('');
        drop.querySelectorAll('.noc-drop-item').forEach((el, i) => {
            el.addEventListener('mousedown', (e) => {
                e.preventDefault();
                selectNOCInline(prefix, filtered[i].code, filtered[i].title, filtered[i].teer);
            });
        });
    }
    drop.style.display = 'block';
}

function selectNOCInline(prefix, code, title, teer) {
    document.getElementById(prefix + 'NOCSearch').value = title;
    document.getElementById(prefix + 'NOC').value = code;
    document.getElementById(prefix + 'NOCDrop').style.display = 'none';
    const display = document.getElementById(prefix + 'TEER');
    display.textContent = `NOC ${code} · TEER ${teer} — ${title}`;
    display.style.color = 'var(--primary)';
}

function hideNOCDropdown(prefix) {
    setTimeout(() => {
        const drop = document.getElementById(prefix + 'NOCDrop');
        if (drop) drop.style.display = 'none';
    }, 150);
}

/* ── Wizard Step Navigation ── */
let currentStep = 1;
let maxVisitedStep = 1;

function goToStep(n) {
    if (n < 1 || n > WIZARD_TOTAL_STEPS || n > maxVisitedStep + 1) return;

    // Close current step
    const curBody = document.getElementById(`acc-body${currentStep}`);
    const curArrow = document.getElementById(`acc-arrow${currentStep}`);
    const curHeader = document.getElementById(`acc-header${currentStep}`);
    if (curBody) curBody.classList.add('acc-body-closed');
    if (curArrow) curArrow.textContent = '▼';
    if (curHeader) curHeader.setAttribute('aria-expanded', 'false');

    // Open target step
    const newBody = document.getElementById(`acc-body${n}`);
    const newArrow = document.getElementById(`acc-arrow${n}`);
    const newHeader = document.getElementById(`acc-header${n}`);
    if (newBody) newBody.classList.remove('acc-body-closed');
    if (newArrow) newArrow.textContent = '▲';
    if (newHeader) newHeader.setAttribute('aria-expanded', 'true');

    currentStep = n;
    if (n > maxVisitedStep) maxVisitedStep = n;
    updateWizardProgress();
    updateBottomNav();

    // Scroll after accordion transition finishes (0.35s) so layout is stable
    const header = document.getElementById(`acc-header${n}`);
    if (header) {
        setTimeout(() => {
            const rect = header.getBoundingClientRect();
            const offset = window.scrollY + rect.top - 20;
            window.scrollTo({ top: Math.max(0, offset), behavior: 'smooth' });
        }, 400);
    }
}

function updateWizardProgress() {
    const steps = document.querySelectorAll('.wizard-step');
    const lines = document.querySelectorAll('.wizard-line');

    steps.forEach(el => {
        const s = parseInt(el.dataset.step);
        el.classList.remove('active', 'completed', 'disabled');
        if (s === currentStep) {
            el.classList.add('active');
        } else if (s < currentStep) {
            el.classList.add('completed');
        } else if (s <= maxVisitedStep) {
            // visited but not current — clickable
        } else {
            el.classList.add('disabled');
        }
    });

    lines.forEach((line, i) => {
        const stepAfter = i + 1; // line between step i+1 and step i+2
        line.classList.toggle('completed', stepAfter < currentStep);
        line.classList.toggle('active', stepAfter === currentStep - 1 || stepAfter < maxVisitedStep);
    });

    // Update accordion header disabled state
    for (let i = 1; i <= 7; i++) {
        const header = document.getElementById(`acc-header${i}`);
        if (header) {
            if (i > maxVisitedStep + 1) {
                header.classList.add('wizard-disabled');
            } else {
                header.classList.remove('wizard-disabled');
            }
        }
    }
}

/* ── Bottom Navigation Bar ── */
function updateBottomNav() {
    const bar = document.getElementById('wizardBottomNav');
    if (!bar) return;
    const t = translations[currentLang];
    const prevBtn = document.getElementById('wizBottomPrev');
    const nextBtn = document.getElementById('wizBottomNext');
    const stepLabel = document.getElementById('wizBottomStep');

    // Step indicator
    stepLabel.textContent = `Step ${currentStep} ${t.bottomStepOf} ${WIZARD_TOTAL_STEPS}`;

    // Previous button
    prevBtn.innerHTML = t.wizardPrev;
    prevBtn.disabled = (currentStep <= 1);
    prevBtn.onclick = () => goToStep(currentStep - 1);

    // Next / Submit button
    if (currentStep === WIZARD_TOTAL_STEPS) {
        nextBtn.textContent = t.wizardSubmit;
        nextBtn.className = 'wizard-bottom-btn wizard-bottom-submit';
        nextBtn.onclick = () => calculateCRS();
    } else {
        nextBtn.innerHTML = t.wizardNext;
        nextBtn.className = 'wizard-bottom-btn';
        nextBtn.onclick = () => goToStep(currentStep + 1);
    }
}

/* ── Draws Table ── */
let lastDrawUserCRS = null;

function renderDrawsTable(userCRS) {
    lastDrawUserCRS = userCRS;
    const wrap = document.getElementById('drawsTableWrap');
    if (!wrap) return;
    const isKo = currentLang === 'ko';
    const hasScore = userCRS !== null && userCRS > 0;

    const thDate     = isKo ? '날짜' : 'Date';
    const thType     = isKo ? '선발 유형' : 'Draw Type';
    const thInvited  = isKo ? '초청 인원' : 'Invitations';
    const thCutoff   = isKo ? '합격 점수 (CRS)' : 'CRS Cut-off';
    const thMine     = isKo ? '내 점수' : 'My Score';

    let rows = '';
    for (const draw of drawsData) {
        const isPNP = draw.type === 'pnp';
        const dateStr  = draw.date[isKo ? 'ko' : 'en'];
        const labelStr = draw.label[isKo ? 'ko' : 'en'];
        const invitedStr = draw.invited.toLocaleString() + (isKo ? '명' : ' ITAs');

        let cutoffStr;
        if (isPNP) {
            const eff = isKo
                ? `<span class="draw-effective">(실질 ~${draw.effectiveCutoff}점)</span>`
                : `<span class="draw-effective">(effective ~${draw.effectiveCutoff})</span>`;
            cutoffStr = `${draw.cutoff.toLocaleString()}${isKo ? '점' : ' pts'} ${eff}`;
        } else {
            cutoffStr = `${draw.cutoff}${isKo ? '점' : ' pts'}`;
        }

        let compareTd = '';
        if (hasScore) {
            const cmp = isPNP ? draw.effectiveCutoff : draw.cutoff;
            let cls, label;
            if (userCRS >= cmp) {
                cls = 'pass'; label = isKo ? '✓ 합격권' : '✓ Eligible';
            } else if (userCRS >= cmp - CRS_BENCHMARKS.NEAR_ELIGIBLE_GAP) {
                cls = 'close'; label = isKo ? '△ 근접' : '△ Near';
            } else {
                cls = 'fail'; label = isKo ? '✗ 미달' : '✗ Below';
            }
            if (isPNP) label += isKo ? ' (추천 필요)' : ' (w/ nomination)';
            compareTd = `<td><span class="draw-compare draw-compare--${cls}">${label}</span></td>`;
        }

        rows += `<tr>
            <td>${dateStr}</td>
            <td><span class="draw-badge draw-badge--${draw.type}">${labelStr}</span></td>
            <td>${invitedStr}</td>
            <td>${cutoffStr}</td>
            ${compareTd}
        </tr>`;
    }

    const compareHeader = hasScore ? `<th>${thMine}</th>` : '';
    const disclaimer = isKo
        ? '* PNP 선발은 주정부 가산점 600점이 포함된 점수입니다. 괄호 안 수치가 실질 경쟁 기준입니다.'
        : '* PNP draws include a 600-point provincial nomination bonus. Bracketed figures show the effective benchmark.';
    const myScoreNote = hasScore
        ? `<p style="font-size:0.85rem;margin-top:4px;color:var(--text-muted);">${isKo ? `* 내 추정 CRS <strong>${userCRS}점</strong> 기준으로 비교합니다.` : `* Comparison based on your estimated CRS of <strong>${userCRS} pts</strong>.`}</p>`
        : '';

    wrap.innerHTML = `
        <div class="table-container">
            <table>
                <thead><tr>
                    <th>${thDate}</th>
                    <th>${thType}</th>
                    <th>${thInvited}</th>
                    <th>${thCutoff}</th>
                    ${compareHeader}
                </tr></thead>
                <tbody>${rows}</tbody>
            </table>
        </div>
        <p style="font-size:0.85rem;margin-top:10px;color:var(--text-muted);">${disclaimer}</p>
        ${myScoreNote}`;
}

/* ── Province Highlight ── */
function highlightTargetProvince(province) {
    const label = currentLang === 'ko' ? '✓ 선택한 주' : '✓ Your target';
    document.querySelectorAll('.pnp-province-card').forEach(card => {
        card.classList.remove('pnp-province-card--active');
        const existing = card.querySelector('.pnp-province-active-label');
        if (existing) existing.remove();
    });
    if (!province || province === 'any' || province === 'Atlantic' || province === 'Rural' || province === 'QC') return;
    const target = document.querySelector(`.pnp-province-card[data-province="${province}"]`);
    if (target) {
        target.classList.add('pnp-province-card--active');
        const tag = document.createElement('span');
        tag.className = 'pnp-province-active-label';
        tag.textContent = label;
        target.appendChild(tag);
    }
}

/* ── Mini CRS Score (lightweight) ── */
let lastMiniScore = null;

function calculateMiniCRS() {
    try {
        const birthYear = parseInt(document.getElementById('birthYear').value) || 0;
        const birthMonth = parseInt(document.getElementById('birthMonth').value) || 1;
        const maritalStatus = document.getElementById('maritalStatus').value;
        const isMarried = (maritalStatus === 'married');
        const spouseAccompany = isMarried ? document.getElementById('spouseAccompany').value : 'no';
        const effectiveMarried = isMarried && spouseAccompany === 'yes';

        let age = 0;
        if (birthYear > MIN_BIRTH_YEAR) {
            const today = new Date();
            age = today.getFullYear() - birthYear;
            if (today.getMonth() + 1 < birthMonth) age--;
        }

        const education = document.getElementById('education').value;
        const testType = document.getElementById('langTest').value;
        const clbL = convertToCLB(document.getElementById('langL').value, 'L', testType);
        const clbR = convertToCLB(document.getElementById('langR').value, 'R', testType);
        const clbW = convertToCLB(document.getElementById('langW').value, 'W', testType);
        const clbS = convertToCLB(document.getElementById('langS').value, 'S', testType);
        const minCLB = (clbL && clbR && clbW && clbS) ? Math.min(clbL, clbR, clbW, clbS) : 0;
        const canadianExpYears = parseInt(document.getElementById('canadianExpYears').value) || 0;
        const foreignExpYears = parseInt(document.getElementById('foreignExpYears').value) || 0;

        let total = 0;

        // Age
        const ageTableSingle = {18:99,19:105,20:110,21:110,22:110,23:110,24:110,25:110,26:110,27:110,28:110,29:110,30:105,31:99,32:94,33:88,34:83,35:77,36:72,37:66,38:61,39:55,40:50,41:39,42:28,43:17,44:6};
        const ageTableMarried = {18:90,19:95,20:100,21:100,22:100,23:100,24:100,25:100,26:100,27:100,28:100,29:100,30:95,31:90,32:85,33:80,34:75,35:70,36:65,37:60,38:55,39:50,40:45,41:35,42:25,43:15,44:5};
        total += (effectiveMarried ? ageTableMarried : ageTableSingle)[age] || 0;

        // Education
        const eduSingle = { highschool:30, oneyear:90, twoyear:98, bachelor:120, two_or_more:128, master:135, phd:150 };
        const eduMarried = { highschool:28, oneyear:84, twoyear:91, bachelor:112, two_or_more:119, master:126, phd:140 };
        total += (effectiveMarried ? eduMarried : eduSingle)[education] || 0;

        // Language
        if (clbL || clbR || clbW || clbS) {
            total += clbToLangPts(clbL, effectiveMarried) + clbToLangPts(clbR, effectiveMarried) +
                     clbToLangPts(clbW, effectiveMarried) + clbToLangPts(clbS, effectiveMarried);
        }

        // Canadian experience
        const canExpSingle = {1:40, 2:53, 3:64, 4:72, 5:80};
        const canExpMarried = {1:35, 2:46, 3:56, 4:63, 5:70};
        const canExpKey = Math.min(5, Math.max(0, canadianExpYears));
        total += (effectiveMarried ? canExpMarried : canExpSingle)[canExpKey] || 0;

        // Spouse (simplified)
        if (effectiveMarried) {
            const spouseLang = parseInt(document.getElementById('spouseLanguage').value) || 0;
            const spouseLangPts = {9:20, 7:15, 5:10};
            total += (spouseLang >= 9 ? 20 : spouseLang >= 7 ? 15 : spouseLang >= 5 ? 10 : 0);
            const spouseEdu = document.getElementById('spouseEducation').value;
            const spouseEduMap = { highschool:2, oneyear:6, twoyear:7, bachelor:8, two_or_more:9, master:10, phd:10 };
            total += spouseEduMap[spouseEdu] || 0;
            const spouseCanExp = parseInt(document.getElementById('spouseCanadianExp').value) || 0;
            total += (spouseCanExp >= 5 ? 10 : spouseCanExp >= 3 ? 10 : spouseCanExp >= 2 ? 8 : spouseCanExp >= 1 ? 5 : 0);
        }

        // Transferability (simplified — lang+edu, lang+canExp, edu+foreignExp, canExp+foreignExp)
        let transferability = 0;
        const eduLevel = {highschool:1, oneyear:2, twoyear:2, bachelor:3, two_or_more:3, master:3, phd:3}[education] || 0;
        if (minCLB >= 7 && eduLevel >= 3) transferability += (minCLB >= 9 ? 50 : 25);
        if (minCLB >= 7 && canadianExpYears >= 1) transferability += (minCLB >= 9 ? 50 : 25);
        if (eduLevel >= 3 && foreignExpYears >= 1) transferability += (foreignExpYears >= 3 ? 50 : 25);
        if (canadianExpYears >= 1 && foreignExpYears >= 1) transferability += (foreignExpYears >= 3 ? 50 : 25);
        total += Math.min(100, transferability);

        // Additional (PNP, sibling, French simplified)
        const hasPNP = parseInt(document.getElementById('hasPNP').value) || 0;
        total += hasPNP;
        const sibling = parseInt(document.getElementById('sibling').value) || 0;
        total += sibling;
        const frenchTest = document.getElementById('frenchTest').value;
        const frenchCLB = frenchTest !== 'none' ? parseInt(document.getElementById('frenchCLB').value) || 0 : 0;
        if (frenchCLB >= 9) total += (minCLB >= 5 ? 50 : 25);
        else if (frenchCLB >= 7) total += (minCLB >= 5 ? 25 : 0);
        const canadianStudy = parseInt(document.getElementById('canadianStudy').value) || 0;
        total += canadianStudy;

        return total;
    } catch (e) {
        return null;
    }
}

function updateMiniScore() {
    const score = calculateMiniCRS();
    const el = document.getElementById('wizBottomScore');
    if (!el) return;
    const numEl = el.querySelector('.mini-score-num');
    if (!numEl) return;

    if (score === null || score === 0) {
        numEl.textContent = '--';
        el.removeAttribute('data-level');
    } else {
        numEl.textContent = score;
        const level = score < CRS_BENCHMARKS.MEDIUM ? 'low' : score < CRS_BENCHMARKS.VERY_HIGH ? 'mid' : 'high';
        el.setAttribute('data-level', level);
        if (lastMiniScore !== null && score !== lastMiniScore) {
            el.classList.remove('pulse');
            void el.offsetWidth;
            el.classList.add('pulse');
        }
    }
    lastMiniScore = score;
}

function updateLangPlaceholders() {
    const testType = document.getElementById('langTest').value;
    const isIELTS = testType === 'IELTS';
    const t = translations[currentLang];
    const ph = isIELTS ? (currentLang === 'ko' ? '예: 8.0' : 'e.g. 8.0') : (currentLang === 'ko' ? '예: 9' : 'e.g. 9');
    ['langL','langR','langW','langS'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.placeholder = ph;
            el.step = isIELTS ? '0.5' : '1';
        }
    });
    const lLabel = document.getElementById('langLLabel');
    const rLabel = document.getElementById('langRLabel');
    const wLabel = document.getElementById('langWLabel');
    const sLabel = document.getElementById('langSLabel');
    if (lLabel) lLabel.textContent = `${t.labelLangL} — ${testType} ${currentLang === 'ko' ? '점수' : 'Score'}`;
    if (rLabel) rLabel.textContent = `${t.labelLangR} — ${testType} ${currentLang === 'ko' ? '점수' : 'Score'}`;
    if (wLabel) wLabel.textContent = `${t.labelLangW} — ${testType} ${currentLang === 'ko' ? '점수' : 'Score'}`;
    if (sLabel) sLabel.textContent = `${t.labelLangS} — ${testType} ${currentLang === 'ko' ? '점수' : 'Score'}`;
    calcCLB();
}

function toggleFrenchSection() {
    const val = document.getElementById('frenchTest').value;
    document.getElementById('frenchClbDiv').style.display = val === 'none' ? 'none' : 'block';
}

function toggleJobOfferSection() {
    const val = document.getElementById('hasJobOffer').value;
    const show = val !== 'no';
    document.getElementById('employerPNPDiv').style.display = show ? 'block' : 'none';
}

function toggleSpouseSection() {
    const status = document.getElementById('maritalStatus').value;
    const isMarried = status === 'married';
    document.getElementById('spouseSection').style.display = isMarried ? 'block' : 'none';
    document.getElementById('spouseAccompanyDiv').style.display = isMarried ? 'block' : 'none';
    document.getElementById('spouseIELTSDiv').style.display = isMarried ? 'block' : 'none';
}

// Per-ability CLB → CRS language points
function clbToLangPts(clb, isMarried) {
    const singleMap = {10:34, 9:31, 8:23, 7:17, 6:9, 5:6, 4:6};
    const marriedMap = {10:32, 9:29, 8:22, 7:16, 6:8, 5:6, 4:6};
    const map = isMarried ? marriedMap : singleMap;
    const key = Math.min(10, Math.max(4, clb));
    return map[key] || 0;
}

function calculateCRS() {
    // --- Read Inputs ---
    const birthYear = parseInt(document.getElementById('birthYear').value) || 0;
    const birthMonth = parseInt(document.getElementById('birthMonth').value) || 1;
    const maritalStatus = document.getElementById('maritalStatus').value;
    const isMarried = (maritalStatus === 'married');
    const spouseAccompany = isMarried ? document.getElementById('spouseAccompany').value : 'no';
    const effectiveMarried = isMarried && spouseAccompany === 'yes';

    // Calculate age from birth year/month
    let age = 0;
    if (birthYear > MIN_BIRTH_YEAR) {
        const today = new Date();
        age = today.getFullYear() - birthYear;
        if (today.getMonth() + 1 < birthMonth) age--;
    }

    const education = document.getElementById('education').value;
    const canadianStudy = parseInt(document.getElementById('canadianStudy').value) || 0;

    // Language (per ability)
    const testType = document.getElementById('langTest').value;
    const clbL = convertToCLB(document.getElementById('langL').value, 'L', testType);
    const clbR = convertToCLB(document.getElementById('langR').value, 'R', testType);
    const clbW = convertToCLB(document.getElementById('langW').value, 'W', testType);
    const clbS = convertToCLB(document.getElementById('langS').value, 'S', testType);
    const minCLB = (clbL && clbR && clbW && clbS) ? Math.min(clbL, clbR, clbW, clbS) : 0;

    // French
    const frenchTest = document.getElementById('frenchTest').value;
    const frenchCLB = frenchTest !== 'none' ? parseInt(document.getElementById('frenchCLB').value) || 0 : 0;

    // Experience
    const canadianExpYears = parseInt(document.getElementById('canadianExpYears').value) || 0;
    const foreignExpYears = parseInt(document.getElementById('foreignExpYears').value) || 0;

    // Job Offer
    const hasJobOffer = document.getElementById('hasJobOffer').value;

    // Additional
    const sibling = parseInt(document.getElementById('sibling').value) || 0;
    const hasPNP = parseInt(document.getElementById('hasPNP').value) || 0;
    const tradeOccupation = document.getElementById('tradeOccupation').value;

    // Preferences
    const targetProvince = document.getElementById('targetProvince').value;
    const ruralWilling = document.getElementById('ruralWilling').value;
    const atlanticWilling = document.getElementById('atlanticWilling').value;
    const occupationGroup = document.getElementById('occupationGroup').value;
    const businessIntent = document.getElementById('businessIntent').value;

    // Simulation
    const willingRetakeIELTS = document.getElementById('willingRetakeIELTS').value;
    const canStudyFrench = document.getElementById('canStudyFrench').value;
    const planMoreWork = document.getElementById('planMoreWork').value;
    const spouseIELTS = isMarried ? document.getElementById('spouseIELTS').value : 'no';
    const canChangeEmployer = document.getElementById('canChangeEmployer').value;

    // Spouse
    const spouseEdu = effectiveMarried ? document.getElementById('spouseEducation').value : '0';
    const spouseLang = effectiveMarried ? parseInt(document.getElementById('spouseLanguage').value) || 0 : 0;
    const spouseCanExp = effectiveMarried ? parseInt(document.getElementById('spouseCanadianExp').value) || 0 : 0;

    const breakdown = {};
    let total = 0;

    // --- 1. AGE (exact IRCC table) ---
    const ageTableSingle = {18:99,19:105,20:110,21:110,22:110,23:110,24:110,25:110,26:110,27:110,28:110,29:110,30:105,31:99,32:94,33:88,34:83,35:77,36:72,37:66,38:61,39:55,40:50,41:39,42:28,43:17,44:6};
    const ageTableMarried = {18:90,19:95,20:100,21:100,22:100,23:100,24:100,25:100,26:100,27:100,28:100,29:100,30:95,31:90,32:85,33:80,34:75,35:70,36:65,37:60,38:55,39:50,40:45,41:35,42:25,43:15,44:5};
    const ageTable = effectiveMarried ? ageTableMarried : ageTableSingle;
    const agePoints = ageTable[age] || 0;
    breakdown[currentLang === 'ko' ? '나이' : 'Age'] = agePoints;
    total += agePoints;

    // --- 2. EDUCATION ---
    const eduSingle = { highschool:30, oneyear:90, twoyear:98, bachelor:120, two_or_more:128, master:135, phd:150 };
    const eduMarried = { highschool:28, oneyear:84, twoyear:91, bachelor:112, two_or_more:119, master:126, phd:140 };
    const eduMap = effectiveMarried ? eduMarried : eduSingle;
    const eduPoints = eduMap[education] || 0;
    breakdown[currentLang === 'ko' ? '학력' : 'Education'] = eduPoints;
    total += eduPoints;

    // --- 3. LANGUAGE (per-ability CLB) ---
    let langPoints = 0;
    if (clbL || clbR || clbW || clbS) {
        langPoints = clbToLangPts(clbL, effectiveMarried) + clbToLangPts(clbR, effectiveMarried) +
                     clbToLangPts(clbW, effectiveMarried) + clbToLangPts(clbS, effectiveMarried);
    }
    breakdown[currentLang === 'ko' ? '언어 (영어)' : 'Language (English)'] = langPoints;
    total += langPoints;

    // --- 4. CANADIAN EXPERIENCE ---
    const canExpSingle = {1:40, 2:53, 3:64, 4:72, 5:80};
    const canExpMarried = {1:35, 2:46, 3:56, 4:63, 5:70};
    const canExpMap = effectiveMarried ? canExpMarried : canExpSingle;
    const canExpPoints = canExpMap[Math.min(5, canadianExpYears)] || 0;
    breakdown[currentLang === 'ko' ? '캐나다 경력' : 'Canadian Experience'] = canExpPoints;
    total += canExpPoints;

    // --- 5. SPOUSE FACTORS ---
    if (effectiveMarried) {
        let spousePoints = 0;
        const spouseEduMap = { highschool:2, oneyear:6, twoyear:7, bachelor:8, master:10, phd:10 };
        spousePoints += spouseEduMap[spouseEdu] || 0;
        const spouseLangMap = {9:20, 8:16, 7:12, 6:8, 5:4};
        spousePoints += spouseLangMap[Math.min(9, spouseLang)] || 0;
        const spouseExpMap = {1:5, 2:7, 3:8, 4:9, 5:10};
        spousePoints += spouseExpMap[Math.min(5, spouseCanExp)] || 0;
        breakdown[currentLang === 'ko' ? '배우자 요소' : 'Spouse Factors'] = spousePoints;
        total += spousePoints;
    }

    // --- 6. TRANSFERABILITY (max 100) ---
    // IRCC official table: post-secondary(1+yr)=tier1, two_or_more/master/phd=tier2(advanced)
    let transfer = 0;
    const hasEdu = education !== 'highschool' && education !== '0';
    const isAdvancedEdu = ['two_or_more', 'master', 'phd'].includes(education);
    // A: Education + Language (tier1 max 25, tier2 max 50)
    if (hasEdu) {
        transfer += isAdvancedEdu
            ? (minCLB >= 9 ? 50 : minCLB >= 7 ? 25 : 0)
            : (minCLB >= 9 ? 25 : minCLB >= 7 ? 13 : 0);
    }
    // B: Education + Canadian Work Experience (tier1 max 25, tier2 max 50)
    if (hasEdu && canadianExpYears >= 1) {
        const hiCan = canadianExpYears >= 2;
        transfer += isAdvancedEdu ? (hiCan ? 50 : 25) : (hiCan ? 25 : 13);
    }
    // C: Foreign Work Experience + Canadian Work Experience (2×2 matrix, max 50)
    if (foreignExpYears >= 1 && canadianExpYears >= 1) {
        const hiFor = foreignExpYears >= 3, hiCan = canadianExpYears >= 2;
        transfer += (hiFor && hiCan) ? 50 : (hiFor || hiCan) ? 25 : 13;
    }
    // D: Foreign Work Experience + Language (2×2 matrix, max 50)
    if (foreignExpYears >= 1 && minCLB >= 7) {
        const hiFor = foreignExpYears >= 3, hiCLB = minCLB >= 9;
        transfer += (hiFor && hiCLB) ? 50 : (hiFor || hiCLB) ? 25 : 13;
    }
    // E: Certificate of Qualification + Language (CLB5-6=25, CLB7+=50)
    if (tradeOccupation === 'yes') {
        if (minCLB >= 7)      transfer += 50;
        else if (minCLB >= 5) transfer += 25;
    }
    transfer = Math.min(100, transfer);
    breakdown[currentLang === 'ko' ? '이전성 점수' : 'Skill Transferability'] = transfer;
    total += transfer;

    // --- 7. ADDITIONAL POINTS ---
    // Note: Foreign Exp standalone points do not exist in IRCC CRS (only via Transferability C/D).
    // Note: Job Offer CRS points were eliminated March 25, 2025 (MI Section 29 repealed).

    // French language bonus
    let frenchPts = 0;
    if (frenchCLB >= 9) frenchPts = 50;
    else if (frenchCLB >= 7) frenchPts = 25;
    if (frenchPts > 0) { breakdown[currentLang === 'ko' ? '불어' : 'French'] = frenchPts; total += frenchPts; }

    // PNP
    if (hasPNP > 0) { breakdown[currentLang === 'ko' ? 'PNP 노미네이션' : 'PNP Nomination'] = hasPNP; total += hasPNP; }

    // Canadian Study
    if (canadianStudy > 0) { breakdown[currentLang === 'ko' ? '캐나다 학업' : 'Canadian Study'] = canadianStudy; total += canadianStudy; }

    // Sibling
    if (sibling > 0) { breakdown[currentLang === 'ko' ? '형제/자매' : 'Sibling in Canada'] = sibling; total += sibling; }

    const finalScore = Math.min(1200, total);

    // --- Build Profile Object ---
    const profile = {
        age, education, clbL, clbR, clbW, clbS, minCLB, frenchCLB,
        canadianExpYears, foreignExpYears, hasJobOffer, isMarried, effectiveMarried,
        targetProvince, ruralWilling, atlanticWilling, occupationGroup, businessIntent,
        tradeOccupation, hasPNP, sibling,
        willingRetakeIELTS, canStudyFrench, planMoreWork, spouseIELTS, canChangeEmployer,
        finalScore, breakdown
    };

    // --- Update Results UI ---
    document.getElementById('strategyResults').style.display = 'block';
    document.getElementById('res-crs').innerText = finalScore + (currentLang === 'ko' ? '점' : ' pts');

    const gap = finalScore - CRS_BENCHMARKS.RECENT_CUTOFF;
    const gapEl = document.getElementById('res-gap');
    gapEl.innerText = (gap >= 0 ? '+' : '') + gap + (currentLang === 'ko' ? '점' : ' pts');
    gapEl.style.color = gap >= 0 ? '#16a34a' : 'var(--maple-red)';

    let prob = currentLang === 'ko' ? '낮음' : 'Low';
    if (finalScore >= CRS_BENCHMARKS.VERY_HIGH) prob = currentLang === 'ko' ? '매우 높음' : 'Very High';
    else if (finalScore >= CRS_BENCHMARKS.HIGH) prob = currentLang === 'ko' ? '높음' : 'High';
    else if (finalScore >= CRS_BENCHMARKS.MEDIUM) prob = currentLang === 'ko' ? '중간' : 'Medium';
    document.getElementById('res-prob').innerText = prob;

    renderScoreBreakdown(breakdown, finalScore);
    renderRecommendations(profile);
    renderStrategyCards(profile);
    renderStrategicAdvice(profile);
    renderDrawsTable(finalScore);
    highlightTargetProvince(profile.targetProvince);

    document.getElementById('strategyResults').scrollIntoView({ behavior: 'smooth' });
}

function renderScoreBreakdown(breakdown, total) {
    const container = document.getElementById('scoreBreakdown');
    const labelTotal = currentLang === 'ko' ? '총' : 'Total';
    const labelPoints = currentLang === 'ko' ? '점' : 'pts';
    let html = `<div class="breakdown-card"><h3 style="margin-bottom:16px; font-size:1.1rem;">${currentLang === 'ko' ? '점수 내역' : 'Score Breakdown'} (${labelTotal} <span style="color:var(--maple-red)">${total}${labelPoints}</span>)</h3>`;
    
    const maxMap = SCORE_BREAKDOWN_MAX;

    for (const [label, pts] of Object.entries(breakdown)) {
        if (pts === 0) continue;
        const max = maxMap[label] || 100;
        const pct = Math.min(100, Math.round((pts / max) * 100));
        html += `<div class="breakdown-item">
            <span class="breakdown-label">${label}</span>
            <div class="breakdown-bar-wrap"><div class="breakdown-bar" style="width:${pct}%"></div></div>
            <span class="breakdown-pts">${pts}${labelPoints}</span>
        </div>`;
    }
    html += '</div>';
    container.innerHTML = html;
}

function renderRecommendations(profile) {
    const container = document.getElementById('recommendation-paths');
    container.innerHTML = '';
    const recs = [];

    // CEC
    if (profile.canadianExpYears >= 1 && profile.minCLB >= 7) {
        recs.push({ 
            title: 'Canadian Experience Class (CEC)', 
            badge: currentLang === 'ko' ? '추천' : 'Recommended', 
            desc: currentLang === 'ko' ? `캐나다 경력 ${profile.canadianExpYears}년 + CLB ${profile.minCLB}으로 CEC 자격 충족. 가장 빠른 영주권 경로.` : `Eligible for CEC with ${profile.canadianExpYears}y of Canadian exp + CLB ${profile.minCLB}. Fastest path to PR.`
        });
    }
    // FSW
    if (profile.foreignExpYears >= 1 && profile.minCLB >= 7 && ['bachelor','two_or_more','master','phd','twoyear'].includes(profile.education)) {
        recs.push({ 
            title: 'Federal Skilled Worker (FSW)', 
            badge: currentLang === 'ko' ? '적합' : 'Eligible', 
            desc: currentLang === 'ko' ? '해외 경력 + 학력 + 언어 조건 충족. Express Entry 풀 등록 가능.' : 'Met criteria for Foreign Exp + Edu + Language. Can enter EE pool.'
        });
    }
    // FST
    if (profile.tradeOccupation === 'yes' && profile.minCLB >= 5) {
        recs.push({ 
            title: 'Federal Skilled Trades (FST)', 
            badge: currentLang === 'ko' ? '기술직' : 'Trades', 
            desc: currentLang === 'ko' ? 'CLB 5 이상 기술직 자격자 전용 경로.' : 'Dedicated path for skilled trades with CLB 5+.'
        });
    }
    // Category-based EE
    if (profile.occupationGroup !== 'others') {
        recs.push({ 
            title: currentLang === 'ko' ? `EE 카테고리 선발 (${profile.occupationGroup})` : `EE Category Draw (${profile.occupationGroup})`, 
            badge: 'Best Match', 
            desc: currentLang === 'ko' ? `${profile.occupationGroup} 카테고리 드로우에서 일반 선발보다 낮은 컷오프로 ITA 수령 가능.` : `Opportunity to receive ITA with lower cut-offs in the ${profile.occupationGroup} category.`
        });
    }
    // PNP
    if (profile.targetProvince !== 'any') {
        recs.push({ 
            title: currentLang === 'ko' ? `${profile.targetProvince} 주정부 이민 (PNP)` : `${profile.targetProvince} PNP`, 
            badge: currentLang === 'ko' ? '주정부' : 'Provincial', 
            desc: currentLang === 'ko' ? '노미네이션 획득 시 CRS +600점. 현재 점수와 무관하게 영주권 취득 가능.' : 'Get +600 CRS points with nomination. Obtain PR regardless of current CRS.'
        });
    }
    // AIP
    if (profile.atlanticWilling === 'yes') {
        recs.push({ 
            title: 'Atlantic Immigration Program (AIP)', 
            badge: currentLang === 'ko' ? '파일럿' : 'Pilot', 
            desc: currentLang === 'ko' ? '아틀란틱 4개 주 고용주 지원 기반 이민. CRS 점수 요건 없음.' : 'Employer-driven path in Atlantic provinces. No CRS requirement.'
        });
    }
    // RNIP
    if (profile.ruralWilling === 'yes') {
        recs.push({ 
            title: 'Rural and Northern Immigration Pilot (RNIP)', 
            badge: currentLang === 'ko' ? '농촌' : 'Rural', 
            desc: currentLang === 'ko' ? '지방 소도시 정착 의향이 있는 경우 CRS 없이 커뮤니티 추천 가능.' : 'Community recommendation possible without CRS for those willing to settle in small towns.'
        });
    }
    // French category
    if (profile.frenchCLB >= 7) {
        recs.push({ 
            title: currentLang === 'ko' ? '불어 우수자 카테고리' : 'French-speaking Category', 
            badge: '🇫🇷 French', 
            desc: currentLang === 'ko' ? `불어 CLB ${profile.frenchCLB} 실력으로 컷오프 ~420점 수준의 드로우 대상.` : `Eligible for French draws with ~420 cut-off thanks to CLB ${profile.frenchCLB}.`
        });
    }

    if (recs.length === 0) {
        container.innerHTML = `<p style="color:var(--text-muted); text-align:center; padding:20px; grid-column:1/-1;">${currentLang === 'ko' ? '입력 정보를 더 보완하면 추천 경로가 표시됩니다.' : 'Enter more info to see recommended paths.'}</p>`;
        return;
    }
    recs.forEach(r => {
        container.innerHTML += `<div class="article-card" style="padding:20px;">
            <span class="article-badge">${r.badge}</span>
            <h3 style="margin-top:10px; font-size:1rem;">${r.title}</h3>
            <p style="font-size:0.85rem; color:var(--text-muted); margin-top:8px;">${r.desc}</p>
        </div>`;
    });
}

function renderStrategyCards(profile) {
    const section = document.getElementById('strategy-cards-section');
    const grid = document.getElementById('strategy-cards-grid');
    const isKo = currentLang === 'ko';

    document.getElementById('pipelineScore').textContent = isKo ? `${profile.finalScore}점` : `${profile.finalScore} pts`;
    document.getElementById('pipelineLabel').textContent = isKo ? '전략별 점수 상승 예상' : 'Expected Score Gains';

    const cards = isKo ? [
        { icon: '🗣️', title: '언어 점수 향상',      condition: 'CLB 9~10 달성',                gain: '+40~70점' },
        { icon: '🇫🇷', title: '프랑스어 추가',       condition: 'CLB 7 이상',                   gain: '최대 +50점' },
        { icon: '🏛️', title: 'PNP 노미네이션',      condition: 'EE 연계',                      gain: '+600점' },
        { icon: '🍁', title: '캐나다 경력 쌓기',     condition: 'NOC TEER 0–3, 풀타임',         gain: '최대 +80점' },
        { icon: '🌏', title: '해외 경력 쌓기',       condition: '관련 직종 3년 이상',            gain: '최대 +50점' },
        { icon: '🎓', title: '학위 추가',            condition: '학사 → 석사/박사',             gain: '최대 +200점' },
        { icon: '🏠', title: '캐나다 학력/가족',     condition: '캐나다 학위 1년+ → +30점<br>형제·자매 거주 → +15점', gain: '최대 +45점' },
    ] : [
        { icon: '🗣️', title: 'Language Score',      condition: 'Achieve CLB 9–10',             gain: '+40–70 pts' },
        { icon: '🇫🇷', title: 'French Language',    condition: 'CLB 7+',                       gain: 'Up to +50 pts' },
        { icon: '🏛️', title: 'PNP Nomination',      condition: 'EE-linked',                    gain: '+600 pts' },
        { icon: '🍁', title: 'Canadian Work Exp',   condition: 'NOC TEER 0–3, full-time',      gain: 'Up to +80 pts' },
        { icon: '🌏', title: 'Foreign Work Exp',    condition: '3+ years in related field',    gain: 'Up to +50 pts' },
        { icon: '🎓', title: 'Higher Education',    condition: 'Bachelor → Master / PhD',      gain: 'Up to +200 pts' },
        { icon: '🏠', title: 'Study & Family',      condition: 'Canadian study → +30 pts<br>Sibling in Canada → +15 pts', gain: 'Up to +45 pts' },
    ];

    grid.innerHTML = cards.map(c => `
        <div class="strategy-card">
            <div class="strategy-card-icon">${c.icon}</div>
            <div class="strategy-card-title">${c.title}</div>
            <div class="strategy-card-condition">${c.condition}</div>
            <div class="strategy-card-gain">${c.gain}</div>
        </div>`).join('');

    section.style.display = 'block';
}

function renderStrategicAdvice(profile) {
    const container = document.getElementById('strategic-advice');
    const advices = [];
    if (currentLang === 'ko') {
        if (profile.minCLB < 9) advices.push('💡 언어 점수 향상이 최우선입니다. CLB 9 달성 시 이전성 점수 +50점 포함 큰 폭의 점수 상승이 가능합니다.');
        if (profile.canadianExpYears === 0 && profile.foreignExpYears >= 1) advices.push('🍁 캐나다 내 경력이 없습니다. 워크퍼밋을 통해 CEC 자격을 만드는 것이 장기적으로 가장 유리합니다.');
        if (profile.hasPNP === 0 && profile.targetProvince !== 'any') advices.push(`🏛️ ${profile.targetProvince} PNP에 관심이 있으신 경우, 주정부 NOI(관심 표명서) 제출이나 고용주 연계 경로를 탐색하세요.`);
        if (profile.frenchCLB < 7 && profile.canStudyFrench === 'yes') advices.push('🇫🇷 불어 CLB 7 이상 달성 시 일반 선발 대비 약 70~100점 낮은 컷오프 드로우에 참여 가능합니다.');
        if (profile.age >= 35) advices.push('⏰ 나이에 따른 점수 감소가 시작됩니다. 가능한 빠르게 Express Entry 풀에 등록하는 것이 유리합니다.');
        if (profile.finalScore >= 500) advices.push('✅ 현재 점수는 일반 Express Entry 선발 권내입니다. 프로필 최신화 및 정기 모니터링을 권장합니다.');
        if (profile.atlanticWilling === 'yes') advices.push('🌊 아틀란틱 이민 파일럿(AIP)은 고용주 지원 기반으로 CRS 점수 제한이 없습니다. 해당 주 취업 활동에 집중하세요.');
        if (profile.businessIntent === 'yes') advices.push('🏢 비즈니스 이민(Start-up Visa, Self-Employed 등)도 대안으로 검토해 보세요. CRS 없이 진행 가능합니다.');
    } else {
        if (profile.minCLB < 9) advices.push('💡 Improving language scores is top priority. Reaching CLB 9 can trigger +50 pts in transferability.');
        if (profile.canadianExpYears === 0 && profile.foreignExpYears >= 1) advices.push('🍁 No Canadian experience. Obtaining a work permit to qualify for CEC is best for long-term success.');
        if (profile.hasPNP === 0 && profile.targetProvince !== 'any') advices.push(`🏛️ For ${profile.targetProvince} PNP, explore submitting NOI or employer-linked streams.`);
        if (profile.frenchCLB < 7 && profile.canStudyFrench === 'yes') advices.push('🇫🇷 French CLB 7+ opens draws with 70-100 pts lower cut-offs than general draws.');
        if (profile.age >= 35) advices.push('⏰ Age points are decreasing. Entering the EE pool as soon as possible is recommended.');
        if (profile.finalScore >= 500) advices.push('✅ Current score is competitive for general draws. Keep your profile updated.');
        if (profile.atlanticWilling === 'yes') advices.push('🌊 AIP is employer-driven with no CRS floor. Focus on job hunting in the Atlantic region.');
        if (profile.businessIntent === 'yes') advices.push('🏢 Consider Business Immigration (SUV, etc.) which can be processed without CRS.');
    }
    
    if (advices.length === 0) advices.push(currentLang === 'ko' ? '📋 입력 정보를 더 완성하면 맞춤형 전략 조언이 제공됩니다.' : '📋 More advice will be available once you complete your profile.');
    
    container.innerHTML = `<h3 style="margin-bottom:16px; color:var(--primary);">${currentLang === 'ko' ? '전략 조언 (우선순위 순)' : 'Strategic Advice (Priority)'}</h3>` +
        advices.map(a => `<div class="advice-item">${a}</div>`).join('');
}

let blogFilter = 'all';
let blogSearch = '';
let blogShowCount = 6;
let blogSearchTimer = null;

function getFilteredArticles() {
    const data = articlesData[currentLang];
    const results = [];
    data.forEach((article, index) => {
        const meta = articlesMeta[index] || {};
        if (blogFilter !== 'all') {
            if (blogFilter === 'news') {
                if (meta.type !== 'news' && meta.type !== 'special') return;
            } else if (meta.type !== blogFilter) return;
        }
        if (blogSearch) {
            const q = blogSearch.toLowerCase();
            if (!article.title.toLowerCase().includes(q) && !article.summary.toLowerCase().includes(q)) return;
        }
        results.push({ article, index, meta });
    });
    return results;
}

function renderPosts() {
    const list = document.getElementById("articles").querySelector(".articles-grid");
    if (!list) return;
    list.innerHTML = "";

    const filtered = getFilteredArticles();
    const visible = filtered.slice(0, blogShowCount);
    const btnText = currentLang === 'ko' ? '자세히 보기' : 'Read More';
    const newLabel = 'NEW';

    const emptyEl = document.getElementById('blogEmpty');
    const loadMoreWrap = document.querySelector('.blog-load-more-wrap');

    if (filtered.length === 0) {
        if (emptyEl) emptyEl.style.display = 'block';
        if (loadMoreWrap) loadMoreWrap.style.display = 'none';
        return;
    }
    if (emptyEl) emptyEl.style.display = 'none';

    visible.forEach(({ article, index, meta }, i) => {
        const isFeatured = i === 0 && blogFilter === 'all' && !blogSearch;
        const badgeEl = `<span class="article-badge article-badge--${meta.type || ''}">${article.badge}</span>`;
        const newBadge = isNewArticle(meta.pubDate) ? `<span class="article-new-badge">${newLabel}</span>` : '';
        const readMoreEl = `<span class="read-more-link">${btnText} →</span>`;

        const el = document.createElement("article");
        el.className = `article-card${isFeatured ? ' article-card--featured' : ''}`;
        el.setAttribute('role', 'button');
        el.setAttribute('tabindex', '0');
        el.onclick = () => openArticle(index);
        el.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') openArticle(index); };

        if (isFeatured) {
            el.innerHTML = `
                <div class="article-card-left">
                    <div class="article-card-top">${badgeEl}${newBadge}</div>
                    <h3>${article.title}</h3>
                    <div class="article-meta">${article.date}</div>
                </div>
                <div class="article-card-right">
                    <div class="article-summary">${article.summary}</div>
                    ${readMoreEl}
                </div>`;
        } else {
            el.innerHTML = `
                <div>
                    <div class="article-card-top">${badgeEl}${newBadge}</div>
                    <h3>${article.title}</h3>
                    <div class="article-meta">${article.date}</div>
                    <div class="article-summary">${article.summary}</div>
                </div>
                ${readMoreEl}`;
        }
        list.appendChild(el);
    });

    if (loadMoreWrap) {
        loadMoreWrap.style.display = filtered.length > blogShowCount ? 'flex' : 'none';
    }
}

function initBlogToolbar() {
    document.querySelectorAll('.blog-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.blog-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            blogFilter = btn.dataset.filter;
            blogShowCount = 6;
            renderPosts();
        });
    });

    const searchInput = document.getElementById('blogSearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            clearTimeout(blogSearchTimer);
            blogSearchTimer = setTimeout(() => {
                blogSearch = searchInput.value.trim();
                blogShowCount = 6;
                renderPosts();
            }, 300);
        });
    }

    const loadMoreBtn = document.getElementById('blogLoadMore');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            blogShowCount += 6;
            renderPosts();
        });
    }
}
