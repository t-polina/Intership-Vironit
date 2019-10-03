const Controller = require('../Controller/StageController');
const bodyParser = require("body-parser");
const controller = new Controller();

module.exports = function (app) {
    app.get('/stage', controller.read.bind(controller));
    app.post('/stage',controller.create.bind(controller) );
    app.delete('/stage', controller.delete.bind(controller));
    app.put('/stage', controller.update.bind(controller));
};