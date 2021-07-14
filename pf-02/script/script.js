$(function(){

    // menu
        $(".ac-menu>ul>li").hover(
        function(){
            $(this).find(".submenu").stop().slideDown(500);
        },
        function(){
            $(this).find(".submenu").stop().slideUp(500);
        });
        
            
});