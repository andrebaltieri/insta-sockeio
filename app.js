var io = require('socket.io')(5430);

io.on('connection', function (socket) {
	console.log('Um cliente se conectou');

	socket.on('post', function (post) {
		io.emit('post', post);
	});
});