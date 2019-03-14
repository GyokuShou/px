$(function(){
    if($('#checkbox').attr('checked')){
        var name = $('#name').val();
        var password = $('#password').val();
        console.log('name------'+name);
        if(name && password){
            requset_data = {
                'name': name,
                'password': password,
            };
            $.get('/login/',requset_data,function(response){
                if(response.status==1){
                    $('.login-area form').submit();
                }
            });
        }
    }

    $('#login').click(function(){
        var name = $('#name').val();
        var password = $('#password').val();
        if(name && password){
            $('.login-area form').submit();
            console.log('2333');
        }
    });
});