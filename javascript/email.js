const subscribe = document.querySelector("#subscribe");

subscribe.addEventListener("click", () => {
  var emailInput = document.getElementById("subscribeEmail");
  var email = emailInput.value;

  // Check if the email is valid
  if (isValidEmail(email)) {
    // Simulate sending the email (Replace this with your actual server-side logic)
    // In a real scenario, you would typically send the email address to your server
    // which would then handle the subscription process.
    // Here, we're just displaying a success message for demonstration purposes.

    // Display success message
    document.getElementById("successMessage").style.display = "block";
    document.getElementById("errorMessage").style.display = "none";

    // Optional: Clear the form after a successful subscription
    document.getElementById("newsletterForm").reset();
  } else {
    // Display error message
    document.getElementById("successMessage").style.display = "none";
    document.getElementById("errorMessage").style.display = "block";
  }

  function isValidEmail(email) {
    // Basic email validation using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
