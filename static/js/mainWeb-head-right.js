//右边栏+头部JS

$(function(){
//右边JS
//	右上边购物车JS
	$(".allrightshow_top_buycar").mouseenter(function(){
		$(this).find(".allrightshow_top_buycar_s1").css("background-position", "-38px -1006px, 0px 0px");
		$(this).first().css("background","#FF5000");
		$(this).find("i").css({"background-color":"white","color":"#FF5000"});
		$(this).find(".allrightshow_top_buycar_thing").stop().animate({width:"240px",left:"-240px"},200);
	})
	$(".allrightshow_top_buycar").mouseleave(function(){
		$(this).find(".allrightshow_top_buycar_s1").css("background-position", "0 -756px, 0px 0px");
		$(this).first().css("background"," #989ba3");
		$(this).find("i").css({"background-color":"#FF5000","color":"white "});
		$(this).find(".allrightshow_top_buycar_thing").stop().animate({width:"0px",left:"0px"},200);
	})
	
//	右边  上边小图标JS
//1
	$(".top_a11").mouseenter(function(){
		$(this).css("background-position","-38px -786px");
		$(this).siblings().stop().animate({left:"-77px"},200);
		
	})
	$(".top_a11").mouseout(function(){
		$(this).siblings().stop().animate({left:"77px"},200);
		$(this).css("background-position","0 -888px");
	})
	
//	2
	$(".top_a12").mouseenter(function(){
		$(this).css("background-position","-38px -831px");
		$(this).siblings().stop().animate({left:"-77px"},200);
		
	})
	$(".top_a12").mouseout(function(){
		$(this).siblings().stop().animate({left:"77px"},200);
		$(this).css("background-position","0 -933px");
	})
//	3
	$(".top_a13").mouseenter(function(){
		$(this).css("background-position","-38px -876px");
		$(this).siblings().stop().animate({left:"-77px"},200);
		
	})
	$(".top_a13").mouseout(function(){
		$(this).siblings().stop().animate({left:"77px"},200);
		$(this).css("background-position","0 -979px");
	})
	

//	右边    下边JS
//	4
	$(".top_aa").mouseenter(function(){
		$(".no_show1").stop().animate({left:"-139px",width:"139px"},200);
		$(this).css("background-position","-38px -920px");
	})
	$(".top_aa").mouseout(function(){
		$(".no_show1").stop().animate({left:"0px",width:"0px"},200);
		$(this).css("background-position","0 -1084px");
	});
	
//	5
	$(".top_a15").mouseenter(function(){
		$(this).css("background-position","-38px -965px");
		$(this).siblings().stop().animate({left:"-77px",width:"77px"},200);
	})
	$(".top_a15").mouseout(function(){
		$(this).css("background-position","0 -1129px");
		$(this).siblings().stop().animate({left:"0px",width:"0px"},200);
	});
	
//	返回顶部
	$(".top_a15").click(function(){
		$("html,body").animate({scrollTop:"0px"},500);
	})
	
	
	
	
	

//	头部JS右边
// 1购物车栏JS
	$(".head_top_right_a1").mouseenter(function(){
		$(".head_top_right_go").css("display","block");
		$(".head_top_right_a1").css({background:"white",borderColor:"#E7E7E7"});
	})
	$(".head_top_right_a1").mouseleave(function(){
		$(".head_top_right_go").css("display","none");
		$(".head_top_right_a1").css({background:"#fafafa",borderColor:"#fafafa"});
	})

//2
	$(".head_top_right_d2").mouseenter(function(){
		$("#head_top_right_list1").css("display",'block');
	})
	$(".head_top_right_d2").mouseleave(function(){
		$("#head_top_right_list1").css("display",'none');
	})
	
//3
	$(".head_top_right_d3").mouseenter(function(){
		$(".head_top_right_list2").css("display",'block');
	})
	$(".head_top_right_d3").mouseleave(function(){
		$(".head_top_right_list2").css("display",'none');
	})
	
	
//导航
	$(".head_nav_click a").mouseenter(function(){
		$(this).css("background-color","#f9e6e6");
	})
	$(".head_nav_click a").mouseleave(function(){
		$(this).css("background-color","white");
	})
	
})


