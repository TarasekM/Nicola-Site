from django.db import models
from django.utils import timezone

class Post(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)
    image = models.ImageField(upload_to='images/')

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def read_more_string(self):
        if len(self.text) >= 25:
            return ("%s... ")%self.text[:100]
        return self.text

    def __str__(self):
        return self.title
