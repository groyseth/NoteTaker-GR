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
router.delete('/notes/:id' , (req, res) => {
    console.info(`${req.method}`);
    // const userIndex = getUserIndex(req.params.userId)
    console.log(req.params);
    // var user = req.body;
    // delete user;
    if(req.body){
        delete {db}
    }
    // var username = req.params;
    // readFromFile('./db/db.json').then((data) =>  delete res.json(JSON.parse(data)));

//     const { title, text, id } = req.body;

//     if (req.body) {
//         const note = {
//             title,
//             text,
//             id,
//         };



        

// console.log(note);
        // readAndAppend(note);
        // .then((data)res.json(JSON.parse(data)));
    //     res.json('delete');
    // //     // readFromFile('./db/db.json').then((data) => res.json(JSON.remove(data)));
    // // } else {
    // //     res.error('Error with adding note');
    // // }
    

})

router.get('/notes', (req, res) => {
    // console.info(`${req.method} request received for notes`);
    console.log(`${req.method}`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    console.log(req.params);

});

router.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add a note`);
    // console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const note = {
            title,
            text,
            id: uuid(),
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
// var id = uuid();

// router.delete('/notes/id' , (req, res) => {
//     // console.info(`${req.method} request received for notes`);
//     // console.log(`${res.note_id}`);
//     console.log(`${req.note_id}`);
    
//     console.info(req.body);
     
//     // readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
// console.log( );
// // });
// router.delete('/notes/:'+`${id}`, (req, res) => {
//     // console.info(`${req.method} request received to add a note`);
    
//     // console.log("delete: req.body: " + JSON.stringify(req.body));
//     console.log(`${req.method}`);
//     // res.send(req.body);
//     // const { title, text } = req.body;
// // return  './db/db.json'. id;
//     // if (req.body) {
//     //     var note = {
//     //         title,
//     //         text,
//     //         id: uuid(),
//     //     };
//     //     console.log(note.id);
//     //     readAndAppend(note, './db/db.json');
//     //     res.json(`note added`);

//     // } else {
//     //     res.error('Error with adding note');
    
// })

module.exports = router