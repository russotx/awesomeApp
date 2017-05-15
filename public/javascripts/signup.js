$(document).ready(function() {
  console.log("signup.js");

  $(document).on("keydown",function(e){



  var emailInput = $("#signUpEmail");
  var passwordInput = $("#signUpPassword");

   var keyCode = e.which || e.keyCode;
   if(keyCode == 13) // enter key code
   {
      console.log(emailInput.val().trim());
      console.log(passwordInput.val().trim());


    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");

   }

});


  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password
    }).then(function(data) {
      console.log(data);
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  }

});