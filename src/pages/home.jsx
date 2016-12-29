import React from 'react';
import ReactDOM from 'react-dom';

import BvAudio from 'components/audio';

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
        <img src={require("assets/tet.jpeg")}/>
    </div>
);

ReactDOM.render(
    hello,
    document.querySelector('#app')
);
