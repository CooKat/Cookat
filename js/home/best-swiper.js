const best_swiper = new Swiper('.best_swiper', {
  slidesPerView: 'auto',
  freeMode: true,
  spaceBetween: 10,
  slideToClickedSlide: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
});
const categori_swiper = new Swiper('.categori_swiper', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  loop: true,
});

function menuClickEvent() {
  let tabList = document.querySelectorAll('.best-categori-item');

  for (let i = 0; i < tabList.length; i++) {
    tabList[i].querySelector('button').addEventListener('click', function (e) {
      e.preventDefault();
      for (let j = 0; j < tabList.length; j++) {
        tabList[j].classList.remove('on');
      }
      this.parentNode.classList.add('on');
    });
  }
}

menuClickEvent();
