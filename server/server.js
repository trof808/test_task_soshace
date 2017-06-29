var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./db/db');
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

app.use('/', require('./routes/index'));

app.use((err, req ,res, next) => {
    // res.status(err.status);
    res.send({error: err.message});
    console.log(err.message);
});

app.listen(PORT, IP, function(err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('server is running');
    }
});