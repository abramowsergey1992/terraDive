$(function () {
	if ($(".radar-photo ").length) {
		$(".radar-photo").mousemove(function (event) {
			let top = $(this).offset().top;
			let left = $(this).offset().left;
			let width = $(this).width();
			let length = $(this).find("picture").length - 1;
			let section = width / length;
			left = event.pageX - left;

			let indx = Math.floor(left / section);
			if (indx < 0) {
				indx = 0;
			}
			if (indx > length) {
				indx = length;
			}
			console.log(indx);
			$(this).find("picture").removeClass("_visible");
			$($(this).find("picture")[indx]).addClass("_visible");
		});
	}
});
