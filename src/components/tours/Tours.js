import './Tours.css';

function Tours(props) {
    return (
        <div className="tours-container">
            <h3>{props.TourName}</h3>
            <img src={props.TourImage} alt={props.TourImage} />
        </div>
    );
}

export default Tours;
