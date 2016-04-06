
var fs = require('fs');
var path = require('path');
var exports = module.exports = {};
exports.readDirectory = function (dir, ext, callback) {
	fs.readdir(dir, function doneReading (err, directory) {
		if (err)
			return callback(err)

		var arr = []
		for(i = 0; i < directory.length; i++) {
			if (path.extname(directory[i]) == '.' + ext) {
				arr.push(directory[i]);
			}
		}
		callback(null, arr);
	})
	
}

