$(function () {
    $('.select2').each(function () {
        $(this).select2({
            minimumResultsForSearch: -1,
            placeholder: $(this).data('placeholder'),
        })
    })
})