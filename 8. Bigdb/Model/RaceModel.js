const mongoose = require('mongoose');
const raceSchema = new mongoose.Schema({
    time: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    userSchema: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'UserModel',
        required: true
    },
    stageSchema: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'StageModel',
        required: true
    }
})
module.exports = Race = mongoose.model('Race', raceSchema);