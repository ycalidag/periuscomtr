// Responsive navbar toggle
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('navbar-toggle');
    const links = document.getElementById('navbar-links');
    if (toggle && links) {
        toggle.addEventListener('click', function () {
            links.classList.toggle('open');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.scrollY - 70,
                    behavior: 'smooth'
                });
                // Close navbar on mobile after click
                if (links.classList.contains('open')) {
                    links.classList.remove('open');
                }
            }
        });
    });
});
