'use strict';

import React from 'react';
import jutils from 'jutils';

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

        this._drawAudioBtnInit();
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
                <canvas ref={canvas => this._audioUIProgress = canvas} className="audio-state" width="100" height="100"/>
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
        const cvsW = this._audioUIProgress.width;
        const cvsH = this._audioUIProgress.height;
        const ctx = this._audioUIProgress.getContext('2d');

    }

    _drawAudioBtnLoad() {
        const cvsW = this._audioUIProgress.width;
        const cvsH = this._audioUIProgress.height;
        const ctx = this._audioUIProgress.getContext('2d');
        const count = 25;
        const speed = 6;
        let rotation = 270 * (Math.PI / 180);
        ctx.clearRect(0, 0, cvsW, cvsH);
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.75)';

        const loop = () => {
            jutils.requestAnimFrame.call(null, loop);
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
            ctx.fillRect(0, 0, 100, 100);
            rotation += speed / 100;                  

            ctx.save();
            ctx.globalCompositeOperation = 'source-over';
            ctx.translate(50, 50);
            ctx.rotate(rotation); 
            let i = count;
            while(i--) {               
                ctx.beginPath();
                ctx.arc(0, 0, i + (Math.random() * 25), Math.random(), Math.PI / 3 + (Math.random() / 12), false);
                ctx.stroke();
            } 
            ctx.restore();                     
        };
        loop();
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
