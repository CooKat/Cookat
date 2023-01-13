let menus = document.querySelectorAll(".slide-content > li");
let transitionTime = 0.5;

Array.prototype.forEach.call(menus, function(v, i, a){
  v.addEventListener("click", function () {
    let t = this;
    let target = t.querySelector('div');

    if (!t.classList.contains('js-slide')) {
      jSlideDown(t, target);
    } else {
      jSlideUp(t, target);
    }
    
    Array.prototype.forEach.call(a, function(sibE, sibI, sibA){
      if(i !== sibI){
        let target = sibE.querySelector('div');
        jSlideUp(sibE, target);
      }
    });

    target.addEventListener('click', function(e){
      e.stopPropagation();
    });
  });
});

function jSlideUp(t, target) {
  t.classList.remove("active");
  if (t.classList.contains('js-slide')) {
    target.style.overflow = 'hidden';
    let h = target.offsetHeight;
    target.style.height = h + 'px';

    setTimeout(function() {
      target.style.height = '0px';
    }, 0);

    setTimeout(function() {
      t.classList.remove('js-slide');
      t.classList.remove("active");
      target.removeAttribute('style');
    }, (transitionTime * 1000));
  }
}

function jSlideDown(t, target) {
  t.classList.add("active");
  t.classList.add("js-slide");
  target.style.display = 'block';
  let h = target.offsetHeight;
  target.style.height = '0px';
  setTimeout(function() {
    target.style.transition = 'height '+ transitionTime +'s';
    target.style.height = h + 'px';
  }, 0);
  
  if (!t.classList.contains('active')) {
    setTimeout(function() {
      target.style.removeProperty('height');
    }, (transitionTime * 1000));
  }
}