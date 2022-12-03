class DrawSource {
    drawImage({spriteSheet, image, x, y, width, height}) {}

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

    clear() {
        super.clear()
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)
    }
}