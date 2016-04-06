
// Require modules that make the module work
var fs = require('fs');
var path = require('path');

/* We use the module.exports function to export
a set (or in our case just one) modules by name.
It goes name, then the anonymous function.*/
module.exports = {
/* Just like our previous exercise our function
takes in the first 2 arguments which are dir and
ext. We add to it the argument callback. This will
return all the information that will be used to 
pass into another function. (for printing to
console as an example). */
readDirectory : function (dir, ext, callback) {
	fs.readdir(dir, function doneReading (err, directory) {
		if (err)
			return callback(err)

		var arr = []
		for(i = 0; i < directory.length; i++) {
			if (path.extname(directory[i]) == '.' + ext) {
				arr.push(directory[i]);
			}
		}
		/* we need to ensure we use null as the first argument
		as we checked for errors before getting to our callback.
		Second argument is what is returned for the callback. */
		callback(null, arr);
	})
	
	}
}

