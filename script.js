// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
const form = document.getElementById("form");
const errors = document.querySelector(".errors");
const errorsList = document.querySelector(".errors-list");
const userName = document.getElementById("username");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const terms = document.getElementById("terms");
let errorMessages = [];

// TODO: Create an event listener for when the form is submitted and do the following inside of it.
//    TODO: Create an array to store all error messages and clear any old error messages
//    TODO: Define the following validation checks with appropriate error messages
//      1. Ensure the username is at least 6 characters long
//      2. Ensure the password is at least 10 characters long
//      3. Ensure the password and confirmation password match
//      4. Ensure the terms checkbox is checked
//    TODO: If there are any errors then prevent the form from submitting and show the error messages

form.addEventListener("submit", (e) => {
  errorMessages.length = 0;

  checkUserName();
  checkPassword();
  checkPasswordConfirmation();
  checkTerms();
  clearErrors();
  showErrors(errorMessages);

  if (
    !checkUserName() ||
    !checkPassword() ||
    !checkPasswordConfirmation() ||
    !checkTerms()
  ) {
    e.preventDefault();
  }
});

// TODO: Define this function

function isRequired(value) {
  if (value === "") {
    return false;
  } else {
    return true;
  }
}

function checkUserName() {
  let valid = false;
  const min = 6;
  const inputUserName = userName.value.trim();

  if (isRequired(inputUserName) && inputUserName.length >= min) {
    valid = true;
    return valid;
  } else {
    const userNameError =
      "Please provide your user name of at least 6 characters.";
    errorMessages.push(userNameError);
  }
}

function checkPassword() {
  let valid = false;
  const min = 10;
  const inputPassword = password.value.trim();

  if (isRequired(inputPassword) && inputPassword.length >= min) {
    valid = true;
    return valid;
  } else {
    const passwordError =
      "Please provide your password of at least 10 characters.";
    errorMessages.push(passwordError);
  }
}

function checkPasswordConfirmation() {
  let valid = false;
  const inputPassword = password.value.trim();
  const inputPasswordConfirmation = passwordConfirmation.value.trim();

  if (
    isRequired(inputPasswordConfirmation) &&
    inputPassword === inputPasswordConfirmation
  ) {
    valid = true;
    return valid;
  } else {
    const passwordConfirmationError = "Please ensure your passwords match.";
    errorMessages.push(passwordConfirmationError);
  }
}

function checkTerms() {
  let valid = false;
  if (terms.checked) {
    valid = true;
    return valid;
  } else {
    const checkTermsError = "Please accept the terms.";
    errorMessages.push(checkTermsError);
  }
}

function clearErrors() {
  // Loop through all the children of the error-list element and remove them
  // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
  // I recommend using a while loop to accomplish this task
  // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
  // Also, make sure you remove the show class to the errors container

  let errorListElements = document.querySelectorAll(".errors-list li");

  // Loop through elements with for loop

  // for (let i = 0; (li = errorListElements[i]); i++) {
  //   li.parentNode.removeChild(li);
  // }

  // Loop through elements with while loop

  let i = 0;
  while ((li = errorListElements[i])) {
    li.parentNode.removeChild(li);

    if (errorMessages.length === 0) {
      errors.classList.remove("show");
    }

    i++;
  }
}

// TODO: Define this function
function showErrors(array) {
  // Add each error to the error-list element
  // Make sure to use an li as the element for each error
  // Also, make sure you add the show class to the errors container

  for (let i = 0; i < array.length; i++) {
    errorsList.innerHTML += `<li>${array[i]}</li>`;
  }

  if (errorMessages.length > 0) {
    errors.classList.add("show");
  }
}
