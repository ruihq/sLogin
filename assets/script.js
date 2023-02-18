// Get the user's email and password from the login form
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

// Sign in the user with email and password
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // Redirect to the user's dashboard or home page
    window.location.href = "dashboard.html";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // Display the error message to the user
    document.getElementById("error-message").innerHTML = errorMessage;
  });
