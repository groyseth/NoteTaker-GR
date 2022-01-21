const router = require('express').Router();
const db = require("../db/db.json");
// const noter = require('./index')

router.get('/notes', (req, res) => {
    res.json(db)
})

router.post('/notes', (req, res) => {
    console.log("seperating our concerns")
    res.send("cats")
})

router.get('/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    console.log(`${req.method}`);
    // readFromFile(db).then((data) => res.json(JSON.parse(data)));
  });
//   noter.get('/', (req, res) => {
//     console.info(`${req.method} request received for tips`);
//     readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
//   });

module.exports = router