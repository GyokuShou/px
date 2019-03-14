from django.conf.urls import url

from pc import views

urlpatterns = [
   url(r'^$', views.index, name='index'),
   url(r'^register/$', views.register, name='register'),
   url(r'^checkname/$', views.checkname, name='checkname'),
   url(r'^logout/$', views.logout, name='logout'),
   url(r'^login/$', views.login, name='login'),
   url(r'^getvericode/$', views.getvericode, name='getvericode'),
]