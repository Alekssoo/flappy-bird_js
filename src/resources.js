export const RESOURCE_TYPE = {
    IMAGE: "image",
}

export default class ResourceLoader {
    _typeLoadersMap = {
        [RESOURCE_TYPE.IMAGE]: async ({src, width, height}) => {
            return new Promise((resolve, reject) => {
                const image = new Image(width, height);
                image.addEventListener("load", () => resolve(image))
                image.addEventListener("error", (error) => reject(error))
                image.src = src
            })
        },
    }

    async load(resource) {
        const loader = this._typeLoadersMap[resource.type]
        return await loader(resource)
    }
}

//если будет больше типов ресурсов кроме изображения,
//то логичнее сделать здесь еще класс для массовой загрузки
//сохранения их внутри этого класса и затем возможность 
//их получить из этого класса
