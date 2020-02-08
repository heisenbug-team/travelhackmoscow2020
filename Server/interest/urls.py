from django.urls import path
from .views import InterestView


urlpatterns = [
    path('', InterestView.as_view())
]