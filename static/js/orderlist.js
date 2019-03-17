$(function(){
    var allorder = 0;
    var waitpay = 0;
    var waitsent = 0;
    var waitget = 0;
    var waitview = 0;
    var finish = 0;
    var errorder = 0;

    $('.detail-box').each(function(){
        allorder += parseInt(1);
        if($(this).children('.status').attr('data-status')==0) waitpay += parseInt(1);
        else if($(this).children('.status').attr('data-status')==1) waitsent += parseInt(1);
        else if($(this).children('.status').attr('data-status')==2) waitget += parseInt(1);
        else if($(this).children('.status').attr('data-status')==3) waitview += parseInt(1);
        else if($(this).children('.status').attr('data-status')==4) finish += parseInt(1);
        else if($(this).children('.status').attr('data-status')==-1) errorder += parseInt(1);
    });
    $('.sp-allorder').html(allorder);$('.sp-waitpay').html(waitpay);$('.sp-waitsent').html(waitsent);
    $('.sp-waitget').html(waitget);$('.sp-waitview').html(waitview);$('.sp-finish').html(finish);
    $('.sp-errorder').html(errorder);
    console.log('233')
});