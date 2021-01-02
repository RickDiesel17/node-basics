const fs = require('fs');
//create a file

// fs.writeFile('example.txt', 'this is an example', (err) => {
//     if (err)
//         console.log(err);
//     else {
//         console.log('File successfully created');
//         fs.readFile('example.txt', 'utf8', (err, file) => {
//             if (err)
//                 console.log(err);
//             else
//                 console.log(file);
//         });
//     }
// });

// fs.rename('example.txt', 'example2.txt', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log('Successfully renamed the file');
// });

// fs.appendFile('example2.txt', '\n Some data being appended', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log("Successfully appended data totuhe file");
// });

// fs.unlink('example2.txt', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log("Successfully deleted the file");
// });

// fs.mkdir('tutorial', (err) => {
//     if (err)
//         console.log(err);
//     else
//         fs.writeFile('./tutorial/example.txt', '123456', (err) => {
//             if (err)
//                 console.log(err);
//             else
//                 console.log("Successfully created the folder and file");
//         });
// });

// fs.unlink('./tutorial/example.txt', (err) => {
//     if (err)
//         console.log(err);
//     else {
//         fs.rmdir('tutorial', (err) => {
//             if (err)
//                 console.log(err);
//             else
//                 console.log("Successfully deleted the file and folder");
//         });
//     }
// });

// fs.rmdir('tutorial', (err) => {
//     if (err)
//         console.log(err);
//     else
//         console.log("Successfully deleted the folder");
// });

fs.readdir('tutorial', (err, files) => {
    if (err)
        console.log(err);
    else
        for (let file of files) {
            fs.unlink('./tutorial/' + file, (err) => {
                if (err)
                    console.log(err);
                else
                    console.log(`Successfully deleted the file: ${file}`);
            });
        }
});