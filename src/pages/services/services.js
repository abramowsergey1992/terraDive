$(function () {
	$(".directions__filter").click(function () {
		$(".directions__filter").removeClass("_active");
		$(this).addClass("_active");
		let filter = $(this).data("filter");
		if (filter == "all") {
			$(".direction-preview").removeClass("_hidden");
		} else {
			$(".direction-preview").each(function () {
				if ($(this).data("filter") == filter) {
					$(this).removeClass("_hidden");
				} else {
					$(this).addClass("_hidden");
				}
			});
		}
	});
	$(".directions__filter._active").trigger("click");
});
