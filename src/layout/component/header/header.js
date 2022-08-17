$(function() {
    $('.header__mini').find('.header__menu-row ').html($('.header__full').find('.header__menu-row ').html());
  $(window).scroll(function () {
		if (window.scrollY > 50) {
			$('.header').addClass('_not-top')
		} else {
			$('.header').removeClass('_not-top')
		}
	});
});