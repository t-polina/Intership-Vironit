const MessageService = require('./MessageService');
const message = new MessageService();

module.exports = class MessageController {
    async getMessages(req, res) {
        try {
            res.send(await message.getMessages(req.headers.authorization, req.params.id, req.params.startIndex));
        } catch (e) {
            res.send(e);
        }
    }
    async getUserDialogs(req, res){
        try{
            res.send(await message.getUserDialogs(req.headers.authorization))
        }catch(e){
            res.send(e);
        }
    }
}