// scroll reveal
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay : 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .portofolio-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });

// scroll reveal
const typed = new Typed('.multiple-text', {
    strings: ['UI/UX Designer', 'Frontend Developer'],
    typeSpeed: 70,
    backSpeead: 70,
    backDelay: 1000,
    loop: true,
});