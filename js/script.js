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

});
