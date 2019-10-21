const LeagueModel = require('../Model/LeagueModel');
const UserModel = require("../Model/UserModel");
const StageService = require('../Service/StageService');
const stageService = new StageService();
const isEmpty = require("../MyFunction/isEmpty")

module.exports = class LeagueServiсe {

    async createLeague(body) {
        if (!isEmpty(body.userSchema)) {
            if (isEmpty(await UserModel.findById(body.userSchema))) {
                await Promise.reject(new Error("there is no such user id"));
            }
        }
        const league = new LeagueModel(body);
        return await league.save();
    }

    async updateLeague(id, body) {
        if (isEmpty(body.userSchema)) {
            return await LeagueModel.findByIdAndUpdate(id, body);
        }

        else if (isEmpty(await UserModel.findById(body.userSchema))) {
            await Promise.reject(new Error("there is no such user id"));
        }
        await LeagueModel.findByIdAndUpdate(id, { $addToSet: { userSchema: body.userSchema } })
        delete body.userSchema;
        return await LeagueModel.findByIdAndUpdate(id, body);

    }

    async deleteLeague(id) {
        if (isEmpty(await LeagueModel.findById(id))) {
            await Promise.reject(new Error("there is no such league id"));
        }
        await stageService.deleteStagesFromLeague(id);
        return await LeagueModel.deleteOne({ "_id": id });
    }

    async readLeague() {
        return await LeagueModel.find({});
    }
}