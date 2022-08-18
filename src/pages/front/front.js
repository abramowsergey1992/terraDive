$(function () {
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
})