const RaceModel = require('../Model/RaceModel');
const StageModel = require('../Model/StageModel');
const UserModel = require('../Model/UserModel');
const LeagueModel = require('../Model/LeagueModel');

module.exports = class RaceServiсe {
    async createRace(body) {
        const stage = await StageModel.findById(body.stageSchema);
        if (stage == null) {
            await Promise.reject(new Error("there is no such stage id"))
        }
        const user = await UserModel.findById( body.userSchema );
        if (user == null) {
            await Promise.reject(new Error("there is no such user id"))
        }
        const leagueId = await StageModel.findById(stage._id, { leagueSchema: 1 });
        const league = await LeagueModel.find({ "_id": leagueId.leagueSchema, "userSchema": user._id });
        if (league == false) {
            await Promise.reject(new Error("The user does not participate in the league to which the race belongs"))
        }

        return await new RaceModel(body).save();
    }

    async updateRace(id, body) {
        if (body.stageSchema !== undefined && body.userSchema !== undefined) {
            const stage = await StageModel.findById(body.stageSchema);
            const user = await UserModel.findById(body.userSchema);
            if(user==null||stage==null){
                await Promise.reject(new Error("Uncorrect user id or stage id "))
            }
            const leagueId = await StageModel.findById(stage._id);
            const league = await LeagueModel.find({ "_id": leagueId.leagueSchema, "userSchema": user._id });
            if (league == false) {
                await Promise.reject(new Error("The user does not participate in the league to which the race belongs"))
            }
        } else if (body.stageSchema == undefined && body.userSchema !== undefined) {
            const user = await UserModel.findById(body.userSchema);
            if (user == null) {
                await Promise.reject(new Error("there is no such user id"))
            }
            const race = await RaceModel.findById(id)
            const stage = await StageModel.findById(await race.stageSchema);
            const league = await LeagueModel.findById(await stage.leagueSchema).find({ "userSchema": user._id })

            if (league == false) {
                await Promise.reject(new Error("The user does not participate in the league to which the race belongs"))
            }

        } else if (body.stageSchema !== undefined && body.userSchema == undefined) {
            const stage = await StageModel.findById(body.stageSchema);
            if (stage == null) {
                await Promise.reject(new Error("there is no such stage id"))
            }
            const race = await RaceModel.findById(id)
            const user = await race.userSchema
            const league = await LeagueModel.findById(await stage.leagueSchema).find({ "userSchema": user._id })

            if (league == false) {
                await Promise.reject(new Error("The user does not participate in the league to which the race belongs"))
            }

        }
        return await RaceModel.findByIdAndUpdate(id, body);
    }
    async deleteRace(id) {
        if (await RaceModel.find({ "_id": id }) == false) {
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