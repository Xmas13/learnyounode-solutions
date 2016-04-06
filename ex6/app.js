var dir = process.argv[2];
var ext = process.argv[3];
var filterbyext = require('./filterbyext.js');

filterbyext.readDirectory(dir, ext, function(err, files) {
	for (i = 0; i < files.length; i++) {
		console.log(files[i]);
	}
})