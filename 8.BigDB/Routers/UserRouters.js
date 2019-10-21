const Controller = require('../Controller/UserController');
const userValid = require('../Validate/UserValid');
const controller = new Controller();

module.exports = function (app, express) {
    const router = express.Router();
    router.get('/', controller.read.bind(controller));
    router.get('/race/:login', controller.getWithRace.bind(controller));
    router.get('/league/:login', controller.getWithLeague.bind(controller));
    router.post('/', controller.create);
    router.delete('/:id', userValid, controller.delete.bind(controller));
    router.put('/:id', userValid, controller.update.bind(controller));

    router.post('/:login&:password', controller.login.bind(controller));
    app.use('/user', router);
};