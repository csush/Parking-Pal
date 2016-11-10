
/*
 * GET search page.
 */
var data = require('../data.json');

exports.projectInfo = function(req, res) {
  console.log('getting data!');
  res.json(data.friends); // send JSON back to browser
}


exports.view = function(req, res){
  res.render('search');
};

