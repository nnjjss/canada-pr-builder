function calculateCRS() {
    let age = parseInt(document.getElementById("age").value) || 0;
    let education = parseInt(document.getElementById("education").value);
    let language = parseInt(document.getElementById("language").value);
    let canadianExp = parseInt(document.getElementById("canadianExp").value);

    // Simple Age Points Logic
    let agePoints = 0;
    if(age >= 20 && age <= 29) agePoints = 110;
    else if(age >= 30 && age <= 35) agePoints = 90;
    else if(age >= 36 && age <= 40) agePoints = 70;
    else if(age > 40) agePoints = 40;

    let total = agePoints + education + language + canadianExp;
    document.getElementById("crsResult").innerText = "Total Points: " + total;
}

function addPost() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    if(title === "" || content === "") return;

    let blogList = document.getElementById("blogList");
    let post = document.createElement("div");
    post.className = "blog-post";
    post.innerHTML = "<h3>" + title + "</h3><p>" + content + "</p>";
    blogList.prepend(post);

    saveToLocalStorage(title, content);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}

function saveToLocalStorage(title, content) {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push({title, content});
    localStorage.setItem("posts", JSON.stringify(posts));
}

function loadPosts() {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    let blogList = document.getElementById("blogList");
    posts.reverse().forEach(post => {
        let div = document.createElement("div");
        div.className = "blog-post";
        div.innerHTML = "<h3>" + post.title + "</h3><p>" + post.content + "</p>";
        blogList.appendChild(div);
    });
}

// Theme Toggle Logic
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeToggle.textContent = '☀️ Light Mode';
    }
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙 Dark Mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️ Light Mode';
    }
});

loadPosts();
