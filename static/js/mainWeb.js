$(function(){
    $('.message').click(function(){
        if ($.cookie('user')){
            window.open('/orderlist/','_self');
        }
        else {
            $.cookie('gotoorderlist','orderlist',{expires:1,path:'/'});
            window.open('/login/','_self');
        }

    });
});