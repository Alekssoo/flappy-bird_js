import Entity from "./base.js";

export default class Backgrd extends Entity {
    constructor(params) {
        super (params)
 //       const {frames, spriteSheet, flapSpeed, physicSource, drawSource, game} = params
        //this._speedFlap = params.speedFlap;
        this._physicSource = params.physicSource;
        this.falling = true
        this._index = 0
    }

    update(delta) {
        super.update(delta)

        this._physicSource.update(this, delta);

        this._index += 0.3;
        //this.x = -((index * SPEED) % canvas.width);

        if (this.y < 0) {
            this.y = 0
        }

    }

    flap() {
        this.speed = -this._speedFlap*7; //добавил умножение для нормальной скорости изменения высоты птички
    }
}