const LeagueModel = require('../Model/LeagueModel');
const StageService = require('../Service/StageService');
const stageService = new StageService();

module.exports = class LeagueServiсe {
    async createLeague(body) {
        const league = new LeagueModel(body);
        return await league.save();
    }
    async updateLeague(id, body) {
        return await LeagueModel.findByIdAndUpdate(id, body);
    }
    async deleteLeague(id) {
        stageService.deleteStageFromLeague(id);
        return await LeagueModel.remove({ "_id": id });
    }
    async readLeague() {
        return await LeagueModel.find({});
    }
    async addStageInLeague(idLeague, idStage) {
        await LeagueModel.updateOne({ "_id": idLeague }, { $push: { stageSchema: idStage } });
    }
    async deleteStageOfLeague(idStage) {
        await LeagueModel.find({ stageSchema: idStage }).updateOne({ stageSchema: idStage }, { $pull: { stageSchema: idStage } });
    }
    async checkId(id) {
        if (await LeagueModel.find({ "_id": id }) == [])
            return false;
        else return true;
    }
    async getRace(season) {
        const a = await LeagueModel.find({ season: season }, { _id: 1 });
        const race = []
        for (let i = 0; i < a.length; i++) {
            race.push(await stageService.getRace(a[i]._id));
        }
        return race;
    }
    async getLeague(id){
        return  await LeagueModel.findById(id);
    }
}