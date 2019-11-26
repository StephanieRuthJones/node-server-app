// get http module
//require function, get from node.js core
const http = require('http')

//createServer self creates a server object which has a .listen event
http.createServer(function (req, res) {
    // when server object emits an event, this callback will be called
    //callback turned into event listener
    //res is an event emitter
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello world\n')


}).listen(1337, '127.0.0.1')

//standard local host: '127.0.0.1'
//http parser will give request and we can send back the response