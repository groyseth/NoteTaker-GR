const express = require('express');
const path = require('path');
// const fs = require('fs');
const filename = require("./db/db.json")
const util = require('util');
// const api = require('./routes/index')



const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/api', api);
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//API routing

app.use('/', require("./routes"))
// app.get("/api/notes", (req, res) => {
//   res.json(db)
// })

// app.post("/api/notes", (req, res) => {
//   console.log(req.body)
//   res.json(db)
// })

// const writeToFile = (destination, content) =>
//   fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
//     err ? console.error(err) : console.info(`\nData written to ${destination}`)
//   );
  ///modular writefile

  app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);