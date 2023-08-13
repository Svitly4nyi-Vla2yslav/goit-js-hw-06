// const fontSizeControl = document.getElementById('font-size-control');
// const textSpam = document.getElementById('text');
// fontSizeControl.addEventListener('input', function () {
//   const fontSize = fontSizeControl.value + 'px';
//   textSpam.style.fontSize = fontSize;
// });

// const fontSizeControl = document.querySelector('#font-size-control');
// const textSpam = document.querySelector('#text');
// fontSizeControl.addEventListener('input', function () {
//   const fontSizeValue = fontSizeControl.value;
//   textSpam.style.fontSize = `${fontSizeValue}px`;
// })

const fontSizeControl = document.querySelector('#font-size-control');
const textSpam = document.querySelector('#text');
fontSizeControl.addEventListener('input', function () {
  const fontSizeValue = fontSizeControl.value;
  textSpam.style.fontSize = `${fontSizeValue}px`
});