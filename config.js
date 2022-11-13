export default class Config {
    constructor() {
        canvas = {
            class: "game",
            width: 480,
            height: 320,
        }

        bird = {
            x: 50, 
            y: 100,
            width: 34,
            height: 26,

            speedFlap: 300,

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
}