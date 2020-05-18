const moment = require('moment');
const uniqid = require('uniqid');

const isInvalid = (event) => !event.startDate
  || !event.endDate
  || !moment(event.startDate).isValid
  || !moment(event.endDate).isValid;

const delay = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

// GET events/id
const getEvent = (req, id) => {
  const index = req.db.events.findIndex((event) => event.id === id);
  return [req.db.events[index], index];
};

// GET events/
const getEventsHandler = async (req, res) => res.json(req.db.events);

// GET events/from/2020-01-01/to/2020/02-31
const getRangeEventsHandler = async (req, res) => {
  const startDate = moment(req.params.startDate).startOf('day');
  const endDate = moment(req.params.endDate).endOf('day');

  return res.json(req.db.events.filter((event) => {
    const t = moment(event.startDate);
    return t >= startDate && t <= endDate;
  }));
};

// POST events/  BODY: data of the event to create
const createEventHandler = async (req, res) => {
  const event = { ...req.body, id: uniqid() };
  if (isInvalid(event)) {
    return res.status(500).send('Invalid');
  }

  if (event.city === 'Roma') {
    await delay(4000);
  } else if (event.city === 'Barcelona') {
    return res.status(400).send('Invalid city');
  }

  req.db.events.push(event);
  await req.persistDb();
  return res.json(event);
};

// POST events/id  BODY: data of the event to create
const updateEventHandler = async (req, res) => {
  const newEvent = req.body;
  if (isInvalid(newEvent)) {
    return res.status(500).send('Invalid');
  }

  const [event, i] = getEvent(req, req.params.id);
  if (!event) {
    return res.status(404).send('Not found');
  }

  if (event.city === 'Roma') {
    await delay(4000);
  } else if (event.city === 'Barcelona') {
    return res.status(400).send('Invalid city');
  }

  const value = { ...event, ...newEvent };
  req.db.events[i] = value;
  await req.persistDb();
  return res.json(value);
};

// DELETE events/id
const deleteEventHandler = async (req, res) => {
  const [event] = getEvent(req, req.params.id);
  if (!event) {
    return res.status(404).send('Not found');
  }
  req.db.events = req.db.events.filter((item) => event !== item);
  await req.persistDb();
  return res.json({ status: 'OK' });
};

// DELETE events/all
const deleteAllEventHandler = async (req, res) => {
  req.db.events = [];
  await req.persistDb();
  return res.json({ status: 'OK' });
};

// DELETE events/2013-02-12
const deleteRangeEventHandler = async (req, res) => {
  const { date } = req.query;
  req.db.events = req.db.events.filter((item) => !item.startDate.startsWith(date));
  await req.persistDb();
  return res.json({ status: 'OK' });
};

module.exports = {
  getEventsHandler,
  getRangeEventsHandler,
  createEventHandler,
  updateEventHandler,
  deleteEventHandler,
  deleteAllEventHandler,
  deleteRangeEventHandler
};
