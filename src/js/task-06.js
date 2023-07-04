
const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', function () {
  const transformationNumber = Number(
    validationInput.getAttribute('data-length')
  );
  const enteredValueLength = validationInput.value.length;
  if (enteredValueLength === transformationNumber) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else {
    validationInput.classList.remove('valid');
    validationInput.classList.add('invalid');
  }
});

