from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views
from django.contrib.sitemaps.views import sitemap

from website.sitemaps import PostSitemap, StaticViewSitemap

sitemaps = {
    'post_list': StaticViewSitemap,
}

urlpatterns = [
    path("", views.post_list, name='post_list'),
    path("omnie", views.omnie, name='omnie'),
    path('sitemap.xml', sitemap, {'sitemaps' : sitemaps}),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
