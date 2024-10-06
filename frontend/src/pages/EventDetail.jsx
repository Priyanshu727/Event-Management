import { useEffect, useState } from 'react';
import { fetchEvents } from '../services/api';

const EventDetail = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const loadEvents = async () => {
            try {
                const fetchedEvents = await fetchEvents();
                setEvents(fetchedEvents);
            } catch (error) {
                console.error('Error loading events:', error);
            }
        };

        loadEvents();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Event Details</h1>
            {events.length > 0 ? (
                events.map((event) => (
                    <div key={event._id} className="bg-white shadow-md rounded-lg p-6 mb-4 max-w-md w-full">
                        <h2 className="text-2xl font-semibold mb-2">{event.name}</h2>
                        <p className="text-gray-700 mb-1"><strong>Description:</strong> {event.description}</p>
                        <p className="text-gray-600 mb-1"><strong>Date:</strong> {event.date}</p>
                        <p className="text-gray-600 mb-1"><strong>Time:</strong> {event.time}</p>
                        <p className="text-gray-600"><strong>Place:</strong> {event.place}</p>
                    </div>
                ))
            ) : (
                <p className="text-gray-500">No events found.</p>
            )}
        </div>
    );
};

export default EventDetail;
