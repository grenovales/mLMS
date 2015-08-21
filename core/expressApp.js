var express = require('express'),
  http = require('http');

module.exports = function(registerAllRoutes) {
    return {
        start: function() {
            var app = express();
            app.use(app.router);

            //now we register our routes
            registerAllRoutes(app);

            http.createServer(app).listen(app.get('port'), function () {
              console.log('Express server listening on port ' + app.get('port'));
            });
        }
    };
};
//The Scatter annotation
module.exports.__module = {
    //Inject a service as dependency
    args: ["svc!routes/register"]
};