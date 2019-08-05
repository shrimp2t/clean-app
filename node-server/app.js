var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var session = require('express-session')
var MongoStore = require('connect-mongo')(session)

//connect to MongoDB
mongoose.connect('mongodb://localhost:27017/my-app-db', { useMongoClient: true })
var db = mongoose.connection

// handle mongo error
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  // we're connected!
})

//use sessions for tracking logins
app.use(
  session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: db,
    }),
  }),
)

// parse incoming requests

app.use(bodyParser.urlencoded({ extended: false }))


//  app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});


// serve static files from template
app.use(express.static(__dirname + '/templateLogReg'))

// include routes
var userRoutes = require('./routes/user')
var productRoutes = require('./routes/product')
app.use( userRoutes)
app.use( productRoutes )

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('File Not Found')
  err.status = 404
  next(err)
})

// error handler
// define as the last app.use callback
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.send(err.message)
})

// listen on port 9000
app.listen(9100, function() {
  console.log('Express app listening on port 9100')
})
