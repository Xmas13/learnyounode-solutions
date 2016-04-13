var http = require('http');
var fs = require('fs');

http.createServer((request, response) => {
	var filename = process.argv[3]
	var readStream = fs.createReadStream(filename)
	readStream.on('open', () => {
		readStream.pipe(response);
	});
	readStream.on('error', (err) => {
		response.end(err);
	});
}).listen(process.argv[2])