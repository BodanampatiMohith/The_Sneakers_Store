document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Cart Modal
    const cartIcon = document.querySelector('.cart-icon');
    const cartModal = document.getElementById('cart-modal');
    
    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'block';
    });
    
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Checkout Button
    const checkoutBtn = document.querySelector('.checkout-btn');
    checkoutBtn.addEventListener('click', () => {
        if (cart.items.length > 0) {
            alert('Thank you for shopping at The $neakers Store!');
            cart.items = [];
            cart.updateCartDisplay();
            cartModal.style.display = 'none';
        } else {
            alert('Your cart is empty!');
        }
    });

    const video = document.getElementById('hero-video');
    
    // Ensure video plays
    video.play().catch(function(error) {
        console.log("Video play failed:", error);
    });
    
    // Handle video loading
    video.addEventListener('loadeddata', function() {
        video.classList.add('loaded');
    });
    
    // Fallback for mobile devices that don't autoplay
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        video.setAttribute('playsinline', '');
        video.setAttribute('muted', '');
        video.play();
    }
});

// Add smooth scrolling for the scroll indicator
document.querySelector('.scroll-indicator').addEventListener('click', function() {
    const featuredSection = document.getElementById('featured');
    featuredSection.scrollIntoView({ behavior: 'smooth' });
});
