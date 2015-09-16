
$(document).ready(function(){

    initAddMoving();
    setInterval("parascroll()",10);
    setInterval("addMoving()",10);
});


function parascroll() {
    var s=$(window).scrollTop();

    $('.underbg').css('margin-top',-s*0.5);
    $('.descrip').css('margin-top',-500+s*0.5); // 500 is the height of the poster
}


function initAddMoving() {
    var ppp = $('.sec>.secwraper>h2');

    var ss = $(window).scrollTop();
    if (ss > ppp[0].offsetTop) {
        //alert('aaa');
        $(ppp[0]).addClass("MMMMM");
    }
}

function addMoving() {
    var titleSet = $('.sec>.secwraper>h2');
    var s=$(window).scrollTop();
    for (var i=0; i<titleSet.length; i++) {
        if ((s+$(window).height()-50)>titleSet[i].offsetTop) {
            $(titleSet[i]).addClass("secMoved");
        } else {
            $(titleSet[i]).removeClass("secMoved");
        }
    }
}







