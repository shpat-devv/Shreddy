from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, SettingSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Setting

'''
class BoardListCreate(generics.ListCreateAPIView):
    serializer_class = BoardSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Board.objects.filter(owner=user)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(owner=self.request.user)
        else: 
            print(f"Error: {serializer.errors}")


class BoardDelete(generics.DestroyAPIView):
    serializer_class = BoardSerializer
    permission_classes = IsAuthenticated

    def get_queryset(self):
        user = self.request.user
        return Board.objects.filter(owner=user)
''' 

class SettingCreate(generics.ListCreateAPIView):
    serializer_class = SettingSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Setting.objects.filter(username=user)
    
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(username=self.request.user)
        else:
            print(f"Error: {serializer.errors}")


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]






