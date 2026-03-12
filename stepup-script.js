// Set active nav link based on current page
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'stepup-home.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Handle contact form submission
function handleContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const successMessage = document.getElementById('successMessage');

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Create mailto link
            const mailtoLink = `mailto:info@stepup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;

            // Open email client
            window.location.href = mailtoLink;

            // Show success message
            successMessage.classList.add('show');

            // Reset form
            contactForm.reset();

            // Hide success message after 3 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 3000);
        });
    }
}

// Handle FAQ accordion
function handleFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isOpen = answer.classList.contains('show');
            
            // Close all other FAQs
            document.querySelectorAll('.faq-answer').forEach(item => {
                item.classList.remove('show');
            });
            
            // Toggle current FAQ
            if (!isOpen) {
                answer.classList.add('show');
            }
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    setActiveNav();
    handleContactForm();
    handleFAQ();
});
