from django.db import models
from django.contrib.auth.models import User


class Interest(models.Model):
    Interest_name = models.CharField('Название интереса', max_length=50)
    Interest_user = models.ManyToManyField(User)


    def __str__(self):
        return self.Interest_name
