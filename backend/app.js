const port = 9001;
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// express.json() is a built in middleware function in Express. It parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());

const frontendFolder = path.join(__dirname, '../frontend');
const publicFolder = path.join(frontendFolder, 'pub');
// join a perjelet hozzaadja
const dataFolder = path.join(__dirname, 'data');
const dataFile = path.join(dataFolder, 'data.json')

// adds a middleware for serving static files to your Express app.
// elso parameter a use-ban az az, hogy az url ben mivel kezdodik, masodik meg az eleresi utvonal
app.use('/pub', express.static(publicFolder));

app.get("/", (request, response) => {
    response.sendFile(path.join(frontendFolder, 'index.html'));
});

app.get("/data/data.json", (request, response) => {
    response.sendFile(path.join(dataFolder, 'data.json'));
});




app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`)
});