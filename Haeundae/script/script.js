$(function(){
  
        $(".sliderList").children("div:gt(0)").hide();
        var x = 0;
        
        setInterval(function(){
            var next = (x + 1)%3;
           
            $(".sliderList").find("div").eq(x).fadeOut();
            $(".sliderList").find("div").eq(next).fadeIn();
            x = next;
        },3000);
        
        
    });