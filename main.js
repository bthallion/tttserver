'use strict';
(function () {
    var     koa  = require('koa'),
            route = require('koa-route'),
            serve = require('koa-static'),
            app  = koa(),
            PORT = 8080;

    app.use(serve('./tictactoe/src'));

    if (!module.parent) {
        app.listen(PORT);
    }
    console.log(PORT +" listening");
})();