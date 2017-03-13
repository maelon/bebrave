'use strict';

class Audio {
    constructor(audio) {
        this._audio = audio;
        console.log('listen', this._audio);
        this._audio.addEventListener('canplay', this._canplay);
        this._audio.addEventListener('canplaythrought', this._canplaythrough);
        this._audio.addEventListener('durationchange', this._durationchange);
        this._audio.addEventListener('emptied', this._emptied);
        this._audio.addEventListener('ended', this._ended);
        this._audio.addEventListener('loadeddata', this._loadeddata);
        this._loadedmetadata = this._loadedmetadata.bind(this);
        this._audio.addEventListener('loadedmetadata', this._loadedmetadata);
        this._audio.addEventListener('loadstart', this._loadstart);
        this._audio.addEventListener('pause', this._pause);
        this._audio.addEventListener('play', this._play);
        this._audio.addEventListener('playing', this._playing);
        this._audio.addEventListener('progress', this._progess);
        this._audio.addEventListener('ratechange', this._ratechange);
        this._audio.addEventListener('seeked', this._seeked);
        this._audio.addEventListener('seeking', this._seeking);
        this._audio.addEventListener('stalled', this._stalled);
        this._audio.addEventListener('suspend', this._suspend);
        this._audio.addEventListener('timeupdate', this._timeupdate);
        this._audio.addEventListener('valumechange', this._valumechange);
        this._audio.addEventListener('waiting', this._waiting);
        this._audio.addEventListener('error', this._error);

        this._readyCall = null;
        this._stopCall = null;
        this._playCall = null;
        this._pauseCall = null;
        this._updateCall = null;
    }

    listenReady(callback) {
        if(typeof callback === 'function') {
            this._readyCall = callback;
        }
    }

    listenStop(callback) {
        if(typeof callback === 'function') {
            this._stopCall = callback;
        }
    }

    listenPause(callback) {
        if(typeof callback === 'function') {
            this._pauseCall = callback;
        }
    }

    listenPlay(callback) {
        if(typeof callback === 'function') {
            this._playCall = callback;
        }
    }

    listenUpdate(callback) {
        if(typeof callback === 'function') {
            this._updateCall = callback;
        }
    }

    play(t) {
        if(t !== undefined && typeof a === 'number') {
            this._audio.currentTime = t;
        }
        this._audio.play();
    }

    stop() {
        this._audio.pause();
        this._audio.currentTime = 0;
    }

    pause(t) {
        if(t !== undefined && typeof a === 'number') {
            this._audio.currentTime = t;
        }
        this._audio.pause();
    }

    _canplay() {
    }

    _canplaythrought(e) {
        console.log('canplaythrought', e);
    }

    _durationchange(e) {
        console.log('durationchange', e);
    }

    _emptied(e) {
        console.log('emptied', e);
    }

    _ended(e) {
        console.log('ended', e);
    }

    _loadeddata(e) {
        console.log('loadeddata', e);
    }

    _loadedmetadata(e) {
        console.log('loademetaddata', this._readyCall, e);
        if(this._readyCall) {
            const a = e.target;
            this._readyCall({
                'src': a.currentSrc,
                'duration': a.duration,
                'volume': a.volume,
                'title': a.title,
                'lang': a.lang
            });
        }
    }

    _loadstart(e) {
        console.log('loadstart', e);
    }

    _pause(e) {
        console.log('pause', e);
    }

    _play(e) {
        console.log('play', e);
    }

    _playing(e) {
        console.log('playing', e);
    }

    _progress(e) {
        console.log('progress', e);
    }

    _ratechange(e) {
        console.log('ratechange', e);
    }

    _seeked(e) {
        console.log('seeked', e);
    }

    _seeking(e) {
        console.log('seeking', e);
    }

    _stalled(e) {
        console.log('stalled', e);
    }

    _suspend(e) {
        console.log('suspend', e);
    }

    _timeupdate(e) {
        console.log('timeupdate', e);
    }

    _valumechange(e) {
        console.log('valumechange', e);
    }

    _waiting(e) {
        console.log('waiting', e);
    }

    _error(e) {
        console.log('error', e);
    }
}

export default Audio;
