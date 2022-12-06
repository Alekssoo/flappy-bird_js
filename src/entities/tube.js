import Entity from "./base.js";

export default class Tube extends Entity {
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
            x: this.x, 
            y: this.y, 
            width: this.width, 
            height: this.height
            })

        //отрисовываем текущий убегающий влево фон
        this._drawSource.drawImage({
            spriteSheet: this._spriteSheet, 
            image: this._frames[this._frameIndex+1], 
            x: this.x + 70, 
            y: 0, 
            width: this.width, 
            height: this.height
            })

    }

    update(delta) {
        super.update(delta)

        //this._index += 0.3
        this.x -= Math.ceil(delta);

    }

}