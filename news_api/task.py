# tasks.py
from celery import shared_task
@shared_task
def fetch_and_save_news(manual_trigger=False):
    
    from django.utils import timezone
    from django.db import transaction
    from .models import News
    import requests
    # Fetch the latest news from the API
    api_key = '17176e3b5aa64cd48593800cc71c01dd'
   
    url = f'https://newsapi.org/v2/top-headlines?apiKey={api_key}&country=us'
    response = requests.get(url)
    news_data = response.json().get('articles', [])

    # Save only new news to the database
    with transaction.atomic():
            for article in news_data:
                title = article.get('title', '')
                description = article.get('description', '') if 'description' in article else ''
        
        # Check if the news article already exists in the database
    
            # Save only new news
            News.objects.create(
                title=title,
                description=description,
                # Add other necessary fields
            )
@shared_task
def update_news():
   
   from django.utils import timezone
   from django.db import transaction
   from .models import News 
   import requests
   with transaction.atomic():
            News.objects.all().delete()
   api_key = '17176e3b5aa64cd48593800cc71c01dd'
   url = f'https://newsapi.org/v2/top-headlines?apiKey={api_key}&country=us'
   response = requests.get(url)
   news_data = response.json().get('articles', [])
    # Save only new news to the database
   
   for article in news_data:
                title = article.get('title', '')
                description = article.get('description', '') if 'description' in article else ''
                News.objects.create(
                                    title=title,
                                     description=description,
                # Add other necessary fields
                                            )