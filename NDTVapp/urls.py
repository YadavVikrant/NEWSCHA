from django.contrib import admin
from django.urls import path
from . import views
from rest_framework import routers
 
# import everything from views

urlpatterns = [
    path('', views.index, name='index'),
    path('home/', views.home, name='home'),
    path('getdata/', views.getdata, name='getdata'),
    path('addstory/', views.add_stories, name='add_stories'),
    path('test/', views.Test, name='Test'),
    path('watch/', views.Watch, name='Watch'),
    # path('api', NewsflashViewSet.as_view()),
    
]
