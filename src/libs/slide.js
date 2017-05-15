'use strict';

class SlideLib {
    /**
    *  config: {
    *    container: dom
    *    sources: [{
    *      source: imgurl|domString,
    *      type: 'img'|'dom',
    *      timestamp: '00:00'
    *    }]
    *  }
    */
    constructor(config) {
        this._container = config['app'];
        this._sources = sources || [];

        this._timerId = 0;
        this._currentIdx = 0;
    }
    
    play(t) {
        this._timerId = setInterval(() => {
        }, 1000);
    }

    stop() {
    }

    pause() {
    }
}

export default SlideLib;
