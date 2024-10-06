const Event = require('../models/Event');

exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createEvent = async (req, res) => {
    const { name, date, time, place, description } = req.body;
    try {
        const event = new Event({ name, date, time, place, description });
        await event.save();
        res.status(201).json(event);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get event by ID
exports.getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: 'Event not found' });
        res.json(event);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
