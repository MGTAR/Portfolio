// =============================================
// Particle System for Hero Background
// =============================================
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mousePosition = { x: 0, y: 0 };
        
        this.resizeCanvas();
        this.createParticles();
        this.bindEvents();
        this.animate();
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createParticles() {
        const numberOfParticles = Math.floor((this.canvas.width * this.canvas.height) / 15000);
        
        for (let i = 0; i < numberOfParticles; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.8 + 0.2,
                color: `hsl(${250 + Math.random() * 20}, 70%, ${60 + Math.random() * 20}%)`
            });
        }
    }
    
    bindEvents() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.particles = [];
            this.createParticles();
        });
        
        this.canvas.addEventListener('mousemove', (e) => {
            this.mousePosition.x = e.clientX;
            this.mousePosition.y = e.clientY;
        });
    }
    
    updateParticles() {
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Mouse interaction
            const dx = this.mousePosition.x - particle.x;
            const dy = this.mousePosition.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                const force = (100 - distance) / 100;
                particle.vx += dx * force * 0.0001;
                particle.vy += dy * force * 0.0001;
            }
            
            // Boundary checking
            if (particle.x < 0 || particle.x > this.canvas.width) {
                particle.vx *= -1;
            }
            if (particle.y < 0 || particle.y > this.canvas.height) {
                particle.vy *= -1;
            }
            
            // Keep particles in bounds
            particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
            particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
        });
    }
    
    drawParticles() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw connections
        this.particles.forEach((particle, i) => {
            for (let j = i + 1; j < this.particles.length; j++) {
                const other = this.particles[j];
                const dx = particle.x - other.x;
                const dy = particle.y - other.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 120) {
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(139, 92, 246, ${0.3 * (1 - distance / 120)})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.moveTo(particle.x, particle.y);
                    this.ctx.lineTo(other.x, other.y);
                    this.ctx.stroke();
                }
            }
        });
        
        // Draw particles
        this.particles.forEach(particle => {
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.globalAlpha = particle.opacity;
            this.ctx.fill();
            this.ctx.globalAlpha = 1;
        });
    }
    
    animate() {
        this.updateParticles();
        this.drawParticles();
        requestAnimationFrame(() => this.animate());
    }
}

// =============================================
// Navigation & Smooth Scrolling
// =============================================
class Navigation {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.navToggle = document.querySelector('.nav-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        this.bindEvents();
        this.updateActiveLink();
    }
    
    bindEvents() {
        // Mobile menu toggle
        this.navToggle.addEventListener('click', () => {
            this.navMenu.classList.toggle('active');
            this.navToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.navMenu.classList.remove('active');
                this.navToggle.classList.remove('active');
            });
        });
        
        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
            
            this.updateActiveLink();
        });
    }
    
    updateActiveLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// =============================================
// Intersection Observer for Animations
// =============================================
class AnimationObserver {
    constructor() {
        this.observer = new IntersectionObserver(
            (entries) => this.handleIntersection(entries),
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );
        
        this.observeElements();
    }
    
    observeElements() {
        // Observe skill progress bars
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => this.observer.observe(bar));
        
        // Observe sections for fade-in animations
        const sections = document.querySelectorAll('section');
        sections.forEach(section => this.observer.observe(section));
        
        // Observe project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => this.observer.observe(card));
        
        // Observe skill categories
        const skillCategories = document.querySelectorAll('.skill-category');
        skillCategories.forEach(category => this.observer.observe(category));
    }
    
    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Animate skill progress bars
                if (element.classList.contains('skill-progress')) {
                    const width = element.getAttribute('data-width');
                    setTimeout(() => {
                        element.style.width = width + '%';
                    }, 200);
                }
                
                // Add fade-in animation classes
                if (element.tagName === 'SECTION') {
                    element.classList.add('fade-in');
                }
                
                if (element.classList.contains('project-card')) {
                    element.classList.add('fade-in');
                }
                
                if (element.classList.contains('skill-category')) {
                    element.classList.add('fade-in');
                }
                
                // Stop observing once animated
                this.observer.unobserve(element);
            }
        });
    }
}

// =============================================
// Contact Form Handler
// =============================================
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.submitBtn = document.querySelector('.submit-btn');
        this.originalBtnText = this.submitBtn.querySelector('.btn-text').textContent;
        
        this.bindEvents();
    }
    
    bindEvents() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }
    
    async handleSubmit() {
        const formData = new FormData(this.form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        
        // Validate form
        if (!this.validateForm(data)) {
            return;
        }
        
        // Show loading state
        this.setLoadingState(true);
        
        try {
            // Simulate API call (replace with actual implementation)
            await this.simulateApiCall(data);
            this.showSuccess();
        } catch (error) {
            this.showError('Failed to send message. Please try again.');
        } finally {
            this.setLoadingState(false);
        }
    }
    
    validateForm(data) {
        if (!data.name.trim()) {
            this.showError('Name is required');
            return false;
        }
        
        if (!data.email.trim() || !this.isValidEmail(data.email)) {
            this.showError('Valid email is required');
            return false;
        }
        
        if (!data.message.trim()) {
            this.showError('Message is required');
            return false;
        }
        
        return true;
    }
    
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    setLoadingState(loading) {
        const btnText = this.submitBtn.querySelector('.btn-text');
        const btnIcon = this.submitBtn.querySelector('i');
        
        if (loading) {
            btnText.textContent = 'Sending...';
            btnIcon.className = 'fas fa-spinner fa-spin';
            this.submitBtn.disabled = true;
        } else {
            btnText.textContent = this.originalBtnText;
            btnIcon.className = 'fas fa-paper-plane';
            this.submitBtn.disabled = false;
        }
    }
    
    showSuccess() {
        this.showMessage('Message sent successfully!', 'success');
        this.form.reset();
    }
    
    showError(message) {
        this.showMessage(message, 'error');
    }
    
    showMessage(message, type) {
        // Remove existing messages
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = `form-message ${type}`;
        messageEl.textContent = message;
        messageEl.style.cssText = `
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 8px;
            text-align: center;
            font-weight: 500;
            background: ${type === 'success' ? 'var(--success-color)' : 'var(--error-color)'};
            color: white;
            animation: fadeInUp 0.3s ease;
        `;
        
        this.form.appendChild(messageEl);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageEl.remove();
        }, 5000);
    }
    
    simulateApiCall(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success (90% of the time)
                if (Math.random() > 0.1) {
                    resolve();
                } else {
                    reject(new Error('API Error'));
                }
            }, 2000);
        });
    }
}

