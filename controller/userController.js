var db = require('../model/app');
const users = db.users;
var addUser = (req,res)=>{

  var name = req.body.name;
  var number = req.body.number;

  let data = users.create({Name: name , Number: number});

  var showData = users.findAll().then((user)=>{
  
    let i = 0;
    while (i < user.length) {
      var Names = user[i].dataValues.Name;
      var Numbers = user[i].dataValues.Number;
      i++;
    }
    
    res.render("view",{name,number,Names,Numbers });
    
  }).catch((err)=>{
    console.log("Got an error",err);
  })
  
}
module.exports={addUser};


