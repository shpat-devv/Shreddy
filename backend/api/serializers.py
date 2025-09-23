from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Board

#TODO: understand serializers
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    

class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        fields = ["id", "name", "age", "owner"]
        extra_kwargs = {"owner": {"read_only": True}}