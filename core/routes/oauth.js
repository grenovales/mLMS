var self = module.exports = {
	register: function(server){
		server.post('/oauth/token', server.oauth.grant());
	}
};
self.__module = {
	provides: ['routes/register']
}