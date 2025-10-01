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

class UserSettingView(generics.RetrieveUpdateAPIView, generics.CreateAPIView):
    serializer_class = SettingSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        obj, created = Setting.objects.get_or_create(username=self.request.user )
        return obj


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]






