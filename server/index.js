const express = require("express");

const bodyParser = require('body-parser');

const path = require('path');

const PORT = 8000;

const app = express();

const db = require('./queries');

//host react app as static files
app.use(express.static(path.resolve(__dirname, '../favlinks/build')))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/*
For instance, when a user first loads the application you should fetch all the links 
and populate your app with the links saved in your database. 
Then when a user adds a new link to the table it should also add to the database. 
Finally when a user decides to delete a particular link from the table,
you should remove that link from your database as well.
*/ 

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../favlinks/build", "index.html"))

})

//should return the links stored on your postgres database
app.get('/links', db.getLinks)

//should retrieve a link by ID
app.get('/links/:id', db.getLink)

app.post('/new', db.createLink)

app.put('links/:id', db.updateLink)

app.delete('/links/:id', db.deleteLink)

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

