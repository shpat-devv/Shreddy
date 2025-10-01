from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Setting

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user
    

class SettingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Setting
        fields = ["pfp_url", "bio", "country", "birthday", "show_location", "allow_adds", "username"]
        extra_kwargs = {"username": {"read_only": True}}
    def create(self, validated_data):
        setting = Setting.objects.create(**validated_data)
        return setting