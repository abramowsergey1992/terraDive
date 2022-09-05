$(function () {
	if ($(".radar-tabs-slider").length) {
		const radarSlider = new Swiper(".radar-tabs-slider", {
			spaceBetween: 50,
			allowTouchMove: false,
			autoHeight: true,
		});
		$(".radar-tabs__tab").click(function () {
			$(".radar-tabs__tab").removeClass("_active");
			$(this).addClass("_active");
			radarSlider.slideTo($(this).data("slide"));
		});
		$(".radar-tabs__tab._active").trigger("click");
	}
});
