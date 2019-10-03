const RaceModel = require('../Model/RaceModel');

module.exports = class RaceServiсe {
    async createRace(body) {
        const race = new RaceModel(body);
        return await race.save();
    }
    async updateRace(id, body) {
        return await RaceModel.findByIdAndUpdate(id, body);
    }
    async deleteRace(id) {
        return await RaceModel.remove({ "_id": id });
    }
    async readRace() {
        return await RaceModel.find({});
    }
    async readRaceForUser(id) {
        return await RaceModel.find({ userSchema: id });
    }
    async deleteRaceFromLeague(id) {
       await RaceModel.find({ stageSchema: id }).remove();
    }
    async getRace(id){
       return await RaceModel.find({ stageSchema: id });
    }
}