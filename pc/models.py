from django.db import models

# Create your models here.
class Carousel(models.Model):
    path = models.CharField(max_length=100)
    name = models.CharField(max_length=100)

class User(models.Model):
    name = models.CharField(max_length=100)
    password = models.CharField(max_length=256)

