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

    // Scroll_move
    $(".header_main>ul>li:nth-child(1)").on("click",function(){
        var about = $("#skill").position();
        $('html,body').animate({
            scrollTop:about.top - 70
        },400);
    });
    $(".header_main>ul>li:nth-child(2)").on("click",function(){
        var about = $("#portfolio").position();
        $('html,body').animate({
            scrollTop:about.top - 80
        },400);
    });
    $(".header_main>ul>li:nth-child(3)").on("click",function(){
        var about = $("#etc").position();
        $('html,body').animate({
            scrollTop:about.top - 40
        },400);
    });
   
    // Scroll_auto_hover
    $(window).scroll(function(){
        var height = $(document).scrollTop();
        console.log(height);

        if (height>= 560 && height <= 1144){
            $(".header_main>ul>li").removeClass('on on2');
            $(".header_main>ul>li:nth-child(1)").addClass('on on2');
        } else if (height>= 1145 && height <= 4549){
            $(".header_main>ul>li").removeClass('on on2');
            $(".header_main>ul>li:nth-child(2)").addClass('on on2');
        } else if (height>= 4550){
            $(".header_main>ul>li").removeClass('on on2');
            $(".header_main>ul>li:nth-child(3)").addClass('on on2');
        } else {
            $(".header_main>ul>li").removeClass('on on2');
        }
    });
});

// Popup

// ==============popup1
$(function(){
    $("#etc>.etc_main>.etc_1").on("click",function(e){
        e.preventDefault();
        $("#popup>.popup_main>.bg").fadeIn();
        $("#popup>.popup_main>#popup1").fadeIn();
        $("#popup>.popup_main>#popup1>button").fadeIn();
    });
    // 버튼 활성화
    $("#popup>.popup_main>#popup1").mouseenter(function(){
        $("#popup>.popup_main>#popup1>button").stop().fadeIn();
    });
    $("#popup>.popup_main>#popup1").mouseleave(function(){
        $("#popup>.popup_main>#popup1>button").stop().fadeOut();
    });

    // popup 사라짐
    $("#popup>.popup_main>.bg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup1").fadeOut();
        $("#popup>.popup_main>button").fadeOut();
    });
    $("#popup>.popup_main>#popup1>.popupList>.popImg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup1").fadeOut();
        $("#popup>.popup_main>#popup1>button").fadeOut();
    });

    var max = 0;
    var current = 0;
    var container; // 선언
    function init(){
        container = $("#popup>.popup_main>#popup1>.popupList");
        max = container.children().length;
        container.addClass("margin-left","-800px");
        container.prepend(container.children()[max - 1]);
        events();
    };
    function events(){
        $("#popup>.popup_main>#popup1>button#prev").on("click",prev);
        $("#popup>.popup_main>#popup1>button#next").on("click",next);
    };
    function prev(e){
        current--;
        if(current<0) current = max - 1;
        animate("prev");
    };
    function next(e){
        current++;
        if(current > max - 1) current = 0;
        animate("next");
    };
})