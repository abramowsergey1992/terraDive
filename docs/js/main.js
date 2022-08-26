
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
            navigation: {
                nextEl: $('.front-top__slider-nav-next')[0],
                prevEl: $('.front-top__slider-nav-prev')[0],
            },
        });
    }

    if ($('.front-m100 ').length) {
         	let m100cover = new ScrollMagic.Scene({triggerElement: "#front-m100", triggerHook:0.1, duration: 500})
                  .setPin("#front-m100-pin")
					.setTween("#front-m100-mask", {left: "50%",  width:'100%'}) 
					.addTo(controller);
         	let m100bg = new ScrollMagic.Scene({triggerElement: "#front-m100", offset:"400",triggerHook:0.1, duration: 100})
					.setTween("#front-m100-cover", {opacity:1}) 
					.addIndicators({name: "2 (duration: 300)"}) 
					.addTo(controller);
    }
    if ($('.front-geo ').length) {
         	let m200cover = new ScrollMagic.Scene({triggerElement: "#front-geo", triggerHook:0.1, duration: 500})
                  .setPin("#front-geo-pin")
					.setTween("#front-m200-mask", {left: "50%",  width:'100%'}) 
					.addTo(controller);
         	let m200bg = new ScrollMagic.Scene({triggerElement: "#front-geo", offset:"400",triggerHook:0.1, duration: 100})
					.setTween("#front-m200-cover", {opacity:1})
					.addIndicators({name: "2 (duration: 300)"}) 
					.addTo(controller);
    }
    if ($('.front-sertificates-slider ').length) {
         const frontSertificateslider = new Swiper('.front-sertificates-slider', {
            slidesPerView:4,
            spaceBetween: 10,
        });
    }
    if ($('.front-news-slider').length) {
         const frontNewsSlider = new Swiper('.front-news-slider', {
            slidesPerView:3,
            spaceBetween: 13,
            navigation: {
                nextEl: $('.front-top__slider-nav-next')[0],
                prevEl: $('.front-top__slider-nav-prev')[0],
            },
        });
    }
    if ($('.front-reviews-slider').length) {
         const frontNewsSlider = new Swiper('.front-reviews-slider', {
            slidesPerView:3,
            spaceBetween: 30,

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


$(function() {
    $('.header__mini').find('.header__menu-row ').html($('.header__full').find('.header__menu-row ').html());
  $(window).scroll(function () {
		if (window.scrollY > 50) {
			$('.header').addClass('_not-top')
		} else {
			$('.header').removeClass('_not-top')
		}
	});
});