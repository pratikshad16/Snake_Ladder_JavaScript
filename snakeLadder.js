/**
* constants
*/
const START_POSITION = 0;
const END_POSITION = 100;
const NO_PLAY = 1;
const SNAKE = 2;
const LADDER = 3;

/**
 * variables
 */
let startPositionOfPlayerOne = 0;
let startPositionOfPlayerTwo = 0;
let dieNumber;
let option;
let countOfDiePlayer1 = 0;
let countOfDiePlayer2 = 0;
let turn = 0;

console.log("Starting Position is: " + START_POSITION)
console.log("Ending Position is: " + END_POSITION)
class SnakeLadder {
    /**
 * variables
 */
    rollDie(input) {
        return (Math.floor((Math.random() * input) + 1));
    }
    /**
 * Function for checking option with position
 */
    checkOption(option, position) {
        switch (option) {
            case NO_PLAY:
                position = this.getNoPlayResult(position);
                break;
            case SNAKE:
                position = this.getSnakeResult(position);
                break;
            case LADDER:
                position = this.getLadderResult(position);
                break;
        }
        return position;
    }
    /**
 * Function for no play option
 */
    getNoPlayResult(position) {
        console.log("You get: " + dieNumber)
        console.log("It's a no play option")
        position = position
        console.log("You are at same position==>" + position)
        console.log();
        return position;
    }
    /**
 * Function for snake option
 */
    getSnakeResult(position) {
        console.log("You get: " + dieNumber)
        console.log("It's a snake option")
        position = position - dieNumber;
        if (position < 0)
            position = position + dieNumber;
        console.log("You are at position==>" + position)
        console.log();
        return position;
    }
    /**
 * Function for ladder option
 */
    getLadderResult(position) {
        console.log("You get: " + dieNumber)
        console.log("It's a ladder option")
        position = position + dieNumber;
        if (position > END_POSITION)
            position = position - dieNumber;
        console.log("You are at position==>" + position)
        console.log();
        return position;
    }
    /**
 * Function for game of two players
 */
    twoPlayerGame = () => {
        while (startPositionOfPlayerOne != END_POSITION && startPositionOfPlayerTwo != END_POSITION) {
            dieNumber = this.rollDie(6);
            option = this.rollDie(3);
            if (turn % 2 == 0) {
                console.log("Player 1  will play")
                startPositionOfPlayerOne = this.checkOption(option, startPositionOfPlayerOne);
                countOfDiePlayer1++;
                turn++;
                if (startPositionOfPlayerOne == END_POSITION) {
                    console.log("Player 1 won the game")
                    console.log("Number of times dice rolled by player 1 :" + countOfDiePlayer1);
                }
            }
            else {
                console.log("Player 2 will play")
                startPositionOfPlayerTwo = this.checkOption(option, startPositionOfPlayerTwo);
                countOfDiePlayer2++;
                turn++;
                if (startPositionOfPlayerTwo == END_POSITION) {
                    console.log("Player 2 won the game")
                    console.log("Number of times dice rolled by player 2 :" + countOfDiePlayer2)
                }
            }
        }
    }
}
module.exports = new SnakeLadder();