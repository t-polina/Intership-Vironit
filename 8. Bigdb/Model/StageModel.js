const mongoose = require('mongoose');
const stageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        // required: true
    },
    place: {
        type: String,
        required: true
    },
    raceSchema: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'RaceModel',
    }],
    leagueSchema: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'LeagueModel',
        required: true
    }
})
module.exports = Stage = mongoose.model('Stage', stageSchema);