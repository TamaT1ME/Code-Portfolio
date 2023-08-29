window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
            const links = navbar.querySelectorAll('a');
            links.forEach(link => {
                link.classList.remove('active');
            });

            const targetLink = navbar.querySelector(`a[href="#${section.id}"]`);
            if (targetLink) {
                targetLink.classList.add('active');
            }
        }
    });
});

const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section');

sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 50 && rect.bottom >= 50) {
        const links = navbar.querySelectorAll('a');
        links.forEach(link => {
            link.classList.remove('active');
        });

        const targetLink = navbar.querySelector(`a[href="#${section.id}"]`);
        if (targetLink) {
            targetLink.classList.add('active');
        }
    }
});
