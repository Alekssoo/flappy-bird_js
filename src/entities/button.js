import Entity from "./base.js";

export default class Button extends Entity {
    constructor(params) {
        super (params)
        // this._game._canvas.addEventlistener("click", restart)
        // let game = this._game
        // let self = this
        // let canvCoords = this._game._canvas.getBoundingClientRect();
        // function restart (event) {
        //     //сравниваем координаты указателя для совпадения с кнопкой
        //     if (event.clientX - canvCoords.left >= self.x 
        //         && event.clientX - canvCoords.left < self.x + self.width
        //         && event.clientY - canvCoords.top >= self.y
        //         && event.clientY - canvCoords.top < self.y + self.height) {
        //             //и перезапускаем игру
        //             self.prepare().then(() => {
        //                 delete game._button;
        //                 game._playing = true;
        //                 game._control.subscribe()
        //                 game._lastUpdate = Date.now()
        //                 game.reset()
        //                 game._loop()
        //             })
        //     }
        // }
    }

    draw() {
        super.draw()
    }

     update() {
        // if (this._frameIndex < this._frames.length-1) {
        //     this._frameIndex++
        // }
        
     }
 
}