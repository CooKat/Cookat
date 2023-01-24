var _select_number_title = $('.phone-number-wrapper > span');
$('<div class="phone_select_icon"></div>').insertAfter(_select_number_title);

_select_number_title.click(function () {
  $('.phone-first-number').toggleClass('selected-number');
  $('.phone_select_icon').toggleClass('selected-number');
});

$('.phone-first-number > li').on('click', function () {
  var _li_number_value = $(this).text();
  _select_number_title.text(_li_number_value);
  $('.phone-first-number').removeClass('selected-number');
  $('.phone_select_icon').toggleClass('selected-number');
});
$('body').click(function (e) {
  var box = document.querySelector('.phone-number-wrapper span');
  if ($('.phone-first-number').hasClass('selected-number')) {
    if (!$('.phone-number-wrapper').has(e.target).length) {
      $('.phone-first-number').removeClass('selected-number');
      $('.phone_select_icon').removeClass('selected-number');
    }
    box.style['border'] = '1px solid #000';
    box.style['border-bottom-right-radius'] = '0px';
    box.style['border-bottom-left-radius'] = '0px';
    box.style['border-bottom-right-radius'] = '4px';
    box.style['border-bottom-left-radius'] = '4px';
  } else {
    box.style['border'] = '1px solid #e0e0e0';
    box.style['border-bottom-right-radius'] = '4px';
    box.style['border-bottom-left-radius'] = '4px';
  }
});
