// src/services/api.js

import axios from 'axios';

// Define the base URL for your API
const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8082/api';

// Create an Axios instance
const api = axios.create({
    baseURL: apiUrl,
});

// Example function to fetch events
export const fetchEvents = async () => {
    const response = await api.get('/events');
    return response.data;
};

// Example function to create an event
export const createEvent = async (eventData) => {
    const response = await api.post('/events', eventData);
    return response.data;
};

// Export the Axios instance as the default export
export default api;
