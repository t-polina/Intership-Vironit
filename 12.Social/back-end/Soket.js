const socket = require('socket.io');
const MessageService = require('./Message/messageService');
const messageService = new MessageService();
const parsingToken = require("./utils/parsingToken");
const isEmpty = require('./utils/isEmpty');
const globalRoom = 'globalRoom';

module.exports = function (server) {
    io = socket(server);
    io.on('connection', (socket) => {
        socket.on('SEND_MESSAGE', async function (data) {
            try {
                const userId = parsingToken(data.token);
                let room = await messageService.getARoom(userId, data.recipient).room;
                data.messageObj.sender = userId;
                if (isEmpty(room)) {
                    const dialog = await messageService.saveMessages(userId, data.recipient, data.messageObj);
                    io.sockets.to(globalRoom).emit("REQUESR_JOIN_TO_ROOM", { message: data.messageObj, id: userId, room: dialog.room });
                    io.sockets.to(globalRoom).emit("REQUESR_JOIN_TO_ROOM", { message: data.messageObj, id: data.recipient, room: dialog.room });
                }
                else {
                    io.sockets.to(globalRoom).emit("REQUESR_JOIN_TO_ROOM", { message: data.messageObj, id: data.recipient, room: room });
                    io.sockets.to(room.room).emit("RECEIVE_MESSAGE", data.messageObj);
                    await messageService.saveMessages(userId, data.recipient, data.messageObj);
                }
            } catch (e) {
                console.log(e);
            }
        });

        socket.on('JOIN_TO_ROOM', async function (room) {
            socket.join(room);
        });

        socket.on('LOGIN', async function () {
            socket.join(globalRoom);
        });
        socket.on('DISCONECT', async function () {
            socket.leave(globalRoom);
        });
    })
}