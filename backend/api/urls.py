from django.urls import path
from . import views

urlpatterns = [
    path("boards/", views.BoardListCreate.as_view(), name="board-list"),
    path("boards/delete/<int:pk>/", views.BoardDelete.as_view(), name="delete-board")
]