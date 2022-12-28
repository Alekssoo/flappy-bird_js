class AudioSource {
    drawImage({context, audio}) {}

    play() {}

    stop() {}
}

export default class WebApiAudioSource extends AudioSource {
    constructor() {
        super()
        
        //this._context = getAudioContext() //new AudioContext()
        //this._audio
    }

    getAudioContext() {
        AudioContext = window.AudioContext || window.webkitAudioContext;
        this._context = new AudioContext();
        //return audioContext;
      }

    init(src) {
                // получаем проверенный путь к файлу с аудио из запроса и декодируем
                this.getAudioContext();
                src.then(
                    (source) => {
                        //console.log("source = ", source)
                        fetch(source)
                        .then(data => data.arrayBuffer())
                        .then(arrayBuffer => this._context.decodeAudioData(arrayBuffer))
                        .then(decodedAudio => {this._audio = decodedAudio})
                    })
        
                this._gainNode = this._context.createGain();
                // создаем источник буфера
                this._source = this._context.createBufferSource()
                // устанавливаем буфер и соединяем с затуханием
                // this._source.buffer = this._audio
                // this._source.connect(this._gainNode)
                // this._gainNode.connect(this._context.destination)
    }

    play() {
        // // получаем проверенный путь к файлу с аудио из запроса и декодируем
        // this.getAudioContext();
        // src.then(
        //     (source) => {
        //         console.log("source = ", source)
        //         fetch(source)
        //         .then(data => data.arrayBuffer())
        //         .then(arrayBuffer => this._context.decodeAudioData(arrayBuffer))
        //         .then(decodedAudio => {this._audio = decodedAudio})
        //     })

        this._gainNode = this._context.createGain();
        // создаем источник буфера
        this._source = this._context.createBufferSource()
        // устанавливаем буфер и соединяем с затуханием
        this._source.buffer = this._audio
        this._source.connect(this._gainNode)
        this._gainNode.connect(this._context.destination)
        //console.log("destination = ",this._context.destination)
        // начинаем воспроизведение
        this._source.start(this._context.currentTime)
    }
  

    stop() {
        // останавливаем с затуханием
        this._gainNode.gain.exponentialRampToValueAtTime(0.001, this._context.currentTime + 0.5);
        this._source.stop(this.context.currentTime + 0.5);
    }
}