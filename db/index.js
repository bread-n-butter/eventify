var mysql = require('mysql');

//connection to the database
exports.connection = mysql.createConnection({
  user     : 'root',
  password : '',
  database : 'eventify'
});

exports.connection.connect(function(err) {
  if(err) {
    console.log(err);
    console.log("You are not connected");
  }
});