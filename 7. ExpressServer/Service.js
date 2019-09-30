fs = require('fs');
module.exports = class Service {
    constructor() {
        this.idArray = [];
        this.json = [];
        this.userId;
        this.jsonFile = JSON.parse(fs.readFileSync('name.json', "utf8", function (error, data) { }));
    }
    getUsers() {
        return this.jsonFile;
    }
    saveUser(user) {
        do {
            this.userId = Math.floor(Math.random() * 10000);
            if (this.idArray.indexOf(this.userId) === -1) {
                this.idArray.push(this.userId)
                user.id = this.userId;
                this.jsonFile.push(user);
                break;
            }
        } while (true)
        return this.jsonFile;
    }
    writeInJSON() {
        fs.writeFile('name.json', JSON.stringify(this.jsonFile), "utf8", function (error, data) { });
    }
    deleteUser(id) {
        this.jsonFile.splice(this.idArray.indexOf(id), 1);
        this.writeInJSON();
        return this.jsonFile;
    }
    updateUser(newParametrs) {
        const updateUser = this.jsonFile.find(el => el.id === newParametrs.id);
        if (newParametrs.age) {
            updateUser.age = newParametrs.age;
        }
        if (newParametrs.name) {
            updateUser.name = newParametrs.name;
        }
        this.writeInJSON();
        return updateUser;
    }

}
