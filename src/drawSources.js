class DrawSource {
    drawImage({spriteSheet, image, x, y, width, height}) {}

    clear() {
        
    }
}

class CanvasDrawSource extends DrawSource {
    constructor({ canvas }) {
        super()
        this._canvas = canvas
    }
    
    drawImage({spriteSheet, image, x, y, width, height}) {
        super.drawImage({spriteSheet, image, x, y, width, height})
        this._canvas.drawImage(spriteSheet, image.x, image.y, image.w, image.h, x, y, width, height)
    }

    clear() {
        super.clear()
        this._canvas.clearRect(0, 0, this._canvas.width, this._canvas.height)
    }
}

export default CanvasDrawSource