/**
 *  Node.js base server
 */

//  requier http module
var http = require('http');  
http.createServer(function(req, res){
	//  set web http header
	res.writeHead(200, {'Content-Type': 'text/plain'});
	//  response http string to web client
	res.end('Hello World\n');
	//  set http listen ip and port
}).listen(1337, "127.0.0.1");
console.log('Server ruuing at http://127.0.0.1:1337');