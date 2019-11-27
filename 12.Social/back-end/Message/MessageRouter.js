const Controller = require('./MessageController');
const controller = new Controller();


module.exports = function (app, express) {
    const router = express.Router();
    
    router.get('/:id&:startIndex', controller.getMessages.bind(controller));
    router.get('/', controller.getUserDialogs.bind(controller));

    app.use('/message', router);
};