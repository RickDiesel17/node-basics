const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use('/public', express.static(path.join(__dirname, 'tutorial'))) //"use" means you're using middleware
app.use(bodyParser.urlencoded({extended: false})); //allowing us to parse url encoded forms - parses data, attaches it to requested body


app.get('/', (req, res) => { // "/" means home rout
    // res.send('This is the home route');
    res.sendFile(path.join(__dirname, 'tutorial', 'password.html'));

});

app.post('/', (req, res) => {
    console.log(req.body);
    // database work here
    res.send('successfully posted data');
});

app.get('/example/:name/:age', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + ' :  ' + req.params.age);
});

app.listen(3000);