// ------------------------------------------------------------------------------
// Rekuire
// ------------------------------------------------------------------------------
var rek = require('rekuire')

// ------------------------------------------------------------------------------
// Module dependencies
// ------------------------------------------------------------------------------
var express = rek('express')
var http = rek('http')
var path = rek('path')
var poet = rek('poet')

// ------------------------------------------------------------------------------
// Own Dependencies
// ------------------------------------------------------------------------------
var Constants = rek('felipe/application/utils/contants')
var Index = rek('felipe/application/routes/index')


// ------------------------------------------------------------------------------
// Variables
// ------------------------------------------------------------------------------
var app = express()


// ------------------------------------------------------------------------------
// All environments
// ------------------------------------------------------------------------------
app.configure('development', function() {
    app.use(express.logger('dev'))
    app.use(express.errorHandler())
})

app.configure(function() {
    app.set('port', process.env.PORT || Constants.SERVER_PORT)
    app.set('views', __dirname + '/views')
    app.set('view engine', 'jade')
    app.set('view options', {
        layout: false
    })
    app.use(express.bodyParser())
    app.use(express.methodOverride())
    app.use(rek('stylus').middleware({
        src: __dirname + '/views',
        dest: __dirname + '/public'
    }))
    app.use(express.static(__dirname + '/public'))
    app.use(app.router)
})


// ------------------------------------------------------------------------------
// Routes
// ------------------------------------------------------------------------------
app.get('/', function(req, res, next) {
    res.render('about')
})
app.get('/about', function(req, res, next) {
    res.render('about')
})
app.get('/blog', function(req, res, next) {
    res.render('blog')
})


// ------------------------------------------------------------------------------
// Configure blog
// ------------------------------------------------------------------------------
var poet = poet(app)
poet.init().then(function() {})


// ------------------------------------------------------------------------------
// Server creation
// ------------------------------------------------------------------------------
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
})