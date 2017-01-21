var io = require('socket.io')(3000);
console.log('listening on *:3000');
io.on('connection', function(socket){
	io.emit('flag');
	socket.on("device", function(data)
	{
 		console.log("User Online ("+data+")\n");
	});
	
 	socket.on('message', function(data){
  	if (data == '') { return false; }
  		io.emit('message', data);
 	});
 	socket.on('disconnect', function(socket){
  	console.log("one user offline\n");
 });
});
