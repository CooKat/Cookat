var btn = document.querySelector('.home-search');
var searchContainer = document.querySelector('.search-container');

btn.addEventListener('click', function (e) {
  e.preventDefault();

  btn.classList.toggle('is--active');
  searchContainer.classList.toggle('is--active');

  if (btn.classList.contains('is--active')) {
    btn.setAttribute('aria-label', '메뉴 닫기');
    menuList.style.cssText = 'transition:all 350ms ease-in-out';
  } else {
    btn.setAttribute('aria-label', '메뉴 열기');
  }
});
