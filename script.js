document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.fade-in');

    // Mobil menüde linke tıklayınca menünün kapanmasını sağlar
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    
    // Bootstrap Collapse örneğini başlat (eğer varsa)
    let bsCollapse;
    if (menuToggle) {
        bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
    }

    navLinks.forEach((l) => {
        l.addEventListener('click', () => { 
            // Sadece menü açıksa (mobil görünümde) ve bsCollapse tanımlıysa kapat
            if (menuToggle && menuToggle.classList.contains('show') && bsCollapse) {
                bsCollapse.toggle();
            }
        });
    });


    // Intersection Observer (Kaydırma animasyonu)
    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('is-visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});