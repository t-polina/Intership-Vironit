const Service = require('./Service');
const ModelUser = require('./ModelUser');
const service = new Service();

module.exports = class Controller {
    async create(req, res) {
        const user = new ModelUser(req.body)
        // res.send(service.saveUser(req.body));
        res.send(await user.save());
    }
    async read(req, res) {
        res.send(await ModelUser.find({}));
        // res.send(service.getUsers());
    }
    async delete(req, res) {
        res.send(await ModelUser.remove({"_id": req.body.id}));
        // res.send(service.deleteUser(req.body.id));
    }
    async update(req, res) {
         res.send(await ModelUser.update({"_id": req.body.id},{$set: {name: "Tom", age : 25}}));
        // res.send(service.updateUser(req.body));
    }
}
