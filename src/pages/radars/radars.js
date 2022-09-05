$(function () {
	if ($(".radars-catalog-slider").length) {
		const radadrCatalogSwiper = new Swiper(".radars-catalog-slider", {
			slidesPerView: 1.0,
			spaceBetween: 16,
			breakpoints: {
				400: {
					slidesPerView: 1.5,
				},
				580: {
					slidesPerView: 2,
				},
				800: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				},
			},
		});
	}
});
