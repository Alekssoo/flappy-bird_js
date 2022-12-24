class Control {
    eventHandlerMap = {}

    constructor(eventControlConfig) {
        this._eventControlConfig = eventControlConfig
    }

    subscribe() { // "подписывается" на событие
        // в нашем случае на клик
        Object.entries(this.eventHandlerMap).forEach(([name, handler]) => {
            document.addEventListener(name, handler)
        })
    }
}

export default class MouseInputHandler extends Control {
    buttonIndexNameMap = {
        0: "left",
        1: "middle",
        2: "right"
    }

    eventHandlerMap = {
        click: (event) => {
            //при клике забираем имя кнопки по массиву выше, 
            //исходя из полученого кода(цифры)
            const buttonName = this.buttonIndexNameMap[event.button]
            const handler = this._eventControlConfig[buttonName]
            if (handler) {
                // по имени кнопки берем хэндлер и вызываем его
                handler(event)
            }
        },
    }

}

export class KeyInputHandler extends Control {
    buttonIndexNameMap = {
        "ArrowUp": "up",
        "ArrowDown": "down",
        "ArrowLeft": "left",
        "ArrowRight": "right",
    }

    eventHandlerMap = {
        keydown: (event) => {
            //при клике забираем имя кнопки по массиву выше, 
            //исходя из полученого кода(цифры)
            const buttonName = this.buttonIndexNameMap[event.code]
            const handler = this._eventControlConfig[buttonName]
            if (handler) {
                // по имени кнопки берем хэндлер и вызываем его
                handler(event)
            }
        },
    }

}