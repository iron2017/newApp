# your_app/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.request import Request
from django.db.models import Q 
from .models import News
from .serializers import NewsSerializer  # Create a serializer for the News model
from django.db import transaction
from rest_framework.pagination import PageNumberPagination
from .models import News
import requests
from django.views.decorators.cache import cache_page

class TrrigerApiNews(APIView):
 @cache_page(60 * 15)
 def get(self, request):
    
    with transaction.atomic():
            News.objects.all().delete()
    # Fetch the latest news from the API
    api_key = '17176e3b5aa64cd48593800cc71c01dd'
   
    url = f'https://newsapi.org/v2/top-headlines?apiKey={api_key}&country=us'
    response = requests.get(url)
    news_data = response.json().get('articles', [])

    # Save only new news to the database
    
    for article in news_data:
            title = article.get('title', '')
            description = article.get('description', '') if 'description' in article else ''
            publishedAt = article.get('publishedAt', '')
            urlToImage = article.get('urlToImage', '') if 'urlToImage' in article else ''
            url = article.get('url', '') if 'url' in article else ''

            News.objects.create(
                title=title,
                description=description,
                publishedAt=publishedAt,
                urlToImage=urlToImage,
                url=url
            )
    return Response(response, status=status.HTTP_200_OK)

class AllNewsView(APIView):
    def get(self, request):
        page_size = request.query_params.get('page_size', 9)  # Default page size is 10
        
        paginator = PageNumberPagination()
        paginator.page_size = page_size

        all_news = News.objects.all()
        result_page = paginator.paginate_queryset(all_news, request)
        serializer = NewsSerializer(result_page, many=True)
        
        return paginator.get_paginated_response(serializer.data)
class SearchNewsView(APIView):
    def get(self, request):
        # Get the search query from the request parameters
        query = request.query_params.get('q', '')
        pageSize = request.query_params.get('pageSize', '')
        page = request.query_params.get('page', '')
        # If the query is empty, return a response with a message
        if not query:
            return Response({'detail': 'Please provide a search query'}, status=status.HTTP_400_BAD_REQUEST)

        # Make a request to the News API
        api_key = '17176e3b5aa64cd48593800cc71c01dd'
        url = f'https://newsapi.org/v2/everything?q={query}&apiKey={api_key}&pageSize={pageSize}&page={page}'
        response = requests.get(url)

        # Check if the request was successful (status code 200)
        if response.status_code == 200:
            # Parse the JSON response
            search_results = response.json().get('articles', [])
            return Response(search_results, status=status.HTTP_200_OK)
        else:
            # Return an error response if the API request fails
            return Response({'detail': 'Failed to retrieve search results'}, status=response.status_code)

    
   