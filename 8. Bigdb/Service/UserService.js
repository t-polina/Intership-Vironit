const UserModel = require('../Model/UserModel');
const RaceService = require('../Service/RaceService');
const race = new RaceService();
const LeagueModel = require('../Model/LeagueModel');

module.exports = class UserServise {
    async createUser(body) {
        if (UserModel.find({ login: body.login })) {
            await Promise.reject(new Error("login isn't unique"))
        }
        const user = new UserModel(body);
        return await user.save();
    }
    async updateUser(id, body) {
        if (body.login !== undefined) {
            if (await UserModel.find({ login: body.login })) {
                await Promise.reject(new Error("login isn't unique"))
            }
        }
        return await UserModel.findByIdAndUpdate(id, body);
    }
    async deleteUser(id) {
        return await UserModel.remove({ "_id": id });
    }
    async readUser() {
        return await UserModel.find({});
    }
    async getUserRace(login) {
        const userObj = await UserModel.find({ login: login }, { _id: 1 });
        return await race.getRaceForUser(userObj[0]._id);
    }
    async getUserLeague(login) {
        const userObj = await UserModel.find({ login: login }, { _id: 1 });
        return await LeagueModel.find({ userSchema: userObj[0]._id });
    }
}