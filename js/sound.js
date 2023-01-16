let soundButton = document.querySelector('.sound button');
let [offSound, onSound] = document.querySelectorAll('.sound button span');

soundButton.addEventListener('click', () => {
  soundButton.classList.toggle('on');
  if (soundButton.classList.contains('on')) {
    soundButton.style['background-image'] =
      "url('https://crcf.cookatmarket.com/assets/mobile/img/using_guide/ic-solid-mute-shadow.svg')";
    offSound.style.display = 'block';
    onSound.style.display = 'none';
  } else {
    soundButton.style['background-image'] =
      "url('https://crcf.cookatmarket.com/assets/mobile/img/using_guide/ic-solid-unmute-shadow.svg')";
    onSound.style.display = 'block';
    offSound.style.display = 'none';
  }
});
