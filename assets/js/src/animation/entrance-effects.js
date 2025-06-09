'use strict';

/**
 * Initialize entrance animations using Intersection Observer
 */
const initEntranceAnimations = () => {

    // Get all elements with animation delay attribute
    const animatedElements = document.querySelectorAll('[data-atb-animation]');

    if (!animatedElements.length) {
        return;
    }

    // Create Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Get animation delay from data attribute
                const animationName = element.getAttribute('data-atb-animation');
                const delay = element.getAttribute('data-atb-animation-delay');
                const delayMs = parseInt(delay);

                // Add animated class after the specified delay
                setTimeout(() => {
                    element.classList.add(`atb-animation-${animationName}`);
                    // element.classList.add('animated');
                }, delayMs);

                // Unobserve the element after animation starts
                observer.unobserve(element);
            }
        });
    }, {
        // Start animation when element is 20% visible
        threshold: 0.2,
        // Add some margin to start animation slightly before element is fully in view
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all animated elements
    animatedElements.forEach((element) => {
        observer.observe(element);
    });
};

// Initialize animations when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEntranceAnimations);
} else {
    initEntranceAnimations();
}

// Create a custom event for triggering animations on new elements.
const triggerAnimationsEvent = new CustomEvent('triggerAnimations', {
    detail: {
        init: () => {
            initEntranceAnimations();
        }
    }
});

// usage: window.triggerAnimationsEvent.detail.init();
window.triggerAnimationsEvent = triggerAnimationsEvent;

