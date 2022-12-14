class AudioSource {
    init({context, audio}) {}

    play(sound) {}

    stop() {}
}

export default class WebApiAudioSource extends AudioSource {
    constructor() {
        super()

        this._audio = {}
        
    }

    getAudioContext() {
        AudioContext = window.AudioContext || window.webkitAudioContext;
        this._context = new AudioContext();
      }

    init(name, src) {
        // получаем в промисе имена и проверенный путь к файлам  и декодируем
        src.then(
            (source) => {
                fetch(source)
                .then(data => data.arrayBuffer()) //console.log("data = ", data))
                .then(arrayBuffer => this._context.decodeAudioData(arrayBuffer))
                .then(decodedAudio => {this._audio[name] = decodedAudio})
            })
            .catch(error =>
                console.log(error)
            )
        // для воспроизведения звуков при старте первой игры:
        this._gainNode = this._context.createGain();
        // создаем источник буфера
        this._source = this._context.createBufferSource()
    }

    initAll(sources) {
        this.getAudioContext(); // получаем аудиоконтекст
        sources.then( sounds => { // перебираем 
            //и отправляем на инициализацию 
            for(let sound in sounds) {
                if (sounds.hasOwnProperty(sound)) {
                    this.init(sound, sounds[sound])
                }    
            }
        })
    
    }

    play(name) {
        this._gainNode = this._context.createGain();
        // создаем источник буфера
        this._source = this._context.createBufferSource()
        // устанавливаем буфер и соединяем с затуханием
        this._source.buffer = this._audio[name]
        this._source.connect(this._gainNode)
        this._gainNode.connect(this._context.destination)
        // начинаем воспроизведение
        this._source.start(this._context.currentTime)
    }
  

    stop() {
        // останавливаем с затуханием
        this._gainNode.gain.exponentialRampToValueAtTime(0.001, this._context.currentTime + 0.5);
        this._source.stop(this.context.currentTime + 0.5);
    }
}