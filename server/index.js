const express = require('express');
const path = require('path');
const cors = require('cors');
const eventRoutes = require('./routes/events');

// config express
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json({ extended: false }));
app.use(express.static(path.join(__dirname, '../build')));
app.use(cors());

// serve events
app.use('/api/v1/events', eventRoutes);

// serve client files
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// start server
const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${server.address().port}`);
});
