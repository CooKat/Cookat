var _select_title = $('.delivery-message-box > span');
$('<div class="select_icon"></div>').insertAfter(_select_title);

_select_title.click(function () {
  $('.delivery-message').toggleClass('active');
  $('.select_icon').toggleClass('active');
});

$('.delivery-message > li').on('click', function () {
  var _li_value = $(this).text();
  _select_title.text(_li_value);
  $('.delivery-message').removeClass('active');
  $('.select_icon').toggleClass('active');
});
$('body').click(function (e) {
  var box = document.querySelector('.delivery-message-box span');
  var checkList = document.querySelector('.check-list');
  if ($('.delivery-message').hasClass('active')) {
    if (!$('.delivery-message-box').has(e.target).length) {
      $('.delivery-message').removeClass('active');
      $('.select_icon').removeClass('active');
    }
    box.style['border'] = '1px solid #000';
    box.style['border-bottom-right-radius'] = '0px';
    box.style['border-bottom-left-radius'] = '0px';
    box.style['border-bottom-right-radius'] = '4px';
    box.style['border-bottom-left-radius'] = '4px';
    checkList.style['margin-top'] = '190px';
  } else {
    box.style['border'] = '1px solid #e0e0e0';
    box.style['border-bottom-right-radius'] = '4px';
    box.style['border-bottom-left-radius'] = '4px';
    checkList.style['margin-top'] = '16px';
  }
});
