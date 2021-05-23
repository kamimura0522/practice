
  let a=2;

  $(function () {

    $(document).on('click','.morebtn',function () {
    let b="sample"+a+".html";
		//ページ遷移を止める
		// e.preventDefault();
      a++;
      console.log(b);
      $.ajax({
        type:"GET",
        url: b,
        cache:false,
        dataType: "html",
        success: function (data) {
          $(".add").css("display","none");


          $(".add").html(data).fadeIn(1000);
          $(".add").removeClass("add");
          $(this).after(" <section class='add'> fadfa</section>");


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
