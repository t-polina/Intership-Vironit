let express = require('express');
let app = express();
require('./MongoService');
app.use(express.json());
require('./routes')(app);
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});