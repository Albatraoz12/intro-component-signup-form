// Add event listener to the button
document.getElementById('btn').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the form from submitting
  console.log('click');

  // Reset the form field styles
  resetFieldStyles();

  // Perform form validation
  var fname = document.getElementById('fname');
  var lname = document.getElementById('lname');
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var isValid = true;

  if (isEmpty(fname.value)) {
    isValid = false;
    markFieldAsInvalid(fname);
  }

  if (isEmpty(lname.value)) {
    isValid = false;
    markFieldAsInvalid(lname);
  }

  if (isEmpty(email.value) || !isValidEmail(email.value)) {
    isValid = false;
    markFieldAsInvalid(email);
  }

  if (isEmpty(password.value)) {
    isValid = false;
    markFieldAsInvalid(password);
  }

  if (isValid) {
    // Form is valid, you can submit it or perform any additional actions here
    console.log('Form submitted successfully!');
  }
});

function resetFieldStyles() {
  var formInputs = document.getElementsByClassName('form-input');

  Array.from(formInputs).forEach(function (formInput) {
    formInput.classList.remove('invalid');
    var errorIcon = formInput.previousElementSibling;

    if (errorIcon.classList.contains('error-icon')) {
      errorIcon.style.display = 'none';
    }
  });
}

function markFieldAsInvalid(field) {
  field.classList.add('invalid');
  var errorIcon = field.previousElementSibling;

  if (errorIcon.classList.contains('error-icon')) {
    errorIcon.style.display = 'inline-block';
  }
}

function isValidEmail(email) {
  // You can implement your own email validation logic here
  // This is a basic email validation example
  var emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

function isEmpty(value) {
  return value.trim() === '';
}
