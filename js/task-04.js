// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const valueEl = document.getElementById('value');
// let counterValue = 0;
// decrementBtn.addEventListener('click', function () {
//   counterValue -= 1;
//   valueEl.textContent = counterValue;
// });
// incrementBtn.addEventListener('click', function () {
//   counterValue += 1;
//   valueEl.textContent = counterValue;
// });
// valueEl.textContent = counterValue;

// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');
// const valueEl = document.querySelector('#value');
// let counterValue = 0;
// incrementBtn.addEventListener('click', function () {
//   counterValue += 1;
//   valueEl.textContent = counterValue;
// })
// decrementBtn.addEventListener('click', function () {
//   counterValue -= 1;
//   valueEl.textContent = counterValue;
// })
// valueEl.textContent = counterValue;


const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const saveValue = document.querySelector('#value');
let counterValue = 0;
decrement.addEventListener('click', function () {
  counterValue -= 1;
  saveValue.textContent = counterValue;
})
increment.addEventListener('click', function () {
  counterValue += 1;
  saveValue.textContent = counterValue;
})
saveValue.textContent = counterValue;
