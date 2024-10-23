const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const tasksRouter = require('./routes/tasks');

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

// app.use('/api/tasks/completed', (req, res) => {
//   res.status(200).json({ message: 'All aaaaaatasks marked as completed' });
// });

app.use('/api/tasks/', tasksRouter);

module.exports = app;
