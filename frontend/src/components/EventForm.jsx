import { useState } from 'react';
import { createEvent } from '../services/api'; // Adjust the import based on your API service path

const EventForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [place, setPlace] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        const eventData = {
            name,
            description,
            date,
            time,
            place,
        };

        try {
            const token = localStorage.getItem('token'); // Get the token from local storage
            await createEvent(eventData, token); // Pass the token to the createEvent function
            setMessage('Event created successfully!');
            // Reset form fields
            setName('');
            setDescription('');
            setDate('');
            setTime('');
            setPlace('');
        } catch (err) {
            setError('Failed to create event. Please try again.');
            console.error(err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-semibold text-center mb-6">Create Event</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Event Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <textarea
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex space-x-2">
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Place"
                            value={place}
                            onChange={(e) => setPlace(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Create Event
                    </button>

                    {message && <p className="text-green-500 text-center mt-2">{message}</p>}
                    {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default EventForm;
