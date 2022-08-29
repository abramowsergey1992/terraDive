$(function() {
    $('.header__mini').find('.header__menu-row ').html($('.header__full').find('.header__menu-row ').html());
  $(window).scroll(function () {
		if (window.scrollY > 50) {
			$('.header').addClass('_not-top')
		} else {
			$('.header').removeClass('_not-top')
		}
  });
	    const mediaQuery = window.matchMedia('(max-width: 992px)')
	$('.header__mob-toogle').click(function () {
		$('.header').toggleClass('_menu-open')
	})
    $('._is-dropdown .header__menu-link').click(function(e){
        if (mediaQuery.matches) {
            e.preventDefault();
            $(this).closest('.header__menu-item').toggleClass('_open-dropdown')
        }
    })
});