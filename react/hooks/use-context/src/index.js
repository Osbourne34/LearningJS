import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import UseContextOne from './useContextOne';
import UseContextSecond from './useContextSecond';

ReactDOM.render(
  <>
    <UseContextOne />
    <hr />
    <UseContextSecond />
  </>
  ,
  document.getElementById('root')
);
