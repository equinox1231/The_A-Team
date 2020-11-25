var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    fullname: {
        type: String
    },
    country: {
        type: String
    }
}, { collection: "user" });
module.exports = mongoose.model('user', user)