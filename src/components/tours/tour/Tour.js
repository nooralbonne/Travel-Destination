import React from 'react';
import './Tour.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom'; // Import Link component

function Tour(props) {
    return (
        <CardGroup>
            <Card className="tour-card-inner">
                <Card.Title className="tour-id">Tour ID: {props.TourID}</Card.Title>
                <Card.Img variant="top" src={props.TourImage} alt={props.TourName} style={{ width: '250px', height: '150px' }} />
                <Card.Body>
                    <Card.Title>Tour Name: {props.TourName}</Card.Title>
                    <Card.Text>
                    Discover the beauty and charm of Europe with our carefully crafted tours, designed to immerse you in the rich history, stunning landscapes, and vibrant cultures of each destination.
                    </Card.Text>
                    {/* Link to show more details about the city */}
                    <Link to={`/city/${props.TourID}`} className="btn btn-primary">View Details</Link>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
}
export default Tour;
