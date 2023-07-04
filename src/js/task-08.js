const form = document.querySelector('.login-form');
const autocompleteInput = document.querySelector('input[name="password"]');
autocompleteInput.setAttribute('autocomplete', 'current-password');
const autocompleteEmail = document.querySelector('input[name="email"]');
autocompleteEmail.setAttribute('autocomplete', 'username');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Всі поля повинні бути заповнені');
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
  
}
