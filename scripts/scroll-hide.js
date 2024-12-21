document.addEventListener('DOMContentLoaded', () => {
    const adSection = document.getElementById('advertising-section');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            // Scroll hacia abajo: Oculta la sección
            adSection.classList.add('opacity-0', 'pointer-events-none');
        } else {
            // Scroll hacia arriba: Muestra la sección
            adSection.classList.remove('opacity-0', 'pointer-events-none');
        }

        lastScrollY = currentScrollY;
    });
});
