export default class PhysicSource {
    constructor({ gravity }) {
        this._gravity = gravity
    }
    
    update(entity, delta) {
        if (entity.falling) {
            entity.speed += this._gravity * delta
            entity.y += entity.speed * delta //изменение высоты объекта при обновлении
            //добавлял умножение для более высокого поднятия птички на клик
        }
    }
}