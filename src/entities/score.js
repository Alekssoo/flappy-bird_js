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
        this._index = 0
    }

    draw() {
        // отрисовываем табло
        super.draw()
        // и прописываем заработанные баллы
        this._drawSource.fillText({
            text: String(this._result),
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
        this._index++;
        if (this._index === 50) {
            this._result += 10;
            this._index = 0
        }
        
        if (this._result > this._best) {
            localStorage.setItem("best", this._result)
        }
        
        if (this._result === 100 && this._index === 0) {
            this._game.medal.update()
        } else if (this._result === 200 && this._index === 0) {
            this._game.medal.update()
        } else if (this._result === 500 && this._index === 0) {
            this._game.medal.update()
        } 

     }

}