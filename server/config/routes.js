var auth = require('./auth');

module.exports = function(app) {

	app.get('/partials/*', function (req, res) {
		res.render('../../public/app/' + req.params);
	});

	app.post('/login', auth.authenticate);

	app.post('/logout', function(req,res){
		req.logout(); // method was added to req by passport module
		res.end();
	});

	app.get('*', function (req, res) {
		res.render('index', {
			bootstrappedUser: req.user
		});
	});
};
