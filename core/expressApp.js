var express = require('express'),
    bodyParser = require('body-parser'),
    oauthserver = require('oauth2-server');

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
            
            app.use(bodyParser.urlencoded({ extended: true }));
            
            app.use(bodyParser.json());
            
            app.oauth = oauthserver({
                model: {}, //TODO: Define Model in MongoDB using Mongoose 
                grants: ['password'],
                debug: true
            });
            
            app.use(app.oauth.errorHandler());
            
            //Set Port
            var port = normalizePort(process.env.PORT || '3000');
            
            //Create Server
            registerRoutes(app);
            
            app.listen(port);            
        }
    }
    return self;
};

module.exports.__module = {
    args: ['svc!routes/register'],
    provides: ['initializeApp']
} 