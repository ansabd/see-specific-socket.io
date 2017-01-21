var http = require('http');
var fs = require('fs');

// Loading the index file . html displayed to the client
var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

// Loading socket.io
var io = require('socket.io').listen(server);
var c=1;
// When a client connects, we note it in the console
io.sockets.on('connection', function (socket) {
	console.log("user connected %s",c);
	c++;
	socket.emit('message', 'You are connected!');

    // When the server receives a “message” type signal from the client   
    socket.on('tst', function (message) {
    console.log("%s",message);
	
}); 
});
server.listen(8080);
console.log("Server Running on 8080");

