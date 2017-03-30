/**
 * Created by dsouzaedison on 7/31/2016.
 */
$(function () {
    
    var isOpen=false;

        $(document).on("click",".searchDiv i",function (){
            $(this).parent().addClass("slide");
            isOpen=!isOpen;

            $(".searchDiv input").focus();
        });

    $(document).on("blur",".searchDiv input",function (){
            $(this).parent().removeClass("slide");
            isOpen=!isOpen;
        $(".searchDiv input").focus();
        });



    var i = 1;
    setInterval(function () {
        if (i == 4) {
            $('.slider-div').animate({marginLeft: "+=300vw"}, 500);
            i = 0;
        }
        else
            $('.slider-div').animate({marginLeft: "-=100vw"}, 500);
        i++;
    }, 5000);

    $('#Home').click(function () {
        i=1;
    });

    $(".navbar-brand").hide();
    $(window).scroll(function () {
        if ($(window).scrollTop() > 150) {
            $(".navbar").css({'position': 'fixed', 'boxShadow': '0px 2px 0.8em #555'});
            $(".navbar-brand").show();
        }
        else if ($(window).scrollTop() < 90) {
            $(".navbar").css({'position': 'relative', 'boxShadow': '0px 0px 0px #555'});
            $(".navbar-brand").hide();
        }
    });

    $('li').click(function () {
        $('.navbar-collapse').removeClass('in');
    });

    //PARALLAX
    if ($(window).outerWidth() > 768)
        $(window).on('scroll', function () {
            $('.s-image').css('marginTop', ($(window).scrollTop() * -.05));
        });


});