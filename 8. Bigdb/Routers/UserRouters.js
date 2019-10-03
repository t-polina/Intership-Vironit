const Controller = require('../Controller/UserController');
const bodyParser = require("body-parser");
const controller = new Controller();

module.exports = function (app) {
    app.get('/user', controller.read.bind(controller));
    app.get('/user/race/:id', controller.getWithRace.bind(controller));
    app.get('/user/league/:login', controller.getWithLeague.bind(controller));
    app.post('/user',controller.create);
    app.delete('/user', controller.delete.bind(controller));
    app.put('/user', controller.update.bind(controller));

};