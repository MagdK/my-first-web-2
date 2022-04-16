const port = 9001;
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// express.json() is a built in middleware function in Express. It parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());

const frontendFolder = path.join(__dirname, '../frontend');
const publicFolder = path.join(__dirname, '../frontend/pub');
const dataFolder = path.join(__dirname, '/data')

app.get('/', (req, res) => {
    res.sendFile(path.join(frontendFolder, 'index.html'));
});

app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`)
});