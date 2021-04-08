var mongoose = require('mongoose');
var schema = mongoose.schema;

var userschema = new schema({
    email: { String, required: true },
    username: { String, required: true },
    passwordhash: { String },
    passwordsalt: { String },
});

module.exports = mongoose.model('user', userschema);