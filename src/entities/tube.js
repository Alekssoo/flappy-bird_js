import Entity from "./base.js";

export default class Tube extends Entity {
    constructor(params) {
        super (params)
        //this.xStart = this.x
        //this.yUp = 0
        this._gap = params.gap // зазор между трубами
        this._sourceHeight = params.sourceHeight //макс. высота верхн. трубы
        this.index = 0
        this.tubesUp = [{
            spriteSheet: this._spriteSheet, 
            image: this._frames[this._frameIndex+1], 
            x: this.x,
            y: 0,
            width: this.width, 
            height: this.height  
        }]

        this.tubes = [{
            spriteSheet: this._spriteSheet, 
            image: this._frames[this._frameIndex], 
            x: this.x,
            y: this.tubesUp[0].y + this.tubesUp[0].height + this._gap,
            width: this.width, 
            height: this.height  
        }]

        


        
    }

    draw() {
        //отрисовываем нижнюю трубу
        //super.draw()
        //console.log("x трубы = ", this.x)
        //console.log(this.tubes[this.index])
        this._drawSource.drawImage(this.tubes[this.index])
        this._drawSource.drawImage(this.tubesUp[this.index])

        if ((this.tubes[this.index].x >= this.width*4) && (this.tubes[this.index].x <= this.width*4 + 5)) {
            this._drawSource.drawImage(this.tubes[this.index+1])
            this._drawSource.drawImage(this.tubesUp[this.index+1])
        }



        
         //отрисовываем след. нижнюю трубу
        //let self = this
        //for (let i = 0; i < 100; i++) {
            //if (this._frameIndex % 2 === 0) {
                
                
                //console.log("height - ", this.height)
                //console.log("frame h - ", this._frames[this._frameIndex].h)
                // обычный вариант одной трубы:
                // this._drawSource.drawImage({ 
                //     spriteSheet: this._spriteSheet, 
                //     image: this._frames[this._frameIndex], 
                //     x: this.x,// + (this.width * this.animationSpeed),// * this._index), 
                //     y: this.y,// + (preHeight - this.height), 
                //     width: this.width, 
                //     height: this.height 
                //     })
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

        // вторая и третья нижние трубы

        // this._drawSource.drawImage({
        //     spriteSheet: this._spriteSheet, 
        //     image: this._frames[this._frameIndex], 
        //     x: this.x + (this.width * this.animationSpeed), 
        //     y: this.y, 
        //     width: this.width, 
        //     height: this.height
        //     })

        //     this._drawSource.drawImage({
        //         spriteSheet: this._spriteSheet, 
        //         image: this._frames[this._frameIndex], 
        //         x: this.x + (this.width * (this.animationSpeed * 2)), 
        //         y: this.y, 
        //         width: this.width, 
        //         height: this.height
        //         })



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

        //this.x -= Math.ceil(delta * this.animationSpeed * 120); 
        this.tubes[this.index].x -= Math.ceil(delta * this.animationSpeed * 120);
        this.tubesUp[this.index].x = this.tubes[this.index].x

        if (this.tubes[this.index+1] && this.tubesUp[this.index+1]){
            this.tubes[this.index+1].x = this.x
            this.tubesUp[this.index+1].x = this.x
        }

        if (this.x < -this.width) {
            //console.log("height - ", this.height)
            //console.log("frame h - ", this._frames[this._frameIndex].h)

            //this.x = Math.ceil(this.width * this.animationSpeed/1.35)

            // this.x = this.width * this.animationSpeed * 3
            // this._frameIndex = (this._frameIndex + Math.ceil(delta)) % this._frames.length;
            

            // let preHeight = this.height
            // this.height = this._frames[this._frameIndex].h
            // this.y += preHeight - this.height
        }

        if ((this.tubes[this.index].x >= this.width*4) && (this.tubes[this.index].x <= this.width*4 + 5)) {
            this.tubes.push(
                {
                    spriteSheet: this._spriteSheet, 
                    image: this._frames[this._frameIndex], 
                    x: this.x,
                    y: Math.floor(Math.random() * this._sourceHeight) - this._sourceHeight,
                    width: this.width, 
                    height: this.height  
                }
            )

            this.tubesUp.push(
                {
                    spriteSheet: this._spriteSheet, 
                    image: this._frames[this._frameIndex], 
                    x: this.x,
                    y: this.y,
                    width: this.width, 
                    height: this.height  
                }
            )

            console.log(this.tubes)
            
        }

        // for(let i = 0; i < this.tubes.length; i++) {

        // }

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
        
        //this.xUp -= Math.ceil(delta * this.animationSpeed);

        //console.log("труба ", this.x + this.width/2)

    }

}