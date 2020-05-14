const express = require('express');
const eventController = require('../controller/events.controller');

const router = express.Router();

router.get('/', eventController.getEventsHandler);
router.get('/from/:startDate/to/:endDate', eventController.getRangeEventsHandler);
router.post('/', eventController.createEventHandler);
router.post('/:id', eventController.updateEventHandler);
router.delete('/:id', eventController.deleteEventHandler);
router.delete('/', eventController.deleteAllEventHandler);
module.exports = router;
