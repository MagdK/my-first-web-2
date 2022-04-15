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
const subscriberFile = path.join(dataFolder, 'subscribers.json')
// adds a middleware for serving static files to your Express app.
// elso parameter a use-ban az az, hogy az url ben mivel kezdodik, masodik meg az eleresi utvonal
app.use('/pub', express.static(publicFolder));


console.log(dataFolder);
// app.use('/api', express.static(dataFolder));

app.get('/subscribers', (req, res) => {
    res.sendFile(path.join(frontendFolder, 'index.html'));
});

app.get('/subscribers/all', (req, res) => {
    fs.readFile(subscriberFile, (error, data) => {
        if (error) {
            res.send("Something went a bit wrong")
        } else {
            const subscribers = JSON.parse(data)
            const cards = subscribers.cards
            res.send(cards);
    
        }
    })
});

app.get('/subscribers/under25', (req, res) => {
    fs.readFile(subscriberFile, (error, data) => {
        if (error) {
            res.send("Something went very wrong")
        } else {
            const subscribers = JSON.parse(data)
            const cards = subscribers.cards
            const subscribersUnderTwentyfive = cards.filter(subscriber => subscriber.age < 25)
            res.send(subscribersUnderTwentyfive)
    
        }
    })
});



app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`)
});