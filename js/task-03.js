const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const galleryList = document.querySelector('.gallery');

// const imagesList = images
//   .map(image => `<li class="image-item"><img src="${image.url}" alt="${image.alt}" class="image-gallery"/></li>`)
//   .join(' ');
// galleryList.insertAdjacentHTML('beforeend', imagesList);

// const gallery = document.querySelector('.gallery');
// const elementsGallery = images
//   .map(
//     image => `
// <li class='item-image'><img src='${image.url}' alt='${image.alt}' class='image-gallery'/></li>`
//   )
//   .join(' ');
// gallery.insertAdjacentHTML('beforeend', elementsGallery);
const galleryList = document.querySelector('.gallery');
const markupItem = images.map(image => 
  `
<li class='item-image'><img src='${image.url}' alt='${image.alt}' class='image-gallery'/></li>`
  )
  .join(' ');
  galleryList.insertAdjacentHTML('beforeend', markupItem);
