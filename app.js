var express = require("express");
const path = require("path");

var app = express();
var contacts =[
    {
        name:'Mike Segovia',
        img: 'http://api.randomuser.me/portraits/men/49.jpg',
        num: '618 117 71 53',
        email: 'miguel.segovia@g-tec.io',
        cUrl: 'https://g-tecio.atlassian.net/wiki/spaces/~380176380/overview',
    },
    {
        name:'Rocio Dominguez',
        img: 'http://api.randomuser.me/portraits/women/76.jpg',
        cUrl: 'https://g-tecio.atlassian.net/wiki/spaces/~380176380/overview',
        num: '618 117 71 53',
        email: 'miguel.segovia@g-tec.io',
        
    },
    {
        name:'Martha Lucia',
        img: 'http://api.randomuser.me/portraits/women/34.jpg',
        cUrl: 'https://g-tecio.atlassian.net/wiki/spaces/~380176380/overview',
        num: '618 117 71 53',
        email: 'miguel.segovia@g-tec.io',
    }
]
//settings
app.set("port", process.env.PORT || 3000)
app.set('view engine', 'ejs')

//Middlewares
app.use(express.json());

//Routes
app.get("/", async (req, res) => {
    res.render('index',{contacts:contacts});
  });

//Static File
app.use(express.static(__dirname + '/public'));

//Server is listening
app.listen(3000, () => {
    console.log("Server on Port", app.get("port"));
  });
  