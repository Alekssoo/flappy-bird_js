import {RESOURCE_TYPE} from "./resources.js"
import ResourceLoader from "./resources.js"
import Config from "./config.js"
import CanvasDrawSource from "./drawSources.js"
import PhysicSource from "./physicSources.js"
import MouseInputHandler from "./control.js"
import Bird from "./entities/bird.js"
import Backgrd from "./entities/back.js"
import Ground from "./entities/ground.js"
import Tube from "./entities/tube.js"
import Start from "./entities/start.js"
import Score from "./entities/score.js"
import Medal from "./entities/medal.js"
import Button from "./entities/button.js"

export default class Game {
    constructor() {
        this._config = new Config();

        this._canvas = document.querySelector(this._config.canvas.class);
        this._canvas.width = this._config.canvas.width;
        this._canvas.height = this._config.canvas.height;

        this.width = this._config.canvas.width;
        this.height = this._config.canvas.height - this._config.ground.height+7;
        this._first = true

        this._drawSource = new CanvasDrawSource({ canvas: this._canvas });
        this._physicSource = new PhysicSource({gravity: this._config.gravity});
        this._resourceLoader = new ResourceLoader();
        this._control = new MouseInputHandler({
            left:({x, y}) => {
                if (this._playing) {
                    this._bird.flap()
                } else if (this._first) {
                    this.start()
                } else {
                    this.restart()
                }
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
        //this._score = 0;
        

        this._start = new Start({
            x: this._config.start.x,
            y: this._config.start.y,
            width: this._config.start.width,
            height: this._config.start.height,
            frames: this._config.start.frames,
            spriteSheet: this._spriteSheet,
            physicSource: this._physicSource,
            drawSource: this._drawSource,
            game: this,
            animationSpeed: this._config.animationSpeed,
        })

        this._button = new Button({
            x: this._config.button.x,
            y: this._config.button.y,
            width: this._config.button.width,
            height: this._config.button.height,
            frames: this._config.button.frames,
            spriteSheet: this._spriteSheet,
            physicSource: this._physicSource,
            drawSource: this._drawSource,
            game: this,
            animationSpeed: this._config.animationSpeed,
        })



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
                game: this,
                animationSpeed: this._config.animationSpeed,
        })
        this._back = new Backgrd({
                x: this._config.backGround.x,
                y: this._config.backGround.y,
                width: this._config.backGround.width,
                height: this._config.backGround.height,
                frames: this._config.backGround.frames,
                spriteSheet: this._spriteSheet,
                physicSource: this._physicSource,
                drawSource: this._drawSource,
                game: this,
                animationSpeed: this._config.animationSpeed,
        })
        this._ground = new Ground({
                x: this._config.ground.x,
                y: this._config.ground.y,
                width: this._config.ground.width,
                height: this._config.ground.height,
                frames: this._config.ground.frames,
                spriteSheet: this._spriteSheet,
                physicSource: this._physicSource,
                drawSource: this._drawSource,
                game: this,
                animationSpeed: this._config.animationSpeed,
        })
        this.tube = new Tube({
                x: this._config.tube.x,
                y: this._config.tube.y,
                width: this._config.tube.width,
                height: this._config.tube.height,
                frames: this._config.tube.frames,
                spriteSheet: this._spriteSheet,
                physicSource: this._physicSource,
                drawSource: this._drawSource,
                game: this,
                animationSpeed: this._config.animationSpeed,
        })

        this._score = new Score({
            x: this._config.score.x,
            y: this._config.score.y,
            width: this._config.score.width,
            height: this._config.score.height,
            frames: this._config.score.frames,
            spriteSheet: this._spriteSheet,
            physicSource: this._physicSource,
            drawSource: this._drawSource,
            game: this,
            animationSpeed: this._config.animationSpeed,
            resX: this._config.score.x + this._config.score.width * 0.7,
            resY: this._config.score.y + this._config.score.height * 0.57,
            bestX: this._config.score.x + this._config.score.width * 0.7,
            bestY: this._config.score.y + this._config.score.height * 0.85,
            font: this._config.score.font,
            color: this._config.score.color,
        })

        this.medal = new Medal({
            x: this._config.medal.x,
            y: this._config.medal.y,
            width: this._config.medal.width,
            height: this._config.medal.height,
            frames: this._config.medal.frames,
            spriteSheet: this._spriteSheet,
            physicSource: this._physicSource,
            drawSource: this._drawSource,
            game: this,
            animationSpeed: this._config.animationSpeed,
        })


    }

    update(delta) {
        this._bird.update(delta)
        this._back.update(delta)
        this._ground.update(delta)
        this.tube.update(delta)
        this._score.update()
    }

    draw() {
        this._back.draw()
        this.tube.draw()
        this._ground.draw()       
        this._bird.draw()
    }

    _loop() {
        const now = Date.now()
        const delta = now - this._lastUpdate
        this.update(delta / 1000)

        if (this._playing) {
            this._drawSource.clear()
            this.draw()
    
            this._lastUpdate = now

            let requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;
            requestAnimationFrame(this._loop.bind(this))
        }


        
    }

    restart() {
        //setTimeout(function() {this._playing = true;}, 5000)

        this._first = false
        //self._canvas.onclick = self.flap
        this._canvas.onclick = null
        this._playing = true;
        
        //setTimeout(self._control.subscribe(), 3000)
        //this._control.subscribe()
        delete self._button;
        this._lastUpdate = Date.now()
        this.reset()
        this._loop()
        
        // this._playing = true;
        // this._control.subscribe()
        // this._lastUpdate = Date.now()
        // this.reset()
        // this._loop()
    }

    start() {
        //создаем сущности
        this.reset()

        //очищаем экран
        this._drawSource.clear()

        //подключаем управление
        this._control.subscribe()

        //отрисовываем основную часть, затем кнопку и стартовую карт-ку
        this.draw()
        // this._back.draw()
        // this.tube.draw()
        // this._ground.draw() 

        this._button.draw()
        //привязываем к кнопке функцию рестарта игры
        this._canvas.onclick = restart

        //if (this._first) {
            this._start.draw()
        //}
        //this._drawSource.clear()

        //this.prepare().then(() => {
            // delete this._button;
            // this._playing = true;
            // setTimeout(this._control.subscribe(), 3000)
            // //self._control.subscribe()
            // this._lastUpdate = Date.now()
       /// })
        // для подсчета координат указателя при нажатии
        let canvCoords = this._canvas.getBoundingClientRect();
        
        // if (event.clientX - canvCoords.left >= self._button.x 
        //     && event.clientX - canvCoords.left < self._button.x + self._button.width
        //     && event.clientY - canvCoords.top >= self._button.y
        //     && event.clientY - canvCoords.top < self._button.y + self._button.height) {
                        
        // }

        //сохраняем this для использования контекста в локальной функции
        let self = this
        console.log("работает метод")
        //функция, которая перезапускает игру
        function restart (event) {
            //сравниваем координаты указателя для совпадения с кнопкой
            if (event.clientX - canvCoords.left >= self._button.x 
                && event.clientX - canvCoords.left < self._button.x + self._button.width
                && event.clientY - canvCoords.top >= self._button.y
                && event.clientY - canvCoords.top < self._button.y + self._button.height) {
                    //и перезапускаем игру
                    console.log("работает внутренняя функция")
                    self.restart()
                    // self._first = false

                    //     self._canvas.onclick = null
                    //     self._playing = true;
                        
                    //     //setTimeout(self._control.subscribe(), 3000)
                    //     self._control.subscribe()
                    //     delete self._button;
                    //     self._lastUpdate = Date.now()
                    //     self.reset()
                    //     self._loop()
                    
            }
        }

    }



    defeat() {
        
        this._playing = false;
        this.reset()
        this._control.subscribe()

        this._score.draw()
        this.medal.draw()
        this._button.draw()

    }
}

