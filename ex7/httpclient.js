/* Write a program that performs an HTTP GET 
request to a URL provided to you as the first 
command-line argument. Write the String 
contents of each "data" event from the response 
to a new line on the console (stdout). */

/* Require specific modules */
var http = require('http');
var webAddress = process.argv[2];

/* Run http.get on webAddress and we use a callback
to handle the response. We set the encoding, response
on what we do with the data and handle errors in
the callback.  */
http.get(webAddress, function callback (res) {
	res.setEncoding('utf8');
	res.on("data", function (data) {
		console.log(data);
	})
	res.on('error', function (error) {
		console.error(data);
	})
})
