var restify = require('restify');
var oauthServer = require('oauth2-server-restify');

module.exports = function(registerRoutes) {
    var self = {
        initializeApp: function() {
           
            var server = restify.createServer();
            
            server.use(restify.bodyParser());
            
            server.oauth = oauthServer({
                model: {}, //TODO: Define Model in MongoDB using Mongoose 
                grants: ['password'],
                debug: true
            });
            
            //Set Port
            var port = '3000';
            
            //Create Server
            registerRoutes(server);
            
            server.listen(port);            
        }
    }
    return self;
};

module.exports.__module = {
    args: ['svc!routes/register'],
    provides: ['initializeApp']
} 