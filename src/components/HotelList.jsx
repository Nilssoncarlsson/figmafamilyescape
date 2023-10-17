import React from 'react';

const HotelList = ({ hotels = [] }) => {
  return (
    <div className="hotel-list">
      {hotels.length === 0 ? (
        <p>No hotels available.</p>
      ) : (
        hotels.map((hotel, index) => (
          <div key={index} className="hotel-item">
            <h2>{hotel.name}</h2>
            <p>Location: {hotel.location}</p>
            <p>Price: ${hotel.price}</p>
            <img src={hotel.imageUrl} alt={hotel.name} width="200" />
            <p>Description: {hotel.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default HotelList;
