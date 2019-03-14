$(function(){
    $('#name').click(function(){
       $('#sp-name').removeClass().addClass('v-info');
    });
    $('#name').blur(function(){
        var name = $('#name').val();
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        var reg = /^1[3|4|5|7|8][0-9]{9}$/;
        if(name==''){
            $('#sp-name').removeClass().addClass('v-info');
            return ;
        }
        if(myreg.test(name) || reg.test(name)){
            requset_data = {
              'name': name,
            };
            $.get('/checkname/',requset_data,function(response){
                if(response.status == 1){
                    $('#sp-name').removeClass();
                    $('#sp-name').addClass('v-ok');
                    $('#sp-name').html('该用户名可用')
                }else{
                    $('#sp-name').removeClass().addClass('v-error');
                    $('#sp-name').html('该用户名已被占用');
                }
            })
        }else {
            $('#sp-name').removeClass().addClass('v-error');
            $('#sp-name').html('用户名格式错误');
        }
    });


    $('#password').click(function(){
       $('#sp-password').removeClass().addClass('v-info');
    });
    $('#password').blur(function(){
        var password = $('#password').val();
        var reg = /^[\w~!@#$%^&*()_+=,./<>?\\\|;':"]{6,20}$/;
        if(password==''){
            $('#sp-password').removeClass().addClass('v-info');
            return ;
        }
        if(reg.test(password)){
            $('#sp-password').removeClass().addClass('v-ok');
            $('#sp-password').html('密码可用');
        }else {
            $('#sp-password').removeClass().addClass('v-error');
        }
    });

    $('#psd').click(function(){
       $('#sp-psd').removeClass().addClass('v-info');
    });
    $('#psd').blur(function(){
        var psd = $('#psd').val();
        if(psd==''){
            $('#sp-psd').removeClass().addClass('v-info');
            return ;
        }
        if(psd==$('#password').val()){
            $('#sp-psd').removeClass().addClass('v-ok');
            $('#sp-psd').html('验证正确');
        }else {
            $('#sp-psd').removeClass().addClass('v-error');
            $('#sp-psd').html('两次输入不一致');
        }
    });

    $('#vericode').click(function(){
       $('#sp-vericode').removeClass().addClass('v-info');
    });
    // $('#vericode').blur(function(){
    //     var vericode = $(this).val();
    //     var vc = $.cookie('vc');
    //     if(vc.lower == vericode.lower){
    //         $('#sp-vericode').removeClass().addClass('v-ok');
    //         $('#sp-vericode').html('验证正确');
    //     }else {
    //         $('#sp-vericode').removeClass().addClass('v-error');
    //         $('#sp-vericode').html('验证码错误');
    //     }
    // });
    $('#sp-vericode').removeClass().addClass('v-ok');$('#sp-vericode').html('验证正确');


    $('.blue-button').click(function(){
        var flag = true;
        $('.form span').each(function(){
            if($(this).is('v-error') || $(this).is('v-info')){
                flag = false;
            }
        });
        if(flag && $('#checkbox').attr('checked')){
            $('.login-content form').submit();
            console.log('23333');
        }
    });

});