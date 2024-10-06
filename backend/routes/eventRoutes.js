const express = require('express');
const router = express.Router();
const { getAllEvents, createEvent, getEventById } = require('../controllers/eventController'); 
const authMiddleware = require('../middlewares/authMiddlerware');


router.get('/', getAllEvents);


router.post('/', authMiddleware, createEvent);

router.get('/:id',authMiddleware, getEventById); 

module.exports = router;
