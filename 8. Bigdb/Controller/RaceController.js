const RaceService = require('../Service/RaceService');
const race = new RaceService();
const StageService = require('../Service/StageService');
const stage = new StageService();
const UserService = require('../Service/UserService');
const user = new UserService();

module.exports = class RaceController {
    async create(req, res) {
        try {
            res.send(await race.createRace(req.body));
        } catch (e) {
            res.status(400).send(e.message);
        }
    }
    async read(req, res) {
        res.send(await race.readRace());
    }
    async delete(req, res) {
        try {
            res.send(await race.deleteRace(req.body.id));
        } catch (e) {
            res.status(400).send(e.message);
        }
    }
    async update(req, res) {
        try {
          res.send(await race.updateRace(req.body.id, req.body));
        } catch (e) {
            res.status(400).send(e.message);
        }
    }
    async getRace(req, res) {
        try {
            res.send(await race.getRaceBySeason(req.params.season));
        } catch (e) {
            res.status(400).send(e.message);
        }
    }
}
