var categori_swiper = new Swiper('.categori_swiper', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  loop: true,
});
let menu = new Swiper('.menu.swiper', {
  slidesPerView: 'auto',
  freeMode: true,
});
let slide_prd = new Swiper('.slide-prd .swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.slide-prd .swiper-pagination',
  },
});

// @@@@@ 카트담기 js 영역

function show() {
  document.querySelector('.background').className = 'background show';
}

function close() {
  document.querySelector('.background').className = 'background';
}

document.querySelector('#close').addEventListener('click', close);
document.querySelector('#show').addEventListener('click', show);
