var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3001;
var IP = process.env.IP || 'localhost';

app.use(bodyParser.urlencoded({extended: false}));

if (app.get('env') === 'development') {
    app.use(require('morgan')('dev'));
} else if ((app.get('env') === 'production')) {
    app.use(require('express-logger')({
        path: __dirname + '/log/request.log'
    }));
}

app.get('/', function(req, res) {
    res.send('hi');
});

app.listen(PORT, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('server is running');
    }
});