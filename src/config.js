export default class Config {
    gravity = 30

    animationSpeed = 3.1

    canvas = {
        class: ".game",
        width: 480,
        height: 320,
    }

    spriteSheet = {
        width: 606,
        height: 428,
        src: '../resources/spritesheet.png',
    }

    backGround = {
        //рисуем на канвасе по этим координатам
        x: 0, 
        y: 0,
        width: this.canvas.width,
        height: this.canvas.height,

        frames:[
            // забираем из спрайта с этими координатами
            {
                x: 0,
                y: 0,
                w: 275,
                h: 227,

            },]
    }

    ground = {
        //рисуем на канвасе по этим координатам
        x: 0, 
        y: 275,
        width: this.canvas.width,
        height: 50,

        frames:[
            // забираем из спрайта с этими координатами
            {
                x: 276,
                y: 0,
                w: 223,
                h: 110,

            },]
    }

    tube = {//еще нужно настроить
        //рисуем на канвасе по этим координатам
        x: 0, 
        y: 0,
        width: this.canvas.width,
        height: this.canvas.height,

        frames:[// забираем из спрайта с этими координатами
            {
                x: 0,
                y: 0,
                w: 275,
                h: 227,

            },
            {
                x: 0,
                y: 0,
                w: 275,
                h: 227,

            },
        
        ]
    }

    bird = {
        //рисуем на канвасе по этим координатам
        x: 50, 
        y: 100,
        width: 34,
        height: 26,

        speedFlap: 5,

        // забираем из спрайта с этими координатами
        frames:[
            {
                x: 276,
                y: 112,
                w: 34,
                h: 26,

            },
            {
                x: 276,
                y: 139,
                w: 34,
                h: 26,

            },                
            {
                x: 276,
                y: 164,
                w: 34,
                h: 26,

            },
            {
                x: 276,
                y: 139,
                w: 34,
                h: 26,

            },  
        ]
    }
}