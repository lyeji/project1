$(function(){

    // menu
    $("nav>ul>li").hover
    (function(){
        $(this).find(".sub").stop().show();
    }, function(){
        $(this).find(".sub").stop().hide();
    });

    // slider
    var x = 0;
    setInterval (function(){
        if(x<2) {
            x++;
        }
        else {
            x=0;
        }
    var sliderPosition = x*(-800)+"px";
    $('.sliderList').animate({left:sliderPosition},400);
    },3000);

    // Popup
    $('.layer').on('click',function(e){
        e.preventDefault();
        $('#popup').fadeIn();
    });
    
    $('.close').on('click',function(e){
        $('#popup').fadeOut();
    });
    
});