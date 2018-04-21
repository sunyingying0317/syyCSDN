$(function(){
	$(".example li").click(function(){
		var index = $(this).index;
		$(this).addClass("select").siblings().removeClass("select");
		$(".box").eq(index).show().siblings().hide();
	})
})