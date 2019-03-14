import hashlib
import random
import time

from django.core.cache import cache
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render

# Create your views here.
from pc.models import Carousel, User


def index(request):
    token = request.session.get('token')
    if token:
        userid = cache.get(token)
        response_data = {
            'user': None,
        }
        if userid:
            user = User.objects.get(pk=userid)
            response_data['user'] = user

    return render(request,'mainWeb.html',context=response_data)


    carousel = Carousel.objects.all()
    response_data = {
        'carousel': carousel,
    }
    return render(request,'mainWeb.html',context=response_data)


def generate_password(password):
    m = hashlib.sha256()
    m.update(password.encode('utf-8'))
    return m.digest()


def generate_token():
    token = str(time.time()) + str(random.random())
    m = hashlib.md5()
    m.update(token.encode('utf-8'))
    return m.digest()


def register(request):
    if request.method == 'GET':
        return render(request,'register.html')
    elif request.method == 'POST':
        name = request.POST.get('name')
        password = request.POST.get('password')
        password = generate_password(password)

        user = User.objects.filter(name=name)
        if user.exists():
            return render(request,'register.html',context={'error':'注册失败，请重新注册'})

        try:
            user = User()
            user.name = name
            user.password
            user.save()

            token = generate_token()
            cache.set(token,user.id,60*60*24*3)
            request.session['token'] = token
            return render(request,'mainWeb.html')
        except Exception as e:
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