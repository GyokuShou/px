
$(function(){
//	获取第一屏中3 ， 4的数据
		$.get("json/mainWeb_J1.json",function(data){
			
			for (var i=0; i<data.length; i++) {
				var arr = data[i]
				for (var j=0; j<arr.length; j++) {

					var obj = arr[j]; 
					var img = obj.img; //img
					var id = obj.id; //id
					$(".aaa").eq(i).append("<a href='goodsinfo.html'><img src="+ img +"/></a>");
				}
			}
//		调整第一屏中 3  获取的数据的位置			
		$("#body_one_mid_3 a img").mouseenter(function(){
			$(this).stop().animate({marginLeft:"-10px"},200);
		})
		$("#body_one_mid_3 a img").mouseleave(function(){
			$(this).stop().animate({marginLeft:"0px"},200);
		})
		
//		调整第一屏中 3  获取的数据的位置			
		$("#body_one_mid_4 a img").mouseenter(function(){
			$(this).stop().animate({marginLeft:"-5px"},200);
		})
		$("#body_one_mid_4 a img").mouseleave(function(){
			$(this).stop().animate({marginLeft:"0px"},200);
		})
			
			//	TEB切换
				$(".body_one_right_mid3 a").eq(0).mouseenter(function(){
					$("#mid3_b").css({left:"0px"});
					$("#body_one_right_mid4").show();
					$("#body_one_right_mid5").hide();
				});
				$(".body_one_right_mid3 a").eq(1).mouseenter(function(){
					$("#mid3_b").css({left:"110px"});
					$("#body_one_right_mid5").show();
					$("#body_one_right_mid4").hide();
				});
			
//		调整第一屏右中 4  获取的数据的位置
			$("#body_one_right_mid4 a").eq(0).css({top:"0"});
			$("#body_one_right_mid4 a").eq(1).css({top:"110px"});
			$("#body_one_right_mid4 a").eq(2).css({top:"156px"});
			
			
			$("#body_one_right_mid4 a").eq(0).mouseenter(function(){
				$("#body_one_right_mid4 a").eq(1).stop().animate({top:"110px"},500);
				$("#body_one_right_mid4 a").eq(2).stop().animate({top:"156px"},500);
			})
			
			$("#body_one_right_mid4 a").eq(1).mouseenter(function(){
				$("#body_one_right_mid4 a").eq(1).stop().animate({top:"44px"},500);
				$("#body_one_right_mid4 a").eq(2).stop().animate({top:"156px"},500);
			})
			
			$("#body_one_right_mid4 a").eq(2).mouseenter(function(){
				$("#body_one_right_mid4 a").eq(1).stop().animate({top:"44px"},500);
				$("#body_one_right_mid4 a").eq(2).stop().animate({top:"94px"},500);
			})
			
				
//		调整第一屏右中 5  获取的数据的位置
			$("#body_one_right_mid5 a").eq(0).css({top:"0"});
			$("#body_one_right_mid5 a").eq(1).css({top:"110px"});
			$("#body_one_right_mid5 a").eq(2).css({top:"156px"});
			
			
			$("#body_one_right_mid5 a").eq(0).mouseenter(function(){
				$("#body_one_right_mid5 a").eq(1).stop().animate({top:"110px"},500);
				$("#body_one_right_mid5 a").eq(2).stop().animate({top:"156px"},500);
			})
			
			$("#body_one_right_mid5 a").eq(1).mouseenter(function(){
				$("#body_one_right_mid5 a").eq(1).stop().animate({top:"44px"},500);
				$("#body_one_right_mid5 a").eq(2).stop().animate({top:"156px"},500);
			})
			
			$("#body_one_right_mid5 a").eq(2).mouseenter(function(){
				$("#body_one_right_mid5 a").eq(1).stop().animate({top:"44px"},500);
				$("#body_one_right_mid5 a").eq(2).stop().animate({top:"94px"},500);
			})
			
				
			
		});
			
//爱团购  JSON获取数据  定时器
		$.get("json/mainWeb_J2.json",function(data){
			
			for (var i=0; i<data.length; i++) {
				var arr = data[i]
				for (var j=0; j<arr.length; j++) {
					var obj = arr[j]; 
					var img = obj.img; //img
					var id = obj.id; //id
					var old = obj.old_price;
					var new1 = obj.new_price;
					$(".bbb").eq(i).append("<a href='goodsinfo.html'><img src="+ img +"/></a>");
					$(".bbb").eq(i).append("<div><span class='ss1'>倒计时</span><span class='d'></span>天<span class='h'></span>:<span class='m'></span>:<span class='s'></span><b></b></div>")
					$(".bbb").eq(i).append("<p><del>"+old+"</del>|<i>"+new1+"</i></p>");
				}
			}
			
			var oDay = $(".d");
			var oHours = $(".h");
			var oMinutes = $(".m");
			var oSeconds = $(".s");
			
			var i = 777600;///秒数
			/**
			 * 参数1 定时器启动时候执行的函数
			 * 参数2 定时器执行的间隔时间
			 */
			setInterval (function(){
				i--;
				var day= parseInt(i/86400);//天
				var hours =parseInt(i/3600)%24;//小时
				var minutes = parseInt(i/60)%60;//分
				var seconds = i%60;//秒
				
				oDay.html(day)
				oHours.html(hours)
				oMinutes.html(minutes)
				oSeconds.html(seconds)
			},1000);
			
				$(".body_love_nav h3 a").eq(0).mouseenter(function(){
					$(".body_love_nav h3 i").stop().animate({left:"0px"},500);
					$("#love1").show();
					$("#love2").hide();
				})
				$(".body_love_nav h3 a").eq(1).mouseenter(function(){
					$(".body_love_nav h3 i").stop().animate({left:"90px"},500);
					$("#love2").show();
					$("#love1").hide();
				})
			
		})
		
//		户外
		$.get("json/mainWeb_J3.json",function(data){
			
			for (var i=0; i<data.length; i++) {
				var arr = data[i]
				for (var j=0; j<arr.length; j++) {
					var obj = arr[j]; 
					var img = obj.img; //img
					var id = obj.id; //id
					var sc = obj.sc;
					var price = obj.price;

					var img = "<img src="+ img +"/>";
					var span ="<span>"+sc+"</span>";
					var b ="<b>"+price+"</b>";
					var a = "<a href='goodsinfo.html?id="+ id +"'>"+img + span +b +"</a>";
					var li = "<li>"+a+"</li>"
//					$(".ccc").eq(i).append("<li><a href='goodsinfo.html?id='"+ id +"><img src="+ img +"/><span>"+sc+"</span><b>"+price+"</b></a></li>");
					$(".ccc").eq(i).append(li)
				}
			}
			$("#d1_list2").hide();
			$("#d1_list3").hide();
			
			$(".body_out_nav span a").eq(0).mouseenter(function(){
					$(".body_out_nav span b").stop().animate({left:"-23px"},500);
					$("#d1_list1").show();
					$("#d1_list1").siblings().hide();
				})
				$(".body_out_nav span a").eq(1).mouseenter(function(){
					$(".body_out_nav span b").stop().animate({left:"96px"},500);
					$("#d1_list2").show();
					$("#d1_list2").siblings().hide();
				})
				$(".body_out_nav span a").eq(2).mouseenter(function(){
					$(".body_out_nav span b").stop().animate({left:"215px"},500);
					$("#d1_list3").show();
					$("#d1_list3").siblings().hide();
				});
				
				
//			跳转商品详情
			
		});
			
		
//		女装
		
		$.get("json/mainWeb_girl.json",function(data){
			
			for (var i=0; i<data.length; i++) {
				var arr = data[i]
				for (var j=0; j<arr.length; j++) {
					var obj = arr[j]; 
					var img = obj.img; //img
					var id = obj.id; //id
					var sc = obj.sc;
					var price = obj.price;
					$(".ddd").eq(i).append("<li><a href='goodsinfo.html'><img src="+ img +"/><span>"+sc+"</span><b>"+price+"</b></a></li>");
				}
			}
			$("#d2_list2").hide();
			$("#d2_list3").hide();
			
			$(".body_girl_nav span a").eq(0).mouseenter(function(){
					$(".body_girl_nav span b").stop().animate({left:"-23px"},500);
					$("#d2_list1").show();
					$("#d2_list1").siblings().hide();
				})
				$(".body_girl_nav span a").eq(1).mouseenter(function(){
					$(".body_girl_nav span b").stop().animate({left:"96px"},500);
					$("#d2_list2").show();
					$("#d2_list2").siblings().hide();
				})
				$(".body_girl_nav span a").eq(2).mouseenter(function(){
					$(".body_girl_nav span b").stop().animate({left:"215px"},500);
					$("#d2_list3").show();
					$("#d2_list3").siblings().hide();
				})
			
		});
		
//		男装
		
		$.get("json/mainWeb_boy.json",function(data){
			
			for (var i=0; i<data.length; i++) {
				var arr = data[i]
				for (var j=0; j<arr.length; j++) {
					var obj = arr[j]; 
					var img = obj.img; //img
					var id = obj.id; //id
					var sc = obj.sc;
					var price = obj.price;
					$(".eee").eq(i).append("<li><a href='goodsinfo.html'><img src="+ img +"/><span>"+sc+"</span><b>"+price+"</b></a></li>");
				}
			}
			$("#d3_list2").hide();
			$("#d3_list3").hide();
			
			$(".body_boy_nav span a").eq(0).mouseenter(function(){
					$(".body_boy_nav span b").stop().animate({left:"-23px"},500);
					$("#d3_list1").show();
					$("#d3_list1").siblings().hide();
				})
				$(".body_boy_nav span a").eq(1).mouseenter(function(){
					$(".body_boy_nav span b").stop().animate({left:"96px"},500);
					$("#d3_list2").show();
					$("#d3_list2").siblings().hide();
				})
				$(".body_boy_nav span a").eq(2).mouseenter(function(){
					$(".body_boy_nav span b").stop().animate({left:"215px"},500);
					$("#d3_list3").show();
					$("#d3_list3").siblings().hide();
				})
			
		});
		
//		童装
		
		$.get("json/mainWeb_child.json",function(data){
			
			for (var i=0; i<data.length; i++) {
				var arr = data[i]
				for (var j=0; j<arr.length; j++) {
					var obj = arr[j]; 
					var img = obj.img; //img
					var id = obj.id; //id
					var sc = obj.sc;
					var price = obj.price;
					$(".fff").eq(i).append("<li><a href='goodsinfo.html'><img src="+ img +"/><span>"+sc+"</span><b>"+price+"</b></a></li>");
				}
			}
			$("#d4_list2").hide();
			
			$(".body_child_nav span a").eq(0).mouseenter(function(){
					$(".body_child_nav span b").stop().animate({left:"-23px"},500);
					$("#d4_list1").show();
					$("#d4_list1").siblings().hide();
				})
				$(".body_child_nav span a").eq(1).mouseenter(function(){
					$(".body_child_nav span b").stop().animate({left:"96px"},500);
					$("#d4_list2").show();
					$("#d4_list2").siblings().hide();
				})
			
		});
		
//		箱包
		
		$.get("json/mainWeb_box.json",function(data){
			
			for (var i=0; i<data.length; i++) {
				var arr = data[i]
				for (var j=0; j<arr.length; j++) {
					var obj = arr[j]; 
					var img = obj.img; //img
					var id = obj.id; //id
					var sc = obj.sc;
					var price = obj.price;
					$(".ggg").eq(i).append("<li><a href='goodsinfo.html'><img src="+ img +"/><span>"+sc+"</span><b>"+price+"</b></a></li>");
				}
			}
			$("#d5_list2").hide();
			
				$(".body_box_nav span a").eq(0).mouseenter(function(){
					$(".body_box_nav span b").stop().animate({left:"-23px"},500);
					$("#d5_list1").show();
					$("#d5_list1").siblings().hide();
				})
				$(".body_box_nav span a").eq(1).mouseenter(function(){
					$(".body_box_nav span b").stop().animate({left:"96px"},500);
					$("#d5_list2").show();
					$("#d5_list2").siblings().hide();
				})
		});
		
		
	})
