const StageModel = require('../Model/StageModel');
const RaceService = require('../Service/RaceService');
const raceService = new RaceService();
const LeagueModel = require('../Model/LeagueModel');
const isEmpty = require("../MyFunction/isEmpty")

module.exports = class StageServiсe {
    async createStage(body) {
        if (isEmpty(await LeagueModel.findById(body.leagueSchema))) {
            await Promise.reject(new Error("there is no such league id"));
        }
        return await new StageModel(body).save();
    }
    async updateStage(id, body) {
        if (!isEmpty(body.leagueSchema)) {
            if (isEmpty(await LeagueModel.findById(body.leagueSchema))) {
                await Promise.reject(new Error("there is no such league id"));
            }
        }
        return await StageModel.findByIdAndUpdate(id, body);
    }
    async deleteStage(id) {
        if (isEmpty(await StageModel.findById(id))) {
            await Promise.reject(new Error("there is no such stage id"));
        }
        raceService.deleteRaceFromStage(id);
        return await StageModel.remove({ "_id": id });

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