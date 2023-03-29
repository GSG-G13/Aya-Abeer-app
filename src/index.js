require('dotenv').config();

const app = require('./app');

app.listen(app.get('PORT'), () => {
  console.log(`Listening on port http://localhost:${app.get('PORT')}`);
});
