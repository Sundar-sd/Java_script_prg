const min = 1;
const max =100;
const ans = Math.floor(Math.random*(max - min +1) + min);

let attempt =0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a num between ${min} to ${max}`);
    guess = Number(guess);

    if(isNaN){
        window.alert("please enter a valid Number");
    }
    else if(guess > max || guess < min){
        window.alert("please enter a valid Number");
    }
    else {
        at
    }

}