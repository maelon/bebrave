'use strict';

class SlideLib {
    /**
    *  config: {
    *    container: dom
    *    totalTime: '00:00',
    *    sources: [{
    *      source: imgurl|domString,
    *      type: 'img'|'dom',
    *      timestamp: '00:00'
    *    }]
    *  }
    */
    constructor(config) {
        this._container = config['app'];
        this._totalTime = config['totalTime']
        this._sources = config['sources'] || [];

        this._timerId = 0;
        this._currentIdx = 0;
        this._currentTsp = '00:00';
    }
    
    /**
    * t: '00:00'
    */
    play(t) {
        t && (this._currentTsp = t);
        const idx = this._getIdxByCurTsp(this._currentTsp);
        if(this._currentIdx != idx) {
            this._showSlide(this._currentIdx);
        }

        this._timerId = setInterval(() => {
            this._currentTsp = this._formatTime2String(this._addTime(this._currentTsp, 1));
            if(this._compareTime(this._currentTsp, this._totalTime)) {
                this.stop();
                return;
            }
            const idx = this._getIdxByCurTsp(this._currentTsp);
            if(this._currentIdx != idx) {
                this._showSlide(this._currentIdx);
            }
        }, 1000);
    }

    stop() {
        clearInterval(this._timerId);

        this._timerId = 0;
        this._currentIdx = 0;
        this._currentTsp = '00:00';
        this._showSlide(this._currentIdx);
    }

    pause() {
        clearInterval(this._timerId);

        return this._currentTsp;
    }

    _showSlide(idx) {
        this._container.innerHTML = '';
        const item = this._sources[idx];
        if(item.type === 'img') {
            const img = document.createElement('img');
            img.src = item['source'];
            this._container.appendChild(img);
        } else if(item.type === 'dom') {
            this._container.innerHTML = item['source'];
        }
    }

    _getIdxByCurTsp() {
        for(let i = 0; i < this._sources.length; i++) {
            if(i != this._sources.length - 1) {
                if(this._compareTime(this._currentTsp, this._source[i].timestamp)
                    && !this._compareTime(this._currentTsp, this._source[i + 1].timestamp)
                ) {
                    return i;
                } 
                continue;
            } else {
                return this._source.length - 1;
            }
        }
    }

    _addTime(time, second) {
        const m = parseInt(time.split(':')[0]);
        const s = parseInt(time.split(':')[1]);
        return m * 60 + s + second;
    }

    _formatTime2String(second) {
        const m = parseInt(second / 60);
        const s = second % 60;
        return ('0' + m).substr(-2) + ':' + ('0' + s).substr(-2);
    }

    /**
     * ts1 >= ts2 return true
     * ts1 < ts2 return false
    */
    _compareTime(ts1, ts2) {
        return ts1.replace(':', '') >= ts2.replace(':', '');
    }
}

export default SlideLib;
