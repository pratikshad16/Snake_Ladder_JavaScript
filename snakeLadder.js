class SnakeLadder {
    startSimulation(){
        var START_POSITION = 0;
        var END_POSITION = 100;
        console.log("Starting Position is: "+START_POSITION)
        console.log("Ending Position is: "+END_POSITION)
        
    function rollDie() 
        {
        var dice = Math.floor((Math.random()*6)+1);
        console.log("Number on dice is :"+dice);
        }
        rollDie()
    }
}
module.exports = new SnakeLadder();