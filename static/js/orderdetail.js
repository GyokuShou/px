$(function(){
    $('.detail-box').each(function(){
        var price = $(this).children('.price').attr('data-price');
        var num = $(this).children('.num').attr('data-num');
        console.log(price,num);
        $(this).children('.price-o').children('span').html(num*price);
    });
    var sum = 0;
    $('.detail-box').each(function(){
        sum += parseFloat($(this).children('.price-o').children('span').html());
    });
    $('.right h2 span').html(sum);
});

$(function(){
    $('#alipay').click(function(){
        requset_data = {
            'orderid': $(this).attr('data-order'),
        };
        $.get('/pay/',requset_data,function(response){
            if(response.status==1){
                window.open(response.alipayurl,'_self');
            }
            else {
                alert('error')
            }
        });
    });
});