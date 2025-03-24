import requests
from django.conf import settings

GRAPH_HOPPER_API_KEY = "your_graphhopper_api_key"  # Replace with your actual API key

def get_route(pickup, dropoff):
    url = f"https://graphhopper.com/api/1/route?point={pickup}&point={dropoff}&vehicle=car&key={GRAPH_HOPPER_API_KEY}"
    response = requests.get(url)
    return response.json()

def get_directions(pickup, dropoff):
    return get_route(pickup, dropoff)

def get_distance(pickup, dropoff):
    return get_route(pickup, dropoff)

def get_duration(pickup, dropoff):
    return get_route(pickup, dropoff)

