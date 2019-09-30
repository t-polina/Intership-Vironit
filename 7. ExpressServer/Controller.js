let Service = require('./Service');
let service = new Service();
module.exports = class Controller {
    create(req, res) {
        res.send(service.saveUser(req.body));
    }
    read(req, res) {
        res.send(service.getUsers());
    }
    delete(req, res) {
        res.send(service.deleteUser(req.body.id));
    }
    update(req, res) {
        res.send(service.updateUser(req.body));
    }
}