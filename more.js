let a=2;

$(function () {

let b="sample"+a+".html";
  $(".morebtn").click(function () {
    $.ajax({
      type:"GET",
      url: b,
      cache:false,
      dataType: "html",
      success: function (data) {
        $(".add").css("display","none");
        $(".add").html(data).slideDown(1000);

      },
      error: function (data) {
        alert("error");
      },
    });
    a++;
    console.log(b);
    $(this).css("display","none");
  });
});
