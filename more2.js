
  let a=2;

$(function () {

  $(document).on('click','.morebtn',function () {
  let b="sample"+a+".html";

    a++;
    // console.log(b);
    $.ajax({
      type:"GET",
      url: b,
      cache:false,
      dataType: "html",
      success: function (data) {
        $(".add").css("display","none");


        $(".add").html(data).fadeIn(1000);
        $(".add").removeClass("add");
        $(".sweets>section:last-of-type").after(" <section class='add'> </section>");


    // let b="sample"+a+".html";
    console.log(b);

      },
      error: function (data) {
        alert("これ以上記事はありません");
      },
    });

    $(this).css("display","none");
  });
});
