const productMoreButton = document.querySelector('.product-more-tool');
const productMorePopUp = document.querySelector('.product-more-popup');
const productMoreBackground = document.querySelector('.product-more-bg');

const closeButton = document.querySelector('.close-btn');

productMoreButton.addEventListener('click', () => {
  productMoreButton.classList.add('popup');
  if (productMoreButton.classList.contains('popup')) {
    productMorePopUp.style.display = 'block';
    productMoreBackground.style.display = 'block';
  }
});

closeButton.addEventListener('click', () => {
  productMoreButton.classList.remove('popup');
  productMoreBackground.style.display = 'none';
  productMorePopUp.style.display = 'none';
});

productMoreBackground.addEventListener('click', () => {
  productMoreButton.classList.remove('popup');
  productMoreBackground.style.display = 'none';
  productMorePopUp.style.display = 'none';
});
