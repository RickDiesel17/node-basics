const { RSA_X931_PADDING } = require('constants');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); //return readline interface object

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);

let answer = num1 + num2;
var status;

rl.question(`What is ${num1} + ${num2}? \n`,
    (userInput) => {
        if (userInput.trim() == answer) {
            
            //status = 'correct';
            rl.close()
        }
        else {
            rl.setPrompt("That was ez fam, try again\n");
            //status = 'incorrect';
            rl.prompt()
            rl.on('line', (userInput) => {
                if (userInput.trim() == answer)
                    rl.close()
                else{
                    rl.setPrompt(`Ahh fam, your answer: ${userInput}, is incorrect; try again \n`)
                    rl.prompt()
                }
            })
        }

        //console.log(`Your answer: ${userInput}, is ${status}`);

        rl.on('close', () => {
            console.log("Congrats! You know basic arithmetic");
        });
    });