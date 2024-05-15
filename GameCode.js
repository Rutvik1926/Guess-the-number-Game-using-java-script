// Guess the Game Main code.
const prompt = require('prompt-sync')(); 

let n = Math.floor(Math.random() * 100 + 1)
let a = "You have total 100 chances to guess the number"
console.log(a)
let chances = 0;
let guess;
i = prompt("Enter a number between 1 to 100 Until the correct number is gussed : ")
++chances;
do {
  i = Number.parseInt(i)

  if (i > n) {
    console.log("Number entered is greater")
    i = prompt("Enter again!!")
    i = Number.parseInt(i)
    ++chances;
    continue;
  }

  else if (i < n) {
    console.log("Number entered is smaller")
    i = prompt("Enter again!!")
    i = Number.parseInt(i)
    ++chances;
    continue;
  }

} while (i != n)
let score = 100 - chances;
console.log("\nCongratulations🥳🥳 \nThe number generated was", n + " and you guessed it right😁\nYour final score is", score);