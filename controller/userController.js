//const { Sequelize } = require('sequelize');
var db = require('../model/app');

const users = db.users;

var addUser = (req,res,next)=>{

  var name = req.body.name;
  var number = req.body.number;

  

  let data = users.create({Name: name , Number: number});

  
  res.render("view",{name,number }); 
 next();
}

module.exports={addUser}




