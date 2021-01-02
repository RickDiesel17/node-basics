const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'tutorial'))) //"use" means you're using middleware

app.get('/', (req, res) => { // "/" means home rout
    // res.send('This is the home route');
    res.sendFile(path.join(__dirname, 'tutorial', 'index.html'));

});

app.get('/example', (req, res) => {
    res.send('hitting example route');
});

app.get('/example/:name/:age', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + ' :  ' + req.params.age);
});

app.listen(3000); //giving it a port to listen to

//use route parameter (here params) when you MUST have that data
//for things like optional settings (user can choose if he wants to sort byage) you should use query string parameter