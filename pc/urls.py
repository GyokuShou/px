from django.conf.urls import url

from pc import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^register/$', views.register, name='register'),
    url(r'^checkname/$', views.checkname, name='checkname'),
    url(r'^logout/$', views.logout, name='logout'),
    url(r'^login/$', views.login, name='login'),
    url(r'^getvericode/$', views.getvericode, name='getvericode'),
    url(r'^cart/$', views.cart, name='cart'),
    url(r'^goodsinfo/(?P<goodsid>\d+)/$', views.goodsinfo, name='goodsinfo'),
    url(r'^addcart/$', views.addcart, name='addcart'),
    url(r'^jump/$', views.jump, name='jump'),
    url(r'^modicartselect/$', views.modicartselect, name='modicartselect'),
    url(r'^modicartnum/$', views.modicartnum, name='modicartnum'),
    url(r'^delselectcart/$', views.delselectcart, name='delselectcart'),
    url(r'^generateorder/$', views.generateorder, name='generateorder'),
    url(r'^orderdetail/(?P<identified>\d+)/$', views.orderdetail, name='orderdetail'),
    url(r'^orderlist/$', views.orderlist, name='orderlist'),

    url(r'^makegoods/$', views.makegoods, name='makegoods'),
]
