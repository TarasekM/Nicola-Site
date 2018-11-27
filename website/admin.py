from django.contrib import admin
from .models import Post
from .models import Categories
from .models import Omnie
# Register your models here.

admin.site.register(Post)
admin.site.register(Categories)
admin.site.register(Omnie)
