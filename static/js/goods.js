$(function(){
	if(location.search){
		var id = location.search;
		id = id.split("?")[1].split("=")[1];
		console.log(id)
	}
	
	$.get("json/mainWeb_J3.json",function(data){
		for (var i=0; i<data.length; i++) {
				var arr = data[i]
				for (var j=0; j<arr.length; j++) {
					var obj = arr[j]; 
					if(id == obj.id){
						$(".bigimg").append("<img src="+ obj.img1+"/>");
						$(".bigimg").append("<img src="+ obj.img2+"/>");
						$(".bigimg").append("<img src="+ obj.img3+"/>");
						$(".bigimg").append("<img src="+ obj.img4+"/>");
						$(".bigimg").append("<img src="+ obj.img5+"/>");
						$(".bigimg").find("img").eq(0).css("display","block");
						$(".bigimg").find("img").eq(1).css("display","none");
						$(".bigimg").find("img").eq(2).css("display","none");
						$(".bigimg").find("img").eq(3).css("display","none");
						$(".bigimg").find("img").eq(4).css("display","none");
						$(".bbigimg").css("background-image","url("+obj.img1+")")
						$(".bigimg").find("img").eq(3).css("display","none");
						$(".bigimg").find("img").eq(4).css("display","none");
						var bi = $(".imglist li")
						for(var i=0; i<bi.length ;i++){
							bi.eq(i).mouseenter(function(){
								
								$(".bigimg").find("img").eq($(this).index()+1).css("display","block");
								
								$(".bigimg").find("img").eq($(this).index()+1).siblings().css("display","none");
								$(this).css("border","1px solid #c00")
								$(this).siblings().css("border","none")
							})
						}
						
						var span = "<span class='ss1'>"+obj.sc+"</span><br/>￥ <span class='ss2'>"+obj.price+"</span>"
						$(".pricebox .box span").append(span);
						$(".imglist li a").eq(0).append("<img src='"+obj.s1 +"' />").mouseenter(function(){
							$(".bigimg").attr("display","block");
						})
						$(".imglist li a").eq(1).append("<img src='"+obj.s2 +"' />")
						$(".imglist li a").eq(2).append("<img src='"+obj.s3 +"' />")
						$(".imglist li a").eq(3).append("<img src='"+obj.s4 +"' />")
						$(".imglist li a").eq(4).append("<img src='"+obj.s5 +"' />")
						
						
						$(".colorbox li a").append("<img src='"+obj.c1 +"' />")
						$(".sizebox li a").append("<span>"+ obj.size +"</span>")
						$(".sumbox input").val(obj.num);
						
						
						
						$(".sumbox i.num-up").click(function(){
							var abc =$(".sumbox input").val();
							abc++;
							$(".sumbox input").val(abc);
						});
						$(".sumbox i.num-down-no").click(function(){
							
							var abd =$(".sumbox input").val();
							if(abd == 1){
								$(".sumbox input").val();
							}else{
								abd--;
								$(".sumbox input").val(abd);
							}
							
						})
						
						
						
									//cookie: 存储字符串
									//cookie: 存储json字符串
									
									//json解析: 把json字符串转换成json对象(数组或对象)
									//json序列化: 把json对象转换成json字符串
									
									// {name:22, age:23} 
									
									
									//点击加入购物车
							$(".buttonbox .borg").click(function(){
										
										//要加入购物车的商品信息
										var goodsName = $(".ss1").text();//名称
								        var goodsPrice = $(".ss2").text();//价格
								        var goodsNum = $(".sumbox input").val();// 数量
								        var goodsImg = $(".imglist .current a img").attr("src");
								        var goodsSize = $(".sizebox li a").text();
								        var goodsId = id;
								        
								        
								        
										
										//获取之前保存在cookie中的购物车信息
										var arr = $.cookie("cart") ? JSON.parse( $.cookie("cart") ) : [];
										
										//遍历查找是否之前的购物车cookie中存在即将添加的商品
										var isExist = false; //表示是否存在该商品
										for(var i=0; i<arr.length; i++) {
											//如果存在该商品, 把数量增加
											if (goodsId == arr[i].id) {
												var gn = parseInt(goodsNum);
												 goodsNum = gn++;
												 
//												 
//												 var arr = $.cookie("cart");
//													if (arr) {
//														arr = JSON.parse(arr); 
//														//[
//														//  {"id":"100","name":"单车","price":"998RMB","num":4},
//														//  {"id":"101","name":"汽车","price":"998000RMB","num":2},
//														//  {"id":"102","name":"飞机","price":"99800000RMB","num":1}
//														//]
//														
//														//遍历数组, 显示所有商品的信息
//														for (var i=0; i<arr.length; i++) {
//															
//															$("ul").append( "<li>" + arr[i].name + "," + arr[i].price + "," + arr[i].num + "</li>" )
//															
//														}
//														
//													}
												 
												 
												isExist = true; //表示存在该商品
											}
										}
										
										//如果不存在, 则添加一个新商品
										if (!isExist) {
											//商品对象
											var goods = {
												id: goodsId,
												name: goodsName,
												price: goodsPrice,
												num: goodsNum, //商品数量
												img:goodsImg,
												size:goodsSize
											}
											arr.push(goods);
										}
										
										//保存到cookie中
										$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
										console.log( $.cookie("cart") );
									})
									
									
									//结算
									$(".buttonbox .bred").click(function(){
										location.href = "cart.html";
									})
						
//							$(".buttonbox .borg").click(
//									function(){
//										var $name = $(".ss1").text();//名称
//								        var $price = $("ss2").text();//价格
//								        var $num = $(".sumbox input").val();// 数量
//								        var $img = obj.img;
//								        var $colors =$(".colorbox li img").attr("src");
//								        var $size = obj.size;
//								
//								        //            console.log($img);
//								        var data = $name + "|" + $price + "|" + $num + "|" + $img + "|" + $colors + "|" + $size;
//								        //setCookie($name, data, 7);
//								        setCookie($name, data, 7);
//							   
//									})
//									
//							    function setCookie(key, value, num){
//							       	//data 天数
//							        var date = new Date();
//							        date.setDate(date.getDate() + num);
//							        document.cookie = "" + key + "=" + value + ";expires=" + date;
//							    }
						
					}	
				}
			}
		})
	})
	

