var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');

var app = express();

/****************
 * MONGODB
 ****************/
mongoose.connect('mongodb://127.0.0.1:27017/tp8', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('Mongo ready: ' + mongoose.connection.readyState) })
  .catch(() => { console.log('Mongo: Error Connecting...') })
//mongoimport --db tp8 --collection prizes --file prize.json --jsonArray

/****************
 * ROUTERS
 ****************/
var apiRouter = require('./routes/apiRouter');
app.use('/api', apiRouter);

/****************
 * MIDDLEWARES
 ****************/
app.use(logger('dev'));
app.use(express.json());

// catch 404 and forward to error handler
app.use(function (req, res) {
  res.jsonp(
    {
      Request: {
        Request: "No existing request...",
        Message: "None...",
        Status: 404
      },
      Data: []
    }
  )
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
