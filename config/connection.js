var mysql = require('mysql');

var connection;

connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Krawchuk#3',
	database: 'burgers_db'
});

connection.connect(function (err) {
	if (err) {
		console.error('Could not connect on mysql db. Error: ' + err.stack);
		return;
	}
	console.log('Connected as id #: ' + connection.threadId);
});

// export connection for our ORM use
module.exports = connection;