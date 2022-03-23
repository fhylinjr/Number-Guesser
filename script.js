let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () =>{
  return Math.floor(Math.random()*10);
}

const compareGuesses = (userGuess, computerGuess, targetNumber) => {

  const userDifference = Math.abs(userGuess-targetNumber);
  const computerDifference = Math.abs(computerGuess-targetNumber);
  if (userDifference <= computerDifference){
    return true;
  }
  else{
    return false;
  }

}

const updateScore = winner => {
  if (winner === 'human'){
    humanScore++;
  }
  else{
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}