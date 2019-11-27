const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    surname: {
        type: String,
        required: true,
        trim: true
    },
    login: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6
    },
    role: {
        type: String,
        required: true,
        trim: true,
        enum: ['User', 'Admin']
    },
    friends: [{
        type: String,
        trim: true,
    }],
    requestsOnFriend: [{
        type: String,
        trim: true,
    }]
})
module.exports = User = mongoose.model('User', userSchema);