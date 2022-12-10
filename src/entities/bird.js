import Entity from "./base.js";

export default class Bird extends Entity {
    constructor(params) {
        super (params)
 //       const {frames, spriteSheet, flapSpeed, physicSource, drawSource, game} = params
        this._speedFlap = params.speedFlap;
        this._physicSource = params.physicSource;
        this.falling = true
    }

    update(delta) {
        super.update(delta)

        this._physicSource.update(this, delta);

        if (this.y < 0) {
            this.y = 0
        }
 
        if ((this.y + this.height >= this._game.height) 
        || ((((this.x + this.width >= this._game.tube.x) && (this.x + this.width < this._game.tube.x + this._game.tube.width))
         && (this.y + this.height === this._game.tube.y))
            || (this.x + this.width === this._game.tube.xUp) 
             )) {
            this._game.defeat();
        }
    }

    flap() {
        this.speed = -this._speedFlap*7; //добавил умножение для нормальной скорости изменения высоты птички
    }
}