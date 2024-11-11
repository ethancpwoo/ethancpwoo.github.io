// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Function to animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.fly-in');
    elements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

// Ensure images are loaded before triggering animation
document.querySelectorAll('.fly-in').forEach((element) => {
    if (element.tagName === 'IMG') {
        element.addEventListener('load', animateOnScroll);
    }
});

// Trigger animation on scroll
window.addEventListener('scroll', animateOnScroll);

// Initial check for elements already in view
animateOnScroll();
