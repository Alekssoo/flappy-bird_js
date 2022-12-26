class AudioSource {
    drawImage({context, audio}) {}

    play() {}

    stop() {}
}

export default class WebApiAudioSource extends AudioSource {
    constructor({ context }) {
        super()
        
        this._context = context
        //this._audio
    }

    // init() {
    //     buffer
    //         .then(arrayBuffer => {this._context.decodeAudioData(arrayBuffer)})
    //         .then(decodedAudio => {this._audio = decodedAudio})
    // }

    play(buffer) {
        // получаем буфер с аудио из запроса и декодируем
        buffer
            .then(arrayBuffer => {this._context.decodeAudioData(arrayBuffer)})
            .then(decodedAudio => {this._audio = decodedAudio})

        this._gainNode = this._context.createGain();
        // создаем источник буфера
        this._source = this._context.createBufferSource()
        // устанавливаем буфер и соединяем с затуханием
        this._source.buffer = this._audio
        this._source.connect(this._gainNode)
        this._gainNode.connect(this.context.destination)
        //this.source.connect(this._context.destination)
        // начинаем воспроизведение
        this.source.start(this._context, currentTime)
    }
  

    stop() {
        //super.stop()
        // останавливаем с затуханием
        this._gainNode.gain.exponentialRampToValueAtTime(0.001, this._context.currentTime + 0.5);
        this._source.stop(this.context.currentTime + 0.5);
    }
}