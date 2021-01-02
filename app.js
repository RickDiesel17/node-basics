console.log('Hello');

const tutorial = require('./tutorial');
console.log(tutorial.sum(1, 1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObj());
// console.log(tutorial(1,1));
// sum(1, 1);

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('tutorial', (num1, num2) => {
    console.log('tutorial event has been called');
    console.log(num1 + num2);
})

emitter.emit('tutorial', 1, 2);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let sam = new Person("Sammy");
let pari = new Person('Prtishtha');

sam.on('name', () => {
    console.log('my name is ' + sam.name);
});

pari.on('name', () => {
    console.log('my name is ' + pari.name);
});

pari.emit('name');
sam.emit('name');


// --------------------
// ABOUT PACKAGE.JSON

// "lodash": "^4.17.20" : <major version of the package>.<minor version>.<patch version>

// patch update : bug fixes
// minor update: adds new functionality, makes some old functionality obsolete (still usable; non-breaking change update)
// major update: there has been a breaking  change; any code of 4 is not compatible with the new version
// ^ character (before major version) means: 4.x.x, dont make any manjor updates, all others fine
// ~ character (before major version) means: 4.17.x, make only patch updates
// no charcter: 4.17.20 will remain constant and unchanged