// =============================================
// Typing Animation for Hero Section
// =============================================
class TypingAnimation {
    constructor(element, texts, speed = 100) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        
        this.start();
    }
    
    start() {
        this.type();
    }
    
    type() {
        const currentText = this.texts[this.currentTextIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
        }
        
        let typeSpeed = this.speed;
        
        if (this.isDeleting) {
            typeSpeed /= 2;
        }
        
        if (!this.isDeleting && this.currentCharIndex === currentText.length) {
            typeSpeed = 2000; // Wait 2 seconds before deleting
            this.isDeleting = true;
        } else if (this.isDeleting && this.currentCharIndex === 0) {
            this.isDeleting = false;
            this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
            typeSpeed = 500; // Wait 0.5 seconds before typing next text
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

// =============================================
// Smooth Scrolling
// =============================================
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// =============================================
// Project Card Hover Effects
// =============================================
function initProjectHoverEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) rotateY(5deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotateY(0)';
        });
    });
}

// =============================================
// Performance Optimization
// =============================================
function initPerformanceOptimizations() {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Debounce scroll events
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.onscroll = function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (originalScrollHandler) originalScrollHandler();
        }, 10);
    };
}

// =============================================
// Initialize Everything
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle system
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
        new ParticleSystem(canvas);
    }
    
    // Initialize navigation
    new Navigation();
    
    // Initialize animation observer
    new AnimationObserver();
    
    // Initialize contact form
    new ContactForm();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize project hover effects
    initProjectHoverEffects();
    
    // Initialize performance optimizations
    initPerformanceOptimizations();
    
    // Add typing animation to hero title (optional)
    const heroHighlight = document.querySelector('.hero-title .highlight');
    if (heroHighlight) {
        // Store original text
        const originalText = heroHighlight.textContent;
        
        // Add typing animation after initial load
        setTimeout(() => {
            new TypingAnimation(heroHighlight, [
                originalText,
                'Developer',
                'Problem Solver',
                'Tech Enthusiast'
            ], 150);
        }, 3000);
    }
    
    // Add random sparkle effects
    setInterval(() => {
        createSparkle();
    }, 3000);
});

// =============================================
// Sparkle Effect
// =============================================
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: var(--primary-light);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${Math.random() * window.innerWidth}px;
        top: ${Math.random() * window.innerHeight}px;
        animation: sparkleAnimation 2s ease-out forwards;
        box-shadow: 0 0 10px var(--primary-light);
    `;
    
    document.body.appendChild(sparkle);
    
    // Add sparkle animation keyframes if not already added
    if (!document.querySelector('#sparkle-styles')) {
        const styles = document.createElement('style');
        styles.id = 'sparkle-styles';
        styles.textContent = `
            @keyframes sparkleAnimation {
                0% {
                    opacity: 0;
                    transform: scale(0) rotate(0deg);
                }
                50% {
                    opacity: 1;
                    transform: scale(1) rotate(180deg);
                }
                100% {
                    opacity: 0;
                    transform: scale(0) rotate(360deg);
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Remove sparkle after animation
    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

// =============================================
// Additional Utility Functions
// =============================================

// Throttle function for performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add loading spinner
function showLoadingSpinner() {
    const spinner = document.createElement('div');
    spinner.id = 'loading-spinner';
    spinner.innerHTML = `
        <div style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10000;
            color: var(--primary-light);
            font-size: 2rem;
        ">
            <i class="fas fa-spinner fa-spin"></i>
        </div>
    `;
    document.body.appendChild(spinner);
}

function hideLoadingSpinner() {
    const spinner = document.getElementById('loading-spinner');
    if (spinner) {
        spinner.remove();
    }
}

// Console welcome message
console.log(`
%c🚀 Portfolio Website Loaded Successfully! 
%c
✨ Features:
• Animated particles background
• Smooth scrolling navigation  
• Interactive project cards
• Animated skill progress bars
• Responsive contact form
• Mobile-friendly design

%cBuilt with ❤️ for ASP.NET Developers
`, 
'color: #8b5cf6; font-size: 16px; font-weight: bold;',
'color: #a0a9c0; font-size: 14px;',
'color: #6b46c1; font-size: 12px; font-style: italic;'
);
