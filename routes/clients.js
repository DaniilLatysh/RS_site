exports.index = function(req, res){
	config = require('../config');
	scripts = config.get('scripts');
//	scripts.push['bootstrap/js/jquery.js', 'bootstrap/js/bootstrap.min.js'];
	styles = config.get('styles');
//	styles = ['bootstrap/css/bootstrap.min.css', 'bootstrap/css/half-slider.css'];
	res.render('clients',{
	styles: styles,
	scripts: scripts
	});
}

exports.index = function(req, res){
	if(req.params.id){
		var index = req.params.id;
	} else {
		var index = 'index';
	}
	
	var Maintext = require('../models/maintext').maintext;
	Maintext.findOne({'url':index}, function (err, text){
		if(!text){
			text = {
				name: '404 Not Found',
				body: '404 Not Found'
			}
		}
		/*if(req.session.user){
			userid = req.session.user;
		}else{
			userid = 0;
		}*/
		res.render('index', { text: text/*, userid: userid*/});
	});
};