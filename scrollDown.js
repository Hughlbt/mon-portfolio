document.addEventListener('DOMContentLoaded', () => {
    const scrollDownBtn = document.querySelector('.scroll-down');
    const navTarget = document.getElementById('navigation');

    if (scrollDownBtn && navTarget) {
        scrollDownBtn.addEventListener('click', (e) => {
            e.preventDefault();
            navTarget.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
