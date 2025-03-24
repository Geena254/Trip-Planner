import React, { useState } from "react";

const TripForm = ({ addTrip }) => {
    const [formData, setFormData] = useState({
        currentLocation: "",
        pickupLocation: "",
        dropoffLocation: "",
        currentCycleUsed: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.currentLocation || !formData.pickupLocation || !formData.dropoffLocation || !formData.currentCycleUsed) {
            alert("Please fill in all fields");
            return;
        }
        addTrip(formData);
        setFormData({
            currentLocation: "",
            pickupLocation: "",
            dropoffLocation: "",
            currentCycleUsed: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="currentLocation" placeholder="Current Location" value={formData.currentLocation} onChange={handleChange} required />
            <input type="text" name="pickupLocation" placeholder="Pickup Location" value={formData.pickupLocation} onChange={handleChange} required />
            <input type="text" name="dropoffLocation" placeholder="Dropoff Location" value={formData.dropoffLocation} onChange={handleChange} required />
            <input type="number" name="currentCycleUsed" placeholder="Current Cycle Used (Hrs)" value={formData.currentCycleUsed} onChange={handleChange} required />
            <button type="submit">Add Trip</button>
        </form>
    );
};

export default TripForm;
