const RaceService=require('../Service/RaceService');
const race=new RaceService();
const UserService=require('../Service/UserService');

const user=new UserService();

module.exports = class UserController {
    async create(req, res) {
        res.send(await user.createUser(req.body));
    }
    async read(req, res) {
        res.send(await user.readUser());
    }
    async delete(req, res) {
        res.send(await user.deleteUser(req.body.id));
    }
    async update(req, res) {
         res.send(await user.updateUser(req.body.id,req.body));
    }
    async getWithRace(req,res){
       res.send(await  race.readRaceForUser(req.params.id));
    }
    async getWithLeague(req,res){
        res.send(await  user.getLeague(req.params.login));
    }
}
