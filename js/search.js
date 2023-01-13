var btn = document.querySelector('.home-search');
const searchInput = document.querySelector('.search-input');
var searchContainer = document.querySelector('.search-container');
var searchCloseButton = document.querySelector('.search-close-btn');
var EraseButton = document.querySelector('.erase-btn');
var searchButton = document.querySelector('.search-btn');
const fixedAdvertiseContainer = document.querySelector('.fixed-advertise-container');
const body = document.querySelector('body');

btn.addEventListener('click', function (e) {
  e.preventDefault();

  btn.classList.toggle('is--active');
  searchContainer.classList.toggle('is--active');

  if (btn.classList.contains('is--active')) {
    btn.setAttribute('aria-label', '메뉴 닫기');
    searchContainer.style.display = 'block';
    fixedAdvertiseContainer.style.display = 'none';
    body.style.overflowY = 'hidden';
  } else {
    btn.setAttribute('aria-label', '메뉴 열기');
    searchContainer.style.display = 'none';
    fixedAdvertiseContainer.style.display = 'block';
    body.style.overflowY = 'auto';
  }
});

searchCloseButton.addEventListener('click', function (e) {
  e.preventDefault();
  searchContainer.style.display = 'none';
  btn.classList.remove('is--active');
  fixedAdvertiseContainer.style.display = 'block';
});

searchInput.oninput = function (e) {
  if (searchInput.value.length > 0) {
    EraseButton.style.display = 'none';
    searchButton.style.display = 'block';
  }
  EraseButton.style.display = 'block';
  searchButton.style.display = 'none';
};

EraseButton.addEventListener('click', function (e) {
  searchInput.value = '';
  EraseButton.style.display = 'none';
  searchButton.style.display = 'block';
});
