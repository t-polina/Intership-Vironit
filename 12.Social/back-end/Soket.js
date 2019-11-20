const socket = require('socket.io');
const MessageService = require('./Message/messageService');
const messageServise = new MessageService();
const parsingToken = require("./MyFunction/parsingToken");
const userSocketId = {};

module.exports = function (server) {
    io = socket(server);
    io.on('connection', (socket) => {
        socket.on('SEND_MESSAGE', async function (data) {
            try {
                const userId = parsingToken(data.token);
                const socketId = userSocketId[data.recipient];
                data.messageObj.sender = userId;
                console.log(data.recipient);
                console.log(socketId);
                io.to(socketId).emit("RECEIVE_MESSAGE", data.messageObj);
                await messageServise.saveMessages(userId, data.recipient, data.messageObj);
            } catch (e) {
                console.log(e);
            }
        });

        socket.on('LOGIN', function (data) {
            socket.username = data.id;
            userSocketId[data.id] = socket.id;
            console.log(userSocketId);
        });
        socket.on('DISCONECT', function (data) {
            delete userSocketId[data.id];
            console.log(userSocketId)
        });
    })
}