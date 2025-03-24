from rest_framework import generics
from .models import Trip
from .serializers import TripSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from .utils import get_route

class TripListCreateView(generics.ListCreateAPIView):
    queryset = Trip.objects.all()
    serializer_class = TripSerializer

class RouteView(APIView):
    def get(self, request):
        pickup = request.query_params.get('pickup')
        dropoff = request.query_params.get('dropoff')

        if not pickup or not dropoff:
            return Response({"error": "Pickup and dropoff locations are required"}, status=400)

        route_data = get_route(pickup, dropoff)
        return Response(route_data)