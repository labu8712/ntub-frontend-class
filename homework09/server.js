var http = require('http');

function start() {
    function onRequest(request, respones) {
        console.log('onRequest function.');
        respones.writeHead(200, { 'Content-Type': 'text/plain' });
        respones.write('Hi, I\'m Arthur Chang');
        respones.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log('start', 'createServer listen 8888.');
}

exports.start = start;
