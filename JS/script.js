import { InicializarAOS } from '-/JS/aos.js';

document.addEventListener('DOMContentLoaded', () => {
    toggleAccordion();
    InicializarAOS();
});

function toggleAccordion() {
    document.querySelectorAll('.accordion-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });
}