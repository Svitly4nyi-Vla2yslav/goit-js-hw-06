// const nameInput = document.getElementById('name-input');
// const nameOutput = document.getElementById('name-output');
// nameInput.addEventListener('input', function () {
//   if (nameInput.value !== '') {
//     nameOutput.textContent = nameInput.value;
//   } else {
//     nameOutput.textContent = 'Anonymous';
//   }
// });
// const nameInput = document.querySelector('#name-input');
// const outputName = document.querySelector('#name-output');
// nameInput.addEventListener('input', function () {
//   const inputValue = nameInput.value;
//   if (inputValue === ''){
//     outputName.textContent = 'Anonymous';
//   } else {
//     outputName.textContent = inputValue;
//   }
// })

// const inputName = document.querySelector('#name-input');
// const outputName = document.querySelector('#name-output');
// inputName.addEventListener('input', function () {
//   const inputValue = inputName.value;
//   if (inputValue === '') {
//     outputName.textContent = 'Anonymous';
//   } else {
//     outputName.textContent = inputValue;
//   }
// })

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
inputName.addEventListener('input', function () {
  const inputValue = inputName.value;
  if (inputValue === '') {
    outputName.textContent = 'Anonymous';
  } else {
    outputName.textContent = inputValue;
  }
});
