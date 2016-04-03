/*
  Write a program that uses a single asynchronous filesystem operation to  
  read a file and print the number of newlines it contains to the console  
  (stdout), similar to running cat file | wc -l.  
   
  The full path to the file to read will be provided as the first  
  command-line argument.  
   
*/

var fs = require('fs');
var arg = process.argv[2];
var lines = undefined;

function readFile(callback) {
	fs.readFile(arg, 'utf8', function doneReading(err, fileContents) {
			lines = fileContents.split('\n').length - 1;
			callback();
	})

}

function logResult() {
	console.log(lines);
}

readFile(logResult);

console.log('hello world');