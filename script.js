// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle animation for hamburger lines (optional styling)
        hamburger.classList.toggle('toggle');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 2. Sticky Navbar & Scroll To Top Button Visibility
    const navbar = document.getElementById('navbar');
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        // Navbar shadow/resize effect
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
            navbar.style.padding = "0"; // Can adjust to make it shrink
        } else {
            navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.05)";
        }

        // Scroll to Top visibility
        if (window.scrollY > 500) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    // 3. Scroll to Top Functionality
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 4. FAQ Accordion Logic
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Toggle active class
            question.classList.toggle('active');
            
            // Get the next element (the answer div)
            const answer = question.nextElementSibling;
            const icon = question.querySelector('.icon');

            if (question.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.textContent = "-";
            } else {
                answer.style.maxHeight = null;
                icon.textContent = "+";
            }
        });
    });
});