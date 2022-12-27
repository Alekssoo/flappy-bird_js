import {RESOURCE_TYPE} from "./resources.js"
import ResourceLoader from "./resources.js"
import Config from "./config.js"
import CanvasDrawSource from "./drawSources.js"
import PhysicSource from "./physicSources.js"
import WebApiAudioSource from "./audioSources.js"
import MouseInputHandler from "./control.js"
import {KeyInputHandler} from "./control.js"
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
        this._canvCoords = this._canvas.getBoundingClientRect()

        this._first = true // игра запускается впервые (не рестарт)

        this._drawSource = new CanvasDrawSource({ canvas: this._canvas });
        this._physicSource = new PhysicSource({gravity: this._config.gravity});
        this._audioSource = new WebApiAudioSource();
        this._resourceLoader = new ResourceLoader();
        this._control = new MouseInputHandler({
            left:({x, y}) => {
                // если игра идет и указатель на canvas
                if (this._playing) { 
                    if (x >= this._canvCoords.left 
                    && x < this._canvCoords.left + this._canvas.width
                    && y >= this._canvCoords.top
                    && y < this._canvCoords.top + this._canvas.height) {
                        this._bird.flap() } //птичка машет
                } else { //если игра не идет, то при клике 
                    this.start() // ЛКМ на кнопку происходит рестарт
                }
            }
        })

        this._controlKey = new KeyInputHandler({
            up:({x, y}) => {
                // если игра идет
                if (this._playing) { 
                    this._bird.flap()  //птичка машет
                } else { //если игра не идет, то ничего не происходит
                    pass 
                    
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

        this._audioBuffer = this._resourceLoader.load({
            type: RESOURCE_TYPE.AUDIO,
            src: this._config.sound.src,
        })
        
    }

    reset() { // пересоздание сущностей

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

        this._tube = new Tube({
                x: this._config.tube.x,
                y: this._config.tube.y,
                width: this._config.tube.width,
                height: this._config.tube.height,
                frames: this._config.tube.frames,
                gap: this._config.tube.gap,
                minHeight: this._config.tube.minHeight,
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
            resX: this._config.scoreWrite.resX,
            resY: this._config.scoreWrite.resY,
            bestX: this._config.scoreWrite.bestX,
            bestY: this._config.scoreWrite.bestY,
            font: this._config.scoreWrite.font,
            color: this._config.scoreWrite.color,
        })

        this._medal = new Medal({
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
        this._tube.update(delta)
        if (this._tube.tubes[this._tube.index-2]) {
        // увеличиваем очки, если птица прошла середину трубы
            if (this._bird.x >= this._tube.tubes[this._tube.index-2].x + this._tube.width/2
                && this._bird.x <= this._tube.tubes[this._tube.index-2].x + this._tube.width/2 + 2) {
                this._score.update()
                // меняем медаль, если достигли определенного количества очков
                if (this._score.result === 100
                    || this._score.result === 200
                    || this._score.result === 500) {
                    // даем игроку медаль лучше
                    this._medal.update()
                    // и увеличиваем скорость
                    this._back.increaseSpeed()
                    this._ground.increaseSpeed()
                    this._bird.increaseSpeed()
                    this._tube.increaseSpeed()
                    
                    // проигрываем звук
                    this._audioSource.play(this._audioBuffer)
                } 
            }
        }

        


        //  условия поражения
            if ((this._bird.y + this._bird.height >= this._canvas.height - this._ground.height + 7) // при достижении земли
            //общее условие столкновения с любой трубой (+3, 7 - для учета погрешности)
            || (this._tube.tubes[this._tube.index - 2] && this._tube.tubesUp[this._tube.index - 2])
                && ((this._bird.x + this._bird.width >= this._tube.tubes[this._tube.index-2].x + 3)
                && (this._bird.x < this._tube.tubes[this._tube.index - 2].x + this._tube.width)
            //столкновение с нижней трубой
                && (((this._bird.y + this._bird.height > this._tube.tubes[this._tube.index - 2].y)
                && (this._bird.y < this._tube.tubes[this._tube.index - 2].y + this._tube.tubes[this._tube.index - 2].height))
            // или с верхней трубой 
                || (this._bird.y < this._tube.tubesUp[this._tube.index - 2].height + this._tube.tubesUp[this._tube.index - 2].y)))
            ) {
            this.defeat();
            }

    }

    draw() {
        this._back.draw()
        this._tube.draw()
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

        this._first = false // отмечаем, что уже начали игру
        this._canvas.onclick = null // убираем реакцию по клику на кнопку
        this._playing = true; //запускаем
        
        delete self._button; //убираем саму кнопку
        this._lastUpdate = Date.now() //фиксируем текущее время
        this.reset() // пересоздаем сущности
        this._loop() // и запускаем игровой цикл
    
    }

    start() {
        this.reset() //создаем сущности

        if (this._first) {
            this._drawSource.clear() //очищаем экран
            this._control.subscribe() //подключаем управление
            this._controlKey.subscribe() // пока в тестовом режиме,не реагирует

            this.draw() //отрисовываем основную часть, затем кнопку 
            this._button.draw()
            this._start.draw() // и стартовую картинку  
        }

        //сравниваем координаты указателя для совпадения с кнопкой
        if (event.clientX - this._canvCoords.left >= this._button.x 
            && event.clientX - this._canvCoords.left < this._button.x + this._button.width
            && event.clientY - this._canvCoords.top >= this._button.y
            && event.clientY - this._canvCoords.top < this._button.y + this._button.height) {
            //и перезапускаем игру
                this.restart()
            }
    }



    defeat() {
        this._playing = false;

        // отрисовка экрана поражения с результатами
        this._score.draw()
        this._medal.draw()
        this._button.draw()

    }
}

