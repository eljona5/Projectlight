


$(document).ready(function() {
    // Initialize the Glide carousel
    const glide = new Glide('.glide', {
        type: 'carousel',
        perView: 1,
        breakpoints: {
            768: {
                perView: 1 // Show one image on mobile
            },
            1024: {
                perView: 2 // Show two images on tablets
            }
        }
    });

    glide.mount();

    // Back to Top button functionality
    const backToTopButton = $('#back-to-top');

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            backToTopButton.fadeIn(); // Show button
        } else {
            backToTopButton.fadeOut(); // Hide button
        }
    });

    backToTopButton.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 600); // Smooth scroll to top
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

    // Contact form submission
    $('#contact-form').on('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        alert('Message sent! Thank you for contacting us.'); // Show thank you message
        $(this).trigger('reset'); // Reset the form
    });
});