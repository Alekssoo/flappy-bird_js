import Entity from "./base.js";

export default class Tube extends Entity {
    constructor(params) {
        super (params)
        //this.xUp = this.x
        this.yUp = 0
    }

    draw() {
        //отрисовываем нижнюю трубу
        super.draw()
         //отрисовываем след. нижнюю трубу
        this._drawSource.drawImage({
            spriteSheet: this._spriteSheet, 
            image: this._frames[this._frameIndex], 
            x: this.x + this.width * 5, 
            y: this.y, 
            width: this.width, 
            height: this.height
            })
        // аналогично рисуем верхие трубы
        this._drawSource.drawImage({
            spriteSheet: this._spriteSheet, 
            image: this._frames[this._frameIndex+1], 
            // x: this.xUp, 
            x: this.x,
            y: this.yUp, 
            width: this.width, 
            height: this.height
            })

        this._drawSource.drawImage({
            spriteSheet: this._spriteSheet, 
            image: this._frames[this._frameIndex+1], 
            // x: this.xUp + this.width * 6,
            x: this.x + this.width * 5,  
            y: this.yUp, 
            width: this.width, 
            height: this.height
            })
           
        //}

    }

    update(delta) { 
        // изменяем X для бесконечного появления труб
        if (this.x < -this.width) {
            this.x = this.width * 4
        }

        if (this.xUp < -this.width) {
            this.xUp = this.width * 4
        }

        //плавно изменяем X для эффекта движения
        this.x -= Math.ceil(delta * this.animationSpeed);
        //this.xUp -= Math.ceil(delta * this.animationSpeed);
        

    }

}