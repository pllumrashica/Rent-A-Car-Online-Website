// localStorage.clear();

function register() {
  // Get form values
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Check if any required field is empty
  if (!fullName || !email || !password) {
    alert("Please fill in all required fields.");
    return;
  }

  // Create user object
  var user = {
    fullName: fullName,
    email: email,
    password: password,
  };

  // Check if local storage is supported
  if (typeof Storage !== "undefined") {
    // Retrieve existing users or initialize an empty array
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Add new user to the array
    users.push(user);

    // Save the updated array back to local storage
    localStorage.setItem("users", JSON.stringify(users));

    // Optional: Display a success message
    alert("Registration successful!");

    setTimeout(function () {
      window.location.href = "log-in.html";
    }, 2000);

    // Optional: Clear the form after registration
    document.getElementById("registrationForm").reset();
  } else {
    // Local storage not supported
    alert(
      "Sorry, your browser does not support local storage. Please use a different browser."
    );
  }
}

function login() {
  // Get form values
  var loginEmail = document.getElementById("loginEmail").value;
  var loginPassword = document.getElementById("loginPassword").value;

  // Check if local storage is supported
  if (typeof Storage !== "undefined") {
    // Retrieve existing users from local storage
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the entered credentials match any registered user
    var loggedInUser = users.find(function (user) {
      return user.email === loginEmail && user.password === loginPassword;
    });

    if (loggedInUser) {
      document.getElementById("loginForm").reset();

      showSuccessAlert();

      // Redirect to index.html
      setTimeout(function () {
        window.location.href = "index-account.html";
      }, 1000);
    } else {
      // Invalid credentials
      alert("Invalid email or password. Please try again.");
    }
  } else {
    // Local storage not supported
    alert(
      "Sorry, your browser does not support local storage. Please use a different browser."
    );
  }
}

function showSuccessAlert() {
  // Get the alert div
  var alertDiv = document.getElementById("successAlert");

  // Remove 'hide' class and add 'show' class
  alertDiv.classList.remove("hide");
  alertDiv.classList.add("show");
}

function hideAlert() {
  // Get the alert div
  var alertDiv = document.getElementById("successAlert");

  // Remove 'show' class and add 'hide' class
  alertDiv.classList.remove("show");
  alertDiv.classList.add("hide");
}
