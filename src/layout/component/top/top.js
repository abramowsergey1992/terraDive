$(function () {
	if ($(".top__bg")) {
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
