const port = 9003;
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());

const pathToFrontend = path.join(__dirname, '../frontend');
const pathToIndex = path.join(pathToFrontend, 'index.html');
const pathToPub = path.join(pathToFrontend, 'public');
const pathToData = path.join(pathToPub, 'data');
const pathToDataJson = path.join(pathToData, 'data.json');

app.use('/', express.static(pathToPub));

app.get('/', (req,res) => {
    res.send("I am still trying")
});



app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`)
});