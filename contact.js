document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
        // Simulate successful form submission
        document.getElementById("responseMessage").innerText = "Thank you for contacting us, " + name + "!";
        
        // Clear the form
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("responseMessage").innerText = "Please fill out all fields.";
        document.getElementById("responseMessage").style.color = "red";
    }
});