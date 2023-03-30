require('dotenv').config();

const app = require('./app');

app.listen(3000, () => {
  // eslint-disable-next-line quotes
  console.log(`Listening on port http://localhost:3000`);
});
