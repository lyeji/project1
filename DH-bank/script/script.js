$(function(){
    // menu
    $(function () {
        $('nav>ul>li').mouseenter(function () {
            $('.submenu').stop().slideDown(200);
        });
        $('nav>ul>li').mouseleave(function () {
            $('.submenu').stop().slideUp(200); 
        });
    });



    // slider
    var x =0;
    setInterval (function(){
        if(x<2){
            x++;
        }
        else{
            x=0;
        }
    var sliderPosition = x*(-1200)+"px";
    $('.sliderList').animate({left:sliderPosition},400);
    },3000);


    // popup
    $('.layerPopup').on('click',function(e){
        e.preventDefault();
        $('#popup').fadeIn();
    });

    $('.close').on('click',function(e){
        $('#popup').fadeOut();
    });



});