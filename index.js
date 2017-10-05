var fs = require('fs');
var path = require('path');
var debug = require('debug');

var koa = require('koa');
var serve = require('koa-static');
var koaRouter = require('koa-router');

// Enable debugging for our app
debug.enable('app');

// Construct some things
var log = debug('app');
var app = koa();
var router = koaRouter();

// Log to console
log.log = console.log.bind(console);

// handle /
router.redirect('', '/index.html');

// Enable static dir
app.use(serve('.'));

// Use router
app.use(router.routes());
app.use(router.allowedMethods());


// Listen on port 8000
app.listen(8000);
log('Listening on port 8000');
