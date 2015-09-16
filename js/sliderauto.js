$(document).ready(function(){

    var btns = $("#slideshow > nav > span");
    var time = 6000;
    var onslide = 0;


    setInterval(changeSlide, time);

    function changeSlide() {
        onslide = onslide + 1;
        if(onslide==6) {
            onslide = 0;
            btns[onslide].click();
        } else {
            btns[onslide].click();
        }
    }



    $(window).scroll(function(){
        var s=$(window).scrollTop();
        // if(s>260){
        //     $('.sec1cover').addClass('sec1coveropacity');
        // } else {
        //     $('.sec1cover').removeClass('sec1coveropacity');
        // }

        $(".sec1cover").css("opacity",1-(s-100)/200<0.3?0.3:1-(s-100)/200);
        if (s<=1000){
            $(".pagefooter").css("display","none");
        } else {
            $(".pagefooter").css("display","block");
        }

        if (s>=160) {
            $("#title").css("display","none");
        } else {
            $("#title").css("display","block");
        }

    });


});













