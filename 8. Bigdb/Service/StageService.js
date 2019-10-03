const StageModel = require('../Model/StageModel');
const RaceService = require('../Service/RaceService');
const raceService = new RaceService()
module.exports = class StageServiсe {
    async createStage(body) {
        const stage = new StageModel(body);
        return await stage.save();
    }
    async updateStage(id, body) {
        return await StageModel.findByIdAndUpdate(id, body);
    }
    async deleteStage(id) {
        raceService.deleteRaceFromLeague(id);
        return await StageModel.remove({ "_id": id });
    }
    async readStage() {
        return await StageModel.find({});
    }
    async addRaсeInStage(idStage, idRaсe) {
        await StageModel.updateOne({ "_id": idStage }, { $push: { raceSchema: idRaсe } });
    }
    async deleteRaсeOfStage(idRaсe) {
        await StageModel.find({ raсeSchema: idRaсe }).updateOne({ raceSchema: idRaсe }, { $pull: { raceSchema: idRaсe } });
    }
    async deleteStageFromLeague(id) {
        const a = await StageModel.find({ leagueSchema: id }, { _id: 1 });
        for (let i = 0; i < a.length; i++) {
            raceService.deleteRaceFromLeague(a[i]._id);
            await StageModel.findByIdAndDelete(a[i]._id);
        }
    }
    async getRace(idLeague) {
        const a = await StageModel.find({ leagueSchema: idLeague }, { _id: 1 });
        const race = [];
        for (let i = 0; i < a.length; i++) {
            race.push(await raceService.getRace(a[i]._id));
        }
        return race;
    }
    async checkStageId(id) {
        if (await StagesModel.find({ "_id": id }) == [])
            return false;
        else return true;
    }
} 