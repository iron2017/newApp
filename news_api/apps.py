from django.apps import AppConfig
from django.db.models.signals import post_migrate
from django.dispatch import receiver
from news_api.task import fetch_and_save_news


class NewsApiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'news_api'
   
