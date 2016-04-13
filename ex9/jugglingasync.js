  /*This problem is the same as the previous problem (HTTP COLLECT)  
    in that you need to use http.get(). However, this time you will  
    be provided with three URLs as the first three command-line  
    arguments.  
     
    You must collect the complete content provided to you by each of  
    the URLs and print it to the console (stdout). You don't need to  
    print out the length, just the data as a String; one line per  
    URL. The catch is that you must print them out in the same order  
    as the URLs are provided to you as command-line arguments. */

    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    /* Define a function to print the results
    array created by our httpGet function. It
    loops through the results array one index
    entry at a time */
    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }
    
    /* Define httpGet function that takes 
    one argument (index) */
    function httpGet (index) {
      /* Increments the process.argv by the index
      argument taken by the function. */
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)
		  // Adds index to the results array
          results[index] = data.toString()
          // Increments the count by one
          count++
    	  // If the count == 3, it runs
    	  // the print results function
          if (count == 3)
            printResults()
        }))
      })
    }
    
    /* This is the function used to increment
    and input the index into the httpGet
    function */
    for (var i = 0; i < 3; i++)
      httpGet(i)