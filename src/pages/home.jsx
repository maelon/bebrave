import React from 'react';
import ReactDOM from 'react-dom';

const username = (
    <i> 
        <strong> world </strong>
    </i>
);
const hello = <div> hello { username } </div>;

ReactDOM.render(
    hello,
    document.querySelector('#app')
);
