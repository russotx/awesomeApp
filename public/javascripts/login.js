$(document).ready(function() {
<<<<<<< HEAD
  console.log("login.js");
  // Getting references to our form and inputs
  var emailInput = $("#exampleInputEmail1");
  var passwordInput = $("#exampleInputPassword1");


  $(document).on("keydown",function(e){

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
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");

   }

});





  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    }).then(function(data) {



      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });

  }

});



