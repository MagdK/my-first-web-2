const port = 9004;
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());

const pathToFrontend = path.join(__dirname, '../frontend');
const pathToPub = path.join(pathToFrontend, 'public');
const pathToData = path.join(__dirname, 'data');
const pathToDataJson = path.join(pathToData, 'movies.json');

app.use('/pub', express.static(pathToPub));

app.get('/', (req, res) => {
    res.sendFile(path.join(pathToFrontend, 'index.html'));
});

app.get('/movies', (req, res) => {
    res.sendFile(pathToDataJson);
});

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`)
});