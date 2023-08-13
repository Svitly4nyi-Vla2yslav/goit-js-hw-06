function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const dataCreate = document.querySelector('[data-create]');
const dataDestroy = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const boxes = document.querySelector('#boxes');
function createBoxes() {
  const amountInput = input.value;
  destroyBoxes();
  for (let i = 0; i < amountInput; i++) {
    const size = 30 + i * 10;
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(newBox);
  }
}
function destroyBoxes() {
  while (boxes.firstChild) {
    boxes.removeChild(boxes.firstChild);
  }
}

dataCreate.addEventListener('click', createBoxes);
dataDestroy.addEventListener('click', destroyBoxes);