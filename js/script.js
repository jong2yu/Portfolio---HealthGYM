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
  //   autoControls: false,
	// 	controls: false, 
	// 	pager: false,
  // });

});
