const LeagueModel = require('../Model/LeagueModel');
const UserModel = require("../Model/UserModel");
const StageService = require('../Service/StageService');
const stageService = new StageService();

module.exports = class LeagueServiсe {

    async createLeague(body) {
        if (body.userSchema == undefined) {
            const league = new LeagueModel(body);
            return await league.save();
        }
        else if (await UserModel.find({ "_id": body.userSchema }) == false) {
            await Promise.reject(new Error("there is no such user id"));
        }
        else {
            const league = new LeagueModel(body);
            return await league.save();
        }
    }

    async updateLeague(id, body) {
        if (body.userSchema == undefined) {
            return await LeagueModel.findByIdAndUpdate(id, body);
        }
        else if (await UserModel.find({ "_id": body.userSchema }) == false) {
            await Promise.reject(new Error("there is no such user id"));
        }
        else {
            await LeagueModel.findByIdAndUpdate(id, { $addToSet: { userSchema: body.userSchema } })
            delete body.userSchema;
            return await LeagueModel.findByIdAndUpdate(id, body);
        }
    }

    async deleteLeague(id) {
        if (await LeagueModel.find({ "_id": id }) == false) {
            await Promise.reject(new Error("there is no such league id"));
        }
        else {
            await stageService.deleteStagesFromLeague(id);
            return await LeagueModel.remove({ "_id": id });
        }
    }

    async readLeague() {
        return await LeagueModel.find({});
    }
}