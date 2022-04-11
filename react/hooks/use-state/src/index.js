import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import UseStateOne from './useStateOne';
import UseStateSecond from './useStateSecond';

ReactDOM.render(
  <div>
    <UseStateOne />
    <hr/>
    <UseStateSecond />
  </div>,
  document.getElementById('root')
);
