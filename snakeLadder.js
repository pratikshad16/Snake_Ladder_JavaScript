        let START_POSITION = 0;
        let END_POSITION = 100;
        const NO_PLAY = 1;
        const SNAKE = 2;
        const LADDER = 3;
        let dieNumber;
        let option;
        let numberOfTimesDiceRolled=0;
        let Player1=0;
        let Player2=0;
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
             dieNumber = this.rollDie(6) 
             option = this.rollDie(3)
            numberOfTimesDiceRolled++
            switch (option) {
                case NO_PLAY:
                    this.getNoPlayResult();
                   
                case SNAKE:
                    this.getSnakeResult();
                    
                case LADDER:
             this.getLadderResult();       
            }
        }
        console.log("Number of times dice rollled is:"+numberOfTimesDiceRolled)
    }
    getNoPlayResult(){
        console.log("You get: " + dieNumber)
        console.log("It's a no play option")
        START_POSITION = START_POSITION
        console.log("You are at same position==>"+START_POSITION)
        console.log();
    }
    getSnakeResult(){
        console.log("You get: " + dieNumber)
        console.log("It's a snake option")
        START_POSITION = START_POSITION - dieNumber;
        if(START_POSITION < 0) 
        START_POSITION = START_POSITION + dieNumber;
        console.log("You are at position==>" +START_POSITION)
        console.log(); 
    }
    getLadderResult(){
        console.log("You get: " + dieNumber)
        console.log("It's a ladder option")
         START_POSITION = START_POSITION + dieNumber;
        if(START_POSITION > END_POSITION)
        START_POSITION = START_POSITION - dieNumber;
        console.log("You are at position==> " +START_POSITION)
        console.log();
    }
}
module.exports = new SnakeLadder();