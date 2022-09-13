$(function () {
	if ($(".blog-page").length) {
		const BlogTypeSlider = new Swiper(".blog-type-slider", {
			allowTouchMove: false,
			loop: false,
			autoHeight: true,
			observeSlideChildren: true,
			observer: true,
			effect: "flip",
			flipEffect: {
				slideShadows: false,
			},
		});
		$(".blog-page__head-filter").click(function () {
			$(".blog-page__head-filter").removeClass("_active");
			$(this).addClass("_active");
			BlogTypeSlider.slideTo($(this).data("slideindex"));
		});
		$(".blog-page__filter").click(function () {
			let filter = $(this).data("filter");
			$(".blog-page__filter").removeClass("_active");
			$(this).addClass("_active");
			$(".aticle-preview").removeClass("_hidden");
			$(".aticle-month-group").removeClass("_hidden");
			$(".news-preview").removeClass("_hidden");
			if (filter != "All") {
				$(".aticle-month-group").each(function () {
					let vLenght = 0;
					$(this)
						.find(".aticle-preview")
						.each(function () {
							if ($(this).data("filter") == filter) {
								vLenght++;
							} else {
								$(this).addClass("_hidden");
							}
						});
					if (vLenght == 0) {
						$(this).addClass("_hidden");
					} else {
						$(this).removeClass("_hidden");
					}
				});
				$(".news-preview").each(function () {
					if ($(this).data("filter") != filter) {
						$(this).addClass("_hidden");
					}
				});
			}
			BlogTypeSlider.updateAutoHeight();
		});
		$(".blog-page__filter._active").trigger("click");
		$(".blog-page__head-filter._active").trigger("click");
	}
});
