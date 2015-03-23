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