var db = require("../model/app");
const users = db.users;
console.log("here we goo controller");

var getmethod = async function (req, res) {
  try {

    var sData = await users.findAll({
      limit: 5,
      order: [['id', 'DESC']],
    });

  res.render("view",{sData});

  }

  catch (err) {
    console.log("error", err);
  }
  
};

var addUser = async function (req, res) {

  try {
    var temp = false;
    console.log(req.body)

    var name = req.body.name;
    console.log("name", name);
    var number = req.body.number;
    console.log("number", number);
   

    if(name == "undefined" || number == "undefined"  ){
      console.log("Name and Number cannot be null");
    }
    else if (name != "" || number != "" ) {

      var creat = await users.create({ Name: name, Number: number });

    var showData = await users.findAll({
      limit: 5,
      order: [['id', 'DESC']],
    }); // showData is a array of Objects

    //console.log("this is ur show database", showData);

  
    res.send( {success: "Successfully entry created", data: showData, cData:creat ,err:temp});
      
 }
  } 
  catch (err) {
    var temp = true;
    console.log("error", err);
    res.send( {Err: "UnSuccessfully entry created",err:temp})
  }
};

module.exports = { addUser, getmethod };
