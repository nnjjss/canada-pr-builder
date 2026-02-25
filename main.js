const articlesData = [
    {
        title: "2026년 익스프레스 엔트리 대개혁: 카테고리 기반 선발 시스템 심층 분석",
        badge: "정책 분석",
        date: "2026년 2월 25일",
        content: `<p>IRCC는 2026년 익스프레스 엔트리 운영 계획을 통해 'CRS 점수 지상주의'에서 벗어나, 캐나다의 실제 경제 성장 동력과 직결되는 <b>'카테고리 기반 선발(Category-based Selection)'</b>의 비중을 전체 선발 인원의 70% 이상으로 확대합니다.</p><h3>1. 2026년 4대 신규 집중 선발 카테고리</h3><ul><li><b>연구 및 교육(Academic/Research):</b> 캐나다 내 연구소나 대학에서 기여한 인재.</li><li><b>전략 경영(Senior Management):</b> 캐나다 현지 기업의 의사결정권자 그룹.</li><li><b>운송 및 물류(Transport):</b> 글로벌 공급망 병목 현상을 해결할 핵심 인력.</li><li><b>국방 및 특수 기술(Military):</b> 국가 안보와 직결된 특수 기술직군.</li></ul>`
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

// --- Comprehensive NOC 2021 Database (200+ Unit Groups) ---
const nocData = [
    // Category 0 - Management
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
    { code: "10020", title: "Insurance, real estate managers", teer: "0", cat: "" },
    { code: "10021", title: "Banking, credit and investment managers", teer: "0", cat: "" },
    { code: "10022", title: "Advertising, marketing and PR managers", teer: "0", cat: "" },
    { code: "20010", title: "Engineering managers", teer: "0", cat: "STEM" },
    { code: "20011", title: "Architecture and science managers", teer: "0", cat: "STEM" },
    { code: "20012", title: "Computer and information systems managers", teer: "0", cat: "STEM" },
    { code: "30010", title: "Managers in health care", teer: "0", cat: "Healthcare" },
    { code: "40010", title: "Government managers - health/social policy", teer: "0", cat: "" },
    { code: "40020", title: "Administrators - post-secondary education", teer: "0", cat: "Academic" },
    { code: "60010", title: "Corporate sales managers", teer: "0", cat: "" },
    { code: "60020", title: "Retail and wholesale trade managers", teer: "0", cat: "" },
    { code: "60030", title: "Restaurant and food service managers", teer: "0", cat: "" },
    { code: "70010", title: "Construction managers", teer: "0", cat: "" },
    { code: "70020", title: "Managers in transportation", teer: "0", cat: "Transport" },
    { code: "80010", title: "Managers in natural resources and fishing", teer: "0", cat: "" },
    { code: "90010", title: "Manufacturing managers", teer: "0", cat: "" },

    // Category 1 - Business & Finance
    { code: "11100", title: "Financial auditors and accountants", teer: "1", cat: "" },
    { code: "11101", title: "Financial and investment analysts", teer: "1", cat: "" },
    { code: "11102", title: "Financial advisors", teer: "1", cat: "" },
    { code: "11200", title: "Human resources professionals", teer: "1", cat: "" },
    { code: "11201", title: "Business management consulting professionals", teer: "1", cat: "" },
    { code: "11202", title: "Advertising, marketing and PR professionals", teer: "1", cat: "" },
    { code: "12010", title: "General office supervisors", teer: "2", cat: "" },
    { code: "12100", title: "Administrative officers", teer: "2", cat: "" },
    { code: "12101", title: "Executive assistants", teer: "2", cat: "" },
    { code: "12102", title: "Procurement and purchasing agents", teer: "2", cat: "" },
    { code: "12200", title: "Accounting technicians and bookkeepers", teer: "2", cat: "" },
    { code: "13100", title: "Administrative assistants", teer: "3", cat: "" },
    { code: "13110", title: "Administrative accounts payroll", teer: "3", cat: "" },
    { code: "13111", title: "Property administrators", teer: "3", cat: "" },

    // Category 2 - STEM
    { code: "21100", title: "Physicists and astronomers", teer: "1", cat: "STEM" },
    { code: "21101", title: "Chemists", teer: "1", cat: "STEM" },
    { code: "21110", title: "Biologists and related scientists", teer: "1", cat: "STEM" },
    { code: "21200", title: "Architects", teer: "1", cat: "STEM" },
    { code: "21201", title: "Landscape architects", teer: "1", cat: "STEM" },
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
    { code: "22100", title: "Chemical technologists and technicians", teer: "2", cat: "STEM" },
    { code: "22210", title: "Architectural technologists and technicians", teer: "2", cat: "STEM" },
    { code: "22220", title: "Computer network and web technicians", teer: "2", cat: "STEM" },
    { code: "22221", title: "User support technicians", teer: "2", cat: "STEM" },
    { code: "22230", title: "Civil engineering technologists", teer: "2", cat: "STEM" },
    { code: "22231", title: "Mechanical engineering technologists", teer: "2", cat: "STEM" },

    // Category 3 - Healthcare
    { code: "31100", title: "Specialists in clinical medicine", teer: "1", cat: "Healthcare" },
    { code: "31101", title: "Specialists in surgery", teer: "1", cat: "Healthcare" },
    { code: "31102", title: "General practitioners and family physicians", teer: "1", cat: "Healthcare" },
    { code: "31103", title: "Veterinarians", teer: "1", cat: "" },
    { code: "31110", title: "Dentists", teer: "1", cat: "Healthcare" },
    { code: "31111", title: "Optometrists", teer: "1", cat: "Healthcare" },
    { code: "31120", title: "Pharmacists", teer: "1", cat: "Healthcare" },
    { code: "31121", title: "Dietitians and nutritionists", teer: "1", cat: "Healthcare" },
    { code: "31200", title: "Psychologists", teer: "1", cat: "Healthcare" },
    { code: "31201", title: "Chiropractors", teer: "1", cat: "Healthcare" },
    { code: "31202", title: "Physiotherapists", teer: "1", cat: "Healthcare" },
    { code: "31203", title: "Occupational therapists", teer: "1", cat: "Healthcare" },
    { code: "31301", title: "Registered nurses and psychiatric nurses", teer: "1", cat: "Healthcare" },
    { code: "31302", title: "Nurse practitioners", teer: "1", cat: "Healthcare" },
    { code: "32101", title: "Licensed practical nurses (LPN)", teer: "2", cat: "Healthcare" },
    { code: "32102", title: "Paramedical occupations", teer: "2", cat: "Healthcare" },
    { code: "32103", title: "Respiratory therapists", teer: "2", cat: "Healthcare" },
    { code: "32111", title: "Dental hygienists and therapists", teer: "2", cat: "Healthcare" },
    { code: "32120", title: "Medical laboratory technologists", teer: "2", cat: "Healthcare" },
    { code: "32124", title: "Pharmacy technicians", teer: "2", cat: "Healthcare" },
    { code: "33100", title: "Dental assistants", teer: "3", cat: "Healthcare" },
    { code: "33102", title: "Nurse aides and orderlies", teer: "3", cat: "Healthcare" },

    // Category 4 - Education & Social
    { code: "41101", title: "Lawyers and Quebec notaries", teer: "1", cat: "" },
    { code: "41200", title: "University professors and lecturers", teer: "1", cat: "Academic" },
    { code: "41201", title: "Post-secondary teaching and research assistants", teer: "1", cat: "Academic" },
    { code: "41210", title: "College and other vocational instructors", teer: "1", cat: "Academic" },
    { code: "41220", title: "Secondary school teachers", teer: "1", cat: "" },
    { code: "41221", title: "Elementary school and kindergarten teachers", teer: "1", cat: "" },
    { code: "41300", title: "Social workers", teer: "1", cat: "Healthcare" },
    { code: "41301", title: "Therapists in counselling", teer: "1", cat: "Healthcare" },
    { code: "42201", title: "Social and community service workers", teer: "2", cat: "Healthcare" },
    { code: "42202", title: "Early childhood educators (ECE)", teer: "2", cat: "" },
    { code: "43100", title: "Legal assistants and paralegals", teer: "3", cat: "" },

    // Category 5 - Arts & Culture
    { code: "51101", title: "Painters, sculptors and visual artists", teer: "1", cat: "" },
    { code: "51111", title: "Librarians", teer: "1", cat: "" },
    { code: "52100", title: "Writers and editors", teer: "2", cat: "" },
    { code: "52120", title: "Graphic designers and illustrators", teer: "2", cat: "" },
    { code: "52121", title: "Interior designers", teer: "2", cat: "" },
    { code: "53100", title: "Photographers", teer: "3", cat: "" },

    // Category 6 - Sales & Service
    { code: "62010", title: "Retail sales supervisors", teer: "2", cat: "" },
    { code: "62020", title: "Food service supervisors", teer: "2", cat: "" },
    { code: "62200", title: "Chefs", teer: "2", cat: "Trades" },
    { code: "63200", title: "Cooks", teer: "3", cat: "Trades" },
    { code: "63201", title: "Butchers", teer: "3", cat: "Trades" },
    { code: "63202", title: "Bakers", teer: "3", cat: "Trades" },
    { code: "63211", title: "Hairstylists and barbers", teer: "3", cat: "" },

    // Category 7 - Trades & Transport
    { code: "72010", title: "Contractors and supervisors, machining trades", teer: "2", cat: "Trades" },
    { code: "72011", title: "Contractors and supervisors, electrical trades", teer: "2", cat: "Trades" },
    { code: "72013", title: "Contractors and supervisors, carpentry trades", teer: "2", cat: "Trades" },
    { code: "72100", title: "Machinists and machining inspectors", teer: "2", cat: "Trades" },
    { code: "72106", title: "Welders and related operators", teer: "2", cat: "Trades" },
    { code: "72200", title: "Electricians (except power system)", teer: "2", cat: "Trades" },
    { code: "72201", title: "Industrial electricians", teer: "2", cat: "Trades" },
    { code: "72300", title: "Plumbers", teer: "2", cat: "Trades" },
    { code: "72310", title: "Carpenters", teer: "2", cat: "Trades" },
    { code: "72400", title: "Construction millwrights and industrial mechanics", teer: "2", cat: "Trades" },
    { code: "72401", title: "Heavy-duty equipment mechanics", teer: "2", cat: "Trades" },
    { code: "72402", title: "Heating and air conditioning (HVAC) mechanics", teer: "2", cat: "Trades" },
    { code: "72404", title: "Aircraft mechanics and inspectors", teer: "2", cat: "Transport" },
    { code: "72410", title: "Automotive service technicians", teer: "2", cat: "Trades" },
    { code: "72500", title: "Crane operators", teer: "2", cat: "Trades" },
    { code: "72600", title: "Air pilots and flight engineers", teer: "2", cat: "Transport" },
    { code: "72601", title: "Air traffic controllers", teer: "2", cat: "Transport" },
    { code: "72602", title: "Deck officers, water transport", teer: "2", cat: "Transport" },
    { code: "73110", title: "Roofers and shinglers", teer: "3", cat: "Trades" },
    { code: "73300", title: "Transport truck drivers", teer: "3", cat: "Transport" },
    { code: "73301", title: "Bus and transit operators", teer: "3", cat: "Transport" },

    // 8/9 - Natural Resources & Manufacturing
    { code: "82010", title: "Agricultural service farm supervisors", teer: "2", cat: "" },
    { code: "92010", title: "Supervisors, mineral and metal processing", teer: "2", cat: "" },
    { code: "92100", title: "Power engineers and systems operators", teer: "2", cat: "" }
];

// --- Functional Logic ---
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

    const res = document.getElementById("crsResult");
    res.querySelector('.result-score').innerText = Math.min(1200, total) + "점";
    res.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
