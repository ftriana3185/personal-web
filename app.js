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
var app = express()


// ------------------------------------------------------------------------------
// Own Dependencies
// ------------------------------------------------------------------------------
var Constants = rek('felipe/application/utils/contants')
var Index = rek('felipe/application/routes/index')

// ------------------------------------------------------------------------------
// All environments
// ------------------------------------------------------------------------------
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
    app.use(express.logger('dev'))
    app.use(express.static(__dirname + '/public'))
    app.use(app.router)
})


// ------------------------------------------------------------------------------
// Development
// ------------------------------------------------------------------------------
if ('development' == app.get('env')) {
    app.use(express.errorHandler())
}

// ------------------------------------------------------------------------------
// Routes
// ------------------------------------------------------------------------------
app.get('/', Index.index)


// ------------------------------------------------------------------------------
// Server creation
// ------------------------------------------------------------------------------
http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
})