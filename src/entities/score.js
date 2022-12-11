import Entity from "./base.js";

export default class Score extends Entity {
    constructor(params) {
        super (params)
        this._result = 0
        this._best = localStorage.getItem("best") || 0
        this._resX = params.resX
        this._resY = params.resY
        this._bestX = params.bestX
        this._bestY = params.bestY
        this._font = params.font
        this._color = params.color
    }

    draw() {
        //отрисовываем табло
        super.draw()
        this._drawSource.fillText({
            result: String(this._result),
            font: this._font,
            color: this._color,
            resX: this._resX,
            resY: this._resY
        })
        console.log(String(this._result))
        console.log(this._resX)
        console.log(this._resY)
        console.log(this._bestX)
        console.log(this._bestY)
        console.log(this._font)
        console.log(this._color)
        //field.writeText(context,this._result, 75 + this._width/10, 100 + this._height/1.5);
    }

     update() { 
        this._result++;
        if (this._result > this._best) {
            localStorage.setItem("best", this._result)
        }
        
        

     }

}