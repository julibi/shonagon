const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { ObjectID } = require('mongodb');
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

app.get('/snu', (req, res) => {
  Snu.find({}).then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/snu/:id', (req, res) => {
 var id = req.params.id;
 if(!ObjectID.isValid(id)) {
   return res.status(404).send();
 }
 Snu.findById(id).then((snu) => {
  if(!snu) {
    return res.status(404).send();
  }
  // success
  res.send({ snu });
 }).catch((e) => { return res.status(400).send(); });
});

app.delete('/snu/:id', (req, res) => {
  var id = req.params.id;
  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  Snu.findByIdAndRemove(id).then((snu) => {
   if(!snu) {
     return res.status(404).send();
   }
   // success
   res.send(snu);
  }).catch((e) => { return res.status(400).send(); });
 });

// app.patch(); 
// HERE

// Server Setup
const port = process.env.PORT || 5000; 
const server = http.createServer(app);

server.listen(port);
console.log('Server listening on port: ', port);
