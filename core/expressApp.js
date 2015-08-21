var express = require('express');
var http = require('http');

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

module.exports = function(registerRoutes) {
    var self = {
        initializeApp: function() {
           
            var app = express();
            
            //Set Port
            var port = normalizePort(process.env.PORT || '3000');
            
            //Create Server
            registerRoutes(app);
            
            http.createServer(app).listen(port, function () {
              console.log('Express server listening on port ' + port);
            });            
        }
    }
    return self;
};

module.exports.__module = {
    args: ['svc!routes/register'],
    provides: ['initializeApp']
} 