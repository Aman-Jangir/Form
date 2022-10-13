var db = require("../model/app");
const users = db.users;
console.log("here we goo controller");

var getmethod = async function (req, res) {
  var button = "none";
  // var tri = "heyy working";
  res.render("view", { button: button })
};

var addUser = async function (req, res) {
  var name = req.body.name;
  var number = req.body.number;

  let data = await users.create({ Name: name, Number: number });

  var showData = await users.findAll({
    limit: 5,
    order : [['id', 'ASC']],
  }); // showData is a array of Objects

  var button = "block";

  console.log("this is ur show database", showData);
  res.send({button,showData});
 // res.send(button,showData);

};

module.exports = { addUser, getmethod };
