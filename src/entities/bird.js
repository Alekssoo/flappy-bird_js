import Entity from "./base.js";

export default class Bird extends Entity {
    constructor(params) {
        super (params)
        this._speedFlap = params.speedFlap;
        this._physicSource = params.physicSource;
        this.falling = true
    }

    update(delta) {
        super.update(delta)

        this._physicSource.update(this, delta);

        if (this.y < 0) {
            this.y = 0 // при столкновении с верн. границей возвращаем птичку вниз
        }
    }

    flap() {
        this.speed = -this._speedFlap; // ранее добавлял умножение 5 для нормальной скорости изменения высоты птички
    }


}