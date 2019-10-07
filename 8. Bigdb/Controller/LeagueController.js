const LeagueService = require('../Service/LeagueService');
const league = new LeagueService();

module.exports = class LeagueController {
    async create(req, res) {
        try {
            res.send(await league.createLeague(req.body));
        } catch (e) {
            res.status(400).send(e.message);
        }
    }

    async read(req, res) {
        res.send(await league.readLeague());
    }

    async delete(req, res) {
        try {
            res.send(await league.deleteLeague(req.body.id));
        } catch (e) {
            res.status(400).send(e.message);
        }
    }

    async update(req, res) {
        try {
            res.send(await league.updateLeague(req.body.id, req.body));
        } catch (e) {
            res.status(400).send(e.message);
        }
    }
}
