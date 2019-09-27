fs = require('fs');
module.exports=class Service{
    constructor(){
        this.idArray=[];
        this.json=[];
        this.jsonFile=JSON.parse(fs.readFileSync('name.json',"utf8", function(error,data){ }));
    }
    getUsers(){
        return this.jsonFile;
    }
    saveUser(user){
        this.jsonFile.push(user);
       
    }
    checkUniquenessID(id){
        if(this.idArray.indexOf(id)===-1){
            this.idArray.push(id);
            return true;
        }
        else false;
    }
    writeInJSON(){
        fs.writeFile('name.json',JSON.stringify(this.jsonFile),"utf8", function(error,data){ });
    }
    deleteUser(id){
        this.jsonFile.splice(this.idArray.indexOf(id),1);  
        this.writeInJSON();
        return this.jsonFile;
    }
    updateUser(newParametrs){
       const updateUser=this.jsonFile.find(el=>el.id===newParametrs.id);
       updateUser.name=newParametrs.name;
       this.writeInJSON();
       return updateUser;
    }

}
