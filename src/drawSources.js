class DrawSource {
    drawImage({spriteSheet, image, x, y, width, height}) {}

    fillText({x, y, text, font, color}) {}

    clear() {
        
    }
}

export default class CanvasDrawSource extends DrawSource {
    constructor({ canvas }) {
        super()
        this._canvas = canvas;
        this._context = canvas.getContext('2d')
    }
    
    drawImage({spriteSheet, image, x, y, width, height}) {
        spriteSheet.then(sprite => {
            super.drawImage({spriteSheet, image, x, y, width, height})
        //для проверки получамого изображения...................
        //const sprite = document.querySelector(".sprite")
        //sprite.innerHTML = `<img src="${spriteSheet}">`;
        //sprite.innerHTML = spriteSheet;
         //.....................................................
            this._context.drawImage(sprite, image.x, image.y, image.w, image.h, x, y, width, height)
        })
    }

    fillText({x, y, text, font, color = "black" }) {
        //this.context.beginPath();
        super.fillText({text, font, color, x, y})
        this._context.fillStyle = color;
        this._context.font = font//"22px Verdana";
        this._context.fillText(text, x, y)
        //context.closePath();
    } 
  

    clear() {
        super.clear()
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)
    }
}