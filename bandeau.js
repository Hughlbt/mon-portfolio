const navLinks = document.querySelectorAll('.main-nav a');

function clearActive() {
    navLinks.forEach(link => link.classList.remove('active'));
}

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        clearActive();
        e.target.classList.add('active');
        const targetId = e.target.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});
