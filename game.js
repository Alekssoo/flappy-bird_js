export default class Game {
    constructor() {
        this._config = new Config();

        this._canvas = document.querySelector(this._config.canvas.class);
        this._canvas.width = this._config.canvas.width;
        this._canvas.height = this._config.canvas.height;

        this.width = this._config.canvas.width;
        this.height = this._config.canvas.height;
        

        this._drawSource = ...;
        this._physicSource = ...;
        this._spriteSheet = ...;

        this._bird = new Bird({x, y, width, height, frames, spriteSheet, speedFlap, physicSource, drawSource, game}:
            {
                x: this._config.bird.x,
                y: this._config.bird.y,
                width: this._config.bird.width,
                height: this._config.bird.height,
                frames: this._config.bird.frames,
                spriteSheet,
                speedFlap: this._config.bird.speedFlap,
                physicSource: this._physicSource,
                drawSource: this._drawSource,
                game: this
            })

    }
}