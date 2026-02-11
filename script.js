function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Scroll Reveal Animation
window.addEventListener('scroll', function () {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const visible = 100;

        if (elementTop < windowHeight - visible) {
            reveal.classList.add('active');
        }
    });
});
