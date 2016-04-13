  /* Write a program that performs an HTTP GET request to a URL  
    provided to you as the first command-line argument. Collect all  
    data from the server (not just the first "data" event) and then  
    write two lines to the console (stdout).  
     
    The first line you write should just be an integer representing  
    the number of characters received from the server. The second  
    line should contain the complete String of characters sent by the  
    server. */
  /* Require specific modules */
  var http = require('http');
  var bl = require('bl');
  var webAddress = process.argv[2];
  /* Run an http.get request and run a callback
  on the response. We pipe the response to our
  module called bl. bl takes in the data, 
  converts it to string and prints the length
  of the stream and the entire stream. */
  http.get(webAddress, function callback(res) {
  	res.pipe(bl(function(err, data) {
  		if (err)
  			return console.error(err);
  		console.log(data.toString().length);
  		console.log(data.toString());
  	}))
  })