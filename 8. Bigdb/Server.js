const express = require('express');
const app = express();
app.use(express.json());
require('./MongoService');
require('./Routers/UserRouters')(app);
require('./Routers/RaceRouters')(app);
require('./Routers/StageRouters')(app);
require('./Routers/LeagueRouters')(app);
app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});