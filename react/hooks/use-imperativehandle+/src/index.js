import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import UseImperativeHandleOne from './useImperativeHandleOne';
import UseImperativeHandleSecond from './useImperativeHandleSecond';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.Fragment>
    <UseImperativeHandleOne />
    <hr />
    <UseImperativeHandleSecond />
  </React.Fragment>
);

