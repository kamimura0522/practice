$(function(){
	let pagetop = $('.upper');
	$(window).scroll(function () {
		// console.log($(this).scrollTop());
		 if ($(this).scrollTop() > 100) {
				pagetop.fadeIn();
		 } else {
				pagetop.fadeOut();
		}
		 });
		 pagetop.click(function () {
			 $('body, html').animate({ scrollTop:0 }, 500);
			return false;
	 });
});
