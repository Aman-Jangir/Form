const express = require("express");
const app = express();
const path = require("path");
//const User = require("./index");
const bodyParser = require("body-parser");  //middleWare--> to access req.body

var userCtrl = require("./controller/userController");

app.use(bodyParser.urlencoded({ extended:false }));       // to access form data 
//app.use(express.urlencoded({ extended:false }));

require("./model/app");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {

    var name = req.body.name;
  var number = req.body.number;

  res.render("view",{name,number});
});

app.post("/",userCtrl.addUser);


app.listen(8000);