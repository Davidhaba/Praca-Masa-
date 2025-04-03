document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load', () => {
        document.getElementById('loader').style.display = 'none';
    });

    const savedLang = safeStorage.get('lang') || 'uk';
    showLanguage(savedLang);
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            showLanguage(btn.getAttribute('data-lang'));
        });
    });

    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 10 ? 'block' : 'none';
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

function showLanguage(lang) {
    document.querySelectorAll('.language-content').forEach(content => {
        content.classList.toggle('active', content.id === lang);
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    safeStorage.set('lang', lang);
}

const safeStorage = { 
    set: (k, v) => { try { localStorage.setItem(k, v) } catch {} }, 
    get: k => { try { return localStorage.getItem(k) } catch { return null } } 
};
