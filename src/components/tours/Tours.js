import React from 'react';
import { Link } from 'react-router-dom';
import './Tours.css';
import Tour from './tour/Tour';
const toursData = require('../../data/db.json');

function Tours(props) {
    return (
        <div className="tours-container">
            {toursData.map((tour) => (
                <Link to={`/city/${tour.id}`} key={tour.id} style={{  textDecoration: 'none' }}> 
                <Tour TourID={tour.id} 
                TourName={tour.name} 
                TourImage={tour.image}
                Tourinfo={tour.info}
                Tourprice={tour.price} />
                </Link>
            ))}
        </div>
    );
}

export default Tours;
