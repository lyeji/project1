// topMenu
window.onload = function(){
    // .onload : 윈도우가 브라우져로 읽혀질 때
    var seq = 0; 
    var nav = document.getElementById("gnb");
        nav.menu=new Array(); // 배열객체는 여러개의 데이터 저장 가능
        nav.current = null;  // 변수에 지정된 데이터 지우기      
        nav.menuseq = 0;

    var navLen = nav.childNodes.length;  // 데이터 갯수 반환
    var allA = nav.getElementsByTagName("li");   

    for(k=0; k < allA.length; k++){
        allA.item(k).onmouseover = allA.item(k).onfocus = function(){
            //.onfocus : 포커스가 위치할 경우 
            nav.isOver = true; 
        }
        // .is : 선택한 요소의 상태가 지정한 속성과 일치하면 true 그렇지 않으면, false로 반환한다!! 
        // .onblur : 포커스가 다른곳으로 옮겨질때 
        allA.item(k).onmouseout = allA.item(k).onblur = function(){
            // .onmouseout : 마우스를 떠났을때 
            nav.isOver = false; 
            // setTimeout : 일정한 간격으로 스크립트 실행문을 한번만 실행
            setTimeout(function(){
                if(nav.isOver == false){
                    if(nav.menu[seq]) 
                        nav.menu[seq].onmouseover(); // 마우스가 올라갈 경우 
                        else if(nav.current){
                            var menuImg = nav.current.childNodes.item(0);
                            // .replace("바꿀문자,새문자")
                            menuImg.src=menuImg.src.replace("_over.gif",".gif");
                            if (nav.current.submenu)
                                nav.current.submenu.style.display = "none"; // 가리기
                                nav.current = null;   
                        }
                }
            },500)

        }


    }

    for (i=0; i<navLen; i++){
        var navItem = nav.childNodes.item(i);
        if (navItem.tagName != "LI")
            continue; 
            /*  continue; 
             반복문에서만 사용 가능
             실행명령 조건식에서 조건검사 실행문을
             무시하고 조건검사 실행 */ 
        var navAnchor = navItem.getElementsByTagName("a").item(0);
            navAnchor.submenu = navItem.getElementsByTagName("ul").item(0);
            navAnchor.onmouseover = navAnchor.onfocus = function(){
                if(nav.current){
                    menuImg = nav.current.childNodes.item(0);
                    menuImg.src = menuImg.src.replace("_over.gif",".gif");
                    if (nav.current.submenu)
                    nav.current.submenu.style.display = "none";
                    nav.current = null;                     
                }
                if(nav.current != this) {
                    menuImg = this.childNodes.item(0);
                    menuImg.src = menuImg.src.replace(".gif","_over.gif");
                    if (this.submenu)
                    this.submenu.style.display = "block";
                    nav.current = this;
                }
                nav.isOver = true;
            };

            nav.menuseq++;
            nav.menu[nav.menuseq] = navAnchor;
    } 
    
	
    // sub page
     //  plus, minus
     var current = 1;
     var $window = $(window);
     var $body = $("tr, .smenu>ul>li");
     var $btnZoomIn = $(".button-zoomin");
     var $btnZoomOut = $(".button-zoomout");
     
     $btnZoomIn.on("click",function(){
         current += 0.1; zoom();
     });
     $btnZoomOut.on("click",function(){
         current += -0.1; zoom();
     });
 
   function zoom(){
       if (current > 1.5){
           alert('더이상 화면을 확대하실 수 없습니다.');
           return false;
       }
       if (current < 1.0){
           alert('더이상 화면을 축소하실 수 없습니다.');
           return false;
       }
       $body.css({
         zoom:current,
         '-moz-transform':'scale('+current+')'
       });
   }  
 
     // print (chrome + edge)
    function print_current_page()
    {
        window.print();
    }
     
    function GL_PrintPop(obj, cssType){
         var browser = navigator.userAgent.toLowerCase();
         if (-1 != browser.indexOf('chrome')){
             chrome_print(obj, cssType);
         }else {
             IE_print(obj, cssType);
         }   
 
    }
 
 
 
    // chrome
    function chrome_print(obj, cssType){
        var printHtml = $("."+obj).html();
        var print_window = window.open("", "PRINT", "width=740px, scrollbars=yes");
        print_window.document.open();
 
        if(cssType=="kr") {
            print_window.document.write("<link rel='stylesheet' href='/css/bbs.css' media='all' />")
        } 
        print_window.document.write("<body onload=\"window.print();window.close();\">")
        print_window.document.write("<style media='print'>@page{size:auto; margin:15mm;}</style>")
        print_window.document.write(printHtml);
        print_window.document.close();
     }
 
        
     // IE + edge
     function IE_print(obj, cssType){
         var printHtml = $("."+obj).html();
         var print_window = window.open("","PRINT","widrh=740px, scrollbars=yes");
             print_window.document.open();
             print_window.document.write("<!DOCTYPE html>");
         if(cssType == "kr"){
             print_window.document.write("<link rel='stylesheet' href='/css/bbs.css' media='all' />");
         }else { print_window.document.write("<link rel='stylesheet' href='/css/" + cssType + "'bbs.css' media='all' />")
     } 
     print_window.document.write("<style media='print'>@page{size:auto; margin:15mm;} </style>");
     print_window.write("<body><div>");
     print_window.write(printHtml);
     print_window.write("</div></body></html>");
     print_window.print();
     print_window.focus();
 
     }
 
     $('.button-print').on('click',function(){
         GL_PrintPop('contents','kr')
     });

    
	
};

