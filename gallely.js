$(function () {
  // 画像入れ替え
  $(document).on("click",".gallely>div:nth-of-type(2)>img",function (e) {
    url = $(this).attr("src");
    // $("h2").css("color","red");
    $(this).parent().prev().children().css("display","none").fadeIn(1000).attr("src", url);
  });

  // // 画像クリック拡大表示
  // $('.gallely>div:first-of-type').click(function(e){
  //   $('.back').css({
  //     'width':$(window).width(),
  //     'height':$(document).height()

  //   }).show();

  //   $("body").css({
  //     'position':'absolute',
  //     'left':Math.floor(($(window).width() - $('#img1Big').width()) / 2) + 'px',
  //     'top':$(window).scrollTop() + 50 + 'px'
  //   }).fadeIn();
  // });

  // //拡大表示クリック
  // $('#img1Big, #back').click(function(){
  //   $('#img1Big').fadeOut('slow', function(){
  //     $('#back').hide();
  //   });
  // });
});
