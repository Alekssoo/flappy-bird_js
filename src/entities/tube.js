import Entity from "./base.js";

export default class Tube extends Entity {
    constructor(params) {
        super (params)
        this._index = 0
        this.xUp = this.x + this.width + 20
        this.yUp = 0
    }

    draw() {
        super.draw()
        //отрисовываем нижнюю трубу
        // if (this._frameIndex === 0) {
        //     this._drawSource.drawImage({
        //         spriteSheet: this._spriteSheet, 
        //         image: this._frames[this._frameIndex], 
        //         x: this.x, 
        //         y: this.y, 
        //         width: this.width, 
        //         height: this.height
            
        //         })
        // } 
        //if ((this._frameIndex === 1)) {
            //отрисовываем верхнюю трубу
            this._drawSource.drawImage({
                spriteSheet: this._spriteSheet, 
                image: this._frames[this._frameIndex], 
                x: this.x + this.width * 5, 
                y: this.y, 
                width: this.width, 
                height: this.height
                })

            this._drawSource.drawImage({
                spriteSheet: this._spriteSheet, 
                image: this._frames[this._frameIndex+1], 
                x: this.xUp, 
                y: this.yUp, 
                width: this.width, 
                height: this.height
                })

            this._drawSource.drawImage({
                spriteSheet: this._spriteSheet, 
                image: this._frames[this._frameIndex+1], 
                x: this.xUp + this.width * 3, 
                y: this.yUp, 
                width: this.width, 
                height: this.height
                })
        //}

    }

    update(delta) { 
        this._index++;
        if (this._index > this.width*7) {
            this._index = 0;
            this.x = + this.width * 5
        }
        // if (this._frameIndex === 0) {
        //     this._frameIndex++
        // } else {
        //     this._frameIndex-- 
        // }

        //this._index += 0.3;
        //this.x -= this._index * this.animationSpeed
        //if (this._frameIndex > 0) {
            
        //}

        this.x -= Math.ceil(delta * this.animationSpeed);
        this.xUp -= Math.ceil(delta * this.animationSpeed);
        

    }

}