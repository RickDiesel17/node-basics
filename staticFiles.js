const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    // const readStream = fs.createReadStream('./tutorial/example.txt');
    // const readStream = fs.createReadStream('./tutorial/index.html');
    // const readStream = fs.createReadStream('./tutorial/datastr.json');
    const readStream = fs.createReadStream('./tutorial/wooden1.png')
    
    // res.writeHead(200,{'Content-type': 'text/html'}); //let client know what kind of data we're expecting; 200 means everything went well as expected
    // res.writeHead(200,{'Content-type': 'application/json'});
    res.writeHead(200,{'Content-type': 'image/png'});

    readStream.pipe(res);
}).listen('3000');
