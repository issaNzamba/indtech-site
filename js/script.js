/**
 * Portfolio - Issa NZAMBA - Version 2.0.0-dev
 * Ingénieur DevOps
 */

// ==================== INITIALISATION AOS ====================
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
            easing: 'ease-in-out'
        });
    }
});

// ==================== PRELOADER ====================
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(function() {
            preloader.classList.add('hidden');
        }, 500);
    }
});

// ==================== NAVBAR SCROLL EFFECT ====================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// ==================== SMOOTH SCROLL ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            // Fermer le menu mobile
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const toggler = document.querySelector('.navbar-toggler');
                if (toggler) toggler.click();
            }
        }
    });
});

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

// ==================== ANIMATE PROGRESS BARS ====================
const observerOptions = { 
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.progress-bar');
            bars.forEach(bar => {
                // Utiliser data-width ou la largeur définie en style
                const targetWidth = bar.getAttribute('data-width') || bar.style.width;
                // Réinitialiser à 0
                bar.style.width = '0';
                // Animer vers la largeur cible
                setTimeout(() => { 
                    bar.style.width = targetWidth; 
                }, 200);
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

// ==================== MOBILE MENU AUTO CLOSE ====================
const navLinksAll = document.querySelectorAll('.nav-link');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinksAll.forEach(link => {
    link.addEventListener('click', function() {
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            if (navbarToggler) navbarToggler.click();
        }
    });
});

// ==================== TYPEWRITER EFFECT ====================
const typewriterElement = document.getElementById('typewriter');

if (typewriterElement) {
    const texts = [
        'Issa NZAMBA, Développeur Web',
        'Spécialiste Full-Stack',
        'Expert en Gestion de Projets',
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentText = texts[textIndex];
        if (isDeleting) {
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }
    }
    // Démarrer l'effet après un court délai
    setTimeout(typeEffect, 1000);
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

// ==================== BACK TO TOP BUTTON ====================
const backToTop = document.getElementById('backToTop');

if (backToTop) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        });
    });
}

// ==================== PREVENT DEFAULT FORM SUBMISSION ====================
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Formulaire soumis - À connecter avec un backend');
        alert('Fonctionnalité à venir. Contactez-moi directement par email.');
    });
}

// ==================== PARALLAX EFFECT ON HERO (OPTIONNEL) ====================
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
            hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
        }
    });
}

// ==================== CONSOLE LOG (INFO DÉVELOPPEMENT) ====================
console.log('%c🚀 Portfolio - Issa NZAMBA - Version 2.0.0-dev', 'color: #00b4d8; font-size: 16px; font-weight: bold;');
console.log('%c📅 ' + new Date().getFullYear() + ' - afridevops.online', 'color: #666; font-size: 12px;');
console.log('%c💡 Nouvelles fonctionnalités: Preloader, Typewriter, AOS animations', 'color: #888; font-size: 12px;');
console.log('%c🎨 Navbar: bleu marine (#08085a) en scroll, bleu (#0f0fd8) par défaut', 'color: #48cae4; font-size: 12px;');