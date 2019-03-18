const express = require('express');
const app = express();
const routes = require('./routes');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use(express.static(path.join(__dirname, '../Client/sample-app/dist/sample-app')));

app.use('/api', routes);


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client/sample-app/dist/sample-app/index.html'));
});
//Set Port
const port = process.env.PORT || '42000';
console.log("Listening at " + port);

app.listen(port);
