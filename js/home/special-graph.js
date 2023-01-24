var coll = document.getElementsByClassName('bargain-graph-title');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');

    var content = this.nextElementSibling;
    var img = this.lastElementChild;

    if (content.style.display === 'block') {
      content.style.display = 'none';
      img.style = 'transform: rotate(-180deg)';
    } else {
      content.style.display = 'block';
      img.style = 'transform: rotate(0deg)';
    }
  });
}
