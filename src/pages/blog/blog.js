$(function () {
	if ($(".blog-page").length) {
		const BlogTypeSlider = new Swiper(".blog-type-slider", {
			allowTouchMove: false,
			loop: false,
			autoHeight: true,
			observeSlideChildren: true,
			observer: true,
			effect: "fade",
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
			$(".aticle-preview").addClass("_hidden");
			$(".aticle-month-group").addClass("_hidden");
			$(".news-preview").addClass("_hidden");
			$(".news-preview").addClass("_hidden");
			if (filter != "All") {
				$(".aticle-month-group").each(function () {
					let vLenght = 0;
					$(this)
						.find(".aticle-preview")
						.each(function () {
							if ($(this).data("filter") == filter) {
								vLenght++;
								$(this).removeClass("_hidden");
							} else {
							}
						});
					if (vLenght == 0) {
					} else {
						$(this).removeClass("_hidden");
					}
				});
				$(".news-preview").each(function () {
					if ($(this).data("filter") == filter) {
						$(this).removeClass("_hidden");
					}
				});
			} else {
				$(".aticle-preview").removeClass("_hidden");
				$(".aticle-month-group").removeClass("_hidden");
				$(".news-preview").removeClass("_hidden");
				$(".news-preview").removeClass("_hidden");
			}
			let delay = 0;
			if ($('[data-slideindex="0"]').hasClass("_active")) {
				$(".news-preview").each(function () {
					if (!$(this).hasClass("_hidden")) {
						delay += 50;
						$(this).removeAttr("style");
						$(this).css(
							"animation",
							"ani 1s forwards " + delay + "ms"
						);
					}
				});
			}
			if ($('[data-slideindex="0"]').hasClass("_active")) {
				$(".news-preview").each(function () {
					if (!$(this).hasClass("_hidden")) {
						delay += 50;
						$(this).removeAttr("style");
						$(this).css(
							"animation",
							"ani 1s forwards " + delay + "ms"
						);
					}
				});
			}
			if ($('[data-slideindex="1"]').hasClass("_active")) {
				$(".aticle-month-group").each(function () {
					if (!$(this).hasClass("_hidden")) {
						delay += 50;
						$(this).removeAttr("style");
						$(this).css(
							"animation",
							"ani 1s forwards " + delay + "ms"
						);
					}
				});
			}
			BlogTypeSlider.updateAutoHeight();
		});

		$(".blog-page__filter._active").trigger("click");
		$(".blog-page__head-filter._active").trigger("click");
	}
});
