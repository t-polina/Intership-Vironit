const MessageService = require('./MessageService');
const message = new MessageService();

module.exports = class MessageController {
    async getMessages(req, res) {
        try {
            res.send(await message.getMessages(req.headers.authorization, req.params.id));
        } catch (e) {
            res.send(e);
        }
    }
}