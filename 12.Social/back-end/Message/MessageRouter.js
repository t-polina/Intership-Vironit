const Controller = require('./MessageController');
const controller = new Controller();


module.exports = function (app, express) {
    const router = express.Router();
    
    router.get('/:id', controller.getMessages.bind(controller));

    app.use('/message', router);
};