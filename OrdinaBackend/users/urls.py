from django.urls import path
from .views import register
from .views import CustomTokenView
from .views import change_password

urlpatterns = [
    path('register/', register),
    path('login/', CustomTokenView.as_view()),
    path('change-password/', change_password),
]