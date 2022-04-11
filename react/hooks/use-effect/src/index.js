import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import UseEffectOne from './useEffectOne';
import UseEffectSecond from './useEffectSecond';

ReactDOM.render(
    <>
        <UseEffectOne />
        <hr />
        <UseEffectSecond />
    </>,
    document.getElementById('root')
);

