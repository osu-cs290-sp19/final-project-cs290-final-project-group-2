const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const MongoClient = require('mongodb').MongoClient;

const mongoHost = process.env.MONGO_HOST;
const mongoPort = process.env.MONGO_PORT || 27017;
const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASS;
const mongoName = process.env.MONGO_NAME;

// var mongoUrl = `mongodb://${mongoUser}:${mongoPass}@${mongoHost}:${mongoPort}/${mongoName}`;
var mongoUrl = `mongodb+srv://${mongoUser}:${mongoPass}@cluster0-ne0jv.mongodb.net/${mongoName}?retryWrites=true&w=majority`;

var database = null;
var users = null;

const app = express();
var port = process.env.PORT || 3001 || 3333;

app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

app.engine("handlebars", exphbs());
app.set("view engine","handlebars");

function add_user(request) {
  console.log("New user added. Name:", request.name);
  console.log(request.name, "has solved: 1 bomb");
  users.insertOne(request);
}

//individual stats handler
app.get('/stats/:user', function (req, res) {
    var username = req.params.user;
    users.findOne({name: username}, (err, data) =>{
        if (data)
            res.status(200).render('individualStats', data);
        else
            res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
    });
});

//main stats page
app.get('/stats', function (req, res){
  users.find({}, (err, data) =>{
    data.sort({"stats.bombsSolved": -1});
    data.toArray((err, docs)=>{
      res.status(200).render('stats', {users: docs});
    });
  });
});

//updates or adds new user to databse
app.post('/stats/update', function (req, res){
  users.findOne({name: req.body.name}, (err, data) =>{
    if(!data) {
      add_user(req.body); //create new user if not present
    } else {
      //push new level or not to stats based on if completed
      if(!(data.stats.levelSolved.includes(req.body.stats.levelSolved[0]))) {
        users.updateOne(data, {
            $push: {"stats.levelSolved": req.body.stats.levelSolved[0]},
            $inc: {
                "stats.bombsSolved": 1,
                "stats.modulesSolved": req.body.stats.modulesSolved,
                "stats.totalWiresCut": req.body.stats.totalWiresCut,
                "stats.totalStrikesReceived": req.body.stats.totalStrikesReceived
            }
        });
      } else {
        users.updateOne(data, {
            $inc: {
                "stats.bombsSolved": 1,
                "stats.modulesSolved": req.body.stats.modulesSolved,
                "stats.totalWiresCut": req.body.stats.totalWiresCut,
                "stats.totalStrikesReceived": req.body.stats.totalStrikesReceived
            }
        });
      }
      console.log(data.name, "has solved:", (data.stats.bombsSolved + 1), "bombs");
    }
  });
  res.status(200).send('Request received.');
});

//404 handler
app.get('*', function (req, res) {
    console.log("Sending 404");
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

//server initiallization
MongoClient.connect(mongoUrl, {useNewUrlParser: true}, function (err,client){
  if(err)
    throw err;
  database = client.db(mongoName);
  users = database.collection('users');
  app.listen(port, () => console.log('Listening on port ', port));
});
