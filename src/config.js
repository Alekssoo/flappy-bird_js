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

    tube = {
        //рисуем на канвасе по этим координатам
        x: this.canvas.width/2 + 20, 
        y: this.canvas.height - 113,
        width: 50,
        height: 113,

        frames:[// забираем из спрайта с этими координатами
            {
                x: 502,
                y: 0,
                w: 52,
                h: 113,

            },
            {
                x:554,
                y: 287,
                w: 52,
                h: 113,

            },
        
        ]
    }

    bird = {
        //рисуем на канвасе по этим координатам
        x: 50, 
        y: 120,
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

    start = {
        //рисуем на канвасе по этим координатам
        x: this.canvas.width * 0.3, 
        y: this.canvas.height * 0.3, 
        width: 174,
        height: 160,

        frames:[
            // забираем из спрайта с этими координатами
            {
                x: 0,
                y: 227,
                w: 174,
                h: 160,

            },]
    }

    button = {
        //рисуем на канвасе по этим координатам
        x: this.canvas.width * 0.4,
        y: this.canvas.height * 0.82, 
        width: 81,
        height: 27,

        frames:[
            // забираем из спрайта с этими координатами
            {
                x: 246,
                y: 400,
                w: 81,
                h: 27,

            },]
    }

    score = {
        //рисуем на канвасе по этим координатам
        x: this.canvas.width * 0.25, 
        y: this.canvas.height * 0.3, 
        width: 226,
        height: 161,

        frames:[
            // забираем из спрайта с этими координатами
            {
                x: 174,
                y: 230,
                w: 226,
                h: 161,

            },],

        font: "18px Verdana",
        color: "green"
    }

    medal = {
        //рисуем на канвасе по этим координатам
        x: this.score.x + this.score.width * 0.12, 
        y: this.score.y + this.score.height * 0.53,
        width: 47,
        height: 45,

        // забираем из спрайта с этими координатами
        frames:[
            {
                x: 312,
                y: 113,
                w: 47,
                h: 45,

            },
            {
                x: 359,
                y: 113,
                w: 47,
                h: 45,

            },                
            {
                x: 312,
                y: 158,
                w: 47,
                h: 45,

            },
            {
                x: 359,
                y: 158,
                w: 47,
                h: 45,

            }, 
        ]
    }
}