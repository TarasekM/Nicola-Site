from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from .models import Post
from .models import Categories
from .models import Omnie
from .models import Kontakt
# Create your views here.
def post_list(request):
    post_list = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    categories = Categories.objects.order_by('name')
    return render(request, 'website/main.html',{'post_list':post_list,"categories":categories})

def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'website/post_detail.html', {'post':post})

def omnie(request):
    opis = Omnie.objects.order_by('id')
    kontakt = Kontakt.objects.order_by('id')
    return render(request, 'website/o_mnie.html', {'omnie':opis,"kontakt":kontakt})
