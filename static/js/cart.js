$(function(){
    if($('.cart-box-current tr:first').attr('data-isall')==1){
        $('#selectall').prop('checked',true);
    }

    $('.th-cart .box-allprice').each(function(){
        var num = $(this).prev().attr('data-num');
        var price = $(this).prev().prev().attr('data-price');
        $(this).html(num*price);
    });
    $('.th-cart .box-chk').each(function(){
        if($(this).attr('data-checked')=='True'){
            $(this).children('input').prop('checked',true);
        }
    });

    function getsum(){
        var sum = 0.00;
        $('.th-cart .box-chk').each(function(){
            if($(this).children('input').prop('checked')){
                sum += parseFloat($(this).next().next().next().next().next().next().html());
            }
        });
        $('#allprice').html(sum);
    };
    function getprice($_th){
        $_th.parent().prev().html(parseInt($_th.parent().prev().prev().html())*parseFloat($_th.parent().prev().prev().prev().html()));
    };
    // 全选标记
    function setcheck(){
        var flag = true;
        $('.th-cart .box-chk input').each(function(){
            if($(this).prop('checked')==false) flag=false
        });
        if(flag) $('#selectall').prop('checked',true);
        else $('#selectall').prop('checked',false);
    }

    // 全选
    $("#selectall").click(function(){
        var flag = $(this).prop('checked');
        var fx = true;
        $('.th-cart').each(function(){
            var goodsid = $(this).children('.box-chk').children('input').attr('data-goodsid');
            var descs = $(this).children('.box-desc').html();
            var sizess = $(this).children('.box-size').html();
            requset_data = {'flag': flag, 'goodsid': goodsid,};
            if(descs) requset_data['descs']=descs;
            if(sizess) requset_data['sizess']=sizess;
            $.get('/modicartselect/',requset_data,function(response){
                if(response.status==-1){
                    fx = false;
                }
            });
        });
        console.log(fx)
        if(fx){
            flag ? flag : !flag ;
            $('#selectall').prop("checked",flag);
            $('.cart-box-current input[type=checkbox]').each(function(){
                $(this).prop("checked",flag);
            });
            setcheck();
            getsum();
        }
        // var flag =$(this).prop('checked');
        // flag ? flag : !flag ;
        // $(".cart-box-current input[type=checkbox]").each(function(){
        //     $(this).prop("checked",flag);
        //     getsum();
        // });
    });


    // 单选点击
    $('.th-cart .box-chk input').click(function(){
        var flag = $(this).prop('checked');
        var goodsid = $(this).attr('data-goodsid');
        var descs = $(this).parent().next().next().html();
        var sizess = $(this).parent().next().next().next().html();
        console.log(descs,sizess)
        requset_data = {
            'flag': flag,
            'goodsid': goodsid,
        };
        if(descs) requset_data['descs']=descs;
        if(sizess) requset_data['sizess']=sizess;

        $.get('/modicartselect/',requset_data,function(response){
            if(response.status==1){
                if($(this).attr('checked')){
                    $(this).attr('checked',false);
                } else{
                    $(this).attr('checked',true);
                }
                setcheck();
                getsum();
            }
        });
    });
    getsum();

    $('.sp-add').click(function(){
        console.log('233')
        var descs = $(this).parent().prev().prev().prev().prev().prev().html();
        var sizess = $(this).parent().prev().prev().prev().prev().html();
        var goodsid = $(this).parent().attr('data-goodsid');

        requset_data = {'goodsid':goodsid,'op':1};
        if(descs) requset_data['descs'] = descs;
        if(sizess) requset_data['sizess'] = sizess;
        $_th = $(this);
        $.get('/modicartnum/',requset_data,function(response){
            if(response.status==1){
                $_th.parent().prev().prev().html(response.num);
                getprice($_th);
                getsum();
            }
        });
    });
    $('.sp-cut').click(function(){
        if($(this).parent().prev().prev().html()==1) return;
        var descs = $(this).parent().prev().prev().prev().prev().prev().html();
        var sizess = $(this).parent().prev().prev().prev().prev().html();
        var goodsid = $(this).parent().attr('data-goodsid');

        requset_data = {'goodsid':goodsid,'op':0};
        if(descs) requset_data['descs'] = descs;
        if(sizess) requset_data['sizess'] = sizess;
        $_th = $(this);
        $.get('/modicartnum/',requset_data,function(response){
            if(response.status==1){
                $_th.parent().prev().prev().html(response.num);
                getprice($_th)
                getsum();
            }
        });

    });



});

