// import the orm to create functions that will interact with db.
var orm = require("../config/orm.js");

//code that will call the ORM functions using burger specific input for the ORM

var burger = {
    all: function (dbInfo, cb) {
        orm.all(dbInfo, function (result) {
            cb(result);
        });
    },
    create: function (dbInfo, burgerName, eaten, cb) {
        orm.create(dbInfo, burgerName, eaten, function (result) {
            cb(result);
        });
    },
    update: function (dbInfo, objectCol, condition, cb) {
        orm.update(dbInfo, objectCol, condition, function (result) {
            cb(result);
        });
    }
};

// export the db functions for the controller burger_controller.js
module.exports = burger;