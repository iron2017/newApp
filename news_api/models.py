from django.db import models
from rest_framework import serializers

class News(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=255)
    description = models.TextField(null=True,blank=True)
    author = models.CharField(max_length=100, null=True, blank=True)
    publishedAt = models.DateTimeField(null=True, blank=True)
    url = models.URLField(max_length=255, null=True, blank=True)
    urlToImage = models.URLField(max_length=255, null=True, blank=True)
   
    # Add other necessary fields

    def __str__(self):
        return self.title
  
