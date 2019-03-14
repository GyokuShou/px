import hashlib
import random
import time

from django.core.cache import cache
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from pc.models import Carousel, User
from pc.vericode import Vericode


def index(request):
    token = request.session.get('token')
    response_data = {
        'user': None,
    }
    if token:
        userid = cache.get(token)
        if userid:
            user = User.objects.get(pk=userid)
            response_data['user'] = user
    carousel = Carousel.objects.all()
    response_data['carousel'] = carousel
    return render(request,'mainWeb.html',context=response_data)


def generate_password(param):
    sha1 = hashlib.sha256()
    sha1.update(param.encode('utf-8'))
    return sha1.hexdigest()


def generate_token():
    token = str(time.time()) + str(random.random())
    ps = hashlib.sha1()
    ps.update(token.encode('utf-8'))
    return ps.hexdigest()


def register(request):
    if request.method == 'GET':
        return render(request,'register.html')
    elif request.method == 'POST':
        name = request.POST.get('name')
        password = request.POST.get('password')
        password = generate_password(password)

        user = User.objects.filter(name=name)
        if user.exists():
            return render(request,'register.html',context={'error':'用户名刚刚被截胡了'})

        try:
            user = User()
            user.name = name
            user.password = password
            user.save()

            token = generate_token()
            cache.set(token,user.id,60*60*24*3)
            request.session['token'] = token
            return render(request,'mainWeb.html')
        except Exception as e:
            print(e)
            return render(request,'register.html',context={'error':'注册失败，请重新注册'})


def checkname(request):
    name = request.GET.get('name')
    print(name)
    user = User.objects.filter(name=name)
    response_data = {}
    if user.exists():
        response_data['status'] = 0
    else:
        response_data['status'] = 1
    return JsonResponse(response_data)


def logout(request):
    request.session.flush()
    return redirect('pc:index')


def login(request):
    if request.method == 'GET':
        return render(request,'login.html')
    elif request.method == 'POST':
        name = request.POST.get('name')
        password = generate_password(request.POST.get('password'))

        user = User.objects.filter(name=name).filter(password=password)
        if user.exists():
            user = user.first()
            return render(request,'mainWeb.html',context={'user':user})
        else:
            return render(request,'login.html',context={'error':'用户名或密码错误'})


def getvericode(request):
    vc = Vericode()
    img,code = vc.create_img()
    response = HttpResponse(img,'image/png')
    response.set_cookie('vericode',code)
    return response