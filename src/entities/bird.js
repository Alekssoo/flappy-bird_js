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
            this.y = 0 // при столкновении с потолком возвращаем птичку вниз
        }

        // if (this._game.tube.tubes[this._game.tube.index-2] && this._game.tube.tubesUp[this._game.tube.index-2]) {
        //     if ((this.this.y + this.height >= this._game.height) // при достижении земли
        //     //общее условие столкновения с любой трубой
        //         || ((this.this.x + this.width >= this._game.tube.tubes[this._game.tube.index-2].x)
        //     && (this.x < this._game.tube.tubes[this._game.tube.index-2].x + this._game.tube.width)
        //     //столкновение с нижней трубой
        //         && (((this.this.y + this.height > this._game.tube.tubes[this._game.tube.index-2].y)
        //         && (this.y < this._game.tube.tubes[this._game.tube.index-2].y + this._game.tube.tubes[this._game.tube.index-2].height))
        //     // или с верхней трубой 
        //         || (this.y < this._game.tube.tubesUp[this._game.tube.index-2].height + this._game.tube.tubesUp[this._game.tube.index-2].y)))
        //     ) {
        //     this._game.defeat();
        //     }
        // }
    }

    flap() {
        this.speed = -this._speedFlap; // ранее добавлял умножение 5 для нормальной скорости изменения высоты птички
    }


}