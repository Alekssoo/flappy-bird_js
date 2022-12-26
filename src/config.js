export default class Config {
    gravity = 34

   
    animationSpeed = 3
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
        x: this.canvas.width, 
        y:  -90,
        width: 40,
        height: this.canvas.height - this.ground.height - 100, //100 - минимум для нижн. трубы
        gap: Math.ceil((this.canvas.height - this.ground.height)/4), // зазор - 25% от трубы
        minHeight: 50,

        frames:[// забираем из спрайта с этими координатами
            {
                x: 502,
                y: 0,
                w: 52,
                h: 180,

            },
            {
                x: 554,
                y: 220,
                w: 52,
                h: 180,

            },
        ]
    }


    bird = {
        //рисуем на канвасе по этим координатам
        x: 50, 
        y: 120,
        width: 20,
        height: 16,

        speedFlap: 31,

        // забираем из спрайта с этими координатами
        frames:[
            {
                x: 276,
                y: 114,
                w: 34,
                h: 25,

            },
            {
                x: 276,
                y: 139,
                w: 34,
                h: 25,

            },                
            {
                x: 276,
                y: 165,
                w: 34,
                h: 25,

            },
            {
                x: 276,
                y: 139,
                w: 34,
                h: 25,

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
        width: 82,
        height: 28,

        frames:[
            // забираем из спрайта с этими координатами
            {
                x: 246,
                y: 400,
                w: 82,
                h: 28,

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

            },
            // {
            //     x: 328,
            //     y: 286,
            //     w: 60,
            //     h: 96,

            // },
        ],

        
    }
    // для написания баллов
    scoreWrite = {
        resX: this.score.x + this.score.width * 0.75,
        resY: this.score.y + this.score.height * 0.57,
        bestX: this.score.x + this.score.width * 0.75,
        bestY: this.score.y + this.score.height * 0.85,
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