import Entity from "./base.js";

export default class Backgrd extends Entity {
    constructor(params) {
        super (params)
        this._index = 0
    }

    draw() {
        super.draw()
        //отрисовываем фон, который продлевает текущий(ниже)
        this._drawSource.drawImage({
            spriteSheet: this._spriteSheet, 
            image: this._frames[this._frameIndex], 
            x: this.x + this.width, 
            y: this.y, 
            width: this.width, 
            height: this.height
            })

        //отрисовываем текущий убегающий влево фон
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
        this._index += 0.3;
        this.x = -((this._index * this.animationSpeed) % this.width);

    }

}