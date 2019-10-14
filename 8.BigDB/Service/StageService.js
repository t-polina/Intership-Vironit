const StageModel = require('../Model/StageModel');
const RaceService = require('../Service/RaceService');
const raceService = new RaceService();
const LeagueModel = require('../Model/LeagueModel');

module.exports = class StageServiсe {
    async createStage(body) {
        if (await LeagueModel.find({ "_id": body.leagueSchema }) == false) {
            await Promise.reject(new Error("there is no such league id"));
        } else {
            return await new StageModel(body).save();
        }
    }
    async updateStage(id, body) {
        if (body.leagueSchema == undefined) {
            return await StageModel.findByIdAndUpdate(id, body);
        }
        else if (await LeagueModel.find({ "_id": body.leagueSchema }) == false) {
            await Promise.reject(new Error("there is no such league id"));
        }
        else {
            return await StageModel.findByIdAndUpdate(id, body);
        }
    }
    async deleteStage(id) {
        if (await StageModel.find({ "_id": id }) == false) {
            await Promise.reject(new Error("there is no such stage id"));
        } else {
            raceService.deleteRaceFromStage(id);
            return await StageModel.remove({ "_id": id });
        }
    }
    async readStage() {
        return await StageModel.find({});
    }
    async deleteStagesFromLeague(id) {
        const a = await StageModel.find({ leagueSchema: id }, { _id: 1 });
        for (let i = 0; i < a.length; i++) {
            this.deleteStage(a[i]._id);
        }
    }
} 