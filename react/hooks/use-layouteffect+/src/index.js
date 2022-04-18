import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import UseLayoutEffectOne from './useLayoutEffectOne';
import UseLayoutEffectSecond from './useLayoutEffectSecond';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <UseLayoutEffectOne />
    <UseLayoutEffectSecond />
  </React.Fragment>
);

