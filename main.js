const articlesData = [
    {
        title: "2026년 대변화: 새로운 카테고리 기반 선발(Category-based) 안내",
        badge: "긴급 뉴스",
        date: "2026년 2월 25일",
        content: `
            <p>IRCC는 2026년 익스프레스 엔트리 운영 방침을 발표하며 기존 직군을 넘어선 <b>4대 핵심 전략 카테고리</b>를 추가했습니다. 이제 일반 CRS 점수가 낮더라도 아래 직군에 해당하면 우선 초청 대상이 됩니다.</p>
            <ul>
                <li><b>연구 및 교육(Academic/Research):</b> 캐나다 경력이 있는 연구자, 대학 교수 및 강사.</li>
                <li><b>전략 경영(Senior Management):</b> 캐나다 내 기업 운영 경력을 가진 시니어 매니저.</li>
                <li><b>운송(Transport):</b> 파일럿, 항공 정비사 및 물류 핵심 인력.</li>
                <li><b>국방 및 군 기술(Military):</b> 군 관련 숙련 직군 및 군 기술 전문가.</li>
            </ul>
            <p>이 카테고리들은 기존 일반 선발(All-program draw)보다 훨씬 낮은 점수 커트라인이 형성될 것으로 예상됩니다.</p>
        `
    },
    {
        title: "캐나다 경력 연구자 및 교수진을 위한 우선권",
        badge: "연구직",
        date: "2026년 2월 24일",
        content: `<p>캐나다 대학이나 연구소에서 경력을 쌓은 연구자와 교수진이 2026년 전략 카테고리에 포함되었습니다. 학위와 연구 실적뿐만 아니라 캐나다 내에서의 고용 이력이 있다면 매우 유리한 고지를 점할 수 있습니다.</p>`
    },
    {
        title: "시니어 매니저(Senior Manager) 전형 분석",
        badge: "매니지먼트",
        date: "2026년 2월 23일",
        content: `<p>캐나다 경제 활성화를 위해 고도의 관리 능력을 갖춘 시니어 매니저 직군이 카테고리 기반 선발의 한 축을 담당하게 되었습니다. NOC TEER 0 등급 중 특정 시니어 직종이 포함됩니다.</p>`
    },
    {
        title: "항공 및 운송 전문 인력의 기회",
        badge: "운송직",
        date: "2026년 2월 22일",
        content: `<p>파일럿, 항공기 정비사 등 운송 분야의 핵심 인력 부족을 해결하기 위해 별도의 드로우가 강화됩니다. 관련 자격증과 캐나다 내 경력을 준비하세요.</p>`
    },
    {
        title: "군 관련 숙련직(Military) 신규 카테고리",
        badge: "국방",
        date: "2026년 2월 21일",
        content: `<p>2026년부터는 국방 분야의 기술력을 확보하기 위해 군 관련 숙련 기술직에 대한 우대 정책이 시행됩니다. 이는 매우 이례적인 변화로, 해당 기술 보유자들에게는 절호의 기회입니다.</p>`
    },
    {
        title: "프랑스어 능력의 엄청난 혜택 (2026 유지)",
        badge: "프랑스어",
        date: "2026년 2월 20일",
        content: `<p>언어 카테고리 중 프랑스어 우수자 전형은 여전히 강력합니다. 2026년에도 다른 직군 카테고리와 병행하여 가장 낮은 컷오프를 유지할 전망입니다.</p>`
    }
];

// --- 기사 모달 제어 (전역 함수로 유지하되 안정성 강화) ---
window.openArticle = function(index) {
    console.log("Attempting to open article at index:", index);
    const article = articlesData[index];
    if (!article) return;

    const modal = document.getElementById("articleModal");
    const modalBody = document.getElementById("modalBody");

    if (!modal || !modalBody) return;

    modalBody.innerHTML = `
        <span class="article-badge">${article.badge}</span>
        <h2>${article.title}</h2>
        <div class="article-meta">${article.date}</div>
        <div class="full-content">${article.content}</div>
        <button class="read-more-btn" style="margin-top:30px; width:100%" id="modalCloseBtn">닫기</button>
    `;

    modal.style.display = "block";
    document.body.style.overflow = "hidden";

    document.getElementById("modalCloseBtn").onclick = closeArticle;
};

window.closeArticle = function() {
    const modal = document.getElementById("articleModal");
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
};

// --- 초기화 로직 ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    // 1. 네비게이션 효과
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.style.padding = '8px 20px';
            nav.style.top = '10px';
        } else {
            nav.style.padding = '12px 30px';
            nav.style.top = '20px';
        }
    });

    // 2. 테마 설정
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            themeToggle.textContent = '☀️ 라이트 모드';
        }
        themeToggle.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            themeToggle.textContent = theme === 'dark' ? '☀️ 라이트 모드' : '🌙 다크 모드';
        });
    }

    // 3. 커뮤니티 렌더링
    renderPosts();

    // 4. 모달 바깥 클릭 시 닫기
    window.onclick = (e) => {
        const modal = document.getElementById("articleModal");
        if (e.target === modal) closeArticle();
    };
});

// --- 기존 함수 유지 ---
function toggleSpouseSection() {
    const status = document.getElementById('maritalStatus').value;
    const spouseSection = document.getElementById('spouseSection');
    if(spouseSection) spouseSection.style.display = status === 'married' ? 'block' : 'none';
}

function calculateCRS() {
    const status = document.getElementById('maritalStatus').value;
    const isMarried = (status === 'married');
    
    let age = parseInt(document.getElementById("age").value) || 0;
    let education = document.getElementById("education").value;
    let language = parseInt(document.getElementById("language").value) || 0;
    let canadianExp = parseInt(document.getElementById("canadianExp").value) || 0;
    let foreignExp = parseInt(document.getElementById("foreignExp").value) || 0;

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

    let transfer = 0;
    if (education !== 'highschool' && education !== '0') {
        if (language >= 9) transfer += 50;
        else if (language >= 7) transfer += 25;
    }
    if (foreignExp >= 1) {
        if (language >= 9) transfer += (foreignExp >= 3 ? 50 : 25);
        else if (language >= 7) transfer += (foreignExp >= 3 ? 25 : 13);
    }
    total += Math.min(100, transfer);

    if (isMarried) {
        const sEdu = document.getElementById("spouseEducation").value;
        const sLang = parseInt(document.getElementById("spouseLanguage").value) || 0;
        if (sEdu === 'bachelor') total += 8; else if (sEdu === 'master') total += 10;
        if (sLang >= 9) total += 20; else if (sLang >= 7) total += 12;
    }

    const res = document.getElementById("crsResult");
    res.querySelector('.result-score').innerText = total + "점";
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
