/*
  Write a program that uses a single asynchronous filesystem operation to  
  read a file and print the number of newlines it contains to the console  
  (stdout), similar to running cat file | wc -l.  
   
  The full path to the file to read will be provided as the first  
  command-line argument.  
   
*/

// Require and set variables
var fs = require('fs');
var arg = process.argv[2];
/*
	You set the lines variable to undefined
	because we are using node style callbacks
	and logResult is not going to know the value 
	of the lines variable This is important because 
	you are using a asynchronous read from the file 
	system, thus allowing hello world at the bottom
	to run when it's ready and readfile to 
	run when it's ready.
*/
var lines = undefined;

/*
	We define the function readFile with a
	single callback argument. We then do 
	a read from the file system taking 
	3 arguments. The first is the global
	arg defined above, utf8 (because we
	want a string), and a function called
	doneReading. doneReading takes 2 arguments
	it first checks for errors and a variable
	defining what it's doing called doneReading.
	This is defining what is happening when it's
	done reading from the file system and what
	we do with the input. We split by new line
	and get the length of the fileContents - 1
	and set it equal to global variable lines.
	when then initiate callback() which says, 
	when you are done reading, input the 
	argument into readFile function.
*/
function readFile(callback) {
	fs.readFile(arg, 'utf8', function doneReading(err, fileContents) {
		lines = fileContents.split('\n').length - 1;
		callback();
	})

}

/* 
	We create another function called logResult
	which is doing the logging of our output.
	This takes in the global variable lines.
*/
function logResult() {
	console.log(lines);
}

/*
	We then put logResult into the readFile
	function as that what we want to do with
	our variable when we are doine.
*/
readFile(logResult);

/* 
	This is here to differentiate what 
	happens in this script and myfirstsyncio.js
*/
console.log('hello world');