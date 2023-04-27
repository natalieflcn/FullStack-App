const express = require("express");

const path = require('path');

const PORT = 8000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../favlinks/build')))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../favlinks/build", "index.html"))
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

