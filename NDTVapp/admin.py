from django.contrib import admin
from .models import Newsflash,Story,Topstory,VideoStory


admin.site.site_header="NDTV.com"
admin.site.site_title="NDTV APP"
admin.site.index_title="NDTV INTRANET"

class NewsflashAdmin(admin.ModelAdmin):
    list_display = ('newsid','Name','Desc')
    search_fields =('Name',)
    
class StoryAdmin(admin.ModelAdmin):
    list_display = ('newsid','Name','Desc','image')
    search_fields =('Name',)
    
class TopstoryAdmin(admin.ModelAdmin):
    list_display = ('newsid','Name','Desc','image')
    search_fields =('Name',)
    
class VideoStoryAdmin(admin.ModelAdmin):
    list_display = ('Videoid','caption','video')
    search_fields =('caption',)

admin.site.register(Topstory,TopstoryAdmin)
admin.site.register(Newsflash,NewsflashAdmin)
admin.site.register(Story,StoryAdmin)
admin.site.register(VideoStory,VideoStoryAdmin)

# Register your models here.
