# Generated by Django 5.0.1 on 2024-01-23 19:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news_api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='id',
            field=models.BigAutoField(primary_key=True, serialize=False),
        ),
    ]
