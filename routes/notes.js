const router = require('express').Router();
const db = require("../db/db.json");
const filename = "./db/db.json"
const { readFromFile, readAndAppend } = require('../helper/jsUtils');
const uuid = require('../helper/uuid');
const fs = require('fs')



router.delete('/notes/:id' , (req, res) => {
   const deleteNotes = req.params.id;

fs.readFile(filename, 'utf8', function(err, data){
    
        var notes = JSON.parse(data);
        var filterNotes = notes.filter(note => note.id !== deleteNotes)
        console.log(filterNotes);

        fs.writeFile(filename, JSON.stringify(filterNotes), (err) => {
            if (err) {
                console.log(err);
                return;
            }
            res.json(req.body);
        })
    });
});


router.get('/notes', (req, res) => {

    console.log(`${req.method}`);
    readFromFile(filename).then((data) => res.json(JSON.parse(data)));
    console.log(req.params);

});

router.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);

    const { title, text } = req.body;

    if (req.body) {
        const note = {
            title,
            text,
            id: uuid(),
        };

        readAndAppend(note, filename);
        res.json(`note added`);

    } else {
        res.error('Error with adding note');
    }
   



});


module.exports = router