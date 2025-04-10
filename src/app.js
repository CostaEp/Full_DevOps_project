const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello : Full DevOps Portfolio Project — Architecture & Planning' });
  });

module.exports = app;