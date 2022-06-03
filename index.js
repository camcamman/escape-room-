const readline = require("readline-sync");
let doorClosed = true
let key = false

const name = readline.question("What is your name? ");
readline.question("hey "+name+" press the number that gose with the option you would like. press enter to contune ")
while (doorClosed) {
    choices = ['To put hand in hole', 'To look for the key', 'To open the door'];
    let index = readline.keyInSelect(choices, 'What do you want to do?');


    // console.log(index)
    if(index === 0) {
        console.log("It would seam that the hole killed you refresh to restart "+name)
        doorClosed = false
    }
    if(index === 1) {
            key = true
            readline.question(name+' You found the key! enter to contnue')
        }
    if(index === 2) {
        if (key) {
            doorClosed = false
            console.log("Good job! "+name+" you did it! You escaped")
        }
        else {
            readline.question("The door is locked. enter to go back to options")
        }
    }
}