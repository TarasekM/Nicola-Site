from django.contrib import admin
from .models import Post
from .models import Categories
from .models import Omnie
from .models import Kontakt
# Register your models here.

admin.site.register(Post)
admin.site.register(Categories)
admin.site.register(Omnie)
admin.site.register(Kontakt)
