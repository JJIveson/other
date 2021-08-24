let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let generateTarget = () => {
  return Math.ceil(Math.random()*9);
};

//Math.abs returns the number regardless of negative or positive. EG. -3 and 3 both return 3.
//Define new constants within a function to simplify notation and make code more precise
let compareGuesses = (human, computer, target) => {
 const humanGuess = Math.abs(target - human);
 const computerGuess = Math.abs(target - computer);
 if (humanGuess <= computerGuess) {
   return true;
 } else {
   return false;
 }
};
//  return userG <= computerG;  ==== much simpler line of code than above if statement

let updateScore = (winner) => {
  if (winner === 'human') {
    return humanScore ++;
  } else if (winner === 'computer') {
    return computerScore ++;
  }
};

let advanceRound = () => {
  return currentRoundNumber ++
}