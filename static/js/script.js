// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
        const targetId = event.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            event.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Dynamic greeting in the Hero section
window.addEventListener('load', () => {
    const hours = new Date().getHours();
    const greeting = document.querySelector('.hero h1');
    if (hours < 12) {
        greeting.textContent = 'Good Morning, Welcome to My Portfolio!';
    } else if (hours < 18) {
        greeting.textContent = 'Good Afternoon, Welcome to My Portfolio!';
    } else {
        greeting.textContent = 'Good Evening, Welcome to My Portfolio!';
    }
});
