let wd=1024;
let cw =$(window).width();
count=1;
$(window).on(" resize",function(){
  if(cw<=wd &&count<=2){

count++;

  // console.log(cw);
  $("aside").animate({
    "marginTop":"200px"
  },1000);
}
});
// $(function () {
// if(wd<1024){
//   console.log(wd);
//   $("h2").css("color","red");
//   $("p").css("color","red");
// }

// });
