let Controller = require('./Controller');
const bodyParser = require("body-parser");
let controller = new Controller();

module.exports = function (app) {
  app.get('/users', controller.read.bind(controller));
  app.post('/users',controller.create.bind(controller) );
  app.delete('/users', controller.delete.bind(controller));
  app.put('/users', controller.update.bind(controller));
};
