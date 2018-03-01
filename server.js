const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// Creating server by creating an instance of express
const app = express();

const { mongoose } = require('./db/mongoose');
const { Snu } = require('./models/snu');

// Middlewares
app.use(morgan('combined')); //morgan is for loggin and debugging
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); //for parsing incoming requests into json

app.get('/', (req, res) => {
  res.send({ hi: 'Heheee there you' });
});

app.post('/snu', (req, res) => {
  var snu = new Snu({
    title: req.body.title,
    text: req.body.text,
    keywords: req.body.keywords
  });

  snu.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

// Server Setup
const port = process.env.PORT || 5000; 
const server = http.createServer(app);

server.listen(port);
console.log('Server listening on port: ', port);
