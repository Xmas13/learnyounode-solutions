// Concept of this program: 
// Write a program that accepts one or more numbers as command-line arguments  
// and prints the sum of those numbers to the console (stdout).

// Create a total to store the added numbers.
var total = 0;

// Create a simple for loop which sets the initial loop through the array at 2
// (since the first 2 command line arguments are node and path to the program), 
// have it iterate over the array until i hits the length of the process array, 
// and have it add the command line arguments to the total each time it loops.
for (i = 2; i < process.argv.length; i++) {
	total += +process.argv[i];

}

console.log(total);