$(function () {
	let grid = ["6/10", "4/10", "1/3", "1/3", "1/3"];
	let pagelenght = $(".our-projects__projects").data("pagelenght");
	let pagestart = $(".our-projects__projects").data("pagestart");
	$(".our-projects__filter").click(function () {
		$(".our-projects__filter").removeClass("_active");
		$(this).addClass("_active");
		let thFilter = $(this).data("filter");
		let i = 0;
		let g = 0;
		$(".project-preview").removeClass("_visible");
		$(".project-preview").each(function () {
			if (thFilter == "all" || thFilter == $(this).data("filter")) {
				i++;
				if (i <= pagestart) {
					$(this).addClass("_visible");
					$(this).attr("data-width", grid[g]);
					g++;
					if (g >= grid.length) {
						g = 0;
					}
				}
			}
		});
		if (
			(thFilter != "all" &&
				$(".project-preview._visible[data-filter='" + thFilter + "']")
					.length ==
					$(".project-preview[data-filter='" + thFilter + "']")
						.length) ||
			$(".project-preview._visible").length ==
				$(".project-preview").length
		) {
			$(".our-projects__more").fadeOut();
		} else {
			$(".our-projects__more").fadeIn();
		}
	});
	$(".our-projects__filter._active").trigger("click");

	$(".our-projects__more").click(function () {
		let thFilter = $(".our-projects__filter._active").data("filter");
		let i = 0;
		let g = 0;
		$(".project-preview").each(function () {
			if (
				!$(this).hasClass("_visible") &&
				(thFilter == "all" || thFilter == $(this).data("filter"))
			) {
				i++;
				if (i <= pagelenght) {
					$(this).addClass("_visible");
					$(this).attr("data-width", grid[g]);
					g++;
					if (g >= grid.length) {
						g = 0;
					}
				}
			}

			if (
				(thFilter != "all" &&
					$(
						".project-preview._visible[data-filter='" +
							thFilter +
							"']"
					).length ==
						$(".project-preview[data-filter='" + thFilter + "']")
							.length) ||
				$(".project-preview._visible").length ==
					$(".project-preview").length
			) {
				$(".our-projects__more").fadeOut();
			} else {
				$(".our-projects__more").fadeIn();
			}
		});
	});
});
