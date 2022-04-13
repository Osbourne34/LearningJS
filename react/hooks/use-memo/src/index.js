import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import UseMemoOne from './useMemoOne';
import UseMemoSecond from './useMemoSecond';

ReactDOM.render(
    <>
        <UseMemoOne />
        <hr />
        <UseMemoSecond />
    </>, document.getElementById('root'));