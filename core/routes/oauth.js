var self = module.exports = {
	register: function(express){
		express.all('/oauth/token', express.oauth.grant());
	}
};
self.__module = {
	provides: ['routes/register']
}