# Generated by Django 5.0.1 on 2024-01-26 16:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('news_api', '0004_rename_image_url_news_urltoimage_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='news',
            old_name='published_at',
            new_name='publishedAt',
        ),
    ]