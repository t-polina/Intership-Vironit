const Controller = require('../Controller/RaceController');
const bodyParser = require("body-parser");
const controller = new Controller();

module.exports = function (app) {
    app.get('/race', controller.read.bind(controller));
    app.post('/race',controller.create.bind(controller) );
    app.delete('/race', controller.delete.bind(controller));
    app.put('/race', controller.update.bind(controller));
};