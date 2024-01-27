from django.urls import path
from .views import AllNewsView,SearchNewsView,TrrigerApiNews


urlpatterns = [


    path('api/all-news/', AllNewsView.as_view(), name='all-news'),
    path('api/search-news/', SearchNewsView.as_view(), name='search-news'),
    path('api/trigger',TrrigerApiNews.as_view(),name='trigger')
 
   

]