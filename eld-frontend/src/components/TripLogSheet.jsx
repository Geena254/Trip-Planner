import React from "react";

const TripLogSheet = ({ trips }) => {
    return (
        <div>
            <h3>Trip Log Sheet</h3>
            {trips.length === 0 ? <p>No trips added yet.</p> : (
                <ul>
                    {trips.map((trip, index) => (
                        <li key={index}>
                            {trip.date}: {trip.startLocation} → {trip.destination}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TripLogSheet;
