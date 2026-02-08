/**
 * Kishore Pagidi Portfolio - Main JavaScript
 * Handles animations, navigation, and interactive elements
 */

(function() {
    'use strict';

    // DOM Elements
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // =========================================================================
    // NAVIGATION
    // =========================================================================

    // Scroll behavior - add/remove scrolled class
    function handleNavScroll() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    // Mobile menu toggle
    function toggleMobileMenu() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }

    // Close mobile menu when clicking a link
    function closeMobileMenu() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Initialize navigation
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    navToggle.addEventListener('click', toggleMobileMenu);
    navLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

    // =========================================================================
    // SCROLL ANIMATIONS
    // =========================================================================

    // Intersection Observer for fade-up animations
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.1
    };

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve after animation triggers (performance optimization)
                animationObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with animate-fade-up class
    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-fade-up');
        animatedElements.forEach(el => animationObserver.observe(el));
    }

    // =========================================================================
    // COUNTER ANIMATION
    // =========================================================================

    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (ease-out)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (target - start) * easeOut);

            element.textContent = current;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }

        requestAnimationFrame(updateCounter);
    }

    // Intersection Observer for counters
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.count, 10);
                if (!isNaN(target)) {
                    animateCounter(entry.target, target);
                }
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Initialize counters
    function initCounters() {
        const counters = document.querySelectorAll('[data-count]');
        counters.forEach(counter => counterObserver.observe(counter));
    }

    // =========================================================================
    // SMOOTH SCROLL
    // =========================================================================

    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const navHeight = nav.offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // =========================================================================
    // ACTIVE NAV LINK HIGHLIGHTING
    // =========================================================================

    function initActiveNavHighlight() {
        const sections = document.querySelectorAll('section[id]');

        function highlightNav() {
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');
                const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

                if (navLink) {
                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        navLink.classList.add('active');
                    } else {
                        navLink.classList.remove('active');
                    }
                }
            });
        }

        window.addEventListener('scroll', highlightNav, { passive: true });
    }

    // =========================================================================
    // PROJECT CARD HOVER EFFECTS
    // =========================================================================

    function initProjectCardEffects() {
        const projectCards = document.querySelectorAll('.project-card');

        projectCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    }

    // =========================================================================
    // PARALLAX EFFECT FOR HERO
    // =========================================================================

    function initHeroParallax() {
        const heroGrid = document.querySelector('.hero-grid');
        const heroGradient = document.querySelector('.hero-gradient');

        if (!heroGrid || !heroGradient) return;

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;

            if (scrolled < window.innerHeight) {
                heroGrid.style.transform = `translateY(${rate}px)`;
                heroGradient.style.opacity = Math.max(0.3, 1 - scrolled / window.innerHeight);
            }
        }, { passive: true });
    }

    // =========================================================================
    // TYPING EFFECT (Optional - for hero title)
    // =========================================================================

    function initTypingEffect() {
        const gradientText = document.querySelector('.gradient-text');
        if (!gradientText) return;

        // Store original text
        const originalText = gradientText.textContent;
        gradientText.textContent = '';
        gradientText.style.borderRight = '2px solid var(--color-primary)';

        let i = 0;
        function type() {
            if (i < originalText.length) {
                gradientText.textContent += originalText.charAt(i);
                i++;
                setTimeout(type, 50);
            } else {
                // Remove cursor after typing completes
                setTimeout(() => {
                    gradientText.style.borderRight = 'none';
                }, 500);
            }
        }

        // Start typing after a delay
        setTimeout(type, 800);
    }

    // =========================================================================
    // LOADING STATE
    // =========================================================================

    function hideLoading() {
        const loading = document.querySelector('.loading');
        if (loading) {
            loading.classList.add('hidden');
            setTimeout(() => loading.remove(), 500);
        }
    }

    // =========================================================================
    // KEYBOARD NAVIGATION
    // =========================================================================

    function initKeyboardNav() {
        document.addEventListener('keydown', (e) => {
            // Close mobile menu on Escape
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }

    // =========================================================================
    // INITIALIZE
    // =========================================================================

    function init() {
        // Initial scroll check
        handleNavScroll();

        // Initialize all modules
        initScrollAnimations();
        initCounters();
        initSmoothScroll();
        initActiveNavHighlight();
        initProjectCardEffects();
        initHeroParallax();
        initKeyboardNav();

        // Hide loading state
        hideLoading();

        // Trigger initial animations for elements in view
        setTimeout(() => {
            const heroElements = document.querySelectorAll('.hero .animate-fade-up');
            heroElements.forEach(el => el.classList.add('visible'));
        }, 100);
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
