class Main {
    main() {
        console.log("Welcome to Snake And Ladder Simulation Program");
        const data = require('./SnakeLadder')
        data.twoPlayerGame();
    }
}
const obj = new Main();
obj.main();