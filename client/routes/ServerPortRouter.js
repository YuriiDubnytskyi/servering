
const express = require('express');
const app = express();
const ServerPortRouter = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://yuriy:Wdj_7yex6cE5cjp@cluster0-odkqs.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
ServerPortRouter.route('/add').post(function (req, res) {
  /*const serverport = new ServerPort(req.body);
  serverport.save()
    .then(serverport => {
        res.json('Server added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });*/
    client.connect(err => {
      const collection = client.db("test").collection("servers");
      collection.insertOne(req.body,(err,res)=>{
        if (err) throw err;
          console.log("1 document inserted");
      })
  });
    



});

ServerPortRouter.route('/').get(function (req, res) {
    /*ServerPort.find(function (err, serverports){
    if(err){
      console.log(err);
    }
    else {
      res.json(serverports);
    }
  });*/
  collection.find({}).toArray(function(err, result) {
      if (err) {throw err}
      else{
      console.log(result);
      res.json(result)}
    });
    client.connect(err => {
      const collection = client.db("test").collection("servers");
      collection.find({}).toArray(function(err, result) {
      if (err) {throw err}
      else{
      console.log(result);
      res.json(result)}
    });
  });


});

module.exports = ServerPortRouter;