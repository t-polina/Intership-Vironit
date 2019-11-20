const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    dialogueParticipants: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserModel'
        }],
        required: true,
        validate:[validateLength, 'More or less than two participant']
    },
    message:[{
        text:{
            type: String,
            default: '',
            required: true,
        },
        date:{
            type: Date,
            default: Date.now()
        },
        sender:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserModel',
            required: true
        }
    }]
})
function validateLength(value) {
    return value.length  === 2;
}

module.exports = Message = mongoose.model('Message', messageSchema);