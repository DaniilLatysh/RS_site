exports.index = function(req, res){
	config = require('../config');
	scripts = config.get('scripts');
//	scripts.push['bootstrap/js/jquery.js', 'bootstrap/js/bootstrap.min.js'];
	styles = config.get('styles');
//	styles = ['bootstrap/css/bootstrap.min.css', 'bootstrap/css/half-slider.css'];
	res.render('rs',{
	styles: styles,
	scripts: scripts
	});
}