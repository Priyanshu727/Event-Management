// import React from 'react';cd
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes

const EventCard = ({ event }) => {
    if (!event) {
        return <div>Event not found</div>; // Handle missing event
    }

    const { name, description, date, place, id } = event;

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <h3 className="text-xl font-semibold text-red-800">{name}</h3>
            <p className="text-gray-600">{description || 'No description available'}</p>
            <p className="text-gray-600">{new Date(date).toLocaleDateString() || 'Invalid date'}</p>
            <p className="text-gray-600">{place}</p>
            <Link to={`/events/${id}`} className="text-blue-500 hover:underline">
                View Details
            </Link>
        </div>
    );
};

// Define PropTypes for the EventCard component
EventCard.propTypes = {
    event: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        date: PropTypes.string.isRequired,
        place: PropTypes.string.isRequired,
    }).isRequired,
};

export default EventCard;
