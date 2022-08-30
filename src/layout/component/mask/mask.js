$(function () {
    $('._mask-phone').each(function () {
        Inputmask("+7 (999) 999-99-99").mask(this);
    })
})