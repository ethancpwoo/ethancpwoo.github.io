document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert(`Thank you, ${name}. Your message has been sent!`);
            form.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });

    // Smooth scroll for navbar links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // remove the '#' symbol
            const targetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
