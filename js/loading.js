// Warm the cache for card images and gallery previews, never full-size photos.
(() => {
    const root = document.documentElement;
    root.classList.add('is-loading');
    let finished = false;
    let skipTimer;
    function finish() {
        if (finished) return;
        finished = true;
        root.classList.remove('is-loading');
        document.querySelector('.load-screen')?.setAttribute('hidden', '');
        clearTimeout(deadline);
        clearTimeout(skipTimer);
    }
    // A slow connection or missing resource must never lock the page.
    const deadline = setTimeout(finish, 15000);
    document.addEventListener('DOMContentLoaded', async () => {
        if (finished) return;
        const screen = document.querySelector('.load-screen');
        const fill = screen.querySelector('.load-fill');
        const percent = screen.querySelector('.load-percent');
        const skip = screen.querySelector('.skip-loading');
        skip.addEventListener('click', finish);
        skipTimer = setTimeout(() => { if (!finished) skip.hidden = false; }, 5000);
        const urls = new Set([...document.querySelectorAll('.work-item img')].map(image => image.src));
        if (typeof portfolioEntries !== 'undefined') {
            for (const entry of portfolioEntries) {
                for (const photo of entry.photos || [{ src: entry.image }]) {
                    urls.add(new URL(photo.src, document.baseURI).href);
                    if (photo.poster) urls.add(new URL(photo.poster, document.baseURI).href);
                }
            }
        }
        const pending = [...urls];
        const total = pending.length;
        let completed = 0;
        function warmImage(src) {
            return new Promise(resolve => {
                const image = new Image();
                image.onload = image.onerror = () => {
                    completed++;
                    const value = Math.round(completed / total * 100);
                    fill.style.width = `${value}%`;
                    percent.textContent = `${value}%`;
                    resolve();
                };
                image.src = src;
            });
        }
        async function worker() {
            while (pending.length && !finished) await warmImage(pending.shift());
        }
        try {
            await Promise.all([
                ...Array.from({ length: 6 }, () => worker()),
                document.fonts?.ready,
            ]);
        } finally {
            finish();
        }
    });
})();
