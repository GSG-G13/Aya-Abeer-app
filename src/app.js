const express = require('express');

const path = require('path');

const fetchfuc = require('./controllers/fetch');

const router = require('./controllers/index');

const app = express();

const apiKey = process.env.OPENAI_API_KEY;

app.set('PORT', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/data/:name', (req, res) => {
  const promot = req.params.name;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt: `${promot}`,
      temperature: 0,
      max_tokens: 1000,
    }),
  };
  fetchfuc('https://api.openai.com/v1/completions', requestOptions)
    .then((response) => response.json())
    .then((data) => {
      res.json(data.choices[0]);
    })
    .catch((error) => console.log('Error:', error));
});
app.use(router);

module.exports = app;
