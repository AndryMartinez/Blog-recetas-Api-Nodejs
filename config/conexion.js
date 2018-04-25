var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'andry',
  password : 'hipopotamo',
  database : 'recetas'
});

module.exports = connection