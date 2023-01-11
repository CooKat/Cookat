var btn = document.querySelector('.search');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  btn.classList.toggle('is--active');
  if (btn.classList.contains('is--active')) {
    btn.setAttribute('aria-label', '검색 닫기');
    // 메뉴 열기 버튼 최초 클릭 시 트랜지션 설정
    menuList.style.cssText = 'transition:all 350ms ease-in-out';
    keyboardTrapInMenu();
  } else {
    btn.setAttribute('aria-label', '검색 열기');
    keyboardUntrapInMenu();
  }
  menu.classList.toggle('is--active');
});
