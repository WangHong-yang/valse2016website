if ($(window).width()<1000) {
    $(".white").removeClass('forceHeight120');
    $(".nav").removeClass('ab2float');
    $(".nav ul li").hover(function (e) {
        // Setup
        var posX = $(this).offset().left,
            posY = $(this).offset().top,
            buttonWidth = $(this).width(),
            buttonHeight = $(this).height();


        // make sure we cannot click the slider
        if ($(this).hasClass('slider')) {
            return;
        }

        /* Add the slider movement */

        // what tab was pressed
        var whatTab = $(this).index();

        // Work out how far the slider needs to go
        var howFar = buttonWidth * whatTab;

        $("#slider").css({
            left: howFar + "px"
        });



        /* Add the ripple */

        // Remove olds ones
        $(".ripple").remove();


        // Add the element
        $(this).prepend("<span class='ripple'></span>");

        // Make it round!
        if (buttonWidth >= buttonHeight) {
            buttonHeight = buttonWidth;
        } else {
            buttonWidth = buttonHeight;
        }

        // Get the center of the element
        var x = e.pageX - posX - buttonWidth / 2;
        var y = e.pageY - posY - buttonHeight / 2;


        $('.nav').removeClass('scolled');


        // Add the ripples CSS and start the animation
        $(".ripple").css({
            width: buttonWidth,
            height: buttonHeight,
            top: y + 'px',
            left: x + 'px'
        }).addClass("rippleEffect");
    });
}

$(document).ready(function(){
    // if($(document).scrollTop() != 0){
    //     $('.nav').addClass('scolled');
    // }
    // if($(document).scrollTop() == 0){
    //     $('.nav').removeClass('scolled');
    // }


    var wh=$(window).height();
    $(window).scroll(function(){
        var s=$(window).scrollTop();
        if(s>100 && ($(window).width()>1000)){
            $('.nav').addClass('scolled');
        } else {
            $('.nav').removeClass('scolled');
        }
        if(s>100) {
            $('.nav').removeClass('ab2float');
        } else {
            $('.nav').addClass('ab2float');
        }
    });




    var tag = 0;
    $('.phoneNavBtn').click(function() {
        if (tag == 0) {
            if ($(window).width()<1000) {

                $(".nav>ul>a>li").css('height',($(window).height()-60)/10-3+'px');
                $(".nav>ul>a>li").css('line-height',($(window).height()-60)/10-3+'px');
            }
            $('.nav').css('display','block');
            $('.phoneNavBtn').css('background-position','0 100%');
            tag = 1;
        } else {
            $('.nav').css('display','none');
            $('.phoneNavBtn').css('background-position','0 0');
            tag = 0;
        }
    });

});

// This part is used for wide screen's control
if ($(window).width()>=1680) {

}










