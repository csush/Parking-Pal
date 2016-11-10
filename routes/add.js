
/*
 * GET help page.
 */

exports.view = function(req, res){
  res.render('add');

};

var data = require("../data.json");

exports.addSpot = function(req, res) {
  // Your code goes here
  console.log("yay, addFriend just ran!");
  
  data.friends.push({lat : req.query.lat , long: req.query.long});
  res.render('index');
}
