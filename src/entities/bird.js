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
        //console.log(`(${this._frameIndex} + ${Math.ceil(delta)}) % ${this._frames.length}`)

        this._physicSource.update(this, delta);

        if (this.y < 0) {
            this.y = 0 // при столкновении с потолком возвращаем птичку вниз
        }
        
        this._endX = this.x + this.width
        this._endY = this.y + this.height


        //console.log("Птичка ", this.x)
        //условия для столкновения птички и поражения
        // изменить условия под массивы труб для координаты x
        // if ((this._endY >= this._game.height) // при достижении земли
        //         //общее условие столкновения с любой трубой
        //     || ((this._endX >= this._game.tube.x)
        //         && (this.x < this._game.tube.x + this._game.tube.width)
        //         //столкновение с нижней трубой
        //         && (((this.height + this.y > this._game.tube.y)
        //         && (this.y < this._game.tube.y + this._game.tube.height))
        //         // или с верхней трубой 
        //         || (this.y < this._game.tube.tubesUp[this._game.tube.index].height)))
        //      ) {
        //     this._game.defeat();
        // }

        if ((this._endY >= this._game.height) // при достижении земли
        //общее условие столкновения с любой трубой
            || ((this._endX >= this._game.tube.tubes[this._game.tube.index].x)
            && (this.x < this._game.tube.tubes[this._game.tube.index].x + this._game.tube.width)
        //столкновение с нижней трубой
            && (((this._endY > this._game.tube.tubes[this._game.tube.index].y)
            && (this.y < this._game.tube.tubes[this._game.tube.index].y + this._game.tube.tubes[this._game.tube.index].height))
        // или с верхней трубой 
            || (this.y < this._game.tube.tubesUp[this._game.tube.index].height + this._game.tube.tubesUp[this._game.tube.index].y)))
        ) {
            this._game.defeat();
        }
    }

    flap() {
        this.speed = -this._speedFlap * 5; //добавил умножение для нормальной скорости изменения высоты птички
    }


}