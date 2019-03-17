from django.db import models

# Create your models here.
class Carousel(models.Model):
    path = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    class Meta:
        db_table = 'px_carousel'

class User(models.Model):
    name = models.CharField(max_length=100)
    password = models.CharField(max_length=256)
    class Meta:
        db_table = 'px_user'


class Type(models.Model):
    typeid = models.CharField(max_length=10)
    typename = models.CharField(max_length=100)
    class Meta:
        db_table = 'px_type'


class Goods(models.Model):
    productname = models.CharField(max_length=50,null=True)
    productlongname = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10,decimal_places=2)
    ftypeid = models.ForeignKey(Type)  # 父类id，大类id
    ctypeid = models.CharField(max_length=15)  # 子类id

    productdesc = models.CharField(max_length=40,null=True)  # 规格
    productsize = models.CharField(max_length=40,null=True)  # 尺码

    issale = models.IntegerField()
    saletime = models.DateTimeField(null=True,default=None)


    productnum = models.IntegerField(default=0)  # 售出
    storenums = models.IntegerField()  # 库存
    review = models.IntegerField()  # 评论
    coin = models.IntegerField()  # 币

    img = models.CharField(max_length=100,default='')

    class Meta:
        db_table = 'px_goods'

class GoodsImg(models.Model):
    path = models.CharField(max_length=100)
    goods = models.ForeignKey(Goods)
    class Meta:
        db_table = 'px_goodsimg'

class Cart(models.Model):
    user = models.ForeignKey(User)
    good = models.ForeignKey(Goods)
    desc = models.CharField(max_length=50)
    size = models.CharField(max_length=50)
    number = models.IntegerField()
    isselect = models.BooleanField(default=True)
    isdelete = models.BooleanField(default=False)

    class Meta:
        db_table = 'px_cart'

class Order(models.Model):
    user = models.ForeignKey(User)
    createtime = models.DateTimeField(auto_now_add=True)
    updatetime = models.DateTimeField(auto_now=True)
    status = models.IntegerField(default=0)
    identifier = models.CharField(max_length=256)

    class Meta:
        db_table = 'px_order'

class OrderGoods(models.Model):
    order = models.ForeignKey(Order)
    goods = models.ForeignKey(Goods)
    desc = models.CharField(max_length=100,default='')
    size = models.CharField(max_length=100,default='')
    number = models.IntegerField()

    class Meta:
        db_table = 'px_ordergoods'