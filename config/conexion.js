var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'sql10.freemysqlhosting.net',
  port     : 3306,
  user     : 'sql10235766',
  password : 'JXuHSX1dFJ',
  database : 'sql10235766'
});

module.exports = connection