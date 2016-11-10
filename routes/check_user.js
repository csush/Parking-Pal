
/*
 * GET help page.
 */


var data = require("../users.json");

exports.check = function(req, res) {
  var i = 0;
  while (i < data.users.length) {
    if (data.users[i].username == req.query.username && data.users[i].password == req.query.password){
      res.render('index');
    }
    i++;
  } 
}
