/**
 * main.js
 * Core logic for the portfolio (Navigation, Scroll effects)
 */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Animate Icon (Simple toggle for now)
            const icon = mobileToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Scroll Effect for Header
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Magical Wand Sparkle Effect
    const createSparkle = (x, y) => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${x}px`;
        sparkle.style.top = `${y}px`;
        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 800);
    };

    let lastSparkleTime = 0;
    window.addEventListener('mousemove', (e) => {
        const now = Date.now();
        if (now - lastSparkleTime > 40) { // Limit spark creation rate
            createSparkle(e.clientX, e.clientY + window.scrollY); // Add scrollY because it's absolute positioned relative to body
            lastSparkleTime = now;
        }
    });

    // Magical Text Scramble Effect
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ*&^%$#@!+=-_><|}{[]~";

    document.querySelectorAll('.text-gradient, .section-title').forEach(el => {
        el.addEventListener('mouseover', event => {
            let iterations = 0;
            const originalText = event.target.dataset.value || event.target.innerText;
            if (!event.target.dataset.value) event.target.dataset.value = originalText;

            clearInterval(event.target.dataset.interval);

            event.target.dataset.interval = setInterval(() => {
                event.target.innerText = originalText.split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return originalText[index];
                        }
                        return letters[Math.floor(Math.random() * 46)];
                    })
                    .join("");

                if (iterations >= originalText.length) {
                    clearInterval(event.target.dataset.interval);
                }
                iterations += 1 / 3;
            }, 30);
        });
    });
});
