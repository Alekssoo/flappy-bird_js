import Entity from "./base.js";

export default class Tube extends Entity {
    constructor(params) {
        super (params)
        //this.xUp = this.x
        //this.yUp = 0
        this._index = 0
        this.tubes = [{
            x: this.x,
            y: this.y,
            width: this.width, 
            height: this.height 
        }]
    }

    draw() {
        //отрисовываем нижнюю трубу
        //super.draw()
        
         //отрисовываем след. нижнюю трубу
        //let self = this
        //for (let i = 0; i < 100; i++) {
            //if (this._frameIndex % 2 === 0) {
                
                
                //console.log("height - ", this.height)
                //console.log("frame h - ", this._frames[this._frameIndex].h)
                this._drawSource.drawImage({ 
                    spriteSheet: this._spriteSheet, 
                    image: this._frames[this._frameIndex], 
                    x: this.x,// + (this.width * this.animationSpeed),// * this._index), 
                    y: this.y,// + (preHeight - this.height), 
                    width: this.width, 
                    height: this.height 
                    })
            //}
            //if (i === 100) {
            //    i = 0
            //}
        //}
        
        
        //это оставим для верхней трубы
        // for (let i = 0; i < 100; i++) {
        //     //if (this._frameIndex % 2 != 0) {
        //     this._drawSource.drawImage({
        //         spriteSheet: this._spriteSheet, 
        //         //image: this._frames[this._frameIndex+1],
        //         image: this._frames[this._frameIndex+1],  
        //         x: this.x + (this.width * this.animationSpeed * i), 
        //         y: this.yUp, 
        //         width: this.width, 
        //         height: this._frames[this._frameIndex].h //this.height
        //         })
        //    // }
        // }
    //  }


        this._drawSource.drawImage({
            spriteSheet: this._spriteSheet, 
            image: this._frames[this._frameIndex], 
            x: this.x + (this.width * this.animationSpeed), 
            y: this.y, 
            width: this.width, 
            height: this.height
            })

            this._drawSource.drawImage({
                spriteSheet: this._spriteSheet, 
                image: this._frames[this._frameIndex], 
                x: this.x + (this.width * (this.animationSpeed * 2)), 
                y: this.y, 
                width: this.width, 
                height: this.height
                })



        // аналогично рисуем верхие трубы
        //=================================================
        // this._drawSource.drawImage({
        //     spriteSheet: this._spriteSheet, 
        //     image: this._frames[this._frameIndex+1], 
        //     // x: this.xUp, 
        //     x: this.x,
        //     y: this.yUp, 
        //     width: this.width, 
        //     height: this.height
        //     })

        // this._drawSource.drawImage({
        //     spriteSheet: this._spriteSheet, 
        //     image: this._frames[this._frameIndex+1], 
        //     // x: this.xUp + this.width * 6,
        //     x: this.x + this.width * this.animationSpeed,  
        //     y: this.yUp, 
        //     width: this.width, 
        //     height: this.height
        //     })
           
        //} ============================================================

    }

    update(delta) {
        //console.log(this.index)
        //this._index+= 0.3 
        // изменяем X для бесконечного появления труб
        // if (this.x < -this.width) {
        //     this.x = this.width * this.animationSpeed/1.5
        // }

        if (this.x < -this.width) {
            console.log("height - ", this.height)
            console.log("frame h - ", this._frames[this._frameIndex].h)

            //this.x = Math.ceil(this.width * this.animationSpeed/1.35)
            this.x = this.width * this.animationSpeed * 3
            this._frameIndex = (this._frameIndex + Math.ceil(delta)) % this._frames.length;
            
            //this._index++
            let preHeight = this.height
            this.height = this._frames[this._frameIndex].h
            this.y += preHeight - this.height
        }

        for(let i = 0; i < this.tubes.length; i++) {

        }

        // this._frameIndex = (this._frameIndex + Math.ceil(delta)) % this._frames.length;
        
        //console.log(this._index, Math.floor((this._index % 9) / 3) * 46)
        // if (this._frameIndex < this._frames.length -1) {
        //     this._frameIndex++
        //  }  else {
        //     this._frameIndex--
        //  }

        // if (this.xUp < -this.width) {
        //     this.xUp = this.width * this.animationSpeed
        // }

        //плавно изменяем X для эффекта движения// регулирует скорость труб
        this.x -= Math.ceil(delta * this.animationSpeed * 120); 
        //this.draw()
        //this.xUp -= Math.ceil(delta * this.animationSpeed);

        //console.log("труба ", this.x + this.width/2)

    }

}