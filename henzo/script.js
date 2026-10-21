document.addEventListener("DOMContentLoaded", () => {
    // 1. Controla o efeito de virar (Flip) ao clicar em cada card
    const cards = document.querySelectorAll('.card-item');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    // 2. Controla a rolagem suave através dos botões de setas do carrossel
    const carousel = document.getElementById('cardsCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (carousel && prevBtn && nextBtn) {
        const scrollAmount = 300; // Tamanho de deslocamento aproximado do card + margem

        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }
});