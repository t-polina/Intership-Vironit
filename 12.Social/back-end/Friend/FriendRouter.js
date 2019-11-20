const Controller = require('./FriendController');
const controller = new Controller();


module.exports = function (app, express) {
    const router = express.Router();
    router.get('/requestUsers', controller.getRequestUsers.bind(controller));
    router.get('/getFriends', controller.getFriends.bind(controller));

    router.put('/:id', controller.addOnFriend.bind(controller));
  
    router.delete('/:id', controller.deleteFriend.bind(controller));
    router.delete('/request/:id', controller.deleteRequest.bind(controller));

    router.post('/:login', controller.addRequestOnFriend.bind(controller));

    app.use('/friend', router);
};