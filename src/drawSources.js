class DrawSource {
    drawImage({spriteSheet, image, x, y, width, height}) {}

    fillText({text, font, color, x, y}) {}

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
            this._context.drawImage(sprite, image.x, image.y, image.w, image.h, x, y, width, height)
        })
    }

    async fillText({text, font, color, x, y}) {

        this._context.fillStyle = color;
        this._context.font = font
        try {
            super.fillText({text, font, color, x, y})

            this._context.fillText(await text, await x, await y)

        } catch(error) {
            console.log(error);
        }
    } 
  

    clear() {
        super.clear()
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)
    }
}