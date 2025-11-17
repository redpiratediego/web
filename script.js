document.addEventListener('DOMContentLoaded', () => {
    
    // ----------------------------------------------------
    // 1. ANIMACIÓN FADE-IN AL HACER SCROLL (Intersection Observer)
    // ----------------------------------------------------
    
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    // Configuración: El elemento debe ser visible en al menos un 10%
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };
    
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade la clase 'is-visible' para disparar la animación CSS
                entry.target.classList.add('is-visible');
                // Deja de observar para que la animación solo se ejecute una vez
                observer.unobserve(entry.target);
            }
        });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Aplica el observador a todos los elementos con la clase 'animate-on-scroll'
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
    
    // ----------------------------------------------------
    // 2. EFECTO DE HOVER EN EL LOGO (Detalle de elegancia)
    // ----------------------------------------------------
    const logo = document.querySelector('.logo');
    const originalText = "Hudson Hornet";
    const hoverText = "H H";

    if (logo) {
        logo.addEventListener('mouseover', () => {
            logo.textContent = hoverText; 
        });

        logo.addEventListener('mouseout', () => {
            logo.textContent = originalText; 
        });
    }


});
