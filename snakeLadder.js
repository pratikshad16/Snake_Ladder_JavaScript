        let START_POSITION = 0;
        let END_POSITION = 100;
        const NO_PLAY = 1;
        const SNAKE = 2;
        const LADDER = 3;
        console.log("Starting Position is: " + START_POSITION)
        console.log("Ending Position is: " + END_POSITION)
class SnakeLadder {
        rollDie(input)
        {
            return (Math.floor((Math.random() * input) + 1));
        }
        checkOption() 
        {
            while(START_POSITION != END_POSITION)
            {
            let dieNumber = this.rollDie(6) 
            let option = this.rollDie(3)
            switch (option) {
                case NO_PLAY:
                    console.log("You get: " + dieNumber)
                    console.log("It's a no play option")
                    START_POSITION = START_POSITION
                    console.log("You are at same position==>"+START_POSITION)
                    console.log();
                    break;
                
                case SNAKE:
                    console.log("You get: " + dieNumber)
                    console.log("It's a snake option")
                    START_POSITION = START_POSITION - dieNumber;
                    if(START_POSITION < 0) 
                    START_POSITION = START_POSITION + dieNumber;
                    console.log("You are at position==>" +START_POSITION)
                    console.log(); 
                    break;                 

                case LADDER:
                    console.log("You get: " + dieNumber)
                    console.log("It's a ladder option")
                     START_POSITION = START_POSITION + dieNumber;
                    if(START_POSITION > END_POSITION)
                    START_POSITION = START_POSITION - dieNumber;
                    console.log("You are at position==> " +START_POSITION)
                    console.log();
                    break;
            }
        }
    }
}
module.exports = new SnakeLadder();