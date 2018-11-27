from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path("", views.post_list, name='post_list'),
    path("omnie", views.omnie, name='omnie'),
    path("kontakt", views.omnie, name='kontakt'),
    path("post/<int:pk>/", views.post_detail, name='post_detail'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
