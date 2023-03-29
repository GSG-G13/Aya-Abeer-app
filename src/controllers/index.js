const express = require('express');

const router = express.Router();

const routers = require('./router');
const routerError = require('./error');

router.use(routers);
router.use(routerError);

module.exports = router;
