$(function(){

    // slider
    var x = 0;
    setInterval (function(){
        if(x<2) {
            x++;
        }
        else {
            x=0;
        }
        var sliderPosition = x*(-1200)+"px";
        $('.sliderList').animate({left:sliderPosition},400);
    },3000);

    // quick-menu
    $(window).scroll(function(){
        var scrollTopNum = $(document).scrollTop()+15;
        if(scrollTopNum<=150){
            scrollTopNum=150;
    }
        $("#quick").stop().animate({top:scrollTopNum},700);
    });
    
});