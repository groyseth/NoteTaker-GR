const router = require('express').Router();
const apiRoutes = require('./notes.js')

router.use('/api', apiRoutes)

module.exports = router