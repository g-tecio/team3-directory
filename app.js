
var express = require("express");
var request = require('request');

var app = express();
var urlAPI= 'https://9mwpc4h2r1.execute-api.us-east-2.amazonaws.com/dev/team3function'
var contacts = {}
//settings
app.set("port", process.env.PORT || 3000)
app.set('view engine', 'ejs')

//Middlewares
app.use(express.json());

loadData()
//Routes
app.get("/", async (req, res) => {
    request.get(urlAPI, (err, res, body) => {
        if (err) {
            return console.dir(err);
        }
 
        contacts = JSON.parse(body);
        contacts = contacts.reverse();
    });
    res.render('index',{contacts:contacts});
  });

//Static File
app.use(express.static(__dirname + '/public'));

//Server is listening
app.listen(3000, () => {
    console.log("Server on Port", app.get("port"));
  });
  
  function loadData(){
  
  }