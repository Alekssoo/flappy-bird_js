export default class Control {
    eventHandlerMap = {}

    constructor(eventControlConfig) {
        this._eventControlConfig = eventControlConfig
    }

    subscribe() { //называется так, потому что подписывается на событие
        // в нашем случае на клик
        Object.entries(this.eventHandlerMap).forEach(([name, handler]) => {
            document.addEventListener(name, handler)
        })
    }
}

class MouseInputHandler extends Control {
    buttonIndexNameMap = {
        0: "left",
        1: "middle",
        2: "right"
    }

    eventHandlerMap = {
        click: (event) => {
            //при клике забираем имя кнопки по массиву выше, 
            //исходя из полученого кода
            const buttonName = this.buttonIndexNameMap[event.button]
            const handler = this._eventControlConfig[buttonName]
            if (handler) {
                // по имени кнопки берем хэндлер и вызываем его
                handler(event)
            }
        },
    }

}