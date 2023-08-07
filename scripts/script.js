$(function () {
    //HEADER
    $(window).scroll(function () {
        if($(this).scrollTop() > 200)
        {
            if (!$('.menu').hasClass('fixed'))
            {
                $('.menu').stop().addClass('fixed').css('top', '-200px').animate(
                    {
                        'top': '0px'
                    }, 500);
                $('.toggle-menu').attr('checked', false);
            }
        }
        else
        {
            $('.menu').removeClass('fixed');
        }

        if($(this).scrollTop() > 200)
        {
            if (!$('nav').hasClass('fixed-menu'))
            {
                $('nav').stop().addClass('fixed-menu').css('top', '-200px').animate(
                    {
                        'top': '0px'
                    }, 500);
                $('.toggle-menu').attr('checked', false);
            }
        }

        else
        {
            $('nav').removeClass('fixed-menu');
        }
    });


});