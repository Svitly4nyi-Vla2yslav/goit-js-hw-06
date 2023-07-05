const fontSizeControl = document.getElementById('font-size-control');
const textSpam = document.getElementById('text');
fontSizeControl.addEventListener('input', function () {
  const fontSize = fontSizeControl.value + 'px';
  textSpam.style.fontSize = fontSize;
});
