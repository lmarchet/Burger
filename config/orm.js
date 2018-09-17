// import mysql connection
var connection = require("./connection.js");

var orm = {
    all: function (dbInfo, cb) {
        var queryString = 'SELECT * FROM ' + dbInfo + ';';
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    create: function (dbInfo, burgerName, eaten, cb) {
        var queryString = 'INSERT INTO ' + dbInfo + ' (burger_name, devoured) ';
        queryString += 'VALUES ("' + burgerName + '", ' + eaten + ');';

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    update: function (table, objectCol, condition, cb) {
        var queryString = 'UPDATE ' + table;

        queryString += ' SET ';
        queryString += objToSql(objectCol);
        queryString += ' WHERE ';
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

// from cats app solution - helper function to convert object key/value pairs to sql syntax
function objToSql(ob) {
    //column1=value, column2=value2,...
    var arr = [];

    // loop through the keys and push the key/value as a string in arr
    for (var key in ob) {
        arr.push(key + '=' + ob[key]);
    }

    return arr.toString();
}

// export the orm object for the model burger.js
module.exports = orm;