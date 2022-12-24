export default class Entity {
    constructor({ x, y, width, height, frames, spriteSheet, drawSource, game, animationSpeed }) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = 0;
        this.falling = false
        this.animationSpeed = animationSpeed

        //const {frames, spriteSheet, speedFlap, physicSource, drawSource, game} = params
        this._frames = frames;
        this._frameIndex = 0;
        this._spriteSheet = spriteSheet;
        this._drawSource = drawSource;
        this._game = game;
    }

    draw() {
        this._drawSource.drawImage({
            spriteSheet: this._spriteSheet, 
            image: this._frames[this._frameIndex], 
            x: this.x, 
            y: this.y, 
            width: this.width, 
            height: this.height
            })
    }

    update(delta) {
        this._frameIndex = (this._frameIndex + Math.ceil(delta * this.animationSpeed)) % this._frames.length;
        console.log("delta = ", delta)
        console.log("frameindex = ", this._frameIndex)
        //доработать, добавив умножение delta на константу, 
        //например некую this._animationSpeed, чтобы можно было изменять
        //скорость махов крыльев птицей
    }
}