$(function(){
    //btn-top
    //클릭시 최상단으로 올라가게 하기
    $(".btn_top").on("click",function(){
        $("html, body").animate({scrollTop : 0},400);
    });
    // 500픽셀 도달시 나타나게 하기
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $(".btn_top").fadeIn();
        }else {
            $(".btn_top").fadeOut();
        }
    });
   
});