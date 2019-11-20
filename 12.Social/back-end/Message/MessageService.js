const MessageModel = require('./MessageModel');
const isEmpty = require("../MyFunction/isEmpty");
const parsingToken = require("../MyFunction/parsingToken");

module.exports = class FriendServise {
  async getMessages(token, withHowm) {
    const userId = parsingToken(token);
    const dialogObject =await this.isDialog(userId, withHowm);
    return dialogObject.message;
  }

  async saveMessages(userId, withHowm, message) {
    const dialog = await this.isDialog(userId, withHowm);
    if (isEmpty(dialog)) {
      return this.createDialog(userId, withHowm, message);
    }
    else return await MessageModel.findOneAndUpdate({ dialogueParticipants: { $all: [userId, withHowm] } }, { $push: { message: message } });
  }

  async createDialog(userId, withHowm, message) {
    const newDialog = new MessageModel({
      dialogueParticipants: [userId, withHowm],
      message: {
        'text': message.text,
        'sender': message.sender
      }
    });
    return await newDialog.save();
  }
  async isDialog(userId, withHowm) {
    return await MessageModel.findOne({ dialogueParticipants: { $all: [userId, withHowm] } });
  }
}