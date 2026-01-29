// Random number generator
const RandNumGenerator = (num) => (Math.floor(Math.random() * num))


// objects that contain array of different games 
const GameOptions = {
    Console : ["Call of duty", "Fortnite", "Fall guys", "Palworld", "Rainbow"],
    Card : ["Spades", "Poker", "Blackjack", "Rummy", "Uno", "BULL####"],
    Board : ["Connect 4", "Sorry!", "Trouble", "Guess Who" , "chess", "checkers"]
}

const GameSelector =() => {
   const saying = [];
for (let games in GameOptions){
    let index = RandNumGenerator(GameOptions[games].length)
    switch (games){
        case "Console": saying.push('We can play a Console game like '+ GameOptions[games][index]);
        break;

        case "Card": saying.push('or we can play a Card game like '+ GameOptions[games][index]);
        break;

        case "Board": saying.push(" or we can play a Board game like " + GameOptions[games][index]);
        break;

        default:  console.log('Ask again later');
        break;
    
}

}
return saying.join(' \n' )}


console.log(GameSelector());