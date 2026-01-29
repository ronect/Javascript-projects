// Random number generator
// Takes a number and returns a random integer from 0 up to (but not including) that number
const RandNumGenerator = (num) => Math.floor(Math.random() * num);


// Object containing arrays of different game categories
const GameOptions = {
    Console: ["Call of duty", "Fortnite", "Fall guys", "Palworld", "Rainbow"],
    Card: ["Spades", "Poker", "Blackjack", "Rummy", "Uno", "BULL####"],
    Board: ["Connect 4", "Sorry!", "Trouble", "Guess Who", "chess", "checkers"]
};


// Function that selects a random game from each category
const GameSelector = () => {

    // Array to store the final output messages
    const saying = [];

    // Loop through each key in the GameOptions object
    for (let games in GameOptions) {

        // Generate a random index based on the length of the current game array
        let index = RandNumGenerator(GameOptions[games].length);

        // Decide what message to add based on the category
        switch (games) {

            case "Console":
                // Add a console game suggestion
                saying.push(
                    'We can play a Console game like ' + GameOptions[games][index]
                );
                break;

            case "Card":
                // Add a card game suggestion
                saying.push(
                    'Or we can play a Card game like ' + GameOptions[games][index]
                );
                break;

            case "Board":
                // Add a board game suggestion
                saying.push(
                    'Or we can play a Board game like ' + GameOptions[games][index]
                );
                break;

            default:
                // Runs if none of the cases match (safety fallback)
                console.log('Ask again later');
                break;
        }
    }

    // Combine all messages into a single string, each on a new line
    return saying.join(' \n');
};


// Call the function and print the result to the console
console.log(GameSelector());
