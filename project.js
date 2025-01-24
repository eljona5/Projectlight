// script.js

document.addEventListener('DOMContentLoaded', function () {
    const glide = new Glide('.glide', {
        type: 'carousel',
        perView: 1,
        breakpoints: {
            600: {
                perView: 2 // Show two images on tablets
            },
            800: {
                perView: 3 // Show three images on larger screens
            }
        },
        autoplay: 3000,
        animationDuration: 500,
        animationTimingFunc: 'ease-in-out'
   
});
    glide.mount(); // Mount the Glide instance

    // Back to top button functionality
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn(); // Show button
        } else {
            $('#back-to-top').fadeOut(); // Hide button
        }
    });

    $('#back-to-top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800); // Smooth scroll to top
        return false;
    });

    // Feedback form submission
    $('#feedback-form').on('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        alert('Feedback submitted! Thank you.'); // Show thank you message
        $(this).trigger('reset'); // Reset the form
    });

    // Newsletter form submission
    $('#newsletter-form').on('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        alert('Subscribed to newsletter! Thank you.'); // Show thank you message
        $(this).trigger('reset'); // Reset the form
    });
});