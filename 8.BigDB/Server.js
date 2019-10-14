const express = require('express');
const app = express();
app.use(express.json());

require('./MongoService')();
require('./Routers/UserRouters')(app,express);
require('./Routers/RaceRouters')(app, express);
require('./Routers/StageRouters')(app, express);
require('./Routers/LeagueRouters')(app,express);

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});