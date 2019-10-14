const RaceService = require('../Service/RaceService');
const race = new RaceService();
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
    async delete(req, res) {
        res.send(await user.deleteUser(req.body.id));
    }
    async update(req, res) {
        try {
            res.send(await user.updateUser(req.body.id, req.body));
        } catch (e) {
            res.status(400).send(e.message);
        }
    }
    async getWithRace(req, res) {
        res.send(await user.getUserRace(req.params.login));
    }
    async getWithLeague(req, res) {
        res.send(await user.getUserLeague(req.params.login));
    }
}
