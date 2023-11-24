const worksCards = document.querySelectorAll('.card');
worksCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
        card.setAttribute('active', true);
    });
    card.addEventListener('mouseleave', () => {
        card.removeAttribute('active');
    });
});
