const express = require('express');
const eventController = require('../controller/events');
const delay = require('../middlewares/delay');
const loadDb = require('../middlewares/db');

const router = express.Router();

router.use(delay(100));
router.use(loadDb);

router.get('/', eventController.getEventsHandler);
router.get('/from/:startDate/to/:endDate', eventController.getRangeEventsHandler);
router.post('/', eventController.createEventHandler);
router.post('/:id', eventController.updateEventHandler);

// special endpoint to delete all
router.delete('/all', eventController.deleteAllEventHandler);

router.delete('/:id', eventController.deleteEventHandler);
router.delete('/', eventController.deleteRangeEventHandler);


module.exports = router;
