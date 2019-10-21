const LeagueService = require('../Service/LeagueService');
const league = new LeagueService();
const StageService = require('../Service/StageService');
const stage = new StageService();

module.exports = class StageController {
    async create(req, res) {
        try {
            const obj = await stage.createStage(req.body);
            res.send(obj);
            await league.addStageInLeague(req.body.leagueSchema, obj._id);
        } catch (e) {
            res.status(400).send(e.message);
        }
    }

    async read(req, res) {
        res.send(await stage.readStage());
    }

    async delete(req, res) {
        try {
            res.send(await stage.deleteStage(req.params.id));
        } catch (e) {
            res.status(400).send(e.message);
        }
    }

    async update(req, res) {
        try {
            res.send(await stage.updateStage(req.params.id, req.body));
        } catch (e) {
            res.status(400).send(e.message);
        }
    }
}

