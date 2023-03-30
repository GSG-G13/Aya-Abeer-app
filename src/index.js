require('dotenv').config();

const app = require('./app');

app.listen(3000, () => {
  console.log(`Listening on port http://localhost:${app.get('PORT')}`);
});
