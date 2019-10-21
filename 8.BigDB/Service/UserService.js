const UserModel = require('../Model/UserModel');
const RaceService = require('../Service/RaceService');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const isEmpty = require("../MyFunction/isEmpty");
const race = new RaceService();
const LeagueModel = require('../Model/LeagueModel');

const dotenv = require('dotenv');
dotenv.config();

module.exports = class UserServise {
    async createUser(body) {
        const hashPassword = await bcrypt.hash(body.password, await bcrypt.genSalt(10));
        const user = new UserModel({
            name: body.name,
            surname: body.surname,
            login:body.login,
            password: hashPassword,
            role: body.role
        })
        return await user.save();
    }
    async updateUser(id, body) {
        if (isEmpty(await UserModel.findById(id))) {
            await Promise.reject(new Error("id isn't define"))
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
        if(isEmpty(userObj)){ await Promise.reject(new Error("login isn't define"))}
        return await LeagueModel.find({ userSchema: userObj[0]._id });
    }
    async login(login, password) {
        const user = await UserModel.findOne({ login: login })
        if (!user) await Promise.reject(new Error("login is not found"));
        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass) await Promise.reject(new Error("Invalid password"));
        const token = jwt.sign({ _id: user._id, role: user.role }, process.env.TOKEN_SECRET);
        return token;
    }
}
