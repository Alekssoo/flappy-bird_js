export const RESOURCE_TYPE = {
    IMAGE: "image",
    AUDIO: "audio",
}

export default class ResourceLoader {
    _typeLoadersMap = {
        // при получении изображения создаем новую картинку
        [RESOURCE_TYPE.IMAGE]: async ({src, width, height}) => {
            return new Promise((resolve, reject) => {          
                const image = new Image(width, height);
                image.addEventListener("load", () => resolve(image))
                image.addEventListener("error", (error) => reject(error))
                image.src = src
            })
        },
        // при получении адуиофайла проверям пути
        [RESOURCE_TYPE.AUDIO]: async ({src}) => {
            return fetch(src)
                .then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return src} 
                    else {  
                        return Promise.reject(new Error(response.statusText))  
                      }  
                })
                .catch(error => console.log(error))
            }
        ,
    }

    async load(resource) { // Одиночная загрузка
        try {
            const loader =  this._typeLoadersMap[resource.type]
            return await loader(resource)
        } catch (error) {
            console.error(error);
        }
    }

    async loadAll(resources) { // массовая загрузка
        this._resources = {}
        for(let key in resources.src) {
                if (resources.src.hasOwnProperty(key)) {
                    this._resources[key] = this.load({type:resources.type, src: resources.src[key]})
                }
            }
        return this._resources
    }
    
}

