const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());

require('./MongoService')();
require('./User/UserRouters')(app,express);
require('./Friend/FriendRouter')(app,express);
require('./Message/MessageRouter')(app,express);


const server = app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});

require('./Soket')(server)