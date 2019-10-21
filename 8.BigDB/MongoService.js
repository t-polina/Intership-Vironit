const mongoose = require('mongoose');

module.exports = function () {
    mongoose.connect('mongodb://localhost:27017/expressRace', {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true
    });
}
