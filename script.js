// Global variables
var registerUserBtn = document.getElementById("sign-up");
var usernameInput = document.querySelector("#username");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var thankYouEl = document.querySelector("#thank-you-msg");
const ageBttn = document.getElementById('ageBttn')

//save username to localStorage and push user to second page and say Welcome Username.

registerUserBtn.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create user object from submission
  var newUser = {
    userName: usernameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  };

  // set new submission to local storage 
  localStorage.setItem("user", JSON.stringify(newUser));

  var inputs = document.querySelectorAll('#username, #email, #password');

  inputs.forEach(input => {
    input.value = "";
  });


  thankYouEl.textContent = "Thank you for registering " + newUser.userName + "!";

});





// User has to be 21+ or else submit button wont activate
function askAge(radioInput){
  const not21 = document.getElementById('noCheckAge')
  if(radioInput ==not21){
    alert('You need to be 21+ to play.')
    ageBttn.disabled = true;

  } else {
    ageBttn.disabled = false
  }
}

// Send user to the next page
ageBttn.addEventListener('click', () => {
window.location.assign('index2.html');
 
  
});

