// All sections stay visible. Native anchors handle clicks and direct links.
(() => {
    const sections = [...document.querySelectorAll('body > section')];
    const links = [...document.querySelectorAll('.main-menu a')];
    function updateNavigation() {
        const marker = Math.min(180, window.innerHeight * 0.3);
        let active = sections[0];
        for (const section of sections) {
            if (section.getBoundingClientRect().top <= marker) active = section;
        }
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
            active = sections[sections.length - 1];
        }
        for (const link of links) {
            if (link.hash === '#' + active.id) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
        }
    }
    let pending = false;
    window.addEventListener('scroll', () => {
        if (pending) return;
        pending = true;
        requestAnimationFrame(() => { updateNavigation(); pending = false; });
    }, { passive: true });
    window.addEventListener('resize', updateNavigation);
    window.addEventListener('load', updateNavigation);
    updateNavigation();
})();
