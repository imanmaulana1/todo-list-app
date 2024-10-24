const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const tasksRouter = require('./routes/tasks');

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan('dev'));

app.use('/api/tasks/', tasksRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: 'Not found' });
});

module.exports = app;
