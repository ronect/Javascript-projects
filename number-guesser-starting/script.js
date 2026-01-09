let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};
const compareGuesses = (human, computer, target) => {
  const humanDiff = Math.abs(human- target);
  const computerDiff = Math.abs(computer - target);

  // Human wins if closer OR if tied
  if (humanDiff <= computerDiff) {
    return true;
  } else {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner == "human") {
    return (humanScore += 1);
  } else {
    return (computerScore += 1);
  }
};
const advanceRound = () => {
  return (currentRoundNumber += 1);
};
