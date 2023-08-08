const listItem = document.querySelectorAll('li.item');
console.log(`Number of categories: ${listItem.length}`);
listItem.forEach(item => {
  const nameTitle = item.querySelector('h2').textContent;
  const allElement = item.querySelectorAll('li');
  console.log(`Category: ${nameTitle}`);
  console.log(`Elements: ${allElement.length}`);
});
