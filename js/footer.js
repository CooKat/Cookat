const coll = document.getElementsByClassName(
  'business-info-title-container'
);
let i;
let target = document.querySelector('.business-info-list');
let h = target.offsetHeight;
target.style = `display:block; height: ${h}px; transition:height 0.5s`;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    
    let content = this.nextElementSibling; // ul
    let img = this.lastElementChild; // button img

    if (content.style.display === 'block') {
      content.style = `height: 0; transition:height 0.5s`;
    } else {
      content.style = `display:block; height: ${h}px; transition:height 0.5s`;
    }
  });
}