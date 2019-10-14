const Controller = require('../Controller/RaceController');
const controller = new Controller();

module.exports = function (app,express) {
    const router = express.Router();
    router.get('/', controller.read.bind(controller));
    router.get('/:season',controller.getRace.bind(controller));
    router.post('/',controller.create.bind(controller) );
    router.delete('/', controller.delete.bind(controller));
    router.put('/', controller.update.bind(controller));
    app.use('/race', router);
};