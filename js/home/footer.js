const businessWatchBar = document.getElementsByClassName('business-info-title-container');
const bussinessButton = document.getElementsByClassName('business-info-toggle-btn');
let i = 0;
let target = document.querySelector('.business-info-list');
let h = target.offsetHeight;

target.style = `display:block; height: ${h}px; transition:height 0.5s`;

Array.from(businessWatchBar).forEach(button => {
  button.addEventListener('click', function () {
    this.classList.toggle('active');

    let content = this.nextElementSibling; // ul
    let img = this.lastElementChild; // button img

    if (button.classList.contains('active')) {
      content.style = `height: ${h}px; transition:height 0.5s`;
      img.style = 'transform: rotate(0deg)';
    } else {
      content.style = `display:block; height: 0px; transition:height 0.5s`;
      img.style = 'transform: rotate(-180deg); ';
    }
  });
});
