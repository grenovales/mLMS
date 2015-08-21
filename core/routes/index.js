
var self = module.exports = {
    
    index: function(req, res) {
        res.send('hello world');
    },
    
    register: function(express) {
        express.get('/', express.oauth.authorise(), self.index);
    }
};
self.__module = {
    provides: ['routes/register']
}