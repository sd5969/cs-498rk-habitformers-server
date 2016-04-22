
var mongoose = require('mongoose');

var HabitSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    name: String,
    repeat: {
        option: Number,
        days: [Number],
        interval: Number
    },
    complete_days: [{
        date: Date,
        completed: Boolean
    }],
    start_date: Date,
    end_date: Date,
    note: String
});

// Export the Mongoose model
module.exports = mongoose.model('Habit', HabitSchema);