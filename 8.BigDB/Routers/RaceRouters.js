const Controller = require('../Controller/RaceController');
const controller = new Controller();
const adminValid = require('../Validate/AdminValid');


module.exports = function (app,express) {
    const router = express.Router();
    router.get('/', controller.read.bind(controller));
    router.get('/:season',controller.getRace.bind(controller));
    router.post('/',adminValid, controller.create.bind(controller) );
    router.delete('/:id', adminValid, controller.delete.bind(controller));
    router.put('/:id',adminValid, controller.update.bind(controller));
    app.use('/race', router);
};