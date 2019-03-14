from django.conf.urls import url

from pc import views

urlpatterns = [
   url(r'^$', views.index, name='index'),

]