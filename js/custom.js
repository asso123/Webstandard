$('.tit .btn').click(function () {
  //$('.nav').css({display:"block"})
  //$('.nav').show();
  //$('.nav').slideDown();
  //$('.nav').toggle();
  //$('.nav').fadeToggle();
  $('.nav').slideToggle();
  $(this).toggleClass("on")
});

// banner


$('.ban').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
});

//갤러리
$('.gallary_img').slick({
  arrows: false,
});

$('.gallary_btn .play').click(function () {
  $('.gallary_img').slick('slickPlay');
})
$('.gallary_btn .pause').click(function () {
  $('.gallary_img').slick('slickPause');
})
$('.gallary_btn .prev').click(function () {
  $('.gallary_img').slick('slickPrev');
})
$('.gallary_btn .next').click(function () {
  $('.gallary_img').slick('slickNext');
})



// 텝메뉴
let tab_list = $('.tab_menu');

tab_list.find('ul ul').hide();
tab_list.find('li.active>ul').show();

$('.tab_menu>ul>li>a').click(function (e) {
  e.preventDefault();
  var $this = $(this);

  //.next()는 바로 밑 요소(바로 아래 동생)
  //.parent()보모요소
  //.sibilings()나를 제외한 형제들
  /*   $this.next().show();
    $this.parent('li').addClass("active");
    $this.parent('li').siblings().removeClass("active")
    $this.parent('li').siblings().find('ul').hide(); */


  $this.next().show().parent('li').addClass("active").siblings('li').removeClass("active").find('ul').hide();
});


// layer팝업 
$('.layer').click(function (e) {
  e.preventDefault();
  $('#layer').fadeIn();
  
});

$('#layer .close').click(function (e) {
  e.preventDefault();
  $('#layer').fadeOut();
  
});

// 윈도우팝업

$('.window').click(function (ev) {
  ev.preventDefault();
 window.open("popup.html", "chlid", "width=900,height=590",left=100,top=200);
})

// 라이트갤러리 
lightGallery(document.getElementById('lightgallery'), {
  plugins: [lgThumbnail],
});