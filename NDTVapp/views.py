from django.shortcuts import render
from .models import Newsflash,Story,Topstory,VideoStory
from django.http import HttpResponse
from django.contrib import messages
# import viewsets
from rest_framework import viewsets
 
# import local data
from .serializers import NewsflashSerializer
from .models import Newsflash

def index(request):
    return render(request,'NDTVapp/index.html')

def home(request):
    newsflash=Newsflash.objects.all()
    story=Story.objects.all()
    topstories=Topstory.objects.all()
    VideoStories=VideoStory.objects.all()
    context={
        'newsflash':newsflash,
        'story':story,
        'topstories':topstories,
        'VideoStories':VideoStories,
    }
    
    return render(request,'NDTVapp/home.html',context)

def getdata(request):
    newsflash=Newsflash.objects.all().values()
    return HttpResponse(newsflash)

def add_stories(request):
    if request.method == "POST":
        #topstories=request.POST.get('Topstory')
        #story=request.POST.get('story')
        name=request.POST.get('Name')
        newsid=request.POST.get('Newsid')
        desc=request.POST.get('Desc')
        image=request.FILES['upload']
        
        if 'story' in request.POST:
            messages.info(request, 'You have successfully subscribed to our newslatter.')
            story=Story(Name=name,newsid=newsid,Desc=desc,image=image)
            story.save()   
        
        if 'Topstory' in request.POST:
            messages.info(request, 'You have successfully subscribed to our newslatter.')
            topstory=Topstory(Name=name,newsid=newsid,Desc=desc,image=image)
            topstory.save() 
            
        
        
        
        
        
      
    return render(request,'NDTVapp/addstory.html')



def Test(request):
    return render(request,'NDTVapp/test.html')

def Watch(request):
    return render(request,'NDTVapp/watch.html')


 
# create a viewset
class NewsflashViewSet(viewsets.ModelViewSet):
    # define queryset
    queryset = Newsflash.objects.all()
     
    # specify serializer to be used
    serializer_class = NewsflashSerializer
    
    
    


