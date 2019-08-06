const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const ServerPortRouter = require('./client/routes/ServerPortRouter');



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://yuriy:Wdj_7yex6cE5cjp@cluster0-odkqs.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("servers");
});




app.use('/serverport', ServerPortRouter);
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});






const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);

