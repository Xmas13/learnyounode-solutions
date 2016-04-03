/*
Write a program that uses a single synchronous filesystem operation to  
read a file and print the number of newlines (\n) it contains to the  
console (stdout), similar to running cat file | wc -l.  
 
The full path to the file to read will be provided as the first  
command-line argument (i.e., process.argv[2]). You do not need to make  
your own test file.
*/

var fs = require('fs'); // requires fs module

/* 
Sets arg = the 3 command line argument (because node and path to file 
are the first and second argument).
*/
var arg = process.argv[2]; 

/* 
Creates a variable call lines, using fs we read synchronously from the file 
system. We also include want the buffer in the utf8 format. We then split
the string by each new line created and we get the length of that array
- 1 since the array will have a final new line at the end of the file.
*/
var lines = fs.readFileSync(arg, 'utf8').split('\n').length - 1; 

console.log(lines);
/* 
Because this runs in a synchronous format, this will wait until the above
code is done executing in order to run hello world.
*/
console.log('hello world');