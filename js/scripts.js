$(function() {
    //scroll change& add class
    $(window).scroll(function() {

        if ($(window).scrollTop() > 400) {
            $('.fixed-colorBackground').addClass('cb-fixed');
            $('.btn--up').addClass('show');
        } else {
            $('.fixed-colorBackground').removeClass('cb-fixed');
            $('.btn--up').removeClass('show');
        }
    });
    // scroll top

    $('.btn--up').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    // scroll to section
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(e) {
            var data_id = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(data_id).offset().top
            }, '600');
        });
    //
});