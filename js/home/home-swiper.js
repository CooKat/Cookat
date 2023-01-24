var categori_swiper = new Swiper('.categori_swiper', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1000,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  loop: true,
});

var visual = new Swiper('.visual .swiper', {
  pagination: {
    el: '.visual .swiper-pagination',
    type: 'fraction',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.visual .swiper-button-next',
    prevEl: '.visual .swiper-button-prev',
  },
});
var menu = new Swiper('.menu', {
  slidesPerView: 'auto',
  freeMode: true,
});
var img_menu_bar = new Swiper('.img-menu-bar .swiper', {
  slidesPerView: 4.5,
  spaceBetween: 10,
  freeMode: true,
});
var slide_prd = new Swiper('.slide-prd .swiper', {
  slidesPerView: 1.2,
  freeMode: true,
});

var autoswiper = new Swiper('.slide .swiper', {
  spaceBetween: 0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.slide swiper-pagination',
  },
});

var videoswiper = new Swiper('.market .swiper', {
  slidesPerView: 2.6,
  freeMode: true,
  spaceBetween: 10,
  slidesOffsetBefore: 15,
  slidesOffsetAfter: 15,
});

var launchingSwiper = new Swiper('.lauching', {
  slidesPerView: '1.10201',
  spaceBetween: 18,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // swiper 끝나고 여백 35px 주기
  slidesOffsetAfter: 35,
});

const topButton = document.querySelector('.top-button');

function topEvent(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

topButton.addEventListener('click', topEvent);
