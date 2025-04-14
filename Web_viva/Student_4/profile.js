document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    
    document.getElementById('successAlert').classList.add('d-none');
    document.getElementById('errorAlert').classList.add('d-none');

    Array.from(document.getElementsByClassName('form-control')).forEach(field => {
        field.classList.remove('is-invalid');
    });

    let isValid = true;
    const fields = ['name', 'email', 'subject', 'message'];

    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field.value.trim()) {
            field.classList.add('is-invalid');
            isValid = false;
        }
    });

    const emailField = document.getElementById('email');
    if (!/\S+@\S+\.\S+/.test(emailField.value)) {
        emailField.classList.add('is-invalid');
        isValid = false;
    }

    if (!isValid) {
        document.getElementById('errorAlert').classList.remove('d-none');
        return;
    }
    const name = encodeURIComponent(document.getElementById('name').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const subject = encodeURIComponent(document.getElementById('subject').value);
    const message = encodeURIComponent(document.getElementById('message').value);

    const mailtoLink = `mailto:nusry.rahman@example.com?subject=Contact from ${name} - ${subject}&body=From: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

    
    document.getElementById('successAlert').classList.remove('d-none');
    this.reset();

    window.location.href = mailtoLink;
});
