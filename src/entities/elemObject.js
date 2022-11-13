export default class elemObject {
    constructor({x, y, width, height, frames, spriteSheet, speedFlap, physicSource, drawSource, game}) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.width = height;
        this.speed = 0;

        this._frames = frames;
        this._frameIndex = 0;
        this._speedFlap = speedFlap;
        this._spriteSheet = spriteSheet;
        this._physicSource = physicSource;
        this._drawSource = drawSource;
        this._game = game;
    }

    
    draw() {
        this.drawSorce.drawImage(this._spriteSheet, this._frames[this._frameIndex], this.x, this.y, this.width, this.height)
    }

    update() {
        this.physicSource.update(this);

        if (this.y < 0) {
            this.y = 0
        }

        if (this.y + this.height >= this._game.height) {
            this._game.defeat();
        }

        this._frameIndex = (this._frameIndex++) % this._frames.length;
    }

    flap() {
        this.speed = -this._speedFlap;
    }
}