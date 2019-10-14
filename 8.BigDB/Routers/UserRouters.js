const Controller = require('../Controller/UserController');
const controller = new Controller();

module.exports = function (app,express) {
    const router = express.Router();
      /*
     * @oas [get] /user
     * description: Returns all user from the system
     */
    router.get('/', controller.read.bind(controller));
    /*
     * @oas [get] /user/race/{login}
     * description: Returns User with his race
     * parameters:
     *   - (path) login={String} The user login
     */
    router.get('/race/:login', controller.getWithRace.bind(controller));
    router.get('/league/:login', controller.getWithLeague.bind(controller));
    router.post('/',controller.create);
    router.delete('/', controller.delete.bind(controller));
    router.put('/', controller.update.bind(controller));
    app.use('/user', router);
};