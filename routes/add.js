
/*
 * GET help page.
 */

exports.view = function(req, res){
  res.render('add');

};

var data = require("../data.json");

exports.addSpot = function(req, res) {

  data.friends.push({lat : req.query.lat , long: req.query.long, price:req.query.price});
  res.render('index');
}
