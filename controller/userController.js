var db = require('../model/app');
const users = db.users;
console.log("here we goo controller")
var addUser = async (req,res)=>{

  var name = req.body.name;
  var number = req.body.number;

  let data = await users.create({Name: name , Number: number});

  var showData = await users.findAll()    // showData is a array of Objects 
 
  // showData.forEach(function(value){
  //    var  finalName = value.dataValues.Name;
  //    var  finalNumber = value.dataValues.Number;
  //   console.log("Here we show u Names",finalName)  // consoling first object of the ShowData array
  // })
  // console.log("Here we show u NUmbers",finalNumber)
  
  
  console.log("this is ur show database",showData)
  res.render("view",{showData});
   
}
module.exports={addUser};