document.addEventListener('DOMContentLoaded', function() {
    let pathToRoot = '';
    if (window.location.pathname.includes('/generators/')) {
        pathToRoot = '../';
    }
    const navHtml = `
        <nav style="background: white; padding: 1rem 2rem; border-bottom: 1px solid #e0cfbc; display: flex; gap: 1.5rem; flex-wrap: wrap;">
            <a href="${pathToRoot}index.html" style="color: #6b3f1c; text-decoration: none; font-weight: bold;">🏠 Главная</a>
            <a href="${pathToRoot}generators/quest.html" style="color: #6b3f1c; text-decoration: none;">🎲 Генератор квестов</a>
            <a href="${pathToRoot}generators/initiative.html" style="color: #6b3f1c; text-decoration: none;">⚔️ Генератор инициативы</a>
        </nav>
    `;
    const placeholder = document.getElementById('nav-placeholder');
    if (placeholder) placeholder.innerHTML = navHtml;
});
