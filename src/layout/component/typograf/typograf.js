$(function () {
	$(".t-gallery").each(function () {
		let gallerySlider = new Swiper(this, {
			speed: 400,
			spaceBetween: 100,
			navigation: {
				nextEl: $(this).find(".t-gallery__nav-next")[0],
				prevEl: $(this).find(".t-gallery__nav-prev")[0],
			},
		});
	});
});
