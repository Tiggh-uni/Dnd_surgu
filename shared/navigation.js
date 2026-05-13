// shared/navigation.js
document.addEventListener('DOMContentLoaded', function() {
    const navHtml = `
        <nav class="top-nav">
            <a href="../index.html">🏠 Главная</a>
            <a href="quest-generator.html">🎲 Генератор квестов</a>
        </nav>
    `;
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navHtml;
    }
});
