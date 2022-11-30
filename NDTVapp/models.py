from django.db import models

# Create your models here.
class Newsflash(models.Model):
    
    #string represent method
    def __str__(self):
        return self.Name
     #string represent method
    newsid=models.IntegerField()
    Name=models.CharField(max_length=1000)
    Desc = models.CharField(max_length=10000)
    
    
class Story(models.Model):
    
    #string represent method
    def __str__(self):
        return self.Name
     #string represent method
    newsid=models.IntegerField()
    Name=models.CharField(max_length=1000)
    Desc = models.CharField(max_length=10000)
    image=models.ImageField(blank=True,upload_to="images")
    
    
class Topstory(models.Model):
    
    #string represent method
    def __str__(self):
        return self.Name
     #string represent method
    newsid=models.CharField(max_length=500)
    Name=models.CharField(max_length=1000)
    Desc = models.CharField(max_length=10000)
    image=models.ImageField(blank=True,upload_to="images")
    
 
class VideoStory(models.Model):
    
    Videoid=models.CharField(max_length=500)
    caption=models.CharField(max_length=200)
    video=models.FileField(upload_to="Video")
    
    def __str__(self):
        return self.caption




        
        
       
