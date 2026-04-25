/**
 * Portfolio - Issa NZAMBA
 * Ingénieur DevOps
 */

// ==================== NAVBAR SCROLL EFFECT ====================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 26, 0.98)';
        navbar.style.padding = '10px 0';
    } else {
        navbar.style.background = 'rgba(10, 10, 26, 0.95)';
        navbar.style.padding = '15px 0';
    }
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== ANIMATE PROGRESS BARS ====================
const observerOptions = { 
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.progress-bar');
            bars.forEach(bar => {
                // Stocker la largeur cible
                const targetWidth = bar.style.width;
                // Réinitialiser à 0
                bar.style.width = '0';
                // Animer vers la largeur cible
                setTimeout(() => { 
                    bar.style.width = targetWidth; 
                }, 100);
            });
            // Ne plus observer cette section une fois animée
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer la section des compétences
const skillsSection = document.querySelector('#competences');
if (skillsSection) {
    observer.observe(skillsSection);
}

// ==================== ACTIVE NAVIGATION LINK ====================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    let current = '';
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// ==================== MOBILE MENU AUTO CLOSE ====================
const navLinksAll = document.querySelectorAll('.nav-link');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinksAll.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
        }
    });
});

// ==================== TYPEWRITER EFFECT (OPTIONNEL) ====================
// Décommentez pour activer l'effet machine à écrire
/*
const typewriterElement = document.querySelector('.hero p');
if (typewriterElement && typewriterElement.innerText.includes('Issa NZAMBA')) {
    const originalText = typewriterElement.innerText;
    typewriterElement.innerText = '';
    let i = 0;
    
    function typeWriter() {
        if (i < originalText.length) {
            typewriterElement.innerText += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();
}
*/

// ==================== PREVENT DEFAULT FORM SUBMISSION ====================
// Si vous ajoutez un formulaire plus tard
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Formulaire soumis - À connecter avec un backend');
        alert('Fonctionnalité à venir. Contactez-moi directement par email.');
    });
}

// ==================== SERVICE CARD ANIMATION ====================
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ==================== BACK TO TOP BUTTON (OPTIONNEL) ====================
// Ajoutez ce HTML dans votre footer si besoin :
// <button id="backToTop" class="back-to-top"><i class="fas fa-arrow-up"></i></button>

const backToTop = document.querySelector('#backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==================== CONSOLE LOG (INFO DÉVELOPPEMENT) ====================
console.log('%c🚀 Portfolio - Issa NZAMBA - Ingénieur DevOps', 'color: #00b4d8; font-size: 16px; font-weight: bold;');
console.log('%c© 2026 afridevops.online', 'color: #666; font-size: 12px;');