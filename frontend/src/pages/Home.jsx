// import React from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';

// Sample data for events
const events = [
    {
        id: 1,
        name: 'Music Concert',
        date: 'October 10, 2024',
        time: '6:00 PM',
        place: 'City Hall',
    },
    {
        id: 2,
        name: 'Art Exhibition',
        date: 'October 15, 2024',
        time: '4:00 PM',
        place: 'Art Gallery',
    },
    {
        id: 3,
        name: 'Tech Conference',
        date: 'October 20, 2024',
        time: '9:00 AM',
        place: 'Convention Center',
    },
];

const Home = () => {
    return (
        <div
            className="mx-auto p-6 flex flex-col items-center justify-center"
            style={{
                backgroundImage: 'url(./bg.jpeg)', // Replace with your image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                height: '100vh', // Full viewport height
            }}
        >
            <div className="bg-black bg-opacity-50 p-6 rounded-lg mb-6 w-full max-w-4xl">
                <h1 className="text-3xl font-bold mb-6 text-center text-white">Upcoming Events</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map(event => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
                <Link to="/create-event" className="mt-6 flex justify-center">
                    <button className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-md transition duration-300">
                        Create an Event
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
