'use strict';

import React from 'react';
import jutils from 'jutils';

class Slide extends React.component {
    constructor(props) {
        super(props);

        this.state = {};

        this._dom = null;
        this._slideLib = null;
    }

    componentDidMount() {
        this._slideLib = new SlideLib({
            
        });
    }

    render() {
        <div ref={dom => { this._dom = dom; }}></div>
    }
}

export default Slide;
