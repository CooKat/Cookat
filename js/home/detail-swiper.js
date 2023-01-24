var main_swiper = new Swiper('.main-swiper', {
  pagination: {
    el: '.main-swiper .swiper-pagination',
    type: 'fraction',
  },
});
var rec_swiper = new Swiper('.rec-Swiper', {
  slidesPerView: 5,
  scrollbar: {
    el: '.rec-swiper-scrollbar',
    hide: false,
  },
});

const review = new Swiper('.review .swiper', {
  slidesPerView: 3.2,
  spaceBetween: 15,
  breakpoints: {
    500: {
      slidesPerView: 4.5,
    },
  },
});

const header = document.querySelector('.food-header');

window.addEventListener('scroll', function () {
  if (window.scrollY >= 100) {
    header.style = 'background:#fff';
    header.classList.add('scroll');
  } else {
    header.style = 'background:none';
    header.classList.remove('scroll');
  }
});

// 구매하기 팝업창
function show() {
  document.querySelector('.background').className = 'background show';
}

function close() {
  document.querySelector('.background').className = 'background';
}
