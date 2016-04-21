
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    phone: String,
    email: String,
    settings: {
        start_day: Number
    }
});

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);