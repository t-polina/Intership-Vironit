let Service = require('./Service');
let service = new Service();
module.exports=class Controller{
    create(req,res){
        if (!service.checkUniquenessID(req.body.id)) {
            res.status(400).send('Current id isn\'t niqueness')
          }
          else {
            service.saveUser(req.body);
            res.send(req.body);
          }
    }
    read(req,res){
        res.send(service.getUsers());
    }
    delete(req,res){
        res.send(service.deleteUser(req.body.id));
    }
    update(req,res){
      
        res.send(service.updateUser(req.body)  );
    }
}