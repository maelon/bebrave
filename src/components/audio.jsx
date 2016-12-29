'use strict';

import React from 'react';

class Audio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'src': require('assets/audio/test.mp3')
        };
    }

    componentDidMount() {
        console.log();
    }

    render() {
        return (
            <audio src={this.state.src} controls/>
        );
    }
}

export default Audio;
