// Follow the system until the visitor chooses an appearance.
(() => {
    const system = window.matchMedia('(prefers-color-scheme: dark)');
    let preference = null;
    try {
        const saved = localStorage.getItem('portfolio-appearance');
        if (saved === 'light' || saved === 'dark') preference = saved;
    } catch { /* System appearance works when storage is unavailable. */ }
    const currentMode = () => preference || (system.matches ? 'dark' : 'light');
    function apply() {
        if (preference) document.documentElement.dataset.theme = preference;
        else document.documentElement.removeAttribute('data-theme');
    }
    apply();
    document.addEventListener('DOMContentLoaded', () => {
        const button = document.querySelector('.appearance-toggle');
        function updateLabel() {
            const next = currentMode() === 'dark' ? 'light' : 'dark';
            const label = `Switch to ${next} mode`;
            button.setAttribute('aria-label', label);
            button.title = label;
        }
        updateLabel();
        system.addEventListener('change', updateLabel);
        button.addEventListener('click', () => {
            preference = currentMode() === 'dark' ? 'light' : 'dark';
            apply();
            updateLabel();
            try { localStorage.setItem('portfolio-appearance', preference); } catch {}
        });
    });
})();
