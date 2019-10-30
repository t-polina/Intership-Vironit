const Controller = require('../Controller/LeagueController');
const controller = new Controller();
const adminValid = require('../Validate/AdminValid');

module.exports = function (app,express) {
    const router = express.Router();
    router.get('/get', controller.read.bind(controller));
    router.post('/', adminValid, controller.create.bind(controller) );
    router.delete('/:id', adminValid,  controller.delete.bind(controller));
    router.put('/:id',adminValid, controller.update.bind(controller));
    app.use('/league', router);
};
  