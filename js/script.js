$(document).ready(function(){

  // Menu Slide jQuery
  $(".menu .sub").hide();
  $(".menu .main").mouseover(function(){
    $(".menu .sub").stop().slideDown(300);
  }).mouseout(function(){
    $(".menu .sub").stop().slideUp(300);
  });

  // $(".slide").bxSlider({
  //   mode:'horizontal',
  //   auto: true,
  //   pause: 1000,
  //   autoControls: false,  // 시작, 정지버튼 노출 여부 
	// 	controls: false,      // prev/next 버튼 노출 여부 
	// 	pager: false,
  // });

  // Slick Slider
  $('.slide').slick({
    slide: 'li',        //슬라이드 되어야 할 태그
    infinite : true,     //무한 반복 옵션     
    slidesToShow : 1,        // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 1,        //스크롤 한번에 움직일 컨텐츠 개수
    speed : 500,     // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows : true,         // 옆으로 이동하는 화살표 표시 여부
    dots : true,         // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay : true,            // 자동 스크롤 사용 여부
    autoplaySpeed : 2000,         // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover : true,        // 슬라이드 이동    시 마우스 호버하면 슬라이더 멈추게 설정
    vertical : false,        // 세로 방향 슬라이드 옵션
    prevArrow : "<span class='slidebtn slick-prev material-icons'>navigate_before</span>",
    nextArrow : "<span class='slidebtn slick-next material-icons'>navigate_next</span>",
    draggable : true
  });

  // Scroll Animation
  $(window).scroll(function(){  

    let TOP=$(window).scrollTop();
    let titleOffset = $(".icons ul li img").offset().top;
    titleOffset = titleOffset - 800;
    if (TOP > titleOffset) {
      $(".icons ul li img").addClass("on");
    }

    let titleOffsetTwo = $(".gallery ul img").offset().top;
    titleOffsetTwo = titleOffsetTwo - 1100;
    if (TOP > titleOffsetTwo) {
      $(".gallery ul img, .gallery ul span").addClass("on");
    }

    let titleOffsetThr = $(".market ul img").offset().top;
    titleOffsetThr = titleOffsetThr - 800;
    if (TOP > titleOffsetThr) {
      $(".market ul img").addClass("on");
    }

    let titleOffsetFor = $(".together h4").offset().top;
    titleOffsetFor = titleOffsetFor - 800;
    if (TOP > titleOffsetFor) {
      $(".together h4").addClass("on");
    }

    let titleOffsetFiv = $(".membership .choice").offset().top;
    titleOffsetFiv = titleOffsetFiv - 200;
    if (TOP > titleOffsetFiv) {
      $(".membership .choice").addClass("on");
    }

    let titleOffsetSix = $("footer .wrap").offset().top;
    titleOffsetSix = titleOffsetSix - 800;
    if (TOP > titleOffsetSix) {
      $("footer .wrap").addClass("on");
    }

  })

});
