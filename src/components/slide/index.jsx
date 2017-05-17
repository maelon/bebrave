'use strict';

import React from 'react';
import jutils from 'jutils';

import SlideLib from 'libs/slide';
import './index.css';

class Slide extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this._dom = null;
        this._slideLib = null;
    }

    componentDidMount() {
        const config = {
            'container': this._dom,
            'totalTime': '01:00',
            'sources': [
                {
                    'type': 'img',
                    'source': require('assets/tet.jpeg'),
                    'timestamp': '00:00'
                },
                {
                    'type': 'dom',
                    'source': '<p>page1</p>',
                    'timestamp': '00:12'
                },
                {
                    'type': 'img',
                    'source': require('assets/tet.jpeg'),
                    'timestamp': '00:33'
                },
                {
                    'type': 'dom',
                    'source': '<p>page2</p>',
                    'timestamp': '00:48'
                }
            ]
        };
        this._slideLib = new SlideLib(config);
        this._slideLib.play();
    }

    render() {
        return (
            <div ref={dom => { this._dom = dom; }} className="slide-container"></div>
        );
    }
}

export default Slide;
