from django.db import models
from django.utils import timezone
from django.urls import reverse


class Categories(models.Model):
    name = models.CharField(max_length=32)

    def __str__(self):
        return self.name

class Post(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)
    image = models.ImageField(upload_to='images/')
    category = models.ForeignKey(Categories, on_delete=models.CASCADE, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('post_list')

class SingletonModel(models.Model):

    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        self.pk = 1
        super(SingletonModel, self).save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        pass

    @classmethod
    def load(cls):
        obj, created = cls.objects.get_or_create(pk=1)
        return obj

class Omnie(SingletonModel):
    title = models.CharField(max_length=200)
    text = models.TextField()
    profilowe = models.ImageField(upload_to='images/')

class Kontakt(SingletonModel):
    nr_tel = models.CharField(max_length=20,blank=True, null=True)
    email = models.CharField(max_length=50,blank=True, null=True)
    adres = models.TextField()
    facebook = models.CharField(max_length=200,default='facebook.com')
    instagram = models.CharField(max_length=200,default='instagram.com')
