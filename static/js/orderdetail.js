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