const fetch = require('node-fetch');

const fetchfunc = (url, options) => fetch(url, options);

module.exports = fetchfunc;
