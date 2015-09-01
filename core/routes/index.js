
var self = module.exports = {
    
    index: function(req, res) {
        res.send('hello world');
    },
    
    register: function(server) {
        server.get('/',server.oauth.authorise(),  self.index);
    }
};
self.__module = {
    provides: ['routes/register']
}