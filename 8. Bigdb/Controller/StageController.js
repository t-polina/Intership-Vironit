const LeagueService = require('../Service/LeagueService');
const league = new LeagueService();
const StageService = require('../Service/StageService');
const stage = new StageService();

module.exports = class StageController {
    async create(req, res) {
        if (await league.checkId(req.body.leagueSchema)) {
            const obj = await stage.createStage(req.body);
            res.send(obj);
            await league.addStageInLeague(req.body.leagueSchema, obj._id);
        }
        else res.status(400).send("There is no such league id");
    }
    async read(req, res) {
        res.send(await stage.readStage());
    }
    async delete(req, res) {
        league.deleteStageOfLeague(req.body.id);
        res.send(await stage.deleteStage(req.body.id));
    }
    async update(req, res) {
        res.send(await stage.updateStage(req.body.id, req.body));
    }
}

