# celery.py
from __future__ import absolute_import, unicode_literals
import os
from celery import Celery
from celery.schedules import crontab

# Set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'news_project.settings')

# Create a Celery instance and configure it using the settings from Django.
app = Celery('news_project')

# Load task modules from all registered Django app configs.
app.config_from_object('django.conf:settings', namespace='CELERY')

# Auto-discover tasks in all installed apps.
app.autodiscover_tasks()

# Schedule the periodic task
app.conf.beat_schedule = {
    'update-news-every-minute': {
        'task': 'news_api.task.update_news',
        'schedule': crontab(hour=23),  # Update every hour
    },
}
