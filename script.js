// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Active navigation link
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .project-card, .timeline-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// MCX Flashcards Functions
let currentSlide = 0;
const totalSlides = 6;

function flipCard(card) {
    card.classList.toggle('flipped');
}

function changeSlide(direction) {
    const flashcards = document.querySelectorAll('#mcx-flashcards .flashcard');
    if (flashcards.length === 0) return;
    
    // Remove flipped class from all cards
    flashcards.forEach(card => card.classList.remove('flipped'));
    
    // Update current slide
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    
    // Scroll to center the current card
    const container = document.querySelector('#mcx-flashcards .flashcards-container');
    if (container) {
        const cardWidth = 320 + 32; // card width + gap
        const scrollPosition = currentSlide * cardWidth;
        container.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }
    
    // Update dots
    updateDots();
}

function goToSlide(index) {
    const flashcards = document.querySelectorAll('#mcx-flashcards .flashcard');
    if (flashcards.length === 0) return;
    
    // Remove flipped class from all cards
    flashcards.forEach(card => card.classList.remove('flipped'));
    
    currentSlide = index;
    
    // Scroll to center the current card
    const container = document.querySelector('#mcx-flashcards .flashcards-container');
    if (container) {
        const cardWidth = 320 + 32; // card width + gap
        const scrollPosition = currentSlide * cardWidth;
        container.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    }
    
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('#mcx-flashcards-controls .dot');
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Auto-flip first card on page load for demo
setTimeout(() => {
    const firstCard = document.querySelector('#mcx-flashcards .flashcard');
    if (firstCard) {
        firstCard.classList.add('flipped');
    }
}, 2000);