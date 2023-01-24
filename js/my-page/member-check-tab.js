let tabList = document.querySelectorAll('.membership-check > li');
let link = document.location.href.toLowerCase();

if (link.indexOf('tab-id=2') > -1) {
  tabList[0].classList.remove('active');
  tabList[1].classList.add('active');
}
for (let i = 0; i < tabList.length; i++) {
  tabList[i].querySelector('.memberBtn').addEventListener('click', function (e) {
    e.preventDefault();
    for (let j = 0; j < tabList.length; j++) {
      tabList[j].classList.remove('active');
    }
    this.parentNode.classList.add('active');
  });
}
