document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form fields
    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! I will get back to you soon.');
        document.getElementById('contact-form').reset(); // Reset form
    } else {
        alert('Please fill in all fields.');
    }
});
