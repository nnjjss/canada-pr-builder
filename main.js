const articlesData = [
    {
        title: "2026년 익스프레스 엔트리: 카테고리 기반 선발 이해하기",
        badge: "익스프레스 엔트리",
        date: "2026년 2월 24일",
        content: `<p>IRCC는 카테고리 기반 선발을 통해 익스프레스 엔트리 시스템을 혁신했습니다. 2026년에는 특정 경제적 목표를 달성하기 위해 보건 의료, STEM, 기술직 등 5가지 분야에 집중하고 있습니다.</p>`
    },
    {
        title: "프랑스어 능력의 엄청난 혜택",
        badge: "꿀팁",
        date: "2026년 2월 22일",
        content: `<p>프랑스어 우수자 전형은 일반 선발보다 훨씬 낮은 점수로 영주권 초청장을 받을 수 있는 지름길입니다.</p>`
    },
    {
        title: "온타리오 주정부(OINP) 인적 자본 우선순위 스트림 완벽 가이드",
        badge: "PNP",
        date: "2026년 2월 20일",
        content: `<p>잡오퍼 없이도 600점을 가산받을 수 있는 온타리오주의 대표적인 이민 경로입니다.</p>`
    },
    {
        title: "2026년 정착 자금 증명: 업데이트된 요구 사항",
        badge: "필수 요건",
        date: "2026년 2월 18일",
        content: `<p>가족 수에 따른 최신 정착 자금 요구액을 확인하고 서류를 준비하세요.</p>`
    },
    {
        title: "잡오퍼 없이 CRS 점수를 올리는 방법",
        badge: "전략",
        date: "2026년 2월 15일",
        content: `<p>학력 업그레이드, 배우자 가산점, 언어 점수 극대화 등 실질적인 점수 향상 팁을 공개합니다.</p>`
    },
    {
        title: "알버타 주정부(AAIP) 테크 패스웨이",
        badge: "PNP",
        date: "2026년 2월 12일",
        content: `<p>IT 전문가라면 알버타주의 가속 테크 패스웨이를 통해 빠르게 영주권을 취득할 수 있습니다.</p>`
    },
    {
        title: "BC 주정부(BC PNP) 테크 드로우",
        badge: "PNP",
        date: "2026년 2월 10일",
        content: `<p>매주 진행되는 BC주의 테크 전용 선발은 예측 가능성이 높은 최고의 경로입니다.</p>`
    },
    {
        title: "TEER 시스템 이해하기: NOC 2021 완벽 정리",
        badge: "기초 지식",
        date: "2026년 2월 8일",
        content: `<p>변경된 TEER 카테고리에 맞춰 본인의 숙련직 등급을 정확히 파악하는 법을 알려드립니다.</p>`
    },
    {
        title: "유학 후 이민: 졸업 후 취업 비자(PGWP) 활용하기",
        badge: "학생",
        date: "2026년 2월 5일",
        content: `<p>캐나다 대학 졸업 후 받는 PGWP를 영주권으로 연결하는 로드맵입니다.</p>`
    },
    {
        title: "익스프레스 엔트리 거절을 부르는 흔한 실수들",
        badge: "주의사항",
        date: "2026년 2월 1일",
        content: `<p>범죄 경력 증명서 유효 기간, 경력 증명서 필수 항목 등 사소하지만 치명적인 실수들을 정리했습니다.</p>`
    }
];

// --- 네비게이션 및 스크롤 효과 ---
window.addEventListener('scroll', () => {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 100) {
        nav.style.padding = '8px 20px';
        nav.style.top = '10px';
    } else {
        nav.style.padding = '12px 30px';
        nav.style.top = '20px';
    }
});

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const offset = 100; // nav height offset
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});

// --- CRS 계산기 로직 ---
function toggleSpouseSection() {
    const status = document.getElementById('maritalStatus').value;
    const spouseSection = document.getElementById('spouseSection');
    spouseSection.style.display = status === 'married' ? 'block' : 'none';
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

    // 1. 나이
    let agePoints = 0;
    if (age >= 20 && age <= 29) agePoints = isMarried ? 100 : 110;
    else if (age >= 30 && age <= 44) {
        let base = isMarried ? 100 : 110;
        let deduct = isMarried ? 5 : 6;
        agePoints = base - ((age - 29) * deduct);
    }
    total += Math.max(0, agePoints);

    // 2. 학력
    const eduMap = {
        'highschool': isMarried ? 28 : 30,
        'bachelor': isMarried ? 112 : 120,
        'two_or_more': isMarried ? 119 : 128,
        'master': isMarried ? 126 : 135,
        'phd': isMarried ? 140 : 150
    };
    total += eduMap[education] || 0;

    // 3. 언어 (단순화)
    const langMap = { 7: isMarried ? 64 : 68, 8: isMarried ? 88 : 92, 9: isMarried ? 116 : 124, 10: isMarried ? 128 : 136 };
    total += langMap[language] || 0;

    // 4. 캐나다 경력
    const canExpMap = { 1: isMarried ? 35 : 40, 2: isMarried ? 46 : 53, 3: isMarried ? 70 : 80 };
    total += canExpMap[canadianExp] || 0;

    // 5. 기술 전이
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

    // 6. 배우자
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

// --- 기사 모달 ---
function openArticle(index) {
    const article = articlesData[index];
    const modal = document.getElementById("articleModal");
    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = `
        <span class="article-badge">${article.badge}</span>
        <h2>${article.title}</h2>
        <div class="article-meta">${article.date}</div>
        <div class="full-content">${article.content}</div>
        <button class="read-more-btn" style="margin-top:30px; width:100%" onclick="closeArticle()">닫기</button>
    `;
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeArticle() {
    document.getElementById("articleModal").style.display = "none";
    document.body.style.overflow = "auto";
}

window.onclick = (e) => { if (e.target.className === 'modal') closeArticle(); };

// --- 커뮤니티 (LocalStorage) ---
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

// --- 테마 설정 ---
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.textContent = theme === 'dark' ? '☀️ 라이트 모드' : '🌙 다크 모드';
});

// 초기화
document.addEventListener('DOMContentLoaded', () => {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        themeToggle.textContent = '☀️ 라이트 모드';
    }
    renderPosts();
});
