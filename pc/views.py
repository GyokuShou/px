import hashlib
import random
import time

from django.core.cache import cache
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect

# Create your views here.
from pc.models import Carousel, User, Type, Goods, GoodsImg, Cart
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

    goods = Goods.objects.all()
    response_data['goods'] = goods

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
            return redirect('pc:index')
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
            token = generate_token()
            cache.set(token,user.id,60*60*24*3)
            request.session['token'] = token

            page = request.COOKIES.get('page')
            if page:
                return redirect('pc:makegoods',page)

            return redirect('pc:index')
        else:
            return render(request,'login.html',context={'error':'用户名或密码错误'})


def getvericode(request):
    vc = Vericode()
    img,code = vc.create_img()
    response = HttpResponse(img,'image/png')
    response.set_cookie('revericode',code,path='/register/')
    return response


def cart(request):
    return render(request,'cart.html')


def goodsinfo(request,goodsid):
    token = request.session.get('token')
    response_data = {}
    response_data['user'] = None
    if token:
        userid = cache.get(token)
        user = User.objects.filter(pk=userid)
        if user.exists():
            user = user.first()
            response_data['user'] = user

    goods = Goods.objects.get(pk=goodsid)

    goodsimg = goods.goodsimg_set.all()

    response_data['goods'] = goods
    response_data['goodsimg'] = goodsimg


    if goods.productdesc:
        desc_list =goods.productdesc.split('#')
        color_list = {}
        for item in range(len(desc_list)):
            color_list[desc_list[item]] = item
        response_data['color_list'] = color_list

    if goods.productsize:
        desc_list = goods.productsize.split('#')
        size_list = {}
        for item in range(len(desc_list)):
            size_list[desc_list[item]] = item
        response_data['size_list'] = size_list

    return render(request,'goodsinfo.html',context=response_data)


def makegoods(request):
    typeid = 3
    type = Type.objects.filter(typeid=typeid).first()
    goods = Goods()
    goods.productlongname = "斯鑫明 2016秋冬新款男士纯棉夹克男时尚印花修身拼接夹克外套"
    goods.price = float(str(random.randrange(199,399))+'.00')
    goods.ftypeid = type
    goods.ctypeid = int(str(typeid)+str(random.randrange(1000,1003)))
    goods.productdesc = "#白色#黑色#灰色#深蓝"
    goods.productsize = "S#M#L#XL"
    goods.issale = 0
    goods.storenums = 194
    goods.review = 0
    goods.coin = 2

    goods.save()

    goodsimg = GoodsImg()
    goodsimg.path = 'img/tshirt_man1/1.jpg'
    goodsimg.goods = goods
    goodsimg.save()

    return HttpResponse(goods.productlongname)


def addcart(request):
    token = request.session.get('token')
    userid = cache.get(token)
    user = User.objects.get(pk=userid)

    descs = request.GET.get('descs')
    sizes = request.GET.get('sizes')
    num = request.GET.get('num')
    goodsid = request.GET.get('goodsid')
    print(descs,sizes,num)

    goods = Goods.objects.get(pk=goodsid)


    try:
        carts = Cart()
        carts.user = user
        carts.good = goods
        carts.desc = descs
        carts.size = sizes
        carts.number = num
        carts.save()

        response_data = {
            'status': 1,
        }
        return JsonResponse(response_data)
    except Exception as e:
        return JsonResponse({'status':-1})