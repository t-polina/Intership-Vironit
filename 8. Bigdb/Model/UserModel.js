const mongoose = require('mongoose');
// const RaceModel = require('../Model/RaceModel');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    raceSchema: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'RaceModel'
    }],
    leagueSchema: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'LeagueModel'
    }]
})
module.exports = User = mongoose.model('User', userSchema);