const http = require('http');

const server = http.createServer((req, res) => {
	res.write('Welcome to my GIT Tutorial!');
	res.end();
});

server.on('listening', () => {
	console.log('LIVE on port 3000');
});

server.listen(3000);