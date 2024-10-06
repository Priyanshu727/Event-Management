const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const cors = require('cors');

// const mongoose = require('mongoose');


dotenv.config();

const app = express();
connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.post('/api/events', eventRoutes);


// Start the server
const PORT = process.env.PORT || 8082;

app.listen(PORT, (err) => {
    if (err) {
        console.log(err, "server is not started");
    } else {
        console.log(`listening on port: http://localhost:${PORT}`);
    }
});
