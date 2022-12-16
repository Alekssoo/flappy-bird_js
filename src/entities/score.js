import Entity from "./base.js";

export default class Score extends Entity {
    constructor(params) {
        super (params)
        this.result = 0
        this._best = localStorage.getItem("best") || 0
        this._resX = params.resX
        this._resY = params.resY
        this._bestX = params.bestX
        this._bestY = params.bestY
        this._font = params.font
        this._color = params.color
    }

    draw() {
        // отрисовываем табло
        super.draw()
        // и прописываем заработанные баллы
        this._drawSource.fillText({
            text: String(this.result),
            font: this._font,
            color: this._color,
            x: this._resX,
            y: this._resY
        })

        if (this._best) {
            this._drawSource.fillText({
                text: String(this._best),
                font: this._font,
                color: this._color,
                x: this._bestX,
                y: this._bestY
            })
        }
    }

     update() { 
        this.result += 10;
        
        if (this.result > this._best) {
            localStorage.setItem("best", this._result)
        }

     }

}