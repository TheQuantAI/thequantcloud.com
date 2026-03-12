/* ─── TheQuantCloud — Interactive Behaviour ─── */

document.addEventListener("DOMContentLoaded", () => {
    /* ─ Sticky Nav ─ */
    const nav = document.getElementById("nav");
    window.addEventListener("scroll", () => {
        if (nav) nav.classList.toggle("scrolled", window.scrollY > 20);
    }, { passive: true });

    /* ─ Mobile Nav Toggle ─ */
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    if (toggle && links) {
        toggle.addEventListener("click", () => links.classList.toggle("open"));
        links.querySelectorAll("a").forEach(a =>
            a.addEventListener("click", () => links.classList.remove("open"))
        );
    }

    /* ─ Smooth Scroll ─ */
    document.querySelectorAll('a[href^="#"]').forEach(a =>
        a.addEventListener("click", e => {
            const id = a.getAttribute("href");
            if (!id || id === "#") return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                const offset = nav ? nav.offsetHeight + 16 : 80;
                window.scrollTo({ top: target.offsetTop - offset, behavior: "smooth" });
            }
        })
    );

    /* ─ Copy buttons ─ */
    document.querySelectorAll(".copy-btn").forEach(btn =>
        btn.addEventListener("click", () => {
            const code = btn.closest(".cta-install, .install-bar")?.querySelector("code");
            if (!code) return;
            navigator.clipboard.writeText(code.textContent.trim()).then(() => {
                const original = btn.innerHTML;
                btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>`;
                setTimeout(() => (btn.innerHTML = original), 2000);
            });
        })
    );

    /* ─ SDK Tabs ─ */
    const tabs = document.querySelectorAll(".sdk-tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            document.querySelectorAll(".sdk-panel").forEach(p => p.classList.remove("active"));
            const panel = document.getElementById("panel-" + tab.dataset.tab);
            if (panel) panel.classList.add("active");
        });
    });

    /* ─ Scroll-reveal ─ */
    const faders = document.querySelectorAll(
        ".feature-card, .backend-card, .doc-card, .pricing-card"
    );
    if ("IntersectionObserver" in window) {
        const style = document.createElement("style");
        style.textContent = `.fade-target{opacity:0;transform:translateY(24px);transition:opacity .6s ease,transform .6s ease}.fade-target.visible{opacity:1;transform:translateY(0)}`;
        document.head.appendChild(style);
        faders.forEach((el, i) => {
            el.classList.add("fade-target");
            el.style.transitionDelay = `${(i % 4) * 80}ms`;
        });
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
            { threshold: 0.15 }
        );
        faders.forEach(el => observer.observe(el));
    }
});
