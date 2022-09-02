$(function () {
	if ($(".top__bg").length) {
		$("body").addClass("_top-bg");
	}
	$(".top__down").click(function () {
		$("HTML, BODY").animate(
			{
				scrollTop: window.innerHeight,
			},
			1000
		);
	});
});
