const productAll = document.querySelectorAll('.prd-all');
const play = document.querySelectorAll('.product-play-button');

for (let i = 0; i < productAll.length; i++) {
  productAll[i].addEventListener('click', function (event) {
    if (productAll[i].classList.contains('stop')) {
      play[i].style.display = 'none';
    } else {
      play[i].style.display = 'block';
    }
    productAll[i].classList.toggle('stop');
  });
}
