import {RESOURCE_TYPE} from "./resources.js"
import ResourceLoader from "./resources.js"
import Config from "./../config.js"
import CanvasDrawSource from "./drawSources.js"
import PhysicSource from "./physicSources.js"
import MouseInputHandler from "./control.js"
import Bird from "./entities/bird.js"

export default class Game {
    constructor() {
        this._config = new Config();

        this._canvas = document.querySelector(this._config.canvas.class);
        this._canvas.width = this._config.canvas.width;
        this._canvas.height = this._config.canvas.height;

        this.width = this._config.canvas.width;
        this.height = this._config.canvas.height;
        

        this._drawSource = new CanvasDrawSource({ canvas: this._canvas });
        this._physicSource = new PhysicSource({gravity: this._config.gravity});
        this._resourceLoader = new ResourceLoader();
        this._control = new MouseInputHandler({
            left:({x, y}) => {
                this._bird.flap()
            }
        })

    }

    async prepare() {
        this._spriteSheet = this._resourceLoader.load({
            type: RESOURCE_TYPE.IMAGE,
            src: this._config.spriteSheet.src,
            width: this._config.spriteSheet.width,
            height: this._config.spriteSheet.height,
        })
    }

    reset() {
        this._score = 0;
        this._bird = new Bird({
                x: this._config.bird.x,
                y: this._config.bird.y,
                width: this._config.bird.width,
                height: this._config.bird.height,
                frames: this._config.bird.frames,
                spriteSheet: this._spriteSheet,
                speedFlap: this._config.bird.speedFlap,
                physicSource: this._physicSource,
                drawSource: this._drawSource,
                game: this
            })
    }

    update(delta) {
        this._bird.update(delta)
    }

    draw() {
        this._bird.draw()
    }

    loop() {
        const now = Date.now()
        const delta = this._lastUpdate - now
        this.reset()
        this.update(delta)
        this._drawSource.clear()
        this.draw()
        requestAnimationFrame(this.start.bind(this))

        this._lastUpdate = now
    }

    start() {
        this._control.subscribe()
        this._lastUpdate = Date.now()
        this.loop()
    }


    defeat() {
        alert(`The end: ${this._score}`)
        //вместо алерта нарисовать экран с надписью окончания игры
        // и количеством очков, лучшим результатом
    }
}

