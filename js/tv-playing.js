const playButton = document.querySelectorAll('.play-btn');
const play = document.querySelectorAll('.product-play-button');

for (let i = 0; i < playButton.length; i++) {
  playButton[i].addEventListener('click', function () {
    if (playButton[i].classList.contains('stop')) {
      play[i].style.display = 'none';
    } else {
      play[i].style.display = 'block';
    }
    playButton[i].classList.toggle('stop');
  });
}
