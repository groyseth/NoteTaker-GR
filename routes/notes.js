const router = require('express').Router();
const filename = "./db/db.json"
const { readFromFile, readAndAppend } = require('../helper/jsUtils');
// const uuid = require('../helper/uuid');
const fs = require('fs');
const { randomUUID } = require('crypto');


// uses delete method and loop the object array to find the correct id
router.delete('/notes/:id' , (req, res) => {
   const deleteNotes = req.params.id;

fs.readFile(filename, 'utf8', function(err, data){
    
        var removeNotes = JSON.parse(data);
        console.log(removeNotes);
        console.log(deleteNotes);
        var notesFliter = removeNotes.filter(note => note.id !== deleteNotes)
        console.log(notesFliter);

        fs.writeFile(filename, JSON.stringify(notesFliter), (err) => {
            if (err) {
                console.info(err);
                return;
            }
            res.json(req.body);
        })
        if(err){
            console.info(err);
            return;
        }
    });
    
});

// uses get method when the user requests info, the server reads that data
router.get('/notes', (req, res) => {

    console.log(`${req.method}`);
    readFromFile(filename).then((data) => res.json(JSON.parse(data)));
    console.log(req.params);

});
// uses post method and sends the requested data form the data base
router.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);

    const { title, text } = req.body;

    if (req.body) {
        const note = {
            title,
            text,
            id: randomUUID()
        };

        readAndAppend(note, filename);
        res.json(`note added`);

    } else {
        res.error('Error with adding note');
    }
   



});


module.exports = router