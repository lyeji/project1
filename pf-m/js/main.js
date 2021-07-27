// menu
$(function(){
    var menu = $('.menuTop>ul>li');
    var wrap = $('#center>div');
    menu.click(function(event){
        event.preventDefault();
        var tg = $(this);
        var i = tg.index();
        var section = wrap.eq(i);
        var top = section.offset().top;
        $('html, body').stop().animate({scrollTop:top});
    });
});

// quick
$(function(){
    var menu = $('#quick>ul>li');
    var wrap = $('#center>div');
    menu.click(function(event){
        event.preventDefault();
        var tg = $(this);
        var i = tg.index();
        var section = wrap.eq(i);
        var top = section.offset().top;
        $('html, body').stop().animate({scrollTop:top});
    });
});