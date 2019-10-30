const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors')
app.use(cors())
require('./MongoService')();
require('./Routers/UserRouters')(app,express);
require('./Routers/RaceRouters')(app, express);
require('./Routers/StageRouters')(app, express);
require('./Routers/LeagueRouters')(app,express);

app.all("/", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});



app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});