export const RESOURCE_TYPE = {
    IMAGE: "image",
    AUDIO: "audio",
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
        [RESOURCE_TYPE.AUDIO]: async ({src}) => {
            return fetch(src)
                .then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return src }
                    else {  
                        return Promise.reject(new Error(response.statusText))  
                      }  
                })
                .catch(error => console.log(error))
            }
        ,
    }

    async load(resource) {
        try {
            const loader =  this._typeLoadersMap[resource.type]
            return await loader(resource)
        } catch (error) {
            console.error("error");
        }
    }
}

//если далее  будет больше типов ресурсов кроме изображения,
//то логичнее сделать здесь еще класс для массовой загрузки
//сохранения их внутри этого класса и затем возможность 
//их получить из этого класса
