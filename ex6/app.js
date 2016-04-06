// Require module I created to run function
var filterbyext = require('./filterbyext.js');
// Set variables to pass into the function required
var dir = process.argv[2];
var ext = process.argv[3];

/* Use the readDirectory function from the 
filterbyext module to take 3 arguments as defined
by the function in the module. dir, ext,
and callback. We use printContents to process
the data we get back from readDirectory to print
out the results. This takes 2 arguments, err and files.
*/
filterbyext.readDirectory(dir, ext, function printContents(err, files) {
	for (i = 0; i < files.length; i++) {
		console.log(files[i]);
	}
})