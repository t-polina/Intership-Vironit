const Controller = require('../Controller/StageController');
const controller = new Controller();

module.exports = function (app,express) {
    const router = express.Router();
    router.get('/', controller.read.bind(controller));
    router.post('/',controller.create.bind(controller) );
    router.delete('/', controller.delete.bind(controller));
    router.put('/', controller.update.bind(controller));
    app.use('/stage', router);
};