const MessageModel = require('./MessageModel');
const isEmpty = require("../utils/isEmpty");
const parsingToken = require("../utils/parsingToken");

module.exports = class FriendServise {
  
  async getMessages(token, withHowm, startIndex) {
    const userId = parsingToken(token);
    const dialogObject = await this.isDialog(userId, withHowm);
    const messages = dialogObject.message.slice(startIndex, startIndex + 10);
    return messages;
  }

  async saveMessages(userId, withHowm, message) {
    const dialog = await this.isDialog(userId, withHowm);
    if (isEmpty(dialog)) {
      return this.createDialog(userId, withHowm, message);
    }
    else return await MessageModel.findOneAndUpdate({ dialogueParticipants: { $all: [userId, withHowm] } }, { $push: { message: { $each: [message], $position: 0 } } });
  }

  async getRooms(userId) {
    return await MessageModel.find({ dialogueParticipants: userId }, { room: true, _id: false });
  }

  async getRooms(userId) {
    return await MessageModel.find({ dialogueParticipants: userId }, { room: true, _id: false });
  }


  async getARoom(userId, withHowm) {
    return await MessageModel.findOne({ dialogueParticipants: { $all: [userId, withHowm] } }, { room: true, _id: false });
  }

  async createDialog(userId, withHowm, message) {
    const newDialog = new MessageModel({
      dialogueParticipants: [userId, withHowm],
      message: {
        'text': message.text,
        'sender': message.sender
      },
      room: this.generateIdRoom()
    });
    return await newDialog.save();
  }

  async getUserDialogs(token) {
    const userId = parsingToken(token);
    return await MessageModel.find({ dialogueParticipants: userId }, { room: true });
  }

  async isDialog(userId, withHowm) {
    return await MessageModel.findOne({ dialogueParticipants: { $all: [userId, withHowm] } });
  }
  generateIdRoom() {
    let result = '';
    const words = '012345E@Qn8vefv912w3e4nb(R^#_$#@qwertyuiopasdfghnyhbgfjklzxcvbnmQWERTYUIOPAbgtbtbSDFGHJefvmnbvebKLZXCVBNM';
    const max_position = words.length - 1;
    for (let i = 0; i < 15; ++i) {
      const position = Math.floor(Math.random() * max_position);
      result = result + words.substring(position, position + 1);
    }
    return result;
  }
}