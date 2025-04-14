// Add FontAwesome for the hamburger menu and social icons
document.addEventListener('DOMContentLoaded', function() {
    // Add script for FontAwesome (if not already included in your HTML)
    if (!document.querySelector('script[src*="fontawesome"]')) {
        const fontAwesome = document.createElement('script');
        fontAwesome.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js';
        document.head.appendChild(fontAwesome);
    }

    // Create mobile menu button
    const header = document.querySelector('.header');
    const menuBtn = document.createElement('div');
    menuBtn.className = 'menu-btn';
    menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    header.appendChild(menuBtn);

    const navLinks = document.querySelector('.nav__links');
    
    // Toggle menu on mobile
    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Change navbar style on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Add active class to current page link
    const currentLocation = location.href;
    const navItems = document.querySelectorAll('.nav__links li a');
    
    navItems.forEach(item => {
        if(item.href === currentLocation) {
            item.classList.add('active');
        }
        
        item.addEventListener('click', function() {
            navItems.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                navLinks.classList.remove('active');
                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });

    // Add animation to footer social icons
    const socialIcons = document.querySelectorAll('.social-icons .fa-brands');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
// Add this to your JavaScript file or in a <script> tag at the end of your HTML
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) { // Start the transition after scrolling 50px
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});