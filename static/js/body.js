//主页第一屏左边 导航
$(function(){
	
	$(".body_one_left_ul_l1").mouseenter(function(){
		$(this).find(".show_navbox").show();
		$(this).find(".show_navbox").siblings().animate({marginLeft:"40px"},200);
	});
	$(".body_one_left_ul_l1").mouseleave(function(){
		$(this).find(".show_navbox").hide();
		$(this).find(".show_navbox").siblings().animate({marginLeft:"20px"},200);
	});
	
	$(".body_one_left_ul_l2").mouseenter(function(){
		$(this).find(".show_navbox").show();
		$(this).find(".show_navbox").siblings().animate({marginLeft:"40px"},200);
	});
	$(".body_one_left_ul_l2").mouseleave(function(){
		$(this).find(".show_navbox").hide();
		$(this).find(".show_navbox").siblings().animate({marginLeft:"20px"},200);
	});
	
	$(".body_one_left_ul_l3").mouseenter(function(){
		$(this).find(".show_navbox").show();
		$(this).find(".show_navbox").siblings().animate({marginLeft:"40px"},200);
	});
	$(".body_one_left_ul_l3").mouseleave(function(){
		$(this).find(".show_navbox").hide();
		$(this).find(".show_navbox").siblings().animate({marginLeft:"20px"},200);
	});
	
	$(".body_one_left_ul_l4").mouseenter(function(){
		$(this).find(".show_navbox").show();
		$(this).find(".show_navbox").siblings().animate({marginLeft:"40px"},200);
	});
	$(".body_one_left_ul_l4").mouseleave(function(){
		$(this).find(".show_navbox").hide();
		$(this).find(".show_navbox").siblings().animate({marginLeft:"20px"},200);
	});
	
	$(".body_one_left_ul_l5").mouseenter(function(){
		$(this).find(".show_navbox").show();
		$(this).find(".show_navbox").siblings().animate({marginLeft:"40px"},200);
	});
	$(".body_one_left_ul_l5").mouseleave(function(){
		$(this).find(".show_navbox").hide();
		$(this).find(".show_navbox").siblings().animate({marginLeft:"20px"},200);
	});
	
	$(".body_one_left_ul_l6").mouseenter(function(){
		$(this).find(".show_navbox").show();
		$(this).find(".show_navbox").siblings().animate({marginLeft:"40px"},200);
	});
	$(".body_one_left_ul_l6").mouseleave(function(){
		$(this).find(".show_navbox").hide();
		$(this).find(".show_navbox").siblings().animate({marginLeft:"20px"},200);
	});
	
	$(".body_one_left_ul_l7").mouseenter(function(){
		$(this).find(".show_navbox").show();
		$(this).find(".show_navbox").siblings().animate({marginLeft:"40px"},200);
	});
	$(".body_one_left_ul_l7").mouseleave(function(){
		$(this).find(".show_navbox").hide();
		$(this).find(".show_navbox").siblings().animate({marginLeft:"20px"},200);
	});
	
	
	$(".aa1").eq(0).mouseenter(function(){
			$(this).find("span").css("opacity","0");
			$(this).siblings().find("span").css("opacity","0.3");
			$("#as1").css({display:"block"});
			$("#as2").hide();
			$("#as3").hide();
	})
	$(".aa1").eq(1).mouseenter(function(){
		$(this).find("span").css("opacity","0");
		$(this).siblings().find("span").css("opacity","0.3");
		$("#as2").css({display:"block"});
		$("#as1").hide();
		$("#as3").hide();
	})
	$(".aa1").eq(2).mouseenter(function(){
		$(this).find("span").css("opacity","0");
		$(this).siblings().find("span").css("opacity","0.3");
		$("#as3").css({display:"block"});
		$("#as1").hide();
		$("#as2").hide();
	})
	
	$(".body_now_list ul li").mouseenter(function(){
		$(this).find("h5").stop().animate({marginTop:"-30px"})
		$(this).find("img").stop().animate({marginTop:"-30px"})
	})
	$(".body_now_list ul li").mouseleave(function(){
		$(this).find("h5").stop().animate({marginTop:"0px"})
		$(this).find("img").stop().animate({marginTop:"0px"})
	})
	
	

	$(".fid div div div a").click(function(){
		console.log($(this).parent().eq(1))
		if($(this).parent().hasClass('active')){
			$(this).find("i").css("background-position","-287px -339px")
			$(this).parent().animate({height:"98px"}).removeClass("active")
		}else{
			$(this).parent().addClass("active");
			$(this).find("i").css("background-position","-309px -339px")
			$(this).parent().animate({height:"198px"});
		}
	})
	
	
	
//	楼梯
	
	$(function(){
				/*
					思路：
						1、给window绑定scroll事件
							1）当滚动到一定距离时，显示导航条
							2）当滚动到楼层对应位置时，高亮显示导航条对应楼层
						2、点击导航条，滚动到相应的楼层
						3、返回顶部
				 */
				var liNode = $("#LoutiNav li");
				$(window).scroll(scrollOP)
				
				function scrollOP(){
//					console.log($(this).scrollTop());
					
					var currentTop = $(this).scrollTop()
					//显示楼梯
					console.log(currentTop);
					if( currentTop>=780 ){
						$("#LoutiNav").show();
					}else {
						$("#LoutiNav").hide();
					}
					$(".fid").each(function(index,ele){
//						console.log(this)
						
						
					//   	currentTop>$(this).offset().top + $(this).outerHeight
						
						//判断当前的div是否在页面中出现
						//判断对应的楼层
						if(currentTop>=$(this).offset().top &&  currentTop<= $(this).offset().top + $(this).outerHeight()/2){
							console.log($(this).index());
							//第0个div 对应0 li
							//1          1
							liNode.find("span").css("display","none");
							liNode.eq(index).find("span").css("display","block");
							liNode.removeClass("hover").eq(index).addClass("hover");
						}
						
					})
				}
				
				liNode.click(function(){
//					console.log($(this).index());
//					
//					//找到滑块的滑动距离
//					//等对应楼层offset（）。top
//					
//					//对应楼层   $('#main div')。eq（this。index（））
//					
//					//偏移量  offset（）。top
//
//					
////					liNode.removeClass("hover");
////					$(this).addClass("hover");
//					
//					
//				//	当点击最后一个" top"  没有对象的div
//					if($(this).index()==liNode.length-1){
//						
//						console.log("最后一楼 回到头部");
//						
//						$('body,html').animate({
//							"scrollTop" :  0
//						},500,function(){
//							console.log('回调');
//						})
//						
//					}else{
//						
//						//楼梯滚动
//		//				$(window).scrollTop( $("#main div").eq( $( this).index() ).offset().top )
//		
						$(window).off("scroll");
						//this de 所以兄弟
						$(this).siblings().removeClass("hover");
						$(this).addClass("hover");
						$('body,html').animate({
							"scrollTop" :  $("#main div").eq( $( this).index() ).offset().top
						},500,function(){
							console.log('回调');
							$(window).on("scroll",scrollOP);
						})
//					}
					
				
				})

			});
	
	
	
})




























