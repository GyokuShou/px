$(function() {
  //从cookie中获取购物车的所有商品
				var arr = $.cookie("cart");
				
				if (arr) {
					arr = JSON.parse(arr); 
					//[
					//  {"id":"100","name":"单车","price":"998RMB","num":4},
					//  {"id":"101","name":"汽车","price":"998000RMB","num":2},
					//  {"id":"102","name":"飞机","price":"99800000RMB","num":1}
					//]
					
					//遍历数组, 显示所有商品的信息
					for (var i=0; i<arr.length; i++) {
						
//						var tr = "<tr><td colspan='2' class='col'><input class='tr2-input' type='checkbox' /><img src='"+arr[i].img+"'><ul class='uul'></ul></td><td class='box-price' id='n1'></td><td class='box-num' id='n2'></td> <td class='box-allprice' id='n3'></td><td class='box-operate' id='n4'></td></tr>"
//							$(".cart-box-current").append("<tr><td colspan='2' class='col'></td><td class='box-price' id='n1'></td><td class='box-num' id='n2'></td> <td class='box-allprice' id='n3'></td><td class='box-operate' id='n4'></td></tr>")
//							$(".cart-box-current .col").append("<input class='tr2-input' type='checkbox' /><img src='"+arr[i].img+"'><ul class='uul'></ul>")
//							$(".cart-box-current .uul").append("<li><span class='name'>"+arr[i].name+"</span></li><li>尺码：<span class='size'>"+ arr[i].size +"</span></li><li>颜色：<span class='color'>黑红</span></li>")
//							$(".cart-box-current #n1").append("<span class='price'>"+arr[i].price+"</span>")
//							$(".cart-box-current #n2").append("<a class='num-minus' href='javascript:;'></a><input class='num-text' type='text' value='"+arr[i].num+"' /><a class='num-add' href='javascript:;'></a>")
//							$(".cart-box-current #n3").append("<span class='allprice'>"+arr[i].price*arr[i].num+"</span>");
//							$(".cart-box-current #n4").append("<a href='javascript:;'>删除</a>");
							
							var $trNode = $("<tr/>").addClass("ttr").appendTo($(".cart-box-current"));
//							
							var $tdNode = $("<td/>").attr("colspan",2).appendTo($trNode);
							$("<input type='checkbox' checked='checked'>").addClass("tr2-input").appendTo($tdNode);
							$("<img/>").attr("src",arr[i].img).appendTo($tdNode);
							var $ulNode = $("<ul/>").appendTo($tdNode);
							$("<li/>").html(arr[i].name).appendTo($ulNode);
							$("<li/>").html("尺寸："+arr[i].size).appendTo($ulNode);
							$("<li/>").html("颜色：黑红").appendTo($ulNode);
							
							var $tdNode2 = $("<td/>").html(arr[i].price).addClass("box-price").appendTo($trNode);
							
							var $tdNode3 = $("<td/>").addClass("box-num").appendTo($trNode);
							$("<a/>").addClass("num-minus").appendTo($tdNode3);
							$("<input type='text'>").val(arr[i].num).addClass("num-text").appendTo($tdNode3);
							$("<a/>").addClass("num-add").appendTo($tdNode3);
							
							var $tdNode4 = $("<td/>").html(arr[i].price*arr[i].num).addClass("box-allprice").appendTo($trNode);
							
							var $tdNode5 = $("<td/>").addClass("box-operate").appendTo($trNode);
							$("<a/>").html("删除").appendTo($tdNode5);
					}
					
									var $kk = $(".cart-box-current td input[checked=checked]").eq(0).parent().siblings(".box-allprice");
									
										var kk =parseInt($kk.text());
										$(".money").text(kk);
									
									
									
//									console.log(kk+zz)

					$("tr").eq(1).find(".box-operate a").click(function(){
						$(this).parent().parent().hide();
					
//									var $zz = $(".cart-box-current td input[checked=checked]").eq(1).parent().siblings(".box-allprice");
							
//									var zz = parseInt($zz.text());
//									console.log(zz)
//									var xx = zz;
									$(".money").text(0.00);
//									console.log(kk+zz)
					})
//					$("tr").eq(2).find(".box-operate a").click(function(){
						$(this).parent().parent().hide();
					};
					
					$("#clear-cart").click(function(){
								$.cookie("cart", "", {expires:0, path:"/"}); //清空cookie
					});
//					console.log($.cookie())
					
					var num = $(".num-text").val();
					var nums = parseInt(num);
					
					$(".num-add").click(function(){
								nums = nums+1;
								$(this).siblings().val(nums);
								var y = parseInt($(this).parent().prev().html()) ;
//								console.log(y);
								var x = nums*y ;
//								console.log(x);
								$(this).parent().next().text(x);
								
								var $kk = $(".cart-box-current td input[checked=checked]").eq(0).parent().siblings(".box-allprice");
							
//									var $zz = $(".cart-box-current td input[checked=checked]").eq(1).parent().siblings(".box-allprice");
									
									
									var kk =parseInt($kk.text());
//									var zz = parseInt($zz.text());
//									var xx = kk + zz;
											$(".money").text(kk);
//							console.log($kk.text());
//							console.log($zz.text());
									
									
										var $aa = $(".cart-box-current td input[checked=checked]").eq(0).parent().siblings(".box-num input").val();
								var $gg = $(".cart-box-current td input[checked=checked]").eq(1).parent().siblings(".box-num input").val();
								
									var aa =parseInt($aa);
									var gg = parseInt($gg);
									console.log(gg)
									var cc = aa + gg;
									$(".total").text(cc);
						})
					
					
						$(".num-minus").click(function(){
							if(nums<=1){
								return;
							}
							else{
								nums = nums-1;
								$(this).siblings().val(nums);
								var y = parseInt($(this).parent().prev().html()) ;
//								console.log(y);
								var x = nums*y ;
//								console.log(x);
								$(this).parent().next().text(x);
									var $kk = $(".cart-box-current td input[checked=checked]").eq(0).parent().siblings(".box-allprice");
							
//									var $zz = $(".cart-box-current td input[checked=checked]").eq(1).parent().siblings(".box-allprice");
									
									var kk =parseInt($kk.text());
//									var zz = parseInt($zz.text());
//									var xx = kk + zz;
									$(".money").text(kk);
//							console.log($kk.text());
//						console.log($zz.text());


								var $aa = $(".cart-box-current td input[checked=checked]").eq(0).parent().siblings(".box-num");
								var $bb = $(".cart-box-current td input[checked=checked]").eq(1).parent().siblings(".box-num");
									var aa =parseInt($aa.val());
									console.log(aa);
									var bb = parseInt($bb.val());
									var cc = aa + bb;
									$(".total").text(cc);
									
										var $aa = $(".cart-box-current td input[checked=checked]").eq(0).parent().siblings(".box-num input").val();
								var $gg = $(".cart-box-current td input[checked=checked]").eq(1).parent().siblings(".box-num input").val();
								
									var aa =parseInt($aa);
									var gg = parseInt($gg);
									console.log(gg)
									var cc = aa + gg;
									$(".total").text(cc);
							}
								
						})
						
						$("#js-go-pay").click(function(){
							alert("请确认是否购买该商品");
						})
							


				}
				
							
							
)




























