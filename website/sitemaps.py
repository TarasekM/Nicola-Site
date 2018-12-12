from django.contrib.sitemaps import Sitemap
from website.models import Post
from django.shortcuts import reverse

class PostSitemap(Sitemap):
    def items(self):
        return Post.objects.all()

class StaticViewSitemap(Sitemap):
    def items(self):
        return['post_list','omnie']

    def location(self,item):
        return reverse(item)
