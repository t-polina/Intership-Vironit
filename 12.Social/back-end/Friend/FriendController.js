const FriendService = require('./FriendService');
const friend = new FriendService();

module.exports = class FriendController {
    async addRequestOnFriend(req, res) {
        try {
            await friend.addRequestFriend(req.params.login, req.headers.authorization)
            res.send('addRequestOnFriend');
        } catch (e) {
            res.send(e);
        }
    }

    async addOnFriend(req, res) {
        try {
            res.send(await friend.addOnFriends(req.headers.authorization, req.params.id));
        } catch (e) {
            res.send(e);
        }
    }

    async getFriends(req, res) {
        try {
            res.send(await friend.getFriends(req.headers.authorization));
        } catch (e) {
            res.send(e);
        }
    }

    async getRequestUsers(req, res) {
        try {
            res.send(await friend.getRequestFriend(req.headers.authorization));
        } catch (e) {
            res.send(e);
        }

    }

    async deleteFriend(req, res) {
        try {
            res.send(await friend.deleteOnFriends(req.headers.authorization, req.params.id));
        } catch (e) {
            res.send(e);
        }
    }

    async deleteRequest(req, res) {
        try {
            res.send(await friend.deleteRequest(req.headers.authorization, req.params.id));
        } catch (e) {
            res.send(e);
        }
    }
}
