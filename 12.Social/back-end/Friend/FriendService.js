const UserModel = require('../User/UserModel');
const jwt = require('jsonwebtoken');
const isEmpty = require("../MyFunction/isEmpty");
const dotenv = require('dotenv');
dotenv.config();

module.exports = class FriendServise {
  async addRequestFriend(userLogin, token) {
    console.log('5')
    const friend = jwt.verify(token, process.env.TOKEN_SECRET);
    return await UserModel.findOneAndUpdate({ login: userLogin }, { $addToSet: { requestsOnFriend: friend._id } })
  }
  async getRequestFriend(token) {
    const user = await this.getUser(token);
    const arrFriends = [];

    for (let i = 0; i < user.requestsOnFriend.length; i++) {

      arrFriends.push(await UserModel.findById(user.requestsOnFriend[i], { login: true }))
    }
        return arrFriends;
  }

  async addOnFriends(token, friendId) {
 
    const user = await this.getUser(token)
    const deleteRequest = await this.deleteRequest(token, friendId);
    const requestsAmount = user.requestsOnFriend.length;

    if (deleteRequest === requestsAmount) await Promise.reject(new Error("Not in friend requests"))
    await UserModel.findByIdAndUpdate(user._id, { $addToSet: { friends: friendId } });
    await UserModel.findByIdAndUpdate(friendId, { $addToSet: { friends: user._id } });

    return user;
  }

  async deleteOnFriends(token, friendId) {

    const userId = jwt.verify(token, process.env.TOKEN_SECRET)._id;

    await UserModel.findByIdAndUpdate(friendId, { $pull: { friends: userId } });
    await UserModel.findByIdAndUpdate(userId, { $pull: { friends: friendId } });
    return this.getFriends(token);
  }

  async deleteRequest(token, friendId) {
    const userId = jwt.verify(token, process.env.TOKEN_SECRET)._id;
    const user = await UserModel.findByIdAndUpdate(userId, { $pull: { requestsOnFriend: friendId } });
  return await this.getRequestFriend(token);
    // return user.requestsOnFriend.length;
  }

  async getFriends(token) {
   
    const user = await this.getUser(token)
    const arrFriends = [];
    for (let i = 0; i < user.friends.length; i++) {
      arrFriends.push(await UserModel.findById(user.friends[i], { login: true }))
    }
    return arrFriends;
  }

  async getUser(token) {
    const userId = jwt.verify(token, process.env.TOKEN_SECRET)._id;
    const user = await UserModel.findById(userId);


    if (isEmpty(user)) await Promise.reject(new Error("Invalid Token"));
    
    return user;
  }
}