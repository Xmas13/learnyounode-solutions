/* Create a program that prints a list of files in a given  
  directory, filtered by the extension of the files. You will be  
  provided a directory name as the first argument to your program  
  (e.g. '/path/to/dir/') and a file extension to filter by as the  
  second argument.  
   
  For example, if you get 'txt' as the second argument then you  
  will need to filter the list to only files that end with .txt.  
  Note that the second argument will not come prefixed with a '.'.  
   
  The list of files should be printed to the console, one file per  
  line. You must use asynchronous I/O.  
*/

/* Require specific modules */
var fs = require('fs');
var path = require('path');

/* Set required variables == to the 1st and 
second argument given to the program */
var dir = process.argv[2];
var ext = process.argv[3];

/* Set list to undefined as it will be used
in the callback for our function */
var list = undefined;

/* Create a function called readDirectory which
takes a callback. We then read the directory, use
a function to check for errors and have directory
as our variable. We create an empty array to push
objects out of the read directory that match the
specific extension we defined above. We set our
undefined variable list = arr and initiate our
callback. */
function readDirectory(callback) {
	fs.readdir(dir, function doneReading (err, directory) {
		if (err)
			return callback(err)

		var arr = []
		for(i = 0; i < directory.length; i++) {
			if (path.extname(directory[i]) == '.' + ext) {
				arr.push(directory[i]);
			}
		}
		list = arr;
		callback(null, list);
	})
	
}

/* We create a function called logResult. 
This function is used on the list array to
print the results to standard output (one 
per line). */
function logResult() {
	for (i = 0; i < list.length; i++) {
	console.log(list[i])
	}
}

/* We then pass our results of the readDirectory
function into the logResult function */
readDirectory(logResult);