const express = require("express");

const bodyParser = require('body-parser');

const path = require('path');

const PORT = 8000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../favlinks/build')))

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../favlinks/build", "index.html"))
})

//should return the links stored on your postgres database
app.get('/links', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../favlinks/build", "index.html"))
})

//should retrieve a link by ID
app.get('/links/:id', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../favlinks/build", "index.html"))
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

