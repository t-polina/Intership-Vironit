const RaceService = require('../Service/RaceService');
const race = new RaceService();
const StageService = require('../Service/StageService');
const stage = new StageService();
const UserService = require('../Service/UserService');
const user = new UserService();

module.exports = class RaceController {
    async create(req, res) {
        const obj = await race.createRace(req.body);
        res.send(obj);
        await stage.addRaсeInStage(req.body.stageSchema, obj._id);
        await user.addRaсeInUser(req.body.userSchema, obj._id)
    }
    async read(req, res) {
        res.send(await race.readRace());
    }
    async delete(req, res) {
        await stage.deleteRaсeOfStage(req.body.id);
        await user.deleteRaсeOfUser(req.body.id);
        res.send(await race.deleteRace(req.body.id));
    }
    async update(req, res) {
        res.send(await race.updateRace(req.body.id, req.body));
    }
}
