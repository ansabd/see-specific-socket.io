var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});
var users = [];
var c=0;
io.on('connection', function(socket){
	socket.on("user", function (data){
		console.log(data+" Connected");
	});
	socket.on('msg', function(data){
		var username = data.username;
		var msg = data.value;
		console.log(username+": "+msg);
		io.emit("msg", {
			user :  username,
			msg : msg
		});
	});
});
http.listen(3000, function(){
console.log('listening on *:3000');
});