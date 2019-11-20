const Controller = require('./UserController');
const userValid = require('../Validate/UserValid');
const controller = new Controller();


module.exports = function (app, express) {
    const router = express.Router();

    router.get('/', controller.getUser.bind(controller));
    router.get('/get', controller.read.bind(controller));
    router.get('/visitedUser/:login', controller.getVisitedUser.bind(controller));
    router.put('/:id', userValid, controller.update.bind(controller));
    router.delete('/:login', controller.delete.bind(controller));
    router.post('/', controller.create);
    router.post('/:login&:password', controller.login.bind(controller));

    app.use('/user', router);
};