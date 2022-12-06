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
        x: 0, 
        y: 0,
        width: this.canvas.width,
        height: this.canvas.height,

        frames:[
            {
                x: 0,
                y: 0,
                w: 275,
                h: 227,

            },]
    }

    bird = {
        x: 50, 
        y: 100,
        width: 34,
        height: 26,

        speedFlap: 5,

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