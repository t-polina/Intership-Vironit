const UserModel = require('./UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const isEmpty = require("../utils/isEmpty");
const dotenv = require('dotenv').config();

module.exports = class UserServise {
    async getUser(token) {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        const user = verified;
        return await UserModel.findById(user._id)
    }
    async createUser(body) {
        const hashPassword = await bcrypt.hash(body.password, await bcrypt.genSalt(10));
        if (isEmpty(body.role)) {
            body.role = "User"
        }
        const user = new UserModel({
            name: body.name.capitalize(),
            surname: body.surname.capitalize(),
            login: body.login,
            password: hashPassword,
            role: body.role
        })
        const newUser = await user.save();
        return jwt.sign({ _id: newUser._id, role: newUser.role }, process.env.TOKEN_SECRET);
    }
    async updateUser(login, body) {
        const user = await UserModel.findOne({ "login": login });
        const validPass = await bcrypt.compare(body.oldPassword, user.password);
        const hashPassword = await bcrypt.hash(body.password, await bcrypt.genSalt(10));

        if (body.password === "") {
            body.password = user.password
        } else {
            body.password = hashPassword
        }

        if (isEmpty(user)) await Promise.reject(new Error("Login isn't define"))
        if (!validPass) await Promise.reject(new Error("Invalid old password"));

        return await UserModel.findOne({ "login": login }).updateOne(body)
    }
    async deleteUser(login) {
        return await UserModel.remove({ "login": login });
    }
    async readUsers(character) {
        const reg = new RegExp(`^${character}.*`);
        if (!character) return [];
        return await UserModel.find({ 'login': reg }).limit(5);
    }
    async login(login, password) {
        const user = await UserModel.findOne({ login: login })
        if (!user) await Promise.reject(new Error("Login is not found"));
        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass) await Promise.reject(new Error("Invalid password"));
        const token = jwt.sign({ _id: user._id, role: user.role }, process.env.TOKEN_SECRET);
        return token;
    }
    async getVisitedUser(login) {
        return await UserModel.findOne({ login: login });
    }
}