from rest_framework import serializers
from django.contrib.auth.models import User



class InterestSerializer(serializers.Serializer):
    Interest_name = serializers.CharField(max_length=50)
