const sum = (num1, num2) => num1 + num2;
const PI = 3.14;
class SomeMathObj {
    constructor() {
        console.log('object created');
    }
}
module.exports = { sum: sum, PI: PI, SomeMathObj: SomeMathObj };

// module.exports.sum = sum;
// module.exports.PI = PI;
// module.exports.SomeMathObj = SomeMathObj;