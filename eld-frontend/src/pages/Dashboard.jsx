import React, { useState } from "react";
import TripForm from "../components/TripForm";
import TripLogSheet from "../components/TripLogSheet";
import MapComponent from "../components/MapComponent";

const Dashboard = () => {
    const [trips, setTrips] = useState([]);

    const addTrip = (trip) => {
        setTrips([...trips, trip]);
    };

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <TripForm addTrip={addTrip} />
            <TripLogSheet trips={trips} />
            <MapComponent trips={trips} />
        </div>
    );
};

export default Dashboard;
