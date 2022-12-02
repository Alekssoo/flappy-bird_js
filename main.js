import Game from "./src/game.js";


const game = new Game();
game.prepare().then(() => {
    game.start()
})

