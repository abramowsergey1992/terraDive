$(function () {
	if ($("#step-3-form-slider").length) {
		const step3formSlider = new Swiper("#step-3-form-slider", {
			autoHeight: true,
			slidesPerView: 1,
			spaceBetween: 10,
			allowTouchMove: false,
			on: {
				slideChange: function () {
					$("#step-3-form-slider").attr("slide", this.activeIndex);
					$(".step-3-form__step").removeClass("_active");
					$(".step-3-form__step")
						.eq(this.activeIndex)
						.addClass("_active");
					setTimeout(function () {
						$("HTML, BODY").animate(
							{
								scrollTop:
									$(".step-3-form__steps").offset().top - 100,
							},
							700
						);
					}, 300);
				},
			},
		});

		let validStep3 = $("#step-3-form-slider").validate({
			errorPlacement: function (error, element) {},
			submitHandler: function (form) {
				console.log("asdas");
				let slide = $("#step-3-form-slider").attr("slide");
				if (slide == "0") {
					step3formSlider.slideTo(1);
				}
				if (slide == "1") {
					step3formSlider.slideTo(2);
				}
				if (slide == "2") {
					if ($(".upload-files__file").length) {
						$(".upload-files").removeClass("_error");
						$(".step-3-form__submit").attr("disabled", "disabled");
						$.ajax({
							url: $(form).attr("action"),
							data: $(form).serialize(),
							method: "POST",
							headers: {
								"X-CSRF-TOKEN": $(
									'meta[name="csrf-token"]'
								).attr("content"),
							},
							context: document.body,
							success: function () {
								alert("Форма отправленна успешно");
								$(".step-3-form__submit").removeAttr(
									"disabled"
								);
							},
							error: function () {
								alert("Ошибка");
								$(".step-3-form__submit").removeAttr(
									"disabled"
								);
							},
						});
					} else {
						$(".upload-files").addClass("_error");
					}
				}
			},
		});
		var maxFileSize = 2 * 1024 * 1024;
		$(".upload-files__input-file").on("change", function () {
			var files = this.files;
			$(".upload-files").removeClass("_error");
			for (var i = 0; i < files.length; i++) {
				var file = files[i];
				$(" .upload-files__msg").text("");
				if (!file.type.match(/image\/(jpeg|jpg|png|gif)/)) {
					$(" .upload-files__msg").text(
						"Фотография должна быть в формате jpg, png или gif"
					);
					continue;
				}

				if (file.size > maxFileSize) {
					$(" .upload-files__msg").text(
						"Размер фотографии не должен превышать 2 Мб"
					);
					continue;
				}

				preview(files[i]);
			}

			this.value = "";
		});
		$(document).on("click", ".upload-files__file-delete", function () {
			$(this).closest(".upload-files__file").remove();
		});
		// Создание превью
		function preview(file) {
			var reader = new FileReader();
			reader.addEventListener("load", function (event) {
				var img = document.createElement("img");

				var itemPreview =
					'<div class="upload-files__files"><div class="upload-files__file"><textarea class="upload-files__file-input" name="file[]">' +
					event.target.result +
					'</textarea><div class="upload-files__file-photo" style="background-image:url(' +
					event.target.result +
					')"></div><div class="upload-files__file-name">' +
					file.name +
					'</div><div class="upload-files__file-delete"> </div></div></div>';

				$(".upload-files__files").append(itemPreview);

				queue[file.name] = file;
			});
			reader.readAsDataURL(file);
		}
	}
});
