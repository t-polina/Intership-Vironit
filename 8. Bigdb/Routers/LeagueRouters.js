const Controller = require('../Controller/LeagueController');
const bodyParser = require("body-parser");
const controller = new Controller();

module.exports = function (app) {
    app.get('/league', controller.read.bind(controller));
    app.post('/league',controller.create.bind(controller) );
    app.delete('/league', controller.delete.bind(controller));
    app.put('/league', controller.update.bind(controller));
    app.get('/league/:season', controller.getRace.bind(controller));
};
  