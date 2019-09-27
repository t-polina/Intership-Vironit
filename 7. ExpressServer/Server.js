let express = require('express');
let app = express();
app.use(express.json());

app.all('/users', function (req, res, next) {
  next();
});
require('./routes')(app);
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

