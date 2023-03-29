const express = require('express');

const path = require('path');

const routers = express.Router();

routers.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
});

routers.get('/data', (request, response) => {
  response.sendFile(path.join(__dirname, '..', '..', 'public', 'chat.html'));
});

module.exports = routers;
