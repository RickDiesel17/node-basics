const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == '/') { //if URL is root domain or not
        res.write('Hello world from node.js'); //what is the response
        res.end(); //send the response back
    }
    else {
        res.write('other domain'); //what is the response
        res.end();
    }
});

server.listen('3000');