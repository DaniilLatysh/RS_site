
exports.cobinet = function(req, res, next){
  res.render('cobinet');
};

var path = require('path'),
	fs =require('fs');
exports.send = function(req, res, next){
	fs.readFile(req.files.book.path, function(err, data){
		var imageName = req.files.book.name
		
		if(!imageName){
			console.log("There was an error")
			res.redict("/");
			console.log("error download file");
			res.end();
		} else {
			var newPath = __dirname + "/../public/uploads/" + imageName;
			console.log(newPath);
			fs.writeFile(newPath, data, function(err){
				res.redirect("/uploads/"+imageName);
			});
		}
	})
}
