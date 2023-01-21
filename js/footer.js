var coll = document.getElementsByClassName(
  'business-info-title-container'
);
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');

    var content = this.nextElementSibling; // ul
    var img = this.lastElementChild; // button img

    if (content.style.display === 'block') {
      content.style = 'height: 260px; transition:height 0.5s';
      img.style = 'transform: rotate(0deg)';
    } else {
      content.style = 'display: block; height: 0; transition:height 0.5s';
      img.style = 'transform: rotate(-180deg); ';
    }
  });
}