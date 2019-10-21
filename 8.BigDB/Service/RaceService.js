const RaceModel = require('../Model/RaceModel');
const StageModel = require('../Model/StageModel');
const UserModel = require('../Model/UserModel');
const LeagueModel = require('../Model/LeagueModel');
const isEmpty = require("../MyFunction/isEmpty")

module.exports = class RaceServiсe {
    async createRace(body) {
        const stage = await StageModel.findById(body.stageSchema);
        console.log(stage)
        if (isEmpty(stage)) {
            await Promise.reject(new Error("there is no such stage id"))
        }
        const user = await UserModel.findById(body.userSchema);
        console.log(user)
        if (isEmpty(user)) {
            await Promise.reject(new Error("there is no such user id"))
        }
        const leagueId = await StageModel.findById(stage._id);
        const league = await LeagueModel.find({ "_id": leagueId.leagueSchema, "userSchema": user._id });
        if (isEmpty(league)) {
            await Promise.reject(new Error("The user does not participate in the league to which the race belongs"))
        }
        return await new RaceModel(body).save();
    }
    async updateRace(id, body) {
        if (!isEmpty(body.stageSchema) && !isEmpty(body.userSchema)) {
            const stage = await StageModel.findById(body.stageSchema);
            const user = await UserModel.findById(body.userSchema);
            if (isEmpty(user) || isEmpty(stage)) {
                await Promise.reject(new Error("Uncorrect user id or stage id "))
            }
            const leagueId = await StageModel.findById(stage._id);
            const league = await LeagueModel.find({ "_id": leagueId.leagueSchema, "userSchema": user._id });
            if (isEmpty(league)) {
                await Promise.reject(new Error("The user does not participate in the league to which the race belongs"))
            }
        } else if (isEmpty(body.stageSchema) && !isEmpty(body.userSchema)) {
            const user = await UserModel.findById(body.userSchema);
            if (isEmpty(user)) {
                await Promise.reject(new Error("there is no such user id"))
            }
            const race = await RaceModel.findById(id)
            const stage = await StageModel.findById(await race.stageSchema);
            const league = await LeagueModel.findById(await stage.leagueSchema).find({ "userSchema": user._id })

            if (isEmpty(league)) {
                await Promise.reject(new Error("The user does not participate in the league to which the race belongs"))
            }

        } else if (!isEmpty(body.stageSchema) && isEmpty(body.userSchema)) {
            const stage = await StageModel.findById(body.stageSchema);
            if (isEmpty(stage)) {
                await Promise.reject(new Error("there is no such stage id"))
            }
            const race = await RaceModel.findById(id)
            const user = await race.userSchema
            const league = await LeagueModel.findById(await stage.leagueSchema).find({ "userSchema": user._id })

            if (isEmpty(league)) {
                await Promise.reject(new Error("The user does not participate in the league to which the race belongs"))
            }

        }
        return await RaceModel.findByIdAndUpdate(id, body);
    }
    async deleteRace(id) {
        if (isEmpty(await RaceModel.findById(id))) {
            await Promise.reject(new Error("there is no such race id"));
        }
        return await RaceModel.remove({ "_id": id });
    }
    async readRace() {
        return await RaceModel.find({});
    }
    async deleteRaceFromStage(id) {
        await RaceModel.find({ stageSchema: id }).remove();
    }
    async getRaceForUser(userId) {
        return await RaceModel.find({ userSchema: userId });
    }
    async getRaceBySeason(season) {
        return await LeagueModel.aggregate([
            {
                $match: {
                    season
                }
            },
            {
                $lookup: {
                    from: 'stages',
                    localField: '_id',
                    foreignField: 'leagueSchema',
                    as: 'stages'
                }
            },
            { $project: { stages: 1, _id: 0 } },
            {
                $unwind: {
                    path: '$stages',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $lookup: {
                    from: 'races',
                    localField: 'stages._id',
                    foreignField: 'stageSchema',
                    as: 'races'
                }
            }
        ]);
    }
}