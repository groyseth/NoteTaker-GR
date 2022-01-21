const router = require('express').Router();
const db = require("../db/db.json");
// const noter = require('./index')
const { readFromFile, readAndAppend } = require('../helper/jsUtils');
const uuid = require('../helper/uuid');
// router.get('/notes', (req, res) => {
//     res.json(db)
// })

// router.post('/notes', (req, res) => {
//     console.log("seperating our concerns")
//     res.send("cats")
// })

router.get('/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);
    console.log(`${req.method}`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));


});

router.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const note = {
            title,
            text,
            note_id: uuid(),
        };

        readAndAppend(note, './db/db.json');
        res.json(`note added`);

    } else {
        res.error('Error with adding note');
    }

    //     readAndAppend(note, './db/db.json');

    //     const response = {
    //       status: 'success',
    //       body: note,
    //     };

    //     res.json(response);
    //   } else {
    //     res.json('Error in posting feedback');
    //   }


});

module.exports = router