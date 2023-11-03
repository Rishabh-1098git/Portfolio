
// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting in the default way

    // Collect form input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Display the collected information on the webpage
    var output = "Name: " + name + "<br>Email: " + email + "<br>Message: " + message;
    document.getElementById("output").innerHTML = output;
}

// Add an event listener to the form
document.getElementById("contact-form").addEventListener("submit", handleSubmit);



