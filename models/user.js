
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    settings: {
        start_day: Number
    }
});

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);
