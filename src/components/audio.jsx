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
        this._audioReady = this._audioReady.bind(this);
        this._audioLib.listenReady(this._audioReady);
        this._audioLib.listenUpdate(this._audioTimeUpdate);
    }

    componentWillUnmount() {
        this.state = null;
    }

    render() {
        return (
            <div className="audio-container">
                <audio ref={audio => this._audio = audio} src={this.state.src}/>
                <canvas ref={canvas => this._audioUIProgress = canvas} className="audio-progress"/>
                <span className="audio-time">{this._formatTime(this.state.currentTime)}</span>
            </div>
        );
    }

    _audioReady(metadata) {
        console.log('audio ready', metadata);
    }

    _audioTimeUpdate() {
        console.log('audio update');
    }

    _updateAudioProgress(precent) {
    }

    _formatTime(t) {
    }
}

export default Audio;
