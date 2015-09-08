var restify = require('restify');
var oauthServer = require('oauth2-server-restify');

module.exports = function(registerRoutes) {
    var self = {
        initializeApp: function() {
           
           //MongoDB
           var mongoose = require('mongoose');
           var uristring = 'mongodb://localhost/mLMS';
           
            // Makes connection asynchronously. Mongoose will queue up database
            // operations and release them when the connection is complete.
            mongoose.connect(uristring, function (err, res) {
            if (err) {
                console.log ('ERROR connecting to: ' + uristring + '. ' + err);
            } else {
                console.log ('Succeeded connected to: ' + uristring);
            }
            });           
           
            var server = restify.createServer({
                name: 'mLMS',
                version: '1.0.0'
            });
            
            server.use(restify.bodyParser({mapParams: false}));
            
            server.oauth = oauthServer({
                model: require('./models/authentication.js'),  
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