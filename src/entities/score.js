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

    }

     update(delta) { 
        if (this._game._playing) {
            this._result += 10
        } else {
            if (this._result > this._best) {
                localStorage.setItem("best", this._result)
            }
        }
        

     }

}