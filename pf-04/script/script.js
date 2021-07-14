// 개별메뉴 -> 드림위버로 완료

$(function(){
   

 // 좌우슬라이딩
                        // setInterval : 일정 시간동안 반복하여 실행 
                        var x = 0;
                        setInterval(function(){
                            if(x<2){x++;}
                            else { x = 0; }
                            var sliderPosition = x*(-1200)+"px";
                                                // 0 * -1200 = 0
                                                // 1 * -1200 = -1200
                                                // 2 * -1200 = -
                            $(".sliderList").animate({left:sliderPosition},400);     
                              console.log(x);  
                        },3000); // 3초

// 레이어팝업 
// .on : 이벤트 등록 메서드 (제이쿼리 1.7부터 적용) 
    $(".layerPopup").on('click',function(e){
        e.preventDefault(); // 링크차단메서드
        $("#popup").fadeIn(); // 서서히 나타남
    });

    $(".close").on('click',function(e){               
        $("#popup").fadeOut(); // 서서히 사라짐
    });
});