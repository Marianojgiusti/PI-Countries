const { Router } = require('express');
// Importar todos los routers;
const Country = require('./RoutesCountry');
const Activity = require('./RoutesActivity.js')

const router = Router();

router.use('/countries', Country);
router.use('/activities', Activity);

module.exports = router;