$(function(){
    var $mainbanrSwipe=document.getElementById("sliderSwiper");
 // swipe영역 : swipe.js를 쓰려면 원래방식의 스크립트 문법으로 써줘야함 (이거 하나만)
    var $indicator=$("#sliderSwiper~.mainbanr-pagination>li>a");
    var nowIdx=Math.floor(Math.random()*6); 
    // 현재 보이는 슬라이드의 index번호 
    var oldIdx=nowIdx;
    var intervalID=null; // 현재의 값을 알 수 없다. 
    // null은, 변수에 지정된 데이터를 지우고자할때 사용 
    
    var noEventTime=0; // 이벤트가 없는 시간(초)을 채크하는 변수
    var $btnAuto=$("#sliderSwiper~.btn_auto") // 시작, 정지버튼
    $btnAuto.data("state","on"); 
    // 버튼의 내부데이터 설정 - on : 재생, off : 정지
     
 
 
 
 // 1단계 = 인디케이터 클릭 이벤트 설정 
 
 $indicator.on("click",function(evt){
    nowIdx=$indicator.index($(this));
    if(oldIdx != nowIdx){
       move(); // 슬라이드 애니메이트 (swipe) 함수 호출
    }
    // != : 다르다
    autoStateChange(); // 자동재생 상태변환 함수호출
    evt.preventDefault(); // 링크차단
 });
 
 // 2단계 = swipe.js 플러그인을 이용한 슬라이드 이동
 window.swipeArea=Swipe($mainbanrSwipe,{
    callback:function(idx){
       setIndicator(idx); // 인디케이터 활성화 함수 호출
    } // swipeArea 슬라이드 메소드가 실행 완료된 시점에 작동할 콜백함수 등록   
 });
 
 // 3단계 = 슬라이드 애니메이트(swipe)!!!!! 중요 
 function move(){
    swipeArea.slide(nowIdx,400);
    // 클릭시 슬라이딩 이동 속도 swipe.js 플러그인의 옵션 메서드인 .slide(슬라이드인덱스, 속도시간)를 활용하여 배너 이동
    setIndicator(nowIdx); // 인디케이터 활성화 함수 호출
    oldIdx=nowIdx;
 }
 
 // 4단계 = 인디케이터 활성화 표시 
 function setIndicator(idx){
    $indicator.eq(idx).parent().addClass("on").siblings().removeClass("on");
 }
 // 5단계 = 텍스트와 이미지 로드 
 $(window).on("load",function(){
    setIndicator(nowIdx); // 인디케이터 활성화 표시 함수 호출
    swipeArea.slide(nowIdx,400);
    autoPlay();
    timeCheck(); // 10초 간격의 시간체크 함수 호출
 
 });
 // 6단계 = 이전버튼설정
 $(".mainbanr-prev").on("click",function(evt){
    autoStateChange();
    prevIdx(); 
    move(); 
    autoStop(); 
    $btnAuto.data("state","on").trigger("click");
    // .trigger() : 강제로 특정 이벤트 발생
    evt.preventDefault();
 });
 
 // 7단계 = 다음버튼설정
 $(".mainbanr-next").on("click",function(evt){
    autoStateChange();
    nextIdx(); 
    move(); 
    autoStop(); 
    $btnAuto.data("state","on").trigger("click");
    // .trigger() : 강제로 특정 이벤트 발생
    evt.preventDefault();
 });
 
 // 8단계 = 이전 + 다음 인덱스번호 설정 
 
 // 이전 
 function prevIdx(){
    if(nowIdx<1){
       nowIdx=$indicator.size()-1;
    }else{
       nowIdx--;
    }
 }
 // 다음 
 function nextIdx(){
    if(nowIdx>=$indicator.size()-1){
       nowIdx=0;
    }else{
       nowIdx++;
    }
    return nowIdx;
 }
 
 // 9단계 =  자동재생
 function autoPlay(){
    intervalID=setInterval(function(){
       swipeArea.slide(nextIdx(),400)
    },3000);
 }
 // 10단계 = 재생정지 
 function autoStop(){
    clearInterval(intervalID);
    // clearInterval : setInterval 삭제
    $btnAuto.removeClass("pause").text("재생시작").data("state","off");
 }
 
 // 11단계 = 재생정지버튼에 클릭이벤트설정 
 $btnAuto.on("click",function(evt){
    var stateVal=null;
    if($(this).data("state")=="on"){
       $(this).removeClass("pause").text("재생시작");
       stateVal="off"; // 내부 데이터의 값을 off 한다
       autoStop(); // 자동재생, 정지 함수 호출
       noEventTime=0; // 이벤트 시간채크 변수 초기화
    }else{
       $(this).addClass("pause").text("일시정지");
       stateVal="on"; // 내부 데이터값 on으로 한다
       autoPlay(); // 자동재생 함수 호출
    }
    $(this).data("state",stateVal);
    evt.preventDefault();
 
    // == 같다 
 });
 
 // 12단계 = 4초 간격의 시간채크 
 function timeCheck(){
    setInterval(function(){
       noEventTime++;
       if(noEventTime>4&&$btnAuto.data("state")=="off"){
          $btnAuto.trigger("click");
       }
       // && : 그리고 (논리연산자)
    },1000);
 }
 
 
 // 13단계 = 자동재생 상태변환함수
 
 function autoStateChange(){
    noEventTime=0; // 이벤트 시간체크 변수 초기화
    autoStop(); // 자동재생 정지 함수 호출
 }
 
 });

/////////////////////////////////////////////roll

$(function(){
   var mySlider=$('.box').bxSlider({
       mode:'horizontal', 
       speed:300, 
       pager:false,
       moveSlides:1, 
       slideWidth:150, 
       minSlides:6, 
       maxSlides:6,
       slideMargin:0,
       auto:1000, 
       autoHover:false,
       controls:false 
   });
   // 이전, 다음버튼
   $('.prev_btn').on('click',function(){
       mySlider.goToPrevSlide(); 
       return false; 
   });
   $('.next_btn').on('click',function(){
       mySlider.goToNextSlide();
       return false; 
   });



});
 