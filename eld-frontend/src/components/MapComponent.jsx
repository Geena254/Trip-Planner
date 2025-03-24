import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MAP_CENTER = [0.0, 0.0]; // Default center, update as needed

const MapComponent = ({ trips }) => {
    const [route, setRoute] = useState([]);

    useEffect(() => {
        if (trips.length > 0) {
            const { pickupLocation, dropoffLocation } = trips[trips.length - 1]; // Get latest trip
            fetchRoute(pickupLocation, dropoffLocation);
        }
    }, [trips]);

    const fetchRoute = async (pickup, dropoff) => {
        try {
            const response = await fetch(
                `https://graphhopper.com/api/1/route?point=${pickup}&point=${dropoff}&profile=car&locale=en&key=ecec7162-ad42-41dd-9397-dfd51e799eac`
            );
            const data = await response.json();

            if (data.paths && data.paths.length > 0) {
                const coordinates = data.paths[0].points.coordinates.map(([lng, lat]) => [lat, lng]);
                setRoute(coordinates);
            }
        } catch (error) {
            console.error("Error fetching route from GraphHopper:", error);
        }
    };

    return (
        <MapContainer center={MAP_CENTER} zoom={10} style={{ height: "400px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {route.length > 0 && <Polyline positions={route} color="blue" />}
        </MapContainer>
    );
};

export default MapComponent;
