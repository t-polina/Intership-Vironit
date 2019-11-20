const UserService = require('./UserService');
const user = new UserService();

module.exports = class UserController {
    async create(req, res) {
        try {
            res.send(await user.createUser(req.body));
        } catch (e) {
            res.status(400).send(e.message);
        }
    }
    async read(req, res) {
        res.send(await user.readUsers());
    }
    async getUser(req, res) {
       
        res.send(await user.getUser(req.headers.authorization));
    }
    async delete(req, res) {
        res.send(await user.deleteUser(req.params.login));
    }
    async update(req, res) {
        try {
            res.send(await user.updateUser(req.params.login, req.body));
        } catch (e) {
            res.status(400).send(e.message);
        }
    }
    async login(req, res) {
        try {
            const token = await user.login(req.params.login, req.params.password)
            res.header("Authorization", token).send(token);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }
    async getVisitedUser(req, res) {
        res.send(await user.getVisitedUser(req.params.login));
    }
}
