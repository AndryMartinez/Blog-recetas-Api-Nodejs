var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'sql10.freemysqlhosting.net',
  user     : 'sql10235766',
  password : 'JXuHSX1dFJ',
  database : 'sql10235766'
});

module.exports = connection