$(document).ready(function(){

  // Menu Slide jQuery
  $(".menu .sub").hide();
  $(".menu .main").mouseover(function(){
    $(this).find(".sub").stop().slideDown(300);
  }).mouseout(function(){
    $(this).find(".sub").stop().slideUp(300);
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
    autoplay : false,
    autoplaySpeed : 2000,
    pauseOnHover : true,
    vertical : false,
    prevArrow : "<span class='material-symbols-outlined slidebtn slick-prev'>chevron_left</span>",
    nextArrow : "<span class='material-symbols-outlined slidebtn slick-next'>chevron_right</span>",
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
    titleOffsetFiv = titleOffsetFiv - 1000;
    if (TOP > titleOffsetFiv) {
      $(".membership .choice").addClass("on");
    }

    let titleOffsetSix = $("footer .wrap").offset().top;
    titleOffsetSix = titleOffsetSix - 600;
    if (TOP > titleOffsetSix) {
      $("footer .wrap").addClass("on");
    }

    // #TO TOP
    if ($(this).scrollTop() > 250) {
      $('#totop').fadeIn();
    } else {
      $('#totop').fadeOut();
    }
    $("#totop").click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 400);
      return false;
    });
  });

  // 반응형
  // Hamburger
  $(".hamburger").click(function(){
    $(this).toggleClass("on")
    $(".menu .wrap").toggleClass("on")
  });

});