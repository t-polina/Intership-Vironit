const UserService = require('../Service/UserService');

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
        res.send(await user.readUser());
    }
    async getUser(req, res) {
     res.send(await user.getUser(req.header('Authorization')));
    }
    async delete(req, res) {
        res.send(await user.deleteUser(req.params.id));
    }
    async update(req, res) {
        try {
            res.send(await user.updateUser(req.params.id, req.body));
        } catch (e) {
            res.status(400).send(e.message);
        }
    }
    async getWithRace(req, res) {
        try {
            res.send(await user.getUserRace(req.params.login));
        } catch (e) {
            res.status(400).send(e.message);
        }
    }
    async getWithLeague(req, res) {
        try {
            res.send(await user.getUserLeague(req.params.login));
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
}
