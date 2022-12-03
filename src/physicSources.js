export default class PhysicSource {
    constructor({ gravity }) {
        this._gravity = gravity
    }
    
    update(entity, delta) {
        if (entity.falling) {
            entity.speed += this._gravity * delta
            entity.y += entity.speed * delta * 3 //изменение высоты объекта при обновлении
        }
    }
}