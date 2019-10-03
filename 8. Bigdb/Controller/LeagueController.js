const LeagueService = require('../Service/LeagueService');
const league = new LeagueService();

module.exports = class LeagueController {
    async create(req, res) {
        res.send(await league.createLeague(req.body));
    }
    async read(req, res) {
        res.send(await league.readLeague());
    }
    async delete(req, res) {
        res.send(await league.deleteLeague(req.body.id));
    }
    async update(req, res) {
        res.send(await league.updateLeague(req.body.id, req.body));
    }
    async getRace(req, res) {
        res.send(await league.getRace(req.params.season));
    }
}
