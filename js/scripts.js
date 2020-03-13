$(function() {
    // plus - minus 
    if (typeof counter == 'undefined') {
        counter = 0;
    };
    $('.plus').click(function() {
        counter++;
        $(this).siblings('input').val(counter);
        return counter;

    });
    $('.minus').click(function() {
        counter--;
        $(this).siblings('input').val(counter);
        return counter;
    });
    //End  Plus-minus

    //Start scroll change& add class
    $(window).scroll(function() {

        if ($(window).scrollTop() > 400) {
            $('.fixed-colorBackground').addClass('cb-fixed');
            $('.btn--up').addClass('show');
        } else {
            $('.fixed-colorBackground').removeClass('cb-fixed');
            $('.btn--up').removeClass('show');
        }
    });

    //Start scroll top
    $('.btn--up').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    //Start scroll to section Id
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