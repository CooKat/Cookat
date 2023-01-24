function popupEdit() {
  let joinPopup =
    /*html*/
    `
  <section class="member-join-form" id="join-popup" style="display:none;">
    <div class="popup-title">
      <h2 class="logo"><img src="/images/logo-cookat-text-cat.svg" alt="쿠캣" /></h2>
      <p>
        지금 가입하고 <b>10% 할인 쿠폰</b>과<br/>
        <b>무료배송 쿠폰</b> 받으세요!
      </p>
    </div>
    <a href="/" class="login-button"><i class="mail-icon"></i> 이메일로 시작하기</a>
    <a href="./login.html" class="email-sign-button">이메일로 로그인하기</a>
    <div class="sns-login-menu">
      <h2 class="a11y-hidden">SNS 계정으로 로그인</h2>
      <ul>
        <li><a href="/"><img src="/images/ic-social-kakao.svg" alt="카카오 로그인" /></a></li>
        <li><a href="/"><img src="/images/ic-social-naver.svg" alt="네이버 로그인" /></a></li>
        <li><a href="/"><img src="/images/ic-social-facebook.svg" alt="페이스북 로그인" /></a></li>
        <li><a href="/"><img src="/images/ic-social-google.svg" alt="구글 로그인" /></a></li>
        <li><a href="/"><img src="/images/ic-social-apple.svg" alt="애플 로그인" /></a></li>
      </ul>
    </div>
    <button type="button" class="member-join-close"><img src="./images/ic-24-close-orange.svg" alt="닫기" /></button>
  </section>
`;

  if (document.getElementById('join-popup') === null) {
    // 팝업 생성
    document.body.insertAdjacentHTML('beforeend', joinPopup);
  } else return;
}

// 팝업 열기
function popupOpen() {
  const targetID = '#join-popup';
  let target = document.querySelector('.join-btn');
  target.addEventListener('click', function () {
    document.querySelector(targetID).style.display = 'block';
  });
}

// 팝업 닫기
function popupClose() {
  let btnPopClose = document.querySelector('.member-join-close');
  btnPopClose.addEventListener('click', function () {
    this.parentNode.style.display = 'none';
  });
}

popupEdit();
popupOpen();
popupClose();
