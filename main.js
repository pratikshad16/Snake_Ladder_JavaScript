class Main {
    main (){
                console.log("Welcome to Snake And Ladder Simulation Program");
                const data = require('./snakeLadder')
                data.startSimulation();
            }
}
const obj = new Main();
  obj.main();