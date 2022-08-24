$(document).ready(function(){

  // Menu Slide jQuery
  $(".menu .sub").hide();
  $(".menu .main").mouseover(function(){
    $(".menu .sub").stop().slideDown(300);
  }).mouseout(function(){
    $(".menu .sub").stop().slideUp(300);
  });

  // Slick Slider
  $('.slide').slick({
    slide: 'li',
    infinite : true,   
    slidesToShow : 1,
    slidesToScroll : 1,
    speed : 500,
    arrows : true,
    dots : true,
    autoplay : true,
    autoplaySpeed : 2000,
    pauseOnHover : true,
    vertical : false,
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
