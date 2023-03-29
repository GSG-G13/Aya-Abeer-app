/* eslint-disable no-unused-vars */
const express = require('express');

const routerError = express.Router();

const path = require('path');

routerError.use((req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, '..', '..', 'public', '404.html'));
});

routerError.use((err, req, res, next) => {
  res
    .status(500)
    .sendFile(path.join(__dirname, '..', '..', 'public', '500.html'));
});

module.exports = routerError;
