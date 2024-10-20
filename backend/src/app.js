const express = require('express');
const morgan = require('morgan');

const tasksRouter = require('./routes/tasks');

const app = express();

app.use(express.json());

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

app.use('/api/tasks/', tasksRouter);

module.exports = app;
