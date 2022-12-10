import Entity from "./base.js";

export default class Score extends Entity {
    constructor(params) {
        super (params)
        this._result = 0
        this._best = localStorage.getItem("best") || 0
        
    }

    draw() {
        //отрисовываем табло
        super.draw()
        this._drawSource.fillText(this._result, this.resX, this.resY, this.font, this.color)
        //field.writeText(context,this._result, 75 + this._width/10, 100 + this._height/1.5);
    }

     update(delta) { 
        if (this._game._playing) {
            this._result++
        } else {
            if (this._result > this._best) {
                localStorage.setItem("best", this._result)
            }
        }
        

     }

}