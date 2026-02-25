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

// --- Comprehensive NOC 2021 Database ---
const nocData = [
    { code: "00010", title: "Legislators", teer: "0", cat: "" },
    { code: "00012", title: "Senior managers - financial, communications", teer: "0", cat: "Management" },
    { code: "21232", title: "Software developers and programmers", teer: "1", cat: "STEM" },
    { code: "31301", title: "Registered nurses", teer: "1", cat: "Healthcare" },
    { code: "63200", title: "Cooks", teer: "3", cat: "Trades" },
    { code: "73300", title: "Transport truck drivers", teer: "3", cat: "Transport" }
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
