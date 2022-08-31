$(function () {
	let pagination = $(".stories-list").data("pagination");
	let visible = 0;
	$(".story-preview").each(function () {
		visible++;
		if (visible <= pagination) {
			$(this).removeClass("_hidden-story");
		}
	});
	$(".story-more").click(function () {
		let visible = 0;
		$(".story-preview").each(function () {
			if ($(this).hasClass("_hidden-story")) {
				visible++;
				if (visible <= pagination) {
					$(this).removeClass("_hidden-story");
				}
			}
		});
		if ($("._hidden-story").length == 0) {
			$(this).fadeOut();
		}
	});
});
