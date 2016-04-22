
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'You must enter a name']},
	email: {type: String, required: [true, 'You must enter an email'], unique: true},
    password: String,
    phone: String,
    settings: {
        start_day: Number
    }
});

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);