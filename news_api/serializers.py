# your_app/serializers.py
from rest_framework import serializers
from .models import News

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'

    def to_representation(self, instance):
        # Get the serialized representation of the instance
        representation = super().to_representation(instance)
        
        # Exclude empty fields from the representation
        return {key: value for key, value in representation.items() if value}

