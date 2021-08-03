// swipe
$(function(){
window.slider = $('.slider_inner').Swipe({
    startSlide:0,  // 초기 첫 배너 노출
    auto:5000,   
    continuous:true,  // 배너 반복 롤링
    stopPropagation:true,  // 하위 요소에 이벤트 전달 차단
    disableScroll:true,    // 슬라이드 배너에 스크롤바 생성 차단
    callback:function(index, element){},  // 이벤트 완료시 콜백함수 실행함
    transitionEnd:function(index, element){}
}).data('Swipe');

// 버튼실행
$(".prev").on("click",function(){ // 이전 버튼 클릭시
    slider.prev();  // 이전배너로 이동
});
$(".next").on("click",function(){  // 다음 버튼 클릭시
    slider.next();  // 다음배너로 이동
});
});