$(function(){

});






// $(function () {
//         //从cookie中获取购物车的所有商品
//         var arr = $.cookie("cart");
//
//         if (arr) {
//             arr = JSON.parse(arr);
//             //[
//             //  {"id":"100","name":"单车","price":"998RMB","num":4},
//             //  {"id":"101","name":"汽车","price":"998000RMB","num":2},
//             //  {"id":"102","name":"飞机","price":"99800000RMB","num":1}
//             //]
//
//             //遍历数组, 显示所有商品的信息
//             for (var i = 0; i < arr.length; i++) {
//
// //						var tr = "<tr><td colspan='2' class='col'><input class='tr2-input' type='checkbox' /><img src='"+arr[i].img+"'><ul class='uul'></ul></td><td class='box-price' id='n1'></td><td class='box-num' id='n2'></td> <td class='box-allprice' id='n3'></td><td class='box-operate' id='n4'></td></tr>"
// //							$(".cart-box-current").append("<tr><td colspan='2' class='col'></td><td class='box-price' id='n1'></td><td class='box-num' id='n2'></td> <td class='box-allprice' id='n3'></td><td class='box-operate' id='n4'></td></tr>")
// //							$(".cart-box-current .col").append("<input class='tr2-input' type='checkbox' /><img src='"+arr[i].img+"'><ul class='uul'></ul>")
// //							$(".cart-box-current .uul").append("<li><span class='name'>"+arr[i].name+"</span></li><li>尺码：<span class='size'>"+ arr[i].size +"</span></li><li>颜色：<span class='color'>黑红</span></li>")
// //							$(".cart-box-current #n1").append("<span class='price'>"+arr[i].price+"</span>")
// //							$(".cart-box-current #n2").append("<a class='num-minus' href='javascript:;'></a><input class='num-text' type='text' value='"+arr[i].num+"' /><a class='num-add' href='javascript:;'></a>")
// //							$(".cart-box-current #n3").append("<span class='allprice'>"+arr[i].price*arr[i].num+"</span>");
// //							$(".cart-box-current #n4").append("<a href='javascript:;'>删除</a>");
//
//                 var $trNode = $("<tr/>").addClass("ttr").appendTo($(".cart-box-current"));
// //
//                 var $tdNode = $("<td/>").attr("colspan", 2).appendTo($trNode);
//                 $("<input type='checkbox' checked='checked'>").addClass("tr2-input").appendTo($tdNode);
//                 $("<img/>").attr("src", arr[i].img).appendTo($tdNode);
//                 var $ulNode = $("<ul/>").appendTo($tdNode);
//                 $("<li/>").html(arr[i].name).appendTo($ulNode);
//                 $("<li/>").html("尺寸：" + arr[i].size).appendTo($ulNode);
//                 $("<li/>").html("颜色：黑红").appendTo($ulNode);
//
//                 var $tdNode2 = $("<td/>").html(arr[i].price).addClass("box-price").appendTo($trNode);
//
//                 var $tdNode3 = $("<td/>").addClass("box-num").appendTo($trNode);
//                 $("<a/>").addClass("num-minus").appendTo($tdNode3);
//                 $("<input type='text'>").val(arr[i].num).addClass("num-text").appendTo($tdNode3);
//                 $("<a/>").addClass("num-add").appendTo($tdNode3);
//
//                 var $tdNode4 = $("<td/>").html(arr[i].price * arr[i].num).addClass("box-allprice").appendTo($trNode);
//
//                 var $tdNode5 = $("<td/>").addClass("box-operate").appendTo($trNode);
//                 $("<a/>").html("删除").appendTo($tdNode5);
//             }
//
//             var $kk = $(".cart-box-current td input[checked=checked]").eq(0).parent().siblings(".box-allprice");
//
//             var kk = parseInt($kk.text());
//             $(".money").text(kk);
//
// //									console.log(kk+zz)
//
//             $("tr").eq(1).find(".box-operate a").click(function () {
//                 $(this).parent().parent().hide();
//
// //									var $zz = $(".cart-box-current td input[checked=checked]").eq(1).parent().siblings(".box-allprice");
//
// //									var zz = parseInt($zz.text());
// //									console.log(zz)
// //									var xx = zz;
//                 $(".money").text(0.00);
// //									console.log(kk+zz)
//             })
// //					$("tr").eq(2).find(".box-operate a").click(function(){
//             $(this).parent().parent().hide();
//         }
//         ;
//
//         $("#clear-cart").click(function () {
//             $.cookie("cart", "", {expires: 0, path: "/"}); //清空cookie
//         });
// //					console.log($.cookie())
//
//         var num = $(".num-text").val();
//         var nums = parseInt(num);
//
//         $(".num-add").click(function () {
//             nums = nums + 1;
//             $(this).siblings().val(nums);
//             var y = parseInt($(this).parent().prev().html());
// //								console.log(y);
//             var x = nums * y;
// //								console.log(x);
//             $(this).parent().next().text(x);
//
//             var $kk = $(".cart-box-current td input[checked=checked]").eq(0).parent().siblings(".box-allprice");
//
// //									var $zz = $(".cart-box-current td input[checked=checked]").eq(1).parent().siblings(".box-allprice");
//
//             var kk = parseInt($kk.text());
// //									var zz = parseInt($zz.text());
// //									var xx = kk + zz;
//             $(".money").text(kk);
// //							console.log($kk.text());
// //							console.log($zz.text());
//
//             var $aa = $(".cart-box-current td input[checked=checked]").eq(0).parent().siblings(".box-num input").val();
//             var $gg = $(".cart-box-current td input[checked=checked]").eq(1).parent().siblings(".box-num input").val();
//
//             var aa = parseInt($aa);
//             var gg = parseInt($gg);
//             console.log(gg)
//             var cc = aa + gg;
//             $(".total").text(cc);
//         })
//
//         $(".num-minus").click(function () {
//             if (nums <= 1) {
//                 return;
//             }
//             else {
//                 nums = nums - 1;
//                 $(this).siblings().val(nums);
//                 var y = parseInt($(this).parent().prev().html());
// //								console.log(y);
//                 var x = nums * y;
// //								console.log(x);
//                 $(this).parent().next().text(x);
//                 var $kk = $(".cart-box-current td input[checked=checked]").eq(0).parent().siblings(".box-allprice");
// //									var $zz = $(".cart-box-current td input[checked=checked]").eq(1).parent().siblings(".box-allprice");
//                 var kk = parseInt($kk.text());
// //									var zz = parseInt($zz.text());
// //									var xx = kk + zz;
//                 $(".money").text(kk);
// //							console.log($kk.text());
// //						console.log($zz.text());
//                 var $aa = $(".cart-box-current td input[checked=checked]").eq(0).parent().siblings(".box-num");
//                 var $bb = $(".cart-box-current td input[checked=checked]").eq(1).parent().siblings(".box-num");
//                 var aa = parseInt($aa.val());
//                 console.log(aa);
//                 var bb = parseInt($bb.val());
//                 var cc = aa + bb;
//                 $(".total").text(cc);
//
//                 var $aa = $(".cart-box-current td input[checked=checked]").eq(0).parent().siblings(".box-num input").val();
//                 var $gg = $(".cart-box-current td input[checked=checked]").eq(1).parent().siblings(".box-num input").val();
//
//                 var aa = parseInt($aa);
//                 var gg = parseInt($gg);
//                 console.log(gg)
//                 var cc = aa + gg;
//                 $(".total").text(cc);
//             }
//
//         })
//         $("#js-go-pay").click(function () {
//             alert("请确认是否购买该商品");
//         })
//     }
// )
