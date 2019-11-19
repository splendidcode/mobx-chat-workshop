const http = require ('http');
const faye = require('faye');


const server = http.createServer();
const bayeux = new faye.NodeAdapter({mount: '/chat', timeout: 45});

bayeux.attach(server);
server.listen(8000);

