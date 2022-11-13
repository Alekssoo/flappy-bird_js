export default class Bird {
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
        this.drawSource.drawImage({
            spriteSheet: this._spriteSheet, 
            image: this._frames[this._frameIndex], 
            x: this.x, 
            y: this.y, 
            width: this.width, 
            height: this.height
            })
            
    }

    update(delta) {
        this.physicSource.update(this, delta);

        if (this.y < 0) {
            this.y = 0
        }

        if (this.y + this.height >= this._game.height) {
            this._game.defeat();
        }

        this._frameIndex = (this._frameIndex + delta) % this._frames.length;
        //доработать, добавив умножение на константу, 
        //например некую this._animationSpeed, чтобы можно было изменять
        //скорость махов крыльев птицей
    }

    flap() {
        this.speed = -this._speedFlap;
    }
}