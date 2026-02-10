/**
 * ANIMACIONES Y LÓGICA DE INTERFAZ - MIGUEL VALERA
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. ACTUALIZACIÓN DE HORA LOCAL ---
    const updateTime = () => {
        const timeElement = document.getElementById('local-time');
        if (timeElement) {
            const now = new Date();
            const options = { 
                hour: '2-digit', 
                minute: '2-digit', 
                hour12: true, 
                timeZone: 'Europe/Madrid' 
            };
            timeElement.textContent = now.toLocaleTimeString('en-US', options);
        }
    };
    
    // Actualizar cada minuto
    setInterval(updateTime, 60000);
    updateTime();


    // --- 2. ANIMACIÓN DE APARICIÓN (STAGGER EFFECT) ---
    const cards = document.querySelectorAll('.card');
    
    const observerOptions = {
        threshold: 0.15, // Se activa cuando el 15% es visible
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Añadimos la clase que dispara el CSS transition
                entry.target.classList.add('card--visible');
                // Dejamos de observar para optimizar rendimiento
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });
});
