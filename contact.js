document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});
function sendConfirmation(email) {
    const template = `
        Thank you for contacting The $neakers Store!
        We'll get back to you shortly.
        
        Best regards,
        The $neakers Store Team
    `;
} 