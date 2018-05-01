var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'fdb17.runhosting.com',
  user     : '2406907_recetas',
  password : '12recetas',
  database : '2406907_recetas'
});

module.exports = connection