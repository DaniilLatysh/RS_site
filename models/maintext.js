var mongoose = require('../config/mongoose');
Schema = mongoose.Schema;

var schema = new Schema({
	name: {
		type: String,
		unique: true,
		require: true
	},
		body: {
			type: String,
			require: true
		},
			url: {
				type: String,
				unique: true,
				require: true
			}
});

exports.maintext = mongoose.model('maintext', schema);