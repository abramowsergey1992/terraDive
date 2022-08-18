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
					// animate color and top border in relation to scroll position
                  .setPin("#front-m100-pin")
					.setTween("#front-m100-mask", {left: "50%",  width:'100%'}) // the tween durtion can be omitted and defaults to 1
					// .addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
					.addTo(controller);
         	let m100bg = new ScrollMagic.Scene({triggerElement: "#front-m100", offset:"400",triggerHook:0.1, duration: 100})
					.setTween("#front-m100-cover", {opacity:1}) // the tween durtion can be omitted and defaults to 1
					.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
					.addTo(controller);
     }
})