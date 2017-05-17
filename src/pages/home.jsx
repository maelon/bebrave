import React from 'react';
import ReactDOM from 'react-dom';

import BvAudio from 'components/audio';
import BvSlide from 'components/slide';

const username = (
    <i> 
        <strong> world </strong>
    </i>
);
const hello = (
    <div> 
        hello { username } 
        <br/>
        <BvAudio/>
        <BvSlide/>
        <img src={require("assets/tet.jpeg")}/>
    </div>
);

ReactDOM.render(
    hello,
    document.querySelector('#app')
);
