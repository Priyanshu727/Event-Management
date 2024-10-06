const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: String,
    date: Date,
    time: String,
    place: String,
    description: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', eventSchema);
