let soundButton = document.querySelectorAll('.sound button');

for (let i = 0; i < soundButton.length; i++) {
  soundButton[i].addEventListener('click', () => {
    let [offSound, onSound] = soundButton[i].children;
    event.stopPropagation();
    soundButton[i].classList.toggle('on');
    if (soundButton[i].classList.contains('on')) {
      soundButton[i].style['background-image'] =
        "url('https://crcf.cookatmarket.com/assets/mobile/img/using_guide/ic-solid-mute-shadow.svg')";
      onSound.style.display = 'none';
      offSound.style.display = 'block';
    } else {
      soundButton[i].style['background-image'] =
        "url('https://crcf.cookatmarket.com/assets/mobile/img/using_guide/ic-solid-unmute-shadow.svg')";
      onSound.style.display = 'block';
      offSound.style.display = 'none';
    }
  });
}
