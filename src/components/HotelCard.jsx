import React from 'react';

const HotelCard = ({ hotel }) => {
    return (
        <div className="hotel-card">
            <img src={hotel.image} alt={hotel.name} />
            <h3>{hotel.name}</h3>
            <p>{hotel.description}</p>
            // ... other hotel details
        </div>
    );
};

export default HotelCard;
