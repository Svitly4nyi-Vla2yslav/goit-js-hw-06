const listCategories = document.querySelectorAll('#categories > li.item');
console.log(`Number of categories: ${listCategories.length}`);
listCategories.forEach(categori => {
  const titleName = categori.querySelector('h2').textContent;
  const allAnimalsLength = categori.querySelectorAll('li');
  console.log(`Category: ${titleName}`);
  console.log(`Elements: ${allAnimalsLength.length}`);
});
