var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'You must enter a name']},
	email: {type: String, required: [true, 'You must enter an email'], unique: true},
    password: {type: String, required: [true, 'You must enter a password']},
    phone: {type: String, required: [true, 'You must enter a phone number']},
    settings: {
        start_day: Number
    }
});

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);


userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};
