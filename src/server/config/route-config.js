(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const coffee = require('../routes/coffee');

    // *** cross domain requests *** //
    const allowCrossDomain = function(req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      // res.header('Access-Control-Allow-Methods', 'GET ,PUT, POST, DELETE');
      // res.header('Access-Control-Allow-Headers', 'Content-Type');
      next();
    };


    app.use(allowCrossDomain);

    // *** register routes *** //
    app.use('/', routes);
    app.use('/coffees', coffee);

  };

})(module.exports);
