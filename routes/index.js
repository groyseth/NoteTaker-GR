// const express = require('express');

// // Import our modular routers for /tips and /feedback
// const noteRouter = require('./notes');
// // const feedbackRouter = require('./feedback');

// const app = express();

// app.use('/notes', noteRouter);
// // app.use('/feedback', feedbackRouter);

// module.exports = app;

const router = require('express').Router();
const apiRoutes = require('./notes.js')

router.use('/api', apiRoutes)

module.exports = router