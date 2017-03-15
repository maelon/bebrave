'use strict';

import React from 'react';

import AudioLib from 'libs/audio';
import './audio.css';

class Audio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //'src': require('assets/audio/test.mp3'),
            'src': 'http://static.fe.ptdev.cn/test.mp3',
            'audioState': 'init', //init load ready play pause stop
            'audioCurrentTime': 0,
        };
        this._audio = null;
        this._audioLib = null;
        this._audioUIProgress = null;
    }

    componentDidMount() {
        this._audioLib = new AudioLib(this._audio);
        this._audioUpdate = this._audioUpdate.bind(this);
        this._audioLib.listenUpdate(this._audioUpdate);
        this._audioLib.listenError(this._audioError);
    }

    componentWillUnmount() {
        this.state = null;
        this._audio = null;
        this._audioLib = null;
        this._audioUIProgress = null;
    }

    render() {
        return (
            <div className="audio-container">
                <audio ref={audio => this._audio = audio} src={this.state.src}/>
                <canvas ref={canvas => this._audioUIProgress = canvas} className="audio-state" width="200" height="200"/>
                <span className="audio-time">{this._formatTime(this.state.currentTime)}</span>
            </div>
        );
    }

    /**
    * {
    *     src: mp3 url
    *     duration: total time (second)
    *     volume: current volume
    *     title: xxxx
    *     lang: xxxx
    *     state: 'play', 'pause', 'stop'
    *     currentTime: time (second)
    * }
    */
    _audioUpdate(info) {
        console.log('audio update', info);
        if(info.state === 'init') {
        } else if(info.state === 'load') {
        } else if(info.state === 'ready') {
        } else if(info.state === 'pause') {
        } else if(info.state === 'play') {
        } else if(info.state === 'stop') {
        }
    }

    _audioError(error) {
    }

    _updateAudioProgress(precent) {
    }

    //t单位秒
    _formatTime(t) {

    }

    _drawAudioBtnInit() {
        const ctx = this._audioUIProgress.getContext('2d');
        ctx.clearRect(0, 0, this._audioUIProgress.width, this._audioUIProgress.height);
    }

    _drawAudioBtnLoad() {
    }

    _drawAudioBtnReady() {
    }

    _drawAudioBtnPlay() {
    }

    _drawAudioBtnPause() {
    }

    _drawAudioBtnStop() {
    }
}

export default Audio;
