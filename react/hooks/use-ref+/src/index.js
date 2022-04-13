import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import UseRefOne from './useRefOne';
import UseRefSecond from './useRefSecond';
import UseRefThird from './useRefThird';

ReactDOM.render(
  <>
    <UseRefOne />
    <hr />
    <UseRefSecond />
    <hr />
    <UseRefThird />
  </>,
  document.getElementById('root')
);
