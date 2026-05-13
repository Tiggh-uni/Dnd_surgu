// shared/navigation.js
document.addEventListener('DOMContentLoaded', function() {
    const navHtml = `
        <nav class="top-nav">
            <a href="../index.html">🏠 Главная</a>
            <a href="quests.html">🎲 Генератор квестов</a>
            <a href="initiative.html"> Генератор инициативы</a>
        </nav>
    `;
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navHtml;
    }
});
