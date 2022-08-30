$(function () {
	if ($(".other-news-slider").length) {
		const OtherNewsSlider = new Swiper(".other-news-slider", {
			slidesPerView: 1,
			spaceBetween: 10,
			breakpoints: {
				700: {
					slidesPerView: 2,
				},
				1100: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
		});
	}
});
