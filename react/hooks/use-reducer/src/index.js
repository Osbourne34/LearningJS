import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import UseReducerOne from './useReducerOne';
import UseReducerSecond from './useReducerSecond';
import UseReducerThird from './useReducesThird';

ReactDOM.render(
  <>
    <UseReducerOne />
    <UseReducerSecond />
    <UseReducerThird />
  </>
  ,
  document.getElementById('root')
);