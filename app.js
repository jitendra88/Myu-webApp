var express = require('express')
    , app = express()
var Constants = require('./config/constant').Constants;
var engines = require('consolidate');
app.set('views', __dirname + '/views');
app.engine('html', engines.swig);
app.set('view engine', 'html');
app.use(require('./routers/router'));
app.listen(Constants.port, function() {
    console.log('Listening on port.....'+Constants.port);
})