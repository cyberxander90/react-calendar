const moment = require('moment');
const fs = require('fs');
const path = require('path');
const uniqid = require('uniqid');

let db;

const loadDb = async () => {
  db = JSON.parse(await fs.readFileSync(path.join(__dirname, '../db.json')));
  if (!db) {
    db = {};
  }
  if (!db.events) {
    db.events = [];
  }
};

const persistDb = () => {
  const data = JSON.stringify(db);
  return fs.writeFileSync(path.join(__dirname, '../db.json'), data);
};

const isInvalid = (event) => !event.startDate
  || !event.endDate
  || !moment(event.startDate).isValid
  || !moment(event.endDate).isValid;

const getEvent = (id) => {
  const index = db.events.findIndex((event) => event.id === id);
  return [db.events[index], index];
};

const getEventsHandler = async (req, res) => {
  await loadDb();
  return res.json(db.events);
};

const getRangeEventsHandler = async (req, res) => {
  await loadDb();

  const startDate = moment(req.params.startDate).startOf('day');
  const endDate = moment(req.params.endDate).endOf('day');

  return res.json(db.events.filter((event) => {
    const t = moment(event.startDate);
    return t >= startDate && t <= endDate;
  }));
};

const createEventHandler = async (req, res) => {
  await loadDb();

  const event = { ...req.body, id: uniqid() };
  if (isInvalid(event)) {
    return res.status(500).send('Invalid');
  }

  db.events.push(event);
  persistDb();
  return res.json(event);
};

const updateEventHandler = async (req, res) => {
  await loadDb();

  const newEvent = req.body;
  if (isInvalid(newEvent)) {
    return res.status(500).send('Invalid');
  }

  const [event, i] = getEvent(req.params.id);
  if (!event) {
    return res.status(404).send('Not found');
  }

  const value = { ...event, ...newEvent };
  db.events[i] = value;
  persistDb();
  return res.json(value);
};

const deleteEventHandler = async (req, res) => {
  await loadDb();

  const [event] = getEvent(req.params.id);
  if (!event) {
    return res.status(404).send('Not found');
  }
  db.events = db.events.filter((item) => event !== item);

  persistDb();
  return res.json({ status: 'OK' });
};

const deleteAllEventHandler = async (req, res) => {
  await loadDb();

  const { date } = req.query;
  db.events = db.events.filter((item) => !item.startDate.startsWith(date));

  persistDb();
  return res.json({ status: 'OK' });
};

module.exports = {
  getEventsHandler,
  getRangeEventsHandler,
  createEventHandler,
  updateEventHandler,
  deleteEventHandler,
  deleteAllEventHandler
};
