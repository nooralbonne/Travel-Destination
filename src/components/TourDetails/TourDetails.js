import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import './TourDetails.css'; // Make sure this file exists and contains relevant styling

const toursData = require('../../data/db.json');

function TourDetails() {
    let { id } = useParams();
    let selectTour = toursData.find(tour => tour.id === id);
    const { name, info, image, price } = selectTour;
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    }

    return (
        <div className="tour-details-container">
            <Card className="card">
                <Card.Title className="tour-id">Tour ID: {id}</Card.Title>
                <Card.Img variant="top" src={image} alt={name} style={{ width: '250px', height: '150px' }} />
                <Card.Body>
                    <Card.Title>Tour name: {name} </Card.Title>
                    <Card.Text>
                        {showMore ? info : `${info.substring(0, 120)}...`}
                    </Card.Text>
                    <a href="#" className="see-more-link" onClick={toggleShowMore}>
                        {showMore ? "See Less.." : "See More.."}
                    </a>
                    <Card.Text>Tour price: {price} </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default TourDetails;
