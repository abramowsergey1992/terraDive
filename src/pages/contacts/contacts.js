$(function () {
	if ($(".contact-page").length) {
		let ind;
		$(".contact-data-swiper .swiper-slide").each(function (i) {
			$(this).attr("data-indx", i);
		});
		const sliderContact = new Swiper(".contact-data-swiper ", {
			allowTouchMove: "false",
			loop: false,
		});
		$("#contact-country").change(function () {
			sliderContact.slideTo(
				$('.swiper-slide[data-slide="' + $(this).val() + '"]').data(
					"indx"
				)
			);
		});
	}

	if ($("#contact-form").length) {
		let validContacnt = $("#contact-form").validate({
			errorPlacement: function (error, element) {},
			submitHandler: function (form) {
				$(".contact-form__btn").attr("disabled", "disabled");
				$.ajax({
					url: $(form).attr("action"),
					data: $(form).serialize(),
					method: "POST",
					headers: {
						"X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
							"content"
						),
					},
					context: document.body,
					success: function () {
						alert("Форма отправленна успешно");
						$(".contact-form__btn").removeAttr("disabled");
					},
					error: function () {
						alert("Ошибка");
						$(".contact-form__btn").removeAttr("disabled");
					},
				});
			},
		});
	}
});
