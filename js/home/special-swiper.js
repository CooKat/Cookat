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

var menu = new Swiper('.menu.swiper', {
  slidesPerView: 'auto',
  freeMode: true,
});
