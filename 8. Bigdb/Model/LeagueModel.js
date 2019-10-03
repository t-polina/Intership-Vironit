const mongoose = require('mongoose');
const leagueSchema = new mongoose.Schema({
    titel: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    season: {
        type: String,
        required: true,
        enum: ['Winter', 'Spring', 'Summer', 'Autumn']
    },
    stageSchema: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'StageModel'
    }],
    userSchema:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'UserModel'
    }]
})
module.exports = League = mongoose.model('League', leagueSchema);
