import Entity from "./base.js";

export default class Tube extends Entity {
    constructor(params) {
        super (params)
        this._gap = params.gap // зазор между трубами
        this._minHeight = params.minHeight
        this.index = 0
        this.speed = 30
        this.tubesUp = [{
            spriteSheet: this._spriteSheet, 
            image: this._frames[this._frameIndex+1], 
            x: this.x,
            y: this.y,
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
        //отрисовываем первые трубы, затем вторую пару и третью

        this._drawSource.drawImage(this.tubes[this.index])
        this._drawSource.drawImage(this.tubesUp[this.index])

        if ((this.tubes[this.index-1]) && (this.tubesUp[this.index-1])) {
            this._drawSource.drawImage(this.tubes[this.index-1])
            this._drawSource.drawImage(this.tubesUp[this.index-1])
        }

        if ((this.tubes[this.index-2]) && (this.tubesUp[this.index-2])) {
            this._drawSource.drawImage(this.tubes[this.index-2])
            this._drawSource.drawImage(this.tubesUp[this.index-2])
        }

    }

    update(delta) {
        //постоянное движение труб
        this.tubes[this.index].x -= Math.ceil(delta * this.speed * this.animationSpeed); //30 - множитель ранее
        this.tubesUp[this.index].x = this.tubes[this.index].x

        if ((this.tubes[this.index-1]) && (this.tubesUp[this.index-1])) {
            this.tubes[this.index-1].x -= Math.ceil(delta * this.speed * this.animationSpeed);
            this.tubesUp[this.index-1].x = this.tubes[this.index-1].x
        }

        if ((this.tubes[this.index-2]) && (this.tubesUp[this.index-2])) {
            this.tubes[this.index-2].x -= Math.ceil(delta * this.speed * this.animationSpeed);
            this.tubesUp[this.index-2].x = this.tubes[this.index-2].x
        }

        //если труба проходит расстояние в 3 трубы,
        // то добавляется следующая в массив
        if ((this.tubes[this.index].x >= this.x - this.width*4.5) 
        && (this.tubes[this.index].x <= this.x - this.width*4.5 + 5)) {
            let yRandom = Math.floor(Math.random() * (this.height - this._minHeight + 1) + this._minHeight) - this.height
            this.tubesUp.push(
                {
                    spriteSheet: this._spriteSheet, 
                    image: this._frames[this._frameIndex + 1], 
                    x: this.x,
                    y: yRandom,
                    width: this.width, 
                    height: this.height 
                })
            
            this.tubes.push(
                {
                    spriteSheet: this._spriteSheet, 
                    image: this._frames[this._frameIndex], 
                    x: this.x,
                    y: yRandom + this.tubesUp[this.index].height + this._gap,
                    width: this.width, 
                    height: this.height
                }          
            )
            this.index++    
            
        }
    }
}