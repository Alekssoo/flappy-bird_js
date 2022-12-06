import Entity from "./base.js";

export default class Tube extends Entity {
    constructor(params) {
        super (params)
        this._index = 0
    }

    draw() {
        super.draw()
        //отрисовываем нижнюю трубу
        this._drawSource.drawImage({
            spriteSheet: this._spriteSheet, 
            image: this._frames[this._frameIndex], 
            x: this.x, 
            y: this.y, 
            width: this.width, 
            height: this.height
            })

        //отрисовываем верхнюю трубу
        this._drawSource.drawImage({
            spriteSheet: this._spriteSheet, 
            image: this._frames[this._frameIndex+1], 
            x: this.x + this.width + 20, 
            y: 0, 
            width: this.width, 
            height: this.height
            })

    }

    update(delta) {

        //this._index += 0.3;
        //this.x -= this._index * this.animationSpeed

        this.x -= Math.ceil(delta * this.animationSpeed);

    }

}