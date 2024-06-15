$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Perform validation
        let isValid = true;
        let form = $(this);
        let fname = $.trim($('#fname').val());
        let lname = $.trim($('#lname').val());
        let email = $.trim($('#email').val());
        let phone = $.trim($('#phone').val());
        let service = $('#service').val();
        let message = $.trim($('#message').val());

        if (!fname) {
            alert('Please enter your first name.');
            isValid = false;
        }
        if (!lname) {
            alert('Please enter your last name.');
            isValid = false;
        }
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }
        if (!phone) {
            alert('Please enter your phone number.');
            isValid = false;
        }
        if (!service) {
            alert('Please choose a service.');
            isValid = false;
        }
        if (!message) {
            alert('Please enter a message.');
            isValid = false;
        }

        if (isValid) {
            // Create mailto link and open in a new tab
            let mailtoLink = `mailto:maazhabib73@gmail.com?subject=New Contact Form Submission&body=You have a new contact form submission:%0D%0A%0D%0A` +
                `Name: ${fname} ${lname}%0D%0A` +
                `Email: ${email}%0D%0A` +
                `Phone: ${phone}%0D%0A` +
                `Service: ${service}%0D%0A` +
                `Message: ${message}`;

            window.location.href = mailtoLink;
        }
    });

    function validateEmail(email) {
        // Simple email validation regex
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
});