$(function () {
    if ($('.contact-page').length) {
        let ind
        $('.contact-data-swiper .swiper-slide').each(function (i) {
            $(this).attr('data-indx',i)
        });
        const sliderContact = new Swiper('.contact-data-swiper ', {
            allowTouchMove: 'false',
            loop:false,
        });
        $('#contact-country').change(function () {
            sliderContact.slideTo($('.swiper-slide[data-slide="' + $(this).val()+'"]').data('indx'))
        })
    }

    
    if ($('#contact-form').length) {
        let validContacnt = $('#contact-form').validate(
        {
            errorPlacement: function (error, element) {
            },
                submitHandler: function (form) {
                $('..contact-form__btn').attr('disabled','disabled')
                $.ajax({
                    url: $(form).attr('action'),
                    data: $(form).serialize(),
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    context: document.body,
                    success: function () {
                        alert('Форма отправленна успешно')
                        $('..contact-form__btn').removeAttr('disabled')
                    }, error: function () {
                        alert('Ошибка')
                        $('..contact-form__btn').removeAttr('disabled')
                    }
                });
            }
        })
    }

})
$(function () {
	if ($(".other-news-slider").length) {
		const OtherNewsSlider = new Swiper(".other-news-slider", {
			slidesPerView: 1,
			spaceBetween: 10,
			breakpoints: {
				700: {
					slidesPerView: 2,
				},
				1100: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
		});
	}
});


$(function () {
    let controller = new ScrollMagic.Controller();

    if ($('.front-top').length) {
        var scene = document.getElementById('front-top-bg');
        var parallaxInstance = new Parallax(scene);
        let slideLength = $('.front-top-slide').length;
        let slideNow = 1;
        $('.front-top-slide').each(function () {
            let now = slideNow>=10?slideNow:'0'+slideNow
            let length = slideLength>=10?slideLength:'0'+slideLength
            $(this).find('.front-top-slide__pagi-now').text(`${now}`)
            $(this).find('.front-top-slide__pagi-all').text(`/${length}`)
            slideNow++
        })
        const frontTopSlider = new Swiper('#front-top-slider', {
            loop: true,
             spaceBetween: 10,
            breakpoints: {
                992: {
                    spaceBetween: 0,
                }
            },
             pagination: {
                el: $('.front-top__slider-pagination')[0],
                type: 'bullets',
            },
            navigation: {
                nextEl: $('.front-top__slider-nav-next')[0],
                prevEl: $('.front-top__slider-nav-prev')[0],
            },
        });
    }

    if ($('.front-m100 ').length) {
         	let m100cover = new ScrollMagic.Scene({triggerElement: "#front-m100", triggerHook:0.5, duration: 300})
                //   .setPin("#front-m100-pin")
                  .setTween("#front-m100-mask", { left: "50%", width: '100%' }) 
                //   .addIndicators({name: "2 (duration: 300)"}) 
					.addTo(controller);
         	let m100bg = new ScrollMagic.Scene({triggerElement: "#front-m100", offset:"200",triggerHook:0.5, duration: 100})
					.setTween("#front-m100-cover", {opacity:1}) 
					// .addIndicators({name: "2 (duration: 300)"}) 
					.addTo(controller);
    }
    if ($('.front-geo ').length) {
         	let m200cover = new ScrollMagic.Scene({triggerElement: "#front-geo", triggerHook:0.5, duration: 300})
                //   .setPin("#front-geo-pin")
					.setTween("#front-m200-mask", {left: "50%",  width:'100%'}) 
					.addTo(controller);
         	let m200bg = new ScrollMagic.Scene({triggerElement: "#front-geo", offset:"400",triggerHook:0.5, duration: 100})
					.setTween("#front-m200-cover", {opacity:1})
					// .addIndicators({name: "2 (duration: 300)"}) 
					.addTo(controller);
    }
    if ($('.front-method').length) {
        $('.front-method').each(function () {
            if (!$(this).find('.front-method__img').length) {
                $(this).addClass('_no-img')
            }
        })
    }
    if ($('.front-sertificates-slider ').length) {
         const frontSertificateslider = new Swiper('.front-sertificates-slider', {
            slidesPerView:1.3,
             spaceBetween: 10,
             breakpoints: {
                500: {
                    slidesPerView:2,
                },
                750: {
                    slidesPerView:3,
                },
                1100: {
                    slidesPerView:4
                },
            },
        });
    }
    if ($('.front-news-slider').length) {
         const frontNewsSlider = new Swiper('.front-news-slider', {

            // navigation: {
            //     nextEl: $('.front-top__slider-nav-next')[0],
            //     prevEl: $('.front-top__slider-nav-prev')[0],
            //  },
             slidesPerView: 1,
            spaceBetween: 10,
            breakpoints: {
                700: {
                    slidesPerView:2,
                },
                1100: {
                    slidesPerView:3,
                    spaceBetween: 30,
                },
            },
        });
    }
    if ($('.front-reviews-slider').length) {
         const frontNewsSlider = new Swiper('.front-reviews-slider', {
             slidesPerView:1.3,
             spaceBetween: 10,
             breakpoints: {
                600: {
                    slidesPerView:2,
                },

                992: {
                    slidesPerView:3,
                },

            },

        });
    }
    if ($('.front-cooperation-slider').length) {
        const frontСooperationSlider = new Swiper('.front-cooperation-slider', {
            slidesPerView: 3,
            spaceBetween: 0,
            breakpoints: {
                550: {
                slidesPerView: 4,
                },
                700: {
                slidesPerView: 4,
                },
                992: {
                slidesPerView: 5,
                }
            }
        })
        $('.front-cooperation__filter').click(function () {
            let filter = $(this).data('filter');
            $('.front-cooperation__filter').removeClass('_active');
            $(this).addClass('_active')
            $('.front-cooperation-slider .swiper-slide').each(function () {
                $(this).removeAttr('style');
                if ($(this).data('category') == filter) {
                    $(this).css('display', 'none');
                }
            });
        })
        $('.front-cooperation__filter').first().trigger('click')
    }
    if ($('.front-algorithm').length) {
        $('.front-algorithm').first().addClass('_active')
        $('.front-algorithm__left').click(function () {
            $('.front-algorithm').removeClass('_active')
            $(this).closest('.front-algorithm').addClass('_active')
        })
        function algoritmSize() {
            let height=0;
            let width = $('.front-algorithm._active .front-algorithm__table-wrap').outerWidth();
            $('.front-algorithm__table-wrap table').removeAttr('style')
            $('.front-algorithm__table-wrap table').css('width', width);
            $('.front-algorithm__table-wrap table').each(function () {
                if (height <= $(this).height()) {
                    height = $(this).height();
                }
            })
           $('.front-algorithm__table-wrap table').css('min-height', height);
           $('.front-algorithm__table-wrap table').css('min-width', width);
            
        }
        algoritmSize()
        setTimeout(function () {
            algoritmSize()
        },500)
        $(window).on('resize', function(){
            algoritmSize()
        });
    }
})
$(function () {
	if ($(".blog-page").length) {
		const BlogTypeSlider = new Swiper(".blog-type-slider", {
			allowTouchMove: "false",
			loop: false,
			autoHeight: true,
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
			$(".aticle-preview").removeClass("_hidden");
			$(".aticle-month-group").removeClass("_hidden");
			$(".news-preview").removeClass("_hidden");
			if (filter != "All") {
				$(".aticle-month-group").each(function () {
					let vLenght = 0;
					$(this)
						.find(".aticle-preview")
						.each(function () {
							if ($(this).data("filter") == filter) {
								vLenght++;
							} else {
								$(this).addClass("_hidden");
							}
						});
					if (vLenght == 0) {
						$(this).addClass("_hidden");
					} else {
						$(this).removeClass("_hidden");
					}
				});
				$(".news-preview").each(function () {
					if ($(this).data("filter") != filter) {
						$(this).addClass("_hidden");
					}
				});
			}
		});
		$(".blog-page__filter._active").trigger("click");
		$(".blog-page__head-filter._active").trigger("click");
	}
});


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

$(function () {
    var elements = $('.sticky');
    Stickyfill.add(elements);
   Stickyfill.forceSticky()
})

$(function() {
    $('.header__mini').find('.header__menu-row ').html($('.header__full').find('.header__menu-row ').html());
  $(window).scroll(function () {
		if (window.scrollY > 50) {
			$('.header').addClass('_not-top')
		} else {
			$('.header').removeClass('_not-top')
		}
  });
	    const mediaQuery = window.matchMedia('(max-width: 992px)')
	$('.header__mob-toogle').click(function () {
		$('.header').toggleClass('_menu-open')
	})
    $('._is-dropdown .header__menu-link').click(function(e){
        if (mediaQuery.matches) {
            e.preventDefault();
            $(this).closest('.header__menu-item').toggleClass('_open-dropdown')
        }
    })
});
$(function () {
    $('._mask-phone').each(function () {
        Inputmask("+7 (999) 999-99-99").mask(this);
    })
})

$(function () {
    $('.select2').each(function () {
        $(this).select2({
            minimumResultsForSearch: -1,
            placeholder: $(this).data('placeholder'),
        })
    })
})
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
var width = window.innerWidth;
window.addEventListener('resize', () => {
    if(width != window.innerWidth ){
        var vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        width = window.innerWidth;
    }
});

