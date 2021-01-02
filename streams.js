const fs = require('fs');

//without using streams:
// fs.readFile('example.txt', 'utf8', (err, file) => {
//     if (err)
//         console.log(err);
//     else
//         console.log(file);
// });

//using streams:

const zlib = require('zlib');
//const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();

// const readStream = fs.createReadStream('./tutorial/example.txt', 'utf8');
// const writeStream = fs.createWriteStream('./tutorial/example2.txt');
// const writeStream = fs.createWriteStream('./tutorial/example3.txt.gz');

const readStream = fs.createReadStream('./tutorial/example3.txt.gz');
const writeStream = fs.createWriteStream('./tutorial/uncompressed.txt');

// readStream.on('data', (chunk) => {
//     writeStream.write(chunk);
// });

//using pipes:
//readStream.pipe(writeStream);
//readStream.pipe(gzip).pipe(writeStream);

readStream.pipe(gunzip).pipe(writeStream);