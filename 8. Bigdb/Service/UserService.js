const  UserModel = require('../Model/UserModel');
const League=require('../Service/LeagueService');
const league=new League();

module.exports= class UserServise{
    async createUser(body) {
        const user= new UserModel(body);
        return await user.save();
    }
    async updateUser(id, body) {
        return await UserModel.findByIdAndUpdate(id, body);
    }
    async deleteUser(id) {
        return await UserModel.remove({ "_id": id });
    }
    async readUser() {
        return await UserModel.find({});
    }
    async addRaсeInUser(idUser, idRaсe) {
        await UserModel.updateOne({ "_id": idUser }, { $push: {  raceSchema: idRaсe } });
    }
    async deleteRaсeOfUser(idRaсe) {
        await UserModel.find({ raсeSchema: idRaсe }).updateOne({ raceSchema: idRaсe }, { $pull: { raceSchema: idRaсe } });
    }
    async getLeague(login){
        const a = await UserModel.find({ login:login }, { leagueSchema:1,_id:false});
        const leagueList=[];
        for(let i=0;i<a.length;i++){
            for(let j=0;j<a[i].leagueSchema.length;j++){
              await  leagueList.push(await league.getLeague(a[i].leagueSchema[j]));
            }
        }
        return leagueList;
    }
}