//放大镜
$(function(){
				
				var _smallImg = $(".bigimg"); //小图
				var _smallArea = $("#smallArea"); //小区域
				var _bigImg = $(".bbigimg"); //大图
				var _bigArea = $("#bigArea"); //大区域
				
				//bigImg.width / smallImg.width = bigArea.width/smallArea.width
				//smallArea.width = bigArea.width * smallImg.width / bigImg.width
				//计算小区域的宽高
				//width() == innnerWidth() == outerWidth()
				_smallArea.width( _bigArea.width() * _smallImg.width() / _bigImg.width() );
				_smallArea.height( _bigArea.height() * _smallImg.height() / _bigImg.height() );
				
				//放大系数/放大倍数
				var scale = _bigImg.width() / _smallImg.width();  
				//scale = 4
				
				
				//mousemove
				_smallImg.mousemove(function(e){
					_smallArea.show(); //显示小区域
					 _bigArea.show();
					_bigImg.css("display","block")
					
					//clientX: 可视区域的x值
					//pageX: 距离窗口左边的x值
					var x = e.pageX - _smallImg.offset().left - _smallArea.width()/2;
					var y = e.pageY - _smallImg.offset().top - _smallArea.height()/2; 
					//console.log(e.clientX);
					//console.log(e.pageX);
					
					//控制小区域范围在小图内
					if (x <= 0) { //不超出左边
						x = 0;
					}
					else if (x >= _smallImg.width()-_smallArea.width()) { //不超出右边
						x = _smallImg.width()-_smallArea.width();
					}
					if (y <= 0) { //不超出上边
						y = 0;
					}
					else if (y >= _smallImg.height()-_smallArea.height()) { //不超出下边
						y = _smallImg.height()-_smallArea.height();
					}
					
					
					//移动小区域
					_smallArea.css({left: x, top: y});
					
					//移动大图
					_bigImg.css({left: -x*scale, top: -y*scale});
					
				})
				_smallImg.mouseleave(function(){
					_bigImg.css("display","none")
				})
				
				//mouseleave
				_smallImg.mouseleave(function(){
					_smallArea.hide(); //隐藏小区域
					$("#bigArea").hide()
				})
				
				
				
			})
































