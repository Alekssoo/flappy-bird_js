import Entity from "./base.js";

export default class Medal extends Entity {
    constructor(params) {
        super (params)
    }

    async draw() {
        super.draw()
    }

     update() {
        if (this._frameIndex < this._frames.length-1) {
            this._frameIndex++
        }
        
     }
 
}