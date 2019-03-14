$(function(){
    var $form = $(".form");
    var $formdiv = $(".form .base-text");
    console.log($formdiv.length);
    var $reguserinput = $(".register-area .login-text:eq(0)");
    var $regpwdinput = $(".register-area .login-text:eq(1)");


    //输入框焦点事件
    $formdiv.on({
        focusin : function(){
            //console.log($(this));
            if($(this).hasClass("username") || $(this).hasClass("password")){
                $(this).removeClass("base-text-error").addClass("base-text-focus").siblings(".base-text").removeClass("base-text-error");
                $(this).siblings(".v-error").removeClass("v-error").addClass("v-ok").text("");
            } else {
                $(this).removeClass("base-text-error").addClass("base-text-focus").next().addClass("v-info");
                $(this).siblings(".v-error").removeClass("v-error").addClass("v-info");
            }
        },
        focusout : function(){
            var $regusername = $reguserinput.val();
            var $regpassword = $regpwdinput.val();
            var re1 = /^((\(\d{2,3}\))|(\d{3}\-))?13\d{9}$/;
            var re2 = /^[\x21-\x7E]{6,20}$/;
            if($regusername == "" && $regpassword == ""){
                console.log($(this));
                $(this).addClass("base-text-error").next().removeClass("v-info").addClass("v-error");
            } else if(!re1.test($regusername)){
                $(this).addClass("base-text-error").next().removeClass("v-info").addClass("v-error");
            }else if(!re2.test($regpassword)){
                $(this).addClass("base-text-error").next().removeClass("v-info").addClass("v-error");
            } else {
                $(this).removeClass("base-text-focus").addClass("base-text").next().removeClass("v-info");
            }

        }
    });

    //同意服务协议
    var $agreement = $(".agreement input");
    $agreement.click(function(){
        //console.log(!$agreement.attr('checked'));
        //if(!$agreement.attr('checked')){
        //    alert(1)
        //}
    });

    var $registerbtn = $(".blue-button");


    //注册按钮

    $registerbtn.click(function(){
        var $regusername = $reguserinput.val();
        var $regpassword = $regpwdinput.val();
        if($regusername == "" && $regpassword == ""){
            $formdiv.addClass("base-text-error").next().removeClass("v-info").addClass("v-error");
            return false;
        } else {
            $.cookie("name", $regusername);
            $.cookie("password", $regpassword);
            window.location.href = "login.html";
        }
    });

    var $loginbtn = $(".orange-button");
    var $loginuserinput = $(".login-area .login-text:eq(0)");
    var $loginpwdinput = $(".login-area .login-text:eq(1)");
    var $loginusernamebox = $(".login-area .username");
    var $loginusernamev = $loginusernamebox.next();
    var $loginpwdbox = $(".login-area .password");
    var $loginpwdv = $loginpwdbox.next();

    //登录按钮
    $loginbtn.click(function(){
        var cookiename = $.cookie("name");
        var cookiepassword = $.cookie("password");
        var $loginusername = $loginuserinput.val();
        var $loginpwd = $loginpwdinput.val();
        if($loginusername == "" && $loginpwd == ""){
            $formdiv.addClass("base-text-error").next().removeClass("v-ok").addClass("v-error");
            $loginusernamev.text("请输入手机号/邮箱");
            $loginpwdv.text("输入密码");
        } else if($loginusername != cookiename){
            $loginusernamebox.addClass("base-text-error");
            $loginusernamev.addClass("v-error").text("用户名不存在");
        } else if($loginpwd != cookiepassword){
            $loginpwdbox.addClass("base-text-error");
            $loginpwdv.addClass("v-error").text("密码错误");
        } else {
            alert("登录成功，跳转到首页")
            window.location.href = "mainWeb.html";
        }
    });

    //微信登录二维码
    var $way = $(".way");
    var $wechatbox = $(".wechatbox");
    $way.click(function(){
        $form.hide();
        $wechatbox.fadeIn();
    })

});










