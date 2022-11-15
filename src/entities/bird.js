import Entity from "./base.js";

export default class Bird extends Entity{
    constructor(params) {
        super (params)
        this._speedFlap = params.speedFlap;
        this._physicSource = physicSource;
        this.falling = true
    }

    update(delta) {
        super.update(delta)

        this.physicSource.update(this, delta);

        if (this.y < 0) {
            this.y = 0
        }

        if (this.y + this.height >= this._game.height) {
            this._game.defeat();
        }
    }

    flap() {
        this.speed = -this._speedFlap;
    }
}