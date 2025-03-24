from django.urls import path
from .views import TripListCreateView, RouteView

urlpatterns = [
    path('trips/', TripListCreateView.as_view(), name='trip-list-create'),
    path('route/', RouteView.as_view(), name='route'),
]
