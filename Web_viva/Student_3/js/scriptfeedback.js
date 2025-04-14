document.addEventListener("DOMContentLoaded", function() {
    // Character Counter for Comment Field
    function updateCounter() {
        var commentField = document.getElementById('comment');
        var counter = document.getElementById('counter');
        var remaining = 500 - commentField.value.length;
        counter.textContent = remaining + " characters remaining";
    }

    // Attach updateCounter to textarea input event
    document.getElementById('comment').addEventListener('input', updateCounter);

    // Emoji Hover Effect
    document.querySelectorAll('.emoji').forEach(function(button) {
        button.addEventListener('mouseover', function() {
            this.style.transform = "scale(1.2)";
        });
        button.addEventListener('mouseout', function() {
            this.style.transform = "scale(1)";
        });
    });

    // Form Validation
    document.getElementById("feedback-form").addEventListener("submit", function(event) {
        let isValid = true;
        let errorMessage = "Please fill in the following fields:\n";

        let fullName = document.getElementById("full-name").value.trim();
        let email = document.getElementById("email").value.trim();
        let telephone = document.getElementById("telephone").value.trim();
        let address = document.getElementById("address").value.trim();
        let comment = document.getElementById("comment").value.trim();

        if (fullName === "") {
            isValid = false;
            errorMessage += "- Full Name\n";
        }
        if (email === "") {
            isValid = false;
            errorMessage += "- Email Address\n";
        }
        if (telephone === "") {
            isValid = false;
            errorMessage += "- Telephone Number\n";
        }
        if (address === "") {
            isValid = false;
            errorMessage += "- Address\n";
        }
        if (comment === "") {
            isValid = false;
            errorMessage += "- Comment or Message\n";
        }

        if (!isValid) {
            alert(errorMessage);
            event.preventDefault(); // Prevent form submission
        }
    });
});
