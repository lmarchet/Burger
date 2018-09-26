var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
	conneciton = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: 'your password',
		database: 'burgers_db'
	});
}

connection.connect(function (err) {
	if (err) {
		console.error('Could not connect on mysql db. Error: ' + err.stack);
		return;
	}
	console.log('Connected as id #: ' + connection.threadId);
});

// export connection for our ORM use
module.exports = connection;