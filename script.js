let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return random = Math.floor(Math.random() * 10);
}
console.log(generateTarget());

const compareGuesses = (humanGuess,computerGuess,targetGuess) =>{
const humanDifference = Math.abs(targetGuess - humanGuess);
const computerDifference = Math.abs(targetGuess - computerDifference);
if (humanDifference <= computerDifference){
  return true;
}else {
  return false;
}
}

function updateScore(winner){
if(winner === 'human'){
  humanScore++;
}else if (winner === 'computer'){
  computerScore++;
 }
}

function advanceRound(){
  currentRoundNumber =+ 1;
}
